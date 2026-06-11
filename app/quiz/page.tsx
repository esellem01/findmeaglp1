"use client";

import { Fragment, useMemo, useState } from "react";
import Link from "next/link";
import {
  ROOT_ID,
  TREE,
  type Cta,
  type Endpoint,
  type Question,
  type Step,
  type TreeNode,
} from "@/lib/decisionTree";

export default function QuizPage() {
  const [currentId, setCurrentId] = useState<string>(ROOT_ID);
  const [history, setHistory] = useState<string[]>([]);

  const node: TreeNode = TREE[currentId];

  const questionsAnswered = useMemo(
    () => history.filter((id) => TREE[id]?.type === "question").length,
    [history]
  );
  const totalQuestionsSeen =
    questionsAnswered + (node.type === "question" ? 1 : 0);

  const progress =
    node.type === "endpoint"
      ? 1
      : totalQuestionsSeen / (totalQuestionsSeen + 1);

  function choose(nextId: string) {
    setHistory((h) => [...h, currentId]);
    setCurrentId(nextId);
  }

  function goBack() {
    setHistory((h) => {
      if (h.length === 0) return h;
      const prev = h[h.length - 1];
      setCurrentId(prev);
      return h.slice(0, -1);
    });
  }

  function startOver() {
    setHistory([]);
    setCurrentId(ROOT_ID);
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 pt-6">
        <ProgressBar value={progress} />
        <div className="mt-3 flex items-center justify-between text-xs text-teal-900/60">
          <button
            type="button"
            onClick={goBack}
            disabled={history.length === 0}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-teal-700 enabled:hover:bg-teal-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </button>
          <span>
            {node.type === "question"
              ? `Question ${totalQuestionsSeen}`
              : "Your recommendation"}
          </span>
        </div>
      </div>

      {node.type === "question" ? (
        <QuestionView question={node} onChoose={choose} />
      ) : (
        <EndpointView endpoint={node} onStartOver={startOver} />
      )}
    </div>
  );
}

