# FindMeAGLP1.com — Complete Decision Tree

## Overview
Interactive quiz that helps users navigate GLP-1 medication access based on their insurance type, current situation, and preferences. Each endpoint provides specific, actionable recommendations ordered from cheapest to most expensive, with affiliate links to telehealth providers where applicable.

## Key Context (June 2026)
- FDA proposed permanently banning large-scale (503B) compounding of semaglutide, tirzepatide, and liraglutide (April 30, 2026). Comment period open through June 29, 2026.
- Medicare GLP-1 Bridge program launches July 1, 2026. Eligible Part D beneficiaries pay $50/month through December 31, 2027.
- Two oral GLP-1 pills now exist: Wegovy pill (approved Dec 2025), Foundayo/orforglipron (approved April 1, 2026).
- Novo Nordisk launched Wegovy subscription: $249/mo at 12-month tier through Ro, WeightWatchers, LifeMD.
- Foundayo: $149/mo self-pay, $25/mo with commercial insurance savings card. Can be taken any time, no food restrictions.
- Zepbound vials via LillyDirect: $299/mo (2.5mg), $399/mo (5mg), $449/mo (7.5-15mg).
- Wegovy via NovoCare: $499/mo. Also available through GoodRx at $499/mo at 70,000+ pharmacies.

---

## QUESTION 1: Entry Point
**"Where are you in your GLP-1 journey?"**

Options:
- A) I'm exploring GLP-1s for the first time → Go to Q2 (Insurance)
- B) I'm on one but need a cheaper or better option → Go to SWITCHING branch
- C) I was denied coverage and need help → Go to DENIED branch
- D) I'm on a compounded version and worried about FDA changes → Go to COMPOUND endpoint

---

## QUESTION 2: Insurance Type
**"What type of health insurance do you have?"**

Options:
- A) Through my job (employer plan) → Go to Q3 (Needle preference, employer path)
- B) Medicare → Go to MEDICARE branch
- C) Medicaid → Go to MEDICAID endpoint
- D) I buy my own plan (individual) → Go to INDIVIDUAL endpoint
- E) Military / VA / TRICARE → Go to MILITARY endpoint
- F) No insurance → Go to Q3 (Needle preference, uninsured path)
- G) I'm not sure → Go to UNSURE_INSURANCE endpoint

---

## QUESTION 3: Needle Preference
**"Do you have a preference between injections and pills?"**

Options:
- A) I prefer pills (no needles)
- B) I'm fine with injections
- C) No preference / show me everything

This question branches differently depending on whether user came from employer or uninsured path.

---

## ENDPOINTS

### EMPLOYER + PILL PATH
**Title: "Employer insurance + oral pill path"**

Steps:
1. **Check your formulary** — Call the number on your insurance card and ask: "Is Wegovy oral tablet or Foundayo covered on my plan for weight management?" Ask about tier, copay, and whether prior authorization is required.
2. **Talk to your doctor** — Ask your PCP or an obesity medicine specialist to prescribe. Bring your formulary info so they know which drug to write for.
3. **If covered** — Foundayo: as low as $25/mo with commercial coverage using Lilly's savings card. Wegovy pill: check NovoCare savings offer for copay reduction.
4. **If denied** — Don't panic. Your doctor can file a prior authorization or appeal. See the "denied coverage" path for detailed next steps.
5. **Telehealth alternative** — If your PCP won't prescribe, telehealth providers like Ro, Found, or ShedRx can prescribe and help navigate your insurance. You keep your employer coverage. [AFFILIATE LINKS HERE]

⚠️ Important: Foundayo (Eli Lilly) can be taken any time of day with no food restrictions. Wegovy pill must be taken in the morning on an empty stomach with a 30-min wait before eating.

---

### EMPLOYER + INJECTION PATH
**Title: "Employer insurance + injection path"**

