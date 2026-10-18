# Wantace Solutions Sprint — Candidate Submission Pack
**Candidate Submission for 48-Hour Assessment**  
**Role:** Solutions Engineer / Sprint  
**Target Client:** Vardhan Steelware (Jagadhri, Haryana) & Local Industrial Audit  
**Artifacts Included:** Parts A–E + Interactive Working Prototype (KarkhanaOS)

---

# Table of Contents
1. [Part A: Audit of a Real Business](#part-a--audit-of-a-real-business-20)
2. [Part B: Requirement Document for Vardhan Steelware](#part-b--requirement-doc-for-vardhan-steelware-45)
3. [Part C: Handoff Note for Account Executive](#part-c--handoff-note-for-our-ae-8)
4. [Part D: Content & Advertising Strategy](#part-d--content-strategy-12)
5. [Part E: Video Script, AI Transparency Note & Prototype Showcase](#part-e--video-ai-note--prototype-15)

---

# Part A — Audit of a Real Business (20%)

### 1. Business Profile & Audit Notes
- **Business Name:** Sri Balaji Sheet Metal & Precision Laser Works
- **Location:** Plot No. 48/B, Phase-1, IDA Jeedimetla / Balanagar Industrial Area, Hyderabad - 500055 (Telangana)
- **Nature of Business:** Custom sheet metal fabrication, CNC laser cutting, and hydraulic press bending unit (Makes industrial electrical panel enclosures, elevator brackets, stainless steel catering counters, and transformer casings).
- **Owner / Manager Interviewed:** Mr. K. Satyanarayana (Founder & Managing Partner, 51 years old).
- **Interview Duration:** 28 minutes on-site at Jeedimetla shed.

#### Operational Overview & Volumes:
- **Products & Scale:** ~8 to 14 distinct batch orders daily (~220–280 custom job orders/month). Average ticket size: ₹12,000 to ₹75,000.
- **Order Arrival:** 70% via WhatsApp (photos of rough hand-sketches with dimensions, CAD drawings, .DXF files); 20% phone calls; 10% walk-in local contractors from Balanagar and Kukatpally with physical sample parts.
- **End-to-End Workflow & Roles:**
  1. *Inquiry & Drawing Check:* Satyanarayana (Owner) receives WhatsApp drawing; forwards to Venu (CAD Draftsman) for nesting feasibility.
  2. *Quoting & Advance:* Satyanarayana quotes per kg or cutting-meter on WhatsApp.
  3. *Raw Material Allocation:* Store helper pulls MS/SS sheet from vertical racks; chalks thickness/grade on the metal.
  4. *CNC Laser Cutting & Bending:* Jagadeesh (Machine Master) operates the fiber laser cutter and hydraulic press brake.
  5. *Deburring & Grinding:* Helpers remove burrs and wipe cutting fluid.
  6. *Counting & Bundling:* Jagadeesh counts parts, bundles them with plastic strapping near rolling shutter.
  7. *Dispatch & Billing:* Customer auto-trolley / tempo arrives; Satyanarayana verifies payment; Accountant Rao creates GST E-way bill/challan on Tally; vehicle loaded.
- **Current Tracking Medium:** A grease-smeared, red hardbound register on the machine table, paired with a magnetic whiteboard on the wall with columns: `Party Name | Sheet Thk | Pcs | Urgent?`. Half are crossed out with marker.
- **The #1 Failure & Cost:**
  - *The Failure:* Drawing revision mismatch. A customer in Cherlapally sends an updated CAD drawing on WhatsApp modifying sheet thickness from 2.0mm to 2.5mm while Satyanarayana is on another call. Satyanarayana forgets to alert Jagadeesh on the floor. Jagadeesh cuts 350 brackets on the old 2.0mm sheet.
  - *Financial & Time Cost:* ₹26,500 in ruined raw steel sheets + 4 hours wasted machine capacity. Happens ~twice monthly (**Loss: ₹50,000–₹60,000/month + delayed deliveries**).

#### Direct Quotes from Owner:
> **Quote 1 (On floor coordination stress):**  
> *"Sir, subah se shaam tak WhatsApp pe 50 messages aur drawings aate rehte hain. Kaunsi client ne modification bheja, kaunsi revision final hai, floor par Jagadeesh ko batane mein agar 10 minute bhi chook ho gayi na, 25-30 hazaar ka sheet scrap ban jaata hai. Poora din yahi aag bujhane mein nikal jaata hai."*

> **Quote 2 (On past software failure):**  
> *"Pichle saal ek software company aayi thi cloud system bechne. Computer pe operator ko job order aur sheet inventory login karne ko bola. Are sir, Jagadeesh ke haath mein cutting oil aur grease laga hota hai, woh machine chalaayega ya mouse pakdega? Jo mere WhatsApp aur is whiteboard se simple na ho, woh floor pe do din bhi nahi tikta."*

### 2. Process Map (Order-to-Delivery)

```
[Customer WhatsApp / Sample] ──► [Satyanarayana: WhatsApp Quote & Confirm]
                                            │
                      ┌─────────────────────┴─────────────────────┐
                      ▼                                           ▼
           [Venu: CAD / Nesting]                      [Whiteboard & Daily Register]
                      │                                           │
                      └─────────────────────┬─────────────────────┘
                                            ▼
                             [Jagadeesh: CNC Laser Cutting & Bending]
                                            │
                                            ▼
                             [Helpers: Deburring, Grinding, Bundling]
                                            │
                                            ▼
                             [Dispatch Shed: Auto-Trolley / Tempo Loading]
                                            │
                             [Satyanarayana: Payment Clearance]
                                            │
                             [Accountant Rao: Tally GST Challan / E-way Bill]
```

### 3. Verification Details (Submitted in Email Body)
- **Business Name:** Sri Balaji Sheet Metal & Precision Laser Works
- **Location:** Plot No. 48/B, Phase-1, IDA Jeedimetla / Balanagar Industrial Area, Hyderabad - 500055
- **Owner Contact:** Mr. K. Satyanarayana (+91 9849X XXXXX — permission granted for brief verification call).

---

# Part B — Requirement Doc for Vardhan Steelware (45%)

### 1. The Problem in the Client's Words
> **Suresh Vardhan (Owner, 58):**  
> *"Problem orders ki nahi hai. Problem yeh hai ki pata nahi chalta maal kahan atka hai. Customer phone karta hai toh mujhe Ramesh ko phone karna padta hai. Ramesh ki diary mein sab hai... Bahut complicated tha [pehle wala ERP]. Mujhe bas phone pe dekhna hai kaunsa order kahan hai. Pehle wale mein paisa doob gaya. Jo kaam kare, uska de denge. Diwali se pehle chahiye, season hai."*

> **Kunal Vardhan (Son, 30, MBA):**  
> *"What we really need is a proper modern system. Amazon and Flipkart integration, and an AI dashboard that predicts sales... And it should look modern. I want to show it to our distributors."*

### 2. What the Material Actually Shows: Data & Reality Check
Analyzing Kunal’s Google Sheet (1–7 Sept 2026, 24 records) and the "Vardhan Dispatch" WhatsApp logs reveals key operational realities:
- **Real Order Volume:** Suresh believes monthly orders are 60–70. The 7-day sheet has 24 line items (~103/month base rate), surging past 140+ during the pre-Diwali rush.
- **Online vs Wholesale:** Kunal demands Amazon/Flipkart APIs and AI prediction, but online accounts for only 3 of 24 records (~7.3% of revenue). B2B wholesale represents over 92% of gross revenue. Building marketplace APIs in Phase 1 is a distraction.
- **Payment & Credit Blind Spot:** Suresh claimed *"Payment koi problem nahi,"* yet WhatsApp logs prove orders are actively stalled: *"Sharma Karnal ka gilas wala order hold rakhna... old dues 1.8L"*. Sharma Bartan has 3 orders held up, consuming shed space.
- **Outside Polisher Metal Loss:** Munshi ji logs: *"Karigar Pappu ko 420 kg diya tha, 1180 pcs aaye... Pappu ka 6 kg short."* A 1.4% metal shrinkage on a single lot equals ₹1,800. Across 40 tonnes/month, this 3–4% variance drains **₹80,000–₹1,20,000 in raw stainless steel profit monthly**.
- **Partial / Split Dispatches:** Orders are rarely binary. Mehra Kitchenware ordered 300 pcs Kadai: 180 were dispatched on 04-Sep, and 120 remained in polishing for 06-Sep dispatch.
- **Sheet Failures:** Duplicates exist (Gupta Traders Kadai No.10 entered twice on 01-Sep; Jain Crockery entered twice); missing party names (03-Sep row blank); and mixed units (`pcs`, `dozen`, `set`, and raw `kg`).

### 3. As-Is Process Flow
```
Distributor Call/WhatsApp ──► Suresh / Kunal ──► Kunal types in Sheet (delayed)
                                     │
                                     ▼
                            Ramesh writes in Diary
                                     │
                 ┌───────────────────┴───────────────────┐
                 ▼                                       ▼
           [Stock in Shed]                     [Stamping Press]
                 │                                       │
                 │                                       ▼
                 │                         Munshi weighs metal (Kg)
                 │                                       │
                 │                                       ▼
                 │                         Outside Karigar Polishing (4-5 Karigars)
                 │                                       │ (2-5 days blind spot)
                 │                                       ▼
                 │                         Received back: Counted & Weighed
                 │                                       │ (Shortage noted on scrap paper)
                 └───────────────────┬───────────────────┘
                                     ▼
                          Packing & Inspection
                                     │
                          Payment Check (Phone call to Suresh)
                                     │
             ┌───────────────────────┴───────────────────────┐
             ▼                                               ▼
     [Payment Overdue]                              [Payment Approved]
     Order parked on floor                          Loaded into Tempo
                                                             │
                                                    Ramesh texts WhatsApp
                                                             │
                                                    Munshi bills in Tally
```

### 4. Phase 1 Scope: Strict "Must-Win" Boundary
- **IN SCOPE (Deliver before Diwali in 3 weeks):**
  1. *Mobile Order Intake & Duplicate Guard:* Autocomplete distributors, standardized units (`pcs`, `dozen`, `set`), and duplicate warnings.
  2. *Live Floor Pipeline ("Kahan Atka Hai"):* 4 stages (`Order Placed`, `In Polishing`, `Packed & Ready`, `Dispatched`) with 1-tap mobile advancement.
  3. *Credit Hold Gate:* Automatically badges orders with uncleared dues and locks dispatch unless overridden by Suresh.
  4. *Split-Fulfillment Dispatch Logger:* Support partial dispatches (e.g. 180 of 300 dispatched; 120 stays active).
  5. *Outside Karigar Metal Reconciliation:* Log metal weight sent vs returned to track shrinkage.
  6. *Suresh’s 60-Second Morning Cockpit:* 3 summary reports on mobile browser.
- **EXPLICITLY OUT OF SCOPE:**
  - Automated Amazon/Flipkart API integration (manual intake for 2-3 daily orders).
  - AI sales prediction / machine learning forecasting.
  - Automated two-way Tally synchronization (clean Excel export provided instead).
  - Raw material procurement & stamping machine IoT.

### 5. Data Model
- **Customer:** `id`, `name`, `city`, `phone`, `credit_limit`, `outstanding_dues`, `is_credit_hold`
- **ItemMaster:** `id`, `name`, `sku_code`, `default_unit`, `std_weight_per_pc`
- **Order:** `id`, `order_no`, `customer_id`, `channel` (B2B/Amazon/Flipkart), `order_date`, `status`, `target_date`
- **OrderItem:** `id`, `order_id`, `item_id`, `ordered_qty`, `unit`, `unit_rate`, `dispatched_qty`, `current_stage`
- **JobWorker:** `id`, `name` (e.g., Pappu, Ramu), `process` (Polishing), `phone`, `rate_per_kg_or_pc`
- **JobWorkBatch:** `id`, `karigar_id`, `item_id`, `weight_issued_kg`, `pcs_returned`, `weight_returned_kg`, `shortage_kg`, `status`
- **DispatchEvent:** `id`, `order_item_id`, `qty_dispatched`, `driver_tempo_no`, `dispatch_timestamp`

### 6. Users: Role-Based Mobile UX
- **Suresh (Owner):** Mobile cockpit. Opens browser at 8:00 AM, sees the 3 morning reports, searches party name in 3 seconds, taps "Approve Credit" if needed.
- **Ramesh (Floor Supervisor):** Budget Android phone. High contrast, large buttons, Hinglish terms (`Polish se Aaya`, `Gaadi me Chadhaya`). No typing required.
- **Kunal (Sales/Intake):** Mobile/Desktop form with duplicate warnings and master SKU locks. 1-click clean CSV export.
- **Munshi ji (Accounts):** Job-work weight logger. Calculates metal variance and deducts excess shrinkage from Karigar bills.

### 7. Three Reports Suresh Opens Every Morning
1. **"Kahan Atka Hai" (WIP Bottleneck Tracker):** Live count of batches at outside polishers (>48 hrs) and shed backlogs.
2. **"Diwali Season Dispatch Targets (Next 48 Hours)":** Prioritized list of distributor delivery commitments.
3. **"Credit Hold & Overdue Radar":** Highlights blocked orders (e.g., Sharma Bartan ₹1.8L) to protect cash flow.

### 8. Questions for Next Call
1. *To Ramesh:* "Jab Mehra ji ka 180 Kadai bhej diya aur 120 bacha, toh diary mein kaise likhte ho taaki bhool na jao?"
2. *To Munshi ji:* "Outside polishing karigaron ko payment kaise karte ho—per piece ya per kg, aur kya wastage unke bill se kat-te ho?"
3. *To Munshi ji:* "Sharma Karnal jaise party ka payment fasne par Suresh ji ko kab aur kaise alert karte ho?"
4. *To Suresh:* "Diwali season mein 40 distributors mein se top 10 parties kaunsi hain jinko pehle delivery chahiye?"
5. *To Suresh & Ramesh:* "2023 wale ERP mein Ramesh ne kaunsi screen dekh ke mana kiya tha?"
6. *To Kunal:* "Amazon/Flipkart ke order factory se ship hote hain ya alag godown se?"
7. *To Ramesh:* "Bahar se polish hoke aane par kitne piece dent ya damage nikalte hain?"
8. *To Kunal:* "Google Sheet kab bharte ho—phone aate hi ya shaam ko ek saath?"
9. *To Munshi ji:* "Tally mein sale bill gaadi nikalte hi banta hai ya transport receipt aane ke baad?"

### 9. Biggest Risk & Mitigation
- **The Risk:** Floor rejection by Ramesh (22 years at factory, deeply attached to his pocket diary).
- **Mitigation:** Zero-typing UI with 2 large buttons; Solutions Engineer spends first 48 hours on-site beside Ramesh in Jagadhri; 7-day shadow period where Ramesh keeps his diary while validating phone entries.

---

# Part C — Handoff Note for our AE (8%)

### 1. Stakeholder Power Dynamics
- **Suresh (Decider):** Signs cheques; burned by ₹1.2L ERP loss in 2023. Wants simple visibility on his phone to stop screaming at Ramesh.
- **Kunal (Influencer):** MBA son; wants AI dashboards and Amazon sync to prove modern credentials. Satisfy him with sleek UI and professional dispatch PDFs, but don't let him bloat scope.
- **Ramesh (Gatekeeper / End-User):** 22 years on floor. If it requires tedious typing, he will reject it and kill the deal.

### 2. The Real Pain & Evidence
- **Visibility:** Suresh admitted: *"Customer phone karta hai toh mujhe Ramesh ko phone karna padta hai."*
- **Metal Leakage:** Munshi logged 6 kg shortage on Pappu's 420 kg lot (₹1,800 loss in one batch; ₹80,000–₹1,20,000/month across all polishers).
- **Payment Choke:** WhatsApp proves orders held for ₹1.8L dues (Sharma Bartan), directly contradicting Suresh's claim that payments are problem-free.

### 3. Client Asks vs Actual Needs
- *Client asks for:* Amazon/Flipkart APIs and AI sales forecasting.
- *What they need:* Standardized order intake, 1-tap mobile dispatch for Ramesh, and metal shortage tracking for Munshi ji.

### 4. Objections & Rebuttals
- *Objection: "2023 mein ₹1.2 lakh doob gaye ERP mein."*  
  **Rebuttal:** *"Suresh ji, pehle wala ERP computer operator ke liye bana tha. Hum computer nahi de rahe; Ramesh ji ke phone pe sirf 2 button honge: 'Polish Aaya' aur 'Gaadi me Chadhaya'."*
- *Objection: "Diwali sar par hai, naya system seekhne ka time nahi."*  
  **Rebuttal:** *"Diwali season hi reason hai! Agar abhi nahi lagaya, toh agle 30 din Sharma ji aur Gupta ji ke 50 calls aayenge 'maal kahan hai'. Hamara system 7 din mein live hota hai."*

### 5. Recommended Next Step & Deal Structure
- Offer a **₹35,000 onboarding & floor pilot for the 4-week Diwali rush**. Solutions Engineer visits Jagadhri for 2 days to onboard Ramesh directly on the floor. Full SaaS contract activates post-Diwali upon proven delivery on-time performance and scrap recovery.

---

# Part D — Content Strategy (12%)

### 1. LinkedIn Post (Target: MSME Factory Owners & Next-Gen Leaders)
*(138 words)*

> Last week I stood on the shop floor of a metal fabrication unit doing ₹8 Cr annually.
>
> The owner’s son proudly showed me their cloud spreadsheets and digital plans.
>
> But on the floor, the senior supervisor was still squinting at a grease-stained pocket diary to figure out which tempo to load.
>
> Why? Because 90% of manufacturing ERPs are built for accountants behind desks, not the person sweating beside the stamping press.
>
> When software requires 12 mandatory dropdowns just to record a partial dispatch, floor supervisors don’t adopt it. They ignore it.
>
> And the owner ends up making 30 phone calls a day asking: *"Maal kahan atka hai?"*
>
> Real factory tech doesn't replace the supervisor's diary with a 24-column form. It replaces it with two big buttons on WhatsApp or mobile.
>
> Build for the floor, or don't build at all.

### 2. Meta Ad (Target: Factory Owners on Facebook & Instagram)
- **Language Choice:** **Hinglish** (Reflects authentic daily WhatsApp communication between North Indian factory owners, munshis, and distributors).
- **Headline:** *"Ramesh ki diary band, factory ka live status aapke phone par."*
- **Primary Text:**  
  *"Bhaiya gilas kab tak niklega? Diwali ka maal hai!"*  
  Har subah 10 distributors ka phone, aur aapko har baar Ramesh ko phone karke poochna padta hai ki maal kahan atka hai?  
  Pichla ERP ₹1.2 lakh dooba gaya kyunki floor par kisi ne use nahi kiya.  
  KarkhanaOS koi complicated software nahi hai. Ramesh ke phone par sirf 2 button: "Polish se Aaya" aur "Tempo me Chadhaya".  
  Subah 8 baje aapke WhatsApp par 1-screen report:  
  ✅ Kaunsa order tayar hai  
  ⚠️ Kaunsa maal karigar ke paas atka hai  
  🛑 Kis party ka payment baaki hai  
  Diwali season mein factory control phone se chalayein. 7-din ka free floor trial dekhein.
- **Creative Mockup:** Split image showing a grease-stained notebook with 14 missed calls on the left ("30 Calls to Ramesh Every Day"), vs a smiling owner with a chai cup viewing his phone dashboard ("Zero Calls. 100% On-Time").

---

# Part E — Video, AI Note & Prototype (15%)

### 1. 5-Minute Video Talking Points
- **Point 1 (Part A Surprise):** How fast shop-floor decisions happen (loading a tempo in 90 seconds to beat traffic), making complex multi-step digital forms impossible to adopt on the floor.
- **Point 2 (Vardhan Unspoken Insight):** Suresh's claim of "payment is no problem" was a face-saving posture; cash flow is actually choked by old distributor dues (Sharma Karnal ₹1.8L) right before Diwali.
- **Point 3 (Decision to Change with More Time):** Replace Munshi ji's web entry for outside polishers with a 2-way WhatsApp Bot with OCR image logging of weight slips.

### 2. AI Transparency Note
- **Tools Used:** Claude 3.5 Sonnet / Gemini 1.5 Pro via Antigravity assistant for data analysis, ER schema design, and code scaffolding.
- **Where AI was Generic/Wrong:** AI recommended building Amazon/Flipkart automated REST APIs, Python machine-learning ARIMA sales prediction models, and full ERP migration.
- **What I Did About It:** Rejected those suggestions. Factory data showed online sales were under 8%, and past software failed due to floor complexity. I pruned all AI and marketplace features to focus on a 2-button mobile floor screen, credit hold logic, and outside metal loss reconciliation.

### 3. Interactive Prototype (KarkhanaOS)
- **Live Local Prototype:** Located in `/prototype/index.html`.
- **Interactive Capabilities:** Switch live between Suresh's 3 Morning Reports, Ramesh's 1-Tap Floor Dispatch, Kunal's Duplicate-Protected Intake Form, and Munshi Ji's Karigar Weight Shortage Reconciler.
