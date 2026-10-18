// KarkhanaOS — Client State & Application Logic for Vardhan Steelware
// Pre-loaded with exact dataset from Kunal's Sheet (1-7 Sept 2026) & WhatsApp Export

const INITIAL_ORDERS = [
  {
    id: "ORD-01",
    date: "01-09-2026",
    party: "Gupta Traders Ambala",
    item: "Kadai No.10",
    qty: 200,
    unit: "pcs",
    rate: 185,
    channel: "B2B Wholesale",
    status: "DISPATCHED",
    dispatchedQty: 200,
    stage: "Delivered to Tempo",
    paymentStatus: "OK",
    dues: 0,
    remarks: "Loaded in morning tempo"
  },
  {
    id: "ORD-02",
    date: "01-09-2026",
    party: "Sharma Bartan Bhandar Karnal",
    item: "Patila set 5pc",
    qty: 40,
    unit: "set",
    rate: 920,
    channel: "B2B Wholesale",
    status: "DISPATCHED",
    dispatchedQty: 40,
    stage: "Delivered",
    paymentStatus: "OK",
    dues: 0,
    remarks: "Old clearance lot"
  },
  {
    id: "ORD-03",
    date: "02-09-2026",
    party: "New Delhi Steel House",
    item: "Thali 12 inch",
    qty: 50,
    unit: "dozen",
    rate: 610,
    channel: "B2B Wholesale",
    status: "DISPATCHED",
    dispatchedQty: 50,
    stage: "Delivered",
    paymentStatus: "OK",
    dues: 0,
    remarks: "Delhi Transport dispatch"
  },
  {
    id: "ORD-04",
    date: "02-09-2026",
    party: "Jain Crockery Panipat",
    item: "Kadai No.10",
    qty: 150,
    unit: "pcs",
    rate: 192,
    channel: "B2B Wholesale",
    status: "READY",
    dispatchedQty: 0,
    stage: "Packed in Shed",
    paymentStatus: "OK",
    dues: 0,
    remarks: "Awaiting Panipat truck"
  },
  {
    id: "ORD-05",
    date: "02-09-2026",
    party: "Online - Amazon",
    item: "Dinner set 24pc",
    qty: 12,
    unit: "set",
    rate: 2350,
    channel: "Amazon",
    status: "DISPATCHED",
    dispatchedQty: 12,
    stage: "Courier Picked",
    paymentStatus: "OK",
    dues: 0,
    remarks: "Amazon ATS pickup"
  },
  {
    id: "ORD-06",
    date: "03-09-2026",
    party: "Sharma Bartan Bhandar Karnal",
    item: "Gilas 300ml",
    qty: 30,
    unit: "dozen",
    rate: 260,
    channel: "B2B Wholesale",
    status: "HOLD",
    dispatchedQty: 0,
    stage: "Packed (HOLD ON DISPATCH)",
    paymentStatus: "HOLD",
    dues: 180000,
    remarks: "Old dues ₹1.8L. Suresh strictly ordered hold!"
  },
  {
    id: "ORD-07",
    date: "03-09-2026",
    party: "Bansal & Sons Rohtak",
    item: "Tope No.6",
    qty: 120,
    unit: "pcs",
    rate: 340,
    channel: "B2B Wholesale",
    status: "POLISH",
    dispatchedQty: 0,
    stage: "At Outside Polisher (Ramu)",
    paymentStatus: "OK",
    dues: 0,
    remarks: "Munshi sent 150kg metal"
  },
  {
    id: "ORD-08",
    date: "04-09-2026",
    party: "Mehra Kitchenware Jalandhar",
    item: "Kadai No.10",
    qty: 300,
    unit: "pcs",
    rate: 180,
    channel: "B2B Wholesale",
    status: "READY",
    dispatchedQty: 180,
    stage: "Split: 180 Dispatched, 120 in Polish",
    paymentStatus: "OK",
    dues: 0,
    remarks: "180 sent 04-Sep; 120 pending polishing"
  },
  {
    id: "ORD-09",
    date: "04-09-2026",
    party: "New Delhi Steel House",
    item: "Bhagona 8L",
    qty: 60,
    unit: "pcs",
    rate: 410,
    channel: "B2B Wholesale",
    status: "POLISH",
    dispatchedQty: 0,
    stage: "At Karigar Pappu",
    paymentStatus: "OK",
    dues: 0,
    remarks: "Batch weighed by Munshi"
  },
  {
    id: "ORD-10",
    date: "05-09-2026",
    party: "Online - Flipkart",
    item: "Kadai No.10",
    qty: 35,
    unit: "pcs",
    rate: 240,
    channel: "Flipkart",
    status: "DISPATCHED",
    dispatchedQty: 35,
    stage: "Ekart Shipped",
    paymentStatus: "OK",
    dues: 0,
    remarks: "Direct B2C order"
  },
  {
    id: "ORD-11",
    date: "05-09-2026",
    party: "Sharma Bartan Bhandar Karnal",
    item: "Gilas 300ml (Damaged Return)",
    qty: -6,
    unit: "dozen",
    rate: 260,
    channel: "B2B Wholesale",
    status: "HOLD",
    dispatchedQty: 0,
    stage: "QC Scrap Shed",
    paymentStatus: "HOLD",
    dues: 180000,
    remarks: "Dent in transport. Credit note pending."
  },
  {
    id: "ORD-12",
    date: "05-09-2026",
    party: "Verma Utensils Sonipat",
    item: "Thali 12 inch",
    qty: 40,
    unit: "dozen",
    rate: 605,
    channel: "B2B Wholesale",
    status: "READY",
    dispatchedQty: 0,
    stage: "100% Packed in Shed",
    paymentStatus: "OK",
    dues: 0,
    remarks: "Tempo scheduled 2:00 PM"
  },
  {
    id: "ORD-13",
    date: "06-09-2026",
    party: "Gupta Traders Ambala",
    item: "Bhagona 8L",
    qty: 40,
    unit: "pcs",
    rate: 400,
    channel: "B2B Wholesale",
    status: "POLISH",
    dispatchedQty: 0,
    stage: "At Karigar Bittu",
    paymentStatus: "OK",
    dues: 0,
    remarks: "Diwali stock prep"
  },
  {
    id: "ORD-14",
    date: "07-09-2026",
    party: "Sharma Bartan Bhandar Karnal",
    item: "Patila set 5pc",
    qty: 20,
    unit: "set",
    rate: 920,
    channel: "B2B Wholesale",
    status: "HOLD",
    dispatchedQty: 0,
    stage: "Waiting in Assembly (PAYMENT HOLD)",
    paymentStatus: "HOLD",
    dues: 180000,
    remarks: "Do NOT ship until old 1.8L paid."
  }
];