Steps:
1. **Check your formulary** — Call your insurer: "Is Wegovy or Zepbound covered for weight management?" One may be covered and not the other. Ask about tier and prior auth requirements.
2. **Get prescribed** — Your PCP or an obesity medicine specialist can prescribe. If they won't, telehealth providers (Ro, Found, PlushCare) can prescribe and work with your existing insurance. [AFFILIATE LINKS]
3. **Manufacturer savings** — Zepbound: Lilly savings card can reduce copay. Wegovy: NovoCare savings offer. These stack with your insurance coverage.
4. **If denied** — Your doctor can file prior authorization. If PA is denied, they can appeal or request a peer-to-peer review. See the "denied" path for the full playbook.

---

### MEDICARE BRANCH

**Sub-question: "Are you aware of the Medicare GLP-1 Bridge program starting July 2026?"**
- A) No, tell me about it → MEDICARE_BRIDGE endpoint
- B) Yes, but I need help qualifying → MEDICARE_QUALIFY endpoint
- C) I want to start before July 2026 → MEDICARE_NOW endpoint

#### MEDICARE_BRIDGE endpoint
**Title: "Medicare GLP-1 Bridge program (starts July 1, 2026)"**

Steps:
1. **What it is** — A temporary Medicare program running July 1, 2026 through December 31, 2027. Eligible Medicare Part D beneficiaries pay $50/month for covered GLP-1 medications.
2. **Covered drugs** — Foundayo (pill), Wegovy injection and pill, and Zepbound KwikPen. NOT Ozempic (diabetes only) or compounded versions.
3. **Who qualifies** — Must be enrolled in Medicare Part D. BMI of 30+ OR BMI 27+ with a weight-related condition (heart disease, prediabetes, high blood pressure, etc.). Your prescriber must attest to eligibility.
4. **How to enroll** — Your Part D plan does NOT need to opt in. A central Medicare processor handles approvals and claims directly. Talk to your doctor about submitting the prior authorization when the program opens.
5. **Key detail** — If you're already on a GLP-1, your prescriber attests to your ORIGINAL qualifying BMI, not your current weight. So weight loss doesn't disqualify you.

⚠️ The BALANCE Model (longer-term program) has been delayed indefinitely. The Bridge program is extended through 2027, but there is no guarantee of what comes after.

#### MEDICARE_QUALIFY endpoint
**Title: "Qualifying for the Medicare Bridge"**

Steps:
1. **Eligibility checklist** — 1) Active Medicare Part D enrollment. 2) BMI 30+ OR BMI 27+ with at least one: heart disease, prediabetes/type 2 diabetes, high blood pressure, high cholesterol, or obstructive sleep apnea. 3) Prescriber attestation.
2. **Next step** — Schedule a visit with your doctor before July 1. Ask them to document your BMI and qualifying conditions now, so the prior authorization is ready to submit when the program opens.
3. **If you don't qualify** — Self-pay options exist: Foundayo at $149/mo, LillyDirect Zepbound at $299-449/mo, or NovoCare Wegovy at $499/mo. All available regardless of insurance status.

#### MEDICARE_NOW endpoint
**Title: "Starting before the Bridge program (before July 2026)"**

Steps:
1. **Current Medicare coverage** — Medicare Part D does NOT cover GLP-1s for weight loss. It covers Ozempic and Mounjaro for type 2 diabetes only. If you have T2D, your doctor can prescribe for that indication.
2. **Self-pay options (no insurance needed)** — Foundayo pill: $149/mo via LillyDirect. Zepbound injection: $299/mo (2.5mg), $399/mo (5mg), $449/mo (7.5-15mg) via LillyDirect. Wegovy: $499/mo via NovoCare Pharmacy.
3. **Consider waiting** — If July is close, the Bridge program at $50/mo may be worth the wait vs. paying $149-499/mo out of pocket. Discuss timing with your doctor.

---

### MEDICAID endpoint
**Title: "Medicaid coverage for GLP-1s"**

