import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="py-[5rem] max-w-[370px]">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <a href="https://quantyc.com" className="hover:underline">
          🟥
        </a>
      </h1>
      <p className="mb-4">
      Ideas are only the start — what matters is how they’re brought to life.
  </p>
      <p className="mb-4">
      <strong>quantyc</strong> works with companies of all sizes to deliver solutions that are fast, flexible, and dependable.
      </p>
      <p className="mb-4">
      From scalable web applications to complex enterprise systems, we bring the most challenging technical projects to life using technologies like Kubernetes, Spring Boot, and modern data and object storage systems.
      </p>
      <p className="mb-4">
      Projects typically take 3–12 months. <br />
      Start at €7,000/month for full-stack development.
      </p>
      <p className="mb-4">
      **Explore our expertise** and see how we can elevate your digital capabilities.
      </p>
      <p className="mb-4">
      **Get started with quantyc** or **book a call**.
      </p>
    </section>
  )
}
