import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-teal-100 bg-white/70 mt-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-teal-900/60">
          © {new Date().getFullYear()} FindMeAGLP1 · A free resource, not medical advice
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link href="/about" className="text-teal-700 hover:text-teal-900 hover:underline underline-offset-2">
            About &amp; Disclaimer
          </Link>
          <Link href="/privacy" className="text-teal-700 hover:text-teal-900 hover:underline underline-offset-2">
            Privacy Policy
          </Link>
          <Link href="/disclosure" className="text-teal-700 hover:text-teal-900 hover:underline underline-offset-2">
            Affiliate Disclosure
          </Link>
        </nav>
      </div>
    </footer>
  );
}
