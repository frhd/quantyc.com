import type { Metadata } from 'next'
import { Mark } from '../components/mark'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected projects by quantyc: live sites and work under NDA.',
}

type Project = {
  name: string
  stack: string[]
  description: string
} & (
  | { url: string; descriptor: string }
  // Width of the redaction bar, in characters of the client name it hides.
  | { redacted: number }
)

const live: Project[] = [
  {
    name: 'Sitzplan.app',
    url: 'https://www.sitzplan.app',
    descriptor: 'seating plans',
    stack: ['vue', 'typescript', 'tailwind', 'vite'],
    description:
      'A web application for creating and managing seating plans for classrooms, events and venues. Drag-and-drop interface, export options and collaborative editing.',
  },
  {
    name: 'anewra.shop',
    url: 'https://anewra.shop/',
    descriptor: 'jewelry shop',
    stack: ['next.js', 'medusa.js', 'payload cms', 'three.js'],
    description:
      'A live online jewelry shop: a Medusa.js commerce backend with a Next.js storefront, an embedded Payload CMS for content, and interactive 3D product views in Three.js.',
  },
  {
    name: 'Fräulein Liesel',
    url: 'https://frl-liesel.de/',
    descriptor: 'wine brand',
    stack: ['astro', 'payload cms', 'typescript', 'postgresql'],
    description:
      'A bilingual (German/English) brand site for a wine label with a retro pop-collage design. Static Astro build, rebuilt automatically when the founders publish wines and page content in a self-service CMS.',
  },
]

const underNda: Project[] = [
  {
    name: 'Central Citizen Mailbox',
    redacted: 11,
    stack: ['java', 'kubernetes', 'docker', 'sql'],
    description:
      'A Java REST API integrating SQL and object storage, with CI deployments and certificate management. DevOps with Kubernetes and Docker for containerized environments.',
  },
  {
    name: 'Encrypted Communication Suite',
    redacted: 9,
    stack: ['react native', 'kotlin', 'mongodb', 'kubernetes'],
    description:
      'An end-to-end encrypted communication system. iOS and Android apps in React Native; backend in Kotlin and Ktor, with MongoDB and Kubernetes for scalability.',
  },
  {
    name: 'E-commerce Platform Microservices',
    redacted: 7,
    stack: ['rabbitmq', 'mongodb', 'microservices', 'rest api'],
    description:
      'Developed and extended the API interfaces between the microservices of an e-commerce platform, with RabbitMQ for message brokering and MongoDB for storage.',
  },
  {
    name: 'Video Communication Web App',
    redacted: 12,
    stack: ['react', 'node.js', 'websocket', 'mongodb'],
    description:
      'A video communication platform for web and mobile, built with React and Node.js, with MongoDB and WebSocket for real-time communication.',
  },
  {
    name: 'Cryptographic Certificate Platform',
    redacted: 5,
    stack: ['spring boot', 'keycloak', 'docker', 'pki'],
    description:
      'A self-service platform for managing cryptographic certificates, designed and built with Spring Boot, Keycloak for authentication and Docker for deployment.',
  },
  {
    name: 'EDI Platform',
    redacted: 8,
    stack: ['java', 'mongodb', 'angular', 'edi'],
    description:
      'A web platform for electronic data interchange, the exchange of business documents, built with Java, MongoDB and Angular. Managed build, deployment and release cycles.',
  },
]

const muted = 'text-neutral-500 dark:text-neutral-400'
const red = 'text-red-600 dark:text-red-400'
const hairline = 'border-neutral-200 dark:border-neutral-700/60'

// A run of non-breaking spaces on a solid ground: in a mono face it is exactly
// `length` characters wide and sits on the baseline like the word it replaces.
function Redaction({ length }: { length: number }) {
  return (
    <span className="ml-auto text-sm">
      <span aria-hidden="true" className="bg-current dark:bg-neutral-600 select-none">
        {' '.repeat(length)}
      </span>
      <span className="sr-only">client under NDA</span>
    </span>
  )
}

function Entry({ project }: { project: Project }) {
  return (
    <li className={`border-t py-5 ${hairline}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <h3 className="font-bold">
          {'url' in project ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {project.name}
              <span aria-hidden="true" className={`ml-1 font-normal ${red}`}>↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            project.name
          )}
        </h3>
        {'url' in project ? (
          <span className={`ml-auto text-sm ${muted}`}>{project.descriptor}</span>
        ) : (
          <Redaction length={project.redacted} />
        )}
      </div>
      <p className={`mt-1 text-sm ${muted}`}>
        {project.stack.map((item, i) => (
          <span key={item}>
            {i > 0 && ' · '}
            <span className="whitespace-nowrap">{item}</span>
          </span>
        ))}
      </p>
      <p className="mt-2">{project.description}</p>
    </li>
  )
}

function Group({ label, projects }: { label: string; projects: Project[] }) {
  return (
    <div className="mb-10">
      <h2 className={`mb-2 text-sm ${muted}`}>{label}</h2>
      <ul className={`border-b ${hairline}`}>
        {projects.map((project) => (
          <Entry key={project.name} project={project} />
        ))}
      </ul>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <section className="max-w-[400px] transition-all duration-300 ease-in-out">
      <Mark />
      <Group label="live" projects={live} />
      <Group label="under nda" projects={underNda} />
      <p className="mb-4">
        <strong>
          <a href="https://cal.com/quantyc" className={`${red} hover:underline`} target="_blank" rel="noopener noreferrer">
            Book a call
          </a>
        </strong>{' '}
        to get started with us.
      </p>
    </section>
  )
}
