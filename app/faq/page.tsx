import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — FindMeAGLP1",
  description:
    "Plain-English answers to the most common questions about GLP-1 medications, insurance, prescriptions, side effects, and cost.",
};

type FaqItem = {
  q: string;
  a: React.ReactNode;
};

const faqs: FaqItem[] = [
  {
    q: "Do I qualify for a GLP-1?",
    a: (
      <>
        <p>
          Most doctors follow FDA guidelines for prescribing GLP-1s for weight
          management. You generally qualify if your BMI is 30 or higher — or 27+
          with a weight-related health condition like high blood pressure,
          prediabetes, sleep apnea, or high cholesterol.
        </p>
        <p>
          BMI is body mass index — a basic height-to-weight ratio doctors use
          as a starting point. You can calculate yours with the{" "}
          <a
            href="https://www.cdc.gov/bmi/adult-calculator/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            CDC&apos;s free calculator
          </a>
          .
        </p>
        <p>
          If you don&apos;t meet these criteria, a doctor likely won&apos;t
          prescribe and insurance almost certainly won&apos;t cover it. Heads
          up: telehealth providers like Ro or PlushCare follow the same FDA
          guidelines, so they&apos;re not a workaround.
        </p>
      </>
    ),
  },
  {
    q: "Why isn't Ozempic on this site?",
    a: (
      <>
        <p>
          Ozempic is the most famous GLP-1, but it&apos;s only FDA-approved for
          type 2 diabetes — not weight loss. Wegovy is literally the same drug
          (semaglutide) approved specifically for weight loss.
        </p>
        <p>
          Doctors sometimes prescribe Ozempic &ldquo;off-label&rdquo; for weight
          loss, but insurance probably won&apos;t cover it for that purpose, and
          the manufacturer&apos;s savings programs don&apos;t apply either. If
          you want semaglutide for weight loss, Wegovy is the same medicine
          through the front door.
        </p>
        <p>
          Same story with Mounjaro vs. Zepbound — both are tirzepatide. Mounjaro
          is the diabetes version; Zepbound is the weight loss version.
        </p>
      </>
    ),
  },
  {
    q: "Do I need a prescription? Do I need insurance?",
    a: (
      <>
        <p>
          You always need a prescription from a licensed provider — GLP-1s
          aren&apos;t available over the counter. But you do NOT need
          insurance.
        </p>
        <p>
          A prescription and how you pay are two separate things. You can get a
          prescription and pay cash directly to the manufacturer through
          LillyDirect (for Zepbound or Foundayo) or NovoCare (for Wegovy).
          That&apos;s what &ldquo;self-pay&rdquo; means: paying full price out
          of pocket, no insurance involved.
        </p>
      </>
    ),
  },
  {
    q: "What about side effects?",
    a: (
      <>
        <p>
          The most common ones are nausea, constipation, diarrhea, and
          vomiting — especially when you&apos;re first starting or stepping up
          your dose.
        </p>
        <p>
          For most people these improve as the body adjusts. That&apos;s why
          doses go up gradually over months — a process called titration (slowly
          stepping up to your target dose). Some people do stop because of
          side effects.
        </p>
        <p>
          Talk to your provider about what to expect, what&apos;s normal, and
          when to call them. This page isn&apos;t medical advice — your doctor
          knows your specific situation.
        </p>
      </>
    ),
  },
  {
    q: "Is this a forever medication?",
    a: (
      <>
        <p>
          Honest answer: studies show most people regain a significant amount
          of the weight after stopping. GLP-1s are designed for long-term use,
          like blood pressure medication.
        </p>
        <p>
          This matters for budgeting — think about the monthly cost as ongoing,
          not temporary. Some people do taper off with their doctor&apos;s
          guidance and maintain through lifestyle changes, but plan for the
          long haul.
        </p>
      </>
    ),
  },
  {
    q: "Pill or injection — how do I choose?",
    a: (
      <>
        <p>
          The big practical difference: injections are once a week. Pills are
          once a day.
        </p>
        <p>
          The pills also differ from each other. Foundayo can be taken any time
          of day, with or without food. Wegovy pill requires an empty stomach,
          a small sip of water, and a 30-minute wait before eating or drinking
          anything else.
        </p>
        <p>
          Injections tend to produce slightly more weight loss in clinical
          trials. But the best medication is the one you&apos;ll actually stick
          with. Needle-phobic? Pills exist now and work well. Hate daily
          routines? A weekly injection might fit your life better.
        </p>
      </>
    ),
  },
  {
    q: "Okay, I got my quiz result. What's the literal first step?",
    a: (
      <>
        <p>
          <strong className="text-teal-900">If you have insurance:</strong>{" "}
          call the number on the back of your insurance card and ask &ldquo;Is
          [medication name] covered on my plan?&rdquo; — or use a manufacturer
          coverage checker tool. Then book an appointment with your regular
          doctor (or a telehealth provider if you don&apos;t have one) and ask
          about the medication.
        </p>
        <p>
          <strong className="text-teal-900">If you&apos;re self-paying:</strong>{" "}
          go to LillyDirect (for Zepbound or Foundayo) or NovoCare (for
          Wegovy). You can connect with a provider and get your prescription
          filled in one place.
        </p>
        <p>
          Either way:{" "}
          <Link
            href="/quiz"
            className="text-teal-700 underline hover:text-teal-900"
          >
            run through the quiz
          </Link>{" "}
          again any time — the path that fits you may change as your situation
          does.
        </p>
      </>
    ),
  },
  {
    q: "How much will this actually cost me per month?",
    a: (
      <>
        <p>As of June 2026, the honest range is wide:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            With good insurance + a savings card: as little as{" "}
            <strong className="text-teal-900">$25/mo</strong>
          </li>
          <li>
            Medicare (starting July 1, 2026):{" "}
            <strong className="text-teal-900">$50/mo</strong> through the
            Bridge Program
          </li>
          <li>
            Self-pay pills: starting at{" "}
            <strong className="text-teal-900">$149/mo</strong>
          </li>
          <li>
            Self-pay injections:{" "}
            <strong className="text-teal-900">$199-449/mo</strong> depending on
            drug and dose
          </li>
          <li>
            Plus possible telehealth membership fees ($20-149/mo) if you
            don&apos;t use your own doctor
          </li>
        </ul>
        <p>
          Prices change often — check the manufacturer pages for current
          numbers:{" "}
          <a
            href="https://www.lilly.com/lillydirect/announcing-foundayo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            Foundayo on LillyDirect
          </a>
          ,{" "}
          <a
            href="https://www.lilly.com/lillydirect/medicines/zepbound"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            Zepbound on LillyDirect
          </a>
          , or{" "}
          <a
            href="https://www.novocare.com/patient/medicines/wegovy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            Wegovy on NovoCare
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <div className="flex-1 flex flex-col">
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-teal-50 via-sky-50 to-transparent"
        />
        <div className="relative mx-auto w-full max-w-2xl px-5 sm:px-6 pt-12 pb-8 sm:pt-16 sm:pb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-teal-900 leading-tight">
            Frequently asked questions
          </h1>
          <p className="mt-3 text-teal-900/70 leading-relaxed">
            Plain-English answers to the things people ask me most.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-2xl px-4 sm:px-6 pb-10 sm:pb-14">
        <ul className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <li key={i}>
              <details className="group rounded-2xl bg-white border border-teal-100 shadow-sm open:shadow-md open:border-teal-200 transition-shadow">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 p-5 sm:p-6 select-none">
                  <span className="text-base sm:text-lg font-semibold text-teal-900 leading-snug">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-50 text-teal-600 transition-transform group-open:rotate-180"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-teal-900/80 leading-relaxed space-y-3">
                  {item.a}
                </div>
              </details>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-xl bg-sky-50 border border-sky-100 px-4 py-3 text-sm text-sky-900/80">
          This page provides general information, not medical advice. Always
          consult your doctor before starting any medication.
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center rounded-full bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 shadow-sm transition-colors"
          >
            Take the quiz
          </Link>
        </div>
      </section>
    </div>
  );
}
