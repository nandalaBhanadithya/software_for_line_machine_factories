# KarkhanaOS — Software for Line & Machine Factories
> **Shop-Floor Order-to-Dispatch & Job-Work Visibility System for MSME Manufacturing Units**  
> *Developed as part of the Solutions Sprint (48-Hour Assessment for Wantace) · Client Case: Vardhan Steelware*

---

## 🏭 Overview

**KarkhanaOS** is a zero-overhead, mobile-first manufacturing operations system designed specifically for the realities of Indian SME factories. Most enterprise ERPs fail on the shop floor because they are designed for desk workers. When a system requires 12 mandatory dropdowns just to load a tempo, floor supervisors reject it and revert to paper diaries.

KarkhanaOS replaces paper registers, wall whiteboards, and WhatsApp chaos with **two large buttons for the supervisor** and a **60-second morning cockpit for the owner**.

---

## 📁 Repository Structure

```
├── prototype/
│   ├── index.html                    # Interactive Single-Page Application (SPA)
│   ├── app.js                        # Pre-loaded with real client dataset & reactive state
│   └── README.md                     # Prototype architecture & feature breakdown
├── docs/
│   ├── PART_A_BUSINESS_AUDIT.md      # Grounded MSME field audit (Jeedimetla/Balanagar, Hyderabad)
│   ├── PART_B_REQUIREMENT_DOC.md     # 4-page engineer-ready PRD for Vardhan Steelware
│   ├── PART_C_AE_HANDOFF_NOTE.md     # Commercial & stakeholder strategy note for the AE
│   ├── PART_D_CONTENT.md             # LinkedIn thought leadership post & Hinglish Meta ad
│   └── PART_E_VIDEO_AND_AI_NOTE.md   # 5-minute video transcript & AI critical evaluation note
├── SUBMISSION_MASTER_DOCUMENT.md     # Complete unified candidate submission pack (Markdown)
├── SUBMISSION_MASTER_DOCUMENT.html   # Print-ready formatted document (Open & Ctrl+P to save as PDF)
└── wantace_report_@proto_doc.pdf     # PDF reference brief
```

---

## ✨ Key Capabilities Demonstrated in KarkhanaOS

1. **Suresh's 60-Second Morning Cockpit (Owner View):**
   - **"Kahan Atka Hai" Report:** Real-time visibility into batches delayed at outside polishers (Pappu, Ramu, Bittu).
   - **Diwali 48-Hour Target Tracker:** Prioritizes committed distributor shipments to prevent festive churn.
   - **Credit Hold Radar:** Automatically flags and locks dispatch for distributors with uncleared old dues (e.g., *Sharma Bartan Bhandar ₹1.8L*).
   - **Instant Search:** Allows Suresh to look up any party or order in 3 seconds while on a distributor phone call.

2. **Ramesh's 1-Tap Floor Screen (Supervisor View):**
   - Designed for low-end 4G Android smartphones in noisy, dusty shop-floor environments.
   - Large touch targets and Hinglish terminology (`Polish se Aaya`, `Gaadi me Chadhaya`).
   - **Split / Partial Dispatch:** Accurately logs partial dispatches (e.g., 180 out of 300 Kadai loaded into the tempo, with the remaining 120 staying active in the queue).

3. **Munshi Ji's Karigar Weight Reconciler (Accounts View):**
   - Stops the **3–4% stainless steel leakage** that factory owners casually dismiss as "wastage".
   - Calculates metal weight issued (kg) vs pieces and weight returned, automatically computing shrinkage percentage and financial loss at ₹300/kg SS scrap value.

4. **Kunal's Order Intake & Duplicate Guard (Sales View):**
   - Standardizes units (`pcs`, `dozen`, `set`) and enforces master SKU catalog.
   - **Intelligent Duplicate Detector:** Live warning if an identical order for a distributor is submitted within 48 hours.
   - 1-Click clean CSV export formatted for Tally import.

---

## 🚀 How to Run the Prototype

### Option 1: Direct Browser Launch (Zero Dependencies)
Simply open [`prototype/index.html`](prototype/index.html) in any browser (Chrome, Edge, Safari, Firefox). All CSS and icons are bundled via lightweight CDNs.

### Option 2: Local HTTP Server
```bash
# Using Python
python -m http.server 8080 --directory prototype

# Or using npx
npx serve prototype
```
Then visit `http://localhost:8080` in your browser.

---

## 📄 Submission Documents

To view the full assessment deliverables, refer to [SUBMISSION_MASTER_DOCUMENT.md](SUBMISSION_MASTER_DOCUMENT.md) or open [SUBMISSION_MASTER_DOCUMENT.html](SUBMISSION_MASTER_DOCUMENT.html) in your browser and print to PDF.
