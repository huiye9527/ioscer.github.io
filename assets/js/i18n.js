(() => {
  const STORAGE_KEY = "ioscer_lang";
  const CN_TZ = /^(Asia\/(Shanghai|Chongqing|Harbin|Urumqi|Kashgar))$/;

  const dict = {
    zh: {
      "meta.title": "iOSCER · P12个人证书+描述文件 | IPA安装测试/内测签名",
      "meta.description":
        "iOSCER 提供 P12 个人证书与配套描述文件，权限完整，专用于 IPA 安装测试与 APP 内测开发签名。适配轻松签、全能签、万能签、GBOX、魔力签、爱思助手等。iPhone/iPad 分档质保，透明价格。",
      "meta.ogTitle": "iOSCER · P12个人证书与描述文件，适配主流签名工具",
      "meta.ogDescription":
        "证书+描述文件套装，权限完整。用于 IPA 测试安装与内测签名，支持轻松签、全能签、万能签、GBOX、魔力签、爱思助手等。",

      "skip": "跳到主要内容",
      "nav.label": "主导航",
      "nav.home": "iOSCER 首页",
      "nav.pricing": "价格",
      "nav.agent": "代理",
      "nav.api": "API",
      "nav.faq": "常见问题",
      "nav.contact": "前往登录",
      "nav.menu": "打开菜单",
      "nav.drawer": "站点菜单",
      "nav.agentJoin": "加入代理",
      "nav.agentPricing": "代理价格",
      "nav.apiFull": "API 对接",
      "lang.label": "语言",
      "lang.zh": "中",
      "lang.en": "EN",

      "hero.visual": "iOSCER P12 个人证书与描述文件服务",
      "hero.title": "P12 个人证书 + <em>描述文件</em>，专为 IPA 测试签名",
      "hero.lead": "权限完整，适配轻松签、全能签、万能签、GBOX、魔力签、爱思助手等。用于 APP 内测与安装测试。",
      "hero.ctaPrice": "查看价格",
      "hero.ctaWhy": "为什么选我们",

      "trust.label": "核心卖点",
      "trust.fast": "P12 套装",
      "trust.fastDesc": "证书 + 配套描述文件",
      "trust.stable": "权限完整",
      "trust.stableDesc": "满足 IPA 安装与内测签名",
      "trust.global": "工具适配",
      "trust.globalDesc": "轻松签 / 全能签 / 爱思等",
      "trust.support": "分档质保",
      "trust.supportDesc": "无售后到 330 天可选",

      "tools.label": "兼容签名工具",
      "tools.title": "市面主流签名工具都能用",
      "tools.desc": "交付 P12 个人证书与配套描述文件，导入轻松签、全能签、万能签、GBOX、魔力签、爱思助手等即可签名安装。",

      "pricing.title": "个人证书价格",
      "pricing.desc": "iPhone / iPad 分开计价。每台含 P12 个人证书 + 描述文件，按质保时长分四档。",
      "pricing.deviceLabel": "设备类型",
      "pricing.note": "按设备 /台计价 · 含证书与描述文件 · 以下单页实时价格为准。",
      "plan.basic": "基础版",
      "plan.standard": "标准版",
      "plan.plus": "加强版",
      "plan.stable": "稳定版",
      "plan.rec": "推荐",
      "plan.hot": "主推",
      "plan.per": "/台",
      "plan.w0.iphone": "无售后",
      "plan.w40.iphone": "质保 40 天",
      "plan.w180.iphone": "质保 180 天",
      "plan.w330.iphone": "质保 330 天",
      "plan.w0.ipad": "无售后",
      "plan.w40.ipad": "质保 40 天",
      "plan.w180.ipad": "质保 180 天",
      "plan.w330.ipad": "质保 330 天",
      "plan.basic.desc.iphone": "适合一次性 IPA 安装测试，自行承担风险。",
      "plan.standard.desc.iphone": "短周期内测常用档，质保期内协助处理掉签。",
      "plan.plus.desc.iphone": "中长期内测与开发签名，稳定与售后更均衡。",
      "plan.stable.desc.iphone": "长周期测试分发场景，超长质保更省心。",
      "plan.basic.desc.ipad": "适合 iPad 端一次性 IPA 安装测试。",
      "plan.standard.desc.ipad": "iPad 短周期内测常用，含质保协助。",
      "plan.plus.desc.ipad": "iPad 中长期内测开发签名主力档。",
      "plan.stable.desc.ipad": "iPad 长周期测试与持续安装场景。",
      "plan.li.cert.iphone": "iPhone P12 个人证书",
      "plan.li.cert.ipad": "iPad P12 个人证书",
      "plan.li.profile": "配套描述文件一并交付",
      "plan.li.full": "权限完整，可签 IPA 安装",
      "plan.li.tools": "适配轻松签/全能签/爱思等",
      "plan.li.guide": "导入与签名说明",
      "plan.li.nosupport": "不含掉签售后",
      "plan.li.warranty": "质保期内掉签协助",
      "plan.li.channel": "标准售后通道",
      "plan.li.priority": "优先响应支持",
      "plan.li.long": "超长质保周期",
      "plan.pick.basic": "选择基础版",
      "plan.pick.standard": "选择标准版",
      "plan.pick.plus": "选择加强版",
      "plan.pick.stable": "选择稳定版",

      "agent.title": "加入代理，享受专属代理价",
      "agent.desc": "面向站长、工具方与分销团队。开通后直接享受代理专属价，采购 iPhone/iPad P12 + 描述文件套装。",
      "agent.apply": "邮件申请代理",
      "agent.viewPrice": "查看代理价格",
      "agent.wechat": "咨询代理请加微信 byersan，备注来意",
      "agent.perk1": "专属代理价",
      "agent.perk1d": "开通后按代理价下单，价差空间更清晰。",
      "agent.perk2": "工具场景好卖",
      "agent.perk2d": "对轻松签、全能签、爱思等用户群体转化直接。",
      "agent.perk3": "三档可选",
      "agent.perk3d": "普通 / 高级 / 核心，按合作深度灵活选档。",
      "agent.mail": "申请成为iOSCER代理",

      "agentPrice.title": "代理价格",
      "agentPrice.desc": "普通、高级、核心三档代理。每档下列出基础 / 标准 / 加强 / 稳定代理价，按 iPhone / iPad 分开。",
      "agentPrice.deviceLabel": "代理设备类型",
      "agentPrice.note": "列表为各证书档位代理价 · /台 · 含证书与描述文件 · 普通/高级/核心各自独立计价。",
      "agentPrice.normal": "普通代理",
      "agentPrice.pro": "高级代理",
      "agentPrice.core": "核心代理",
      "agentPrice.normal.desc": "入门合作档，开通后享受代理专属价。",
      "agentPrice.pro.desc": "主力合作档，代理价 + 优先支持。",
      "agentPrice.core.desc": "深度合作档，代理价 + 专属对接通道。",
      "agentPrice.buy": "申请代理价",

      "api.title": "支持 API 对接",
      "api.desc": "把查价、下单接到你的签名站、面板或脚本，方便批量出证给测试与内测客户。",
      "api.p1": "实时查价",
      "api.p1d": "个人/代理 × iPhone/iPad 价格可程序化读取。",
      "api.p2": "业务可嵌入",
      "api.p2d": "对接签名工具站、后台或机器人，减少人工录单。",
      "api.p3": "专属开通",
      "api.p3d": "提供字段约定与对接说明，按你的场景落地。",
      "api.apply": "申请对接",
      "api.ask": "先咨询场景",
      "api.panel": "接口返回示例",
      "api.note": "示例结构。正式字段与鉴权方式开通后提供。",
      "api.mail": "申请API对接",
      "api.message": "请求成功",

      "adv.title": "证书套装，直接用于签名安装",
      "adv.desc": "不是只给一个文件。P12 个人证书 + 配套描述文件，权限完整，主流签名工具可直接导入。",
      "adv.img": "P12 证书与描述文件签名示意",
      "adv.a1": "证书 + 描述文件成套",
      "adv.a1d": "交付 P12 与配套描述文件，减少自行配对成本。",
      "adv.a2": "适配市面主流工具",
      "adv.a2d": "轻松签、全能签、万能签、GBOX、魔力签、爱思助手等均可使用。",
      "adv.a3": "专为测试与内测",
      "adv.a3d": "用于 IPA 安装测试、APP 内测开发签名，流程清晰可预期。",

      "process.title": "四步开始签名测试",
      "process.desc": "注册、选档、下单到导入工具，步骤短、节点明确。",
      "process.s1": "注册站点",
      "process.s1d": "在本站完成账号注册，进入购买流程。",
      "process.s2": "选择质保类型",
      "process.s2d": "按 iPhone/iPad 与质保时长选择对应档位。",
      "process.s3": "付款下单",
      "process.s3d": "确认价格并完成支付，领取 P12 证书 + 描述文件。",
      "process.s4": "安装签名工具使用",
      "process.s4d": "导入轻松签/全能签/爱思等，开始 IPA 安装测试。",

      "faq.title": "常见问题",
      "faq.desc": "关于证书套装、工具适配与质保。",
      "faq.q1": "买到的是什么？只有证书吗？",
      "faq.a1": "是 P12 个人证书 + 配套描述文件套装，权限完整，用于 IPA 安装测试与 APP 内测开发签名。",
      "faq.q2": "能用在哪些签名工具？",
      "faq.a2": "适配市面常见工具，包括轻松签、全能签、万能签、GBOX、魔力签、爱思助手等。导入证书与描述文件后即可签名安装。",
      "faq.q3": "四个版本有什么区别？",
      "faq.a3": "交付内容同为证书+描述文件套装，区别在质保：基础版无售后；标准版40天；加强版180天；稳定版330天。iPhone 与 iPad 分开计价。",
      "faq.q4": "掉签了怎么办？",
      "faq.a4": "标准版、加强版、稳定版在质保期内按规则协助处理。基础版无售后，掉签需自行重新购买。",
      "faq.q5": "如何加入代理？",
      "faq.a5": "咨询代理请添加微信 byersan，备注来意；也可发邮件至 9054376@qq.com。开通后可选普通 / 高级 / 核心代理，按代理价采购基础至稳定四档套装。",
      "faq.q6": "是否支持 API 对接？",
      "faq.a6": "支持。可将查价与业务对接到签名站、后台或脚本。申请对接后提供字段约定。",

      "contact.title": "准备做 IPA 测试签名了吗",
      "contact.desc": "前往证书站注册登录下单；代理合作请加微信 byersan（备注来意），或发邮件联系。",
      "contact.cta": "前往登录",
      "contact.mail": "邮件咨询",
      "contact.site": "证书站 Super Sign",
      "contact.wechat": "微信 byersan（备注来意）",

      "footer.blurb": "P12 个人证书 + 描述文件，专为 IPA 安装测试与 APP 内测签名，适配主流签名工具。",
      "footer.nav": "导航",
      "footer.contact": "联系",
      "footer.site": "Super Sign",
      "footer.wechat": "微信 byersan",
      "footer.seo": "SEO / 收录",
      "footer.legal": "Apple 为 Apple Inc. 商标。本站为第三方证书服务介绍页。",
    },
    en: {
      "meta.title": "iOSCER · P12 Personal Cert + Profile for IPA Test Signing",
      "meta.description":
        "iOSCER delivers P12 personal certificates with matching provisioning profiles and full entitlements for IPA install testing and app beta signing. Works with ESign, NuSign, GBOX, i4Tools and more.",
      "meta.ogTitle": "iOSCER · P12 + Profile packs for mainstream signing tools",
      "meta.ogDescription":
        "Certificate + profile packs with full entitlements for IPA testing and beta signing. Compatible with popular signing apps.",

      "skip": "Skip to content",
      "nav.label": "Primary",
      "nav.home": "iOSCER home",
      "nav.pricing": "Pricing",
      "nav.agent": "Reseller",
      "nav.api": "API",
      "nav.faq": "FAQ",
      "nav.contact": "Go to login",
      "nav.menu": "Open menu",
      "nav.drawer": "Site menu",
      "nav.agentJoin": "Join as reseller",
      "nav.agentPricing": "Reseller pricing",
      "nav.apiFull": "API integration",
      "lang.label": "Language",
      "lang.zh": "中",
      "lang.en": "EN",

      "hero.visual": "iOSCER P12 certificate and provisioning profile service",
      "hero.title": "P12 cert + <em>profile</em> for IPA test signing",
      "hero.lead": "Full entitlements. Works with ESign, NuSign, GBOX, MagicSign, i4Tools and more for beta installs.",
      "hero.ctaPrice": "View pricing",
      "hero.ctaWhy": "Why us",

      "trust.label": "Highlights",
      "trust.fast": "P12 pack",
      "trust.fastDesc": "Certificate + matching profile",
      "trust.stable": "Full entitlements",
      "trust.stableDesc": "Ready for IPA install tests",
      "trust.global": "Tool ready",
      "trust.globalDesc": "ESign / NuSign / i4Tools…",
      "trust.support": "Warranty tiers",
      "trust.supportDesc": "From none to 330 days",

      "tools.label": "Compatible tools",
      "tools.title": "Works with mainstream signing apps",
      "tools.desc": "Import the P12 and profile into ESign, NuSign, WanNengQian, GBOX, MagicSign, i4Tools and similar tools to sign and install.",

      "pricing.title": "Personal certificate pricing",
      "pricing.desc": "iPhone / iPad priced separately. Each device includes P12 + profile across four warranty tiers.",
      "pricing.deviceLabel": "Device",
      "pricing.note": "Priced per device · includes cert + profile · live page price wins.",
      "plan.basic": "Basic",
      "plan.standard": "Standard",
      "plan.plus": "Plus",
      "plan.stable": "Stable",
      "plan.rec": "Recommended",
      "plan.hot": "Popular",
      "plan.per": "/device",
      "plan.w0.iphone": "No warranty",
      "plan.w40.iphone": "40-day warranty",
      "plan.w180.iphone": "180-day warranty",
      "plan.w330.iphone": "330-day warranty",
      "plan.w0.ipad": "No warranty",
      "plan.w40.ipad": "40-day warranty",
      "plan.w180.ipad": "180-day warranty",
      "plan.w330.ipad": "330-day warranty",
      "plan.basic.desc.iphone": "One-off IPA install tests when you accept the risk.",
      "plan.standard.desc.iphone": "Short beta cycles with warranty-period help.",
      "plan.plus.desc.iphone": "Mid-term beta and dev signing with balanced support.",
      "plan.stable.desc.iphone": "Longer test distribution with extended cover.",
      "plan.basic.desc.ipad": "One-off iPad IPA install tests.",
      "plan.standard.desc.ipad": "Short iPad beta cycles with warranty help.",
      "plan.plus.desc.ipad": "Mid-term iPad beta and signing.",
      "plan.stable.desc.ipad": "Long iPad test and install cycles.",
      "plan.li.cert.iphone": "iPhone P12 personal certificate",
      "plan.li.cert.ipad": "iPad P12 personal certificate",
      "plan.li.profile": "Matching provisioning profile included",
      "plan.li.full": "Full entitlements for IPA installs",
      "plan.li.tools": "Works with ESign / NuSign / i4Tools…",
      "plan.li.guide": "Import and signing guide",
      "plan.li.nosupport": "No revoke after-sales",
      "plan.li.warranty": "Revoke help within warranty",
      "plan.li.channel": "Standard support channel",
      "plan.li.priority": "Priority response",
      "plan.li.long": "Extended warranty window",
      "plan.pick.basic": "Choose Basic",
      "plan.pick.standard": "Choose Standard",
      "plan.pick.plus": "Choose Plus",
      "plan.pick.stable": "Choose Stable",

      "agent.title": "Become a reseller and unlock agent pricing",
      "agent.desc": "For site owners and distributors. After approval, buy iPhone/iPad P12 + profile packs at exclusive agent rates.",
      "agent.apply": "Email to apply",
      "agent.viewPrice": "View agent prices",
      "agent.wechat": "For reseller inquiries, WeChat byersan — add a note about your intent",
      "agent.perk1": "Exclusive agent price",
      "agent.perk1d": "Order at agent rates with clearer margin.",
      "agent.perk2": "Easy to sell into tools",
      "agent.perk2d": "Direct fit for ESign, NuSign, i4Tools users.",
      "agent.perk3": "Three tiers",
      "agent.perk3d": "Normal / Pro / Core — pick by partnership depth.",
      "agent.mail": "Apply as iOSCER reseller",

      "agentPrice.title": "Agent pricing",
      "agentPrice.desc": "Normal, Pro, and Core agent tiers. Each lists Basic / Standard / Plus / Stable agent prices by iPhone / iPad.",
      "agentPrice.deviceLabel": "Agent device",
      "agentPrice.note": "Agent prices per certificate tier · per device · Normal / Pro / Core priced independently.",
      "agentPrice.normal": "Normal Agent",
      "agentPrice.pro": "Pro Agent",
      "agentPrice.core": "Core Agent",
      "agentPrice.normal.desc": "Entry partnership with exclusive agent pricing.",
      "agentPrice.pro.desc": "Primary partnership with agent pricing and priority support.",
      "agentPrice.core.desc": "Deep partnership with agent pricing and a dedicated channel.",
      "agentPrice.buy": "Request agent price",

      "api.title": "API integration supported",
      "api.desc": "Connect pricing and ordering into your signing site, panel, or scripts for test and beta customers.",
      "api.p1": "Live pricing",
      "api.p1d": "Read personal / reseller × iPhone / iPad prices programmatically.",
      "api.p2": "Embeddable workflows",
      "api.p2d": "Embed into signing sites, backends, or bots to cut manual entry.",
      "api.p3": "Guided onboarding",
      "api.p3d": "Field contracts and setup matched to your scenario.",
      "api.apply": "Request API access",
      "api.ask": "Discuss your use case",
      "api.panel": "Sample API response",
      "api.note": "Sample only. Auth and final fields are provided after approval.",
      "api.mail": "Request API integration",
      "api.message": "OK",

      "adv.title": "Packs ready for signing installs",
      "adv.desc": "Not just one file. P12 personal cert + matching profile with full entitlements for mainstream tools.",
      "adv.img": "P12 certificate and profile signing visual",
      "adv.a1": "Cert + profile together",
      "adv.a1d": "P12 and matching profile reduce pairing friction.",
      "adv.a2": "Mainstream tool ready",
      "adv.a2d": "Use with ESign, NuSign, WanNengQian, GBOX, MagicSign, i4Tools and more.",
      "adv.a3": "Built for test and beta",
      "adv.a3d": "IPA install testing and app beta signing with a clear path.",

      "process.title": "Start signing tests in four steps",
      "process.desc": "Register, pick a warranty, pay, then import into your signing tool.",
      "process.s1": "Register on the site",
      "process.s1d": "Create an account and enter the purchase flow.",
      "process.s2": "Choose warranty type",
      "process.s2d": "Pick iPhone/iPad and the warranty tier you need.",
      "process.s3": "Pay and place order",
      "process.s3d": "Confirm the price, pay, and receive P12 + profile.",
      "process.s4": "Install a signing tool and use",
      "process.s4d": "Import into ESign/NuSign/i4Tools and start IPA tests.",

      "faq.title": "FAQ",
      "faq.desc": "About packs, tool compatibility, and warranty.",
      "faq.q1": "What exactly do I get?",
      "faq.a1": "A P12 personal certificate plus matching provisioning profile with full entitlements for IPA install testing and app beta signing.",
      "faq.q2": "Which signing tools are supported?",
      "faq.a2": "Common tools such as ESign, NuSign, WanNengQian, GBOX, MagicSign, and i4Tools. Import cert + profile, then sign and install.",
      "faq.q3": "How do the four tiers differ?",
      "faq.a3": "Same pack contents. Warranty differs: Basic none; Standard 40 days; Plus 180 days; Stable 330 days. iPhone and iPad are priced separately.",
      "faq.q4": "What if it gets revoked?",
      "faq.a4": "Standard, Plus, and Stable get help within warranty. Basic has no after-sales; repurchase if revoked.",
      "faq.q5": "How do I become a reseller?",
      "faq.a5": "Add WeChat byersan with a note about your intent, or email 9054376@qq.com. After approval, choose Normal / Pro / Core and buy Basic to Stable packs at agent rates.",
      "faq.q6": "Do you support API integration?",
      "faq.a6": "Yes. Connect pricing and workflows to signing sites, backends, or scripts. Request access for field contracts.",

      "contact.title": "Ready for IPA test signing?",
      "contact.desc": "Register and log in on the certificate site to order. For reseller deals, WeChat byersan (add intent note) or email us.",
      "contact.cta": "Go to login",
      "contact.mail": "Email us",
      "contact.site": "Certificate site Super Sign",
      "contact.wechat": "WeChat byersan (add intent note)",

      "footer.blurb": "P12 personal certificates + profiles for IPA install testing and app beta signing across mainstream tools.",
      "footer.nav": "Navigate",
      "footer.contact": "Contact",
      "footer.site": "Super Sign",
      "footer.wechat": "WeChat byersan",
      "footer.seo": "SEO / Indexing",
      "footer.legal": "Apple is a trademark of Apple Inc. This site is a third-party certificate service page.",
    },
  };

  const detectLang = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "zh" || saved === "en") return saved;

    const langs = [...(navigator.languages || []), navigator.language || ""]
      .filter(Boolean)
      .map((l) => String(l).toLowerCase());
    if (langs.some((l) => l.startsWith("zh"))) return "zh";

    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (CN_TZ.test(tz)) return "zh";
    } catch (_) {
      /* ignore */
    }
    return "en";
  };

  const t = (lang, key) => {
    const pack = dict[lang] || dict.en;
    return pack[key] != null ? pack[key] : dict.zh[key] != null ? dict.zh[key] : key;
  };

  const setMeta = (selector, attr, value) => {
    const el = document.querySelector(selector);
    if (!el || value == null) return;
    if (attr === "text") el.textContent = value;
    else el.setAttribute(attr, value);
  };

  const applyMailtoSubject = (el, subject) => {
    if (!el || !subject) return;
    try {
      const url = new URL(el.getAttribute("href") || "", window.location.href);
      if (url.protocol !== "mailto:") return;
      url.searchParams.set("subject", subject);
      el.setAttribute("href", url.toString().replace(/\+/g, "%20"));
    } catch (_) {
      const href = el.getAttribute("href") || "";
      const base = href.split("?")[0];
      el.setAttribute("href", `${base}?subject=${encodeURIComponent(subject)}`);
    }
  };

  const applyLang = (lang) => {
    const resolved = lang === "zh" ? "zh" : "en";
    document.documentElement.lang = resolved === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.lang = resolved;
    localStorage.setItem(STORAGE_KEY, resolved);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = t(resolved, key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      el.innerHTML = t(resolved, key);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (!key) return;
      const val = t(resolved, key);
      el.setAttribute("aria-label", val);
      if (el.tagName === "IMG") el.setAttribute("alt", val);
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (!key) return;
      el.setAttribute("title", t(resolved, key));
    });

    document.querySelectorAll("[data-i18n-mail]").forEach((el) => {
      const key = el.getAttribute("data-i18n-mail");
      if (!key) return;
      applyMailtoSubject(el, t(resolved, key));
    });

    const apiMsg = document.querySelector("[data-i18n-api-message]");
    if (apiMsg) apiMsg.textContent = `"${t(resolved, "api.message")}"`;

    setMeta("title", "text", t(resolved, "meta.title"));
    setMeta('meta[name="description"]', "content", t(resolved, "meta.description"));
    setMeta('meta[property="og:title"]', "content", t(resolved, "meta.ogTitle"));
    setMeta('meta[property="og:description"]', "content", t(resolved, "meta.ogDescription"));
    setMeta('meta[property="og:locale"]', "content", resolved === "zh" ? "zh_CN" : "en_US");
    setMeta('meta[name="twitter:title"]', "content", t(resolved, "meta.ogTitle"));
    setMeta('meta[name="twitter:description"]', "content", t(resolved, "meta.ogDescription"));
    setMeta('meta[name="keywords"]', "content", resolved === "zh"
      ? "P12个人证书,描述文件,IPA签名,轻松签,全能签,万能签,GBOX,魔力签,爱思助手,内测签名,iOS证书,iOSCER"
      : "P12 certificate,provisioning profile,IPA signing,ESign,NuSign,GBOX,i4Tools,beta signing,iOSCER");

    document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
      const on = btn.getAttribute("data-lang-switch") === resolved;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", String(on));
    });

    try {
      console.info("[i18n]", {
        lang: resolved,
        source: localStorage.getItem(STORAGE_KEY) ? "saved" : "auto",
        browser: navigator.language,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });
    } catch (_) {
      /* ignore */
    }

    document.dispatchEvent(new CustomEvent("ioscer:langchange", { detail: { lang: resolved } }));
  };

  const boot = () => {
    const lang = detectLang();
    applyLang(lang);

    document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = btn.getAttribute("data-lang-switch");
        if (next === "zh" || next === "en") applyLang(next);
      });
    });
  };

  window.IOSCER_I18N = { detectLang, applyLang, t, dict };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
