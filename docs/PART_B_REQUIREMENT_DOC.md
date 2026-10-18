# Product Requirement Document (PRD) — Vardhan Steelware
**System:** *KarkhanaOS (Phase 1: Order-to-Dispatch & Job-Work Visibility Engine)*  
**Author:** Solutions Engineering  
**Target Audience:** Engineering Team & Technical Lead  
**Document Version:** 1.0.0 (Phase 1 Scope Freeze)  
**Timeline Constraint:** Delivery & Floor Adoption before Diwali Season Peak (3 Weeks)

---

## 1. The Problem in the Client's Words

> **Suresh Vardhan (Owner, 58):**  
> *"Problem orders ki nahi hai. Problem yeh hai ki pata nahi chalta maal kahan atka hai. Customer phone karta hai toh mujhe Ramesh ko phone karna padta hai. Ramesh ki diary mein sab hai... Bahut complicated tha [pehle wala ERP]. Mujhe bas phone pe dekhna hai kaunsa order kahan hai. Pehle wale mein paisa doob gaya. Jo kaam kare, uska de denge. Diwali se pehle chahiye, season hai."*

> **Kunal Vardhan (Son, 30, MBA):**  
> *"What we really need is a proper modern system. Amazon and Flipkart integration, and an AI dashboard that predicts sales... And it should look modern. I want to show it to our distributors."*

> **Ramesh (Dispatch In-Charge, 22 years on floor):**  
> *"Bhagona sheet mein do jagah likha hai? Gupta ka 40 aur New Delhi ka 60, dono polish mein hain na... Mehra ka 180 bhej diya, baaki 120 polish ke baad."*

---

## 2. What the Material Actually Shows: Data & Reality Check

A forensic analysis of Kunal’s Google Sheet (1–7 Sept 2026, 24 records) and the "Vardhan Dispatch" WhatsApp group logs reveals deep operational contradictions between management perception and floor reality:

| Dimension | Client Claim (Suresh / Kunal) | Ground Reality (Data / WhatsApp Logs) | Architectural / Business Implication |
| :--- | :--- | :--- | :--- |
| **Order Volume** | Suresh: "Mahine ke 60–70 order honge." | In 7 days, there are 24 line items (~103 orders/month normalized). During Diwali pre-season, run-rate exceeds 140+ orders/month. | System must handle 5–10 concurrent updates daily without lagging on low-end mobile devices on 4G. |
| **Sales Channels** | Kunal: "Online is growing 30% MoM, need AI prediction & Amazon/Flipkart sync." | Only 3 out of 24 records are online (Amazon: 2, Flipkart: 1). Gross online GMV is ~₹46,200 vs B2B distributor wholesale GMV of >₹5,80,000 (~7.3% of revenue). | **Do NOT build marketplace APIs or AI in Phase 1.** That caters to Kunal's ego, not the business bottleneck. |
| **Payment & Credit** | Suresh: "Payment koi problem nahi. Purani parties hain." | **False.** WhatsApp logs: *"Sharma Karnal ka gilas wala order hold rakhna, Papa ne bola pehle purana payment"* + Sheet note: *"old dues 1.8L"*. Sharma has 3 pending/hold orders. | **Critical Feature:** "Payment Hold" flag on distributor dispatch. Ramesh must see a red banner preventing dispatch until Suresh clears credit. |
| **Polishing Bottleneck & Material Loss** | Suresh: "Thoda idhar udhar hota hai... woh toh wastage hai." Kunal: "3–4% audit variance." | WhatsApp: *"Karigar Pappu ko 420 kg diya tha, 1180 pcs aaye... Pappu ka 6 kg short. Next lot mein adjust."* (1.4% raw shortage in one batch). 4–5 external job-workers handle polishing. | Stainless steel (SS 200/300 series) loss of 3–4% across ~30–40 tonnes/month equals ₹70,000–₹1,20,000 unrecovered metal loss monthly. Need weight-in/weight-out jobwork tracking. |
| **Split / Partial Dispatches** | Assumed binary (Pending / Dispatched). | Mehra Kitchenware: Ordered 300 pcs Kadai; 180 dispatched on 04-Sep, 120 dispatched on 06-Sep. | Data model must support **Order -> Fulfillment Lines (Partial Dispatch)**. Binary status breaks floor operations. |
| **Data Hygiene & Duplication** | Kunal claims his sheet maintains source of truth. | - Duplicate entries: Gupta Traders Kadai No.10 entered twice on 01-Sep (*"repeat msg?"*); Jain Crockery entered twice (02-Sep and 04-Sep).<br>- Missing data: 03-Sep row has party name blank (*",Thali 12 inch,20,dozen,600,dispatched,"*).<br>- Unit chaos: `pcs`, `dozen`, `set`, and even `kg` (Verma Utensils: 180 kg with blank rate!). | Free-form Google Sheet is failing. System requires strict master SKU catalog, unit-locking, and deduplication alerts. |
| **Past Failure Root Cause** | "Bought ERP in 2023 for ₹1.2L. Failed in 3 months." | Ramesh works on the factory floor and won't use a desktop ERP. Karigars are semi-literate. | UX must be WhatsApp-simple, operable in Hindi/Hinglish with tap-to-advance buttons, zero mandatory desktop forms. |

