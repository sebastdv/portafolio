/**
 * Todo el contenido del sitio vive aquí.
 * Edita los textos sin tocar los componentes: cada sección lee de este archivo.
 */

export interface Link {
  label: string;
  href: string;
}

export interface Product {
  title: string;
  description: string;
  /** Línea corta de uso real, p. ej. "En uso por 2 empresas cliente". Opcional. */
  usage?: string;
  /** Etiquetas de stack. Si la dejas vacía, la tarjeta no muestra etiquetas. */
  stack: string[];
  /** Ocupa el ancho completo de la cuadrícula. */
  wide?: boolean;
}

export interface Role {
  title: string;
  company: string;
  companyNote?: string;
  start: string;
  end: string;
  /** Fecha en formato ISO para <time datetime>. */
  startISO: string;
  endISO?: string;
  products?: Product[];
}

export interface SkillItem {
  name: string;
  /** Nota corta que acompaña la etiqueta, p. ej. "académico". */
  note?: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface Education {
  title: string;
  institution: string;
  status: string;
  note?: string;
}

export interface WorkflowItem {
  title: string;
  body: string;
}

export interface PersonalProject {
  name: string;
  /** Una frase: qué es y para quién. */
  summary: string;
  status: string;
  /** Lo que hace y cómo está construido, en frases cortas. */
  highlights: string[];
  stack: string[];
  repo: Link;
  /** Enlace a la versión publicada, cuando exista. */
  demo?: Link;
}

export interface ArchitectureNode {
  id: string;
  title: string;
  detail: string;
}

export const profile = {
  name: 'Sebastián Ardila Santos',
  shortName: 'Sebastián Ardila',
  handle: 'sebastdv',
  headline: 'Desarrollador Full-Stack · IA aplicada al desarrollo',
  valueProp:
    'Construyo sistemas de negocio que automatizan procesos y le ahorran trabajo a quien los usa, con la IA integrada en todo el flujo: del diseño a las pruebas.',

  location: 'Bucaramanga, Santander, Colombia',
  availability: 'Disponible para remoto o híbrido en Medellín',
  currentRole: 'Desarrollador Junior en Sodeker SAS',
  mainStack: 'TypeScript, PHP, NestJS, Laravel',

  contact: {
    email: 'sebastianardila048@gmail.com',
    phone: '+57 311 661 3255',
    phoneHref: 'tel:+573116613255',
    whatsappHref: 'https://wa.me/573116613255',
    github: { label: 'github.com/sebastdv', href: 'https://github.com/sebastdv' },
    linkedin: { label: 'linkedin.com/in/sebastdv', href: 'https://www.linkedin.com/in/sebastdv' },
  },

  /** El PDF lo agregas tú en public/. */
  cv: '/CV_Sebastian_Ardila.pdf',

  seo: {
    title: 'Sebastián Ardila Santos | Desarrollador Full-Stack',
    description:
      'Desarrollador full-stack en Bucaramanga, Colombia. Sistemas de negocio con NestJS, Laravel y PostgreSQL, integraciones con WhatsApp y IA aplicada al desarrollo.',
  },

  about: [
    'Soy tecnólogo en Desarrollo de Sistemas Informáticos y estudiante de Ingeniería de Sistemas, en 7.º semestre. Llevo un año como desarrollador full-stack construyendo sistemas de negocio para varios clientes: integraciones con WhatsApp, chatbots, un portal de solicitudes de crédito, módulos de un ERP contable y sitios web.',
    'Integro la IA en todo mi flujo de trabajo, desde el diseño hasta las pruebas. Uso agentes de código para entender sistemas existentes, implementar, auditar y probar, y me quedo con lo que se puede verificar. Lo que busco en cada proyecto es lo mismo: automatizar procesos y añadir valor directo al usuario final.',
  ],

  experience: [
    {
      title: 'Desarrollador Junior',
      company: 'Sodeker SAS',
      companyNote: 'Empresa de software en Girón, Santander',
      start: 'Nov 2025',
      end: 'Actualidad',
      startISO: '2025-11',
      products: [
        {
          title: 'Plataforma de atención por WhatsApp',
          description:
            'Diseñé y construí el servicio que conecta el sistema con la API oficial de WhatsApp, incluido el alta de números y la medición de consumo.',
          usage: 'En uso por 2 empresas cliente',
          stack: ['Node.js', 'NestJS', 'WhatsApp Cloud API'],
          wide: true,
        },
        {
          title: 'Chatbots configurables',
          description:
            'Motor de flujos adaptable, con traspaso a un agente humano, formularios integrados y bandeja de chats.',
          usage: 'En uso por 2 empresas cliente',
          stack: ['PHP', 'Laravel', 'Vue', 'Inertia', 'PostgreSQL', 'Redis'],
        },
        {
          title: 'Auditoría con IA',
          description:
            'Audité con agentes de IA la integración con WhatsApp, encontré fallos que causaban pérdida de mensajes y definí el plan de corrección.',
          stack: ['Claude Code', 'Cursor'],
        },
        {
          title: 'Portal web de solicitudes de crédito',
          description:
            'Conectado paso a paso con el ERP, con lectura automática de documentos mediante Azure AI Document Intelligence (configuración e integración propias).',
          usage: 'En uso por una entidad financiera',
          stack: ['Azure AI Document Intelligence'],
        },
        {
          title: 'ERP contable',
          description:
            'Módulos de reportes de impuestos y cartera, conciliación contable y APIs para otros sistemas.',
          usage: 'Usado por 3 empresas cliente',
          stack: ['PHP', 'Laravel', 'PostgreSQL'],
        },
        {
          title: 'Desarrollo web',
          description:
            'Sitios corporativos y landing pages para varias empresas, con un CMS para que cada cliente edite su contenido.',
          stack: ['Next.js', 'Vue', 'Tailwind CSS', 'Payload CMS'],
          wide: true,
        },
      ],
    },
    {
      title: 'Digitador',
      company: 'Sistemas y Computadores S.A.',
      start: 'Mar 2024',
      end: 'Oct 2025',
      startISO: '2024-03',
      endISO: '2025-10',
    },
  ] satisfies Role[],

  featured: {
    name: 'citara',
    status: 'Proyecto personal, en desarrollo',
    repo: { label: 'github.com/sebastdv/citara', href: 'https://github.com/sebastdv/citara' },
    summary:
      'Chatbot de agendamiento por WhatsApp para negocios pequeños: clínicas, salones, talleres. Combina menús fijos con un agente de IA que agenda, mueve o cancela citas, siempre con confirmación previa.',
    features: [
      'Agenda, mueve o cancela citas con un agente de IA, con confirmación previa.',
      'Sincroniza en ambos sentidos con Google Calendar.',
      'Envía recordatorios de las citas.',
      'Aplica un tope mensual de gasto en IA por negocio.',
      'El bot se silencia cuando una persona toma la conversación.',
    ],
    architecture: [
      'Monolito modular con API de webhooks y workers separados.',
      'Colas con BullMQ y Redis.',
      'PostgreSQL multi-tenant con Row-Level Security.',
      'Patrón outbox para los mensajes salientes.',
    ],
    stack: [
      'NestJS',
      'TypeScript',
      'TypeORM',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'API de Anthropic (Claude)',
      'Google Calendar API',
      'Vitest',
      'Docker Compose',
    ],
    /**
     * Captura o GIF del proyecto. Guarda el archivo en public/ con esta ruta
     * y aparecerá solo; mientras no exista se muestra un espacio marcado.
     */
    media: {
      src: '/citara/demo.gif',
      alt: 'Conversación de agendamiento con el bot de citara en WhatsApp',
    },
    diagram: {
      nodes: [
        { id: 'whatsapp', title: 'WhatsApp', detail: 'Cloud API de Meta' },
        { id: 'webhook', title: 'API de webhooks', detail: 'NestJS' },
        { id: 'queue', title: 'Colas', detail: 'Redis + BullMQ' },
        { id: 'workers', title: 'Workers', detail: 'procesos separados' },
        { id: 'agent', title: 'Agente de IA', detail: 'API de Anthropic' },
        { id: 'calendar', title: 'Google Calendar', detail: 'sincronización' },
        { id: 'db', title: 'PostgreSQL', detail: 'multi-tenant, RLS' },
      ] satisfies ArchitectureNode[],
    },
  },

  // `as` deja disponible el campo opcional `demo` aunque ningún proyecto lo use todavía.
  projects: (
    [
    {
      name: 'corto',
      summary:
        'Acortador de enlaces con código QR y estadísticas privadas de quién abre cada enlace, sin cuentas y sin guardar IPs.',
      status: 'Proyecto personal, listo para publicar',
      highlights: [
        'Estadísticas por día, país, dispositivo, navegador y sitio de origen, en hora de Colombia.',
        'Visitantes únicos con un hash diario: cuenta personas sin guardar su IP.',
        'La redirección responde antes de registrar la visita, así nadie espera a la base de datos.',
        'API JSON con validación, límite de creación por hora y un token de administración que solo se guarda como hash.',
        '51 pruebas automatizadas contra PostgreSQL real en memoria (PGlite).',
      ],
      stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS', 'Vitest'],
      repo: { label: 'github.com/sebastdv/corto', href: 'https://github.com/sebastdv/corto' },
    },
    {
      name: 'nitido',
      summary:
        'Herramienta web para formatear, validar y comparar JSON que funciona por completo en el navegador: los datos nunca se envían a un servidor.',
      status: 'Proyecto personal, listo para publicar',
      highlights: [
        'Parser propio que explica cada error en español, con línea, columna y cómo arreglarlo.',
        'Conserva el valor exacto de los números grandes, que JSON.parse redondea.',
        'Comparación por rutas ($.cliente.ciudad) más vista línea a línea; el orden de las claves no cuenta como cambio.',
        '34 pruebas automatizadas del parser, el formateo y la comparación.',
      ],
      stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vitest'],
      repo: { label: 'github.com/sebastdv/nitido', href: 'https://github.com/sebastdv/nitido' },
    },
    {
      name: 'turno',
      summary:
        'Reservas en línea para una barbería, con abono pagado por Wompi: los clientes eligen servicio, barbero y hora, y la barbería maneja su agenda desde un panel.',
      status: 'Proyecto personal, listo para publicar',
      highlights: [
        'Cero reservas dobles garantizadas por PostgreSQL con una restricción de exclusión, aun con dos personas confirmando el mismo horario a la vez.',
        'Pagos con Wompi: firma de integridad, eventos verificados e idempotentes, y el caso del pago que llega cuando el horario ya se ocupó.',
        'Cuentas propias con scrypt, sesiones guardadas como hash y bloqueo por intentos fallidos.',
        'Panel con agenda por barbero, horarios por tramos, bloqueos y abonos por devolver; 43 pruebas contra Postgres real.',
      ],
      stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Wompi', 'Tailwind CSS', 'Vitest'],
      repo: { label: 'github.com/sebastdv/turno', href: 'https://github.com/sebastdv/turno' },
    },
    {
      name: 'fuentes',
      summary:
        'Búsqueda con IA sobre tus propios documentos (PDF, Markdown, páginas web): cada respuesta cita la frase exacta de donde sale y la resalta en su fuente.',
      status: 'Proyecto personal, listo para publicar',
      highlights: [
        'Búsqueda híbrida en PostgreSQL: pgvector más texto completo en español, fusionados con Reciprocal Rank Fusion.',
        'Citas nativas de Claude a nivel de oración, transmitidas en vivo con Server-Sent Events.',
        'Embeddings multilingües que corren en el equipo: los documentos se indexan sin salir del computador.',
        'Evaluación con 25 preguntas: la búsqueda híbrida acierta en el top 3 el 88 % de las veces, contra 76 % y 84 % de cada búsqueda sola.',
      ],
      stack: ['TypeScript', 'Hono', 'PostgreSQL', 'pgvector', 'Claude API', 'React', 'Vitest'],
      repo: { label: 'github.com/sebastdv/fuentes', href: 'https://github.com/sebastdv/fuentes' },
    },
    {
      name: 'bitácora',
      summary:
        'Herramienta local que junta los commits de todos tus repositorios y arma el resumen de tu semana, listo para pegar en la daily o en un reporte.',
      status: 'Proyecto personal, listo para publicar',
      highlights: [
        'Servidor Node sin frameworks que ejecuta git en cada repositorio y solo responde en localhost.',
        'Línea de tiempo por día y hora, con un color por proyecto.',
        'Resumen en Markdown por proyecto o por día, con o sin prefijos de Conventional Commits.',
        '30 pruebas automatizadas, incluidas lecturas de repositorios git reales.',
      ],
      stack: ['Node.js', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vitest'],
      repo: { label: 'github.com/sebastdv/bitacora', href: 'https://github.com/sebastdv/bitacora' },
    },
    {
      name: 'lockline',
      summary:
        'Herramienta de línea de comandos que revisa migraciones de PostgreSQL antes de producción: dice qué tabla bloquea cada sentencia y propone la alternativa segura.',
      status: 'Proyecto personal, versión 0.1',
      highlights: [
        'Lee el SQL con el parser oficial de PostgreSQL y explica el lock de cada sentencia.',
        '21 reglas para patrones peligrosos, como índices sin CONCURRENTLY o columnas que reescriben la tabla.',
        'Cada lock que afirma está verificado contra PostgreSQL 14, 15, 16 y 17 reales.',
        'Lee la salida de php artisan migrate --pretend y anota los pull requests con una GitHub Action propia (y SARIF para code scanning).',
      ],
      stack: ['Rust', 'PostgreSQL', 'Laravel', 'GitHub Actions', 'Docker'],
      repo: { label: 'github.com/sebastdv/lockline', href: 'https://github.com/sebastdv/lockline' },
    },
    ] satisfies PersonalProject[]
  ) as PersonalProject[],

  aiWorkflow: {
    intro:
      'La IA no es un extra en mi trabajo: está en cada etapa. Así la uso en el día a día.',
    items: [
      {
        title: 'Agentes de código',
        body: 'Trabajo con Claude Code, Cursor y Codex para explorar código existente, implementar, escribir pruebas y auditar. Con ellos audité una integración con WhatsApp y encontré los fallos que causaban pérdida de mensajes.',
      },
      {
        title: 'MCP',
        body: 'Conecto los agentes a herramientas externas mediante Model Context Protocol, como documentación actualizada o un navegador, para que trabajen con el contexto real del proyecto.',
      },
      {
        title: 'Skills',
        body: 'Empaqueto procesos que se repiten, como convenciones del equipo o plantillas de documentación, en Skills, para que el agente siga el mismo método en cada tarea.',
      },
      {
        title: 'Flujos multiagente',
        body: 'Reparto el trabajo grande entre varios agentes en paralelo, por ejemplo investigación, implementación y revisión, y yo integro y verifico el resultado.',
      },
    ] satisfies WorkflowItem[],
  },

  skills: [
    {
      category: 'IA',
      items: [
        { name: 'LLM y agentes con tool use' },
        { name: 'MCP' },
        { name: 'Skills' },
        { name: 'Multiagente' },
        { name: 'n8n' },
        { name: 'Claude Code' },
        { name: 'Cursor' },
        { name: 'Codex' },
      ],
    },
    {
      category: 'Lenguajes',
      items: [
        { name: 'PHP' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'Java' },
        { name: 'SQL' },
        { name: 'Python', note: 'académico' },
        { name: 'C#', note: 'académico' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Laravel (Sanctum, Passport)' },
        { name: 'NestJS' },
        { name: 'Express' },
        { name: 'APIs REST' },
        { name: 'GraphQL' },
        { name: 'OAuth 2.0' },
        { name: 'JWT' },
      ],
    },
    {
      category: 'Tiempo real',
      items: [
        { name: 'WebSockets (Reverb, Pusher)' },
        { name: 'SSE' },
        { name: 'Webhooks' },
        { name: 'Colas con BullMQ y Redis' },
      ],
    },
    {
      category: 'Frontend',
      items: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'Vue + Inertia.js' },
        { name: 'Astro' },
        { name: 'Vite' },
        { name: 'shadcn/ui' },
        { name: 'Tailwind CSS' },
      ],
    },
    {
      category: 'Datos',
      items: [{ name: 'PostgreSQL' }, { name: 'MySQL' }, { name: 'Redis' }],
    },
    {
      category: 'Arquitectura',
      items: [
        { name: 'Multi-tenant' },
        { name: 'Monolito modular' },
        { name: 'DDD' },
        { name: 'Event-driven' },
        { name: 'Patrón outbox' },
        { name: 'Idempotencia' },
        { name: 'SOLID' },
      ],
    },
    {
      category: 'Nube y APIs',
      items: [
        { name: 'Azure AI Document Intelligence' },
        { name: 'WhatsApp Cloud API (Meta)' },
        { name: 'API de Anthropic' },
        { name: 'Google Calendar API' },
        { name: 'Brevo' },
        { name: 'AWS EC2 y S3', note: 'académico' },
      ],
    },
    {
      category: 'DevOps y pruebas',
      items: [
        { name: 'Docker Compose' },
        { name: 'Nginx' },
        { name: 'Apache' },
        { name: 'PM2' },
        { name: 'Linux' },
        { name: 'Git y GitHub' },
        { name: 'PHPUnit' },
        { name: 'Cypress' },
        { name: 'Vitest' },
        { name: 'Jest' },
        { name: 'TDD' },
      ],
    },
    {
      category: 'Idiomas',
      items: [{ name: 'Español', note: 'nativo' }, { name: 'Inglés', note: 'A2' }],
    },
  ] satisfies SkillGroup[],

  education: [
    {
      title: 'Ingeniería de Sistemas',
      institution: 'Unidades Tecnológicas de Santander (UTS)',
      status: '7.º semestre, grado esperado en 2028',
    },
    {
      title: 'Tecnólogo en Desarrollo de Sistemas Informáticos',
      institution: 'Unidades Tecnológicas de Santander (UTS)',
      status: 'Sep 2026',
      note: 'Exento del proyecto de grado por resultado destacado en las pruebas Saber TyT.',
    },
  ] satisfies Education[],

  contactCta: {
    title: '¿Hablamos?',
    body: 'Estoy disponible para trabajar en remoto o en modalidad híbrida en Medellín. Si tienes una vacante o un proyecto en el que encaje, escríbeme.',
  },

  nav: [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Proyectos', href: '#citara' },
    { label: 'IA', href: '#ia' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Educación', href: '#educacion' },
    { label: 'Contacto', href: '#contacto' },
  ] satisfies Link[],
};

export type Profile = typeof profile;
