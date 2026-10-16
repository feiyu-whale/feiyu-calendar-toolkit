// 古今中外度量衡 · 数据层
// 数据来源（中国历代）：参考 iOS106/CN-Dynastic-Measures（Apache-2.0，© 2025 焉寻 / 李恒通）
//   本项目仅取其"朝代 → 单位系数（以现代公制为基准）"的事实性数据，并按 Apache-2.0 要求署名。
// 数据来源（外国古制）：待补（走 NIST 公有领域 / 公开文献）
// 2026-10-16 新建
//
// 结构说明：
//   CATS[类别] = { base: 基准单位中文名, baseKey: 基准单位键, groups: { 组id: {name, units:{键:相对基准的系数}} } }
//   换算：值 × groups[from].units[u1] / groups[to].units[u2]

const MEASURE_DATA = {
  length: {
    base: "厘米", baseKey: "cm",
    groups: {
      modern:   { name: "现代公制", units: { km:100000, m:100, dm:10, cm:1, mm:0.1 } },
      shang:    { name: "商朝",     units: { chi:16, cun:1.6, fen:0.16 } },
      zhou:     { name: "周/战国",  units: { zhang:231, chi:23.1, cun:2.31, fen:0.231 } },
      han:      { name: "秦/汉",    units: { yin:2310, zhang:231, chi:23.1, cun:2.31, fen:0.231 } },
      tang:     { name: "唐朝",     units: { zhang:303, chi:30.3, cun:3.03, fen:0.303 } },
      song:     { name: "宋朝",     units: { zhang:314, chi:31.4, cun:3.14, fen:0.314 } },
      yuan:     { name: "元朝",     units: { zhang:350, chi:35, cun:3.5, fen:0.35 } },
      ming:     { name: "明/清",    units: { zhang:320, chi:32, cun:3.2, fen:0.32 } },
      market:   { name: "现代市制", units: { zhang:333.33, chi:33.33, cun:3.333, fen:0.3333 } }
    }
  },
  volume: {
    base: "毫升", baseKey: "ml",
    groups: {
      modern:   { name: "现代公制", units: { l:1000, ml:1 } },
      han:      { name: "秦/汉",    units: { hu:20000, dou:2000, sheng:200, ge:20, yue:2 } },
      tang:     { name: "唐朝",     units: { hu:60000, dou:6000, sheng:600, ge:60 } },
      song:     { name: "宋朝",     units: { shi:70200, hu:35100, dou:7020, sheng:702, ge:70 } },
      yuan:     { name: "元朝",     units: { shi:100300, hu:50150, dou:10030, sheng:1003, ge:100 } },
      ming:     { name: "明/清",    units: { shi:103500, hu:51750, dou:10350, sheng:1035, ge:103.5 } },
      market:   { name: "现代市制", units: { shi:100000, dou:10000, sheng:1000, ge:100 } }
    }
  },
  weight: {
    base: "克", baseKey: "g",
    groups: {
      modern:   { name: "现代公制", units: { kg:1000, g:1, mg:0.001 } },
      han:      { name: "秦/西汉",  units: { shi:30000, jun:7500, jin:250, liang:15.625, zhu:0.65, lei:0.065, shu:0.0065 } },
      dhan:     { name: "东汉",     units: { shi:26400, jun:6600, jin:220, liang:13.75, zhu:0.573, lei:0.0573, shu:0.00573 } },
      tang:     { name: "唐朝",     units: { shi:79200, jin:660, liang:41.25, qian:4.125, zhu:1.72, lei:0.172 } },
      song:     { name: "宋/元",    units: { shi:76800, jin:640, liang:40, qian:4, fen:0.4, li:0.04, hao:0.004 } },
      ming:     { name: "明/清",    units: { shi:71616, jin:596.8, liang:37.3, qian:3.73, fen:0.373, li:0.0373, hao:0.00373 } },
      market:   { name: "现代市制", units: { jin:500, liang:50, qian:5 } }
    }
  }
};

// 单位中文名（简）
const MEASURE_UNIT_NAMES = {
  km:"千米", m:"米", dm:"分米", cm:"厘米", mm:"毫米",
  yin:"引", zhang:"丈", chi:"尺", cun:"寸", fen:"分",
  l:"升", ml:"毫升", shi:"石", hu:"斛", dou:"斗", sheng:"升", ge:"合", yue:"龠",
  kg:"千克", g:"克", mg:"毫克", jun:"钧", jin:"斤", liang:"两", qian:"钱", li:"厘", hao:"毫",
  zhu:"铢", lei:"累", shu:"黍"
};

// 类别中文名
const MEASURE_CAT_NAMES = { length:"长度", volume:"容量", weight:"重量" };