const INITIAL_JOBWORK = [
  {
    id: "JW-101",
    date: "03-09-2026",
    karigar: "Pappu Karigar",
    item: "Gilas 300ml",
    weightIssued: 420.0,
    pcsReceived: 1180,
    weightReceived: 414.0,
    shortageKg: 6.0,
    shortagePercent: 1.43,
    status: "SHORTAGE_FLAGGED",
    financialLoss: 1800,
    remarks: "Munshi note: 6kg short. Next lot mein adjust"
  },
  {
    id: "JW-102",
    date: "04-09-2026",
    karigar: "Ramu Polisher",
    item: "Tope No.6",
    weightIssued: 150.0,
    pcsReceived: 0,
    weightReceived: 0.0,
    shortageKg: 0.0,
    shortagePercent: 0,
    status: "IN_PROGRESS",
    financialLoss: 0,
    remarks: "Bansal order tope. Return expected tomorrow."
  },
  {
    id: "JW-103",
    date: "05-09-2026",
    karigar: "Bittu Buffing",
    item: "Kadai No.10",
    weightIssued: 310.0,
    pcsReceived: 180,
    weightReceived: 307.2,
    shortageKg: 2.8,
    shortagePercent: 0.90,
    status: "PASSED_NORMAL",
    financialLoss: 840,
    remarks: "Within normal 1% grinding allowance"
  }
];

// App State
let orders = JSON.parse(localStorage.getItem('karkhana_orders')) || INITIAL_ORDERS;
let jobwork = JSON.parse(localStorage.getItem('karkhana_jobwork')) || INITIAL_JOBWORK;
let currentRole = 'suresh';
let activeRameshTab = 'dispatch';
let currentDispatchTarget = null;
let isMobileSimulator = false;

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  renderAllViews();
  calculateMetalLoss();
});

function saveState() {
  localStorage.setItem('karkhana_orders', JSON.stringify(orders));
  localStorage.setItem('karkhana_jobwork', JSON.stringify(jobwork));
}

