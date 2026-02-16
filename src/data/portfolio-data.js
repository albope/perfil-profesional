/**
 * Datos centralizados del portfolio
 * Facilita el mantenimiento y actualización de la información
 */

// Información personal
export const personalInfo = {
    name: "Alberto Bort",
    title: "Technical Project Lead & IT Business Analyst",
    description: "Technical Project lead y Analista de Negocio TI con más de 8 años de experiencia en banca, transporte y movilidad. Transformo necesidades complejas en soluciones de software robustas, combinando visión técnica y estratégica.",
    email: "albertobort@gmail.com",
    phone: "+34 676 110 159",
    location: "Valencia, España",
    cvUrl: "/Alberto_Bort_CV_ESP_2025.pdf",
    social: {
        github: "https://github.com/albope",
        linkedin: "https://www.linkedin.com/in/albertobort"
    }
};

// Certificaciones
export const certifications = [
    { name: "ISTQB Foundation Level", icon: "award" },
    { name: "Scrum Manager Nivel 1", icon: "check" }
];

// Especialidades destacadas
export const specialties = [
    "Análisis de Requisitos",
    "Testing de APIs",
    "Metodologías Ágiles",
    "QA Funcional",
    "SQL/NoSQL",
    "Stakeholders Mng."
];

// Experiencia profesional
export const experienceData = [
    {
        company: "ETRA",
        companyLink: "https://www.grupoetra.com",
        roles: [
            {
                id: "etra-1",
                title: "Technical Project Lead",
                date: "May 2023 - Presente",
                location: "Comunidad Valenciana, España",
                description: [
                    "Liderazgo en la implementación de soluciones digitales para el transporte público (ATMV y Metrovalencia).",
                    "Definición de requisitos técnicos y funcionales, asegurando una integración fluida con infraestructuras existentes.",
                    "Gestión del backlog de producto, riesgos técnicos y comunicación con stakeholders.",
                    "Coordinación entre equipos de desarrollo, operaciones y comerciales.",
                    "Supervisión de pruebas de sistema, despliegues y QA.",
                    "Resolución de incidencias y soporte técnico durante la implementación."
                ],
                skills: ["Project Management", "Stakeholder Mng.", "Agile", "Risk Management", "System Integration", "QA Leadership"]
            },
            {
                id: "etra-2",
                title: "Software QA Engineer & Technical BA",
                date: "Dic 2021 - May 2023",
                location: "Valencia, España",
                description: [
                    "Diseño y ejecución de pruebas de Aceptación de Usuario (UAT), integración y componentes.",
                    "Desarrollo de planes de prueba detallados basados en requisitos, utilizando JIRA.",
                    "Gestión y resolución de defectos e incidencias para minimizar el impacto operativo.",
                    "Liderazgo en reuniones técnicas con clientes clave (FGV, MLO, Enyse, NTT)."
                ],
                skills: ["JIRA", "Postman", "SOAP UI", "SQL Server", "MongoDB", "Jenkins", "Linux/Bash", "Git"]
            }
        ]
    },
    {
        company: "Sopra Banking Software",
        companyLink: "https://www.soprabanking.com",
        roles: [
            {
                id: "sopra-1",
                title: "QA Team Leader",
                date: "May 2021 - Dic 2021",
                location: "Valencia, España",
                description: [
                    "Business Analyst y Application Manager en proyectos de medios de pago (Cheques, SWIFT, SEPA).",
                    "Liderazgo de equipo de 6-10 personas, diseñando estrategias de prueba y asegurando la calidad.",
                    "Supervisión de monitorización, planificación y soporte funcional."
                ],
                skills: ["HPQC", "JIRA", "Team Leadership", "Payments", "Business Analysis"]
            },
            {
                id: "sopra-2",
                title: "QA Automation Engineer",
                date: "Jul 2020 - Dic 2021",
                location: "Valencia, España",
                description: [
                    "Desarrollo de scripts automatizados, reduciendo el tiempo de regresión en un 40-50%.",
                    "Uso de T-Tool Software para automatización y optimización de lanzamientos."
                ],
                skills: ["Test Automation", "T-Tool", "Regression Testing", "Scripting"]
            },
            {
                id: "sopra-3",
                title: "QA IT Business Analyst",
                date: "Abr 2018 - May 2021",
                location: "Valencia, España",
                description: [
                    "Revisión de especificaciones y desarrollo de planes de prueba con HPQC.",
                    "Seguimiento de defectos y participación en ciclos de validación.",
                    "Mantenimiento y evolución de escenarios de prueba."
                ],
                skills: ["HPQC", "SOAP UI", "Oracle DB", "UML", "Unix"]
            }
        ]
    },
    {
        company: "Payever Gmbh",
        companyLink: "https://payever.de/",
        roles: [
            {
                id: "payever-1",
                title: "Project Assistant (Multifunctional)",
                date: "Sep 2017 - Mar 2018",
                location: "Hamburgo, Alemania",
                description: [
                    "Rol multifuncional en start-up tecnológica (SaaS): gestión de proyectos, marketing y soporte.",
                    "Estrategia de precios para aplicaciones de negocio.",
                    "Análisis de errores que afectaban el rendimiento del desarrollo."
                ],
                skills: ["Project Management", "Pricing Strategy", "Error Analysis", "E-commerce", "SaaS"]
            }
        ]
    }
];

// Proyectos destacados
export const projects = [
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
            { name: "Configuración de Entornos", level: "advanced" }
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
            { name: "Gestión del Cambio", level: "intermediate" }
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

// Links de navegación
export const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/experience", label: "Experiencia" },
    { path: "/skills", label: "Habilidades" },
    { path: "/projects", label: "Proyectos" },
    { path: "/contact", label: "Contacto" }
];
