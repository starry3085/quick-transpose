import { r as reactExports, a as reactDomExports, R as React } from "./vendor-Boyj_dwm.js";
import { C as Card, B as Button, L as Layout, S as Select, a as Collapse, M as MessagePlugin, I as Input, R as RefreshIcon, b as SwapIcon, c as Switch, T as Tag, A as ArrowRightIcon, d as Tabs, e as MusicIcon, f as BookOpenIcon, g as ConfigProvider } from "./tdesign-DGbwKEc_.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m$1.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024
};
function getPlatformInfo() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const isMobile = screenWidth < BREAKPOINTS.mobile;
  const isTablet = screenWidth >= BREAKPOINTS.mobile && screenWidth < BREAKPOINTS.tablet;
  const isDesktop = screenWidth >= BREAKPOINTS.tablet;
  let deviceType;
  if (isMobile) {
    deviceType = "mobile";
  } else if (isTablet) {
    deviceType = "tablet";
  } else {
    deviceType = "desktop";
  }
  const orientation = screenWidth > screenHeight ? "landscape" : "portrait";
  return {
    isMobile,
    isTablet,
    isDesktop,
    screenWidth,
    screenHeight,
    deviceType,
    orientation
  };
}
function getResponsiveButtonSize(deviceType) {
  const type = deviceType || getPlatformInfo().deviceType;
  switch (type) {
    case "mobile":
      return "medium";
    case "tablet":
      return "medium";
    case "desktop":
      return "large";
    default:
      return "medium";
  }
}
function getResponsiveSpacing(deviceType) {
  const type = deviceType || getPlatformInfo().deviceType;
  switch (type) {
    case "mobile":
      return {
        padding: "12px",
        margin: "8px",
        gap: "8px"
      };
    case "tablet":
      return {
        padding: "16px",
        margin: "12px",
        gap: "12px"
      };
    case "desktop":
      return {
        padding: "24px",
        margin: "16px",
        gap: "16px"
      };
    default:
      return {
        padding: "16px",
        margin: "12px",
        gap: "12px"
      };
  }
}
function usePlatform() {
  const [platformInfo, setPlatformInfo] = reactExports.useState(() => getPlatformInfo());
  reactExports.useEffect(() => {
    const handleResize = () => {
      setPlatformInfo(getPlatformInfo());
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);
  return platformInfo;
}
const ResponsiveContainer = ({
  children,
  className = "",
  maxWidth,
  centerContent = true
}) => {
  const platform = usePlatform();
  const spacing = getResponsiveSpacing(platform.deviceType);
  const containerStyle = {
    padding: spacing.padding,
    margin: centerContent ? "0 auto" : "0",
    maxWidth: maxWidth || (platform.isMobile ? "100%" : platform.isTablet ? "768px" : "1200px"),
    width: "100%"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `responsive-container ${className}`,
      style: containerStyle,
      children
    }
  );
};
const AdaptiveCard = ({
  title,
  children,
  className = "",
  actions,
  bordered = true
}) => {
  const platform = usePlatform();
  const spacing = getResponsiveSpacing(platform.deviceType);
  const cardStyle = {
    marginBottom: spacing.margin,
    borderRadius: platform.isMobile ? "8px" : "12px"
  };
  ({
    fontSize: platform.isMobile ? "16px" : platform.isTablet ? "18px" : "20px"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      title,
      className: `adaptive-card ${className}`,
      style: cardStyle,
      actions,
      bordered,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: platform.isMobile ? "8px" : "12px" }, children })
    }
  );
};
const AdaptiveButton = ({
  children,
  onClick,
  variant = "base",
  theme = "default",
  size: propSize,
  disabled = false,
  loading = false,
  icon,
  className = "",
  block = false
}) => {
  const platform = usePlatform();
  const size = propSize || getResponsiveButtonSize(platform.deviceType);
  const buttonStyle = {
    minHeight: platform.isMobile ? "40px" : platform.isTablet ? "44px" : "48px",
    fontSize: platform.isMobile ? "14px" : "16px",
    borderRadius: platform.isMobile ? "6px" : "8px"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      size,
      variant,
      theme,
      disabled,
      loading,
      icon,
      onClick,
      className: `adaptive-button ${className}`,
      style: buttonStyle,
      block,
      children
    }
  );
};
const { Header, Content } = Layout;
const AdaptiveLayout = ({
  header,
  children,
  className = ""
}) => {
  const platform = usePlatform();
  const headerStyle = {
    height: platform.isMobile ? "56px" : platform.isTablet ? "64px" : "72px",
    padding: platform.isMobile ? "0 16px" : "0 24px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #e7e7e7"
  };
  const contentStyle = {
    minHeight: `calc(100vh - ${platform.isMobile ? "56px" : platform.isTablet ? "64px" : "72px"})`,
    backgroundColor: "#f5f5f5"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `adaptive-layout ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    header && /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { style: headerStyle, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: header }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Content, { style: contentStyle, children })
  ] }) });
};
const SIMPLE_KEYS = ["C", "D", "E", "F", "G", "A", "B"];
const CHORD_MAPS = {
  major: {
    "C": ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
    "C#": ["C#", "D#m", "E#m", "F#", "G#", "A#m", "B#dim"],
    "Db": ["Db", "Ebm", "Fm", "Gb", "Ab", "Bbm", "Cdim"],
    "D": ["D", "Em", "F#m", "G", "A", "Bm", "C#dim"],
    "D#": ["D#", "E#m", "F##m", "G#", "A#", "B#m", "C##dim"],
    "Eb": ["Eb", "Fm", "Gm", "Ab", "Bb", "Cm", "Ddim"],
    "E": ["E", "F#m", "G#m", "A", "B", "C#m", "D#dim"],
    "F": ["F", "Gm", "Am", "Bb", "C", "Dm", "Edim"],
    "F#": ["F#", "G#m", "A#m", "B", "C#", "D#m", "E#dim"],
    "Gb": ["Gb", "Abm", "Bbm", "Cb", "Db", "Ebm", "Fdim"],
    "G": ["G", "Am", "Bm", "C", "D", "Em", "F#dim"],
    "G#": ["G#", "A#m", "B#m", "C#", "D#", "E#m", "F##dim"],
    "Ab": ["Ab", "Bbm", "Cm", "Db", "Eb", "Fm", "Gdim"],
    "A": ["A", "Bm", "C#m", "D", "E", "F#m", "G#dim"],
    "A#": ["A#", "B#m", "C##m", "D#", "E#", "F##m", "G##dim"],
    "Bb": ["Bb", "Cm", "Dm", "Eb", "F", "Gm", "Adim"],
    "B": ["B", "C#m", "D#m", "E", "F#", "G#m", "A#dim"]
  },
  minor: {
    "C": ["Cm", "Ddim", "Eb", "Fm", "Gm", "Ab", "Bb"],
    "C#": ["C#m", "D#dim", "E", "F#m", "G#m", "A", "B"],
    "Db": ["Dbm", "Ebdim", "Fb", "Gbm", "Abm", "Bbb", "Cb"],
    "D": ["Dm", "Edim", "F", "Gm", "Am", "Bb", "C"],
    "D#": ["D#m", "E#dim", "F#", "G#m", "A#m", "B", "C#"],
    "Eb": ["Ebm", "Fdim", "Gb", "Abm", "Bbm", "Cb", "Db"],
    "E": ["Em", "F#dim", "G", "Am", "Bm", "C", "D"],
    "F": ["Fm", "Gdim", "Ab", "Bbm", "Cm", "Db", "Eb"],
    "F#": ["F#m", "G#dim", "A", "Bm", "C#m", "D", "E"],
    "Gb": ["Gbm", "Abdim", "Bbb", "Cbm", "Dbm", "Ebb", "Fb"],
    "G": ["Gm", "Adim", "Bb", "Cm", "Dm", "Eb", "F"],
    "G#": ["G#m", "A#dim", "B", "C#m", "D#m", "E", "F#"],
    "Ab": ["Abm", "Bbdim", "Cb", "Dbm", "Ebm", "Fb", "Gb"],
    "A": ["Am", "Bdim", "C", "Dm", "Em", "F", "G"],
    "A#": ["A#m", "B#dim", "C#", "D#m", "E#m", "F#", "G#"],
    "Bb": ["Bbm", "Cdim", "Db", "Ebm", "Fm", "Gb", "Ab"],
    "B": ["Bm", "C#dim", "D", "Em", "F#m", "G", "A"]
  }
};
const ROMAN_NUMERALS = {
  major: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
  minor: ["i", "ii°", "III", "iv", "v", "VI", "VII"]
};
const DEGREE_NAMES = ["一度", "二度", "三度", "四度", "五度", "六度", "七度"];
const COMMON_PROGRESSIONS = [
  { label: "4536251", value: "4 5 3 6 2 5 1", description: "卡农进行" },
  { label: "1625", value: "1 6 2 5", description: "圆周进行" },
  { label: "251", value: "2 5 1", description: "爵士基础进行" },
  { label: "6415", value: "6 4 1 5", description: "抒情进行" },
  { label: "1564", value: "1 5 6 4", description: "流行进行" },
  { label: "1451", value: "1 4 5 1", description: "古典终止式" }
];
class TransposeEngine {
  /**
   * 执行和弦移调
   * @param params 移调参数
   * @returns 移调结果
   */
  static transpose(params) {
    const { progression, sourceKey, targetKey, isMinor, useSeventhChords = false } = params;
    if (!progression || !progression.trim()) {
      return {
        success: false,
        data: [],
        error: "和弦进行不能为空"
      };
    }
    try {
      const chordType = isMinor ? "minor" : "major";
      const sourceChords = CHORD_MAPS[chordType][sourceKey];
      const targetChords = CHORD_MAPS[chordType][targetKey];
      const romanNumerals = ROMAN_NUMERALS[chordType];
      if (!sourceChords || !targetChords) {
        return {
          success: false,
          data: [],
          error: "不支持的调性"
        };
      }
      const numbers = progression.split(/[\s,]+/).filter((n2) => n2.trim());
      const result = numbers.map((num) => {
        const index = parseInt(num) - 1;
        if (index >= 0 && index < 7) {
          let targetChord = targetChords[index];
          if (useSeventhChords && index !== 6) {
            targetChord += "7";
          }
          return {
            chord: targetChord,
            roman: romanNumerals[index],
            original: sourceChords[index],
            degree: index + 1
          };
        }
        return {
          chord: num,
          roman: "",
          original: num,
          degree: parseInt(num) || 0
        };
      });
      return {
        success: true,
        data: result
      };
    } catch (error) {
      return {
        success: false,
        data: [],
        error: error instanceof Error ? error.message : "移调失败"
      };
    }
  }
  /**
   * 获取指定调性的和弦列表
   * @param key 调性
   * @param isMinor 是否为小调
   * @returns 和弦列表
   */
  static getChordsByKey(key, isMinor = false) {
    const chordType = isMinor ? "minor" : "major";
    return [...CHORD_MAPS[chordType][key] || []];
  }
  /**
   * 获取罗马数字标记
   * @param isMinor 是否为小调
   * @returns 罗马数字列表
   */
  static getRomanNumerals(isMinor = false) {
    return [...ROMAN_NUMERALS[isMinor ? "minor" : "major"]];
  }
  /**
   * 获取和弦的详细信息
   * @param chordName 和弦名称
   * @returns 和弦信息
   */
  static getChordInfo(chordName) {
    const root = chordName.replace(/[^A-G#b]/g, "");
    const quality = chordName.replace(/^[A-G#b]+/, "");
    return {
      root,
      quality,
      fullName: chordName,
      type: this.getChordType(quality)
    };
  }
  /**
   * 判断和弦类型
   * @param quality 和弦品质标记
   * @returns 和弦类型
   */
  static getChordType(quality) {
    if (!quality || quality === "") return "major";
    if (quality === "m") return "minor";
    if (quality === "dim") return "diminished";
    if (quality === "7") return "seventh";
    if (quality === "M7" || quality === "maj7") return "majorSeventh";
    if (quality === "m7") return "minorSeventh";
    return "unknown";
  }
  /**
   * 批量移调多个进行
   * @param progressions 多个和弦进行
   * @param sourceKey 源调
   * @param targetKey 目标调
   * @param isMinor 是否为小调
   * @returns 移调结果数组
   */
  static batchTranspose(progressions, sourceKey, targetKey, isMinor = false) {
    return progressions.map(
      (progression) => this.transpose({ progression, sourceKey, targetKey, isMinor })
    );
  }
}
class WebStorageAdapter {
  get(key, defaultValue) {
    try {
      const item = localStorage.getItem(key);
      if (item === null) {
        return defaultValue || null;
      }
      return JSON.parse(item);
    } catch (error) {
      console.error("Storage get error:", error);
      return defaultValue || null;
    }
  }
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Storage set error:", error);
    }
  }
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Storage remove error:", error);
    }
  }
  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Storage clear error:", error);
    }
  }
}
class MiniprogramStorageAdapter {
  get(key, defaultValue) {
    var _a;
    try {
      const value = (_a = globalThis.wx) == null ? void 0 : _a.getStorageSync(key);
      return value || defaultValue || null;
    } catch (error) {
      console.error("Miniprogram storage get error:", error);
      return defaultValue || null;
    }
  }
  set(key, value) {
    var _a;
    try {
      (_a = globalThis.wx) == null ? void 0 : _a.setStorageSync(key, value);
    } catch (error) {
      console.error("Miniprogram storage set error:", error);
    }
  }
  remove(key) {
    var _a;
    try {
      (_a = globalThis.wx) == null ? void 0 : _a.removeStorageSync(key);
    } catch (error) {
      console.error("Miniprogram storage remove error:", error);
    }
  }
  clear() {
    var _a;
    try {
      (_a = globalThis.wx) == null ? void 0 : _a.clearStorageSync();
    } catch (error) {
      console.error("Miniprogram storage clear error:", error);
    }
  }
}
class StorageManager {
  constructor(adapter) {
    this.adapter = adapter;
  }
  /**
   * 保存移调设置
   */
  saveTransposeSettings(settings) {
    this.adapter.set("transpose_settings", settings);
  }
  /**
   * 获取移调设置
   */
  getTransposeSettings() {
    return this.adapter.get("transpose_settings", {
      sourceKey: "C",
      targetKey: "G",
      isMinor: false,
      useSeventhChords: false
    });
  }
  /**
   * 保存最近使用的进行
   */
  saveRecentProgressions(progressions) {
    const limited = progressions.slice(0, 10);
    this.adapter.set("recent_progressions", limited);
  }
  /**
   * 获取最近使用的进行
   */
  getRecentProgressions() {
    return this.adapter.get("recent_progressions", []) || [];
  }
  /**
   * 添加到最近使用
   */
  addRecentProgression(progression) {
    const recent = this.getRecentProgressions();
    const filtered = recent.filter((p2) => p2 !== progression);
    filtered.unshift(progression);
    this.saveRecentProgressions(filtered);
  }
  /**
   * 保存收藏的进行
   */
  saveFavoriteProgressions(progressions) {
    this.adapter.set("favorite_progressions", progressions);
  }
  /**
   * 获取收藏的进行
   */
  getFavoriteProgressions() {
    return this.adapter.get("favorite_progressions", []) || [];
  }
  /**
   * 切换收藏状态
   */
  toggleFavoriteProgression(progression) {
    const favorites = this.getFavoriteProgressions();
    const index = favorites.indexOf(progression);
    if (index >= 0) {
      favorites.splice(index, 1);
      this.saveFavoriteProgressions(favorites);
      return false;
    } else {
      favorites.push(progression);
      this.saveFavoriteProgressions(favorites);
      return true;
    }
  }
}
function createStorageManager() {
  const wx = globalThis.wx;
  if (typeof wx !== "undefined" && wx.getStorageSync) {
    return new StorageManager(new MiniprogramStorageAdapter());
  } else if (typeof localStorage !== "undefined") {
    return new StorageManager(new WebStorageAdapter());
  } else {
    console.warn("No storage available, using memory storage");
    return new StorageManager(new MemoryStorageAdapter());
  }
}
class MemoryStorageAdapter {
  constructor() {
    this.storage = /* @__PURE__ */ new Map();
  }
  get(key, defaultValue) {
    return this.storage.get(key) || defaultValue || null;
  }
  set(key, value) {
    this.storage.set(key, value);
  }
  remove(key) {
    this.storage.delete(key);
  }
  clear() {
    this.storage.clear();
  }
}
function debounce(func, wait, immediate = false) {
  let timeout = null;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
    if (callNow) {
      func(...args);
    }
  };
}
const { Option: Option$1 } = Select;
const CollapsePanel = Collapse.Panel;
const TransposeTab = () => {
  const { fillProgressionData, clearFillData } = useAppContext();
  const [progression, setProgression] = reactExports.useState("");
  const [sourceKey, setSourceKey] = reactExports.useState("C");
  const [targetKey, setTargetKey] = reactExports.useState("G");
  const [isMinor, setIsMinor] = reactExports.useState(false);
  const [useSeventhChords, setUseSeventhChords] = reactExports.useState(false);
  const [showComparison, setShowComparison] = reactExports.useState(false);
  const [recentProgressions, setRecentProgressions] = reactExports.useState([]);
  const storageManager = createStorageManager();
  reactExports.useEffect(() => {
    const settings = storageManager.getTransposeSettings();
    if (settings) {
      setSourceKey(settings.sourceKey);
      setTargetKey(settings.targetKey);
      setIsMinor(settings.isMinor);
      setUseSeventhChords(settings.useSeventhChords || false);
    }
    const recent = storageManager.getRecentProgressions();
    setRecentProgressions(recent);
  }, []);
  reactExports.useEffect(() => {
    if (fillProgressionData) {
      setProgression(fillProgressionData);
      storageManager.addRecentProgression(fillProgressionData);
      setRecentProgressions(storageManager.getRecentProgressions());
      clearFillData();
      MessagePlugin.success("已从和弦字典填入进行");
    }
  }, [fillProgressionData, clearFillData, storageManager]);
  const saveSettings = reactExports.useCallback(() => {
    const settings = {
      sourceKey,
      targetKey,
      isMinor,
      useSeventhChords
    };
    storageManager.saveTransposeSettings(settings);
  }, [sourceKey, targetKey, isMinor, useSeventhChords, storageManager]);
  const debouncedSaveSettings = reactExports.useCallback(
    debounce(saveSettings, 500),
    [saveSettings]
  );
  reactExports.useEffect(() => {
    debouncedSaveSettings();
  }, [sourceKey, targetKey, isMinor, useSeventhChords, debouncedSaveSettings]);
  const handleSourceKeyChange = (value) => {
    setSourceKey(value);
  };
  const handleTargetKeyChange = (value) => {
    setTargetKey(value);
  };
  const result = TransposeEngine.transpose({
    progression,
    sourceKey,
    targetKey,
    isMinor,
    useSeventhChords
  });
  const handleSwapKeys = () => {
    const temp = sourceKey;
    setSourceKey(targetKey);
    setTargetKey(temp);
  };
  const handleFillProgression = (value) => {
    setProgression(value);
    storageManager.addRecentProgression(value);
    setRecentProgressions(storageManager.getRecentProgressions());
  };
  const handleClear = () => {
    setProgression("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "transpose-tab", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "responsive-grid grid-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AdaptiveCard, { title: "和弦进行输入", className: "input-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "input-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "progression-input", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "例如：4 5 3 6 2 5 1",
            value: progression,
            onChange: setProgression,
            clearable: true,
            size: "large"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "input-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          AdaptiveButton,
          {
            variant: "outline",
            size: "small",
            onClick: handleClear,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshIcon, {}),
            children: "清空"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "key-selection responsive-grid grid-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "key-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", children: "源调" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "key-input-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Select,
              {
                value: sourceKey,
                onChange: handleSourceKeyChange,
                size: "large",
                children: SIMPLE_KEYS.map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(Option$1, { value: key, children: key }, key))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AdaptiveButton,
              {
                variant: "outline",
                onClick: handleSwapKeys,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(SwapIcon, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "key-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", children: "目标调" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Select,
            {
              value: targetKey,
              onChange: handleTargetKeyChange,
              size: "large",
              children: SIMPLE_KEYS.map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(Option$1, { value: key, children: key }, key))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "options-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "switch-group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            value: isMinor,
            onChange: setIsMinor,
            label: "小调"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "switch-group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            value: useSeventhChords,
            onChange: setUseSeventhChords,
            label: "七和弦"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AdaptiveCard, { title: "常用走向", className: "progressions-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "progressions-grid", children: COMMON_PROGRESSIONS.map((prog) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tag,
        {
          variant: "outline",
          className: "progression-tag",
          onClick: () => handleFillProgression(prog.value),
          children: prog.label
        },
        prog.label
      )) }),
      recentProgressions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "recent-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-title", children: "最近使用" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "progressions-grid", children: recentProgressions.slice(0, 5).map((prog, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tag,
          {
            variant: "light-outline",
            className: "progression-tag recent",
            onClick: () => handleFillProgression(prog),
            children: prog
          },
          index
        )) })
      ] })
    ] }),
    result.success && result.data.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      AdaptiveCard,
      {
        title: "转换结果",
        className: "result-card",
        actions: /* @__PURE__ */ jsxRuntimeExports.jsx(
          AdaptiveButton,
          {
            variant: "outline",
            onClick: handleClear,
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshIcon, {}),
            children: "清空"
          }
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "result-content", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chords-display", children: result.data.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chord-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: "large", className: "chord-tag", children: item.chord }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "roman-numeral", children: item.roman })
            ] }, index)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "result-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              AdaptiveButton,
              {
                variant: "text",
                onClick: () => setShowComparison(!showComparison),
                children: [
                  showComparison ? "隐藏" : "显示",
                  "对照"
                ]
              }
            ) })
          ] }),
          showComparison && /* @__PURE__ */ jsxRuntimeExports.jsx(Collapse, { className: "comparison-collapse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsePanel, { header: "原调→目标调对照", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "comparison-list", children: result.data.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "comparison-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "original", children: item.original }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "arrow", children: "→" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "target", children: item.chord })
          ] }, index)) }) }) })
        ]
      }
    ),
    !result.success && progression.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx(AdaptiveCard, { className: "error-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error-content", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-text", children: result.error }) }) })
  ] }) });
};
const { Option } = Select;
const DictionaryTab = () => {
  const { fillProgression } = useAppContext();
  const [selectedKey, setSelectedKey] = reactExports.useState("C");
  const [isMinor, setIsMinor] = reactExports.useState(false);
  const chords = TransposeEngine.getChordsByKey(selectedKey, isMinor);
  const romanNumerals = TransposeEngine.getRomanNumerals(isMinor);
  const handleKeyChange = (value) => {
    setSelectedKey(value);
  };
  const handleFillToTransposer = (degree) => {
    fillProgression(degree.toString());
    MessagePlugin.success(`已填入第${degree}级和弦到转调工具`);
  };
  const handleQuickFill = (progression) => {
    fillProgression(progression);
    MessagePlugin.success("已填入和弦进行到转调工具");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dictionary-tab", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "responsive-grid grid-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AdaptiveCard, { title: "调式选择", className: "filter-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "filter-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "key-selection responsive-grid grid-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "key-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", children: "调" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Select,
          {
            value: selectedKey,
            onChange: handleKeyChange,
            size: "large",
            children: SIMPLE_KEYS.map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(Option, { value: key, children: key }, key))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "switch-group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Switch,
        {
          value: isMinor,
          onChange: setIsMinor,
          label: "小调",
          size: "large"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AdaptiveCard,
      {
        title: `${selectedKey}${isMinor ? "小调" : "大调"} 和弦表`,
        className: "chords-card",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chords-list", children: chords.map((chord, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chord-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chord-info", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "degree-badge", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { variant: "outline", size: "large", children: index + 1 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chord-details", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chord-name", children: chord }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chord-meta", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "roman", children: romanNumerals[index] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "separator", children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "degree-name", children: DEGREE_NAMES[index] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AdaptiveButton,
            {
              variant: "text",
              onClick: () => handleFillToTransposer(index + 1),
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRightIcon, {}),
              children: "填入"
            }
          )
        ] }, index)) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AdaptiveCard, { title: "和弦标记说明", className: "info-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chord-types", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "type-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "type-label", children: "大三和弦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "type-examples", children: "C, F, G" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "type-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "type-label", children: "小三和弦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "type-examples", children: "Dm, Em, Am" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "type-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "type-label", children: "减三和弦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "type-examples", children: "Bdim" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "type-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "type-label", children: "七和弦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "type-examples", children: "C7, Dm7, G7" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AdaptiveCard, { title: "快捷填入", className: "quick-actions-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quick-actions-grid responsive-grid grid-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AdaptiveButton,
        {
          variant: "outline",
          onClick: () => handleQuickFill("1 4 5 1"),
          children: "I-IV-V-I"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AdaptiveButton,
        {
          variant: "outline",
          onClick: () => handleQuickFill("6 4 1 5"),
          children: "vi-IV-I-V"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AdaptiveButton,
        {
          variant: "outline",
          onClick: () => handleQuickFill("1 6 2 5"),
          children: "I-vi-ii-V"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        AdaptiveButton,
        {
          variant: "outline",
          onClick: () => handleQuickFill("4 5 3 6 2 5 1"),
          children: "卡农进行"
        }
      )
    ] }) })
  ] }) });
};
const { TabPanel } = Tabs;
const TransposeApp = () => {
  const { activeTab, setActiveTab } = useAppContext();
  const platform = usePlatform();
  const handleTabChange = (value) => {
    setActiveTab(String(value));
  };
  const headerContent = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header-content", style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "logo", style: {
      display: "flex",
      alignItems: "center",
      gap: platform.isMobile ? "8px" : "12px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MusicIcon, { size: platform.isMobile ? "20px" : "24px" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "logo-text", style: {
        fontSize: platform.isMobile ? "18px" : platform.isTablet ? "20px" : "24px",
        fontWeight: "600"
      }, children: "Quick Transpose" })
    ] }),
    !platform.isMobile && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "subtitle", style: {
      fontSize: platform.isTablet ? "14px" : "16px",
      color: "#666"
    }, children: "和弦转调工具" })
  ] });
  const tabSize = platform.isMobile ? "medium" : "large";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "transpose-app", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdaptiveLayout, { header: headerContent, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-card", style: {
    backgroundColor: "white",
    borderRadius: platform.isMobile ? "8px" : "12px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Tabs,
    {
      value: activeTab,
      onChange: handleTabChange,
      placement: "top",
      size: tabSize,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabPanel,
          {
            value: "transpose",
            label: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tab-label", style: {
              display: "flex",
              alignItems: "center",
              gap: platform.isMobile ? "4px" : "8px"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MusicIcon, { size: platform.isMobile ? "14px" : "16px" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: platform.isMobile ? "14px" : "16px" }, children: platform.isMobile ? "转调" : "转调工具" })
            ] }),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransposeTab, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabPanel,
          {
            value: "dictionary",
            label: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tab-label", style: {
              display: "flex",
              alignItems: "center",
              gap: platform.isMobile ? "4px" : "8px"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpenIcon, { size: platform.isMobile ? "14px" : "16px" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: platform.isMobile ? "14px" : "16px" }, children: platform.isMobile ? "字典" : "和弦字典" })
            ] }),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(DictionaryTab, {})
          }
        )
      ]
    }
  ) }) }) }) });
};
const AppContext = reactExports.createContext(void 0);
const useAppContext = () => {
  const context = reactExports.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
function App() {
  const [activeTab, setActiveTab] = reactExports.useState("transpose");
  const [fillProgressionData, setFillProgressionData] = reactExports.useState(null);
  const fillProgression = (progression) => {
    setFillProgressionData(progression);
    setActiveTab("transpose");
  };
  const clearFillData = () => {
    setFillProgressionData(null);
  };
  const contextValue = {
    activeTab,
    setActiveTab,
    fillProgression,
    fillProgressionData,
    clearFillData
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ConfigProvider, { globalConfig: {}, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "app", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransposeApp, {}) }) }) });
}
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
//# sourceMappingURL=index-CI5nXk-4.js.map