function resetMockData() {
  if (confirm("Reset factory data back to original Vardhan client pack state?")) {
    orders = JSON.parse(JSON.stringify(INITIAL_ORDERS));
    jobwork = JSON.parse(JSON.stringify(INITIAL_JOBWORK));
    saveState();
    renderAllViews();
    showToast("Data reset to original client pack state");
  }
}

// -------------------------------------------------------------------------
// Navigation & Role Switching
// -------------------------------------------------------------------------

function setRole(role) {
  currentRole = role;
  
  // Highlight active button
  document.querySelectorAll('.role-btn').forEach(btn => {
    btn.className = "role-btn px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white transition-all flex items-center gap-1.5";
  });
  
  const activeBtn = document.getElementById(`role-btn-${role}`);
  if (activeBtn) {
    activeBtn.className = "role-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 bg-blue-600 text-white shadow";
  }

  // Update context banner
  const bannerTitle = document.getElementById('context-banner-title');
  const bannerDesc = document.getElementById('context-banner-desc');
  
  if (role === 'suresh') {
    bannerTitle.textContent = "Suresh's Morning Cockpit:";
    bannerDesc.textContent = "Live visibility of Diwali orders, outside polishers, and overdue credit holds without calling Ramesh.";
  } else if (role === 'ramesh') {
    bannerTitle.textContent = "Ramesh Floor Dispatch:";
    bannerDesc.textContent = "Zero-typing 1-tap mobile execution: Mark polishing received, load tempos, and check credit locks.";
  } else if (role === 'kunal') {
    bannerTitle.textContent = "Kunal's Order Engine:";
    bannerDesc.textContent = "Clean intake replacing messy Google Sheet: Duplicate prevention, master SKUs, and unit standardization.";
  } else if (role === 'munshi') {
    bannerTitle.textContent = "Munshi Ji's Ledger:";
    bannerDesc.textContent = "Reconciles outside polishing metal weight: Stops the 3-4% steel shrinkage leaking thousands monthly.";
  }

  // Show/Hide Role Sections
  document.querySelectorAll('.role-view').forEach(view => view.classList.add('hidden'));
  const targetView = document.getElementById(`view-${role}`);
  if (targetView) targetView.classList.remove('hidden');

  renderAllViews();
  lucide.createIcons();
}

function toggleDeviceMode() {
  isMobileSimulator = !isMobileSimulator;
  const desktopContainer = document.getElementById('desktop-container');
  const mobileWrapper = document.getElementById('mobile-frame-wrapper');
  const toggleLabel = document.getElementById('device-toggle-label');
  
  if (isMobileSimulator) {
    desktopContainer.classList.add('hidden');
    mobileWrapper.classList.remove('hidden');
    toggleLabel.textContent = "Desktop Board";
    renderMobileFeed();
  } else {
    desktopContainer.classList.remove('hidden');
    mobileWrapper.classList.add('hidden');
    toggleLabel.textContent = "Mobile Simulator";
    renderAllViews();
  }
  lucide.createIcons();
}

// -------------------------------------------------------------------------
// Render All Views
// -------------------------------------------------------------------------

function renderAllViews() {
  renderSureshView();
  renderRameshView();
  renderKunalView();
  renderMunshiView();
  if (isMobileSimulator) renderMobileFeed();
  lucide.createIcons();
}

