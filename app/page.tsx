import { GeistMono } from 'geist/font/mono';

export default function Page() {
  return (
    <section className={`pl-2 max-w-[420px] ${GeistMono.className} py-[2rem] md:py-[3rem]  transition-all duration-300 ease-in-out`}>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <a href="/" className="hover:underline">🟥</a>
      </h1>
      <p className="mb-4">
        Ideas are only the start — what matters is how they're brought to life.
      </p>
      <p className="mb-4">
        <strong>quantyc</strong> works with companies of all sizes to deliver solutions that are fast, flexible, and dependable.
      </p>
      <p className="mb-4">
        From <strong>scalable web applications</strong> to complex enterprise systems, we bring the most challenging technical projects to life using technologies like Kubernetes, Spring Boot, and modern data and object storage systems.
      </p>
      <p className="mb-4">
        Projects typically take 3–18 months. <br />
        Start at €7,000/month for full-stack development.
      </p>
      <p className="mb-4">
        <a href="/projects" className="text-red-600 hover:underline">Explore our expertise</a> and see how we can take you to the next level.
      </p>
      <p className="mb-4">
        <a href="https://cal.com/quantyc" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">Book a call</a> to get started with us.
      </p>
    </section>
  )
}
