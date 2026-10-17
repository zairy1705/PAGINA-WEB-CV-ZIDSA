export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  department?: string;
  period: string;
  isCurrent?: boolean;
  highlight?: boolean;
  category: 'Salud y Agua' | 'Gestión Ambiental' | 'Minería' | 'Laboratorios' | 'Control de Calidad';
  responsibilities: string[];
}

export interface SpecialtyItem {
  number: string;
  title: string;
  iconName: string;
  summary: string;
  details: string[];
  keyTools: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level?: string; note?: string }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  badge?: string;
  standard?: string;
  summary: string;
  methods?: string[];
  impactPoints: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  details?: string;
  credential?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  institution: string;
  hours?: number;
  year: string;
  category: 'LABORATORIOS' | 'CALIDAD' | 'AMBIENTE' | 'MINERÍA' | 'AGUA' | 'SEGURIDAD' | 'GESTIÓN';
  topics: string[];
  verificationCode?: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  institution: string;
  type: string;
  issueDate: string;
  status: string;
  description: string;
  publicId?: string;
}

export const PERSONAL_INFO = {
  fullName: 'ZAIRA INGRID DJANIRA SALVADOR AMAYA',
  shortName: 'ZAIRA SALVADOR AMAYA',
  title: 'INGENIERA QUÍMICA',
  subtitle: 'ESPECIALISTA EN LABORATORIOS, CALIDAD Y GESTIÓN AMBIENTAL',
  cip: '225124',
  cipStatus: 'Colegiada y Habilitada',
  cipCollege: 'Colegio de Ingenieros del Perú - CD La Libertad',
  yearsOfExperience: '+9',
  email: 'salvadoramayazaira@gmail.com',
  phone: '+51 920 221 581',
  location: 'Trujillo, La Libertad, Perú',
  summary:
    'Ingeniera Química colegiada y habilitada con más de 9 años de experiencia en laboratorios de ensayo, análisis instrumental, gestión de calidad, gestión ambiental, minería y vigilancia sanitaria de la calidad del agua.',
  extendedBio:
    'Especialista técnica con trayectoria multidisciplinaria en entidades públicas de salud y energía y minas (GERESA, GREMH La Libertad, DIRIS Lima Centro), organismos de investigación (INIA) y laboratorios transnacionales de ensayo geoquímico y ambiental (ALS Perú, Consorcio Minero Horizonte, SEDALIB). Experta en implementación de la norma NTP-ISO/IEC 17025:2017, técnicas instrumentales ICP-OES, ICP-MS y Absorción Atómica, evaluación de instrumentos ambientales IGAFOM y DIA, y vigilancia integral de agua para consumo humano.',
  coreAreas: [
    {
      num: '01',
      title: 'LABORATORIOS Y ANÁLISIS INSTRUMENTAL',
      desc: 'Dominio de técnicas de espectrometría ICP-OES, ICP-MS y Absorción Atómica, digestión de muestras y ensayos fisicoquímicos.',
      icon: 'FlaskConical',
    },
    {
      num: '02',
      title: 'CALIDAD Y ACREDITACIÓN',
      desc: 'Implementación de NTP-ISO/IEC 17025:2017, validación de métodos, estimación de incertidumbre, auditorías y acreditación ante INACAL.',
      icon: 'ShieldCheck',
    },
    {
      num: '03',
      title: 'GESTIÓN AMBIENTAL Y MINERÍA',
      desc: 'Evaluación técnica de IGAFOM, DIA, planes de cierre, fiscalización ambiental, formalización minera y manejo integral de residuos.',
      icon: 'Leaf',
    },
    {
      num: '04',
      title: 'AGUA, SANEAMIENTO Y SALUD AMBIENTAL',
      desc: 'Vigilancia sanitaria de agua para consumo humano, monitoreo microbiológico e hidrobiológico, supervisión de prestadores y educación comunitaria.',
      icon: 'Droplets',
    },
  ],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-01',
    role: 'SERVICIO ESPECIALIZADO EN TRABAJO COMUNITARIO',
    organization: 'Gobierno Regional de La Libertad',
    department: 'Gerencia Regional de Salud – GERESA / Red Integrada de Salud Gran Chimú',
    period: 'Junio 2026 – Actualidad',
    isCurrent: true,
    category: 'Salud y Agua',
    responsibilities: [
      'Diagnóstico de condiciones sanitarias y acceso a agua y saneamiento en el ámbito territorial.',
      'Identificación y priorización de zonas vulnerables a exposición por metales pesados.',
      'Elaboración de mapas de riesgo sanitario y mapeo de actores clave.',
      'Diseño y ejecución de planes de intervención territorial multisectorial.',
      'Desarrollo de programas de educación sanitaria para la población.',
      'Articulación estratégica con gobiernos locales, JASS, establecimientos de salud y organizaciones comunitarias.',
      'Capacitación en agua segura, saneamiento básico, higiene, disposición sanitaria de excretas, aguas residuales y manejo de residuos sólidos.',
    ],
  },
  {
    id: 'exp-02',
    role: 'SERVICIO DE EVALUACIÓN DE INSTRUMENTOS DE GESTIÓN AMBIENTAL',
    organization: 'Gobierno Regional de La Libertad',
    department: 'Gerencia Regional de Energía, Minas e Hidrocarburos – GREMH',
    period: 'Julio 2025 – Diciembre 2025',
    category: 'Gestión Ambiental',
    responsibilities: [
      'Evaluación exhaustiva de estudios e instrumentos de gestión ambiental del sector minero.',
      'Elaboración de informes técnicos de conformidad y observaciones.',
      'Análisis integral de expedientes ambientales conforme a la normativa vigente.',
      'Verificación rigurosa de requisitos legales, técnicos y ambientales aplicables.',
      'Elaboración de informes especializados requeridos por el Ministerio Público, Policía Nacional del Perú (PNP), OEFA y otras instituciones de fiscalización.',
      'Orientación y asistencia técnica personalizada a administrados y titulares del sector minero.',
    ],
  },
  {
    id: 'exp-03',
    role: 'ESPECIALISTA TÉCNICO DE FORMALIZACIÓN MINERA',
    organization: 'Gobierno Regional de La Libertad – GREMH',
    period: 'Agosto 2024 – Diciembre 2024',
    category: 'Minería',
    responsibilities: [
      'Evaluación técnica de instrumentos de gestión ambiental para pequeña minería y minería artesanal (IGAFOM correctivo y preventivo).',
      'Supervisión y fiscalización en campo de labores mineras en proceso de formalización.',
      'Orientación técnica a mineros artesanales y pequeños productores mineros para el cumplimiento de estándares ambientales.',
      'Gestión y seguimiento de expedientes ambientales vinculados al proceso de formalización minera integral.',
    ],
  },
  {
    id: 'exp-04',
    role: 'SERVICIO ESPECIALIZADO EN INGENIERÍA QUÍMICA',
    organization: 'DIRIS LIMA CENTRO',
    department: 'Dirección de Salud Ambiental e Inocuidad Alimentaria – Saneamiento Básico',
    period: 'Abril 2023 – Mayo 2024',
    category: 'Salud y Agua',
    responsibilities: [
      'Vigilancia sanitaria continua de la calidad del agua para consumo humano.',
      'Supervisión y control técnico de sistemas de abastecimiento de agua potable.',
      'Inspección y supervisión técnica a redes de SEDAPAL, pozos de extracción, camiones cisterna y surtidores de agua.',
      'Toma de muestras analíticas para ensayos microbiológicos, hidrobiológicos y parasitológicos conforme a protocolos sanitarios.',
      'Supervisión y fiscalización de empresas prestadoras de servicios de saneamiento ambiental.',
      'Elaboración de informes técnicos sanitarios de vigilancia y cumplimiento normativo.',
      'Capacitación técnica comunitaria e institucional en agua segura, tecnologías de tratamiento y procesos de desinfección.',
    ],
  },
  {
    id: 'exp-05',
    role: 'ESPECIALISTA DE LABORATORIO',
    organization: 'INIA – Instituto Nacional de Innovación Agraria',
    department: 'Estación Experimental Vista Florida',
    period: 'Febrero 2022 – Marzo 2023',
    category: 'Laboratorios',
    responsibilities: [
      'Análisis fisicoquímico exhaustivo de muestras de suelos agrícolas y aguas de regadío.',
      'Participación activa y protagónica en el proceso de acreditación de métodos de ensayo ante el INACAL.',
      'Elaboración y emisión de reportes técnicos de resultados analíticos.',
      'Aseguramiento y control de la calidad analítica bajo lineamientos de la norma ISO/IEC 17025.',
    ],
  },
  {
    id: 'exp-06',
    role: 'ESPECIALISTA DE LABORATORIO',
    organization: 'ALS LS PERÚ S.A.C.',
    period: 'Enero 2021 – Marzo 2021',
    category: 'Laboratorios',
    responsibilities: [
      'Análisis analítico de matrices ambientales: suelos, aguas (superficiales, subterráneas, efluentes) y calidad de aire.',
      'Operación y calibración de espectrómetros de emisión óptica con plasma acoplado inductivamente (ICP-OES).',
      'Operación de espectrometría de masas con plasma acoplado inductivamente (ICP-MS).',
      'Análisis por espectrofotometría de Absorción Atómica (AAS) por llama y horno de grafito.',
      'Ejecución de métodos analíticos fisicoquímicos convencionales.',
      'Control de calidad analítico continuo (blancos, duplicados, estándares certificados de referencia y cartas de control).',
      'Gestión y control de inventario de insumos químicos fiscalizados y reactivos de alta pureza.',
      'Capacitación técnica a personal analista y técnicos de preparación.',
    ],
  },
  {
    id: 'exp-07',
    role: 'COORDINADOR DE LABORATORIO SENIOR / ANALISTA QUÍMICO',
    organization: 'ALS PERÚ S.A.C.',
    period: 'Junio 2015 – Diciembre 2019',
    highlight: true,
    category: 'Laboratorios',
    responsibilities: [
      'Liderazgo y dirección técnica de equipos multidisciplinarios de analistas, químicos y preparadores de muestras.',
      'Gestión operativa integral de laboratorio geoquímico y ambiental de alta productividad.',
      'Participación y atención en auditorías internas y externas de acreditación bajo la norma ISO/IEC 17025:2017.',
      'Optimización sistemática de procesos analíticos, reduciendo tiempos de respuesta y costos operativos sin comprometer la exactitud.',
      'Desarrollo e implementación de metodologías analíticas de digestión ácida asistida y por microondas.',
      'Operación avanzada, calibración y mantenimiento de equipos instrumentales ICP-MS e ICP-OES.',
      'Aseguramiento estricto del control de calidad analítica (QA/QC), cálculo de incertidumbres y validación de métodos.',
      'Garantía de la trazabilidad metrológica total de los resultados analíticos emitidos.',
      'Supervisión del cumplimiento estricto de normas de seguridad industrial, salud ocupacional y manejo seguro de sustancias químicas peligrosas.',
    ],
  },
  {
    id: 'exp-08',
    role: 'ANALISTA QUÍMICO JR. – LABORATORIO DE PLANTA',
    organization: 'Consorcio Minero Horizonte S.R.L.',
    period: 'Mayo 2014 – Febrero 2015',
    category: 'Minería',
    responsibilities: [
      'Determinación cuantitativa de Oro (Au) y Plata (Ag) en minerales, concentrados y relaves.',
      'Ejecución de ensayos al fuego (Fire Assay) con copelación y fundición gravimétrica.',
      'Análisis instrumental por Absorción Atómica para control de leyes en mineral y soluciones de proceso.',
      'Análisis químico de soluciones cianuradas de lixiviación (cianuro libre, cianuro WAD).',
      'Control analítico en tiempo real de variables críticas de procesos metalúrgicos.',
      'Determinación de metales base (Cu, Pb, Zn, Fe) en matrices metalúrgicas complejas.',
      'Control y monitoreo analítico de cianuro total y metales pesados en efluentes industriales previo a vertimiento.',
    ],
  },
  {
    id: 'exp-09',
    role: 'ANALISTA / PRACTICANTE',
    organization: 'SEDALIB S.A.',
    department: 'Laboratorio de Control de Calidad',
    period: 'Marzo 2013 – Junio 2013',
    category: 'Salud y Agua',
    responsibilities: [
      'Control de calidad físico-químico en planta de tratamiento de agua potable.',
      'Análisis rutinario y de vigilancia de agua potable conforme a los Estándares de Calidad Ambiental y Reglamento de Agua.',
      'Análisis fisicoquímico de aguas residuales domésticas e industriales.',
      'Determinación de Demanda Bioquímica de Oxígeno (DBO₅) y Demanda Química de Oxígeno (DQO).',
      'Determinación de cloruros, dureza total y cálcica, sulfatos, turbiedad y cloro residual libre.',
      'Verificación metrológica, calibración y mantenimiento de equipos analíticos y de campo (multiparámetros, turbidímetros).',
      'Monitoreo in situ y muestreo en puntos de red de distribución de agua potable.',
    ],
  },
];

