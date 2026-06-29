export type Cta = {
  label: string;
  url: string;
  affiliate: boolean;
};

export type StepOption = {
  name: string;
  desc: string;
};

export type Step = {
  title: string;
  body: string;
  options?: StepOption[];
  note?: string;
  ctas?: Cta[];
};

export type Endpoint = {
  type: "endpoint";
  id: string;
  title: string;
  steps: Step[];
  warnings?: string[];
};

export type Question = {
  type: "question";
  id: string;
  text: string;
  subtitle?: string;
  options: { label: string; next: string }[];
};

export type TreeNode = Question | Endpoint;

const PLUSHCARE_CTA: Cta = {
  label: "Check PlushCare",
  url: "https://track.revoffers.com/aff_c?offer_id=344&aff_id=12788&url_id=8347",
  affiliate: true,
};

const SESAME_CTA: Cta = {
  label: "Check Sesame",
  url: "https://track.revoffers.com/aff_c?offer_id=239&aff_id=12788&url_id=8346",
  affiliate: true,
};

const FOUND_CTA: Cta = {
  label: "Check Found",
  url: "https://track.revoffers.com/aff_c?offer_id=1162&aff_id=12788&url_id=12126",
  affiliate: true,
};

const RO_CTA: Cta = { label: "Check Ro", url: "#affiliate-placeholder", affiliate: true };

const LILLY_DIRECT: Cta = {
  label: "Visit LillyDirect",
  url: "https://www.lilly.com/lillydirect/medicines/zepbound",
  affiliate: false,
};

const LILLY_SAVINGS: Cta = {
  label: "Zepbound savings card",
  url: "https://zepbound.lilly.com/savings",
  affiliate: false,
};

const FOUNDAYO_DIRECT: Cta = {
  label: "Visit Foundayo on LillyDirect",
  url: "https://www.lilly.com/lillydirect/announcing-foundayo",
  affiliate: false,
};

const FOUNDAYO_SAVINGS: Cta = {
  label: "Foundayo savings card",
  url: "https://foundayo.lilly.com/coverage-savings",
  affiliate: false,
};

const NOVOCARE: Cta = {
  label: "Visit NovoCare",
  url: "https://www.novocare.com/patient/medicines/wegovy.html",
  affiliate: false,
};

const NOVOCARE_SAVINGS: Cta = {
  label: "NovoCare savings offer",
  url: "https://www.novocare.com/patient/medicines/wegovy/savings-offer.html",
  affiliate: false,
};

const NOVOCARE_COVERAGE: Cta = {
  label: "NovoCare coverage checker",
  url: "https://www.novocare.com/patient/medicines/wegovy/check-coverage.html",
  affiliate: false,
};

const GOODRX: Cta = {
  label: "Check GoodRx",
  url: "https://www.goodrx.com/",
  affiliate: false,
};

const PRICING =
  "Foundayo $149/mo (LillyDirect), Wegovy pill $149/mo (NovoCare), Wegovy pen $199/mo intro offer through June 2026 — then $349-399/mo depending on dose (NovoCare), Zepbound $299-449/mo (LillyDirect).";

const PRESCRIPTION_BASICS: Step = {
  title: "First, how prescriptions work",
  body: "You need a prescription from a licensed doctor or provider to get any GLP-1 — there's no over-the-counter version. But you don't need insurance to get one. A prescription is just your doctor saying this medication is right for you. How you pay for it is a separate question, and that's what the rest of this page is about.",
};

const PILL_COMPARISON: Step = {
  title: "How the two pills differ day-to-day",
  body: "Foundayo can be taken any time of day with or without food. Wegovy pill must be taken on an empty stomach with a small sip of water — then wait 30 minutes before eating or drinking anything else. Same goal, very different daily routines.",
};

const SAXENDA_FALLBACK: Step = {
  title: "Worth asking about: Saxenda",
  body: "If your insurance probably won't cover any of the newer options, ask your doctor about Saxenda (liraglutide). It's an older daily injection that some plans still cover. It produces less weight loss (~6-8% vs 12-16% for the newer drugs), but it's better than nothing, and a generic version exists which can keep your cost down. For self-pay though, skip Saxenda — the pills (Foundayo or Wegovy pill at $149/mo) are usually cheaper and more effective.",
};

const GET_PRESCRIBED: Step = {
  title: "How to get a prescription",
  body: "You pay a prescriber to write the script, but the medication itself costs the same wherever you fill it (LillyDirect or NovoCare). GLP-1s need ongoing refills, and providers require periodic check-ins to keep prescribing. So the real difference between these is the prescriber fee and whether you pay only when you have a visit, or pay continuously. Your own doctor is cheapest by far:",
  options: [
    {
      name: "Your own doctor",
      desc: "No extra telehealth fee or membership, just your normal visit co-pay. Cheapest if you already have a doctor who'll prescribe.",
    },
    {
      name: "PlushCare",
      desc: "$19.99/mo membership with a 30-day free trial, plus $129/visit without insurance (or just your copay with insurance). Month-to-month, so you can cancel between refill visits and only pay when you actually need a check-in. Works like an ongoing primary-care doctor and can bill your insurance.",
    },
    {
      name: "Sesame",
      desc: "About $99 every 28 days, paid out of pocket (not billed to insurance). A marketplace, not a clinic: you pick your own provider from reviews, and they send a brand-name prescription to LillyDirect with no markup on the drug. You can cancel between visits (no annual lock-in), but note it auto-renews on a 28-day cycle, so set a reminder.",
    },
    {
      name: "Weight-loss subscriptions (Ro, Found)",
      desc: "$39-149/mo, ongoing. They assign you a provider and handle your refills, check-ins, and dose adjustments automatically — the most hands-off, but also the most commitment (some push annual plans). Check whether their price includes the medication or adds a markup, since some do.",
    },
  ],
  note: "Note: telehealth provider availability varies by state — each provider's signup will confirm they serve yours.",
  ctas: [PLUSHCARE_CTA, SESAME_CTA, FOUND_CTA, RO_CTA],
};