---

## 3. As-Is Process Map (Order-to-Dispatch Today)

```
[Distributor / Phone / WhatsApp]
             │
             ▼
   [Suresh / Kunal receives call/msg]
             │
   ┌─────────┴─────────┐
   │                   │
[Suresh tells Ramesh] [Kunal types in Google Sheet] (Lag: hours to days; duplicates occur)
   │                   │
   ▼                   ▼
[Ramesh writes in pocket diary] 
   │
   ├─► [Check Finished Goods Stock in Shed]
   │         │
   │    ┌────┴──────────────────────────┐
   │    ▼                               ▼
   │ [In Stock]                  [Raw / Stamped Utensil]
   │    │                               │
   │    │                               ▼
   │    │                  [Munshi ji weighs metal (Kg)]
   │    │                               │
   │    │                               ▼
   │    │                  [Sent to Outside Karigar for Polishing] (4-5 Karigars)
   │    │                               │
   │    │                               ▼ (Delay: 2-5 days, no visibility)
   │    │                  [Received back: Counted (Pcs), Weight checked]
   │    │                               │
   │    │                  [Shortage noted on scrap paper / WhatsApp]
   │    │                               │
   │    └──────────────┬────────────────┘
   │                   │
   ▼                   ▼
[Packing & Quality Inspection]
   │
   ▼
[Check Payment Status] ◄── Phone call between Ramesh & Suresh ("Sharma ka maal bhejna hai?")
   │
   ├── [Payment Overdue] ──► Order parked on floor (Takes up physical floor space, confusion)
   │
   └── [Payment Cleared / Allowed] ──► [Loading into Tempo / Transport]
                                              │
                                              ▼
                                   [Ramesh texts WhatsApp: "Mehra ka bhej diya"]
                                              │
                                              ▼
                                   [Kunal marks sheet / Munshi bills in Tally]
```

**Key Friction Points:**
1. **Blind Spot:** Nobody knows whether an order is in stamping, at the polisher, or ready in boxes without calling Ramesh.
2. **Payment Ambiguity:** Orders get packed and loaded, then halted last minute because of unpaid old dues.
3. **Ghost Duplicates:** Ramesh polishes goods twice because WhatsApp messages are posted multiple times.
4. **Metal Shrinkage:** Outside polishers return finished pieces, but scrap/dust loss is never mathematically reconciled against input weight.

---

## 4. Phase 1 Scope: Strict "Must-Win" Boundary

To guarantee delivery and total floor adoption before Diwali (3-week build & roll-out), Phase 1 is aggressively scoped.

### In Scope (Phase 1)
1. **Mobile-First Order Intake & Deduplication Engine (Kunal/Suresh):**
   - Quick order entry with distributor autocomplete, master SKU selector, standardized units (`pcs`, `dozen`, `set`).
   - Duplicate warning: Alerts if identical SKU and party are entered within 48 hours.
   - Credit Hold Flag: Automatic visual badge if customer has uncleared dues.
2. **Floor Pipeline Visualizer ("Kahan Atka Hai" Board):**
   - 4-stage pipeline: `Order Placed` -> `In Polishing (Outside)` -> `Packed & Ready` -> `Dispatched`.
   - 1-tap state advancement for Ramesh on Android mobile.
3. **Outside Karigar Job-Work Tracker (Munshi ji):**
   - Log metal dispatched to karigar (Kg) vs pieces returned (Pcs + weight).
   - Expected output calculator and variance/shortage warning (e.g. `6 kg short = ₹1,800 alert`).
4. **Split-Fulfillment & Dispatch Logger (Ramesh):**
   - Supports partial dispatches (e.g., 180 of 300 kadai dispatched; remaining 120 automatically stays in pipeline).
5. **Suresh's Daily Morning Cockpit:**
   - 3-card summary screen on his mobile browser: Stuck orders, Diwali priority dispatches, and Overdue holds.