// Suresh View
function renderSureshView() {
  const tbody = document.getElementById('orders-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const polishCount = orders.filter(o => o.status === 'POLISH').length;
  document.getElementById('card-at-polish-count').textContent = `${polishCount} Lots`;
  document.getElementById('stat-stuck-polish').textContent = `${polishCount} Parties`;
  document.getElementById('badge-active-count').textContent = orders.length;

  orders.forEach(o => {
    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-800/50 transition";
    
    let statusBadge = '';
    if (o.status === 'HOLD') {
      statusBadge = `<span class="badge-hold px-2 py-0.5 rounded-full text-[10px] font-bold">⛔ HOLD: Payment Due</span>`;
    } else if (o.status === 'POLISH') {
      statusBadge = `<span class="badge-polish px-2 py-0.5 rounded-full text-[10px] font-bold">✨ In Polishing</span>`;
    } else if (o.status === 'READY') {
      statusBadge = `<span class="badge-ready px-2 py-0.5 rounded-full text-[10px] font-bold">📦 Ready in Shed</span>`;
    } else if (o.status === 'DISPATCHED') {
      statusBadge = `<span class="badge-done px-2 py-0.5 rounded-full text-[10px] font-bold">🚚 Dispatched</span>`;
    }

    let riskBadge = '';
    if (o.dues > 0) {
      riskBadge = `<span class="text-red-400 font-bold font-mono">Dues ₹${(o.dues/1000).toFixed(0)}k</span>`;
    } else {
      riskBadge = `<span class="text-emerald-400 font-semibold font-mono">Clean</span>`;
    }

    let actionBtn = '';
    if (o.status === 'HOLD') {
      actionBtn = `<button onclick="approveCredit('${o.id}')" class="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[10px] font-bold transition">Clear Hold</button>`;
    } else if (o.status === 'READY') {
      actionBtn = `<button onclick="openDispatchModal('${o.id}')" class="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[10px] font-bold transition">Dispatch</button>`;
    } else if (o.status === 'POLISH') {
      actionBtn = `<button onclick="markPolishReceived('${o.id}')" class="px-2.5 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded text-[10px] font-bold transition">Mark Received</button>`;
    } else {
      actionBtn = `<span class="text-slate-500 text-[11px]">Completed</span>`;
    }

    tr.innerHTML = `
      <td class="py-3 px-3 font-mono text-slate-400">${o.date}</td>
      <td class="py-3 px-3 font-bold text-white flex items-center gap-1.5">
        ${o.party}
        ${o.channel.includes('Amazon') ? '<span class="text-[9px] bg-amber-500/20 text-amber-300 px-1 rounded">AMZN</span>' : ''}
        ${o.channel.includes('Flipkart') ? '<span class="text-[9px] bg-blue-500/20 text-blue-300 px-1 rounded">FK</span>' : ''}
      </td>
      <td class="py-3 px-3 text-slate-200">${o.item}</td>
      <td class="py-3 px-3 font-mono font-semibold">${o.qty} ${o.unit}</td>
      <td class="py-3 px-3 font-mono text-slate-400">₹${o.rate}</td>
      <td class="py-3 px-3">${statusBadge} <div class="text-[10px] text-slate-400 mt-0.5">${o.stage}</div></td>
      <td class="py-3 px-3">${riskBadge}</td>
      <td class="py-3 px-3 text-right">${actionBtn}</td>
    `;
    tbody.appendChild(tr);
  });
}

function filterOrdersTable() {
  const query = document.getElementById('suresh-search-input').value.toLowerCase();
  const filter = document.getElementById('filter-status-select').value;
  const rows = document.querySelectorAll('#orders-tbody tr');

  rows.forEach(r => {
    const text = r.textContent.toLowerCase();
    const matchesQuery = text.includes(query);
    let matchesStatus = true;

    if (filter !== 'ALL') {
      if (filter === 'HOLD' && !text.includes('hold')) matchesStatus = false;
      if (filter === 'POLISH' && !text.includes('polishing')) matchesStatus = false;
      if (filter === 'READY' && !text.includes('ready')) matchesStatus = false;
      if (filter === 'DISPATCHED' && !text.includes('dispatched')) matchesStatus = false;
    }

    r.style.display = (matchesQuery && matchesStatus) ? '' : 'none';
  });
}

// Ramesh View
function setRameshTab(tab) {
  activeRameshTab = tab;
  ['dispatch', 'polish', 'hold'].forEach(t => {
    const btn = document.getElementById(`rtab-${t}`);
    if (btn) {
      if (t === tab) {
        btn.className = "pb-3 text-blue-400 border-b-2 border-blue-500 flex items-center gap-1.5 font-bold";
      } else {
        btn.className = "pb-3 text-slate-400 hover:text-white flex items-center gap-1.5 font-semibold";
      }
    }
  });
  renderRameshView();
}

function renderRameshView() {
  const container = document.getElementById('ramesh-cards-container');
  if (!container) return;
  container.innerHTML = '';

  const readyOrders = orders.filter(o => o.status === 'READY');
  const polishOrders = orders.filter(o => o.status === 'POLISH');
  const holdOrders = orders.filter(o => o.status === 'HOLD');

  document.getElementById('count-ready-tab').textContent = readyOrders.length;
  document.getElementById('count-polish-tab').textContent = polishOrders.length;
  document.getElementById('count-hold-tab').textContent = holdOrders.length;

  let displayList = [];
  if (activeRameshTab === 'dispatch') displayList = readyOrders;
  else if (activeRameshTab === 'polish') displayList = polishOrders;
  else if (activeRameshTab === 'hold') displayList = holdOrders;

  if (displayList.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-500">
        <i data-lucide="check-circle-2" class="w-10 h-10 mx-auto text-slate-600 mb-2"></i>
        <p class="text-sm">No items currently in this stage.</p>
      </div>
    `;
    return;
  }

  displayList.forEach(o => {
    const card = document.createElement('div');
    card.className = "bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition shadow-lg relative overflow-hidden";
    
    if (o.status === 'HOLD') {
      card.classList.add('border-red-900/60', 'bg-red-950/20');
    }

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">${o.id} · ${o.date}</span>
          ${o.status === 'HOLD' ? '<span class="text-[10px] font-bold text-red-400 bg-red-500/20 px-2 py-0.5 rounded">⛔ HOLD</span>' : ''}
          ${o.status === 'POLISH' ? '<span class="text-[10px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded">✨ AT POLISHER</span>' : ''}
          ${o.status === 'READY' ? '<span class="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">📦 READY TO LOAD</span>' : ''}
        </div>
        <h4 class="font-bold text-base text-white tracking-tight">${o.party}</h4>
        <div class="mt-2 p-3 bg-slate-900/90 rounded-xl border border-slate-800/80 space-y-1 text-xs">
          <div class="flex justify-between">
            <span class="text-slate-400">Item:</span>
            <span class="font-bold text-slate-200">${o.item}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-400">Total Quantity:</span>
            <span class="font-mono font-bold text-blue-400">${o.qty} ${o.unit}</span>
          </div>
          ${o.dispatchedQty > 0 ? `
            <div class="flex justify-between text-emerald-400 font-bold">
              <span>Already Dispatched:</span>
              <span class="font-mono">${o.dispatchedQty} ${o.unit}</span>
            </div>
            <div class="flex justify-between text-amber-400 font-bold">
              <span>Remaining on Floor:</span>
              <span class="font-mono">${o.qty - o.dispatchedQty} ${o.unit}</span>
            </div>
          ` : ''}
        </div>
        ${o.remarks ? `<p class="text-[11px] text-slate-400 italic mt-2">"${o.remarks}"</p>` : ''}
      </div>

      <div class="mt-4 pt-3 border-t border-slate-800/80 flex gap-2">
        ${o.status === 'READY' ? `
          <button onclick="openDispatchModal('${o.id}')" class="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition">
            <i data-lucide="truck" class="w-4 h-4"></i> Gaadi me Chadhaya (Load)
          </button>
        ` : ''}

        ${o.status === 'POLISH' ? `
          <button onclick="markPolishReceived('${o.id}')" class="flex-1 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition">
            <i data-lucide="check" class="w-4 h-4"></i> Polish se Aa Gaya
          </button>
        ` : ''}

        ${o.status === 'HOLD' ? `
          <div class="w-full text-center py-2 bg-red-950/60 border border-red-800/60 rounded-xl text-red-300 font-bold text-xs flex items-center justify-center gap-2">
            <i data-lucide="lock" class="w-4 h-4"></i> Papa / Munshi ji se clearance lo
          </div>
        ` : ''}
      </div>
    `;
    container.appendChild(card);
  });
}

