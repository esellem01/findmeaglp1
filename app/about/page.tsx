import type { Metadata } from "next";
import Link from "next/link";
import SarahAvatar from "../components/SarahAvatar";

export const metadata: Metadata = {
  title: "About & Disclaimer — FindMeAGLP1",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 sm:px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-teal-900">
        About &amp; Disclaimer
      </h1>

      <section className="mt-8 rounded-2xl bg-white border border-teal-100 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
          <SarahAvatar size="lg" />
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-900">
              Hi, I&apos;m Sarah
            </h2>
            <p className="mt-3 text-teal-900/80 leading-relaxed">
              I&apos;m on Zepbound myself, and I built this site because figuring
              out the right GLP-1 at the right price was way harder than it
              should be. No medical background — just someone who went through
              the maze and mapped it. This site gives you the straightforward
              version I wish I&apos;d had.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-8 text-teal-900/85 leading-relaxed space-y-4">
        <p>
          This site helps you navigate GLP-1 options. It is not medical advice.
          Always consult a licensed healthcare provider.
        </p>
        <p>
          The information here is general and may change as the GLP-1 landscape
          evolves — pricing, programs, FDA decisions, and Medicare rules all
          shift over time. Treat anything you read here as a starting point,
          not a final answer.
        </p>
        <p>
          This site contains affiliate links —{" "}
          <Link href="/disclosure" className="text-teal-700 underline hover:text-teal-900">
            see our disclosure
          </Link>
          .
        </p>
      </div>

      <section className="mt-10 rounded-2xl bg-teal-50/60 border border-teal-200 p-5 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-teal-900">
          Spot something wrong or outdated?
        </h3>
        <p className="mt-2 text-teal-900/80 leading-relaxed">
          Prices and programs change fast. Email{" "}
          <a
            href="mailto:hello@findmeaglp1.com"
            className="text-teal-700 font-medium underline hover:text-teal-900"
          >
            hello@findmeaglp1.com
          </a>{" "}
          and I&apos;ll fix it quickly.
        </p>
      </section>
    </div>
  );
}
