(() => {
  'use strict';

  // ---------- Hằng số ----------
  const CATS = {
    main: { label: 'Món chính', emoji: '🍜' },
    snack: { label: 'Ăn vặt', emoji: '🍢' },
    drink: { label: 'Nước', emoji: '🧋' },
  };
  const MODES = {
    out: { label: 'Ăn ngoài', emoji: '🛵' },
    cook: { label: 'Nấu ăn', emoji: '🍳' },
  };
  const FILTERS = [
    { id: 'all', label: 'Tất cả', emoji: '🎴' },
    ...Object.entries(CATS).map(([id, c]) => ({ id, ...c })),
  ];
  const DEFAULT_BACK = { color: '#D8452A', img: null, effect: 'none', pattern: 'cross', patColor: 'auto', patAlpha: 0.24 };
  const PATTERNS = [
    ['cross', 'Caro chéo'], ['stripe', 'Sọc chéo'], ['gingham', 'Kẻ ô'], ['dots', 'Chấm bi'],
    ['diamond', 'Kim cương'], ['scale', 'Vảy cá'], ['rays', 'Tia nắng'], ['none', 'Trơn'],
  ];
  const PAT_COLORS = [['#FFFFFF', 'Trắng'], ['#1A120C', 'Đen'], ['#FFF3DC', 'Kem'], ['#F2C14E', 'Vàng kim']];
  const PAPER = '#EFE6D8'; // lưng bài "Không màu" mà không có ảnh: giấy trơn
  const RECENT_COLORS = 5;
  const BACK_COLORS = [
    ['#D8452A', 'Cà chua'], ['#1F6F86', 'Xanh cổ vịt'], ['#2F7D4F', 'Lá dứa'], ['#6B3A7A', 'Tím mận'],
    ['#1E2433', 'Mực đêm'], ['#E3A21A', 'Nghệ'], ['#E8839A', 'Hồng đào'],
  ];
  const PERSONAS = [
    ['sassy', '😏', 'Cá tính'], ['friendly', '😊', 'Thân thiện'], ['flatter', '🥰', 'Xu nịnh'],
  ];
  const EFFECTS = [['none', 'Không'], ['foil', 'Ánh kim'], ['shine', 'Vệt sáng'], ['glitter', 'Lấp lánh'], ['glow', 'Viền sáng']];
  const RECENT_MAX = 7;
  const MENU_GROUPS = [['none', 'Không nhóm', '📋'], ['cat', 'Loại món', '🍽️'], ['veg', 'Chay / Mặn', '🥬'], ['where', 'Ăn ngoài / Nấu ăn', '🛵']];
  const HEARTS_MAX = 5;
  const HEARTS_DEFAULT = 3;
  const IDLE_DECK = 10;
  const LS_KEY = 'meal-maybe:state';
  const TAGLINES = [
    'Hôm nay ăn gì? Để bộ bài quyết.',
    'Đói thì xào, ưng thì chốt.',
    'Bớt phân vân, thêm miếng ngon.',
    'Rút một lá, no một bữa.',
  ];
  // [tên, loại, emoji, ăn ngoài (o) / nấu ở nhà (c)]
  const SEED = [
    ['Phở bò', 'main', '🍜', 'oc'], ['Cơm tấm sườn', 'main', '🍚', 'oc'], ['Bún chả', 'main', '🥢', 'oc'],
    ['Bánh mì thịt', 'main', '🥖', 'o'], ['Bún bò Huế', 'main', '🌶️', 'oc'], ['Mì Quảng', 'main', '🍝', 'oc'],
    ['Bánh tráng trộn', 'snack', '🥗', 'o'], ['Xôi mặn', 'snack', '🍙', 'oc'], ['Gỏi cuốn', 'snack', '🌯', 'oc'],
    ['Bánh flan', 'snack', '🍮', 'oc'], ['Chè Thái', 'snack', '🍧', 'oc'],
    ['Trà sữa trân châu', 'drink', '🧋', 'o'], ['Cà phê sữa đá', 'drink', '☕', 'oc'], ['Nước mía', 'drink', '🥤', 'o'],
    ['Sinh tố bơ', 'drink', '🥑', 'oc'], ['Trà chanh', 'drink', '🍋', 'oc'],
  ];
  const SEED_WHERE = new Map(SEED.map(([name, , , w]) => [name, w]));
  // Món mẫu không có thịt, hải sản hay trứng
  const SEED_VEG = new Set(['Chè Thái', 'Trà sữa trân châu', 'Cà phê sữa đá', 'Nước mía', 'Sinh tố bơ', 'Trà chanh']);

  const svg = body => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
  const ICONS = {
    spin: svg('<rect x="3.2" y="5.5" width="9.5" height="13.5" rx="2" transform="rotate(-12 8 12.2)"/><rect x="10.5" y="4" width="9.5" height="13.5" rx="2" transform="rotate(9 15.2 10.8)"/>'),
    menu: svg('<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>'),
    recent: svg('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
    edit: svg('<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4z"/><path d="m13.5 6.5 4 4"/>'),
    trash: svg('<path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/>'),
    x: svg('<path d="M6 6l12 12M18 6 6 18"/>'),
    eye: svg('<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>'),
    back: svg('<path d="M14.5 5.5 8 12l6.5 6.5"/>'),
    soundOn: svg('<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>'),
    soundOff: svg('<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="m16 9.5 5 5M21 9.5l-5 5"/>'),
    chevron: svg('<path d="m6.5 9.5 5.5 5.5 5.5-5.5"/>'),
    check: svg('<path d="m5 12.5 4.5 4.5L19 7.5"/>'),
    deck: svg('<path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.8 1.8-1.7 0-1.1-.9-1.6-.9-2.6 0-.9.8-1.6 1.7-1.6H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z"/><circle cx="7.5" cy="11.5" r="1.2"/><circle cx="10.5" cy="7.5" r="1.2"/><circle cx="15.2" cy="7.8" r="1.2"/>'),
  };

  // ---------- Tiện ích ----------
  const $ = sel => document.querySelector(sel);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const rand = n => crypto.getRandomValues(new Uint32Array(1))[0] % n;
  const uid = () => (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

  // ---------- Trạng thái ----------
  const state = { foods: [], recent: [], settings: null };
  const ui = {
    view: 'spin',
    mode: 'out', // out = ăn ngoài, cook = nấu ăn; mỗi lần mở app đều bắt đầu ở ăn ngoài
    recentMode: 'out',
    spinFilter: 'all',
    menuFilter: 'all',
    editingId: null,
    pendingImg: undefined, // undefined = giữ ảnh cũ, null = bỏ ảnh, string = ảnh mới
    phase: 'idle', // idle | spinning | revealed | committed
    current: null,
    rejected: null,
    autoPick: null, // khi đang chờ người chơi chọn lá: hàm để máy chọn giùm
    cancelChoose: null, // huỷ bước chọn lá khi bấm Về bộ bài
  };
  const busy = () => ui.phase === 'spinning' || ui.phase === 'choosing';

  // ---------- Lưu trữ: IndexedDB, dự phòng localStorage ----------
  const IMG_RE = /^data:image\/[a-z+]+;base64,[a-z0-9+/=]+$/i; // test(undefined/null) cũng ra false

  const idb = (() => {
    let dbp = null;
    const open = () => (dbp ??= new Promise((resolve, reject) => {
      const req = indexedDB.open('meal-maybe', 1);
      req.onupgradeneeded = () => req.result.createObjectStore('kv');
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    }));
    const run = async (mode, fn) => {
      const db = await open();
      return new Promise((resolve, reject) => {
        const tx = db.transaction('kv', mode);
        const req = fn(tx.objectStore('kv'));
        tx.oncomplete = () => resolve(req.result);
        tx.onerror = tx.onabort = () => reject(tx.error);
      });
    };
    return {
      get: key => run('readonly', s => s.get(key)),
      set: (key, val) => run('readwrite', s => s.put(val, key)),
    };
  })();

  async function load() {
    let data = null;
    try { data = await idb.get('state'); } catch { /* IndexedDB không dùng được */ }
    if (!data) {
      try { data = JSON.parse(localStorage.getItem(LS_KEY)); } catch { /* bỏ qua */ }
    }
    if (data && Array.isArray(data.foods)) {
      applyData(data);
    } else {
      state.foods = SEED.map(([name, cat, emoji, w]) => ({
        id: uid(), name, cat, emoji, img: null, at: Date.now(), out: w.includes('o'), cook: w.includes('c'), hearts: HEARTS_DEFAULT, veg: SEED_VEG.has(name),
      }));
      state.settings = normalizeSettings();
      save();
    }
  }

  // Dùng chung cho dữ liệu trên máy và file sao lưu
  function applyData(data) {
    state.foods = data.foods
      .filter(f => f && typeof f.id === 'string' && typeof f.name === 'string' && CATS[f.cat])
      .map(f => ({ ...normalizeFood(f), img: IMG_RE.test(f.img) ? f.img : null }));
    state.recent = trimRecent((Array.isArray(data.recent) ? data.recent : [])
      .filter(Boolean).map(r => ({ ...r, mode: r.mode === 'cook' ? 'cook' : 'out' })));
    state.settings = normalizeSettings(data.settings);
  }

  // Món từ bản cũ chưa có cờ ăn ngoài/nấu: món mẫu lấy theo SEED, món tự thêm coi là ăn ngoài
  // Món từ bản cũ chưa có số tim: mặc định HEARTS_DEFAULT
  function normalizeFood(f) {
    let food = f;
    if (!(typeof f.out === 'boolean' && typeof f.cook === 'boolean' && (f.out || f.cook))) {
      const w = SEED_WHERE.get(f.name) ?? 'o';
      food = { ...food, out: w.includes('o'), cook: w.includes('c') };
    }
    if (!(Number.isInteger(f.hearts) && f.hearts >= 1 && f.hearts <= HEARTS_MAX)) food = { ...food, hearts: HEARTS_DEFAULT };
    // Món từ bản cũ chưa có cờ chay: món mẫu lấy theo SEED_VEG, món tự thêm coi là không chay
    if (typeof f.veg !== 'boolean') food = { ...food, veg: SEED_VEG.has(f.name) };
    return food;
  }

  // Mỗi chế độ giữ tối đa RECENT_MAX món, mới nhất đứng đầu
  function trimRecent(list) {
    const n = { out: 0, cook: 0 };
    return list.filter(r => ++n[r.mode] <= RECENT_MAX);
  }

  function normalizeSettings(s) {
    const b = s?.back ?? {};
    return {
      drawMode: s?.drawMode === 'manual' ? 'manual' : 'auto',
      sound: s?.sound !== false,
      vegOnly: s?.vegOnly === true, // chỉ xào món chay; nhớ qua các lần mở app
      menuGroup: MENU_GROUPS.some(([id]) => id === s?.menuGroup) ? s.menuGroup : 'none', // nhóm danh sách Thực đơn
      quips: s?.quips !== false,
      // Màu tự chọn gần đây, dùng chung cho màu bộ bài và màu vân
      recentColors: (Array.isArray(s?.recentColors) ? s.recentColors : []).filter(c => /^#[0-9a-f]{6}$/i.test(c)).slice(0, RECENT_COLORS),
      persona: PERSONAS.some(([id]) => id === s?.persona) ? s.persona : 'sassy',
      back: {
        color: b.color === 'none' || /^#[0-9a-f]{6}$/i.test(b.color) ? b.color : DEFAULT_BACK.color,
        img: IMG_RE.test(b.img) ? b.img : null,
        effect: EFFECTS.some(([id]) => id === b.effect) ? b.effect : DEFAULT_BACK.effect,
        pattern: PATTERNS.some(([id]) => id === b.pattern) ? b.pattern : DEFAULT_BACK.pattern,
        patColor: b.patColor === 'none' || /^#[0-9a-f]{6}$/i.test(b.patColor) ? b.patColor : 'auto',
        patAlpha: Number.isFinite(b.patAlpha) ? Math.min(0.7, Math.max(0.08, b.patAlpha)) : DEFAULT_BACK.patAlpha,
      },
    };
  }

  let saveChain = Promise.resolve();
  function save() {
    const snapshot = { v: 1, foods: state.foods.slice(), recent: state.recent.slice(), settings: structuredClone(state.settings) };
    saveChain = saveChain.then(async () => {
      try { await idb.set('state', snapshot); return; } catch { /* thử localStorage */ }
      try { localStorage.setItem(LS_KEY, JSON.stringify(snapshot)); }
      catch { toast('Không lưu được dữ liệu trên máy này.'); }
    });
  }

  // ---------- Truy vấn ----------
  const recentOf = mode => state.recent.filter(r => r.mode === mode);
  const restingIds = (mode = ui.mode) => new Set(recentOf(mode).map(r => r.foodId));
  const inFilter = (f, filter) => filter === 'all' || f.cat === filter;
  const inMode = (f, mode = ui.mode) => !!f[mode];
  const deckFoods = () => state.foods.filter(f => inMode(f) && inFilter(f, ui.spinFilter) && (!state.settings.vegOnly || f.veg));
  const foodOf = r => state.foods.find(f => f.id === r.foodId);
  const nameOf = r => foodOf(r)?.name ?? r.name;
  function spinPool() {
    const rest = restingIds();
    return deckFoods().filter(f => !rest.has(f.id));
  }

  function when(ts) {
    const d = new Date(ts);
    const now = new Date();
    const startOf = x => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime();
    const days = Math.round((startOf(now) - startOf(d)) / 864e5);
    const hm = d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    if (days <= 0) return `Hôm nay · ${hm}`;
    if (days === 1) return `Hôm qua · ${hm}`;
    if (days < 7) return `${days} ngày trước`;
    return d.toLocaleDateString('vi-VN');
  }

  // ---------- Toast ----------
  let toastTimer = 0;
  function toast(msg, action) {
    const el = $('#toast');
    el.innerHTML = `<span>${esc(msg)}</span>${action ? `<button type="button">${esc(action.label)}</button>` : ''}`;
    if (action) el.querySelector('button').onclick = () => { action.run(); el.hidden = true; };
    el.hidden = false;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, action ? 5000 : 2800);
  }
  const announce = msg => { $('#announce').textContent = msg; };

  // ---------- Điều hướng ----------
  function setView(view) {
    if (view !== ui.view) hideQuip();
    ui.view = view;
    for (const id of ['spin', 'menu', 'recent', 'deck']) $(`#view-${id}`).hidden = id !== view;
    renderTabs();
    window.scrollTo(0, 0);
  }

  function renderTabs() {
    const tabs = [
      ['spin', 'Quay', ''],
      ['menu', 'Thực đơn', state.foods.length],
      ['recent', 'Gần đây', state.recent.length],
      ['deck', 'Custom bộ bài', ''],
    ];
    $('#tabs').innerHTML = tabs.map(([id, label, badge]) => `
      <button type="button" class="tab" data-view="${id}"${ui.view === id ? ' aria-current="page"' : ''}>
        ${ICONS[id]}<span>${label}</span>${badge !== '' ? `<b class="badge">${badge}</b>` : ''}
      </button>`).join('');
  }

  const chipsHTML = (active, counts) => FILTERS.map(f => `
    <button type="button" class="chip" data-filter="${f.id}" aria-pressed="${f.id === active}">
      <span aria-hidden="true">${f.emoji}</span>${f.label}${counts ? `<small>${counts[f.id]}</small>` : ''}
    </button>`).join('');

  function thumbHTML(food) {
    const cat = CATS[food.cat] ?? CATS.main;
    const inner = food.img
      ? `<img src="${esc(food.img)}" alt="" loading="lazy">`
      : `<span aria-hidden="true">${esc(food.emoji || cat.emoji)}</span>`;
    return `<span class="thumb" data-cat="${food.cat}">${inner}</span>`;
  }

  // ---------- Màn Quay ----------
  function renderSpin() {
    const chips = $('#spinChips');
    chips.innerHTML = chipsHTML(ui.spinFilter);
    chips.classList.toggle('locked', busy());
    $('#spinTools').classList.toggle('locked', busy());
    const where = $('#whereSeg');
    where.classList.toggle('locked', busy());
    for (const r of where.querySelectorAll('input')) r.checked = r.value === ui.mode;
    for (const r of $('#modeSeg').querySelectorAll('input')) r.checked = r.value === state.settings.drawMode;
    $('#backBtn').hidden = ui.phase === 'idle';
    const soundBtn = $('#soundBtn');
    soundBtn.innerHTML = state.settings.sound ? ICONS.soundOn : ICONS.soundOff;
    soundBtn.setAttribute('aria-pressed', String(state.settings.sound));
    soundBtn.title = state.settings.sound ? 'Tắt âm thanh' : 'Bật âm thanh';

    const inCat = deckFoods();
    const pool = spinPool();
    const resting = inCat.length - pool.length;
    const label = ui.spinFilter === 'all' ? '' : ` ${CATS[ui.spinFilter].label.toLowerCase()}`;
    const veg = state.settings.vegOnly;
    const kind = `${veg ? 'chay ' : ''}${ui.mode === 'cook' ? 'nấu' : 'ăn ngoài'}`;
    const vegBtn = $('#vegBtn');
    vegBtn.setAttribute('aria-pressed', String(veg));
    vegBtn.title = veg ? 'Đang chỉ xào món chay, bấm để xào tất cả' : 'Chỉ xào món chay';

    let note;
    if (!inCat.length) {
      note = veg
        ? `Chưa có món ${kind}${label} nào. Tick “Chay” cho món trong Thực đơn, hoặc tắt nút Chay.`
        : `Chưa có món ${kind}${label} nào. Tick “${MODES[ui.mode].label}” cho món trong Thực đơn nhé.`;
    } else if (!pool.length) {
      note = `Cả ${inCat.length} món ${kind}${label} đều mới ${ui.mode === 'cook' ? 'nấu' : 'ăn'} gần đây. Bỏ bớt ở mục Gần đây để quay tiếp.`;
    }
    else note = `<b>${pool.length}</b> lá${veg ? ' chay' : ''} trong bộ bài${resting ? ` · ${resting} món đang nghỉ vì mới ${ui.mode === 'cook' ? 'nấu' : 'ăn'}` : ''}`;
    $('#poolNote').innerHTML = note;

    const showingCard = ui.phase === 'revealed' || ui.phase === 'committed';
    stage.classList.toggle('empty', !pool.length && !showingCard && ui.phase !== 'spinning');
    stage.classList.toggle('ready', ui.phase === 'idle' && pool.length > 0);

    const a = $('#actions');
    if (ui.phase === 'spinning') {
      a.innerHTML = '<button type="button" class="btn primary big" disabled>Đang xào bài…</button>';
    } else if (ui.phase === 'choosing') {
      a.innerHTML = `
        <p class="choose-hint">Chọn một lá bạn ưng<small class="kbd-only"> · hoặc ← → rồi Enter</small></p>
        <button type="button" class="btn ghost" data-act="autopick">Để máy chọn giùm</button>`;
    } else if (ui.phase === 'revealed') {
      const others = pool.some(f => f.id !== ui.current.id);
      a.innerHTML = `
        <button type="button" class="btn primary big" data-act="commit">Chốt món này</button>
        <button type="button" class="btn ghost" data-act="redraw"${others ? '' : ' disabled'}>Rút lá khác</button>`;
    } else if (!inCat.length) {
      a.innerHTML = '<button type="button" class="btn primary big" data-act="goto-add">Thêm món</button>';
    } else if (!pool.length) {
      a.innerHTML = '<button type="button" class="btn ghost big" data-act="goto-recent">Xem 7 món gần nhất</button>';
    } else if (ui.phase === 'committed') {
      a.innerHTML = '<button type="button" class="btn primary big" data-act="spin">Xào bài lần nữa</button>';
    } else {
      a.innerHTML = '<button type="button" class="btn primary big" data-act="spin">Xào bài &amp; rút</button>';
    }
  }

  // ---------- Âm thanh: tổng hợp bằng Web Audio, không cần file ----------
  const sfx = (() => {
    let ctx = null, out = null, noise = null;
    // Vẫn xếp lịch khi context đang tạm dừng: đồng hồ của nó đứng yên nên tiếng sẽ phát đúng nhịp ngay khi chạy lại
    const ready = () => !!ctx && ctx.state !== 'closed' && state.settings.sound;

    // iPhone/iPad (Safari 16.4+): mặc định Web Audio im khi gạt công tắc im lặng.
    // "playback" cho app phát tiếng như app nghe nhạc; "auto" trả lại mặc định khi tắt loa.
    function audioSession(type) {
      try { if (navigator.audioSession) navigator.audioSession.type = type; } catch { /* trình duyệt không hỗ trợ */ }
    }

    // Trình duyệt chỉ cho phát tiếng sau thao tác của người dùng: gọi hàm này trong sự kiện bấm
    function unlock() {
      if (!state.settings.sound) return;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      audioSession('playback');
      if (!ctx) {
        ctx = new AC();
        noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
        const d = noise.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      }
      wake();
      // iOS đời cũ chỉ mở khoá âm thanh khi có một nguồn phát được start ngay trong thao tác chạm
      const blip = ctx.createBufferSource();
      blip.buffer = ctx.createBuffer(1, 1, 22050);
      blip.connect(ctx.destination);
      blip.start(0);
    }

    // Đánh thức context bị treo: "suspended" (chưa chạm lần nào) hoặc "interrupted"
    // (iOS, sau khi khoá máy / chuyển app / có cuộc gọi). Tiếng đã hẹn trong lúc treo bị bỏ
    // để khỏi phát dồn một lúc khi chạy lại.
    function wake() {
      if (!ctx || ctx.state === 'running' || ctx.state === 'closed' || !state.settings.sound) return;
      out?.disconnect();
      out = null;
      ctx.resume().catch(() => { /* chưa có thao tác người dùng, thử lại ở lần chạm sau */ });
    }
    function bus() {
      if (!out) {
        out = ctx.createGain();
        out.gain.value = 0.7;
        out.connect(ctx.destination);
      }
      return out;
    }
    // Một chùm nhiễu lọc dải: đủ để giả tiếng giấy bài chạm nhau, lướt, gõ
    function burst({ at = 0, dur = 0.03, gain = 0.3, freq = 3000, sweep = 0, q = 1.2, attack = 0.002 }) {
      if (!ready()) return;
      const t = ctx.currentTime + Math.max(0, at);
      const src = ctx.createBufferSource();
      src.buffer = noise;
      const f = ctx.createBiquadFilter();
      f.type = 'bandpass';
      f.frequency.setValueAtTime(freq * (0.85 + Math.random() * 0.3), t);
      if (sweep) f.frequency.exponentialRampToValueAtTime(sweep, t + dur);
      f.Q.value = q;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(gain, t + attack);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      src.connect(f).connect(g).connect(bus());
      src.start(t, Math.random() * 0.8, dur + 0.05);
    }
    function tone(hz, at, dur, gain, type = 'sine', to = 0) {
      const t = ctx.currentTime + Math.max(0, at);
      const o = ctx.createOscillator();
      o.type = type;
      o.frequency.setValueAtTime(hz, t);
      if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur * 0.8);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(gain, t + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(bus());
      o.start(t);
      o.stop(t + dur + 0.02);
    }

    return {
      unlock,
      wake,
      // Cắt mọi tiếng đã hẹn giờ (khi huỷ lượt xào hoặc tắt tiếng)
      stop() { out?.disconnect(); out = null; },
      // Tắt loa: dừng hẳn context và trả phiên âm thanh về mặc định để không chặn nhạc của app khác
      mute() {
        out?.disconnect();
        out = null;
        ctx?.suspend().catch(() => {});
        audioSession('auto');
      },
      snap: (at = 0, gain = 0.3) => burst({ at, gain, dur: 0.028, freq: 3000, q: 1.3 }),
      tick: (at = 0) => burst({ at, gain: 0.1, dur: 0.018, freq: 4200, q: 2 }),
      tap: (at = 0) => burst({ at, gain: 0.45, dur: 0.07, freq: 1100, q: 0.8 }),
      swish: (at = 0, dur = 0.3, gain = 0.15, from = 900, to = 3800) => burst({ at, dur, gain, freq: from, sweep: to, q: 0.9, attack: dur * 0.35 }),
      flip: (at = 0) => burst({ at, gain: 0.35, dur: 0.045, freq: 2000, q: 1 }),
      chime(at = 0) {
        if (!ready()) return;
        tone(880, at, 0.5, 0.1, 'triangle');
        tone(1320, at + 0.07, 0.55, 0.08, 'triangle');
      },
      thump(at = 0) {
        if (!ready()) return;
        tone(150, at, 0.16, 0.5, 'sine', 55);
        burst({ at, gain: 0.3, dur: 0.05, freq: 900, q: 0.7 });
      },
    };
  })();

  // ---------- Lời bình của bộ bài ----------
  // Câu thoại nằm trong quips.js, chia theo tính cách
  const QUIPS = window.MEAL_QUIPS ?? { sassy: {} };

  // Trạng thái trong phiên: số lá đã rút mà chưa chốt, món vừa ra, số lần gặp từng món...
  const talk = {
    streak: 0, lastFood: null, seen: new Map(), lastCommitAt: 0, lastLine: '',
    spins: 0, revealAt: 0, peeks: 0, peekTold: 0, modeFlips: [], filterFlips: [], vegEdits: [], autoPicked: false, edgePicked: false,
  };
  // Bong bóng lời bình: trên sân khấu ở màn Quay, nổi phía trên thanh tab ở các màn khác
  const quipStage = $('#quip');
  const quipFloat = $('#quipFloat');
  let quipEl = quipStage;
  let quipTimer = 0;

  function hideQuip() {
    clearTimeout(quipTimer);
    if (quipEl.hidden) return;
    const el = quipEl;
    el.classList.add('out');
    quipTimer = setTimeout(() => { el.hidden = true; el.classList.remove('out'); }, 200);
  }

  // Nói một câu trong nhóm `key` (với xác suất `chance`); trả về true nếu đã nói
  function quip(key, vars = {}, chance = 1) {
    if (!state.settings.quips || Math.random() >= chance) return false;
    const lines = QUIPS[state.settings.persona]?.[key] ?? QUIPS.sassy[key];
    if (!lines?.length) return false;
    const fresh = lines.filter(l => l !== talk.lastLine);
    const pickFrom = fresh.length ? fresh : lines;
    const line = pickFrom[rand(pickFrom.length)];
    talk.lastLine = line;
    const text = line.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
    clearTimeout(quipTimer);
    const target = ui.view === 'spin' ? quipStage : quipFloat;
    if (target !== quipEl) quipEl.hidden = true;
    quipEl = target;
    quipEl.textContent = text;
    quipEl.classList.remove('out');
    quipEl.hidden = false;
    quipEl.style.animation = 'none';
    void quipEl.offsetWidth;
    quipEl.style.animation = '';
    quipTimer = setTimeout(hideQuip, 2800 + text.length * 45);
    return true;
  }

  // Ghi lại một lần đổi (chế độ / bộ lọc); đủ `limit` lần trong 20 giây thì trả về true
  function flipped(list, limit) {
    const now = Date.now();
    list.push(now);
    while (list.length && now - list[0] > 20e3) list.shift();
    if (list.length < limit) return false;
    list.length = 0;
    return true;
  }

  function quipOnSpinStart() {
    hideQuip();
    talk.spins++;
    talk.peeks = talk.peekTold = 0;
    if (talk.streak > 0) return;
    const h = new Date().getHours();
    if (Date.now() - talk.lastCommitAt < 90e3) quip('afterCommit');
    else if (h >= 22 || h < 4) quip('late', {}, 0.6);
    else if (talk.spins === 1) quip('firstSpin', {}, 0.35);
  }

  function quipOnReveal(food, poolSize) {
    talk.streak++;
    talk.revealAt = Date.now();
    const n = (talk.seen.get(food.id) ?? 0) + 1;
    talk.seen.set(food.id, n);
    const same = talk.lastFood === food.id;
    talk.lastFood = food.id;
    const auto = talk.autoPicked, edge = talk.edgePicked;
    talk.autoPicked = talk.edgePicked = false;
    const v = { name: food.name, n: talk.streak };
    const h = new Date().getHours();
    if (same) return quip('twice', v);
    if (n >= 3) return quip('again', { name: food.name, n });
    if (talk.streak === 3 || talk.streak === 5 || talk.streak === 8) return quip(`streak${talk.streak}`, v);
    if (talk.streak >= 10 && talk.streak % 3 === 1) return quip('streakMax', v);
    if (n === 2 && quip('back2', v, 0.6)) return;
    if (auto && quip('autoPick', v, 0.6)) return;
    if (edge && quip('edgePick', v, 0.4)) return;
    if (poolSize <= 2 && quip('small', { n: poolSize }, 0.7)) return;
    if (food.hearts === 5 && quip('five', v, 0.5)) return;
    if (food.hearts === 1 && quip('one', v, 0.6)) return;
    if (state.settings.vegOnly && quip('veg', v, 0.3)) return;
    if (ui.mode === 'cook' && quip('cook', v, 0.25)) return;
    if (food.cat === 'drink' && quip('drink', v, 0.25)) return;
    if (h >= 5 && h < 10 && quip('morning', v, 0.25)) return;
    quip('generic', v, 0.25);
  }

  // Cập nhật nhãn chay của một món: sửa dồn dập thì nói một câu chung
  function quipOnVegEdit(name, nowVeg) {
    if (flipped(talk.vegEdits, 4)) return quip('vegBulk');
    return quip(nowVeg ? 'vegMark' : 'vegUnmark', { name }, 0.75);
  }

  function quipOnCommit(food) {
    const n = talk.streak;
    talk.streak = 0;
    talk.seen.clear();
    talk.lastFood = null;
    talk.lastCommitAt = Date.now();
    const v = { name: food.name, n };
    if (n <= 1 && quip('commitFirst', v, 0.6)) return;
    if (n >= 5 && quip('commitLate', v)) return;
    if (food.hearts === 1 && quip('commitOne', v)) return;
    if (ui.mode === 'cook' && quip('commitCook', v, 0.4)) return;
    if (food.cat === 'drink' && quip('commitDrink', v, 0.4)) return;
    quip('commitGeneric', v, 0.3);
  }

  // ---------- Bộ bài & hiệu ứng ----------
  const stage = $('#stage');
  let deck = [];

  // Mọi transform dùng cùng một danh sách hàm để trình duyệt nội suy từng hàm (góc xoay mượt).
  const T = (x, y, r, s = 1) => `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) rotate(${r.toFixed(2)}deg) scale(${s})`;
  const stackT = k => T(((k * 53) % 5 - 2) * 0.7, -k * 1.3, ((k * 37) % 7 - 3) * 0.5);

  function tween(el, to, { duration = 300, delay = 0, easing = 'cubic-bezier(.25,.8,.25,1)', via = null } = {}) {
    const cs = getComputedStyle(el);
    const from = { transform: cs.transform, opacity: cs.opacity };
    const end = { transform: to.transform ?? from.transform, opacity: String(to.opacity ?? from.opacity) };
    el.getAnimations().forEach(a => a.cancel());
    el.style.transform = end.transform;
    el.style.opacity = end.opacity;
    const frames = via ? [from, { offset: 0.5, ...via }, end] : [from, end];
    const anim = el.animate(frames, { duration: reduceMotion.matches ? 0 : duration, delay, easing, fill: 'backwards' });
    return anim.finished.catch(() => {});
  }

  function flip(inner, duration = 560) {
    inner.style.transform = 'rotateY(180deg) scale(1)';
    return inner.animate([
      { transform: 'rotateY(0deg) scale(1)' },
      { transform: 'rotateY(90deg) scale(1.08)', offset: 0.5 },
      { transform: 'rotateY(180deg) scale(1)' },
    ], { duration: reduceMotion.matches ? 0 : duration, easing: 'cubic-bezier(.3,.6,.3,1)', fill: 'backwards' }).finished.catch(() => {});
  }

  function buildDeck(n) {
    stage.classList.remove('lit');
    stage.replaceChildren();
    deck = [];
    for (let k = 0; k < n; k++) {
      const el = document.createElement('div');
      el.className = 'card';
      el.innerHTML = '<div class="card-inner"><div class="card-back"><i class="fx"></i></div><div class="card-face"></div></div>';
      el.style.transform = stackT(k);
      el.style.zIndex = k;
      el.style.setProperty('--k', k);
      stage.append(el);
      deck.push({ el, inner: el.firstElementChild, face: el.querySelector('.card-face') });
    }
  }

  function dealIn() {
    return Promise.all(deck.map((c, k) => {
      c.el.style.opacity = '0';
      c.el.style.transform = T(0, -150 - k * 4, k % 2 ? 9 : -9);
      sfx.snap((k * 24 + 290) / 1000, 0.14);
      return tween(c.el, { transform: stackT(k), opacity: 1 }, { duration: 320, delay: k * 24, easing: 'cubic-bezier(.2,.9,.3,1.1)' });
    }));
  }

  function resetDeck() {
    buildDeck(IDLE_DECK);
    dealIn();
  }

  function faceHTML(food) {
    const cat = CATS[food.cat];
    const art = food.img
      ? `<img src="${esc(food.img)}" alt="">`
      : `<span class="face-emoji">${esc(food.emoji || cat.emoji)}</span>`;
    return `
      <span class="pip pip-tl">${cat.emoji}</span>${food.veg ? '<span class="veg-mark" title="Món chay" aria-label="Món chay">🌿</span>' : ''}
      <div class="face-art">${art}</div>
      <div class="face-name">${esc(food.name)}</div>
      ${heartsHTML(food.hearts)}
      <span class="pip pip-br">${cat.emoji}</span>`;
  }

  function heartsHTML(n = HEARTS_DEFAULT) {
    return `<div class="face-hearts" role="img" aria-label="${n}/${HEARTS_MAX} tim">${'♥'.repeat(n)}<span class="off">${'♥'.repeat(HEARTS_MAX - n)}</span></div>`;
  }

  function fillFace(face, food) {
    face.dataset.cat = food.cat;
    face.innerHTML = faceHTML(food);
  }

  // Mỗi lượt xào có một số thứ tự; bấm "Về bộ bài" sẽ tăng số này và lượt cũ tự dừng ở bước chờ kế tiếp.
  const CANCEL = Symbol('cancel');
  let spinRun = 0;

  async function shuffleAndPick(food, n, run) {
    const live = async p => {
      const v = await p;
      if (run !== spinRun) throw CANCEL;
      return v;
    };

    // Dọn lá đã lật lần trước và chia bộ bài mới
    if (stage.querySelector('.card.chosen')) {
      stage.classList.remove('lit');
      sfx.swish(0, 0.2, 0.12, 2400, 900);
      await live(Promise.all(deck.map(c => tween(c.el, { transform: T(0, 40, 0, 1), opacity: 0 }, { duration: 200 }))));
      buildDeck(n);
      await live(dealIn());
    } else if (deck.length !== n) {
      buildDeck(n); // bộ bài đang úp sẵn: đổi số lá tại chỗ, không cần chia lại
    }

    const quick = reduceMotion.matches;
    let order = deck.slice(); // dưới → trên
    const W = stage.clientWidth;
    const cw = deck[0].el.offsetWidth;

    if (!quick) {
      // Xào kiểu riffle: chia đôi, rồi thả xen kẽ từ hai bên vào giữa
      const dx = Math.max(40, Math.min(96, W / 2 - cw / 2 - 8));
      for (let round = 0; round < 2; round++) {
        const fast = round === 1;
        const half = Math.ceil(order.length / 2) + rand(3) - 1;
        const L = order.slice(0, half);
        const R = order.slice(half);
        sfx.swish(0, fast ? 0.18 : 0.24, 0.1, 1500, 3200);
        await live(Promise.all([
          ...L.map((c, i) => tween(c.el, { transform: T(-dx, -i * 1.3 + 4, -7) }, { duration: fast ? 200 : 260, delay: i * 6 })),
          ...R.map((c, i) => tween(c.el, { transform: T(dx, -i * 1.3 + 4, 7) }, { duration: fast ? 200 : 260, delay: i * 6 })),
        ]));

        const next = [];
        let li = 0, ri = 0, fromLeft = rand(2) === 0;
        while (li < L.length || ri < R.length) {
          if (li >= L.length) fromLeft = false;
          else if (ri >= R.length) fromLeft = true;
          const burst = 1 + (rand(4) === 0 ? 1 : 0);
          for (let b = 0; b < burst; b++) {
            if (fromLeft && li < L.length) next.push({ c: L[li++], side: -1 });
            else if (!fromLeft && ri < R.length) next.push({ c: R[ri++], side: 1 });
          }
          fromLeft = !fromLeft;
        }

        const stagger = fast ? 30 : 42;
        await live(Promise.all(next.map(({ c, side }, k) => {
          setTimeout(() => { c.el.style.zIndex = 100 + k; }, k * stagger);
          sfx.snap((k * stagger + 180) / 1000, 0.2 + Math.random() * 0.14); // tiếng lá rơi khớp lúc lá chạm bộ bài
          return tween(c.el, { transform: stackT(k) }, {
            duration: 190,
            delay: k * stagger,
            easing: 'cubic-bezier(.3,.6,.3,1)',
            via: { transform: T(side * dx * 0.45, -k * 1.3 - 12, side * 3), offset: 0.45 },
          });
        })));
        order = next.map(x => x.c);
        order.forEach((c, k) => { c.el.style.zIndex = k; });
      }

      // Gõ bộ bài cho gọn
      sfx.tap(0.08);
      await live(Promise.all(order.map((c, k) => tween(c.el, { transform: stackT(k) }, {
        duration: 170, via: { transform: T(0, -k * 1.3 + 3, 0, 0.97) },
      }))));
    }

    // Xoè bài
    const count = order.length;
    const radius = Math.round(cw * 2.16); // 320px với lá 148px; lá to hơn trên màn rộng thì xoè rộng theo
    const ch = deck[0].el.offsetHeight;
    // Góc xoè lớn nhất mà lá ngoài cùng (kể cả phần góc bị xoay) vẫn nằm trong màn hình
    let spread = 34;
    const reach = deg => {
      const r = deg * Math.PI / 180;
      return radius * Math.sin(r) + (cw / 2) * Math.cos(r) + (ch / 2) * Math.sin(r);
    };
    while (spread > 4 && reach(spread) > W / 2 - 6) spread -= 0.5;
    const fan = order.map((_, k) => {
      const a = count === 1 ? 0 : -spread + (2 * spread * k) / (count - 1);
      const rad = a * Math.PI / 180;
      return { x: radius * Math.sin(rad), y: radius * (1 - Math.cos(rad)) + 18, a };
    });
    const fanT = (k, lift = 0) => {
      const { x, y, a } = fan[k];
      const rad = a * Math.PI / 180;
      return T(x + lift * Math.sin(rad), y - lift * Math.cos(rad), a);
    };

    const manual = state.settings.drawMode === 'manual';
    let pick = count - 1;
    if (!quick || manual) {
      sfx.swish(0, 0.5, 0.13, 700, 3000);
      await live(Promise.all(order.map((c, k) => tween(c.el, { transform: fanT(k) }, {
        duration: 440, delay: k * 22, easing: 'cubic-bezier(.2,.9,.25,1)',
      }))));
    }

    if (manual) {
      pick = await live(chooseCard(order, fanT));
    } else if (!quick) {
      // Ngón tay lướt qua các lá, chậm dần rồi dừng ở một lá
      let i = rand(count);
      let dir = rand(2) ? 1 : -1;
      const steps = count + rand(Math.ceil(count / 2));
      let prev = -1;
      for (let s = 0; s < steps; s++) {
        const t = s / (steps - 1);
        const d = 45 + 180 * t ** 3;
        if (prev >= 0) tween(order[prev].el, { transform: fanT(prev) }, { duration: d * 0.9 });
        tween(order[i].el, { transform: fanT(i, 24) }, { duration: d * 0.9, easing: 'cubic-bezier(.3,.7,.3,1)' });
        sfx.tick();
        prev = i;
        await live(sleep(d));
        if (s < steps - 1) {
          if (i + dir < 0 || i + dir >= count) dir = -dir;
          i += dir;
        }
      }
      pick = prev;
      await live(sleep(160));
    }

    // Rút lá được chọn, lật mặt
    const chosen = order[pick];
    fillFace(chosen.face, food);
    chosen.el.classList.add('chosen');
    chosen.el.style.zIndex = 200;
    const others = order.filter(c => c !== chosen);
    const gone = Promise.all(others.map((c, k) => tween(c.el, { transform: T(0, 170, 0, 0.8), opacity: 0 }, {
      duration: 380, delay: k * 14, easing: 'cubic-bezier(.5,0,.75,0)',
    })));
    sfx.swish(0, 0.34, 0.17, 1200, 4200);
    await live(tween(chosen.el, { transform: T(0, -6, 0, 1.22) }, {
      duration: 540,
      easing: 'cubic-bezier(.2,.9,.3,1.12)',
      via: quick ? null : { transform: fanT(pick, 80).replace('scale(1)', 'scale(1.05)'), offset: 0.35 },
    }));
    stage.classList.add('lit');
    sfx.flip(quick ? 0 : 0.26);
    sfx.chime(quick ? 0.05 : 0.5);
    await live(flip(chosen.inner));
    await live(gone);
    others.forEach(c => c.el.remove());
    deck = [chosen];
  }

  // Người chơi tự rút: rê chuột / chạm / Tab / ← → để nhấc lá, bấm hoặc Enter để rút.
  function chooseCard(order, fanT) {
    const count = order.length;
    ui.phase = 'choosing';
    renderSpin();
    announce(`Đã xoè ${count} lá. Chọn một lá, hoặc dùng phím mũi tên rồi Enter.`);
    stage.classList.add('choosing');
    order.forEach((c, k) => {
      c.el.dataset.k = k;
      c.el.tabIndex = 0;
      c.el.setAttribute('role', 'button');
      c.el.setAttribute('aria-label', `Rút lá thứ ${k + 1}`);
    });

    let hi = -1;
    const lift = k => {
      if (k === hi) return;
      if (hi >= 0) tween(order[hi].el, { transform: fanT(hi) }, { duration: 160 });
      hi = k;
      tween(order[k].el, { transform: fanT(k, 26) }, { duration: 180, easing: 'cubic-bezier(.3,.7,.3,1)' });
      sfx.tick();
    };
    const indexOf = e => {
      const k = e.target.closest?.('.card')?.dataset.k;
      return k === undefined ? -1 : Number(k);
    };

    return new Promise((resolve, reject) => {
      const onOver = e => { const k = indexOf(e); if (k >= 0) lift(k); };
      const pickBy = k => {
        talk.edgePicked = count >= 5 && (k === 0 || k === count - 1);
        done(k);
      };
      const onClick = e => { const k = indexOf(e); if (k >= 0) pickBy(k); };
      const onKey = e => {
        if (ui.view !== 'spin' || e.ctrlKey || e.metaKey || e.altKey || document.querySelector('dialog[open]')) return;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          e.preventDefault();
          const d = e.key === 'ArrowLeft' ? -1 : 1;
          const k = hi < 0 ? (d > 0 ? 0 : count - 1) : (hi + d + count) % count;
          order[k].el.focus({ preventScroll: true });
          lift(k);
        } else if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest?.('button, input, a')) {
          e.preventDefault();
          pickBy(hi >= 0 ? hi : rand(count));
        }
      };
      stage.addEventListener('pointerover', onOver);
      stage.addEventListener('focusin', onOver);
      stage.addEventListener('click', onClick);
      document.addEventListener('keydown', onKey);
      ui.autoPick = () => {
        talk.autoPicked = true;
        done(rand(count));
      };
      ui.cancelChoose = () => { cleanup(); reject(CANCEL); };
      const slow = setTimeout(() => quip('slowPick'), 9000);

      function cleanup() {
        clearTimeout(slow);
        stage.removeEventListener('pointerover', onOver);
        stage.removeEventListener('focusin', onOver);
        stage.removeEventListener('click', onClick);
        document.removeEventListener('keydown', onKey);
        ui.autoPick = null;
        ui.cancelChoose = null;
        stage.classList.remove('choosing');
        order.forEach(c => ['tabindex', 'role', 'aria-label'].forEach(a => c.el.removeAttribute(a)));
      }
      function done(k) {
        cleanup();
        ui.phase = 'spinning';
        renderSpin();
        resolve(k);
      }
    });
  }

  async function spin() {
    if (busy()) return;
    let pool = spinPool();
    if (ui.rejected && pool.length > 1) pool = pool.filter(f => f.id !== ui.rejected);
    if (!pool.length) { renderSpin(); return; }

    const food = pool[rand(pool.length)];
    const size = Math.max(7, Math.min(12, pool.length));
    const run = ++spinRun;
    sfx.unlock();
    quipOnSpinStart();
    ui.phase = 'spinning';
    ui.current = null;
    renderSpin();
    announce('Đang xào bài…');
    try {
      await shuffleAndPick(food, size, run);
    } catch (err) {
      if (err === CANCEL) return;
      console.error(err);
    }
    if (run !== spinRun) return;
    ui.phase = 'revealed';
    ui.current = food;
    renderSpin();
    announce(`Rút được: ${food.name}. Bấm “Chốt món này” nếu ưng.`);
    if (navigator.userActivation?.hasBeenActive) navigator.vibrate?.(18);
    quipOnReveal(food, pool.length);
  }

  // Bỏ lượt đang xào / đang chọn / lá vừa lật, gom bài về bộ úp như lúc đầu
  function backToDeck() {
    if (ui.phase === 'idle') return;
    const was = ui.phase;
    const left = ui.current;
    spinRun++;
    ui.cancelChoose?.();
    sfx.stop();
    sfx.unlock();
    sfx.swish(0, 0.26, 0.14, 3000, 900);
    deck.forEach(c => c.el.getAnimations({ subtree: true }).forEach(a => a.cancel()));
    stage.classList.remove('lit', 'choosing');
    ui.phase = 'idle';
    ui.current = null;
    ui.rejected = null;
    resetDeck();
    renderSpin();
    announce('Đã về bộ bài.');
    hideQuip();
    if (was === 'revealed' && left) quip('backReveal', { name: left.name }, 0.8);
    else if (was === 'spinning' || was === 'choosing') quip('backMid', {}, 0.6);
  }

  function commit() {
    const food = ui.current;
    if (!food || ui.phase !== 'revealed') return;
    const mine = recentOf(ui.mode);
    const bumped = mine.length >= RECENT_MAX ? mine[RECENT_MAX - 1] : null;
    state.recent = trimRecent([{ id: uid(), foodId: food.id, name: food.name, cat: food.cat, mode: ui.mode, at: Date.now() }, ...state.recent]);
    ui.phase = 'committed';
    ui.rejected = null;
    save();
    stage.querySelector('.card.chosen .card-face')?.insertAdjacentHTML('beforeend', '<span class="stamp">ĐÃ CHỐT</span>');
    sfx.thump(0.05);
    quipOnCommit(food);
    renderAll();
    announce(`Đã chốt ${food.name}.`);
    toast(bumped ? `Chốt ${food.name}! ${nameOf(bumped)} được trả lại bộ bài.` : `Chốt ${food.name}! Chúc ngon miệng.`);
  }

  function setSpinFilter(filter) {
    if (busy() || filter === ui.spinFilter) return;
    ui.spinFilter = filter;
    ui.rejected = null;
    if (ui.phase !== 'idle') {
      ui.phase = 'idle';
      ui.current = null;
      resetDeck();
    }
    renderSpin();
    if (flipped(talk.filterFlips, 4)) quip('flipFilter');
  }

  function setVeg(on) {
    if (busy() || on === state.settings.vegOnly) return;
    state.settings.vegOnly = on;
    save();
    ui.rejected = null;
    if (ui.phase !== 'idle') {
      ui.phase = 'idle';
      ui.current = null;
      resetDeck();
    }
    renderSpin();
    const left = spinPool().length;
    announce(on ? `Chỉ món chay: ${left} lá trong bộ bài.` : `Tất cả món: ${left} lá trong bộ bài.`);
    hideQuip(); // câu cũ (vd. "đã bật chay") không còn đúng nữa
    if (flipped(talk.filterFlips, 4)) quip('flipFilter');
    else if (on && !left) quip('vegEmpty');
    else if (on) quip('vegOn', { n: left }, 0.75);
    else quip('vegOff', {}, 0.6);
  }

  function setMode(mode) {
    if (busy() || mode === ui.mode || !MODES[mode]) return;
    ui.mode = mode;
    ui.recentMode = mode;
    ui.rejected = null;
    if (ui.phase !== 'idle') {
      ui.phase = 'idle';
      ui.current = null;
      resetDeck();
    }
    renderSpin();
    renderRecent();
    announce(`Chế độ ${MODES[mode].label}: ${spinPool().length} lá trong bộ bài.`);
    if (flipped(talk.modeFlips, 3)) quip('flipMode');
  }

  // ---------- Màn Thực đơn ----------
  const form = $('#foodForm');
  const nameInput = $('#nameInput');
  const imgInput = $('#imgInput');
  const imgPreview = $('#imgPreview');

  $('#catSeg').innerHTML = Object.entries(CATS).map(([id, c], i) => `
    <label data-cat="${id}"><input type="radio" name="cat" value="${id}"${i === 0 ? ' checked' : ''}><span>${c.emoji} ${c.label}</span></label>`).join('');

  const setFormCat = cat => { form.elements.cat.value = cat; };
  const heartPick = $('#heartPick');
  heartPick.innerHTML = Array.from({ length: HEARTS_MAX }, (_, i) => `
    <label title="${i + 1} tim"><input type="radio" name="hearts" value="${i + 1}" aria-label="${i + 1} tim"><span aria-hidden="true">♥</span></label>`).join('');
  const setFormHearts = n => {
    form.elements.hearts.value = String(n);
    heartPick.dataset.v = n;
    heartPick.querySelectorAll('label').forEach((l, i) => l.classList.toggle('on', i < n));
  };
  heartPick.addEventListener('change', e => setFormHearts(Number(e.target.value)));
  setFormHearts(HEARTS_DEFAULT);
  const setFormVeg = on => { form.elements.veg.checked = on; };
  const setFormWhere = (out, cook) => {
    form.elements.out.checked = out;
    form.elements.cook.checked = cook;
  };

  function showPreview(src) {
    imgPreview.hidden = !src;
    if (src) imgPreview.src = src; else imgPreview.removeAttribute('src');
    $('#imgPick').classList.toggle('has-img', !!src);
    $('#clearImg').hidden = !src;
  }

  function resetForm() {
    ui.editingId = null;
    ui.pendingImg = undefined;
    nameInput.value = '';
    imgInput.value = '';
    showPreview(null);
    setFormWhere(true, false);
    setFormVeg(false);
    setFormHearts(HEARTS_DEFAULT);
    $('#formTitle').textContent = 'Thêm món';
    $('#submitBtn').textContent = 'Thêm vào thực đơn';
    $('#cancelEdit').hidden = true;
  }

  function startEdit(id) {
    const f = state.foods.find(x => x.id === id);
    if (!f) return;
    ui.editingId = id;
    ui.pendingImg = undefined;
    nameInput.value = f.name;
    setFormCat(f.cat);
    setFormWhere(f.out, f.cook);
    setFormVeg(f.veg);
    setFormHearts(f.hearts);
    showPreview(f.img);
    $('#formTitle').textContent = 'Sửa món';
    $('#submitBtn').textContent = 'Lưu thay đổi';
    $('#cancelEdit').hidden = false;
    renderMenu();
    // Màn rộng: form dính bên cạnh danh sách, không cần cuộn lên
    if (form.getBoundingClientRect().top < 0) window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    nameInput.focus({ preventScroll: true });
  }

  // Ảnh món chỉ hiện nhỏ trên lá bài (tối đa ~160px), 320px đủ nét cho màn 2x–3x.
  // maxKB: hạ dần chất lượng tới khi ảnh vừa cỡ này.
  const FOOD_IMG = { w: 320, h: 320, maxKB: 24 };
  const BACK_IMG = { w: 360, h: 500, maxKB: 40 };
  const QUALITIES = [0.82, 0.74, 0.66, 0.58];

  // WebP nhẹ hơn JPEG ~30%. Safari không xuất được WebP (âm thầm trả PNG) nên dùng JPEG.
  const IMG_TYPE = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 1;
    return c.toDataURL('image/webp').startsWith('data:image/webp') ? 'image/webp' : 'image/jpeg';
  })();

  function makeCanvas(w, h) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const ctx = c.getContext('2d');
    ctx.imageSmoothingQuality = 'high';
    return [c, ctx];
  }

  // Cắt ảnh ở giữa theo khổ w×h rồi nén, trả về data URL
  async function fileToImage(file, { w, h, maxKB }) {
    const url = URL.createObjectURL(file);
    try {
      const img = await new Promise((resolve, reject) => {
        const i = new Image();
        i.onload = () => resolve(i);
        i.onerror = reject;
        i.src = url;
      });
      const iw = img.naturalWidth, ih = img.naturalHeight;
      const sw = Math.min(iw, ih * w / h), sh = sw * h / w;
      // Thu nhỏ từng nửa một để ảnh nét, không răng cưa (Safari bỏ qua imageSmoothingQuality).
      // Bước đầu tối đa 2048px để không vượt giới hạn canvas của iPhone với ảnh 48MP.
      let cw = w, ch = h;
      while (cw * 2 <= sw && cw * 2 <= 2048) { cw *= 2; ch *= 2; }
      let [canvas, ctx] = makeCanvas(cw, ch);
      ctx.fillStyle = '#FFF8EC'; // ảnh PNG trong suốt không bị nền đen khi ra JPEG
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, (iw - sw) / 2, (ih - sh) / 2, sw, sh, 0, 0, cw, ch);
      while (cw > w) {
        cw /= 2;
        ch /= 2;
        const [next, nctx] = makeCanvas(cw, ch);
        nctx.drawImage(canvas, 0, 0, cw, ch);
        canvas = next;
      }
      let out;
      for (const q of QUALITIES) {
        out = canvas.toDataURL(IMG_TYPE, q);
        if (out.length * 0.75 <= maxKB * 1024) break; // base64 → số byte thật
      }
      return out;
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  async function readImage(file, spec) {
    if (!file) return null;
    if (!file.type.startsWith('image/')) { toast('File này không phải ảnh.'); return null; }
    try {
      return await fileToImage(file, spec);
    } catch {
      toast('Không đọc được ảnh này, thử ảnh JPG hoặc PNG nhé.');
      return null;
    }
  }

  async function takeImage(file) {
    const img = await readImage(file, FOOD_IMG);
    if (!img) return;
    ui.pendingImg = img;
    showPreview(img);
  }

  function dropZone(el, onFile) {
    el.addEventListener('dragover', e => { e.preventDefault(); el.classList.add('drag'); });
    el.addEventListener('dragleave', () => el.classList.remove('drag'));
    el.addEventListener('drop', e => {
      e.preventDefault();
      el.classList.remove('drag');
      onFile(e.dataTransfer.files[0]);
    });
  }

  function renderMenu() {
    const counts = { all: state.foods.length, main: 0, snack: 0, drink: 0 };
    state.foods.forEach(f => { counts[f.cat]++; });
    $('#menuChips').innerHTML = chipsHTML(ui.menuFilter, counts);
    $('#menuCount').textContent = state.foods.length ? `${state.foods.length} món` : '';

    const rest = { out: restingIds('out'), cook: restingIds('cook') };
    const items = state.foods.filter(f => inFilter(f, ui.menuFilter));
    const toggle = (f, mode) => `
      <button type="button" class="where-tog" data-act="tog-${mode}" aria-pressed="${f[mode]}" title="${f[mode] ? 'Bỏ' : 'Thêm vào'} bộ bài ${MODES[mode].label.toLowerCase()}">${MODES[mode].emoji} ${mode === 'out' ? 'Ngoài' : 'Nấu'}</button>`;
    const vegTog = f => `
      <button type="button" class="where-tog veg-tog" data-act="tog-veg" aria-pressed="${!!f.veg}" title="${f.veg ? 'Bỏ nhãn' : 'Đánh dấu'} món chay">🥬 Chay</button>`;
    const rate = f => `
      <span class="rate" role="group" aria-label="Số tim của ${esc(f.name)}">${Array.from({ length: HEARTS_MAX }, (_, i) => `<button type="button" class="${i < f.hearts ? 'on' : ''}" data-act="rate" data-n="${i + 1}" aria-label="${i + 1} tim" aria-pressed="${i + 1 === f.hearts}">♥</button>`).join('')}</span>`;
    const restNote = f => {
      const where = ['out', 'cook'].filter(m => rest[m].has(f.id));
      if (!where.length) return '';
      return `<span class="resting">Đang nghỉ${where.length === 2 ? '' : ` · ${where[0] === 'out' ? 'ăn ngoài' : 'nấu'}`}</span>`;
    };
    const row = f => `
      <li class="food${ui.editingId === f.id ? ' editing' : ''}" data-id="${f.id}">
        ${thumbHTML(f)}
        <div class="food-main">
          <div class="food-name">${esc(f.name)}</div>
          <div class="food-meta">
            <span class="tag" data-cat="${f.cat}">${CATS[f.cat].label}</span>
            ${rate(f)}
            ${toggle(f, 'out')}${toggle(f, 'cook')}${vegTog(f)}
            ${restNote(f)}
          </div>
        </div>
        <button type="button" class="icon-btn" data-act="edit" aria-label="Sửa ${esc(f.name)}" title="Sửa">${ICONS.edit}</button>
        <button type="button" class="icon-btn danger" data-act="del" aria-label="Xoá ${esc(f.name)}" title="Xoá">${ICONS.trash}</button>
      </li>`;

    // Nhóm theo: bỏ lựa chọn "Loại món" khi đang lọc một loại (vd. tab Nước thì mọi món đều là nước)
    const choices = MENU_GROUPS.filter(([id]) => id !== 'cat' || ui.menuFilter === 'all');
    const group = choices.some(([id]) => id === state.settings.menuGroup) ? state.settings.menuGroup : 'none';
    renderGroupPicker(choices, group);

    const groups = menuGroups(items, group);
    $('#foodList').innerHTML = !items.length
      ? '<li class="empty-note">Chưa có món nào ở mục này.</li>'
      : groups
        ? groups.filter(g => g.items.length).map(g => `
          <li class="group-head"${g.cat ? ` data-cat="${g.cat}"` : ''}><span>${g.label}</span><small>${g.items.length}</small></li>
          ${g.items.map(row).join('')}`).join('')
        : items.map(row).join('');
  }

  // ---- Dropdown "Nhóm theo": nút kiểu chip + danh sách thả xuống (mẫu listbox, dùng được bằng bàn phím)
  const groupBtn = $('#groupBtn');
  const groupList = $('#groupList');

  function renderGroupPicker(choices, group) {
    const [, label, emoji] = MENU_GROUPS.find(([id]) => id === group);
    groupBtn.innerHTML = `<span class="dropdown-key">Nhóm theo</span><span aria-hidden="true">${emoji}</span>${label}${ICONS.chevron}`;
    groupBtn.setAttribute('aria-label', `Nhóm theo: ${label}`);
    groupList.innerHTML = choices.map(([id, text, icon]) => `
      <li role="option" id="group-${id}" data-group="${id}" aria-selected="${id === group}" tabindex="-1">
        <span class="dropdown-emoji" aria-hidden="true">${icon}</span><span class="dropdown-text">${text}</span>${id === group ? ICONS.check : ''}
      </li>`).join('');
  }

  const groupOptions = () => [...groupList.querySelectorAll('[role=option]')];

  function openGroups() {
    groupList.hidden = false;
    groupBtn.setAttribute('aria-expanded', 'true');
    (groupList.querySelector('[aria-selected=true]') ?? groupOptions()[0])?.focus();
    document.addEventListener('pointerdown', outsideGroups, true);
  }

  function closeGroups(refocus = false) {
    if (groupList.hidden) return;
    groupList.hidden = true;
    groupBtn.setAttribute('aria-expanded', 'false');
    document.removeEventListener('pointerdown', outsideGroups, true);
    if (refocus) groupBtn.focus();
  }

  function outsideGroups(e) {
    if (!$('#groupPicker').contains(e.target)) closeGroups();
  }

  function pickGroup(id) {
    closeGroups(true);
    if (id === state.settings.menuGroup) return;
    state.settings.menuGroup = id;
    save();
    renderMenu();
  }

  // Chia món thành các nhóm có tiêu đề; "none" thì trả về null (danh sách phẳng)
  function menuGroups(items, by) {
    if (by === 'cat') {
      return Object.entries(CATS).map(([id, c]) => ({ label: `${c.emoji} ${c.label}`, cat: id, items: items.filter(f => f.cat === id) }));
    }
    if (by === 'veg') {
      return [
        { label: '🥬 Món chay', items: items.filter(f => f.veg) },
        { label: '🍖 Món mặn', items: items.filter(f => !f.veg) },
      ];
    }
    if (by === 'where') {
      return [
        { label: '🛵 Chỉ ăn ngoài', items: items.filter(f => f.out && !f.cook) },
        { label: '🍳 Chỉ nấu ăn', items: items.filter(f => f.cook && !f.out) },
        { label: '🛵🍳 Cả hai', items: items.filter(f => f.out && f.cook) },
      ];
    }
    return null;
  }

  function toggleWhere(id, mode) {
    const f = state.foods.find(x => x.id === id);
    if (!f) return;
    const other = mode === 'out' ? 'cook' : 'out';
    if (f[mode] && !f[other]) {
      toast('Mỗi món cần ít nhất một: Ăn ngoài hoặc Nấu ăn.');
      return;
    }
    state.foods = state.foods.map(x => x.id === id ? { ...x, [mode]: !x[mode] } : x);
    if (ui.editingId === id) form.elements[mode].checked = !f[mode];
    save();
    renderAll();
  }

  function toggleVeg(id) {
    const f = state.foods.find(x => x.id === id);
    if (!f) return;
    state.foods = state.foods.map(x => x.id === id ? { ...x, veg: !x.veg } : x);
    if (ui.editingId === id) setFormVeg(!f.veg);
    save();
    renderAll();
    quipOnVegEdit(f.name, !f.veg);
  }

  function rateFood(id, n) {
    const f = state.foods.find(x => x.id === id);
    if (!f || f.hearts === n) return;
    state.foods = state.foods.map(x => x.id === id ? { ...x, hearts: n } : x);
    if (ui.editingId === id) setFormHearts(n);
    save();
    renderMenu();
    announce(`${f.name}: ${n}/${HEARTS_MAX} tim`);
  }

  function removeFood(id) {
    const idx = state.foods.findIndex(f => f.id === id);
    if (idx < 0) return;
    const food = state.foods[idx];
    state.foods = state.foods.filter(f => f.id !== id);
    if (ui.editingId === id) resetForm();
    save();
    renderAll();
    toast(`Đã xoá ${food.name}`, {
      label: 'Hoàn tác',
      run: () => {
        state.foods = [...state.foods.slice(0, idx), food, ...state.foods.slice(idx)];
        save();
        renderAll();
      },
    });
  }

  // ---------- Màn Gần đây: hai danh sách ăn ngoài / nấu ăn ----------
  function recentColHTML(mode) {
    const list = recentOf(mode);
    const rows = list.map((r, i) => {
      const view = foodOf(r) ?? { name: r.name, cat: r.cat, img: null, emoji: null };
      return `
        <li class="recent" data-id="${r.id}">
          <span class="rank">${i + 1}</span>
          ${thumbHTML(view)}
          <div class="food-main">
            <div class="food-name">${esc(view.name)}</div>
            <div class="food-meta">
              <span class="tag" data-cat="${view.cat}">${CATS[view.cat]?.label ?? ''}</span>
              <span class="when">${when(r.at)}</span>
            </div>
          </div>
          <button type="button" class="icon-btn danger" data-act="remove" aria-label="Bỏ ${esc(view.name)} khỏi danh sách" title="Bỏ khỏi danh sách">${ICONS.x}</button>
        </li>`;
    });
    for (let i = list.length; i < RECENT_MAX; i++) {
      rows.push(`<li class="slot"><span class="rank">${i + 1}</span><span>Ô trống</span></li>`);
    }
    const meter = Array.from({ length: RECENT_MAX }, (_, i) => `<i class="${i < list.length ? 'on' : ''}"></i>`).join('');
    const m = MODES[mode];
    return `
      <section class="recent-col${ui.recentMode === mode ? ' active' : ''}" data-mode="${mode}" aria-label="${m.label}">
        <div class="col-head">
          <h3><span aria-hidden="true">${m.emoji}</span> ${m.label}</h3>
          <span class="meter">${meter}<b>${list.length}/${RECENT_MAX}</b></span>
        </div>
        <ol class="recent-list">${rows.join('')}</ol>
        ${list.length ? `<button type="button" class="btn ghost small clear-recent" data-act="clear">Xoá lịch sử ${m.label.toLowerCase()}</button>` : ''}
      </section>`;
  }

  function renderRecent() {
    for (const r of $('#recentSeg').querySelectorAll('input')) {
      r.checked = r.value === ui.recentMode;
      r.nextElementSibling.querySelector('small').textContent = recentOf(r.value).length;
    }
    $('#recentCols').innerHTML = recentColHTML('out') + recentColHTML('cook');
  }

  function removeRecent(id) {
    const idx = state.recent.findIndex(r => r.id === id);
    if (idx < 0) return;
    const entry = state.recent[idx];
    state.recent = state.recent.filter(r => r.id !== id);
    save();
    renderAll();
    toast(`${nameOf(entry)} đã quay lại bộ bài ${MODES[entry.mode].label.toLowerCase()}`, {
      label: 'Hoàn tác',
      run: () => {
        state.recent = trimRecent([...state.recent.slice(0, idx), entry, ...state.recent.slice(idx)]);
        save();
        renderAll();
      },
    });
  }

  function clearRecent(mode) {
    const before = state.recent;
    state.recent = state.recent.filter(r => r.mode !== mode);
    save();
    renderAll();
    toast(`Đã xoá lịch sử ${MODES[mode].label.toLowerCase()}, các món quay lại bộ bài`, {
      label: 'Hoàn tác',
      run: () => { state.recent = before; save(); renderAll(); },
    });
  }

  // ---------- Xem bộ bài trước khi xào ----------
  const deckDialog = $('#deckDialog');

  function openPeek() {
    talk.peeks++;
    const inCat = deckFoods();
    const rest = restingIds();
    const pool = inCat.filter(f => !rest.has(f.id));
    const resting = inCat.filter(f => rest.has(f.id));
    const mini = (f, cls = '') => `<div class="card-face mini-face${cls}" data-cat="${f.cat}">${faceHTML(f)}</div>`;
    $('#deckTitle').textContent = [`Bộ bài ${MODES[ui.mode].label.toLowerCase()}`, state.settings.vegOnly ? 'Chay' : '', ui.spinFilter === 'all' ? '' : CATS[ui.spinFilter].label].filter(Boolean).join(' · ');
    $('#deckSub').innerHTML = pool.length
      ? `<b>${pool.length}</b> lá có thể rút trúng${resting.length ? ` · ${resting.length} lá đang nghỉ` : ''}`
      : 'Chưa có lá nào để xào.';
    $('#deckGrid').innerHTML = pool.length ? pool.map(f => mini(f)).join('') : `<p class="empty-note">Tick “${MODES[ui.mode].label}” cho món trong Thực đơn, hoặc bỏ bớt ở mục Gần đây.</p>`;
    $('#restWrap').hidden = !resting.length;
    $('#restGrid').innerHTML = resting.map(f => mini(f, ' is-resting')).join('');
    $('#peekSpin').disabled = !pool.length || busy();
    deckDialog.showModal();
    deckDialog.querySelector('.sheet-body').scrollTop = 0;
  }

  // ---------- Màn Custom bộ bài ----------
  const root = document.documentElement;

  // ---- Màu: tiện ích nhỏ
  const hexToRgb = hex => { const n = parseInt(hex.slice(1), 16); return [n >> 16, (n >> 8) & 255, n & 255]; };
  const rgbTriple = hex => hexToRgb(hex).join(' ');
  const tripleHex = t => `#${t.split(' ').map(n => Number(n).toString(16).padStart(2, '0')).join('')}`.toUpperCase();
  function luminance(hex) {
    const lin = v => (v /= 255) <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    const [r, g, b] = hexToRgb(hex).map(lin);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  const contrast = (a, b) => {
    const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (hi + 0.05) / (lo + 0.05);
  };
  // Hai màu "khó phân biệt": vừa gần độ sáng, vừa gần sắc màu (khác màu hẳn thì mắt vẫn thấy dù cùng độ sáng)
  const tooClose = (a, b) => {
    const [x, y] = [hexToRgb(a), hexToRgb(b)];
    return contrast(a, b) < 1.35 && Math.hypot(x[0] - y[0], x[1] - y[1], x[2] - y[2]) < 90;
  };
  function hexToHsl(hex) {
    const [r, g, b] = hexToRgb(hex).map(v => v / 255);
    const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, d = max - min;
    if (!d) return [0, 0, l];
    const sat = d / (1 - Math.abs(2 * l - 1));
    const h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    return [(h * 60 + 360) % 360, sat, l];
  }
  function hslToHex(h, sat, l) {
    const c = (1 - Math.abs(2 * l - 1)) * sat, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c / 2;
    const [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
    return `#${[r, g, b].map(v => Math.round((v + m) * 255).toString(16).padStart(2, '0')).join('')}`.toUpperCase();
  }
  // "#abc", "abc123", "#ABC123" → "#ABC123"; sai định dạng thì trả về null
  function parseHex(text) {
    let v = text.trim().replace(/^#/, '');
    if (/^[0-9a-f]{3}$/i.test(v)) v = v.replace(/./g, ch => ch + ch);
    return /^[0-9a-f]{6}$/i.test(v) ? `#${v.toUpperCase()}` : null;
  }
  const isLight = hex => luminance(hex) > 0.38;

  // Màu nền thật của lưng bài ("Không màu" = giấy trơn) và màu vân thật đang hiển thị
  const backBase = () => (state.settings.back.color === 'none' ? PAPER : state.settings.back.color);
  // Màu vân "Tự động": vàng kem trên nền tối, nâu đậm trên nền sáng
  const autoHatch = () => (isLight(backBase()) ? '70 38 10' : '255 214 130');
  const patHex = () => {
    const c = state.settings.back.patColor;
    return c === 'auto' ? tripleHex(autoHatch()) : c === 'none' ? null : c;
  };

  // 3 màu vân gợi ý tính từ màu bộ bài: cùng tông lệch nhẹ, cùng tông lệch mạnh, đối màu.
  // Nền sáng thì lệch về tối, nền tối thì lệch về sáng; nền xám/trắng/đen giữ nguyên độ xám.
  function patSuggestions() {
    const [h, s0, l] = hexToHsl(backBase());
    const gray = s0 < 0.06;
    const sat = gray ? 0 : Math.min(s0, 0.9);
    const light = l > 0.55;
    return [
      { value: hslToHex(h, sat, light ? l - 0.18 : l + 0.22), label: 'Gợi ý: cùng tông, nhẹ' },
      { value: hslToHex(h, sat, light ? Math.max(l - 0.45, 0.08) : Math.min(l + 0.5, 0.95)), label: 'Gợi ý: cùng tông, đậm' },
      { value: hslToHex((h + 180) % 360, gray ? 0.55 : Math.max(s0, 0.55), light ? 0.32 : 0.72), label: 'Gợi ý: tương phản' },
    ];
  }

  function rememberColor(hex) {
    const presets = [...BACK_COLORS, ...PAT_COLORS].map(([c]) => c.toLowerCase());
    if (presets.includes(hex.toLowerCase())) return;
    const list = state.settings.recentColors.filter(c => c.toLowerCase() !== hex.toLowerCase());
    state.settings.recentColors = [hex, ...list].slice(0, RECENT_COLORS);
  }
  const recentItems = () => state.settings.recentColors.map(c => ({ value: c, label: 'Màu đã dùng' }));

  function applyBack() {
    const b = state.settings.back;
    const base = backBase();
    const light = isLight(base);
    root.style.setProperty('--back', base);
    root.style.setProperty('--back-tint', b.color === 'none' ? '0%' : '24%'); // "Không màu": ảnh giữ nguyên màu gốc
    root.style.setProperty('--back-ink', light ? '58 32 14' : '255 243 220');
    root.style.setProperty('--back-hatch', b.patColor === 'auto' || b.patColor === 'none' ? autoHatch() : rgbTriple(b.patColor));
    root.style.setProperty('--pat-a', b.patColor === 'none' ? '0' : String(b.patAlpha));
    root.dataset.backPat = b.pattern;
    root.style.setProperty('--back-img', b.img ? `url("${b.img}")` : 'none');
    root.dataset.backFx = b.effect;
  }

  function setBack(patch, persist = true) {
    Object.assign(state.settings.back, patch);
    applyBack();
    renderDeck();
    if (persist) save();
  }

  // Bảng màu: các ô màu (có thể có ô đặc biệt "auto"/"none" và vạch ngăn nhóm) + ô chọn màu tuỳ ý + ô mã hex.
  // `items()` được gọi mỗi lần vẽ nên danh sách có thể đổi (gợi ý theo màu bộ bài, màu đã dùng).
  // Ô chọn màu tuỳ ý không bao giờ bị gỡ khỏi DOM, để bảng chọn màu của trình duyệt không tự đóng khi đang kéo.
  function colorPicker({ box, name, items, hexInput, nameEl, onPick }) {
    const input = document.createElement('input');
    input.type = 'color';
    input.setAttribute('aria-label', 'Chọn màu khác');
    const custom = document.createElement('label');
    custom.className = 'swatch custom';
    custom.title = 'Chọn màu khác';
    custom.append(input);
    box.append(custom);
    let sig = '';
    let list = [];

    function render(value, fallbackHex) {
      list = items();
      const nextSig = JSON.stringify(list);
      if (nextSig !== sig) {
        sig = nextSig;
        [...box.children].forEach(el => { if (el !== custom) el.remove(); });
        custom.insertAdjacentHTML('beforebegin', list.map(it => it.sep
          ? '<span class="swatch-sep" aria-hidden="true"></span>'
          : `<label class="swatch${it.cls ? ` ${it.cls}` : ''}" style="--sw:${it.sw ?? it.value}" title="${it.label}"><input type="radio" name="${name}" value="${it.value}" aria-label="${it.label}"></label>`).join(''));
      }
      const v = value.toLowerCase();
      let hit = null;
      for (const r of box.querySelectorAll('input[type=radio]')) {
        r.checked = r.value.toLowerCase() === v;
        if (r.checked) hit = list.find(it => it.value?.toLowerCase() === v);
      }
      custom.classList.toggle('on', !hit);
      if (v.startsWith('#')) custom.style.setProperty('--sw', value);
      input.value = (v.startsWith('#') ? v : fallbackHex ?? '#000000').toLowerCase();
      nameEl.textContent = hit ? hit.label : 'Màu riêng';
      if (document.activeElement !== hexInput) {
        hexInput.value = v.startsWith('#') ? value.toUpperCase() : '';
        hexInput.placeholder = fallbackHex ? fallbackHex.toUpperCase() : '—';
      }
    }

    box.addEventListener('change', e => {
      if (e.target.name === name) onPick(e.target.value, true);
    });
    input.addEventListener('input', () => onPick(input.value.toUpperCase(), false));
    input.addEventListener('change', () => { rememberColor(input.value.toUpperCase()); onPick(input.value.toUpperCase(), true); });
    hexInput.addEventListener('change', () => {
      const hex = parseHex(hexInput.value);
      if (!hex) {
        toast('Mã màu chưa đúng, thử dạng #D8452A nhé.');
        hexInput.value = '';
        renderDeck();
        return;
      }
      rememberColor(hex);
      onPick(hex, true);
    });
    hexInput.addEventListener('keydown', e => { if (e.key === 'Enter') hexInput.blur(); });
    return { render };
  }

  const backPicker = colorPicker({
    box: $('#swatches'),
    name: 'backColor',
    hexInput: $('#backHex'),
    nameEl: $('#backColorName'),
    items: () => [
      { value: 'none', label: 'Không màu', cls: 'none', sw: PAPER },
      { value: '#FFFFFF', label: 'Trắng' },
      { sep: true },
      ...BACK_COLORS.map(([value, label]) => ({ value, label })),
      ...(state.settings.recentColors.length ? [{ sep: true }, ...recentItems()] : []),
    ],
    onPick: (color, persist) => setBack({ color }, persist),
  });

  const patPicker = colorPicker({
    box: $('#patSwatches'),
    name: 'patColor',
    hexInput: $('#patHex'),
    nameEl: $('#patColorName'),
    items: () => {
      const fixed = PAT_COLORS.map(([value, label]) => ({ value, label }));
      const taken = new Set(fixed.map(it => it.value.toLowerCase()));
      const sugg = patSuggestions().filter(it => !taken.has(it.value.toLowerCase()) && taken.add(it.value.toLowerCase()));
      const recent = recentItems().filter(it => !taken.has(it.value.toLowerCase()));
      return [
        { value: 'auto', label: 'Auto (theo màu bộ bài)', cls: 'auto', sw: tripleHex(autoHatch()) },
        { value: 'none', label: 'Không màu', cls: 'none', sw: '#FFFFFF' },
        ...fixed,
        { sep: true },
        ...sugg.map(it => ({ ...it, cls: 'sugg' })),
        ...(recent.length ? [{ sep: true }, ...recent] : []),
      ];
    },
    onPick: (patColor, persist) => setBack({ patColor }, persist),
  });

  const patAlpha = $('#patAlpha');
  $('#patGrid').innerHTML = PATTERNS.map(([id, label]) => `
    <label class="pat-tile"><input type="radio" name="backPat" value="${id}"><span class="pat-swatch" data-pat="${id}" aria-hidden="true"></span><small>${label}</small></label>`).join('');
  $('#fxPills').innerHTML = EFFECTS.map(([id, label]) => `
    <label><input type="radio" name="backFx" value="${id}"><span>${label}</span></label>`).join('');

  function renderDeck() {
    const b = state.settings.back;
    backPicker.render(b.color, PAPER);
    patPicker.render(b.patColor, patHex() ?? tripleHex(autoHatch()));
    // Vân gần trùng màu nền thì khó thấy: nhắc và gợi ý cách sửa
    const shown = patHex();
    const weak = b.pattern !== 'none' && shown && (tooClose(shown, backBase()) || b.patAlpha < 0.12);
    $('#patWarn').hidden = !weak;
    patAlpha.disabled = b.patColor === 'none';
    for (const r of $('#patGrid').querySelectorAll('input')) r.checked = r.value === b.pattern;
    patAlpha.value = Math.round(b.patAlpha * 100);
    $('#patAlphaOut').textContent = `${patAlpha.value}%`;
    $('#patColorSet').disabled = b.pattern === 'none';
    for (const r of $('#fxPills').querySelectorAll('input')) r.checked = r.value === b.effect;
    $('#quipToggle').checked = state.settings.quips;
    $('#personaSet').disabled = !state.settings.quips;
    $('#personaSample').disabled = !state.settings.quips;
    $('#talkPanel').classList.toggle('off', !state.settings.quips);
    for (const r of $('#personaPills').querySelectorAll('input')) r.checked = r.value === state.settings.persona;
    const img = $('#backImgPreview');
    img.hidden = !b.img;
    if (b.img) img.src = b.img; else img.removeAttribute('src');
    $('#backPick').classList.toggle('has-img', !!b.img);
    $('#clearBackImg').hidden = !b.img;
  }

  function renderAll() {
    renderTabs();
    renderSpin();
    renderMenu();
    renderRecent();
    renderDeck();
  }

  // ---------- Sự kiện ----------
  $('#tabs').addEventListener('click', e => {
    const view = e.target.closest('[data-view]')?.dataset.view;
    if (view) setView(view);
  });

  $('#whereSeg').addEventListener('change', e => setMode(e.target.value));
  $('#vegBtn').addEventListener('click', () => setVeg(!state.settings.vegOnly));

  $('#spinChips').addEventListener('click', e => {
    const filter = e.target.closest('[data-filter]')?.dataset.filter;
    if (filter) setSpinFilter(filter);
  });

  groupBtn.addEventListener('click', () => (groupList.hidden ? openGroups() : closeGroups()));
  groupBtn.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      openGroups();
    }
  });
  groupList.addEventListener('click', e => {
    const id = e.target.closest('[data-group]')?.dataset.group;
    if (id) pickGroup(id);
  });
  groupList.addEventListener('keydown', e => {
    const opts = groupOptions();
    const i = opts.indexOf(document.activeElement);
    const go = k => { e.preventDefault(); opts[(k + opts.length) % opts.length].focus(); };
    if (e.key === 'ArrowDown') go(i + 1);
    else if (e.key === 'ArrowUp') go(i - 1);
    else if (e.key === 'Home') go(0);
    else if (e.key === 'End') go(opts.length - 1);
    else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (i >= 0) pickGroup(opts[i].dataset.group);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeGroups(true);
    } else if (e.key === 'Tab') closeGroups();
  });

  $('#menuChips').addEventListener('click', e => {
    const filter = e.target.closest('[data-filter]')?.dataset.filter;
    if (!filter) return;
    ui.menuFilter = filter;
    renderMenu();
  });

  stage.addEventListener('click', () => {
    if (ui.phase === 'idle' && spinPool().length) spin();
  });

  $('#actions').addEventListener('click', e => {
    const act = e.target.closest('[data-act]')?.dataset.act;
    if (act === 'spin') spin();
    else if (act === 'commit') commit();
    else if (act === 'redraw') {
      const rejected = ui.current;
      ui.rejected = rejected?.id ?? null;
      const fast = Date.now() - talk.revealAt < 1500;
      spin();
      if (rejected?.hearts === 5) quip('rejectFive', { name: rejected.name }, 0.8);
      else if (fast) quip('redrawFast', {}, 0.8);
    }
    else if (act === 'autopick') ui.autoPick?.();
    else if (act === 'goto-add') {
      setView('menu');
      if (!ui.editingId) {
        if (ui.spinFilter !== 'all') setFormCat(ui.spinFilter);
        setFormWhere(ui.mode === 'out', ui.mode === 'cook');
        setFormVeg(state.settings.vegOnly);
      }
      nameInput.focus();
    } else if (act === 'goto-recent') {
      ui.recentMode = ui.mode;
      renderRecent();
      setView('recent');
    }
  });

  document.addEventListener('keydown', e => {
    if (ui.view !== 'spin' || e.ctrlKey || e.metaKey || e.altKey) return;
    if (document.querySelector('dialog[open]')) return;
    if (e.key === 'Escape' && ui.phase !== 'idle') { backToDeck(); return; }
    if (ui.phase === 'choosing') return;
    if (e.target.closest('input, textarea, button, select, a')) return;
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      $('#actions .btn:not([disabled])')?.click();
    }
  });

  imgInput.addEventListener('change', () => takeImage(imgInput.files[0]));
  dropZone($('#imgPick'), takeImage);
  $('#clearImg').addEventListener('click', () => {
    ui.pendingImg = null;
    imgInput.value = '';
    showPreview(null);
  });
  $('#cancelEdit').addEventListener('click', () => { resetForm(); renderMenu(); });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = nameInput.value.trim().replace(/\s+/g, ' ');
    if (!name) { nameInput.focus(); return; }
    const cat = form.elements.cat.value;
    const out = form.elements.out.checked;
    const cook = form.elements.cook.checked;
    const veg = form.elements.veg.checked;
    const hearts = Number(form.elements.hearts.value) || HEARTS_DEFAULT;
    if (!out && !cook) {
      toast('Chọn ít nhất một: Ăn ngoài hoặc Nấu ăn.');
      form.elements.out.focus();
      return;
    }
    const key = name.toLocaleLowerCase('vi');
    if (state.foods.some(f => f.id !== ui.editingId && f.name.toLocaleLowerCase('vi') === key)) {
      toast(`“${name}” đã có trong thực đơn rồi.`);
      nameInput.select();
      return;
    }
    const before = ui.editingId ? state.foods.find(f => f.id === ui.editingId) : null;
    const vegChanged = before ? !!before.veg !== veg : veg;
    if (ui.editingId) {
      state.foods = state.foods.map(f => f.id !== ui.editingId ? f : {
        ...f, name, cat, out, cook, veg, hearts, img: ui.pendingImg === undefined ? f.img : ui.pendingImg,
      });
      toast(`Đã lưu ${name}`);
    } else {
      state.foods = [{ id: uid(), name, cat, emoji: null, img: ui.pendingImg ?? null, at: Date.now(), out, cook, veg, hearts }, ...state.foods];
      toast(`Đã thêm ${name} vào thực đơn`);
    }
    if (vegChanged) quipOnVegEdit(name, veg);
    resetForm();
    setFormCat(cat);
    setFormWhere(out, cook); // thêm liên tiếp nhiều món cùng kiểu cho nhanh
    setFormVeg(veg);
    save();
    askPersist();
    renderAll();
    nameInput.focus();
  });

  $('#foodList').addEventListener('click', e => {
    const btn = e.target.closest('[data-act]');
    const id = btn?.closest('[data-id]')?.dataset.id;
    if (!id) return;
    if (btn.dataset.act === 'edit') startEdit(id);
    else if (btn.dataset.act === 'del') removeFood(id);
    else if (btn.dataset.act === 'tog-out') toggleWhere(id, 'out');
    else if (btn.dataset.act === 'tog-cook') toggleWhere(id, 'cook');
    else if (btn.dataset.act === 'tog-veg') toggleVeg(id);
    else if (btn.dataset.act === 'rate') rateFood(id, Number(btn.dataset.n));
  });

  $('#recentCols').addEventListener('click', e => {
    const btn = e.target.closest('[data-act]');
    if (!btn) return;
    if (btn.dataset.act === 'remove') {
      const id = btn.closest('[data-id]')?.dataset.id;
      if (id) removeRecent(id);
    } else if (btn.dataset.act === 'clear') {
      clearRecent(btn.closest('[data-mode]').dataset.mode);
    }
  });
  $('#recentSeg').addEventListener('change', e => {
    ui.recentMode = e.target.value;
    renderRecent();
  });

  quipEl.addEventListener('click', hideQuip);
  $('#quipToggle').addEventListener('change', e => {
    state.settings.quips = e.target.checked;
    if (!state.settings.quips) hideQuip();
    save();
    renderDeck();
  });

  // Tính cách: đổi xong cho nghe thử một câu
  $('#personaPills').innerHTML = PERSONAS.map(([id, emoji, label]) => `
    <label><input type="radio" name="persona" value="${id}"><span>${emoji} ${label}</span></label>`).join('');
  function samplePersona() {
    const set = QUIPS[state.settings.persona] ?? QUIPS.sassy;
    const keys = ['streak5', 'twice', 'five', 'commitGeneric', 'slowPick'].filter(k => set[k]?.length);
    const lines = set[keys[rand(keys.length)]];
    const line = lines[rand(lines.length)].replace(/\{name\}/g, 'Phở bò').replace(/\{n\}/g, '5');
    const el = $('#personaSample');
    el.textContent = line;
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  }
  $('#personaSample').addEventListener('click', samplePersona);
  $('#personaPills').addEventListener('change', e => {
    state.settings.persona = e.target.value;
    save();
    samplePersona();
  });

  for (const type of ['touchend', 'click', 'keydown']) {
    document.addEventListener(type, () => sfx.wake(), { capture: true, passive: true });
  }

  // Về bộ bài & âm thanh
  $('#backBtn').innerHTML = `${ICONS.back}<span>Về bộ bài</span>`;
  $('#backBtn').addEventListener('click', backToDeck);
  $('#soundBtn').addEventListener('click', () => {
    state.settings.sound = !state.settings.sound;
    save();
    if (state.settings.sound) { sfx.unlock(); sfx.tick(); } else { sfx.mute(); quip('muted', {}, 0.8); }
    renderSpin();
  });

  // Xem bộ bài & cách rút
  $('#peekBtn').innerHTML = `${ICONS.eye}<span>Xem bộ bài</span>`;
  $('#peekBtn').addEventListener('click', openPeek);
  $('#modeSeg').addEventListener('change', e => {
    state.settings.drawMode = e.target.value === 'manual' ? 'manual' : 'auto';
    save();
    renderSpin();
  });
  // Đóng hộp xem bộ bài; mở xem 3, 6, 9… lần mà chưa xào thì bộ bài lên tiếng
  function afterPeekClosed() {
    if (busy() || talk.peeks < 3 || talk.peeks % 3 || talk.peekTold === talk.peeks) return;
    talk.peekTold = talk.peeks;
    quip('peek', { n: talk.peeks });
  }
  const closePeek = () => { deckDialog.close(); afterPeekClosed(); };
  deckDialog.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', closePeek));
  deckDialog.querySelector('.icon-btn[data-close]').innerHTML = ICONS.x;
  deckDialog.addEventListener('click', e => { if (e.target === deckDialog) closePeek(); });
  deckDialog.addEventListener('close', afterPeekClosed); // phím Esc
  $('#peekSpin').addEventListener('click', () => { deckDialog.close(); spin(); });

  // Custom bộ bài
  $('#patGrid').addEventListener('change', e => setBack({ pattern: e.target.value }));
  patAlpha.addEventListener('input', () => setBack({ patAlpha: patAlpha.value / 100 }, false));
  patAlpha.addEventListener('change', () => setBack({ patAlpha: patAlpha.value / 100 }));
  $('#fxPills').addEventListener('change', e => setBack({ effect: e.target.value }));

  const takeBackImage = async file => {
    const img = await readImage(file, BACK_IMG);
    if (img) setBack({ img });
  };
  const backImgInput = $('#backImgInput');
  backImgInput.addEventListener('change', () => { takeBackImage(backImgInput.files[0]); backImgInput.value = ''; });
  dropZone($('#backPick'), takeBackImage);
  $('#clearBackImg').addEventListener('click', () => setBack({ img: null }));

  $('#resetBack').addEventListener('click', () => {
    const before = { ...state.settings.back };
    setBack({ ...DEFAULT_BACK });
    toast('Đã trả lưng bài về mặc định', { label: 'Hoàn tác', run: () => setBack(before) });
  });

  // Nghiêng lá xem trước theo chuột
  const preview = $('#backPreview');
  preview.addEventListener('pointermove', e => {
    if (e.pointerType === 'touch' || reduceMotion.matches) return;
    const r = preview.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    preview.style.setProperty('--rx', `${(-y * 20).toFixed(1)}deg`);
    preview.style.setProperty('--ry', `${(x * 24).toFixed(1)}deg`);
  });
  preview.addEventListener('pointerleave', () => {
    preview.style.removeProperty('--rx');
    preview.style.removeProperty('--ry');
  });

  // ---------- Sao lưu & giữ dữ liệu ----------
  // Xin trình duyệt đừng tự dọn dữ liệu khi máy thiếu chỗ. Chrome tự quyết không hỏi,
  // Firefox hiện hộp hỏi, nên chỉ xin khi người dùng vừa lưu hoặc sao lưu gì đó.
  let persistAsked = false;
  async function askPersist() {
    if (persistAsked || !navigator.storage?.persist) return;
    persistAsked = true;
    try { if (!(await navigator.storage.persisted())) await navigator.storage.persist(); } catch { /* bỏ qua */ }
    updateStorageNote();
  }

  const fmtSize = n => n < 1048576
    ? `${Math.max(1, Math.round(n / 1024))} KB`
    : `${(n / 1048576).toFixed(1).replace('.', ',')} MB`;

  async function updateStorageNote() {
    if (!navigator.storage?.estimate) return;
    try {
      const [{ usage = 0 }, kept] = await Promise.all([navigator.storage.estimate(), navigator.storage.persisted?.() ?? false]);
      $('#storageNote').textContent = `Đang dùng ${fmtSize(usage)} trên máy. ` + (kept
        ? 'Trình duyệt sẽ không tự dọn dữ liệu này khi máy thiếu chỗ.'
        : 'Trình duyệt có thể tự dọn dữ liệu khi máy thiếu chỗ, nhớ sao lưu thường xuyên.');
    } catch { /* bỏ qua */ }
  }

  async function exportData() {
    askPersist();
    const data = { app: 'meal-maybe', v: 1, exportedAt: new Date().toISOString(), foods: state.foods, recent: state.recent, settings: state.settings };
    const date = new Date().toLocaleDateString('sv'); // YYYY-MM-DD theo giờ máy
    const file = new File([JSON.stringify(data)], `meal-maybe-${date}.json`, { type: 'application/json' });
    const done = () => toast(`Đã sao lưu ${state.foods.length} món`);
    // Điện thoại (nhất là app đã cài trên iPhone) tải file kém: mở bảng chia sẻ để lưu vào Tệp, Drive, Zalo...
    if (matchMedia('(pointer: coarse)').matches && navigator.canShare?.({ files: [file] })) {
      try { await navigator.share({ files: [file], title: 'Sao lưu Meal Maybe' }); done(); return; }
      catch (e) { if (e.name === 'AbortError') return; } // lỗi khác thì tải file như thường
    }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = file.name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    done();
  }

  async function importData(file) {
    if (!file) return;
    let data = null;
    try { data = JSON.parse(await file.text()); } catch { /* không phải JSON */ }
    if (data?.app !== 'meal-maybe' || !Array.isArray(data.foods)) {
      toast('File này không phải bản sao lưu Meal Maybe.');
      return;
    }
    if (!confirm(`Khôi phục sẽ thay toàn bộ dữ liệu trên máy này (${state.foods.length} món) bằng bản sao lưu (${data.foods.length} món). Tiếp tục?`)) return;
    applyData(data);
    save();
    await saveChain;
    // Tải lại trang cho mọi màn (bộ bài, lịch sử, lưng bài) dựng lại từ dữ liệu mới
    try { sessionStorage.setItem('meal-maybe:restored', String(state.foods.length)); } catch { /* bỏ qua */ }
    location.href = `${location.pathname}?view=menu`;
  }

  $('#exportBtn').addEventListener('click', exportData);
  const importInput = $('#importInput');
  importInput.addEventListener('change', () => {
    importData(importInput.files[0]);
    importInput.value = ''; // chọn lại cùng file vẫn chạy
  });

  // ---------- Khởi động ----------
  async function boot() {
    $('#tagline').textContent = TAGLINES[rand(TAGLINES.length)];
    await load();
    applyBack();
    samplePersona();
    buildDeck(IDLE_DECK);

    // Liên kết từ app shortcut: ?spin=main|snack|drink|all, ?view=menu|recent|add
    const params = new URLSearchParams(location.search);
    const spinParam = params.get('spin');
    if (params.get('mode') === 'cook') ui.mode = ui.recentMode = 'cook';
    const viewParam = params.get('view');
    let autoSpin = false;
    if (spinParam && (spinParam === 'all' || CATS[spinParam])) {
      ui.spinFilter = spinParam;
      autoSpin = true;
    } else if (viewParam === 'menu' || viewParam === 'recent' || viewParam === 'deck') {
      ui.view = viewParam;
    } else if (viewParam === 'add') {
      ui.view = 'menu';
    }
    if (params.toString()) history.replaceState(null, '', location.pathname + location.hash);

    setView(ui.view);
    renderAll();
    if (viewParam === 'add') nameInput.focus();
    updateStorageNote();
    try {
      const restored = sessionStorage.getItem('meal-maybe:restored');
      if (restored) {
        sessionStorage.removeItem('meal-maybe:restored');
        toast(`Đã khôi phục ${restored} món từ bản sao lưu`);
      }
    } catch { /* bỏ qua */ }

    if (ui.view === 'spin') {
      await dealIn();
      if (autoSpin) spin();
    }

    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  }

  boot();
})();
