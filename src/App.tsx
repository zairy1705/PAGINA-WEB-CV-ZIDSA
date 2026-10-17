/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Specialties } from './components/Specialties';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { CertificationsGallery } from './components/CertificationsGallery';
import { Documents } from './components/Documents';
import { CVDownload } from './components/CVDownload';
import { Contact } from './components/Contact';
import { RecruiterWhatsAppBox } from './components/RecruiterWhatsAppBox';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CVViewerModal } from './components/CVViewerModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const handleOpenCvModal = () => {
    setIsCvModalOpen(true);
  };

  const handleCloseCvModal = () => {
    setIsCvModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Sticky Navigation Header */}
      <Header onOpenCvModal={handleOpenCvModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero / Portada */}
        <Hero onOpenCvModal={handleOpenCvModal} />

        {/* Sobre Mí (4 Pilares) */}
        <About />

        {/* Experiencia Profesional (Timeline interactivo con 9 puestos) */}
        <ExperienceTimeline />

        {/* Áreas de Especialización (8 Tarjetas interactivas) */}
        <Specialties />

        {/* Competencias Técnicas (Dashboard) */}
        <TechnicalSkills />

        {/* Logros Destacados (Acreditación INACAL 5 métodos + Estandarización de procesos) */}
        <Achievements />

        {/* Formación Académica (UNMSM Maestría y UNT Título & Bachiller) */}
        <Education />

        {/* Certificaciones y Especializaciones (Galería filtrable con 16 certificados, zoom y navegación) */}
        <CertificationsGallery />

        {/* Documentación Profesional (Credenciales públicas con política de privacidad) */}
        <Documents />

        {/* Sección de Descarga de CV */}
        <CVDownload onOpenCvModal={handleOpenCvModal} />

        {/* Sección Contacto & Formulario */}
        <Contact />

        {/* Cuadro Interactivo para Reclutadores por WhatsApp (+51 920 221 581) */}
        <RecruiterWhatsAppBox />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top button */}
      <BackToTop />

      {/* Botón Flotante de WhatsApp para Reclutadores (920 221 581) */}
      <FloatingWhatsApp />

      {/* Interactive CV Document Modal */}
      <CVViewerModal isOpen={isCvModalOpen} onClose={handleCloseCvModal} />
    </div>
  );
}
