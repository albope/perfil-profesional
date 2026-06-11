/**
 * Datos centralizados del portfolio
 * Facilita el mantenimiento y actualización de la información
 */

// Información personal
export const personalInfo = {
    name: "Alberto Bort",
    title: "Technical Project Manager & IT Business Analyst",
    description: "Technical Project Manager y Analista de Negocio TI con más de 9 años en el sector TI, entre banca, transporte público, movilidad y SaaS. Dirijo la entrega de software del discovery al go-live y la operación, uniendo las necesidades de negocio con la ejecución técnica.",
    email: "albertobort@gmail.com",
    phone: "+34 676 110 159",
    location: "Valencia, España",
    cvUrl: "/Alberto_Bort_CV_ESP_2026.pdf",
    social: {
        github: "https://github.com/albope",
        linkedin: "https://www.linkedin.com/in/albertobort"
    }
};

// Certificaciones (según CV 2026)
export const certifications = [
    { name: "ISTQB Foundation Level", icon: "award" },
    { name: "Scrum Master (Scrum Manager)", icon: "check" },
    { name: "IELTS 8.0 / C2", icon: "globe" }
];

// Idiomas (según CV 2026; catalán figura en LinkedIn — TODO: confirmar si incluirlo)
export const languages = [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "C2 · IELTS 8.0" },
    { name: "Francés", level: "Profesional (B2)" }
];

// Especialidades destacadas
export const specialties = [
    "Agentes de IA",
    "Liderazgo Técnico",
    "Arquitectura de Sistemas",
    "Transformación Digital",
    "Gestión de Stakeholders",
    "Integración de Sistemas",
    "Metodologías Ágiles",
    "Estrategia de Calidad (QA)",
    "CI/CD & DevOps",
    "Gobernanza TI",
    "Gestión de Equipos"
];

// Microcopy de la interfaz (kicker / título / lead por página, CTAs)
export const uiText = {
    hero: {
        kicker: "Valencia · Banca · Transporte público · Movilidad · SaaS",
        roles: [
            "IT Project Manager",
            "IT Business Analyst",
            "End-to-End Project Delivery",
            "Digital Transformation Driver"
        ],
        thesis: "Dirijo la entrega de software de principio a fin —del discovery al go-live y la operación—, uniendo las necesidades de negocio con la ejecución técnica.",
        support: "Más de 9 años en el sector TI entre banca, transporte público, movilidad y SaaS. Mantengo alineados a clientes, prioridades, alcance, plazos y equipos de entrega, combinando una base técnica en QA, APIs y análisis de datos con la gestión de proyectos end-to-end.",
        ctaPrimary: "Descargar CV",
        ctaSecondary: "Contactar",
        credentialsTitle: "Certificaciones e idiomas",
        specialtiesTitle: "Especialidades"
    },
    experience: {
        kicker: "Trayectoria",
        title: "Experiencia profesional",
        lead: "De analista QA a Project Manager: casi una década de responsabilidad creciente sobre sistemas donde fallar no es una opción."
    },
    skills: {
        kicker: "Competencias",
        title: "Dominio técnico y criterio de gestión",
        lead: "Cuatro dominios con niveles honestos: lo que domino, lo que practico y lo que estoy consolidando."
    },
    projects: {
        kicker: "Casos de estudio",
        title: "Proyectos con resultados",
        lead: "Contexto, rol, decisiones y resultados de los proyectos que he liderado.",
        contextLabel: "Contexto y rol",
        resultsLabel: "Resultados",
        linkLabel: "Ver referencia"
    },
    contact: {
        kicker: "Contacto",
        title: "Hablemos",
        lead: "Disponible para liderar proyectos de entrega, análisis y calidad de software desde Valencia.",
        cta: "Enviar mensaje",
        modalTitle: "Envíame un mensaje",
        trustLine: "Publico sobre IA, automatización y transformación digital en"
    },
    education: {
        title: "Formación académica"
    },
    footer: {
        availability: "Abierto a nuevos retos"
    },
    notFound: {
        title: "Esta página no existe",
        message: "El contenido que buscas se ha movido o nunca estuvo aquí.",
        cta: "Volver al inicio"
    }
};

// Evidencia del hero (el "9+" sigue el headline de LinkedIn; el CV PDF aún dice 8+)
export const heroStats = [
    { value: 9, suffix: "+", label: "Años en el sector TI", animated: true },
    { value: 4, suffix: "", label: "Sectores: banca, transporte, movilidad y SaaS", animated: true },
    { value: "6–10", label: "Personas por equipo liderado", animated: false }
];

