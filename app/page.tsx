import { GeistMono } from 'geist/font/mono';

export default function Page() {
  return (
    <section className={`max-w-[400px] ${GeistMono.className} transition-all duration-300 ease-in-out`}>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <a href="/" className="hover:underline">🟥</a>
      </h1>
      <p className="mb-4">
        <strong>Ideas are just the beginning — <br /> execution is everything.</strong>
      </p>
      <p className="mb-4">
        At <strong>quantyc</strong>, we partner with companies of all sizes to deliver fast, flexible, and reliable solutions.
      </p>
      <p className="mb-4">
        From scalable web applications to complex enterprise systems, we tackle the most demanding technical challenges, using cutting-edge technologies like Kubernetes, Spring Boot, and modern data and object storage solutions.
      </p>
      <p className="mb-4">
        <strong><a href="/projects" className="text-red-600 hover:underline">Our projects</a></strong> typically span 3 to 18 months and start at €7,000/month for full-stack development services.
      </p>
      <p className="mb-4">
        <strong>Let’s take your business to the next level.</strong>
      </p>
      <p className="mb-4">
        <strong><a href="https://cal.com/quantyc" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">Book a call</a></strong> today to get started.
      </p>
    </section>
  )
}