// Kunal View
function renderKunalView() {
  const tbody = document.getElementById('kunal-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  orders.slice().reverse().forEach(o => {
    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-800/50 transition";
    tr.innerHTML = `
      <td class="py-2.5 px-3 text-slate-400">${o.date}</td>
      <td class="py-2.5 px-3 font-bold text-white">${o.party}</td>
      <td class="py-2.5 px-3 text-slate-300">${o.item}</td>
      <td class="py-2.5 px-3 font-semibold text-blue-400">${o.qty} ${o.unit}</td>
      <td class="py-2.5 px-3 font-mono text-slate-300">₹${(o.qty * o.rate).toLocaleString()}</td>
      <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300">${o.channel}</span></td>
      <td class="py-2.5 px-3 font-bold ${o.status === 'DISPATCHED' ? 'text-emerald-400' : (o.status === 'HOLD' ? 'text-red-400' : 'text-amber-400')}">${o.status}</td>
    `;
    tbody.appendChild(tr);
  });
}

function checkDuplicateOrder() {
  const partyInput = document.getElementById('order-party').value.trim().toLowerCase();
  const itemInput = document.getElementById('order-item').value;
  const banner = document.getElementById('duplicate-warning-banner');
  const bannerText = document.getElementById('duplicate-warning-text');

  if (!partyInput || !itemInput) {
    banner.classList.add('hidden');
    return;
  }

  const existing = orders.find(o => 
    o.party.toLowerCase().includes(partyInput) && 
    o.item === itemInput && 
    o.status !== 'DISPATCHED'
  );

  if (existing) {
    banner.classList.remove('hidden');
    bannerText.textContent = `⚠️ Active Order Exists! "${existing.party}" already has an order for ${existing.qty} ${existing.unit} of ${existing.item} (${existing.status}). Check before creating duplicate!`;
  } else {
    banner.classList.add('hidden');
  }
}

