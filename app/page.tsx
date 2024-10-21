import { BlogPosts } from 'app/components/posts'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export default function Page() {
  return (
<section className={`py-[8rem] max-w-[420px] pl-2 ${GeistMono.className}`}>
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
)}
