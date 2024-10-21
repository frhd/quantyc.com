function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mt-auto mb-12 max-w-[370px]">
      <div className="mt-8 text-neutral-600 light:text-neutral-300 flex items-center justify-between">
        <p>
          {new Date().getFullYear()} • {new Date().toLocaleTimeString('en-DE', { timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit' })}
        </p>
        <a
          className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          href="/imprint"
        >
          imprint
        </a>
      </div>
    </footer>
  )
}
