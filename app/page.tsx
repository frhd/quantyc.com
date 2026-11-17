import Link from 'next/link'
import { Mark } from './components/mark'

const link = 'text-red-600 dark:text-red-400 hover:underline'

export default function Page() {
  return (
    <section className="max-w-[400px] transition-all duration-300 ease-in-out">
      <Mark />
      <p className="mb-4">
        <strong>Between the idea and the thing that works, there is a lot of work.</strong>
      </p>
      <p className="mb-4">
        That part is ours.
      </p>
      <p className="mb-4">
        <strong>quantyc</strong> turns plans into running software: the careful, unglamorous middle that decides whether an idea survives.
      </p>
      <p className="mb-4">
        <strong><Link href="/projects" className={link}>Our projects</Link></strong> run 3 to 18 months. They start with{' '}
        <strong><a href="https://cal.com/quantyc" className={link} target="_blank" rel="noopener noreferrer">a call</a></strong>.
      </p>
    </section>
  )
}