Steps:
1. **Current landscape** — Only some state Medicaid programs cover GLP-1s for weight loss. Coverage varies dramatically by state. Many cover for type 2 diabetes but not obesity.
2. **Check your state** — Call your Medicaid plan directly and ask about coverage for Wegovy or Zepbound for weight management. The answer depends on your specific state and managed care plan.
3. **BALANCE Model** — The CMS BALANCE Model may expand Medicaid GLP-1 coverage starting as early as May 2026 for states that opt in. Not all states will participate. Check if your state has opted in.
4. **If not covered** — Self-pay: Foundayo at $149/mo, Zepbound at $299-449/mo via LillyDirect, Wegovy at $499/mo via NovoCare. Some telehealth providers also offer lower-cost options. [AFFILIATE LINKS]

---

### INDIVIDUAL PLAN endpoint
**Title: "Individual plan (marketplace or direct purchase)"**

Steps:
1. **Check your formulary first** — Whether you bought through healthcare.gov or directly from a carrier like Blue Shield, check if your specific plan covers GLP-1s for weight management. Call the number on your card.
2. **Key distinction** — Many individual plans exclude weight loss medications entirely. Even "good" plans may require prior authorization and have strict criteria (BMI thresholds, documented diet attempts).
3. **If covered** — Follow the same path as employer insurance: get a prescription, use manufacturer savings cards to reduce copay, file prior auth if required.
4. **If not covered or too restrictive** — You can use self-pay options alongside your insurance for everything else. Foundayo: $149/mo. LillyDirect Zepbound: $299-449/mo. NovoCare Wegovy: $499/mo.
5. **Open enrollment tip** — When shopping for next year's plan, check formularies BEFORE enrolling. Look for plans that cover Wegovy or Zepbound on a reasonable tier.

---

### MILITARY endpoint
**Title: "Military / VA / TRICARE coverage"**

Steps:
1. **TRICARE** — TRICARE covers some GLP-1s with prior authorization. Coverage depends on your specific TRICARE plan (Prime, Select, etc.) and the prescribing indication. Call TRICARE directly to confirm.
2. **VA** — VA formulary includes some GLP-1s. Availability may vary by VA facility. Talk to your VA provider about what's available at your location.
3. **If not covered through military benefits** — Self-pay options work for anyone: Foundayo $149/mo, LillyDirect Zepbound $299-449/mo, NovoCare Wegovy $499/mo.

---

### UNINSURED + PILL PATH
**Title: "No insurance + oral pill options"**

Steps:
1. **Best value: Foundayo** — $149/mo self-pay through LillyDirect or participating pharmacies. Can be taken any time of day, no food restrictions. Eli Lilly's newest FDA-approved option (April 2026).
2. **Alternative: Wegovy pill** — $499/mo through NovoCare Pharmacy. Must be taken in the morning on empty stomach, wait 30 min before eating. More expensive but may achieve slightly higher weight loss (~14% vs ~12%).
3. **How to get prescribed** — You need a prescription from a licensed provider. Telehealth options: Ro, Found, ShedRx, LifeMD all offer online consultations. Some have $0 initial consult fees. [AFFILIATE LINKS]
4. **GoodRx** — GoodRx now offers Wegovy and Ozempic at $499/mo at 70,000+ retail pharmacies through their Novo Nordisk partnership.

---

### UNINSURED + INJECTION PATH
**Title: "No insurance + injection options"**

Steps:
1. **Most affordable brand-name: Zepbound vials** — $299/mo (2.5mg), $399/mo (5mg), $449/mo (7.5-15mg) through LillyDirect. These are vials you draw with a syringe, not auto-injector pens.
2. **Zepbound KwikPen** — Easier to use than vials (pre-filled pen). Check LillyDirect for current pricing.
3. **Wegovy injection** — $499/mo through NovoCare Pharmacy or GoodRx at participating pharmacies.
4. **Wegovy subscription** — Novo Nordisk now offers $249/mo at 12-month commitment through Ro, WeightWatchers, and LifeMD.
5. **How to get prescribed** — Telehealth: Ro, Found, ShedRx, LifeMD, PlushCare. Many handle the prescription and ship medication to your door. [AFFILIATE LINKS]
6. **Walmart pharmacies** — Walmart's 4,600 pharmacies offer Zepbound vials at discounted self-pay pricing.

