import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — FindMeAGLP1",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 sm:px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-teal-900">
        Privacy Policy
      </h1>
      <div className="mt-6 text-teal-900/85 leading-relaxed space-y-4">
        <p>
          We don&apos;t collect personal information. No accounts, no email
          capture, no tracking cookies, and your quiz answers never leave your
          device. We use Vercel Analytics, a privacy-friendly tool, to count
          anonymous page visits — it doesn&apos;t use cookies and can&apos;t
          identify who you are.
        </p>
        <p>
          If you click an affiliate link to a third-party telehealth provider,
          that provider has its own privacy policy. We have no visibility into
          what you do there.
        </p>
        <p>
          If anything about how we handle data changes, this page will be
          updated first.
        </p>
      </div>
    </div>
  );
}
