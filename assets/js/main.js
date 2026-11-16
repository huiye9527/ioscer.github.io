(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const nav = document.querySelector(".nav-island");
  const menuBtn = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-drawer");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("menu-open", open);
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });
  }

  if (nav) {
    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-q");
    const panel = item.querySelector(".faq-panel");
    if (!btn || !panel) return;

    // Prefer CSS grid collapse animation over instant [hidden]
    panel.hidden = false;
    panel.setAttribute("aria-hidden", "true");

    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".faq-item").forEach((other) => {
        if (other === item) return;
        const ob = other.querySelector(".faq-q");
        const op = other.querySelector(".faq-panel");
        if (!ob || !op) return;
        ob.setAttribute("aria-expanded", "false");
        other.classList.remove("is-open");
        op.setAttribute("aria-hidden", "true");
      });

      if (expanded) {
        btn.setAttribute("aria-expanded", "false");
        item.classList.remove("is-open");
        panel.setAttribute("aria-hidden", "true");
      } else {
        btn.setAttribute("aria-expanded", "true");
        item.classList.add("is-open");
        panel.setAttribute("aria-hidden", "false");
      }
    });
  });

  if (!reduceMotion) {
    const reveals = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // QQ 收藏接口：价格写在 data.summary.brief
  // --------------------------------------------------------------------------
  // 一眼能懂写法。每组 4 个数顺序：基础,标准,加强,稳定
  //
  // iPhone:99,199,299,399;iPad:109,209,309,409;
  // 普通代理.iPhone:80,160,240,320;高级代理.iPhone:70,145,220,295;核心代理.iPhone:60,130,200,270;
  // 普通代理.iPad:90,170,250,330;高级代理.iPad:80,155,230,305;核心代理.iPad:70,140,210,280
  //
  //   iPhone / iPad           → 个人价
  //   普通代理.iPhone / .iPad → 普通代理价
  //   高级代理.iPhone / .iPad → 高级代理价
  //   核心代理.iPhone / .iPad → 核心代理价
  //
  // 点号或横线都行：普通代理.iPhone = 普通代理-iPhone；也可用换行代替分号
  // --------------------------------------------------------------------------
  const PRICE_API =
    "https://api.ahfi.cn/api/qqcollection?url=https://sharechain.qq.com/cdff8e8d729eb70e11f09e3a4a3974ec";

  const PLAN_KEYS = ["basic", "standard", "plus", "stable"];

  const normalizeAliasKey = (raw) =>
    String(raw || "")
      .trim()
      .replace(/[．。]/g, ".")
      .replace(/[－—–_/\s]+/g, "-")
      .replace(/\.+/g, ".")
      .toUpperCase();

  const BRIEF_ALIAS = {};
  const addBriefAlias = (keys, path) => {
    keys.forEach((key) => {
      BRIEF_ALIAS[normalizeAliasKey(key)] = path;
    });
  };

  addBriefAlias(["iPhone", "个人.iPhone", "个人-iPhone"], ["personal", "iphone"]);
  addBriefAlias(["iPad", "个人.iPad", "个人-iPad"], ["personal", "ipad"]);

  addBriefAlias(["普通代理.iPhone", "普通代理-iPhone"], ["agent", "iphone", "normal"]);
  addBriefAlias(["高级代理.iPhone", "高级代理-iPhone"], ["agent", "iphone", "pro"]);
  addBriefAlias(["核心代理.iPhone", "核心代理-iPhone"], ["agent", "iphone", "core"]);

  addBriefAlias(["普通代理.iPad", "普通代理-iPad"], ["agent", "ipad", "normal"]);
  addBriefAlias(["高级代理.iPad", "高级代理-iPad"], ["agent", "ipad", "pro"]);
  addBriefAlias(["核心代理.iPad", "核心代理-iPad"], ["agent", "ipad", "core"]);

  const formatPrice = (value) => {
    const num = Number(value);
    if (!Number.isFinite(num)) return null;
    return `¥${num % 1 === 0 ? num : num.toFixed(2)}`;
  };

  const setNested = (root, path, value) => {
    let node = root;
    path.forEach((key, idx) => {
      if (idx === path.length - 1) {
        node[key] = value;
        return;
      }
      if (!node[key] || typeof node[key] !== "object") node[key] = {};
      node = node[key];
    });
  };

  const numsToPlanMap = (nums) => {
    const map = {};
    PLAN_KEYS.forEach((k, i) => {
      if (nums[i] != null && Number.isFinite(Number(nums[i]))) map[k] = Number(nums[i]);
    });
    return Object.keys(map).length ? map : null;
  };

  const isFlatPlanMap = (node) =>
    node &&
    typeof node === "object" &&
    !Array.isArray(node) &&
    PLAN_KEYS.some((k) => node[k] != null);

  const ingestAliasValue = (root, alias, value) => {
    const path = BRIEF_ALIAS[normalizeAliasKey(alias)];
    if (!path) return;
    let map = null;
    if (Array.isArray(value)) map = numsToPlanMap(value);
    else if (isFlatPlanMap(value)) map = value;
    if (!map) return;
    setNested(root, path, map);
  };

  const parseBriefPrices = (brief) => {
    if (!brief || typeof brief !== "string") return null;
    const text = brief.trim();
    if (!text) return null;

    if (text.startsWith("{")) {
      try {
        const json = JSON.parse(text);
        if (json.personal || json.agent) return json;
        const fromAlias = {};
        Object.keys(json).forEach((alias) => {
          ingestAliasValue(fromAlias, alias, json[alias]);
        });
        return Object.keys(fromAlias).length ? fromAlias : null;
      } catch (_) {
        /* fall through */
      }
    }

    const result = {};
    text.split(/[;\n]+/).forEach((chunk) => {
      const part = chunk.trim();
      if (!part) return;
      const colon = part.indexOf(":");
      if (colon < 0) return;
      const alias = part.slice(0, colon).trim();
      const nums = part
        .slice(colon + 1)
        .split(/[,|/]/)
        .map((n) => Number(String(n).trim()))
        .filter((n) => Number.isFinite(n));
      if (!nums.length) return;
      ingestAliasValue(result, alias, nums);
    });

    return Object.keys(result).length ? result : null;
  };

  const resolvePriceMap = (payload, group, device) => {
    if (!payload || typeof payload !== "object") return null;
    const groupNode = group ? payload[group] : null;
    if (groupNode && typeof groupNode === "object") {
      if (device && groupNode[device] != null) return groupNode[device];
      if (groupNode.basic != null || groupNode.standard != null) return groupNode;
    }
    return null;
  };

  const applyPlanRows = (scope, map) => {
    if (!scope || !map) return;
    scope.querySelectorAll("[data-plan]").forEach((row) => {
      const key = row.getAttribute("data-plan");
      const el = row.matches(".price-value") ? row : row.querySelector(".price-value");
      if (!el || !key) return;
      const text = formatPrice(map[key]);
      if (!text) return;
      el.textContent = text;
      el.classList.remove("is-loading");
    });
  };

  const applyGroupPrices = (grid, map) => {
    if (!grid || !map) return;
    const levelCards = grid.querySelectorAll("[data-agent-level]");
    if (levelCards.length) {
      levelCards.forEach((card) => {
        const level = card.getAttribute("data-agent-level");
        const levelMap = (level && map[level]) || map.normal || map.pro || map.core || map;
        applyPlanRows(card, levelMap);
      });
      return;
    }
    applyPlanRows(grid, map);
  };

  const applyPrices = (payload) => {
    document.querySelectorAll("[data-price-group]").forEach((grid) => {
      const group = grid.getAttribute("data-price-group");
      const device = grid.getAttribute("data-price-device");
      applyGroupPrices(grid, resolvePriceMap(payload, group, device));
    });
  };

  const loadPrices = async () => {
    if (!PRICE_API) return;
    try {
      const res = await fetch(PRICE_API, { headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (json.code !== 200) throw new Error(json.message || "bad code");
      const brief = json?.data?.summary?.brief;
      const map = parseBriefPrices(brief);
      if (!map) throw new Error("brief empty or invalid");
      applyPrices(map);
    } catch (err) {
      console.warn("[pricing] failed to load prices", err);
    }
  };

  document.querySelectorAll("[data-device-switch]").forEach((switcher) => {
    const scope = switcher.getAttribute("data-device-switch");
    const tabs = switcher.querySelectorAll(".device-tab");
    const panels = document.querySelectorAll(`[data-device-panel="${scope}"]`);

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const device = tab.getAttribute("data-device");
        tabs.forEach((t) => {
          const on = t === tab;
          t.classList.toggle("is-active", on);
          t.setAttribute("aria-selected", String(on));
        });
        panels.forEach((panel) => {
          const on = panel.getAttribute("data-device") === device;
          panel.hidden = !on;
          panel.classList.toggle("is-active", on);
        });
      });
    });
  });

  loadPrices();
})();
