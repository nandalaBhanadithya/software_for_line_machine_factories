# KarkhanaOS — Interactive Prototype for Vardhan Steelware
**Solutions Sprint Demonstration | Built for Wantace Assessment**

This prototype was built to demonstrate how an intuitive, zero-overhead mobile interface solves the core operational crisis at **Vardhan Steelware** (Jagadhri, Haryana) before the Diwali season rush.

---

## 🌟 Key Features Built & Demonstrated

1. **Suresh's 60-Second Morning Cockpit (Owner View):**
   - **Report 1: "Kahan Atka Hai"** — Live count of orders at outside polishers (Pappu, Ramu, Bittu) and shed bottlenecks.
   - **Report 2: "Diwali 48-Hour Targets"** — Prioritized dispatch schedule so high-value distributors don't churn.
   - **Report 3: "Credit Hold Radar"** — Blocks dispatch for distributors with overdue debt (e.g., Sharma Bartan Bhandar ₹1.8L) while allowing 1-tap owner override.
   - **Instant Search:** Suresh can type "Sharma" or "Patila" when a distributor calls and know the exact state in 3 seconds.

2. **Ramesh's 1-Tap Floor Dispatch Screen (Supervisor View):**
   - High-contrast, large tap buttons tailored for shop-floor Android phones with oily/dusty conditions.
   - **Partial / Split Dispatch Modal:** Accurately fulfills orders in batches (e.g., Mehra Kitchenware: loads 180 Kadai into the tempo now, automatically tracks the remaining 120 in polishing).
   - **Polish Receipts:** 1-click `Polish se Aa Gaya` button transfers finished batches from outside karigars into shed stock.

3. **Munshi Ji's Karigar Weight & Shortage Logger (Accounts View):**
   - Solves the **3–4% stainless steel leakage** that Suresh dismissed as "wastage".
   - Automatically calculates metal shortage (e.g., Pappu issued 420 kg, returned 1,180 pcs weighing 414 kg -> Flags 6.0 kg shortage / ₹1,800 financial penalty).

4. **Kunal's Order Engine & Duplicate Guard (Sales View):**
   - Replaces the error-prone Google Sheet.
   - Standardizes units (`pcs`, `dozen`, `set`) and enforces master SKU catalog.
   - **Intelligent Duplicate Detector:** Live warning if an identical order is entered for a distributor within 48 hours.
   - 1-Click clean CSV export for Munshi ji's Tally import.

5. **Mobile Simulator Mode:**
   - Click the **"Mobile Simulator"** button in the top navigation bar to test how Ramesh experiences the app on an Android phone on the factory floor.

---

## 🚀 How to Run the Prototype

### Option 1: Direct File Open (Zero Setup)
Simply double click `prototype/index.html` or open it directly in any modern browser (Chrome, Edge, Safari, Firefox). All assets, icons, and styling are powered via lightweight CDNs.

### Option 2: Local HTTP Server (Recommended)
From this directory, run:
```bash
npx serve prototype
```
or
```bash
python -m http.server 8080 --directory prototype
```
Then visit `http://localhost:8080` in your browser.

---

## 📊 Pre-Loaded Client Pack Dataset
The prototype comes pre-loaded with the actual 1–7 September 2026 data from Kunal's Google Sheet and the WhatsApp export:
- Gupta Traders Ambala
- Sharma Bartan Bhandar Karnal (with ₹1.8L dues hold & damaged returns)
- Bansal & Sons Rohtak (Tope No.6 in polish)
- Jain Crockery Panipat
- New Delhi Steel House
- Mehra Kitchenware Jalandhar (Split fulfillment)
- Verma Utensils Sonipat
- Online Amazon & Flipkart sales
