/**
 * Datos centralizados del portfolio
 * Facilita el mantenimiento y actualizacion de la informacion
 */

// Informacion personal
export const personalInfo = {
    name: "Alberto Bort",
    title: "Technical Project Lead & IT Business Analyst",
    description: "Technical Project lead y Analista de Negocio TI con mas de 8 anos de experiencia en banca, transporte y movilidad. Transformo necesidades complejas en soluciones de software robustas, combinando vision tecnica y estrategica.",
    email: "albertobort@gmail.com",
    phone: "+34 676 110 159",
    location: "Valencia, Espana",
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
    "Analisis de Requisitos",
    "Testing de APIs",
    "Metodologias Agiles",
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
                location: "Comunidad Valenciana, Espana",
                description: [
                    "Liderazgo en la implementacion de soluciones digitales para el transporte publico (ATMV y Metrovalencia).",
                    "Definicion de requisitos tecnicos y funcionales, asegurando una integracion fluida con infraestructuras existentes.",
                    "Gestion del backlog de producto, riesgos tecnicos y comunicacion con stakeholders.",
                    "Coordinacion entre equipos de desarrollo, operaciones y comerciales.",
                    "Supervision de pruebas de sistema, despliegues y QA.",
                    "Resolucion de incidencias y soporte tecnico durante la implementacion."
                ],
                skills: ["Project Management", "Stakeholder Mng.", "Agile", "Risk Management", "System Integration", "QA Leadership"]
            },
            {
                id: "etra-2",
                title: "Software QA Engineer & Technical BA",
                date: "Dic 2021 - May 2023",
                location: "Valencia, Espana",
                description: [
                    "Diseno y ejecucion de pruebas de Aceptacion de Usuario (UAT), integracion y componentes.",
                    "Desarrollo de planes de prueba detallados basados en requisitos, utilizando JIRA.",
                    "Gestion y resolucion de defectos e incidencias para minimizar el impacto operativo.",
                    "Liderazgo en reuniones tecnicas con clientes clave (FGV, MLO, Enyse, NTT)."
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
                location: "Valencia, Espana",
                description: [
                    "Business Analyst y Application Manager en proyectos de medios de pago (Cheques, SWIFT, SEPA).",
                    "Diseno de estrategias de prueba y liderazgo del equipo de QA.",
                    "Supervision de monitorizacion, planificacion y soporte funcional."
                ],
                skills: ["HPQC", "JIRA", "Team Leadership", "Payments", "Business Analysis"]
            },
            {
                id: "sopra-2",
                title: "QA Automation Engineer",
                date: "Jul 2020 - Dic 2021",
                location: "Valencia, Espana",
                description: [
                    "Desarrollo de scripts automatizados para reducir pruebas de regresion manuales.",
                    "Uso de T-Tool Software para automatizacion y optimizacion de lanzamientos."
                ],
                skills: ["Test Automation", "T-Tool", "Regression Testing", "Scripting"]
            },
            {
                id: "sopra-3",
                title: "QA IT Business Analyst",
                date: "Abr 2018 - May 2021",
                location: "Valencia, Espana",
                description: [
                    "Revision de especificaciones y desarrollo de planes de prueba con HPQC.",
                    "Seguimiento de defectos y participacion en ciclos de validacion.",
                    "Mantenimiento y evolucion de escenarios de prueba."
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
                    "Rol multifuncional en start-up tecnologica (SaaS): gestion de proyectos, marketing y soporte.",
                    "Estrategia de precios para aplicaciones de negocio.",
                    "Analisis de errores que afectaban el rendimiento del desarrollo."
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
        description: "Herramienta para estandarizar incidencias en JIRA, optimizando la trazabilidad y comunicacion entre departamentos mediante reportes estructurados.",
        responsibilities: [
            "Desarrollo completo de la aplicacion, desde el concepto inicial hasta el despliegue.",
            "Diseno de una interfaz intuitiva para convertir el contenido de los tickets en informes estructurados.",
            "Implementacion de la logica para generar y descargar los reportes en formatos Markdown y Word."
        ],
        results: [
            "Estandarizacion de los reportes de JIRA con un formato claro y consistente.",
            "Reduccion significativa del tiempo de creacion de informes de incidencias.",
            "Mejora en la transferencia de conocimiento y en el seguimiento de errores dentro del equipo.",
            "Facilidad para adjuntar reportes en auditorias (formato Word) y en comentarios de JIRA (Markdown)."
        ],
        skills: ["Next.js", "TypeScript", "TailwindCSS", "React", "Markdown", "JIRA"],
        link: "https://reportes-jira-eid.vercel.app/"
    },
    {
        name: "Sistema SAE en Linea 10 de Metrovalencia",
        company: "ETRA",
        description: "Despliegue y control del Sistema de Ayuda a la Explotacion (SAE) en la nueva Linea 10 (Alacant-Natzaret) de Metrovalencia.",
        responsibilities: [
            "Analisis de requisitos y definicion de especificaciones tecnicas.",
            "Desarrollo de casos de prueba y ejecucion de pruebas funcionales y de regresion.",
            "Coordinacion con el equipo de desarrollo para la resolucion de defectos y mejoras.",
            "Gestion de incidencias en entornos de prueba y produccion usando JIRA.",
            "Soporte tecnico y funcional durante el despliegue y mantenimiento del sistema."
        ],
        results: [
            "Implementacion exitosa del sistema SAE, mejorando la eficiencia operativa.",
            "Reduccion de defectos en produccion gracias a pruebas exhaustivas.",
            "Aumento de la satisfaccion del cliente (FGV) por la calidad y entrega a tiempo."
        ],
        skills: ["JIRA", "SQL", "Postman", "MongoDB", "Gestion de Proyectos", "QA", "Analisis de Incidencias"],
        link: "https://www.fgv.es/la-generalitat-adjudica-la-instalacion-de-los-sistemas-de-senalizacion-y-comunicaciones-de-la-linea-10-y-de-la-red-tranviaria-de-metrovalencia/"
    },
    {
        name: "Digitalizacion del Transporte Publico Interurbano de Metrobus",
        company: "ETRA",
        description: "Digitalizacion del transporte publico metropolitano de Valencia, integrando sistemas para mejorar la eficiencia junto a NTT DATA.",
        responsibilities: [
            "Analisis de requisitos y definicion de especificaciones para el proyecto de digitalizacion.",
            "Coordinacion con NTT DATA y otros stakeholders para asegurar la correcta ejecucion del proyecto.",
            "Supervision de los procesos de prueba y calidad para garantizar la fiabilidad del sistema.",
            "Gestion de incidencias y resolucion de problemas durante la fase de implementacion."
        ],
        results: [
            "Despliegue exitoso de soluciones digitales que mejoraron la eficiencia del transporte.",
            "Reduccion de costes operativos mediante la automatizacion e integracion de sistemas.",
            "Coordinacion exitosa que llevo a la finalizacion del proyecto en los plazos establecidos."
        ],
        skills: ["Gestion de Proyectos", "Analisis Tecnico", "Stakeholder Management", "QA", "Integracion de Sistemas"],
        link: "https://es.nttdata.com/newsfolder/ntt-data-digitaliza-el-transporte-publico-del-area-metropolitana-de-valencia"
    },
    {
        name: "Creacion de Entorno de Pruebas Comun para QA",
        company: "Sopra Banking Software",
        description: "Implementacion de un entorno de pruebas unificado para validar evolutivos y ejecutar regresiones automatizadas.",
        responsibilities: [
            "Gestion del proyecto para la creacion y mantenimiento del entorno de pruebas.",
            "Coordinacion del analisis de requisitos y definicion de especificaciones tecnicas.",
            "Supervision de la configuracion y mantenimiento de servidores de prueba y bases de datos asociadas.",
            "Liderazgo de reuniones tecnicas y de proyecto con stakeholders para revisar el progreso."
        ],
        results: [
            "Implementacion de un entorno que mejoro la eficiencia operativa del equipo de QA.",
            "Reduccion significativa del tiempo de pruebas gracias a la automatizacion.",
            "Disminucion de defectos en produccion a traves de una gestion de calidad mas rigurosa."
        ],
        skills: ["Project Management", "SQL", "JIRA", "Postman", "QA", "Test Automation", "Liderazgo"],
        link: null
    }
];

// Categorias de habilidades
export const skillCategories = [
    {
        id: "tech-stack",
        title: "Stack Tecnico & Arquitectura",
        icon: "cpu",
        description: "Fundamentos tecnicos solidos para la toma de decisiones arquitectonicas.",
        skills: [
            "SQL & NoSQL (MongoDB)",
            "REST & SOAP APIs",
            "Integracion de Sistemas",
            "XML / JSON",
            "Unix / Linux Systems",
            "Analisis de Logs",
            "Jenkins (CI/CD)",
            "Configuracion de Entornos"
        ]
    },
    {
        id: "leadership",
        title: "Liderazgo y Gestion",
        icon: "users",
        description: "Direccion de equipos y alineacion estrategica de proyectos.",
        skills: [
            "Liderazgo Tecnico",
            "Gestion de Stakeholders",
            "Planificacion de Proyectos (Roadmap)",
            "Gestion de Riesgos Tecnicos",
            "Metodologias Agiles (Scrum/Kanban)",
            "Mentoring de Equipos",
            "Gestion del Cambio"
        ]
    },
    {
        id: "analysis",
        title: "Ingenieria de Requisitos",
        icon: "chart",
        description: "Puente entre necesidades de negocio y soluciones tecnicas.",
        skills: [
            "Analisis de Sistemas",
            "SDLC Management",
            "Definicion de Requisitos Tecnicos",
            "Optimizacion de Procesos",
            "User Stories & Backlog",
            "Documentacion Tecnica",
            "Modelado de Datos"
        ]
    },
    {
        id: "quality",
        title: "Estrategia de Calidad (QA)",
        icon: "shield",
        description: "Aseguramiento de la fiabilidad y robustez del software entregado.",
        skills: [
            "Estrategia de Pruebas",
            "Automatizacion (Vision)",
            "Validacion End-to-End",
            "Gestion de Defectos (Jira)",
            "UAT Coordination",
            "Pruebas de Regresion"
        ]
    }
];

// Informacion de contacto para el componente Contact
export const contactInfo = [
    {
        icon: "mapPin",
        label: "Ubicacion",
        value: "Valencia, Espana",
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
        label: "Telefono",
        value: "+34 676 110 159",
        action: "tel:+34676110159",
        canCopy: true
    }
];

// Links de navegacion
export const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/experience", label: "Experiencia" },
    { path: "/skills", label: "Habilidades" },
    { path: "/projects", label: "Proyectos" },
    { path: "/contact", label: "Contacto" }
];