// Experiencia profesional
export const experienceData = [
    {
        company: "Ubimia",
        companyLink: "https://www.ubimia.com",
        sector: "SaaS y software a medida · Cross-market",
        period: "Mar 2026 – Presente",
        roles: [
            {
                id: "ubimia-1",
                title: "IT Operations Project Manager",
                date: "Mar 2026 - Presente",
                location: "Comunidad Valenciana, España (Híbrido)",
                description: [
                    "Dirijo la entrega end-to-end de proyectos SaaS y de software a medida en uDigital (Ubimia), como interlocutor principal del cliente y responsable de alcance, plazos, calidad y rentabilidad.",
                    "Lidero discovery, definición de alcance, planificación y entrega desde el kickoff hasta el go-live.",
                    "Traduzco las necesidades del cliente en prioridades claras, planes de sprint y requisitos accionables.",
                    "Gestiono la comunicación con el cliente: expectativas, decisiones, peticiones de cambio y escalados.",
                    "Coordino al equipo de desarrollo (planificación, seguimiento y rutinas de desarrollo individual) y superviso rentabilidad, previsiones, facturación y reporting de la cartera de proyectos.",
                    "Acompaño la formación de usuarios finales, la preparación del go-live y la transición a operación."
                ],
                skills: ["Project Management", "SaaS", "Scrum", "Gestión de Cliente", "Forecasting & Billing", "Agentes de IA"]
            }
        ]
    },
    {
        company: "ETRA",
        companyLink: "https://www.grupoetra.com",
        sector: "Movilidad y transporte público",
        period: "Dic 2021 – Mar 2026",
        roles: [
            {
                id: "etra-1",
                title: "Technical Project Lead",
                date: "May 2023 - Mar 2026",
                location: "Comunidad Valenciana, España",
                description: [
                    "Lideré la implantación de soluciones digitales para FGV (Metrovalencia), ATMV y EMT: planificación, alcance y coordinación de recursos para entregar en plazo y con calidad.",
                    "Definí requisitos técnicos y funcionales y elaboré especificaciones, asegurando la integración con las infraestructuras existentes.",
                    "Gestioné el backlog de producto, los riesgos técnicos y la interlocución regular con stakeholders (FGV, MLO, Enyse, EMT, NTT).",
                    "Coordiné despliegues remotos y presenciales de Sistemas de Ayuda a la Explotación (SAE) y definí los planes de mantenimiento en entornos productivos.",
                    "Supervisé pruebas de sistema, despliegues y QA, y resolví incidencias en pruebas y producción minimizando el impacto operativo.",
                    "Impartí sesiones formativas y elaboré manuales de usuario y documentación técnica."
                ],
                skills: ["Project Management", "Stakeholder Mng.", "Agile", "Risk Management", "System Integration", "QA Leadership"]
            },
            {
                id: "etra-2",
                title: "Software QA Engineer & Technical BA",
                date: "Dic 2021 - May 2023",
                location: "Valencia, España",
                description: [
                    "Diseñé y ejecuté pruebas de aceptación de usuario (UAT), integración y componentes para sistemas de transporte público en producción.",
                    "Desarrollé planes de prueba detallados a partir de los requisitos, con gestión y trazabilidad en JIRA.",
                    "Gestioné y resolví defectos e incidencias priorizando la continuidad del servicio.",
                    "Lideré reuniones técnicas con clientes clave (FGV, MLO, Enyse, NTT)."
                ],
                skills: ["JIRA", "Postman", "SOAP UI", "SQL Server", "MongoDB", "Jenkins", "Linux/Bash", "Git"]
            }
        ]
    },
    {
        company: "Sopra Banking Software",
        companyLink: "https://www.soprabanking.com",
        sector: "Banca · Medios de pago",
        period: "Abr 2018 – Dic 2021",
        roles: [
            {
                id: "sopra-1",
                title: "QA Team Leader",
                date: "May 2021 - Dic 2021",
                location: "Valencia, España",
                description: [
                    "Lideré un equipo de QA de 6–10 personas en proyectos de medios de pago (cheques, SWIFT, SEPA), ejerciendo también como Business Analyst y Application Manager.",
                    "Definí la estrategia de validación y los planes de prueba funcional y técnica de cada entrega.",
                    "Aprobé el paso a producción de los entregables (Go/No-Go), validando el cumplimiento de los estándares de calidad.",
                    "Supervisé la monitorización, la planificación y el soporte funcional durante el ciclo de proyecto."
                ],
                skills: ["HPQC", "JIRA", "Team Leadership", "Payments", "Business Analysis"]
            },
            {
                id: "sopra-2",
                title: "QA Automation Engineer",
                date: "Jul 2020 - Dic 2021",
                location: "Valencia, España",
                description: [
                    "Desarrollé y mantuve escenarios de regresión automatizados con T-Tool, reduciendo el tiempo de regresión un 40–50% en cada versión.",
                    "Integré la automatización en el ciclo de validación, optimizando los lanzamientos."
                ],
                skills: ["Test Automation", "T-Tool", "Regression Testing", "Scripting"]
            },
            {
                id: "sopra-3",
                title: "QA IT Business Analyst",
                date: "Abr 2018 - May 2021",
                location: "Valencia, España",
                description: [
                    "Revisé especificaciones y diseño técnico, garantizando la trazabilidad y la cobertura completa de los requisitos.",
                    "Desarrollé planes de prueba con HPQC, con seguimiento detallado de defectos y riesgos.",
                    "Mantuve y evolucioné los escenarios de prueba a lo largo de los ciclos de validación."
                ],
                skills: ["HPQC", "SOAP UI", "Oracle DB", "UML", "Unix"]
            }
        ]
    },
    {
        company: "Payever Gmbh",
        companyLink: "https://payever.de/",
        sector: "SaaS · E-commerce",
        period: "Sep 2017 – Mar 2018",
        roles: [
            {
                id: "payever-1",
                title: "Project Assistant (Multifunctional)",
                date: "Sep 2017 - Mar 2018",
                location: "Hamburgo, Alemania",
                description: [
                    "Rol multifuncional en una startup SaaS respaldada por Banco Santander y Microsoft Ventures: gestión de proyectos, marketing y ventas e-commerce.",
                    "Elaboré la estrategia de precios para las aplicaciones de negocio de la plataforma de comercio.",
                    "Identifiqué y comuniqué las principales fuentes de errores que afectaban al rendimiento del desarrollo, con interlocución directa con los fundadores."
                ],
                skills: ["Project Management", "Pricing Strategy", "Error Analysis", "E-commerce", "SaaS"]
            }
        ]
    }
];