### Explicitly Out of Scope (Phase 2 & Beyond)
- **Direct Amazon/Flipkart Marketplace API Integration:** Online represents <8% of volume. Kunal will manually enter the 2-3 daily online orders into the system.
- **AI Sales Prediction / Demand Forecasting:** Irrelevant when basic order tracking is broken.
- **Bi-directional Tally Sync:** Automating Tally sync takes weeks of accounting testing. Phase 1 will provide a 1-click clean Excel/CSV export matching Tally XML format for Munshi ji.
- **Raw Material Stamping / Blanking / Machine IoT:** Utensil stamping inside the plant is fast; the actual bottleneck is outside polishing and credit approval.

---

## 5. Data Model

### Entity-Relationship Diagram (Relational Schema)

```
┌─────────────────────────┐             ┌─────────────────────────┐
│        Customer         │ 1         N │          Order          │
├─────────────────────────┤─────────────┼─────────────────────────┤
│ id (PK)                 │             │ id (PK)                 │
│ name (e.g. Sharma Bartan│             │ order_number (VS-26-001)│
│ city (e.g. Karnal)      │             │ customer_id (FK)        │
│ phone                   │             │ channel (B2B/Amazon/FK) │
│ credit_limit            │             │ order_date              │
│ outstanding_balance     │             │ payment_status (Hold/OK)│
│ is_credit_hold (Boolean)│             │ remarks                 │
└─────────────────────────┘             └─────────────────────────┘
                                                     │ 1
                                                     │
                                                     │ N
                                        ┌─────────────────────────┐
                                        │        OrderItem        │
                                        ├─────────────────────────┤
                                        │ id (PK)                 │
                                        │ order_id (FK)           │
                                        │ item_id (FK)            │
                                        │ ordered_qty             │
                                        │ unit (pcs/dozen/set)    │
                                        │ unit_rate               │
                                        │ dispatched_qty          │
                                        │ current_stage           │
                                        │ (Draft/Polish/Pack/Done)│
                                        └─────────────────────────┘
                                                     │ N
                                                     │
                                                     │ 1
┌─────────────────────────┐             ┌─────────────────────────┐
│        JobWorker        │ 1         N │      JobWorkBatch       │
├─────────────────────────┤─────────────┼─────────────────────────┤
│ id (PK)                 │             │ id (PK)                 │
│ name (e.g. Pappu)       │             │ karigar_id (FK)         │
│ process (Polishing)     │             │ order_item_id (FK, opt) │
│ phone                   │             │ issue_date              │
│ rate_per_kg_or_pc       │             │ weight_issued_kg        │
└─────────────────────────┘             │ pcs_expected            │
                                        │ return_date             │
                                        │ pcs_received            │
                                        │ weight_received_kg      │
                                        │ scrap_shortage_kg       │
                                        │ status (Out/Returned)   │
                                        └─────────────────────────┘
```

### Key Entities & Fields Table