---

### UNINSURED + ALL OPTIONS
**Title: "All options without insurance (cheapest first)"**

Steps:
1. **$149/mo: Foundayo pill** — Eli Lilly's oral GLP-1. No needles, take any time of day. Available through LillyDirect and retail pharmacies. Newest option (FDA approved April 2026).
2. **$249/mo: Wegovy subscription** — 12-month commitment through Ro, WeightWatchers, or LifeMD. Injection or pill.
3. **$299/mo: Zepbound vials (2.5mg)** — Starter dose tirzepatide injection via LillyDirect. Also available at Walmart pharmacies.
4. **$399/mo: Zepbound vials (5mg)** — Via LillyDirect.
5. **$449/mo: Zepbound vials (7.5-15mg)** — All higher doses via LillyDirect.
6. **$499/mo: Wegovy injection or pill (month-to-month)** — Through NovoCare Pharmacy or GoodRx at retail pharmacies.
7. **Telehealth to get prescribed** — Ro, Found, ShedRx, PlushCare, LifeMD. Many bundle the consultation and prescription into one visit. [AFFILIATE LINKS]

⚠️ Compounded GLP-1s were previously available at $99-200/mo but the FDA has ended shortage designations and is moving to permanently ban large-scale compounding. Some 503A pharmacies still operate but availability is shrinking and legal status is uncertain.

---

### UNSURE INSURANCE endpoint
**Title: "Not sure about your insurance"**

Steps:
1. **How to find out** — Check your wallet for an insurance card. The card will say the carrier name and plan type. If you get insurance through work, call your HR department.
2. **Quick check tools** — Ro offers a free GLP-1 Insurance Coverage Checker. Found will call your insurer on your behalf for free. Weight Watchers has a Cost Estimator tool. [AFFILIATE LINKS where applicable]
3. **If you truly have no insurance** — You can still access GLP-1s through self-pay. Foundayo starts at $149/mo. Zepbound starts at $299/mo. No insurance required.

---

## SWITCHING BRANCH

**Sub-question: "What's the main reason you want to switch?"**
- A) It's too expensive → SWITCH_COST endpoint
- B) My provider isn't great → SWITCH_PROVIDER endpoint
- C) I want to try a different medication → SWITCH_MED endpoint
- D) I want to switch from injection to pill → SWITCH_PILL endpoint

### SWITCH_COST endpoint
**Title: "Reducing your GLP-1 costs"**

Steps:
1. **Check manufacturer savings first** — Zepbound: Lilly savings card. Wegovy: NovoCare savings offer. A DoseSpot study found patients overpaid by $10M in one quarter, mostly from missed manufacturer programs.
2. **Compare pharmacy prices** — Prices vary between pharmacies. Walmart, Costco, and mail-order pharmacies often have lower prices. GoodRx can show price comparisons.
3. **Consider LillyDirect or NovoCare direct** — Buying direct from the manufacturer often costs less than retail pharmacy, especially without insurance.
4. **Wegovy subscription** — Novo Nordisk now offers $249/mo with 12-month commitment through Ro, WeightWatchers, LifeMD.
5. **Switch medications** — Foundayo at $149/mo self-pay is significantly cheaper than Wegovy or Zepbound injections. Discuss with your prescriber.
6. **Stack savings** — Discounted pharmacy gift cards (CardCash for CVS/Walgreens) + manufacturer savings + GoodRx coupons can be combined.

### SWITCH_PROVIDER endpoint
**Title: "Switching to a better provider"**

Steps:
1. **Key question** — Make sure your new provider can prescribe your current medication at your current dose to avoid a gap or having to re-titrate from scratch.
2. **Telehealth options** — Ro, Found, ShedRx, PlushCare, and LifeMD all offer ongoing GLP-1 management. Compare on: insurance support, messaging access, follow-up frequency. [AFFILIATE LINKS]
3. **Transfer your prescription** — Ask your new provider to contact your current pharmacy for prescription transfer.
4. **Timing** — Start the new provider process before your current prescription runs out. Build in at least a week of overlap.