// Proyectos destacados
export const projects = [
    {
        name: "Agentes de IA para clientes cross-market",
        company: "Ubimia · uDigital",
        description: "Entrega de soluciones basadas en agentes de IA dentro de la unidad uDigital de Ubimia, integradas en proyectos SaaS y de software a medida para clientes de distintos sectores.",
        responsibilities: [
            "Dirección del proyecto de principio a fin: discovery, alcance, planificación y entrega hasta el go-live.",
            "Traducción de las necesidades del cliente en requisitos accionables y planes de sprint para el equipo de desarrollo.",
            "Gestión de la comunicación con el cliente: expectativas, decisiones, cambios y escalados.",
            "Acompañamiento del go-live: formación de usuarios y transición a operación."
        ],
        // TODO: confirmar resultados/métricas publicables (clientes nombrables, alcance, impacto) antes de añadirlos
        results: [],
        skills: ["Agentes de IA", "SaaS", "Gestión de Proyectos", "Análisis Funcional", "Sprint Planning"],
        link: null
    },
    {
        name: "JIRA Report Generator",
        company: "ETRA (Herramienta Interna)",
        description: "Herramienta para estandarizar incidencias en JIRA, optimizando la trazabilidad y comunicación entre departamentos mediante reportes estructurados.",
        responsibilities: [
            "Desarrollo completo de la aplicación, desde el concepto inicial hasta el despliegue.",
            "Diseño de una interfaz intuitiva para convertir el contenido de los tickets en informes estructurados.",
            "Implementación de la lógica para generar y descargar los reportes en formatos Markdown y Word."
        ],
        results: [
            "Estandarización de los reportes de JIRA con un formato claro y consistente.",
            "Reducción significativa del tiempo de creación de informes de incidencias.",
            "Mejora en la transferencia de conocimiento y en el seguimiento de errores dentro del equipo.",
            "Facilidad para adjuntar reportes en auditorías (formato Word) y en comentarios de JIRA (Markdown)."
        ],
        skills: ["Next.js", "TypeScript", "TailwindCSS", "React", "Markdown", "JIRA"],
        link: "https://reportes-jira-eid.vercel.app/"
    },
    {
        name: "Sistema SAE en Línea 10 de Metrovalencia",
        company: "ETRA",
        description: "Despliegue y control del Sistema de Ayuda a la Explotación (SAE) en la nueva Línea 10 (Alacant-Natzaret) de Metrovalencia.",
        responsibilities: [
            "Análisis de requisitos y definición de especificaciones técnicas.",
            "Desarrollo de casos de prueba y ejecución de pruebas funcionales y de regresión.",
            "Coordinación con el equipo de desarrollo para la resolución de defectos y mejoras.",
            "Gestión de incidencias en entornos de prueba y producción usando JIRA.",
            "Soporte técnico y funcional durante el despliegue y mantenimiento del sistema."
        ],
        results: [
            "Implementación exitosa del sistema SAE, mejorando la eficiencia operativa.",
            "Reducción de defectos en producción gracias a pruebas exhaustivas.",
            "Aumento de la satisfacción del cliente (FGV) por la calidad y entrega a tiempo."
        ],
        skills: ["JIRA", "SQL", "Postman", "MongoDB", "Gestión de Proyectos", "QA", "Análisis de Incidencias"],
        link: "https://www.fgv.es/la-generalitat-adjudica-la-instalacion-de-los-sistemas-de-senalizacion-y-comunicaciones-de-la-linea-10-y-de-la-red-tranviaria-de-metrovalencia/"
    },
    {
        name: "Digitalización del Transporte Público Interurbano de Metrobus",
        company: "ETRA",
        description: "Digitalización del transporte público metropolitano de Valencia, integrando sistemas para mejorar la eficiencia junto a NTT DATA.",
        responsibilities: [
            "Análisis de requisitos y definición de especificaciones para el proyecto de digitalización.",
            "Coordinación con NTT DATA y otros stakeholders para asegurar la correcta ejecución del proyecto.",
            "Supervisión de los procesos de prueba y calidad para garantizar la fiabilidad del sistema.",
            "Gestión de incidencias y resolución de problemas durante la fase de implementación."
        ],
        results: [
            "Despliegue exitoso de soluciones digitales que mejoraron la eficiencia del transporte.",
            "Reducción de costes operativos mediante la automatización e integración de sistemas.",
            "Coordinación exitosa que llevó a la finalización del proyecto en los plazos establecidos."
        ],
        skills: ["Gestión de Proyectos", "Análisis Técnico", "Stakeholder Management", "QA", "Integración de Sistemas"],
        link: "https://es.nttdata.com/newsfolder/ntt-data-digitaliza-el-transporte-publico-del-area-metropolitana-de-valencia"
    },
    {
        name: "Creación de Entorno de Pruebas Común para QA",
        company: "Sopra Banking Software",
        description: "Implementación de un entorno de pruebas unificado para validar evolutivos y ejecutar regresiones automatizadas.",
        responsibilities: [
            "Gestión del proyecto para la creación y mantenimiento del entorno de pruebas.",
            "Coordinación del análisis de requisitos y definición de especificaciones técnicas.",
            "Supervisión de la configuración y mantenimiento de servidores de prueba y bases de datos asociadas.",
            "Liderazgo de reuniones técnicas y de proyecto con stakeholders para revisar el progreso."
        ],
        results: [
            "Implementación de un entorno que mejoró la eficiencia operativa del equipo de QA.",
            "Reducción significativa del tiempo de pruebas gracias a la automatización.",
            "Disminución de defectos en producción a través de una gestión de calidad más rigurosa."
        ],
        skills: ["Project Management", "SQL", "JIRA", "Postman", "QA", "Test Automation", "Liderazgo"],
        link: null
    }
];

