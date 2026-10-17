import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function savePortraitPlugin() {
  return {
    name: 'save-portrait-plugin',
    configureServer(server: any) {
      server.middlewares.use('/api/save-portrait', (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => { body += chunk; });
          req.on('end', () => {
            try {
              const { image } = JSON.parse(body);
              if (image) {
                const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
                const targetDir = path.resolve(__dirname, 'public');
                if (!fs.existsSync(targetDir)) {
                  fs.mkdirSync(targetDir, { recursive: true });
                }
                const targetPath = path.resolve(targetDir, 'portrait.jpg');
                fs.writeFileSync(targetPath, Buffer.from(base64Data, 'base64'));

                // Also overwrite the studio portrait file so Vite builds pick it up directly
                const assetPath = path.resolve(__dirname, 'src/assets/images/zaira_salvador_studio_portrait_1791900381465.jpg');
                fs.writeFileSync(assetPath, Buffer.from(base64Data, 'base64'));

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, url: '/portrait.jpg' }));
                return;
              }
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: String(err) }));
              return;
            }
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'No image provided' }));
          });
          return;
        }
        res.statusCode = 404;
        res.end();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), savePortraitPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
