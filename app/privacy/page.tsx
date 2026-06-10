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
          FindMeAGLP1 does not collect any personal information. We don&apos;t
          require an account, we don&apos;t ask for an email, and we don&apos;t
          run analytics or tracking pixels.
        </p>
        <p>
          The quiz runs entirely in your browser. Your answers stay on your
          device — nothing is sent to a server and nothing is stored.
        </p>
        <p>
          If you click an affiliate link to a third-party telehealth provider,
          that provider has its own privacy policy. We have no visibility into
          what you do there.
        </p>
        <p>
          If this site adds analytics, accounts, or anything else that collects
          data in the future, this page will be updated first.
        </p>
      </div>
    </div>
  );
}
