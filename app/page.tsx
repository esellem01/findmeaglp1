import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-teal-50 via-sky-50 to-transparent"
        />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-6 pt-14 pb-20 sm:pt-20 sm:pb-28 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-teal-100 px-3 py-1 text-xs font-medium text-teal-700 shadow-sm">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500" />
            Updated June 2026
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-teal-900 leading-[1.1]">
            Find the right GLP-1
            <br className="hidden sm:block" /> for your situation
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-teal-900/75 leading-relaxed max-w-xl mx-auto">
            I&apos;m Sarah — I&apos;m on Zepbound and I built this because finding the right
            GLP-1 at the right price was way harder than it should be. This free
            tool walks you through your options in 60 seconds.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center rounded-full bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold text-lg px-8 py-4 shadow-lg shadow-teal-600/20 transition-colors"
            >
              Find My GLP-1
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <p className="text-xs sm:text-sm text-teal-900/60">
              No login required · Free · Updated June 2026
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-5 sm:px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-4">
          <Feature
            title="Insurance-aware"
            body="Different paths for employer plans, Medicare, Medicaid, individual plans, and self-pay."
          />
          <Feature
            title="Cheapest options first"
            body="Recommendations are ordered by cost — including options where we earn nothing."
          />
          <Feature
            title="No data collected"
            body="No account, no tracking, no email capture. Just answers."
          />
        </div>
      </section>
    </div>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-white border border-teal-100 p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-teal-800">{title}</h3>
      <p className="mt-1.5 text-sm text-teal-900/70 leading-relaxed">{body}</p>
    </div>
  );
}