export const SPECIALTIES: SpecialtyItem[] = [
  {
    number: '01',
    title: 'LABORATORIOS DE ENSAYO',
    iconName: 'FlaskConical',
    summary:
      'Gestión, operación y aseguramiento metrológico en laboratorios geoquímicos, agronómicos y ambientales bajo estándares internacionales.',
    details: [
      'Operación y supervisión de laboratorios de alta demanda analítica.',
      'Preparación de muestras complejas mediante digestiones ácidas multielementales.',
      'Implementación de protocolos de Buenas Prácticas de Laboratorio (BPL).',
      'Gestión segura de insumos químicos fiscalizados y materiales peligrosos.',
    ],
    keyTools: ['Digestión ácida', 'Ensayos fisicoquímicos', 'QA/QC', 'Trazabilidad metrológica'],
  },
  {
    number: '02',
    title: 'ANÁLISIS INSTRUMENTAL',
    iconName: 'Activity',
    summary:
      'Dominio especializado de espectrometría multielemental y absorción atómica para detección de trazas y ultratrazas.',
    details: [
      'Espectrometría de emisión óptica por plasma acoplado inductivamente (ICP-OES).',
      'Espectrometría de masas con plasma acoplado inductivamente (ICP-MS).',
      'Espectrofotometría de Absorción Atómica (AAS) por llama y vapor frío.',
      'Calibración instrumental, resolución de interferencias espectrales y curvas de calibración.',
    ],
    keyTools: ['ICP-OES', 'ICP-MS', 'AAS Llama/Horno', 'Espectrofotometría UV-Vis'],
  },
  {
    number: '03',
    title: 'CALIDAD Y ACREDITACIÓN',
    iconName: 'Award',
    summary:
      'Liderazgo en acreditación de métodos de ensayo y auditorías de sistemas de gestión según NTP-ISO/IEC 17025:2017.',
    details: [
      'Diseño e implantación de sistemas de gestión de calidad en laboratorios.',
      'Validación y verificación de métodos de ensayo analíticos.',
      'Estimación y cálculo de incertidumbre de medición según guías EURACHEM / GUM.',
      'Atención y ejecución de auditorías internas y de organismos acreditadores (INACAL).',
    ],
    keyTools: ['NTP-ISO/IEC 17025:2017', 'Validación de métodos', 'Incertidumbre', 'Auditoría interna'],
  },
  {
    number: '04',
    title: 'GESTIÓN AMBIENTAL',
    iconName: 'Leaf',
    summary:
      'Evaluación técnica de instrumentos ambientales, cumplimiento de normativa sectorial y fiscalización ambiental.',
    details: [
      'Evaluación de Declaraciones de Impacto Ambiental (DIA) y planes de cierre.',
      'Revisión técnica de expedientes ambientales para autoridades competentes.',
      'Elaboración de informes periciales para Ministerio Público, PNP y OEFA.',
      'Manejo integral de residuos sólidos industriales y peligrosos.',
    ],
    keyTools: ['DIA', 'Legislación ambiental', 'Fiscalización OEFA', 'Gestión de residuos'],
  },
  {
    number: '05',
    title: 'MINERÍA Y FORMALIZACIÓN',
    iconName: 'Mountain',
    summary:
      'Evaluación de IGAFOM, fiscalización de operaciones mineras y asistencia técnica a la pequeña minería y minería artesanal.',
    details: [
      'Evaluación técnica de IGAFOM correctivo y preventivo.',
      'Supervisión y fiscalización en campo de labores mineras artesanales.',
      'Acompañamiento a administrados en el proceso de formalización minera integral.',
      'Gestión de pasivos ambientales mineros y control de efluentes metalúrgicos.',
    ],
    keyTools: ['IGAFOM', 'Formalización minera', 'Supervisión en campo', 'Ensayos al fuego Au/Ag'],
  },
  {
    number: '06',
    title: 'MONITOREO AMBIENTAL',
    iconName: 'Radar',
    summary:
      'Planificación y ejecución de monitoreos integrales de calidad de agua, aire, suelo, ruido y efluentes según protocolos vigentes.',
    details: [
      'Diseño de planes de monitoreo ambiental y redes de muestreo representativas.',
      'Toma de muestras in situ con preservación reglamentaria de cadena de custodia.',
      'Medición de parámetros de campo con equipos multiparámetros calibrados.',
      'Comparación analítica contra Estándares de Calidad Ambiental (ECA) y Límites Máximos Permisibles (LMP).',
    ],
    keyTools: ['ECA y LMP', 'Cadena de custodia', 'Muestreo de aguas', 'Monitoreo de suelos y aire'],
  },
  {
    number: '07',
    title: 'CALIDAD DEL AGUA',
    iconName: 'Droplets',
    summary:
      'Vigilancia sanitaria, control de potabilización, análisis de efluentes y diagnóstico de metales pesados en fuentes de agua.',
    details: [
      'Vigilancia sanitaria del agua de consumo humano según D.S. 031-2010-SA.',
      'Supervisión técnica de sistemas de captación, reservorios, pozos y cisternas.',
      'Toma de muestras microbiológicas, hidrobiológicas, parasitológicas y metales pesados.',
      'Control de parámetros fisicoquímicos: pH, turbiedad, cloro residual, dureza, sulfatos y metales.',
    ],
    keyTools: ['D.S. 031-2010-SA', 'Cloro residual libre', 'DBO / DQO', 'Supervisión de prestadores'],
  },
  {
    number: '08',
    title: 'SANEAMIENTO Y SALUD AMBIENTAL',
    iconName: 'HeartPulse',
    summary:
      'Intervención comunitaria, saneamiento básico rural y urbano, mapeo de riesgos sanitarios y capacitación técnica.',
    details: [
      'Diagnóstico de vulnerabilidad sanitaria en poblaciones rurales y periurbanas.',
      'Fortalecimiento de capacidades a Juntas Administradoras de Servicios de Saneamiento (JASS).',
      'Articulación multisectorial entre salud, gobiernos locales y organizaciones comunitarias.',
      'Diseño e impartición de talleres de agua segura, higiene y disposición de excretas.',
    ],
    keyTools: ['JASS', 'Educación sanitaria', 'Intervención territorial', 'Mapas de riesgo'],
  },
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    category: 'ANÁLISIS INSTRUMENTAL',
    iconName: 'Atom',
    skills: [
      { name: 'ICP-OES', note: 'Espectrometría de emisión óptica con plasma acoplado inductivamente' },
      { name: 'ICP-MS', note: 'Espectrometría de masas con plasma acoplado inductivamente' },
      { name: 'Absorción Atómica (AAS)', note: 'Llama, horno de grafito y generador de hidruros' },
      { name: 'Preparación y digestión de muestras', note: 'Digestión ácida multielemental y asistida' },
      { name: 'Ensayos al Fuego (Fire Assay)', note: 'Determinación gravimétrica de Au y Ag' },
      { name: 'Espectrofotometría UV-Vis', note: 'Análisis colorimétrico de nutrientes e iones' },
    ],
  },
  {
    category: 'CALIDAD Y ACREDITACIÓN',
    iconName: 'ShieldCheck',
    skills: [
      { name: 'NTP-ISO/IEC 17025:2017', note: 'Requisitos generales para la competencia de laboratorios' },
      { name: 'Control y Aseguramiento de la Calidad (QA/QC)', note: 'Cartas de control, duplicados, MRC' },
      { name: 'Validación y verificación de métodos', note: 'Linealidad, precisión, exactitud, LD y LC' },
      { name: 'Estimación de Incertidumbre de Medición', note: 'Cálculo según EURACHEM / Guía GUM' },
      { name: 'Auditorías de Laboratorio', note: 'Formación y ejecución de auditorías internas y externas' },
      { name: 'Buenas Prácticas de Laboratorio (BPL)', note: 'Seguridad química y trazabilidad' },
    ],
  },
  {
    category: 'GESTIÓN AMBIENTAL Y MINERÍA',
    iconName: 'Globe',
    skills: [
      { name: 'IGAFOM (Correctivo y Preventivo)', note: 'Formulación, evaluación y fiscalización' },
      { name: 'Declaración de Impacto Ambiental (DIA)', note: 'Evaluación técnica de expedientes' },
      { name: 'Planes de Cierre de Minas y Pasivos', note: 'Análisis de estabilidad física y química' },
      { name: 'Monitoreo Ambiental (Agua, Aire, Suelo, Ruido)', note: 'Protocolos nacionales y ECA/LMP' },
      { name: 'Legislación y Fiscalización Ambiental', note: 'Competencias OEFA, MINAM, MINEM, GERESA' },
      { name: 'Gestión Integral de Residuos Sólidos', note: 'D.L. 1278 y manejo de residuos peligrosos' },
    ],
  },
  {
    category: 'HERRAMIENTAS DIGITALES',
    iconName: 'Cpu',
    skills: [
      { name: 'Excel Avanzado', note: 'Tratamiento de datos analíticos, tablas dinámicas y modelos' },
      { name: 'Power BI', note: 'Dashboards de control de calidad y vigilancia sanitaria' },
      { name: 'SAP Business One', note: 'Gestión de inventarios, reactivos e insumos químicos' },
      { name: 'Microsoft Office', note: 'Elaboración de informes técnicos y documentación institucional' },
      { name: 'Sistemas LIMS', note: 'Sistemas de Información y Gestión de Laboratorios' },
    ],
  },
  {
    category: 'IDIOMAS',
    iconName: 'Languages',
    skills: [
      { name: 'Español', note: 'Nativo' },
      { name: 'Portugués', note: 'Avanzado – Certificación Internacional Celpe-Bras' },
      { name: 'Inglés', note: 'Nivel Intermedio' },
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-01',
    title: 'ACREDITACIÓN DE MÉTODOS DE ENSAYO ANTE INACAL',
    badge: 'Logro Principal Institucional',
    standard: 'NTP-ISO/IEC 17025:2017',
    summary:
      'Participación y liderazgo técnico en la validación, aseguramiento metrológico y sustentación exitosa para la acreditación formal de cinco métodos de ensayo analíticos ante el Instituto Nacional de Calidad (INACAL) en el Instituto Nacional de Innovación Agraria (INIA).',
    methods: [
      'Determinación de pH en suelos',
      'Determinación de pH en aguas',
      'Determinación de Conductividad Eléctrica en suelos',
      'Determinación de Conductividad Eléctrica en aguas',
      'Determinación de Materia Orgánica en suelos',
    ],
    impactPoints: [
      'Acreditación oficial conforme a la norma técnica peruana NTP-ISO/IEC 17025:2017.',
      'Diseño y validación experimental de protocolos analíticos y cálculo de incertidumbre de medición.',
      'Sustentación técnica solvente ante el equipo auditor del INACAL.',
      'Habilitación del laboratorio para emisión de informes con valor oficial nacional.',
    ],
  },
  {
    id: 'ach-02',
    title: 'ESTANDARIZACIÓN Y OPTIMIZACIÓN DE PROCESOS DE LABORATORIO',
    badge: 'Eficiencia y Liderazgo Operativo',
    standard: 'Gestión de Laboratorios de Alta Demanda',
    summary:
      'Liderazgo en la estandarización de procesos y actividades de laboratorio, contribuyendo a la calidad de los resultados y a la reducción de tiempos y reprocesos.',
    impactPoints: [
      'Implementación de procedimientos operativos estandarizados (POE) en preparación y análisis de muestras.',
      'Optimización de tiempos de respuesta en análisis multielementales por ICP-OES e ICP-MS.',
      'Reducción sustancial de reensayos y reprocesos mediante robustecimiento del control de calidad interno.',
      'Capacitación y mentoría técnica a equipos analistas y de preparación de muestras.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-01',
    degree: 'MAESTRÍA EN GESTIÓN DE OPERACIONES Y SERVICIOS LOGÍSTICOS',
    institution: 'Universidad Nacional Mayor de San Marcos – UNMSM',
    period: '2018 – 2019',
    status: 'EGRESADA',
    details:
      'Formación de posgrado orientada a la optimización de procesos operativos, gestión de la cadena de suministro, control de costos, calidad de servicios y toma de decisiones estratégicas.',
  },
  {
    id: 'edu-02',
    degree: 'INGENIERÍA QUÍMICA',
    institution: 'Universidad Nacional de Trujillo – UNT',
    period: '2008 – 2014',
    status: 'TITULADA Y COLEGIADA',
    details:
      'Título Profesional otorgado en 2016. Grado Académico de Bachiller obtenido en 2014. Especialización en operaciones unitarias, química analítica, balances de materia y energía y control ambiental.',
    credential: 'Colegiada y habilitada, CIP N.º 225124 (Consejo Departamental La Libertad).',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-01',
    name: 'Gestión y Manejo Integral de Residuos Sólidos',
    institution: 'Colegio de Ingenieros del Perú / Institución Especializada',
    hours: 120,
    year: '2024',
    category: 'AMBIENTE',
    topics: ['D.L. 1278', 'Residuos Peligrosos', 'Planes de Minimización', 'Economía Circular'],
    verificationCode: 'GMRS-120-PE',
  },
  {
    id: 'cert-02',
    name: 'Monitoreo Ambiental',
    institution: 'Centro de Capacitación y Especialización Ambiental',
    hours: 150,
    year: '2024',
    category: 'AMBIENTE',
    topics: ['ECA y LMP', 'Protocolos ANA/OEFA', 'Calidad de Agua y Aire', 'Suelos y Ruido'],
    verificationCode: 'MON-AMB-150',
  },
  {
    id: 'cert-03',
    name: 'Gestión de la Calidad en Laboratorios ISO 17025:2017',
    institution: 'Instituto de Formación en Calidad y Metrología',
    hours: 400,
    year: '2023',
    category: 'CALIDAD',
    topics: ['ISO/IEC 17025:2017', 'Gestión de Riesgos', 'Acreditación INACAL', 'Trazabilidad Metrológica'],
    verificationCode: 'ISO17025-400',
  },
  {
    id: 'cert-04',
    name: 'IGAFOM: Formulación, Revisión y Fiscalización',
    institution: 'Escuela de Postgrado en Minería y Medio Ambiente',
    hours: 50,
    year: '2024',
    category: 'MINERÍA',
    topics: ['IGAFOM Correctivo', 'IGAFOM Preventivo', 'Formalización Minera', 'Inspección de Campo'],
    verificationCode: 'IGAFOM-50-MIN',
  },
  {
    id: 'cert-05',
    name: 'Especialización en Análisis Instrumental ICP/AAS',
    institution: 'Sociedad Química / Laboratorio Especializado',
    hours: 60,
    year: '2022',
    category: 'LABORATORIOS',
    topics: ['ICP-OES', 'ICP-MS', 'Absorción Atómica', 'Interferencias Espectrales'],
    verificationCode: 'ICP-AAS-060',
  },
  {
    id: 'cert-06',
    name: 'Fiscalización Ambiental en Minería e Hidrocarburos',
    institution: 'Instituto Superior de Gestión Ambiental',
    hours: 90,
    year: '2023',
    category: 'MINERÍA',
    topics: ['Fiscalización OEFA', 'Pasivos Ambientales', 'Infracciones y Sanciones', 'Informes Técnicos'],
    verificationCode: 'FISC-MIN-090',
  },
  {
    id: 'cert-07',
    name: 'Diplomado en Análisis Químico Metalúrgico de Minerales',
    institution: 'Cámara Minera / Entidad Académica Universitaria',
    hours: 672,
    year: '2021',
    category: 'MINERÍA',
    topics: ['Ensayos al Fuego', 'Leyes de Au y Ag', 'Lixiviación y Cianuración', 'AAS en Metalurgia'],
    verificationCode: 'DIP-AQM-672',
  },
  {
    id: 'cert-08',
    name: 'Diplomado en Sistemas de Gestión de la Calidad ISO/IEC 17025:2017',
    institution: 'Centro de Altos Estudios en Calidad y Acreditación',
    hours: 480,
    year: '2022',
    category: 'CALIDAD',
    topics: ['Diseño Documental', 'Validación de Métodos', 'Incertidumbre', 'Auditoría Interna'],
    verificationCode: 'DIP-ISO17025-480',
  },
  {
    id: 'cert-09',
    name: 'Diplomado en Gestión de Seguridad SSOMA',
    institution: 'Instituto de Seguridad y Salud en el Trabajo',
    hours: 720,
    year: '2022',
    category: 'SEGURIDAD',
    topics: ['Ley 29783', 'IPERC', 'Seguridad en Laboratorios', 'Manejo de Materiales Peligrosos'],
    verificationCode: 'DIP-SSOMA-720',
  },
  {
    id: 'cert-10',
    name: 'Especialización en Legislación, Fiscalización y Gestión Ambiental',
    institution: 'Centro de Capacitación Jurídico-Ambiental',
    year: '2023',
    category: 'AMBIENTE',
    topics: ['Marco Regulatorio Nacional', 'SEIA', 'Procedimientos Administrativos Sancionadores'],
    verificationCode: 'ESP-LEG-AMB',
  },
  {
    id: 'cert-11',
    name: 'Especialista en Tratamiento de Aguas Industriales',
    institution: 'Asociación Peruana de Ingeniería Sanitaria y Ambiental',
    year: '2023',
    category: 'AGUA',
    topics: ['Coagulación-Floculación', 'Desinfección', 'Neutralización de Efluentes', 'Reúso'],
    verificationCode: 'ESP-AGUAS-IND',
  },
  {
    id: 'cert-12',
    name: 'Monitoreo Ambiental de la Calidad del Agua, Aire, Suelo y Ruido',
    institution: 'Instituto de Ciencias Ambientales',
    year: '2022',
    category: 'AGUA',
    topics: ['Muestreo según Protocolos', 'D.S. 004-2017-MINAM', 'Equipos de Campo', 'Preservación'],
    verificationCode: 'MON-MULT-ECA',
  },
  {
    id: 'cert-13',
    name: 'Estimación de la Incertidumbre de Medición',
    institution: 'Organismo de Metrología y Calidad',
    year: '2021',
    category: 'CALIDAD',
    topics: ['Guía GUM', 'Guía EURACHEM/CITAC', 'Presupuestos de Incertidumbre', 'Incertidumbre Expandida'],
    verificationCode: 'INC-MED-EUR',
  },
  {
    id: 'cert-14',
    name: 'Interpretación y Formación de Auditor Interno ISO 9001:2015',
    institution: 'Entidad Certificadora Internacional',
    year: '2020',
    category: 'CALIDAD',
    topics: ['Enfoque por Procesos', 'Pensamiento Basado en Riesgos', 'Técnicas de Auditoría ISO 19011'],
    verificationCode: 'AUD-ISO9001-20',
  },
  {
    id: 'cert-15',
    name: 'Especialización en Excel',
    institution: 'Centro de Computación y Tecnologías de Información',
    year: '2021',
    category: 'GESTIÓN',
    topics: ['Fórmulas Avanzadas', 'Tablas Dinámicas', 'Automatización de Cálculos Analíticos'],
    verificationCode: 'EXC-AVZ-MOD',
  },
  {
    id: 'cert-16',
    name: 'Inteligencia Artificial aplicada a Ingeniería Ambiental',
    institution: 'Instituto de Tecnologías Emergentes y Sostenibilidad',
    year: '2024',
    category: 'AMBIENTE',
    topics: ['Modelos predictivos de dispersión', 'Análisis de datos de monitoreo', 'Optimización de recursos'],
    verificationCode: 'IA-ING-AMB-24',
  },
];

export const PUBLIC_DOCUMENTS: DocumentItem[] = [
  {
    id: 'doc-01',
    title: 'Título Profesional de Ingeniera Química',
    institution: 'Universidad Nacional de Trujillo – UNT',
    type: 'Título Universitario de Grado',
    issueDate: '2016',
    status: 'Registrado en SUNEDU',
    description: 'Documento oficial acreditativo del grado y título profesional universitario.',
  },
  {
    id: 'doc-02',
    title: 'Carnet y Registro de Colegiatura Profesional',
    institution: 'Colegio de Ingenieros del Perú – CD La Libertad',
    type: 'Colegiatura Oficial',
    issueDate: '2018',
    status: 'CIP N.º 225124',
    description: 'Acreditación de ejercicio profesional como Ingeniera Química en el Perú.',
  },
  {
    id: 'doc-03',
    title: 'Certificado de Habilidad Profesional',
    institution: 'Colegio de Ingenieros del Perú',
    type: 'Habilidad Profesional',
    issueDate: 'Vigente',
    status: 'HABILITADA',
    description: 'Constancia oficial de habilitación vigente para firma y ejercicio de funciones técnicas.',
  },
  {
    id: 'doc-04',
    title: 'Grado Académico de Bachiller en Ingeniería Química',
    institution: 'Universidad Nacional de Trujillo – UNT',
    type: 'Grado Académico',
    issueDate: '2014',
    status: 'Registrado en SUNEDU',
    description: 'Grado académico previo al título profesional.',
  },
  {
    id: 'doc-05',
    title: 'Constancia de Egresada de Maestría',
    institution: 'Universidad Nacional Mayor de San Marcos – UNMSM',
    type: 'Estudios de Posgrado',
    issueDate: '2019',
    status: 'Concluido',
    description: 'Maestría en Gestión de Operaciones y Servicios Logísticos.',
  },
  {
    id: 'doc-06',
    title: 'Certificación de Idioma Portugués Celpe-Bras',
    institution: 'Ministerio de Educación de Brasil / Institución Oficial',
    type: 'Certificación Internacional de Idioma',
    issueDate: 'Oficial',
    status: 'Nivel Avanzado',
    description: 'Certificado de Proficiencia en Lengua Portuguesa para Extranjeros.',
  },
];