// Niveles de competencia: expert (8+ años), advanced (5-8 años), intermediate (2-5 años)
export const skillCategories = [
    {
        id: "tech-stack",
        title: "Stack Técnico & Arquitectura",
        icon: "cpu",
        description: "Fundamentos técnicos sólidos para la toma de decisiones arquitectónicas.",
        skills: [
            { name: "SQL & NoSQL (MongoDB)", level: "expert" },
            { name: "REST & SOAP APIs", level: "expert" },
            { name: "Integración de Sistemas", level: "advanced" },
            { name: "XML / JSON", level: "expert" },
            { name: "Unix / Linux Systems", level: "advanced" },
            { name: "Análisis de Logs", level: "advanced" },
            { name: "Jenkins (CI/CD)", level: "intermediate" },
            { name: "Configuración de Entornos", level: "advanced" },
            // Python figura en el CV 2026 y en el máster de EDEM — TODO: confirmar nivel
            { name: "Python (análisis de datos)", level: "intermediate" },
            // Entrega de proyectos con agentes de IA en Ubimia desde Mar 2026 — TODO: confirmar nivel
            { name: "Agentes de IA (delivery)", level: "intermediate" }
        ]
    },
    {
        id: "leadership",
        title: "Liderazgo y Gestión",
        icon: "users",
        description: "Dirección de equipos y alineación estratégica de proyectos.",
        skills: [
            { name: "Liderazgo Técnico", level: "advanced" },
            { name: "Gestión de Stakeholders", level: "expert" },
            { name: "Planificación de Proyectos (Roadmap)", level: "advanced" },
            { name: "Gestión de Riesgos Técnicos", level: "advanced" },
            { name: "Metodologías Ágiles (Scrum/Kanban)", level: "expert" },
            { name: "Mentoring de Equipos", level: "advanced" },
            { name: "Gestión del Cambio", level: "intermediate" },
            // Responsabilidad de P&L/forecasting asumida en Ubimia (Mar 2026) — TODO: confirmar nivel
            { name: "Rentabilidad y Forecasting", level: "intermediate" }
        ]
    },
    {
        id: "analysis",
        title: "Ingeniería de Requisitos",
        icon: "chart",
        description: "Puente entre necesidades de negocio y soluciones técnicas.",
        skills: [
            { name: "Análisis de Sistemas", level: "expert" },
            { name: "SDLC Management", level: "expert" },
            { name: "Definición de Requisitos Técnicos", level: "expert" },
            { name: "Optimización de Procesos", level: "advanced" },
            { name: "User Stories & Backlog", level: "expert" },
            { name: "Documentación Técnica", level: "advanced" },
            { name: "Modelado de Datos", level: "advanced" }
        ]
    },
    {
        id: "quality",
        title: "Estrategia de Calidad (QA)",
        icon: "shield",
        description: "Aseguramiento de la fiabilidad y robustez del software entregado.",
        skills: [
            { name: "Estrategia de Pruebas", level: "expert" },
            { name: "Automatización (Visión)", level: "intermediate" },
            { name: "Validación End-to-End", level: "expert" },
            { name: "Gestión de Defectos (Jira)", level: "expert" },
            { name: "UAT Coordination", level: "expert" },
            { name: "Pruebas de Regresión", level: "expert" }
        ]
    }
];