function handleNewOrderSubmit(e) {
  e.preventDefault();
  const party = document.getElementById('order-party').value.trim();
  const item = document.getElementById('order-item').value;
  const qty = parseInt(document.getElementById('order-qty').value);
  const unit = document.getElementById('order-unit').value;
  const rate = parseFloat(document.getElementById('order-rate').value);
  const channel = document.getElementById('order-channel').value;
  const remarks = document.getElementById('order-remarks').value.trim();

  // Automatic credit hold logic if party is Sharma Bartan
  let status = "READY";
  let paymentStatus = "OK";
  let dues = 0;

  if (party.toLowerCase().includes('sharma')) {
    status = "HOLD";
    paymentStatus = "HOLD";
    dues = 180000;
  }

  const newOrder = {
    id: `ORD-${String(orders.length + 1).padStart(2, '0')}`,
    date: new Date().toLocaleDateString('en-GB'),
    party,
    item,
    qty,
    unit,
    rate,
    channel,
    status,
    dispatchedQty: 0,
    stage: status === 'HOLD' ? 'Packed (HOLD ON DISPATCH)' : 'Scheduled for Production',
    paymentStatus,
    dues,
    remarks: remarks || "Diwali Rush Order"
  };

  orders.unshift(newOrder);
  saveState();
  renderAllViews();
  e.target.reset();
  document.getElementById('duplicate-warning-banner').classList.add('hidden');
  showToast(`Added Order ${newOrder.id} for ${party}!`);
}

function exportToCSV() {
  let csv = "Order_ID,Date,Party_Name,Item,Quantity,Unit,Rate,Total_Amount,Channel,Status,Payment_Status,Remarks\n";
  orders.forEach(o => {
    csv += `"${o.id}","${o.date}","${o.party}","${o.item}",${o.qty},"${o.unit}",${o.rate},${o.qty * o.rate},"${o.channel}","${o.status}","${o.paymentStatus}","${o.remarks}"\n`;
  });
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Vardhan_Steelware_Clean_Orders_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  showToast("Clean CSV exported for Munshi Ji's Tally import");
}

// Munshi View
function calculateMetalLoss() {
  const given = parseFloat(document.getElementById('jw-weight-given').value) || 0;
  const returned = parseFloat(document.getElementById('jw-weight-returned').value) || 0;
  
  if (given > 0 && returned > 0) {
    const diff = (given - returned);
    const pct = ((diff / given) * 100).toFixed(2);
    const financial = Math.round(diff * 300); // approx ₹300/kg SS scrap value
    
    document.getElementById('jw-shortage-val').textContent = `${diff.toFixed(1)} kg (${pct}%)`;
    document.getElementById('jw-loss-val').textContent = `₹${financial.toLocaleString()}`;
    
    if (pct > 1.0) {
      document.getElementById('jw-shortage-val').className = "font-mono font-bold text-red-400";
    } else {
      document.getElementById('jw-shortage-val').className = "font-mono font-bold text-emerald-400";
    }
  }
}

