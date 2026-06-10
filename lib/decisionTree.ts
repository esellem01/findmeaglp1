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
        body: "Call the number on your insurance card and ask: “Is Wegovy oral tablet or Foundayo covered on my plan for weight management?” Ask about tier, copay, and whether prior authorization is required.",
      },
      {
        title: "Talk to your doctor",
        body: "Ask your PCP or an obesity medicine specialist to prescribe. Bring what you learned about your plan's coverage so they know which drug to write for.",
      },
      {
        title: "If covered",
        body: "Foundayo: as low as $25/mo with commercial coverage using Lilly's savings card. Wegovy pill: check NovoCare savings offer for copay reduction.",
        ctas: [FOUNDAYO_SAVINGS, NOVOCARE_SAVINGS],
      },
      {
        title: "If denied",
        body: "Don't panic. Your doctor can file a prior authorization or appeal. See the “denied coverage” path for detailed next steps.",
      },
      {
        title: "Telehealth alternative",
        body: "If your PCP won't prescribe, telehealth providers like Ro, Found, or ShedRx can prescribe and help navigate your insurance. You keep your employer coverage.",
        ctas: TELEHEALTH_CTAS,
      },
    ],
    warnings: [
      "Foundayo (Eli Lilly) can be taken any time of day with no food restrictions. Wegovy pill must be taken in the morning on an empty stomach with a 30-min wait before eating.",
    ],
  },

  EMPLOYER_INJECTION: {
    type: "endpoint",
    id: "EMPLOYER_INJECTION",
    title: "Employer insurance + injection path",
    steps: [
      {
        title: "Check what your plan covers",
        body: "Call your insurer: “Is Wegovy or Zepbound covered for weight management?” One may be covered and not the other. Ask about tier and prior auth requirements.",
      },
      {
        title: "Get prescribed",
        body: "Your PCP or an obesity medicine specialist can prescribe. If they won't, telehealth providers (Ro, Found, PlushCare) can prescribe and work with your existing insurance.",
        ctas: TELEHEALTH_CTAS,
      },
      {
        title: "Manufacturer savings",
        body: "Zepbound: Lilly savings card can reduce copay. Wegovy: NovoCare savings offer. These stack with your insurance coverage.",
        ctas: [LILLY_SAVINGS, NOVOCARE_SAVINGS],
      },
      {
        title: "If denied",
        body: "Your doctor can file prior authorization. If PA is denied, they can appeal or request a peer-to-peer review. See the “denied” path for the full playbook.",
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
        body: "A temporary Medicare program running July 1, 2026 through December 31, 2027. Eligible Medicare Part D beneficiaries pay $50/month for covered GLP-1 medications.",
      },
      {
        title: "Covered drugs",
        body: "Foundayo (pill), Wegovy injection and pill, and Zepbound KwikPen. NOT Ozempic (diabetes only) or compounded versions.",
      },
      {
        title: "Who qualifies",
        body: "Must be enrolled in Medicare Part D. BMI of 30+ OR BMI 27+ with a weight-related condition (heart disease, prediabetes, high blood pressure, etc.). Your prescriber must attest to eligibility.",
      },
      {
        title: "How to enroll",
        body: "Your Part D plan does NOT need to opt in. A central Medicare processor handles approvals and claims directly. Talk to your doctor about submitting the prior authorization when the program opens.",
      },
      {
        title: "Key detail",
        body: "If you're already on a GLP-1, your prescriber attests to your ORIGINAL qualifying BMI, not your current weight. So weight loss doesn't disqualify you.",
      },
    ],
    warnings: [
      "The BALANCE Model (longer-term program) has been delayed indefinitely. The Bridge program is extended through 2027, but there is no guarantee of what comes after.",
    ],
  },

  MEDICARE_QUALIFY: {
    type: "endpoint",
    id: "MEDICARE_QUALIFY",
    title: "Qualifying for the Medicare Bridge",
    steps: [
      {
        title: "Eligibility checklist",
        body: "1) Active Medicare Part D enrollment. 2) BMI 30+ OR BMI 27+ with at least one: heart disease, prediabetes/type 2 diabetes, high blood pressure, high cholesterol, or obstructive sleep apnea. 3) Prescriber attestation.",
      },
      {
        title: "Next step",
        body: "Schedule a visit with your doctor before July 1. Ask them to document your BMI and qualifying conditions now, so the prior authorization is ready to submit when the program opens.",
      },
      {
        title: "If you don't qualify",
        body: "Self-pay options exist: Foundayo at $149/mo, LillyDirect Zepbound at $299-449/mo, or NovoCare Wegovy at $499/mo. All available regardless of insurance status.",
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
        body: "Medicare Part D does NOT cover GLP-1s for weight loss. It covers Ozempic and Mounjaro for type 2 diabetes only. If you have T2D, your doctor can prescribe for that indication.",
      },
      {
        title: "Self-pay options (no insurance needed)",
        body: "Foundayo pill: $149/mo via LillyDirect. Zepbound injection: $299/mo (2.5mg), $399/mo (5mg), $449/mo (7.5-15mg) via LillyDirect. Wegovy: $499/mo via NovoCare Pharmacy.",
        ctas: [FOUNDAYO_DIRECT, LILLY_DIRECT, NOVOCARE],
      },
      {
        title: "Consider waiting",
        body: "If July is close, the Bridge program at $50/mo may be worth the wait vs. paying $149-499/mo out of pocket. Discuss timing with your doctor.",
      },
    ],
  },

  MEDICAID: {
    type: "endpoint",
    id: "MEDICAID",
    title: "Medicaid coverage for GLP-1s",
    steps: [
      {
        title: "Current landscape",
        body: "Only some state Medicaid programs cover GLP-1s for weight loss. Coverage varies dramatically by state. Many cover for type 2 diabetes but not obesity.",
      },
      {
        title: "Check your state",
        body: "Call your Medicaid plan directly and ask about coverage for Wegovy or Zepbound for weight management. The answer depends on your specific state and managed care plan.",
      },
      {
        title: "BALANCE Model",
        body: "The CMS BALANCE Model may expand Medicaid GLP-1 coverage starting as early as May 2026 for states that opt in. Not all states will participate. Check if your state has opted in.",
      },
      {
        title: "If not covered",
        body: "Self-pay: Foundayo at $149/mo, Zepbound at $299-449/mo via LillyDirect, Wegovy at $499/mo via NovoCare. Some telehealth providers also offer lower-cost options.",
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
        body: "Whether you bought through healthcare.gov or directly from a carrier like Blue Shield, check if your specific plan covers GLP-1s for weight management. Call the number on your card.",
      },
      {
        title: "Key distinction",
        body: "Many individual plans exclude weight loss medications entirely. Even “good” plans may require prior authorization and have strict criteria (BMI thresholds, documented diet attempts).",
      },
      {
        title: "If covered",
        body: "Follow the same path as employer insurance: get a prescription, use manufacturer savings cards to reduce copay, file prior auth if required.",
      },
      {
        title: "If not covered or too restrictive",
        body: "You can use self-pay options alongside your insurance for everything else. Foundayo: $149/mo. LillyDirect Zepbound: $299-449/mo. NovoCare Wegovy: $499/mo.",
        ctas: [FOUNDAYO_DIRECT, LILLY_DIRECT, NOVOCARE],
      },
      {
        title: "Open enrollment tip",
        body: "When shopping for next year's plan, check each plan's covered drug list BEFORE enrolling. Look for plans that cover Wegovy or Zepbound on a reasonable tier.",
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
        body: "TRICARE covers some GLP-1s with prior authorization. Coverage depends on your specific TRICARE plan (Prime, Select, etc.) and the prescribing indication. Call TRICARE directly to confirm.",
      },
      {
        title: "VA",
        body: "The VA's covered drug list includes some GLP-1s. Availability may vary by VA facility. Talk to your VA provider about what's available at your location.",
      },
      {
        title: "If not covered through military benefits",
        body: "Self-pay options work for anyone: Foundayo $149/mo, LillyDirect Zepbound $299-449/mo, NovoCare Wegovy $499/mo.",
        ctas: [FOUNDAYO_DIRECT, LILLY_DIRECT, NOVOCARE],
      },
    ],
  },

  UNINSURED_PILL: {
    type: "endpoint",
    id: "UNINSURED_PILL",
    title: "No insurance + oral pill options",
    steps: [
      {
        title: "Best value: Foundayo",
        body: "$149/mo self-pay through LillyDirect or participating pharmacies. Can be taken any time of day, no food restrictions. Eli Lilly's newest FDA-approved option (April 2026).",
        ctas: [FOUNDAYO_DIRECT],
      },
      {
        title: "Alternative: Wegovy pill",
        body: "$499/mo through NovoCare Pharmacy. Must be taken in the morning on empty stomach, wait 30 min before eating. More expensive but may achieve slightly higher weight loss (~14% vs ~12%).",
        ctas: [NOVOCARE],
      },
      {
        title: "How to get prescribed",
        body: "You need a prescription from a licensed provider. Telehealth options: Ro, Found, ShedRx, LifeMD all offer online consultations. Some have $0 initial consult fees.",
        ctas: TELEHEALTH_CTAS,
      },
      {
        title: "GoodRx",
        body: "GoodRx now offers Wegovy and Ozempic at $499/mo at 70,000+ retail pharmacies through their Novo Nordisk partnership.",
        ctas: [GOODRX],
      },
    ],
  },

  UNINSURED_INJECTION: {
    type: "endpoint",
    id: "UNINSURED_INJECTION",
    title: "No insurance + injection options",
    steps: [
      {
        title: "Most affordable brand-name: Zepbound vials",
        body: "$299/mo (2.5mg), $399/mo (5mg), $449/mo (7.5-15mg) through LillyDirect. These are vials you draw with a syringe, not auto-injector pens.",
        ctas: [LILLY_DIRECT],
      },
      {
        title: "Zepbound KwikPen",
        body: "Easier to use than vials (pre-filled pen). Check LillyDirect for current pricing.",
        ctas: [LILLY_DIRECT],
      },
      {
        title: "Wegovy injection",
        body: "$499/mo through NovoCare Pharmacy or GoodRx at participating pharmacies.",
        ctas: [NOVOCARE, GOODRX],
      },
      {
        title: "Wegovy subscription",
        body: "Novo Nordisk now offers $249/mo at 12-month commitment through Ro, WeightWatchers, and LifeMD.",
        ctas: [
          { label: "Check Ro", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check WeightWatchers", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check LifeMD", url: "#affiliate-placeholder", affiliate: true },
        ],
      },
      {
        title: "How to get prescribed",
        body: "Telehealth: Ro, Found, ShedRx, LifeMD, PlushCare. Many handle the prescription and ship medication to your door.",
        ctas: TELEHEALTH_CTAS,
      },
      {
        title: "Walmart pharmacies",
        body: "Walmart's 4,600 pharmacies offer Zepbound vials at discounted self-pay pricing.",
      },
    ],
  },

  UNINSURED_ALL: {
    type: "endpoint",
    id: "UNINSURED_ALL",
    title: "All options without insurance (cheapest first)",
    steps: [
      {
        title: "$149/mo: Foundayo pill",
        body: "Eli Lilly's oral GLP-1. No needles, take any time of day. Available through LillyDirect and retail pharmacies. Newest option (FDA approved April 2026).",
        ctas: [FOUNDAYO_DIRECT],
      },
      {
        title: "$249/mo: Wegovy subscription",
        body: "12-month commitment through Ro, WeightWatchers, or LifeMD. Injection or pill.",
        ctas: [
          { label: "Check Ro", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check WeightWatchers", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check LifeMD", url: "#affiliate-placeholder", affiliate: true },
        ],
      },
      {
        title: "$299/mo: Zepbound vials (2.5mg)",
        body: "Starter dose tirzepatide injection via LillyDirect. Also available at Walmart pharmacies.",
        ctas: [LILLY_DIRECT],
      },
      {
        title: "$399/mo: Zepbound vials (5mg)",
        body: "Via LillyDirect.",
        ctas: [LILLY_DIRECT],
      },
      {
        title: "$449/mo: Zepbound vials (7.5-15mg)",
        body: "All higher doses via LillyDirect.",
        ctas: [LILLY_DIRECT],
      },
      {
        title: "$499/mo: Wegovy injection or pill (month-to-month)",
        body: "Through NovoCare Pharmacy or GoodRx at retail pharmacies.",
        ctas: [NOVOCARE, GOODRX],
      },
      {
        title: "Telehealth to get prescribed",
        body: "Ro, Found, ShedRx, PlushCare, LifeMD. Many bundle the consultation and prescription into one visit.",
        ctas: TELEHEALTH_CTAS,
      },
    ],
    warnings: [
      "Compounded GLP-1s were previously available at $99-200/mo but the FDA has ended shortage designations and is moving to permanently ban large-scale compounding. Some 503A pharmacies still operate but availability is shrinking and legal status is uncertain.",
    ],
  },

  UNSURE_INSURANCE: {
    type: "endpoint",
    id: "UNSURE_INSURANCE",
    title: "Not sure about your insurance",
    steps: [
      {
        title: "How to find out",
        body: "Check your wallet for an insurance card. The card will say the carrier name and plan type. If you get insurance through work, call your HR department.",
      },
      {
        title: "Quick check tools",
        body: "Ro offers a free GLP-1 Insurance Coverage Checker. Found will call your insurer on your behalf for free. Weight Watchers has a Cost Estimator tool. NovoCare has its own coverage checker for Wegovy.",
        ctas: [
          { label: "Check Ro", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check Found", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check WeightWatchers", url: "#affiliate-placeholder", affiliate: true },
          NOVOCARE_COVERAGE,
        ],
      },
      {
        title: "If you truly have no insurance",
        body: "You can still access GLP-1s through self-pay. Foundayo starts at $149/mo. Zepbound starts at $299/mo. No insurance required.",
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
        body: "Zepbound: Lilly savings card. Wegovy: NovoCare savings offer. A DoseSpot study found patients overpaid by $10M in one quarter, mostly from missed manufacturer programs.",
        ctas: [LILLY_SAVINGS, NOVOCARE_SAVINGS],
      },
      {
        title: "Compare pharmacy prices",
        body: "Prices vary between pharmacies. Walmart, Costco, and mail-order pharmacies often have lower prices. GoodRx can show price comparisons.",
        ctas: [GOODRX],
      },
      {
        title: "Consider LillyDirect or NovoCare direct",
        body: "Buying direct from the manufacturer often costs less than retail pharmacy, especially without insurance.",
        ctas: [LILLY_DIRECT, NOVOCARE],
      },
      {
        title: "Wegovy subscription",
        body: "Novo Nordisk now offers $249/mo with 12-month commitment through Ro, WeightWatchers, LifeMD.",
        ctas: [
          { label: "Check Ro", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check WeightWatchers", url: "#affiliate-placeholder", affiliate: true },
          { label: "Check LifeMD", url: "#affiliate-placeholder", affiliate: true },
        ],
      },
      {
        title: "Switch medications",
        body: "Foundayo at $149/mo self-pay is significantly cheaper than Wegovy or Zepbound injections. Discuss with your prescriber.",
        ctas: [FOUNDAYO_DIRECT],
      },
      {
        title: "Stack savings",
        body: "Discounted pharmacy gift cards (CardCash for CVS/Walgreens) + manufacturer savings + GoodRx coupons can be combined.",
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
        body: "Make sure your new provider can prescribe your current medication at your current dose to avoid a gap or having to re-titrate from scratch.",
      },
      {
        title: "Telehealth options",
        body: "Ro, Found, ShedRx, PlushCare, and LifeMD all offer ongoing GLP-1 management. Compare on: insurance support, messaging access, follow-up frequency.",
        ctas: TELEHEALTH_CTAS,
      },
      {
        title: "Transfer your prescription",
        body: "Ask your new provider to contact your current pharmacy for prescription transfer.",
      },
      {
        title: "Timing",
        body: "Start the new provider process before your current prescription runs out. Build in at least a week of overlap.",
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
        body: "Injections: Wegovy (semaglutide), Zepbound (tirzepatide). Pills: Wegovy tablet (semaglutide), Foundayo (orforglipron). Your prescriber helps determine which is right.",
      },
      {
        title: "Dose transition",
        body: "Switching usually means starting at the new drug's lowest dose and re-titrating up. Your prescriber will create a transition plan.",
      },
      {
        title: "Insurance may differ",
        body: "Your plan may cover one GLP-1 but not another. Check what your plan covers before switching.",
      },
      {
        title: "Talk to your prescriber",
        body: "This is a clinical decision. Discuss why you want to switch (side effects, plateau, cost, convenience).",
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
        body: "Foundayo (orforglipron by Eli Lilly): take any time, no food restrictions, $149/mo self-pay or $25/mo with commercial insurance savings card. Wegovy pill (semaglutide by Novo Nordisk): morning on empty stomach, 30-min food wait.",
        ctas: [FOUNDAYO_DIRECT, FOUNDAYO_SAVINGS, NOVOCARE],
      },
      {
        title: "Clinical note",
        body: "Injectable GLP-1s generally produce more weight loss than oral versions. Discuss with your prescriber whether the convenience tradeoff is right for your goals.",
      },
      {
        title: "Transition",
        body: "Your prescriber will determine the appropriate starting dose. You may need to re-titrate.",
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
        body: "Your insurer must provide a specific reason. Common: BMI doesn't meet threshold, haven't completed step therapy, the drug isn't on your plan's covered list.",
      },
      {
        title: "Ask your doctor to appeal",
        body: "File an appeal with additional documentation. A letter of medical necessity can make the difference.",
      },
      {
        title: "Peer-to-peer review",
        body: "Your doctor can request a peer-to-peer review, speaking directly with the insurance company's medical director. Often overturns denials.",
      },
      {
        title: "External appeal",
        body: "If internal appeals fail, you have the right to an external (independent) review. Your denial letter should include instructions.",
      },
      {
        title: "In parallel: Start self-pay",
        body: "While appealing, begin treatment through self-pay. Foundayo $149/mo, Zepbound $299-449/mo via LillyDirect. If appeal succeeds, switch back.",
        ctas: [FOUNDAYO_DIRECT, LILLY_DIRECT],
      },
      {
        title: "HR escalation (employer plans)",
        body: "Your doctor can write a formal coverage request letter to your HR department asking the plan to make an exception and cover the drug.",
      },
    ],
    warnings: [
      "Appeals can take 30+ days. Don't wait to start exploring self-pay alternatives in parallel if timing matters.",
    ],
  },

  DENIED_DOC: {
    type: "endpoint",
    id: "DENIED_DOC",
    title: "Your doctor won't prescribe a GLP-1",
    steps: [
      {
        title: "This is common",
        body: "Many PCPs are unfamiliar or uncomfortable with GLP-1 prescribing for weight management. This doesn't mean you don't qualify.",
      },
      {
        title: "Ask for a referral",
        body: "Request a referral to an obesity medicine specialist or endocrinologist.",
      },
      {
        title: "Telehealth",
        body: "Licensed telehealth providers like Ro, Found, ShedRx, PlushCare, and LifeMD specialize in GLP-1 prescribing. They can prescribe alongside your existing doctor.",
        ctas: TELEHEALTH_CTAS,
      },
      {
        title: "LillyDirect",
        body: "Eli Lilly's direct platform includes a telehealth consultation through their partner FORM Health. They can prescribe Zepbound or Foundayo and ship directly.",
        ctas: [FOUNDAYO_DIRECT, LILLY_DIRECT],
      },
      {
        title: "Keep your PCP informed",
        body: "Even if prescribed through telehealth, let your PCP know so they can monitor your overall health.",
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
        body: "Call the member services number on your card. Ask: “Why was my GLP-1 prescription denied? What would I need to get it approved?”",
      },
      {
        title: "Common denial reasons",
        body: "Prior authorization not submitted yet. Step therapy needed. Not on your plan's covered list. BMI threshold not met.",
      },
      {
        title: "Next step depends on reason",
        body: "If PA wasn't submitted: ask your doctor to submit it. If step therapy: ask what's required. If not on your plan's covered list: ask which GLP-1s ARE covered. If BMI: ask about documenting comorbidities.",
      },
      {
        title: "Self-pay while you figure it out",
        body: "Foundayo: $149/mo. LillyDirect Zepbound: $299-449/mo. No insurance needed.",
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
        body: "The FDA removed semaglutide and tirzepatide from the drug shortage list in early 2025. Grace periods for compounding pharmacies have passed. In April 2026, the FDA proposed permanently banning large-scale (503B) compounding of these drugs.",
      },
      {
        title: "What this means for you",
        body: "Large-scale compounding facilities (503B) can no longer legally produce compounded semaglutide or tirzepatide. Some smaller 503A pharmacies continue under different legal rules, but the landscape is uncertain and narrowing.",
      },
      {
        title: "Transition options (cheapest first)",
        body: "Foundayo pill: $149/mo, no needles, via LillyDirect. Zepbound vials: $299/mo (2.5mg) via LillyDirect. Wegovy subscription: $249/mo (12-month commitment). Wegovy month-to-month: $499/mo via NovoCare. All FDA-approved.",
        ctas: [FOUNDAYO_DIRECT, LILLY_DIRECT, NOVOCARE],
      },
      {
        title: "Dose transition",
        body: "Compounded doses may not map exactly to brand-name doses. Talk to a prescriber about the right starting dose. You may need to re-titrate.",
      },
      {
        title: "If you have insurance",
        body: "Check if your plan covers brand-name GLP-1s. With brand prices dropping, some plans have added coverage.",
      },
      {
        title: "Medicare: wait for the Bridge",
        body: "If on Medicare, the Bridge program starts July 1, 2026 at $50/mo.",
      },
    ],
    warnings: [
      "Some telehealth providers advertising “compounded GLP-1s” may be operating in a legal gray area. The FDA has issued 50+ warning letters to compounders and distributors. Prioritize FDA-approved options for safety and supply reliability.",
    ],
  },
};

export function getNode(id: string): TreeNode | undefined {
  return TREE[id];
}