// Información de contacto para el componente Contact
export const contactInfo = [
    {
        icon: "mapPin",
        label: "Ubicación",
        value: "Valencia, España",
        action: null,
        canCopy: false
    },
    {
        icon: "mail",
        label: "Email",
        value: "albertobort@gmail.com",
        action: "mailto:albertobort@gmail.com",
        canCopy: true
    },
    {
        icon: "phone",
        label: "Teléfono",
        value: "+34 676 110 159",
        action: "tel:+34676110159",
        canCopy: true
    }
];

// Educación
export const educationData = [
    {
        id: "edem",
        institution: "EDEM Escuela de Empresarios",
        degree: "Máster en Data Analytics",
        field: "Tecnología de la Información",
        date: "2019 - 2020",
        grade: "8.61 / 10",
        highlight: "Python, SQL, Google Cloud, Elasticsearch, Airflow, Machine Learning"
    },
    {
        id: "lancaster",
        institution: "Lancaster University",
        degree: "MSc International Business & Strategy",
        date: "2016 - 2017",
        grade: "Distinction",
        highlight: "Top 10 UK University"
    },
    {
        id: "uv",
        institution: "Universitat de València",
        degree: "BSc International Business",
        field: "Mención en Organización y Marketing",
        date: "2012 - 2016",
        highlight: "Grupo de Alto Rendimiento Académico. Erasmus+ en Coventry University (First Class Honours)"
    }
];

// Links de navegación
export const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/experience", label: "Experiencia" },
    { path: "/skills", label: "Habilidades" },
    { path: "/projects", label: "Proyectos" },
    { path: "/contact", label: "Contacto" }
];
