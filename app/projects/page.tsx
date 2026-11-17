const Tag = ({ children, color }: { children: React.ReactNode; color: string }) => (
  <span className={`inline-block px-2 py-0.5 text-xs rounded-full mr-1 mb-1 ${color}`}>
    {children}
  </span>
);

const NDABadge = () => (
  <span className="align-middle px-2 py-0.5 text-xs rounded border border-zinc-500 text-zinc-500 ml-2">
    NDA
  </span>
);

export default function ProjectsPage() {
  return (
    <section className="max-w-[420px] transition-all duration-300 ease-in-out">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <a href="/" className="hover:underline">🟥</a>
      </h1>

      {/* Project: Sitzplan.app */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">
          <a href="https://www.sitzplan.app" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Sitzplan.app
          </a>
        </h2>
        <p className="mb-2">
          <strong>Seating Plan Management Tool</strong>
        </p>
        <div className="mb-2">
          <Tag color="bg-green-500/20 text-green-800">Vue.js</Tag>
          <Tag color="bg-cyan-500/20 text-cyan-800">TypeScript</Tag>
          <Tag color="bg-sky-500/20 text-sky-800">Tailwind</Tag>
          <Tag color="bg-purple-500/20 text-purple-800">Vite</Tag>
        </div>
        <p>
          A web application for creating and managing seating plans for classrooms, events, and venues. Features drag-and-drop interface, export options, and collaborative editing.
        </p>
      </div>

      {/* Project: anewra.shop */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">
          <a href="https://anewra.shop/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            anewra.shop
          </a>
        </h2>
        <p className="mb-2">
          <strong>Jewelry E-commerce Store</strong>
        </p>
        <div className="mb-2">
          <Tag color="bg-zinc-500/20 text-zinc-800">Next.js</Tag>
          <Tag color="bg-purple-500/20 text-purple-800">Medusa.js</Tag>
          <Tag color="bg-blue-500/20 text-blue-800">Payload CMS</Tag>
          <Tag color="bg-sky-500/20 text-sky-800">Three.js</Tag>
        </div>
        <p>
          A live online jewelry shop built on a Medusa.js commerce backend with a Next.js storefront, an embedded Payload CMS for content, and interactive 3D product views with Three.js.
        </p>
      </div>

      {/* Project: frl-liesel.de */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">
          <a href="https://frl-liesel.de/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Fräulein Liesel
          </a>
        </h2>
        <p className="mb-2">
          <strong>Wine Brand Website</strong>
        </p>
        <div className="mb-2">
          <Tag color="bg-orange-500/20 text-orange-800">Astro</Tag>
          <Tag color="bg-blue-500/20 text-blue-800">Payload CMS</Tag>
          <Tag color="bg-cyan-500/20 text-cyan-800">TypeScript</Tag>
          <Tag color="bg-yellow-500/20 text-yellow-800">PostgreSQL</Tag>
        </div>
        <p>
          A bilingual (German/English) brand site for a wine label with a retro pop-collage design. Static Astro build, rebuilt automatically when the founders publish wines and page content in a self-service CMS.
        </p>
      </div>

      {/* Project 1 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">
          <span>Central Citizen Mailbox</span><NDABadge />
        </h2>
        <p className="mb-2">
          <strong>Java-based REST API Development</strong>
        </p>
        <div className="mb-2">
          <Tag color="bg-orange-500/20 text-orange-800">Java</Tag>
          <Tag color="bg-blue-500/20 text-blue-800">Kubernetes</Tag>
          <Tag color="bg-cyan-500/20 text-cyan-800">Docker</Tag>
          <Tag color="bg-yellow-500/20 text-yellow-800">SQL</Tag>
        </div>
        <p>
          Built a robust API integrating SQL and object storage, CI deployments, and certificate management. DevOps with Kubernetes and Docker for containerized environments.
        </p>
      </div>

      {/* Project 2 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">
          <span>Encrypted Communication Suite</span><NDABadge />
        </h2>
        <p className="mb-2">
          <strong>End-to-end Encrypted Communication System</strong>
        </p>
        <div className="mb-2">
          <Tag color="bg-cyan-500/20 text-cyan-800">React Native</Tag>
          <Tag color="bg-purple-500/20 text-purple-800">Kotlin</Tag>
          <Tag color="bg-green-500/20 text-green-800">MongoDB</Tag>
          <Tag color="bg-blue-500/20 text-blue-800">Kubernetes</Tag>
        </div>
        <p>
          Designed and developed iOS and Android apps with React-Native. Backend development using Kotlin and Ktor, with MongoDB and Kubernetes for scalability.
        </p>
      </div>

      {/* Project 3 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">
          <span>E-commerce Platform Microservices</span><NDABadge />
        </h2>
        <p className="mb-2">
          <strong>Microservices for E-commerce Platform</strong>
        </p>
        <div className="mb-2">
          <Tag color="bg-pink-500/20 text-pink-800">RabbitMQ</Tag>
          <Tag color="bg-green-500/20 text-green-800">MongoDB</Tag>
          <Tag color="bg-orange-500/20 text-orange-800">Microservices</Tag>
          <Tag color="bg-blue-500/20 text-blue-800">REST API</Tag>
        </div>
        <p>
          Developed and enhanced API interfaces between microservices, implementing RabbitMQ message brokering with MongoDB for data storage.
        </p>
      </div>

      {/* Project 4 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">
          <span>Video Communication Web App</span><NDABadge />
        </h2>
        <p className="mb-2">
          <strong>Web and Mobile Video Communication App</strong>
        </p>
        <div className="mb-2">
          <Tag color="bg-cyan-500/20 text-cyan-800">React</Tag>
          <Tag color="bg-green-500/20 text-green-800">Node.js</Tag>
          <Tag color="bg-yellow-500/20 text-yellow-800">WebSocket</Tag>
          <Tag color="bg-green-500/20 text-green-800">MongoDB</Tag>
        </div>
        <p>
          Developed video communication platform with React and Node.js, integrating MongoDB and WebSocket for real-time communication.
        </p>
      </div>

      {/* Project 5 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">
          <span>Cryptographic Certificate Platform</span><NDABadge />
        </h2>
        <p className="mb-2">
          <strong>Platform for Managing Cryptographic Certificates</strong>
        </p>
        <div className="mb-2">
          <Tag color="bg-green-500/20 text-green-800">Spring Boot</Tag>
          <Tag color="bg-red-500/20 text-red-800">Keycloak</Tag>
          <Tag color="bg-cyan-500/20 text-cyan-800">Docker</Tag>
          <Tag color="bg-purple-500/20 text-purple-800">PKI</Tag>
        </div>
        <p>
          Designed and implemented a self-service platform for cryptographic certificates with Spring Boot, Keycloak for authentication, and Docker for deployment.
        </p>
      </div>

      {/* Project 6 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">
          <span>EDI Platform</span><NDABadge />
        </h2>
        <p className="mb-2">
          <strong>Electronic Data Interchange Platform</strong>
        </p>
        <div className="mb-2">
          <Tag color="bg-orange-500/20 text-orange-800">Java</Tag>
          <Tag color="bg-green-500/20 text-green-800">MongoDB</Tag>
          <Tag color="bg-red-500/20 text-red-800">Angular</Tag>
          <Tag color="bg-blue-500/20 text-blue-800">EDI</Tag>
        </div>
        <p>
          Developed a web-based platform for exchanging business documents, utilizing Java, MongoDB, and Angular. Managed build, deployment, and release cycles.
        </p>
      </div>
      <p className="mb-4">
        <a href="https://cal.com/quantyc" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">Book a call</a> to get started with us.
      </p>
    </section>
  )
}
