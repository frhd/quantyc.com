import Link from 'next/link'

export function Mark() {
  return (
    <h1 className="mb-8 flex h-8 items-center">
      <Link href="/" aria-label="quantyc home" className="block size-5 bg-red-600" />
    </h1>
  )
}
