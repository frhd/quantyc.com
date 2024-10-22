import { GeistMono } from 'geist/font/mono';

export default function ProjectsPage() {
  return (
    <section className={`py-[2rem] md:py-[3rem] max-w-[420px] ${GeistMono.className}  transition-all duration-300 ease-in-out`}>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <a href="/" className="hover:underline">🟥</a>
      </h1>

      {/* Project 1 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Central Citizen Mailbox</h2>
        <p className="mb-1">
          <strong>Java-based REST API Development</strong>
        </p>
        <p>
          Built a robust API integrating SQL and object storage, CI deployments, and certificate management. DevOps with Kubernetes and Docker for containerized environments.
        </p>
      </div>

      {/* Project 2 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Encrypted Communication Suite</h2>
        <p className="mb-1">
          <strong>End-to-end Encrypted Communication System</strong>
        </p>
        <p>
          Designed and developed iOS and Android apps with React-Native. Backend development using Kotlin and Ktor, with MongoDB and Kubernetes for scalability.
        </p>
      </div>

      {/* Project 3 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">E-commerce Platform Microservices</h2>
        <p className="mb-1">
          <strong>Microservices for E-commerce Platform</strong>
        </p>
        <p>
          Developed and enhanced API interfaces between microservices, implementing RabbitMQ message brokering with MongoDB for data storage.
        </p>
      </div>

      {/* Project 4 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Video Communication Web App</h2>
        <p className="mb-1">
          <strong>Web and Mobile Video Communication App</strong>
        </p>
        <p>
          Developed video communication platform with React and Node.js, integrating MongoDB and WebSocket for real-time communication.
        </p>
      </div>

      {/* Project 5 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Cryptographic Certificate Platform</h2>
        <p className="mb-1">
          <strong>Platform for Managing Cryptographic Certificates</strong>
        </p>
        <p>
          Designed and implemented a self-service platform for cryptographic certificates with Spring Boot, Keycloak for authentication, and Docker for deployment.
        </p>
      </div>

      {/* Project 6 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">EDI Platform</h2>
        <p className="mb-1">
          <strong>Electronic Data Interchange Platform</strong>
        </p>
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