export const ROOT_ID = "q1";

export const TREE: Record<string, TreeNode> = {
  q1: {
    type: "question",
    id: "q1",
    text: "Where are you in your GLP-1 journey?",
    options: [
      { label: "I'm exploring GLP-1s for the first time", next: "q2" },
      { label: "I'm on one but need a cheaper or better option", next: "switch_root" },
      { label: "I was denied coverage and need help", next: "denied_root" },
      { label: "I'm on a compounded version and worried about FDA changes", next: "COMPOUND" },
    ],
  },

  q2: {
    type: "question",
    id: "q2",
    text: "What type of health insurance do you have?",
    options: [
      { label: "Through my job (employer plan)", next: "q3_employer" },
      { label: "Medicare", next: "medicare_root" },
      { label: "Medicaid", next: "MEDICAID" },
      { label: "I buy my own plan (individual)", next: "INDIVIDUAL" },
      { label: "Military / VA / TRICARE", next: "MILITARY" },
      { label: "No insurance", next: "q3_uninsured" },
      { label: "I'm not sure", next: "UNSURE_INSURANCE" },
    ],
  },

  q3_employer: {
    type: "question",
    id: "q3_employer",
    text: "Do you have a preference between injections and pills?",
    options: [
      { label: "I prefer pills (no needles)", next: "EMPLOYER_PILL" },
      { label: "I'm fine with injections", next: "EMPLOYER_INJECTION" },
      { label: "No preference — show me everything", next: "EMPLOYER_INJECTION" },
    ],
  },

  q3_uninsured: {
    type: "question",
    id: "q3_uninsured",
    text: "Do you have a preference between injections and pills?",
    options: [
      { label: "I prefer pills (no needles)", next: "UNINSURED_PILL" },
      { label: "I'm fine with injections", next: "UNINSURED_INJECTION" },
      { label: "No preference — show me everything", next: "UNINSURED_ALL" },
    ],
  },

  medicare_root: {
    type: "question",
    id: "medicare_root",
    text: "Are you aware of the Medicare GLP-1 Bridge program starting July 2026?",
    options: [
      { label: "No, tell me about it", next: "MEDICARE_BRIDGE" },
      { label: "Yes, but I need help qualifying", next: "MEDICARE_QUALIFY" },
      { label: "I want to start before July 2026", next: "MEDICARE_NOW" },
    ],
  },

  switch_root: {
    type: "question",
    id: "switch_root",
    text: "What's the main reason you want to switch?",
    options: [
      { label: "It's too expensive", next: "SWITCH_COST" },
      { label: "My provider isn't great", next: "SWITCH_PROVIDER" },
      { label: "I want to try a different medication", next: "SWITCH_MED" },
      { label: "I want to switch from injection to pill", next: "SWITCH_PILL" },
    ],
  },

  denied_root: {
    type: "question",
    id: "denied_root",
    text: "What happened with your denial?",
    options: [
      { label: "Insurance denied prior authorization", next: "DENIED_PA" },
      { label: "My doctor won't prescribe it", next: "DENIED_DOC" },
      { label: "I don't know why I was denied", next: "DENIED_UNCLEAR" },
    ],
  },

  EMPLOYER_PILL: {
    type: "endpoint",
    id: "EMPLOYER_PILL",
    title: "Employer insurance + oral pill path",
    steps: [
      {
        title: "Check what your plan covers",
        body: "Call the number on your insurance card and ask: “Is Wegovy oral tablet or Foundayo covered on my plan for weight management?” While you're on the phone, ask three things: what your copay would be (the amount you pay at the pharmacy), what tier the drug is on (your plan's category for the drug, which sets how much you pay), and whether prior authorization is required — that's when your doctor formally asks the insurer for permission to cover the drug before they'll pay.",
      },
      {
        title: "Talk to your doctor",
        body: "Ask your primary care doctor or an obesity medicine specialist to write the prescription. Bring what you learned about your plan's coverage so they know which drug to write for. If a prior authorization is needed, the office handles all the paperwork — you just need to ask them to start it.",
      },
      PILL_COMPARISON,
      {
        title: "If covered",
        body: "Foundayo: as low as $25/mo with commercial coverage using Lilly's savings card (a manufacturer coupon that lowers what you pay at the pharmacy). Wegovy pill: check NovoCare's savings offer, which works the same way.",
        ctas: [FOUNDAYO_SAVINGS, NOVOCARE_SAVINGS],
      },
      {
        title: "If denied",
        body: "Don't panic — a denial isn't the end of the road. Your doctor can usually file an appeal, and plenty of denials get overturned. The “denied coverage” path on this site walks through what to do next.",
      },
      GET_PRESCRIBED,
    ],
  },

  EMPLOYER_INJECTION: {
    type: "endpoint",
    id: "EMPLOYER_INJECTION",
    title: "Employer insurance + injection path",
    steps: [
      {
        title: "Check what your plan covers",
        body: "Call your insurer and ask: “Is Wegovy or Zepbound covered for weight management?” One may be covered and not the other. While you're on the phone, ask about your copay (what you'd pay at the pharmacy), what tier the drug is on (the plan's category that sets your cost), and whether prior authorization is required — that's when your doctor formally asks the insurer for permission to cover the drug.",
      },
      GET_PRESCRIBED,
      {
        title: "Manufacturer savings",
        body: "Zepbound has a Lilly savings card that reduces your copay (what you pay at the pharmacy). Wegovy has a NovoCare savings offer that does the same. These stack on top of your insurance coverage, so you can use both.",
        ctas: [LILLY_SAVINGS, NOVOCARE_SAVINGS],
      },
      {
        title: "If denied",
        body: "Your doctor can file a prior authorization (the formal request to your insurer to cover the drug). If that's denied, they can appeal, or do something called a peer-to-peer review — where your doctor speaks directly with the insurance company's medical director and argues your case. See the “denied” path on this site for the full playbook.",
      },
    ],
  },

  MEDICARE_BRIDGE: {
    type: "endpoint",
    id: "MEDICARE_BRIDGE",
    title: "The Medicare GLP-1 Bridge Program — a game changer for Part D",
    steps: [
      {
        title: "The headline: $50/month",
        body: "Starting July 1, 2026, if you're enrolled in Medicare Part D, you can get a covered GLP-1 for a flat $50/month copay. That's it. The program runs through December 31, 2027. For Medicare users, this is a complete game changer — full price for these drugs runs $149-$449/month otherwise.",
      },
      {
        title: "Which drugs are covered",
        body: "Foundayo (pill), Wegovy (pill and injection), and the Zepbound KwikPen (a pre-filled injector pen). Ozempic isn't covered — it's still Medicare-approved only for type 2 diabetes. Compounded versions aren't covered either.",
      },
      {
        title: "Who qualifies",
        body: "Three things have to be true. (1) You're enrolled in Medicare Part D. (2) You're 18 or older. (3) You meet ONE of these two clinical paths: a BMI of 30 or higher PLUS heart failure with preserved ejection fraction, uncontrolled high blood pressure despite taking two or more blood pressure medications, or chronic kidney disease (stage 3a or higher) — OR a BMI of 27 or higher PLUS prediabetes, a previous heart attack, a previous stroke, or symptomatic peripheral artery disease. Note: a high BMI by itself isn't enough — you also need one of the listed conditions. Your prescriber confirms this in writing.",
      },
      {
        title: "Your Part D plan does NOT need to opt in",
        body: "This is the part most people get wrong. The Bridge program works across all Medicare Part D plans automatically — your plan doesn't need to choose to participate. A central CMS system handles the prior authorization (the request to cover the drug) and pharmacy claims directly, not your individual Part D plan. So you don't need to switch plans or call your Part D provider — your doctor just submits the paperwork through the central system.",
      },
      {
        title: "What to do now",
        body: "Talk to your doctor about getting the prior authorization ready so it can be submitted the day the program opens (July 1, 2026). The faster the paperwork is in, the faster you start paying $50/mo instead of full price.",
      },
      {
        title: "Already on a GLP-1? You still qualify",
        body: "If you've already started a GLP-1 and lost weight, don't worry — your prescriber confirms your ORIGINAL qualifying BMI, not your current weight. Losing weight on the drug doesn't disqualify you from staying on it at the $50 rate.",
      },
    ],
    warnings: [
      "There was a longer-term program called the BALANCE Model that was supposed to follow this one — it's been delayed indefinitely. The Bridge program is extended through 2027, but there's no guarantee yet of what happens after.",
    ],
  },

  MEDICARE_QUALIFY: {
    type: "endpoint",
    id: "MEDICARE_QUALIFY",
    title: "Qualifying for the Medicare Bridge",
    steps: [
      {
        title: "Eligibility checklist",
        body: "Three things you need: (1) active Medicare Part D enrollment, (2) you're 18 or older, and (3) you meet one of two clinical paths. Path A: BMI 30+ with heart failure with preserved ejection fraction, uncontrolled high blood pressure despite two or more blood pressure medications, or chronic kidney disease stage 3a or higher. Path B: BMI 27+ with prediabetes, a previous heart attack, a previous stroke, or symptomatic peripheral artery disease. Important: a qualifying BMI alone isn't enough — you need one of the listed conditions too. Your prescriber confirms in writing that you meet the criteria.",
      },
      {
        title: "Next step",
        body: "Schedule a visit with your doctor before July 1, 2026. Ask them to document your BMI and any qualifying conditions in your chart now. That way the prior authorization (the paperwork asking Medicare to cover the drug) is ready to submit through the central CMS system the day the program opens. Your Part D plan doesn't handle this part — CMS does.",
      },
      {
        title: "If you don't qualify",
        body: `You can still get a GLP-1 by paying out of pocket. Self-pay means you're paying the full price yourself without using insurance — these prices come directly from the drug manufacturer (as of June 2026). Cheapest first: ${PRICING}`,
        ctas: [FOUNDAYO_DIRECT, NOVOCARE, LILLY_DIRECT],
      },
    ],
  },

  MEDICARE_NOW: {
    type: "endpoint",
    id: "MEDICARE_NOW",
    title: "Starting before the Bridge program (before July 2026)",
    steps: [
      {
        title: "Current Medicare coverage",
        body: "Right now, Medicare Part D generally doesn't cover GLP-1s for weight loss. It does cover Ozempic and Mounjaro for type 2 diabetes. If you have T2D, your doctor can prescribe one of those for the diabetes — and weight loss may follow as a side benefit.",
      },
      {
        title: "Self-pay options (no insurance needed)",
        body: `Self-pay means you pay the full price yourself, no insurance involved — these prices come straight from the drug makers (as of June 2026). Cheapest first: ${PRICING}`,
        ctas: [FOUNDAYO_DIRECT, NOVOCARE, LILLY_DIRECT],
      },
      {
        title: "Consider waiting for the Bridge",
        body: "If July 2026 is close for you, the Bridge program at $50/mo may be worth the wait vs. paying $149-449/mo out of pocket right now. Talk it through with your doctor — the right answer depends on how urgent things are for you.",
      },
    ],
  },

  MEDICAID: {
    type: "endpoint",
    id: "MEDICAID",
    title: "Medicaid coverage for GLP-1s",
    steps: [
      PRESCRIPTION_BASICS,
      {
        title: "Important: coverage varies state by state",
        body: "Medicaid coverage of GLP-1s is decided state by state — some states cover them for weight loss, many don't, and rules change. Many states cover GLP-1s for type 2 diabetes but not for obesity, and even within one state your specific managed care plan affects what's covered. The fastest way to check: call the member services number on your Medicaid card and ask “Does my plan cover Wegovy, Zepbound, or Foundayo for weight management?” Some states are also adding coverage through a new federal pilot — the CMS BALANCE Model. States have been able to opt in since May 2026 on a rolling basis through January 2027, and not all states will join — worth asking your state Medicaid agency if it's participating. If you were denied Medicaid coverage before, it's worth asking again.",
      },
      SAXENDA_FALLBACK,
      {
        title: "If not covered",
        body: `You can pay out of pocket regardless of Medicaid. Self-pay means paying the full price yourself — these come from the drug makers directly (as of June 2026). Cheapest first: ${PRICING}`,
        ctas: [FOUNDAYO_DIRECT, NOVOCARE, LILLY_DIRECT],
      },
      GET_PRESCRIBED,
    ],
  },

  INDIVIDUAL: {
    type: "endpoint",
    id: "INDIVIDUAL",
    title: "Individual plan (marketplace or direct purchase)",
    steps: [
      {
        title: "Check what your plan covers first",
        body: "Whether you bought through healthcare.gov or directly from a carrier like Blue Shield, the first step is figuring out whether your specific plan covers GLP-1s for weight management. Call the number on your insurance card and ask. Coverage varies wildly between plans.",
      },
      {
        title: "Heads up",
        body: "A lot of individual plans exclude weight loss medications entirely — meaning they probably won't cover them no matter what. Even “good” plans often require prior authorization (your doctor formally asking permission) and have strict rules: a minimum BMI, step therapy (you have to try a cheaper drug first), or documented diet attempts.",
      },
      {
        title: "If covered",
        body: "You're in good shape. Follow the same path as employer insurance: get a prescription, use the manufacturer's savings card to lower your copay (what you pay at the pharmacy), and file a prior authorization if your plan requires one.",
      },
      SAXENDA_FALLBACK,
      {
        title: "If not covered or too restrictive",
        body: `You can use self-pay for the medication while keeping insurance for everything else. Self-pay means paying full price without insurance — these come directly from the manufacturer (as of June 2026). Cheapest first: ${PRICING}`,
        ctas: [FOUNDAYO_DIRECT, NOVOCARE, LILLY_DIRECT],
      },
      GET_PRESCRIBED,
      {
        title: "Open enrollment tip",
        body: "When you're shopping for next year's plan, check each plan's covered drug list BEFORE enrolling. Look for plans that cover Wegovy or Zepbound on a reasonable tier — the lower the tier number, the less it costs you per fill.",
      },
    ],
  },

  MILITARY: {
    type: "endpoint",
    id: "MILITARY",
    title: "Military / VA / TRICARE coverage",
    steps: [
      {
        title: "TRICARE",
        body: "TRICARE covers some GLP-1s, but usually requires prior authorization — that's when your doctor formally asks TRICARE for permission to cover the drug before they'll pay. Coverage depends on which TRICARE plan you have (Prime, Select, etc.) and what the drug is being prescribed for. Call TRICARE directly to confirm.",
      },
      {
        title: "VA",
        body: "The VA's covered drug list includes some GLP-1s. What's actually available may vary by VA facility. Ask your VA provider what's stocked at your specific location.",
      },
      SAXENDA_FALLBACK,
      {
        title: "If not covered through military benefits",
        body: `Self-pay is open to anyone — it means paying the full price yourself without using insurance. These prices come directly from the drug makers (as of June 2026). Cheapest first: ${PRICING}`,
        ctas: [FOUNDAYO_DIRECT, NOVOCARE, LILLY_DIRECT],
      },
    ],
  },

  UNINSURED_PILL: {
    type: "endpoint",
    id: "UNINSURED_PILL",
    title: "No insurance + oral pill options",
    steps: [
      PRESCRIPTION_BASICS,
      {
        title: "Foundayo: $149/mo",
        body: "Eli Lilly's newest oral GLP-1, FDA approved April 2026. Through LillyDirect or participating pharmacies. This is the self-pay price (what you pay out of pocket, no insurance needed) — set directly by Lilly. Current as of June 2026.",
        ctas: [FOUNDAYO_DIRECT],
      },
      {
        title: "Wegovy pill: $149/mo",
        body: "Novo Nordisk's oral version of Wegovy (semaglutide). Same self-pay price as Foundayo — set directly by Novo Nordisk through NovoCare. Separate trials (not a head-to-head comparison) suggest ~14% weight loss for Wegovy pill vs ~12% for Foundayo, but the two haven't been studied side-by-side.",
        ctas: [NOVOCARE],
      },
      PILL_COMPARISON,
      GET_PRESCRIBED,
      {
        title: "GoodRx as a pickup option",
        body: "GoodRx has a partnership with Novo Nordisk that lets you pick up Wegovy at 70,000+ retail pharmacies — useful if you'd rather grab it at CVS or Walgreens than ship from a mail-order pharmacy.",
        ctas: [GOODRX],
      },
    ],
  },

  UNINSURED_INJECTION: {
    type: "endpoint",
    id: "UNINSURED_INJECTION",
    title: "No insurance + injection options",
    steps: [
      PRESCRIPTION_BASICS,
      {
        title: "Wegovy pen: $199/mo intro offer (through June 2026)",
        body: "Novo Nordisk's pre-filled Wegovy injector pen through NovoCare. The $199/mo intro rate is for new patients only and expires June 30, 2026 — after that it's $349/mo for standard doses (0.25-2.4mg) or $399/mo for the HD 7.2mg dose. Self-pay (you pay directly, no insurance). Currently the lowest entry point for a brand-name injection (as of June 2026).",
        ctas: [NOVOCARE],
      },
      {
        title: "Wegovy subscription: $249/mo (12-month commit)",
        body: "Novo Nordisk offers a discounted rate of $249/mo if you commit to 12 months. Available through Ro or WeightWatchers. Includes injection or pill. Locks in your price for a year — worth it if you're confident you'll stay on the drug.",
        ctas: [
          { label: "Check Ro", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check WeightWatchers", url: "#affiliate-placeholder", affiliate: true },
        ],
      },
      {
        title: "Zepbound vials: $299-449/mo",
        body: "$299/mo (2.5mg starter dose) and $399/mo (5mg) through LillyDirect. Higher doses (7.5-15mg) are $449/mo under a Lilly self-pay offer through December 31, 2026 if you refill within 45 days — otherwise $499/mo (7.5mg) or $699/mo (10mg and up). These are vials you draw with a syringe yourself, not pre-filled pens.",
        ctas: [LILLY_DIRECT],
      },
      {
        title: "Zepbound KwikPen",
        body: "If drawing from a vial sounds intimidating, the KwikPen is a pre-filled injector pen — much simpler to use. Check LillyDirect for current self-pay pricing.",
        ctas: [LILLY_DIRECT],
      },
      GET_PRESCRIBED,
      {
        title: "Walmart pharmacies",
        body: "Walmart's 4,600 pharmacies offer Zepbound vials at discounted self-pay prices — worth checking if there's one near you.",
      },
    ],
  },

  UNINSURED_ALL: {
    type: "endpoint",
    id: "UNINSURED_ALL",
    title: "All options without insurance (cheapest first)",
    steps: [
      PRESCRIPTION_BASICS,
      {
        title: "$149/mo: Foundayo pill",
        body: "Eli Lilly's oral GLP-1, FDA approved April 2026 — no needles, take it any time of day with or without food. Available through LillyDirect and retail pharmacies. Self-pay only, meaning you pay full price without insurance. Prices on this page are current as of June 2026.",
        ctas: [FOUNDAYO_DIRECT],
      },
      {
        title: "$149/mo: Wegovy pill",
        body: "Novo Nordisk's oral version of Wegovy (semaglutide). Same price as Foundayo but a stricter routine — has to be taken on an empty stomach with a small sip of water, then wait 30 minutes before eating or drinking anything else. Through NovoCare.",
        ctas: [NOVOCARE],
      },
      {
        title: "$199/mo: Wegovy pen (intro offer through June 2026)",
        body: "The Wegovy injection pre-filled in a pen, through NovoCare. The $199/mo intro rate is for new patients only and expires June 30, 2026 — after that the pen is $349/mo for standard doses (0.25-2.4mg) or $399/mo for the HD 7.2mg dose. Most flexible option (no long-term commitment).",
        ctas: [NOVOCARE],
      },
      {
        title: "$249/mo: Wegovy 12-month subscription",
        body: "A discounted rate if you lock in for 12 months. Includes injection or pill. Available through Ro or WeightWatchers. Cheaper than month-to-month at the higher doses, more expensive at the starter dose — worth it only if you're confident you'll stay on Wegovy for a year.",
        ctas: [
          { label: "Check Ro", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check WeightWatchers", url: "#affiliate-placeholder", affiliate: true },
        ],
      },
      {
        title: "$299/mo: Zepbound vials (2.5mg starter)",
        body: "Through LillyDirect or at Walmart pharmacies. You draw from a vial with a syringe yourself (not a pre-filled pen). Self-pay price set by the manufacturer.",
        ctas: [LILLY_DIRECT],
      },
      {
        title: "$399/mo: Zepbound vials (5mg)",
        body: "Next dose up. Same vial format as the starter dose, through LillyDirect.",
        ctas: [LILLY_DIRECT],
      },
      {
        title: "$449/mo: Zepbound vials (7.5-15mg)",
        body: "All the higher doses (7.5mg, 10mg, 12.5mg, 15mg) through LillyDirect. The $449 price is a Lilly self-pay offer running through December 31, 2026 — you must refill within 45 days of your last order to keep it. Without the offer, the regular price is $499/mo for 7.5mg and $699/mo for 10mg and up.",
        ctas: [LILLY_DIRECT],
      },
      GET_PRESCRIBED,
    ],
    warnings: [
      "You may have heard about compounded GLP-1s at $99-200/mo. The FDA has ended the shortage designations that made them legal at scale, and is moving to permanently ban large-scale compounding. Some small 503A pharmacies still operate, but availability is shrinking and the legal status is uncertain — be cautious about anyone marketing them as cheaper alternatives.",
    ],
  },

  UNSURE_INSURANCE: {
    type: "endpoint",
    id: "UNSURE_INSURANCE",
    title: "Not sure about your insurance",
    steps: [
      {
        title: "How to find out",
        body: "Check your wallet for an insurance card — it'll have the carrier name (like Aetna or Blue Cross) and the plan type printed on it. If you get insurance through work, you can also call your HR department, who can tell you exactly what plan you're on.",
      },
      {
        title: "Quick check tools",
        body: "Several services will check your coverage for you, free. Ro has a GLP-1 Insurance Coverage Checker. Found will call your insurer on your behalf and report back. Weight Watchers has a Cost Estimator. NovoCare's coverage checker tells you whether Wegovy is on your plan.",
        ctas: [
          { label: "Check Ro", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check Found", url: "https://track.revoffers.com/aff_c?offer_id=1162&aff_id=12788&url_id=12126", affiliate: true },
          { label: "Check WeightWatchers", url: "#affiliate-placeholder", affiliate: true },
          NOVOCARE_COVERAGE,
        ],
      },
      {
        title: "If you truly have no insurance",
        body: `You can still get GLP-1s — they just cost more out of pocket. Self-pay means paying the full price yourself, with prices set directly by the drug makers (as of June 2026). Cheapest first: ${PRICING}`,
        ctas: [FOUNDAYO_DIRECT, NOVOCARE, LILLY_DIRECT],
      },
      {
        title: GET_PRESCRIBED.title,
        body:
          "Whatever you find out about your coverage, you'll need a prescription either way — here's how to get one.\n\n" +
          GET_PRESCRIBED.body,
        options: GET_PRESCRIBED.options,
        note: GET_PRESCRIBED.note,
        ctas: GET_PRESCRIBED.ctas,
      },
    ],
  },

  SWITCH_COST: {
    type: "endpoint",
    id: "SWITCH_COST",
    title: "Reducing your GLP-1 costs",
    steps: [
      {
        title: "Check manufacturer savings first",
        body: "Most people leave money on the table here. Zepbound has a Lilly savings card; Wegovy has a NovoCare savings offer. Both are manufacturer coupons that reduce what you pay at the pharmacy. Studies have found patients collectively overpay millions, mostly from missing these programs.",
        ctas: [LILLY_SAVINGS, NOVOCARE_SAVINGS],
      },
      {
        title: "Compare pharmacy prices",
        body: "Same drug, same dose, different prices. Walmart, Costco, and mail-order pharmacies often beat the chains. GoodRx can show you a side-by-side price comparison for your local pharmacies in a few seconds.",
        ctas: [GOODRX],
      },
      {
        title: "Buy direct from the manufacturer",
        body: "Buying directly through LillyDirect (Zepbound, Foundayo) or NovoCare (Wegovy) often costs less than going through a retail pharmacy, especially if you're paying without insurance.",
        ctas: [LILLY_DIRECT, NOVOCARE],
      },
      {
        title: "Wegovy 12-month subscription",
        body: "Novo Nordisk's $249/mo subscription is cheaper than buying Wegovy month-to-month at higher doses — but you commit to 12 months through Ro or WeightWatchers. Worth it if you're confident you'll stay on the drug.",
        ctas: [
          { label: "Check Ro", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check WeightWatchers", url: "#affiliate-placeholder", affiliate: true },
        ],
      },
      {
        title: "Switch medications",
        body: "Foundayo and Wegovy pill at $149/mo are significantly cheaper than the injections. If cost is your main issue and you're open to a pill, ask your prescriber whether switching makes sense for you.",
        ctas: [FOUNDAYO_DIRECT, NOVOCARE],
      },
      {
        title: "Stack savings",
        body: "Discounted pharmacy gift cards (CardCash sells CVS and Walgreens cards below face value) can combine with either a manufacturer savings card or a GoodRx coupon — though those two usually can't be combined with each other.",
      },
    ],
  },

  SWITCH_PROVIDER: {
    type: "endpoint",
    id: "SWITCH_PROVIDER",
    title: "Switching to a better provider",
    steps: [
      {
        title: "Key question",
        body: "Before you switch, make sure your new provider can prescribe your current medication at the same dose you're on. Otherwise you risk a gap — or having to start over from the lowest dose and re-titrate (slowly building back up week by week to where you are now), which takes weeks of stomach side effects.",
      },
      GET_PRESCRIBED,
      {
        title: "Transfer your prescription",
        body: "Once you've picked a new provider, ask them to contact your current pharmacy and transfer your prescription. They handle all the pharmacy-to-pharmacy paperwork — you don't have to do anything.",
      },
      {
        title: "Timing",
        body: "Start signing up with the new provider before your current prescription runs out. Build in at least a week of overlap so you don't end up between doses.",
      },
    ],
  },

  SWITCH_MED: {
    type: "endpoint",
    id: "SWITCH_MED",
    title: "Switching to a different GLP-1 medication",
    steps: [
      {
        title: "Current FDA-approved options for weight loss",
        body: "Injections: Wegovy (semaglutide) and Zepbound (tirzepatide). Pills: Wegovy tablet (semaglutide) and Foundayo (orforglipron). Your prescriber will help figure out which is the right fit for you.",
      },
      {
        title: "Dose transition",
        body: "Switching to a different GLP-1 usually means starting at the new drug's lowest dose and titrating up — that's the medical term for gradually increasing your dose over weeks. Your prescriber will write a transition plan.",
      },
      {
        title: "Insurance may differ",
        body: "Your plan may cover one GLP-1 and not another. Check what your plan covers before going through the switch — otherwise you might land on something that costs you significantly more.",
      },
      {
        title: "Talk to your prescriber",
        body: "This is a clinical decision, not just a preference. Tell them why you want to switch — side effects, hitting a plateau, cost, or convenience — and work it through together.",
      },
    ],
  },

  SWITCH_PILL: {
    type: "endpoint",
    id: "SWITCH_PILL",
    title: "Switching from injection to oral GLP-1",
    steps: [
      {
        title: "Two pill options now exist",
        body: "Foundayo (orforglipron, by Eli Lilly) is $149/mo paying full price out of pocket, or as low as $25/mo with a commercial insurance savings card (a manufacturer coupon that lowers your copay). Wegovy pill (semaglutide, by Novo Nordisk) is $149/mo self-pay through NovoCare.",
        ctas: [FOUNDAYO_DIRECT, FOUNDAYO_SAVINGS, NOVOCARE],
      },
      PILL_COMPARISON,
      {
        title: "Clinical note",
        body: "Injectable GLP-1s generally produce more weight loss than the pill versions. Talk with your prescriber about whether the convenience of a pill is worth a possibly smaller result for your specific goals.",
      },
      {
        title: "Transition",
        body: "Your prescriber will pick the right starting dose. You may need to titrate — meaning gradually increase the dose over several weeks until you reach your target.",
      },
    ],
  },

  DENIED_PA: {
    type: "endpoint",
    id: "DENIED_PA",
    title: "Insurance denied your prior authorization",
    steps: [
      {
        title: "Read the denial letter",
        body: "Your insurer is legally required to give you a specific reason in writing. The most common ones: your BMI doesn't meet their minimum, you haven't done step therapy (where the insurer requires you to try a cheaper drug first), or the drug isn't on your plan's covered list.",
      },
      {
        title: "Ask your doctor to appeal",
        body: "A denial isn't final. Your doctor's office can file an appeal with additional documentation. The most important piece is usually a letter of medical necessity — a letter from your doctor explaining specifically why you need this drug. That one document overturns a lot of denials.",
      },
      {
        title: "Peer-to-peer review",
        body: "Your doctor can also request a peer-to-peer review — where they speak directly with the insurance company's medical director and argue your case in person (or by phone). These often overturn denials that the paperwork-only appeal didn't.",
      },
      {
        title: "External appeal",
        body: "If you've used up your insurer's internal appeals, you have the right to an external (independent) review by a third party. Your denial letter should include instructions for how to start one.",
      },
      SAXENDA_FALLBACK,
      {
        title: "In parallel: Start self-pay",
        body: `Appeals can take weeks. You don't have to sit around waiting — you can start self-pay (paying out of pocket directly to the drug maker) while the appeal is in progress. Prices as of June 2026, cheapest first: ${PRICING} If the appeal succeeds, you switch back to using insurance.`,
        ctas: [FOUNDAYO_DIRECT, NOVOCARE, LILLY_DIRECT],
      },
      {
        title: "HR escalation (employer plans)",
        body: "If you're on an employer plan, your doctor can write a formal coverage request letter to your HR department asking the plan to make an exception and cover the drug. HR sometimes has leverage with the insurer that individuals don't.",
      },
    ],
    warnings: [
      "Appeals can take 30+ days. If timing matters, don't wait — explore self-pay alternatives in parallel so you're not stuck without medication while the paperwork moves.",
    ],
  },

  DENIED_DOC: {
    type: "endpoint",
    id: "DENIED_DOC",
    title: "Your doctor likely won't prescribe a GLP-1",
    steps: [
      {
        title: "This is more common than you'd think",
        body: "A lot of primary care doctors are still unfamiliar or uncomfortable with prescribing GLP-1s for weight management. If yours says no, it usually doesn't mean you don't qualify — it means your doctor doesn't feel confident prescribing in this area.",
      },
      {
        title: "Ask for a referral",
        body: "Ask for a referral to either an obesity medicine specialist (a doctor whose specialty is treating obesity) or an endocrinologist (a hormone specialist who treats things like diabetes and metabolic conditions). Both routinely prescribe GLP-1s.",
      },
      GET_PRESCRIBED,
      {
        title: "Worth raising: sleep apnea",
        body: "Zepbound is FDA-approved to treat moderate-to-severe obstructive sleep apnea in adults with obesity — a separate approved use from weight loss. If you have sleep apnea, or symptoms like loud snoring, gasping at night, or daytime exhaustion, ask your doctor whether that diagnosis opens a path to a prescription and possible insurance coverage. This is information, not medical advice — your provider decides what's appropriate.",
      },
      {
        title: "Keep your PCP informed",
        body: "Even if you get prescribed through telehealth, tell your regular doctor that you're starting a GLP-1. They should know about every medication you're on so they can keep an eye on your overall health.",
      },
    ],
  },

  DENIED_UNCLEAR: {
    type: "endpoint",
    id: "DENIED_UNCLEAR",
    title: "Understanding your denial",
    steps: [
      {
        title: "Call your insurer",
        body: "Call the member services number on your insurance card. Ask, in these words: “Why was my GLP-1 prescription denied, and what would I need to do to get it approved?” They'll tell you the specific reason — and what would fix it.",
      },
      {
        title: "Common denial reasons",
        body: "Usually it's one of four things. A prior authorization (your doctor formally asking for permission) wasn't submitted. Step therapy is required (you have to try a cheaper drug first). The drug isn't on your plan's covered list. Or your BMI doesn't meet their minimum.",
      },
      {
        title: "Next step depends on the reason",
        body: "If the prior auth wasn't submitted: ask your doctor to submit it. If step therapy is required: ask what cheaper drugs you need to try first. If it's not on your plan's covered list: ask which GLP-1s ARE covered and consider switching. If it's a BMI issue: ask your doctor about documenting any other weight-related conditions (called comorbidities) — things like high blood pressure or sleep apnea — that can flip the answer.",
      },
      SAXENDA_FALLBACK,
      {
        title: "Self-pay while you figure it out",
        body: `While you sort this out, you can start self-pay — paying out of pocket directly to the drug maker — so you're not stuck waiting. Prices as of June 2026, cheapest first: ${PRICING}`,
        ctas: [FOUNDAYO_DIRECT, NOVOCARE, LILLY_DIRECT],
      },
    ],
  },

  COMPOUND: {
    type: "endpoint",
    id: "COMPOUND",
    title: "Currently on compounded GLP-1s: what's changing",
    steps: [
      {
        title: "What happened",
        body: "Compounded GLP-1s exist because the FDA had semaglutide (in Wegovy/Ozempic) and tirzepatide (in Zepbound/Mounjaro) on its official drug shortage list. Once a drug comes off that list, compounding pharmacies aren't legally allowed to keep making copies. The FDA took them off in early 2025, grace periods ended, and in April 2026 the FDA proposed permanently banning large-scale compounding of these drugs.",
      },
      {
        title: "What this means for you",
        body: "Large-scale compounding facilities (called 503B pharmacies — these are big FDA-registered industrial compounders) can no longer legally produce these drugs. Some smaller 503A pharmacies (single-location compounders that mix prescriptions to order) are still operating under different rules, but the legal landscape is uncertain and shrinking.",
      },
      {
        title: "Transition options (cheapest first)",
        body: `All of these are FDA-approved brand-name options (prices as of June 2026). Cheapest first: ${PRICING} A Wegovy 12-month subscription is also available at $249/mo (lock in for a year) through Ro or WeightWatchers.`,
        ctas: [FOUNDAYO_DIRECT, NOVOCARE, LILLY_DIRECT],
      },
      {
        title: "Dose transition",
        body: "Compounded doses don't always map exactly to brand-name doses — the formulations are different. Talk to a prescriber about the right starting dose on the new drug. You may need to titrate up gradually (re-build to your target dose over several weeks).",
      },
      {
        title: "If you have insurance",
        body: "Check whether your plan covers brand-name GLP-1s for weight loss. With brand prices dropping in 2025-2026, some plans that didn't cover GLP-1s before may have started to.",
      },
      {
        title: "Medicare: wait for the Bridge",
        body: "If you're on Medicare Part D, the Bridge program starts July 1, 2026 at $50/mo for covered GLP-1s — a much better deal than self-pay if you can hold out a few weeks.",
      },
    ],
    warnings: [
      "Be cautious of telehealth providers still advertising “compounded GLP-1s” — many are operating in a legal gray area. The FDA has issued 50+ warning letters to compounders and distributors. Stick with FDA-approved brand-name options where safety, supply, and legal status are clear.",
    ],
  },
};

export function getNode(id: string): TreeNode | undefined {
  return TREE[id];
}