function handleJobworkSubmit(e) {
  e.preventDefault();
  const karigar = document.getElementById('jw-karigar').value;
  const item = document.getElementById('jw-item').value;
  const weightIssued = parseFloat(document.getElementById('jw-weight-given').value);
  const pcsReceived = parseInt(document.getElementById('jw-pcs-received').value);
  const weightReceived = parseFloat(document.getElementById('jw-weight-returned').value);

  const diff = weightIssued - weightReceived;
  const pct = ((diff / weightIssued) * 100).toFixed(2);
  const financial = Math.round(diff * 300);

  const newEntry = {
    id: `JW-${100 + jobwork.length + 1}`,
    date: new Date().toLocaleDateString('en-GB'),
    karigar,
    item,
    weightIssued,
    pcsReceived,
    weightReceived,
    shortageKg: diff,
    shortagePercent: parseFloat(pct),
    status: pct > 1.0 ? "SHORTAGE_FLAGGED" : "PASSED_NORMAL",
    financialLoss: financial,
    remarks: pct > 1.0 ? `Excess metal shortage ${pct}%. Auto-deducted from karigar bill.` : "Within normal limit"
  };

  jobwork.unshift(newEntry);
  saveState();
  renderMunshiView();
  e.target.reset();
  showToast(`Recorded batch for ${karigar}: ${diff.toFixed(1)} kg variance calculated!`);
}