| Entity | Field | Type | Description |
| :--- | :--- | :--- | :--- |
| **Customer** | `id`, `name`, `city`, `outstanding_dues`, `credit_hold` | UUID, String, Decimal, Boolean | Tracks party credit. If `credit_hold == true`, orders show urgent red badge. |
| **ItemMaster** | `id`, `name`, `sku_code`, `default_unit`, `std_weight_per_pc` | UUID, String, String, Enum, Decimal | Master catalog (e.g. Kadai No.10, Bhagona 8L, Gilas 300ml, Thali 12"). Prevents spelling errors. |
| **Order** | `id`, `order_no`, `customer_id`, `source`, `status`, `target_date` | UUID, String, FK, Enum, Enum, Date | B2B Distributor or Marketplace. Status: Draft, In-Progress, Ready, Dispatched, On-Hold. |
| **OrderItem** | `id`, `order_id`, `item_id`, `quantity`, `unit`, `rate`, `dispatched_qty` | UUID, FK, FK, Int, Enum, Decimal, Int | Granular line items. Enables split deliveries (e.g., 180 sent, 120 remaining). |
| **JobWorkBatch** | `id`, `karigar_id`, `item_id`, `weight_issued_kg`, `pcs_returned`, `weight_returned_kg`, `shortage_kg` | UUID, FK, FK, Decimal, Int, Decimal, Decimal | Reconciles outside polishing. Calculates metallic variance automatically. |
| **DispatchEvent** | `id`, `order_item_id`, `qty_dispatched`, `driver_transporter`, `dispatch_date` | UUID, FK, Int, String, Timestamp | Immutable log of what left the gate, linked directly to lorry receipt / tempo. |

---

## 6. Users: Role-Based Workflows on Mobile

### Role 1: Suresh Vardhan (The Boss / Owner)
- **Device:** Samsung Galaxy Smartphone (Mobile Web View).
- **Core Needs:** No typing, zero complex navigation, instantaneous truth before answering client calls.
- **What he sees:**
  1. Top headline: **"24 Orders Active — 6 Stuck in Polish, 2 on Payment Hold"**.
  2. Quick Party Search Bar: Types "Sharma" or taps "Sharma Bartan" -> Sees exact status: *Gilas 300ml: 30 Dozen packed, HELD for ₹1.8L old dues. Patila 5pc: 20 sets in polishing.*
  3. Action: 1-tap button: **"Approve Dispatch on Credit"** (overrides hold) or **"Call Ramesh"**.

### Role 2: Ramesh (Floor & Dispatch In-Charge)
- **Device:** Budget Android Phone on factory floor (Dusty, noisy environment).
- **Core Needs:** Huge buttons, Hindi/Hinglish labels, 1-tap state toggle, camera photo proof.
- **What he sees & does:**
  1. Simple 3-tab bottom bar: **[Today's Dispatches] [At Polisher] [All Orders]**.
  2. Order Card:
     - `Mehra Kitchenware — Kadai No.10 (Total: 300 pcs)`
     - Big green button: **[Dispatch 180 Pcs]** -> Auto-updates remaining to 120.
     - Big yellow button: **[Mark Polish Received]**.
  3. Red Alert Banner: If an order is on payment hold, the "Dispatch" button is disabled and says **"HOLD: Munshi/Suresh Se Pucho"**.

### Role 3: Kunal Vardhan (Sales & Order Intake)
- **Device:** Laptop / iPad / Phone.
- **Core Needs:** Fast data entry replacing Google Sheet, duplicate-prevention, tracking both Wholesale & Amazon/Flipkart.
- **What he sees & does:**
  1. Quick Order Entry Modal with autocomplete:
     - Auto-flags: *"⚠️ Duplicate Alert: Gupta Traders already has 200 pcs Kadai pending from 01-Sep. Still add?"*
  2. Master SKU and price lock (prevents entering order without rates).
  3. Export button: Generates weekly clean CSV for Munshi ji's Tally import.

### Role 4: Munshi ji (Accounts & Karigar Ledger)
- **Device:** Desktop / Android Tablet in accounts cabin.
- **Core Needs:** Metal weight balance, outside karigar reconciliation.
- **What he sees & does:**
  1. **Job-Work Weight Logger:**
     - Select Karigar: `Pappu`.
     - Issue: `420 kg` sheet metal for `Gilas 300ml`.
     - Return: `1,180 pcs` received, weighed at `414 kg`.
     - System auto-flags: **"⚠️ Shortage: 6 kg (1.43%). Normal allowance: 1.0%. Net loss: ₹1,800."**
  2. Ledger balance check before marking party cleared for dispatch.

---

## 7. Three Reports Suresh Would Open Every Morning (60-Second Cockpit)

### Report 1: "Kahan Atka Hai" (The WIP Bottleneck Board)
*Answers: Why aren't orders moving?*
- Shows active order pipeline broken down by delay category:
  - **At Outside Polishers (>48 hrs):** 3 Batches (Pappu: 420kg, Ramu: 250kg).
  - **Stamping Finished, Waiting for Polisher:** 180 pcs Kadai No. 10.
  - **Packed & Ready in Shed:** 50 dozen Thali, 40 sets Patila.
  - **Blocked for Payment:** 2 Orders (Sharma Bartan Karnal ₹1.8L).

### Report 2: "Diwali Season Dispatch Commitments (Next 7 Days)"
*Answers: What MUST go out of the factory gate today?*
- Chronological list of customer deadlines leading up to Dhanteras/Diwali.
- Color coded:
  - 🟢 Ready to load (100% packed).
  - 🟡 Partial ready (e.g. Mehra: 180 sent, 120 in packing).
  - 🔴 At risk of missing Diwali delivery slot.

### Report 3: "Party Dues vs Pending Dispatch Radar"
*Answers: Who is demanding goods while sitting on my money?*
- Tabular list: Distributor Name | Pending Dispatch Value | Overdue Balance | Days Overdue | Action.
- Example: *Sharma Bartan Karnal | ₹48,000 ready to ship | ₹1,80,000 overdue (45 days) | [Release Order] [Hold]*.
- Eliminates Suresh having to guess or make awkward phone calls after goods have already left on the truck.

---

## 8. Questions for the Next Call (Targeted Stakeholder Interviews)

| # | Question | Target Person | Rationale |
| :---: | :--- | :--- | :--- |
| 1 | *"Ramesh bhai, jab Mehra ji ka 180 Kadai bhej diya aur 120 bach gaya, toh aap diary mein kaise likhte ho taaki 4 din baad bhool na jao?"* | **Ramesh** | Validates partial dispatch UI requirements and how split fulfillment is currently remembered. |
| 2 | *"Outside polishing karigaron ko payment kaise karte ho — per piece ya per kg, aur kya wastage ka paisa unke bill se kat-te ho?"* | **Munshi ji** | Uncovers whether the 3–4% metal shrinkage is a contractual deduction or pure unmonitored margin leak. |
| 3 | *"Munshi ji, jab Sharma Karnal jaise party ka payment fas-ta hai, toh aap Suresh ji ko kab aur kaise batate ho?"* | **Munshi ji** | Maps the credit check trigger so we can automate credit warnings before orders hit the packing shed. |
| 4 | *"Suresh ji, Diwali season mein 40 distributors mein se top 10 parties kaunsi hain jinko sabse pehle delivery chahiye hoti hai?"* | **Suresh** | Establishes order prioritization logic so the dispatch schedule sorts by VIP client commitments. |
| 5 | *"Suresh ji, pichle saal 2023 wale ERP mein Ramesh aur karigar kyun nahi ghuse? Kaunsa screen dekh ke unhone haath khade kar diye?"* | **Suresh & Ramesh**| Identifies the exact UX traps, friction, and language barriers that caused the previous ₹1.2L software failure. |
| 6 | *"Kunal, jo Amazon aur Flipkart ke orders aate hain, unka packing aur dispatch factory se hota hai ya aap alag godown se karte ho?"* | **Kunal** | Determines if marketplace packing pulls from the same floor stock as wholesale bulk crates. |
| 7 | *"Ramesh bhai, jab bahar se polish hoke maal aata hai, toh kitne piece dent ya kharab nikalte hain (jaise Sharma Karnal ka -6 dozen return tha)?"* | **Ramesh** | Confirms QC / rejected goods flow and whether returns need a dedicated return-voucher. |
| 8 | *"Kunal, aap Google Sheet kab bharte ho — party ka phone sunte hi, ya shaam ko ek saath WhatsApp dekh ke?"* | **Kunal** | Explains why duplicates occur and whether an instant mobile order form will fit his daily rhythm. |
| 9 | *"Munshi ji, Tally mein sale bill kab banta hai — jab tempo factory se nikalta hai, ya jab distributor se receipt aati hai?"* | **Munshi ji** | Confirms whether dispatch logging should precede or follow Tally voucher creation. |

---

## 9. The Biggest Risk to this Project & How to Reduce It

### The Biggest Risk: Floor Adoption Rejection by Ramesh
Ramesh has been with Vardhan Steelware for 22 years. His physical pocket diary is his power, comfort zone, and source of truth. The 2023 ERP failed specifically because Ramesh refused to type into complex software. If Ramesh feels the new tool is an audit mechanism to police him or requires tedious data entry, he will abandon it within 10 days, and the factory will revert to phone calls and WhatsApp chaos.

### 4-Point De-risking Strategy:
1. **Zero-Typing Mobile Interface for Ramesh (Hinglish + Voice + Taps):**
   - Ramesh never types item descriptions or customer names. He clicks big color-coded cards (`Polish se Aaya`, `Gaadi me Chadhaya`).
   - Add a WhatsApp Voice Note transcriber fallback (e.g., Ramesh speaks: *"Bansal ka 120 tope polish se aa gaya"*, system parses and updates status).
2. **On-Site Champion Onboarding (First 3 Days on Floor):**
   - The Solutions Engineer will spend 48 hours directly on the Jagadhri shop floor beside Ramesh, observing his tempo dispatch and diary habits, configuring the mobile layout to match his diary sequence.
3. **Make Ramesh Look Like a Hero to Suresh:**
   - Instead of Suresh calling Ramesh 25 times a day asking *"Maal kahan hai?"*, Ramesh updates the stage in 2 taps; Suresh praises him because client complaints instantly drop.
4. **"Shadow Diary" Transition Period:**
   - Ramesh is NOT forced to discard his diary on Day 1. For the first 7 days, he keeps his diary while a 10-second tap on the phone mirrors his diary checkmarks. Once he sees it prevents distributors from yelling at him on Diwali, the diary fades naturally.