### SWITCH_MED endpoint
**Title: "Switching to a different GLP-1 medication"**

Steps:
1. **Current FDA-approved options for weight loss** — Injections: Wegovy (semaglutide), Zepbound (tirzepatide). Pills: Wegovy tablet (semaglutide), Foundayo (orforglipron). Your prescriber helps determine which is right.
2. **Dose transition** — Switching usually means starting at the new drug's lowest dose and re-titrating up. Your prescriber will create a transition plan.
3. **Insurance may differ** — Your plan may cover one GLP-1 but not another. Check formulary before switching.
4. **Talk to your prescriber** — This is a clinical decision. Discuss why you want to switch (side effects, plateau, cost, convenience).

### SWITCH_PILL endpoint
**Title: "Switching from injection to oral GLP-1"**

Steps:
1. **Two pill options now exist** — Foundayo (orforglipron by Eli Lilly): take any time, no food restrictions, $149/mo self-pay or $25/mo with commercial insurance savings card. Wegovy pill (semaglutide by Novo Nordisk): morning on empty stomach, 30-min food wait.
2. **Clinical note** — Injectable GLP-1s generally produce more weight loss than oral versions. Discuss with your prescriber whether the convenience tradeoff is right for your goals.
3. **Transition** — Your prescriber will determine the appropriate starting dose. You may need to re-titrate.

---

## DENIED BRANCH

**Sub-question: "What happened with your denial?"**
- A) Insurance denied prior authorization → DENIED_PA endpoint
- B) My doctor won't prescribe it → DENIED_DOC endpoint
- C) I don't know why I was denied → DENIED_UNCLEAR endpoint

### DENIED_PA endpoint
**Title: "Insurance denied your prior authorization"**

Steps:
1. **Read the denial letter** — Your insurer must provide a specific reason. Common: BMI doesn't meet threshold, haven't completed step therapy, drug isn't on formulary.
2. **Ask your doctor to appeal** — File an appeal with additional documentation. A letter of medical necessity can make the difference. [FUTURE: downloadable appeal template]
3. **Peer-to-peer review** — Your doctor can request a peer-to-peer review, speaking directly with the insurance company's medical director. Often overturns denials.
4. **External appeal** — If internal appeals fail, you have the right to an external (independent) review. Your denial letter should include instructions.
5. **In parallel: Start self-pay** — While appealing, begin treatment through self-pay. Foundayo $149/mo, Zepbound $299-449/mo via LillyDirect. If appeal succeeds, switch back.
6. **HR escalation (employer plans)** — Your doctor can write a formal coverage request letter to your HR department requesting a formulary exception.

⚠️ Appeals can take 30+ days. Don't wait to start exploring self-pay alternatives in parallel if timing matters.

### DENIED_DOC endpoint
**Title: "Your doctor won't prescribe a GLP-1"**

Steps:
1. **This is common** — Many PCPs are unfamiliar or uncomfortable with GLP-1 prescribing for weight management. This doesn't mean you don't qualify.
2. **Ask for a referral** — Request a referral to an obesity medicine specialist or endocrinologist.
3. **Telehealth** — Licensed telehealth providers like Ro, Found, ShedRx, PlushCare, and LifeMD specialize in GLP-1 prescribing. They can prescribe alongside your existing doctor. [AFFILIATE LINKS]
4. **LillyDirect** — Eli Lilly's direct platform includes a telehealth consultation through their partner FORM Health. They can prescribe Zepbound or Foundayo and ship directly.
5. **Keep your PCP informed** — Even if prescribed through telehealth, let your PCP know so they can monitor your overall health.

### DENIED_UNCLEAR endpoint
**Title: "Understanding your denial"**