function ProgressBar({ value }: { value: number }) {
  const pct = Math.round(Math.min(Math.max(value, 0), 1) * 100);
  return (
    <div
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-1.5 w-full rounded-full bg-teal-100 overflow-hidden"
    >
      <div
        className="h-full bg-gradient-to-r from-teal-400 to-sky-500 transition-all duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function QuestionView({
  question,
  onChoose,
}: {
  question: Question;
  onChoose: (nextId: string) => void;
}) {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-teal-900 leading-snug">
        {question.text}
      </h1>
      {question.subtitle ? (
        <p className="mt-3 text-teal-900/70">{question.subtitle}</p>
      ) : null}

      <div className="mt-8 flex flex-col gap-3">
        {question.options.map((opt, i) => (
          <button
            key={`${question.id}-${i}`}
            type="button"
            onClick={() => onChoose(opt.next)}
            className="group flex items-center justify-between gap-4 w-full text-left rounded-2xl bg-white border border-teal-100 hover:border-teal-400 hover:bg-teal-50/60 active:bg-teal-100/60 px-5 py-4 sm:py-5 shadow-sm transition-all"
          >
            <span className="text-base sm:text-lg text-teal-900 font-medium">
              {opt.label}
            </span>
            <span className="shrink-0 w-8 h-8 rounded-full bg-teal-50 group-hover:bg-teal-600 group-hover:text-white flex items-center justify-center text-teal-600 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
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
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function EndpointView({
  endpoint,
  onStartOver,
}: {
  endpoint: Endpoint;
  onStartOver: () => void;
}) {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 pt-6 pb-16">
      <MedicalBanner />

      <h1 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-teal-900 leading-tight">
        {endpoint.title}
      </h1>

      <ol className="mt-7 flex flex-col gap-4">
        {endpoint.steps.map((step, i) => (
          <Fragment key={i}>
            <StepCard index={i + 1} step={step} />
            {step.title === "How to get a prescription" && (
              <PreSignupChecklist />
            )}
          </Fragment>
        ))}
      </ol>

      {endpoint.warnings?.length ? (
        <div className="mt-6 flex flex-col gap-3">
          {endpoint.warnings.map((w, i) => (
            <WarningCallout key={i}>{w}</WarningCallout>
          ))}
        </div>
      ) : null}

      <Feedback />

      <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
        <button
          type="button"
          onClick={onStartOver}
          className="inline-flex items-center justify-center rounded-full bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 shadow-sm transition-colors"
        >
          Start Over
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-white border border-teal-200 text-teal-700 hover:bg-teal-50 font-medium px-6 py-3 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

function MedicalBanner() {
  return (
    <div className="rounded-xl bg-sky-50 border border-sky-100 px-4 py-3 text-sm text-sky-900/80">
      This tool provides general information, not medical advice. Always consult
      your doctor before starting any medication.
    </div>
  );
}

function StepCard({ index, step }: { index: number; step: Step }) {
  return (
    <li className="rounded-2xl bg-white border border-teal-100 p-5 sm:p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-600 text-white text-sm font-semibold">
          {index}
        </span>
        <div className="flex-1 min-w-0">
          <h2 className="text-base sm:text-lg font-semibold text-teal-900 leading-snug">
            {step.title}
          </h2>
          <p className="mt-2 text-teal-900/80 leading-relaxed whitespace-pre-line">{step.body}</p>
          {step.ctas?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {step.ctas.map((c, i) => (
                <CtaButton key={i} cta={c} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}

function CtaButton({ cta }: { cta: Cta }) {
  const isAffiliate = cta.affiliate;
  const external = !isAffiliate && cta.url.startsWith("http");
  return (
    <a
      href={cta.url}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={
        isAffiliate
          ? "inline-flex items-center gap-1.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-4 py-2 transition-colors"
          : "inline-flex items-center gap-1.5 rounded-full bg-white border border-teal-300 text-teal-700 hover:bg-teal-50 text-sm font-medium px-4 py-2 transition-colors"
      }
    >
      {cta.label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-3.5 h-3.5"
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
    </a>
  );
}

const PRE_SIGNUP_ITEMS = [
  "Is the medication included in the price, or billed separately?",
  "Is there a monthly membership fee, and what does it cover?",
  "Are labs required, and who pays for them?",
  "What happens to the price after the first month?",
  "What are the cancellation terms?",
];

function PreSignupChecklist() {
  return (
    <li className="rounded-2xl bg-teal-50/70 border border-teal-200 p-5 sm:p-6">
      <h3 className="text-sm sm:text-base font-semibold text-teal-900">
        Before you sign up with any provider, confirm:
      </h3>
      <ul className="mt-3 space-y-2">
        {PRE_SIGNUP_ITEMS.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-sm text-teal-900/85 leading-snug"
          >
            <span
              aria-hidden
              className="shrink-0 mt-0.5 inline-flex items-center justify-center w-4 h-4 rounded border-2 border-teal-500 text-teal-600 bg-white"
            >
              <svg
                viewBox="0 0 12 12"
                className="w-2.5 h-2.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 6l3 3 5-6" />
              </svg>
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

function WarningCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 sm:p-5 flex gap-3">
      <span
        aria-hidden
        className="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-400 text-white text-sm font-bold"
      >
        !
      </span>
      <p className="text-sm sm:text-[0.95rem] text-amber-900 leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function Feedback() {
  const [rated, setRated] = useState<"up" | "down" | null>(null);
  return (
    <div className="mt-10 rounded-2xl bg-teal-50/60 border border-teal-100 p-5 text-center">
      {rated === null ? (
        <>
          <p className="text-sm font-medium text-teal-800">Was this helpful?</p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setRated("up")}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white border border-teal-200 hover:bg-teal-100 hover:border-teal-400 transition-colors"
              aria-label="Yes, helpful"
            >
              <span aria-hidden className="text-xl">👍</span>
            </button>
            <button
              type="button"
              onClick={() => setRated("down")}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white border border-teal-200 hover:bg-teal-100 hover:border-teal-400 transition-colors"
              aria-label="No, not helpful"
            >
              <span aria-hidden className="text-xl">👎</span>
            </button>
          </div>
        </>
      ) : (
        <p className="text-sm text-teal-800">
          Thanks for the feedback — it helps me improve this tool.
        </p>
      )}
    </div>
  );
}
