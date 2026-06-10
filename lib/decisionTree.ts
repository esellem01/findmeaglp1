export type Cta = {
  label: string;
  url: string;
  affiliate: boolean;
};

export type Step = {
  title: string;
  body: string;
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

const TELEHEALTH_CTAS: Cta[] = [
  { label: "Check Ro", url: "#affiliate-placeholder", affiliate: true },
  { label: "Check Found", url: "#affiliate-placeholder", affiliate: true },
  { label: "Check ShedRx", url: "#affiliate-placeholder", affiliate: true },
  { label: "Check PlushCare", url: "#affiliate-placeholder", affiliate: true },
  { label: "Check LifeMD", url: "#affiliate-placeholder", affiliate: true },
];

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

const PRESCRIPTION_BASICS: Step = {
  title: "First, how prescriptions work",
  body: "You need a prescription from a licensed doctor or provider to get any GLP-1 — there's no over-the-counter version. But you don't need insurance to get one. A prescription is just your doctor saying this medication is right for you. How you pay for it is a separate question, and that's what the rest of this page is about.",
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
      {
        title: "If covered",
        body: "Foundayo: as low as $25/mo with commercial coverage using Lilly's savings card (a manufacturer coupon that lowers what you pay at the pharmacy). Wegovy pill: check NovoCare's savings offer, which works the same way.",
        ctas: [FOUNDAYO_SAVINGS, NOVOCARE_SAVINGS],
      },
      {
        title: "If denied",
        body: "Don't panic — a denial isn't the end of the road. Your doctor can usually file an appeal, and many denials get overturned. The “denied coverage” path on this site walks through what to do next.",
      },
      {
        title: "Telehealth alternative",
        body: "Your own doctor can prescribe GLP-1s — you don't need telehealth. But if your doctor won't prescribe or you want faster access, telehealth providers like Ro, Found, or ShedRx can prescribe and help navigate your insurance. Most charge $20-$149/mo membership on top of your medication costs. You keep your employer coverage either way.",
        ctas: TELEHEALTH_CTAS,
      },
    ],
    warnings: [
      "The two pills work differently. Foundayo (Eli Lilly) can be taken any time of day with no food restrictions. Wegovy pill has to be taken in the morning on an empty stomach, with a 30-minute wait before you eat anything.",
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
      {
        title: "Get prescribed",
        body: "Your own primary care doctor or an obesity medicine specialist can write the prescription. That's the cheapest path — you're already paying for those visits through insurance. If your doctor won't prescribe, telehealth providers like Ro, Found, or PlushCare can prescribe and work with your existing insurance. Telehealth runs about $20-$149/mo in membership fees on top of your medication costs.",
        ctas: TELEHEALTH_CTAS,
      },
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
    title: "Medicare GLP-1 Bridge program (starts July 1, 2026)",
    steps: [
      {
        title: "What it is",
        body: "A temporary Medicare program running from July 1, 2026 through December 31, 2027. If you qualify and have Medicare Part D, you'll pay $50/month for covered GLP-1 medications instead of the full price.",
      },
      {
        title: "Covered drugs",
        body: "Foundayo (pill), Wegovy (injection and pill), and the Zepbound KwikPen (a pre-filled injector pen). Ozempic is NOT covered — it's only approved for type 2 diabetes through Medicare. Compounded versions are NOT covered either.",
      },
      {
        title: "Who qualifies",
        body: "Three things have to be true. (1) You're enrolled in Medicare Part D. (2) Your BMI is 30 or higher — OR 27+ with a weight-related condition like heart disease, prediabetes, high blood pressure, etc. (3) Your prescriber confirms in writing that you meet the criteria.",
      },
      {
        title: "How to enroll",
        body: "Your Part D plan does NOT need to opt in — this works across all Part D plans automatically. A central Medicare processor handles the approval and the pharmacy claims directly. When the program opens, talk to your doctor about submitting the prior authorization (the formal request to cover the drug).",
      },
      {
        title: "Key detail",
        body: "If you're already on a GLP-1 and have lost weight, don't worry. Your prescriber confirms your ORIGINAL qualifying BMI, not your current weight. Losing weight on the drug doesn't disqualify you from staying on it.",
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
        body: "Three things you need: (1) active Medicare Part D enrollment, (2) BMI 30+ — OR BMI 27+ with at least one of these conditions: heart disease, prediabetes or type 2 diabetes, high blood pressure, high cholesterol, or obstructive sleep apnea, and (3) your prescriber's written confirmation.",
      },
      {
        title: "Next step",
        body: "Schedule a visit with your doctor before July 1, 2026. Ask them to document your BMI and any qualifying conditions in your chart now. That way the prior authorization (the paperwork asking Medicare to cover the drug) is ready to submit the day the program opens.",
      },
      {
        title: "If you don't qualify",
        body: "You can still get a GLP-1 by paying out of pocket. Self-pay means you're paying the full price yourself without using insurance — and these prices come directly from the drug manufacturer. Foundayo: $149/mo. Zepbound: $299-449/mo through LillyDirect. Wegovy: $499/mo through NovoCare.",
        ctas: [FOUNDAYO_DIRECT, LILLY_DIRECT, NOVOCARE],
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
        body: "Right now, Medicare Part D does NOT cover GLP-1s for weight loss. It does cover Ozempic and Mounjaro for type 2 diabetes. If you have T2D, your doctor can prescribe one of those for the diabetes — and weight loss may follow as a side benefit.",
      },
      {
        title: "Self-pay options (no insurance needed)",
        body: "Self-pay means you pay the full price yourself, no insurance involved. These prices come straight from the drug makers. Foundayo pill: $149/mo via LillyDirect. Zepbound injection: $299/mo (2.5mg starter dose), $399/mo (5mg), or $449/mo (higher doses) via LillyDirect. Wegovy: $499/mo via NovoCare Pharmacy.",
        ctas: [FOUNDAYO_DIRECT, LILLY_DIRECT, NOVOCARE],
      },
      {
        title: "Consider waiting",
        body: "If July 2026 is close for you, the Bridge program at $50/mo may be worth the wait vs. paying $149-499/mo out of pocket right now. Talk it through with your doctor — the right answer depends on how urgent things are for you.",
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
        title: "Current landscape",
        body: "Whether Medicaid covers GLP-1s for weight loss depends entirely on what state you're in. Some states cover them, many don't. Plenty of states cover them for type 2 diabetes but not for obesity.",
      },
      {
        title: "Check your state",
        body: "Call your Medicaid plan directly and ask: “Does my plan cover Wegovy or Zepbound for weight management?” The answer depends on your specific state and which managed care plan you're on.",
      },
      {
        title: "BALANCE Model",
        body: "There's a federal pilot called the CMS BALANCE Model that may expand Medicaid GLP-1 coverage starting as early as May 2026 — but only in states that opt in. Not all states will. Ask whether your state has.",
      },
      {
        title: "If not covered",
        body: "You can pay out of pocket regardless of Medicaid. Self-pay means paying the full price yourself — these come from the drug makers directly. Foundayo $149/mo, Zepbound $299-449/mo via LillyDirect, Wegovy $499/mo via NovoCare. Telehealth providers like Ro or PlushCare may bundle the prescription and ongoing care — they charge $20-$149/mo membership on top of the medication.",
        ctas: [FOUNDAYO_DIRECT, LILLY_DIRECT, NOVOCARE, ...TELEHEALTH_CTAS],
      },
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
        body: "Many individual plans exclude weight loss medications entirely — meaning they won't cover them no matter what. Even “good” plans often require prior authorization (your doctor formally asking permission) and have strict rules: a minimum BMI, step therapy (you have to try a cheaper drug first), or documented diet attempts.",
      },
      {
        title: "If covered",
        body: "You're in good shape. Follow the same path as employer insurance: get a prescription, use the manufacturer's savings card to lower your copay (what you pay at the pharmacy), and file a prior authorization if your plan requires one.",
      },
      {
        title: "If not covered or too restrictive",
        body: "You can use self-pay for the medication while keeping insurance for everything else. Self-pay means paying full price without insurance — and these prices come from the manufacturer directly. Foundayo: $149/mo. Zepbound via LillyDirect: $299-449/mo. Wegovy via NovoCare: $499/mo.",
        ctas: [FOUNDAYO_DIRECT, LILLY_DIRECT, NOVOCARE],
      },
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
      {
        title: "If not covered through military benefits",
        body: "Self-pay is open to anyone — it means paying the full price yourself without using insurance. These prices come directly from the drug makers. Foundayo $149/mo, Zepbound $299-449/mo via LillyDirect, Wegovy $499/mo via NovoCare.",
        ctas: [FOUNDAYO_DIRECT, LILLY_DIRECT, NOVOCARE],
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
        title: "Best value: Foundayo",
        body: "$149/mo through LillyDirect or participating pharmacies — that's the self-pay price (what you pay out of pocket, no insurance needed). Take it any time of day, no food restrictions. This is Eli Lilly's newest FDA-approved option (April 2026).",
        ctas: [FOUNDAYO_DIRECT],
      },
      {
        title: "Alternative: Wegovy pill",
        body: "$499/mo through NovoCare Pharmacy. You take it in the morning on an empty stomach and wait 30 minutes before eating anything. It's more expensive, but may produce slightly more weight loss (~14% vs ~12% for Foundayo).",
        ctas: [NOVOCARE],
      },
      {
        title: "How to get prescribed",
        body: "Since you don't have insurance, telehealth is usually the easiest path to a prescription. Providers like Ro, Found, ShedRx, and LifeMD offer online consultations. They charge $20-$149/mo membership, which covers your initial visit, ongoing check-ins, and dose adjustments. The medication is a separate cost.",
        ctas: TELEHEALTH_CTAS,
      },
      {
        title: "GoodRx",
        body: "GoodRx has a partnership with Novo Nordisk that offers Wegovy and Ozempic at $499/mo at 70,000+ retail pharmacies — useful if you'd rather pick up at CVS or Walgreens than ship from a mail-order pharmacy.",
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
        title: "Most affordable brand-name: Zepbound vials",
        body: "$299/mo (2.5mg starter dose), $399/mo (5mg), or $449/mo (higher doses) through LillyDirect. These are vials you draw with a syringe yourself — not pre-filled pens. Self-pay only, no insurance involved.",
        ctas: [LILLY_DIRECT],
      },
      {
        title: "Zepbound KwikPen",
        body: "If drawing from a vial sounds intimidating, the KwikPen is a pre-filled injector pen — much simpler to use. Check LillyDirect for current self-pay pricing.",
        ctas: [LILLY_DIRECT],
      },
      {
        title: "Wegovy injection",
        body: "$499/mo through NovoCare Pharmacy, or via GoodRx at participating retail pharmacies if you'd rather pick up locally.",
        ctas: [NOVOCARE, GOODRX],
      },
      {
        title: "Wegovy subscription",
        body: "Novo Nordisk offers Wegovy at $249/mo if you commit to 12 months. Available through Ro, WeightWatchers, or LifeMD. Cheaper per month than buying month-to-month, but you're locked in for a year.",
        ctas: [
          { label: "Check Ro", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check WeightWatchers", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check LifeMD", url: "#affiliate-placeholder", affiliate: true },
        ],
      },
      {
        title: "How to get prescribed",
        body: "Without insurance, telehealth is usually the easiest path. Ro, Found, ShedRx, LifeMD, and PlushCare all handle the consultation and ship the medication to your door. They charge $20-$149/mo membership, which covers your visit and ongoing check-ins. Medication is a separate cost.",
        ctas: TELEHEALTH_CTAS,
      },
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
        body: "Eli Lilly's oral GLP-1 — no needles, take it any time of day. Available through LillyDirect and retail pharmacies. The newest FDA-approved option (April 2026). Self-pay only, meaning you pay full price without insurance.",
        ctas: [FOUNDAYO_DIRECT],
      },
      {
        title: "$249/mo: Wegovy subscription",
        body: "12-month commitment through Ro, WeightWatchers, or LifeMD. Includes the injection or pill. The cheapest way to get Wegovy if you're willing to lock in for a year.",
        ctas: [
          { label: "Check Ro", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check WeightWatchers", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check LifeMD", url: "#affiliate-placeholder", affiliate: true },
        ],
      },
      {
        title: "$299/mo: Zepbound vials (2.5mg)",
        body: "Starter dose. You draw from a vial with a syringe yourself (not a pre-filled pen). Available through LillyDirect or at Walmart pharmacies. This is the self-pay price set by the manufacturer.",
        ctas: [LILLY_DIRECT],
      },
      {
        title: "$399/mo: Zepbound vials (5mg)",
        body: "Next dose up. Same vial format as the starter dose, through LillyDirect.",
        ctas: [LILLY_DIRECT],
      },
      {
        title: "$449/mo: Zepbound vials (7.5-15mg)",
        body: "All the higher doses (7.5mg, 10mg, 12.5mg, 15mg). Through LillyDirect.",
        ctas: [LILLY_DIRECT],
      },
      {
        title: "$499/mo: Wegovy injection or pill (month-to-month)",
        body: "Through NovoCare Pharmacy or GoodRx at retail pharmacies. The most flexible option (no long-term commitment), but also the highest price tag.",
        ctas: [NOVOCARE, GOODRX],
      },
      {
        title: "Telehealth to get prescribed",
        body: "Before any of the above will sell to you, you need a prescription. Without insurance, telehealth is usually the easiest route. Ro, Found, ShedRx, PlushCare, and LifeMD bundle the consultation, prescription, and shipping. Most charge $20-$149/mo membership, which covers the visit and ongoing check-ins. The medication itself is a separate cost.",
        ctas: TELEHEALTH_CTAS,
      },
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
          { label: "Check Found", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check WeightWatchers", url: "#affiliate-placeholder", affiliate: true },
          NOVOCARE_COVERAGE,
        ],
      },
      {
        title: "If you truly have no insurance",
        body: "You can still get GLP-1s — they just cost more out of pocket. Self-pay means paying the full price yourself, with prices set directly by the drug makers. Foundayo starts at $149/mo, Zepbound starts at $299/mo.",
        ctas: [FOUNDAYO_DIRECT, LILLY_DIRECT],
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
        body: "Most people leave money on the table here. Zepbound has a Lilly savings card; Wegovy has a NovoCare savings offer. Both are manufacturer coupons that reduce what you pay at the pharmacy. A 2025 study found patients overpaid by $10M in one quarter — mostly from missing these programs.",
        ctas: [LILLY_SAVINGS, NOVOCARE_SAVINGS],
      },
      {
        title: "Compare pharmacy prices",
        body: "Same drug, same dose, different prices. Walmart, Costco, and mail-order pharmacies often beat the chains. GoodRx can show you a side-by-side price comparison for your local pharmacies in a few seconds.",
        ctas: [GOODRX],
      },
      {
        title: "Consider LillyDirect or NovoCare direct",
        body: "Buying directly from the manufacturer often costs less than going through a retail pharmacy, especially if you're paying without insurance.",
        ctas: [LILLY_DIRECT, NOVOCARE],
      },
      {
        title: "Wegovy subscription",
        body: "Novo Nordisk's $249/mo subscription is cheaper than buying Wegovy month-to-month — but you commit to 12 months through Ro, WeightWatchers, or LifeMD. Worth it if you're confident you'll stay on the drug for the year.",
        ctas: [
          { label: "Check Ro", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check WeightWatchers", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check LifeMD", url: "#affiliate-placeholder", affiliate: true },
        ],
      },
      {
        title: "Switch medications",
        body: "Foundayo at $149/mo is significantly cheaper than Wegovy or Zepbound injections. If cost is your main issue and you're open to a pill, ask your prescriber whether switching to Foundayo makes sense for you.",
        ctas: [FOUNDAYO_DIRECT],
      },
      {
        title: "Stack savings",
        body: "If you really want to squeeze costs down: buy discounted pharmacy gift cards (CardCash sells them at a discount for CVS and Walgreens), combine with a manufacturer savings card, and use a GoodRx coupon. All three can stack together.",
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
      {
        title: "Telehealth options",
        body: "Ro, Found, ShedRx, PlushCare, and LifeMD all offer ongoing GLP-1 management. They charge $20-$149/mo membership which covers your visits and ongoing check-ins. When comparing, look at: how well they handle insurance (if you have it), how quickly they reply to messages, and how often they check in with you.",
        ctas: TELEHEALTH_CTAS,
      },
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
        body: "Foundayo (orforglipron, by Eli Lilly): take it any time, no food restrictions. $149/mo paying full price out of pocket, or as low as $25/mo with a commercial insurance savings card (a manufacturer coupon that lowers your copay). Wegovy pill (semaglutide, by Novo Nordisk): morning on an empty stomach, then wait 30 min before eating.",
        ctas: [FOUNDAYO_DIRECT, FOUNDAYO_SAVINGS, NOVOCARE],
      },
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
      {
        title: "In parallel: Start self-pay",
        body: "Appeals can take weeks. You don't have to sit around waiting — you can start self-pay (paying out of pocket directly to the drug maker) while the appeal is in progress. Foundayo $149/mo, Zepbound $299-449/mo via LillyDirect. If the appeal succeeds, you switch back to using insurance.",
        ctas: [FOUNDAYO_DIRECT, LILLY_DIRECT],
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
    title: "Your doctor won't prescribe a GLP-1",
    steps: [
      {
        title: "This is more common than you'd think",
        body: "Lots of primary care doctors are still unfamiliar or uncomfortable with prescribing GLP-1s for weight management. If yours says no, it usually doesn't mean you don't qualify — it means your doctor doesn't feel confident prescribing in this area.",
      },
      {
        title: "Ask for a referral",
        body: "Ask for a referral to either an obesity medicine specialist (a doctor whose specialty is treating obesity) or an endocrinologist (a hormone specialist who treats things like diabetes and metabolic conditions). Both routinely prescribe GLP-1s.",
      },
      {
        title: "Telehealth",
        body: "Licensed telehealth providers like Ro, Found, ShedRx, PlushCare, and LifeMD specialize in GLP-1 prescribing — it's a big part of what they do. They can prescribe in parallel with your existing doctor. They charge $20-$149/mo membership, which covers visits and check-ins; medication is a separate cost.",
        ctas: TELEHEALTH_CTAS,
      },
      {
        title: "LillyDirect",
        body: "Eli Lilly's direct platform includes telehealth through their partner FORM Health. They can prescribe Zepbound or Foundayo and ship the medication straight to you.",
        ctas: [FOUNDAYO_DIRECT, LILLY_DIRECT],
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
      {
        title: "Self-pay while you figure it out",
        body: "While you sort this out, you can start self-pay — paying out of pocket directly to the drug maker — so you're not stuck waiting. Foundayo $149/mo. Zepbound via LillyDirect $299-449/mo.",
        ctas: [FOUNDAYO_DIRECT, LILLY_DIRECT],
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
        body: "All of these are FDA-approved brand-name options. Foundayo pill: $149/mo, no needles, via LillyDirect. Zepbound vials: starts at $299/mo (2.5mg) via LillyDirect. Wegovy subscription: $249/mo (12-month commitment). Wegovy month-to-month: $499/mo via NovoCare.",
        ctas: [FOUNDAYO_DIRECT, LILLY_DIRECT, NOVOCARE],
      },
      {
        title: "Dose transition",
        body: "Compounded doses don't always map exactly to brand-name doses — the formulations are different. Talk to a prescriber about the right starting dose on the new drug. You may need to titrate up gradually (re-build to your target dose over several weeks).",
      },
      {
        title: "If you have insurance",
        body: "Check whether your plan covers brand-name GLP-1s for weight loss. With brand prices dropping in 2025-2026, some plans that didn't cover GLP-1s before have started to.",
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
