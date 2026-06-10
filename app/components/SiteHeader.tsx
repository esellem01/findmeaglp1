import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/85 border-b border-teal-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-teal-700 hover:text-teal-800 transition-colors"
        >
          <span
            aria-hidden
            className="inline-block w-7 h-7 rounded-full bg-gradient-to-br from-teal-400 to-sky-500"
          />
          <span className="text-base sm:text-lg tracking-tight">
            FindMeAGLP1
          </span>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/faq"
            className="text-xs sm:text-sm font-medium text-teal-700 hover:text-teal-900 transition-colors"
          >
            FAQ
          </Link>
          <span aria-hidden className="text-teal-200">·</span>
          <span className="text-[11px] sm:text-xs text-teal-700/70 font-medium">
            Not medical advice
          </span>
        </nav>
      </div>
    </header>
  );
}