function renderMunshiView() {
  const tbody = document.getElementById('jobwork-history-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  let totalShortage = 0;
  let totalLoss = 0;

  jobwork.forEach(jw => {
    totalShortage += jw.shortageKg;
    totalLoss += jw.financialLoss;

    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-800/50 transition";
    
    const isShortage = jw.shortagePercent > 1.0;
    
    tr.innerHTML = `
      <td class="py-2.5 px-3 text-slate-400">${jw.date}</td>
      <td class="py-2.5 px-3 font-bold text-white">${jw.karigar}</td>
      <td class="py-2.5 px-3 text-slate-300">${jw.item}</td>
      <td class="py-2.5 px-3 font-mono text-slate-200">${jw.weightIssued.toFixed(1)} kg</td>
      <td class="py-2.5 px-3 font-mono text-slate-200">${jw.pcsReceived} pcs / ${jw.weightReceived.toFixed(1)} kg</td>
      <td class="py-2.5 px-3 font-mono ${isShortage ? 'text-red-400 font-bold' : 'text-emerald-400'}">
        ${jw.shortageKg.toFixed(1)} kg (${jw.shortagePercent}%)
        ${isShortage ? '<span class="text-[9px] bg-red-500/20 px-1 rounded ml-1">ALERT</span>' : ''}
      </td>
      <td class="py-2.5 px-3 text-slate-400 text-[10px]">
        ${isShortage ? `Deduct ₹${jw.financialLoss} from Bill` : 'Cleared'}
      </td>
    `;
    tbody.appendChild(tr);
  });

  const totalElem = document.getElementById('total-shortage-kg');
  if (totalElem) {
    totalElem.textContent = `${totalShortage.toFixed(1)} kg (₹${totalLoss.toLocaleString()})`;
  }
}

// -------------------------------------------------------------------------
// Split-Fulfillment & Dispatch Action Modal
// -------------------------------------------------------------------------

function openDispatchModal(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;
  currentDispatchTarget = order;

  document.getElementById('modal-party-title').textContent = order.party;
  document.getElementById('modal-item-name').textContent = order.item;
  document.getElementById('modal-ordered-qty').textContent = `${order.qty} ${order.unit}`;
  document.getElementById('modal-already-disp').textContent = `${order.dispatchedQty} ${order.unit}`;
  
  const remaining = order.qty - order.dispatchedQty;
  document.getElementById('modal-remaining-qty').textContent = `${remaining} ${order.unit}`;
  document.getElementById('modal-dispatch-input').value = remaining;
  document.getElementById('modal-dispatch-input').max = remaining;

  document.getElementById('dispatch-modal').classList.remove('hidden');
}

function closeDispatchModal() {
  document.getElementById('dispatch-modal').classList.add('hidden');
  currentDispatchTarget = null;
}

function confirmDispatchAction() {
  if (!currentDispatchTarget) return;
  const dispatchAmount = parseInt(document.getElementById('modal-dispatch-input').value) || 0;
  const tempo = document.getElementById('modal-tempo-input').value.trim() || "Local Tempo (Tata Ace)";

  if (dispatchAmount <= 0) {
    alert("Please enter a valid dispatch quantity.");
    return;
  }

  currentDispatchTarget.dispatchedQty += dispatchAmount;
  
  if (currentDispatchTarget.dispatchedQty >= currentDispatchTarget.qty) {
    currentDispatchTarget.status = "DISPATCHED";
    currentDispatchTarget.stage = `Loaded 100% in ${tempo}`;
  } else {
    currentDispatchTarget.status = "READY";
    currentDispatchTarget.stage = `Split: ${currentDispatchTarget.dispatchedQty} loaded in ${tempo}, ${currentDispatchTarget.qty - currentDispatchTarget.dispatchedQty} remaining`;
  }

  saveState();
  closeDispatchModal();
  renderAllViews();
  showToast(`Dispatched ${dispatchAmount} ${currentDispatchTarget.unit} for ${currentDispatchTarget.party}!`);
}

function markPolishReceived(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;
  
  order.status = "READY";
  order.stage = "Received from polisher & packed in shed";
  saveState();
  renderAllViews();
  showToast(`Marked ${order.item} for ${order.party} received from polish!`);
}

function approveCredit(orderId) {
  const order = orders.find(o => o.id === orderId || (orderId === 'sharma' && o.party.toLowerCase().includes('sharma')));
  if (!order) return;

  if (confirm(`Approve dispatch credit for ${order.party}? (Suresh owner override)`)) {
    order.status = "READY";
    order.paymentStatus = "OVERRIDDEN";
    order.stage = "Credit override by Suresh — Ready to load";
    saveState();
    renderAllViews();
    showToast(`Credit approved for ${order.party}. Ready for loading.`);
  }
}

function openWhatsAppChat(partyKeyword) {
  alert(`Triggering WhatsApp Template Message:\n\n"Pranam Sharma Bartan Bhandar ji,\nAapka Gilas 300ml ka order ready hai. Diwali rush ke chalte purana balance ₹1,80,000 clear karein taaki gaadi nikal sakein.\n— Vardhan Steelware"`);
}

// -------------------------------------------------------------------------
// Mobile Simulator Rendering
// -------------------------------------------------------------------------

function renderMobileFeed() {
  const feed = document.getElementById('mobile-cards-feed');
  if (!feed) return;
  feed.innerHTML = '';

  const activeOrders = orders.filter(o => o.status !== 'DISPATCHED');

  activeOrders.forEach(o => {
    const card = document.createElement('div');
    card.className = "bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-md text-xs";
    
    let badgeClass = "text-emerald-400 bg-emerald-500/20";
    if (o.status === 'HOLD') badgeClass = "text-red-400 bg-red-500/20";
    if (o.status === 'POLISH') badgeClass = "text-amber-400 bg-amber-500/20";

    card.innerHTML = `
      <div class="flex items-center justify-between mb-1.5">
        <span class="font-extrabold text-sm text-white">${o.party}</span>
        <span class="px-2 py-0.5 rounded text-[10px] font-bold ${badgeClass}">${o.status}</span>
      </div>
      <div class="text-slate-300 font-medium">${o.item} — <span class="text-blue-400 font-bold">${o.qty} ${o.unit}</span></div>
      <div class="text-[11px] text-slate-400 mt-1">${o.stage}</div>
      <div class="mt-3 pt-2.5 border-t border-slate-800 flex gap-2">
        ${o.status === 'READY' ? `
          <button onclick="openDispatchModal('${o.id}')" class="flex-1 py-2 bg-emerald-600 active:bg-emerald-700 text-white font-bold rounded-xl text-center text-xs">
            🚚 Gaadi me Chadhaya
          </button>
        ` : ''}
        ${o.status === 'POLISH' ? `
          <button onclick="markPolishReceived('${o.id}')" class="flex-1 py-2 bg-amber-600 active:bg-amber-700 text-white font-bold rounded-xl text-center text-xs">
            ✨ Polish se Aaya
          </button>
        ` : ''}
        ${o.status === 'HOLD' ? `
          <div class="w-full text-center py-2 bg-red-950/80 text-red-300 font-bold rounded-xl text-[11px]">
            ⛔ Payment Hold (Papa se pucho)
          </div>
        ` : ''}
      </div>
    `;
    feed.appendChild(card);
  });
}

function mobileFilter(type) {
  if (type === 'ready') setRameshTab('dispatch');
  else if (type === 'polish') setRameshTab('polish');
  else if (type === 'hold') setRameshTab('hold');
  renderMobileFeed();
}

function mobileQuickRefresh() {
  renderMobileFeed();
  showToast("Mobile view synced with plant server");
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  toastMsg.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');
  
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 2800);
}
