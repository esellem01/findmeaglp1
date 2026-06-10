import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About & Disclaimer — FindMeAGLP1",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 sm:px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-teal-900">
        About &amp; Disclaimer
      </h1>
      <div className="mt-6 prose prose-teal max-w-none text-teal-900/85 leading-relaxed space-y-4">
        <p>
          This site helps you navigate GLP-1 options. It is not medical advice.
          Always consult a licensed healthcare provider.
        </p>
        <p>
          The information here is general and may change as the GLP-1 landscape
          evolves — pricing, formularies, FDA decisions, and Medicare programs
          all shift over time. Treat anything you read here as a starting
          point, not a final answer.
        </p>
        <p>
          This site contains affiliate links —{" "}
          <Link href="/disclosure" className="text-teal-700 underline hover:text-teal-900">
            see our disclosure
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