Steps:
1. **Call your insurer** — Call the member services number on your card. Ask: "Why was my GLP-1 prescription denied? What would I need to get it approved?"
2. **Common denial reasons** — Prior authorization not submitted yet. Step therapy needed. Not on formulary. BMI threshold not met.
3. **Next step depends on reason** — If PA wasn't submitted: ask your doctor to submit it. If step therapy: ask what's required. If not on formulary: ask which GLP-1s ARE covered. If BMI: ask about documenting comorbidities.
4. **Self-pay while you figure it out** — Foundayo: $149/mo. LillyDirect Zepbound: $299-449/mo. No insurance needed.

---

## COMPOUND endpoint
**Title: "Currently on compounded GLP-1s: what's changing"**

Steps:
1. **What happened** — The FDA removed semaglutide and tirzepatide from the drug shortage list in early 2025. Grace periods for compounding pharmacies have passed. In April 2026, the FDA proposed permanently banning large-scale (503B) compounding of these drugs.
2. **What this means for you** — Large-scale compounding facilities (503B) can no longer legally produce compounded semaglutide or tirzepatide. Some smaller 503A pharmacies continue under different legal rules, but the landscape is uncertain and narrowing.
3. **Transition options (cheapest first)** — Foundayo pill: $149/mo, no needles, via LillyDirect. Zepbound vials: $299/mo (2.5mg) via LillyDirect. Wegovy subscription: $249/mo (12-month commitment). Wegovy month-to-month: $499/mo via NovoCare. All FDA-approved.
4. **Dose transition** — Compounded doses may not map exactly to brand-name doses. Talk to a prescriber about the right starting dose. You may need to re-titrate.
5. **If you have insurance** — Check if your plan covers brand-name GLP-1s. With brand prices dropping, some plans have added coverage.
6. **Medicare: wait for the Bridge** — If on Medicare, the Bridge program starts July 1, 2026 at $50/mo.

⚠️ Some telehealth providers advertising "compounded GLP-1s" may be operating in a legal gray area. The FDA has issued 50+ warning letters to compounders and distributors. Prioritize FDA-approved options for safety and supply reliability.

---

## AFFILIATE LINK PLACEMENT STRATEGY

**Where affiliate links go (telehealth providers):**
- Every endpoint that recommends "get prescribed through telehealth" → Ro, Found, ShedRx, PlushCare, LifeMD, etc. via Katalys
- Monetizable because users need a consultation/prescription before they can access medication

**Where affiliate links DON'T go (manufacturer direct):**
- LillyDirect (Foundayo, Zepbound) → regular link, no affiliate program found
- NovoCare (Wegovy) → regular link, no affiliate program found
- GoodRx → regular link

**This is a credibility feature:** Primary recommendations are the cheapest options (LillyDirect, NovoCare) where we earn nothing. Affiliate revenue comes from the telehealth consultation layer, which is a genuine service users need.

---

## SITE STRUCTURE
1. **Landing page** — Personal intro ("I'm Sarah, I'm on Zepbound, I built this because..."), value prop, CTA to start quiz
2. **Quiz page** — Interactive decision tree (client-side, no database needed)
3. **Result endpoints** — Each endpoint is a page or section with actionable steps, relevant links, and provider recommendations
4. **About/Disclaimer** — Not a medical provider, always consult a licensed healthcare provider, FTC affiliate disclosure, privacy policy
5. **Content section (future)** — "What changed" articles about FDA compounding ban, Medicare Bridge, new oral options

## TECH STACK
- Next.js on Vercel (same as scriptsfromclips)
- Static site, client-side quiz logic
- No database needed for V1
- Domain: findmeaglp1.com (purchased on Porkbun, point DNS to Vercel)
- Also own: findmeaglp.com (redirect to findmeaglp1.com)

## MONETIZATION
- Katalys affiliate network (application submitted, pending approval ~3 business days)
- Target programs: Ro ($50-75 CPA), MEDVi ($300-500 CPA), SkinnyRx ($500-600 CPA), Hims ($175-250 CPA), others
- Direct affiliate: Orderly Meds ($75/customer) — apply separately at orderlymeds.com/affiliate-program/get-started
- Secondary: potential digital guide sales (Etsy guides, future products)
