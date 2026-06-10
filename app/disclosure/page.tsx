import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — FindMeAGLP1",
};

export default function DisclosurePage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 sm:px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-teal-900">
        Affiliate Disclosure
      </h1>
      <div className="mt-6 text-teal-900/85 leading-relaxed space-y-4">
        <p>
          Some links on this site are affiliate links. If you sign up through
          them, we may earn a commission at no extra cost to you.
        </p>
        <p>
          Our recommendations are ordered cheapest-first regardless of whether
          we earn from them. Many of the cheapest options we recommend —
          including LillyDirect, NovoCare, and GoodRx — pay us nothing. We
          recommend them anyway because they&apos;re the right answer for many
          people.
        </p>
        <p>
          Affiliate revenue comes from telehealth providers (the consultation
          and prescribing layer), which is a genuine service many users need.
          We&apos;ll always tell you when a recommendation is the cheapest
          option versus when it&apos;s a paid partner.
        </p>
      </div>
    </div>
  );
}
