
const SECRET_KEY = 'af4bba72f2b0473f9b7be5587213c229';
const API_BASE = 'https://www.easyscholar.cc/open/getPublicationRank';

// 官方数据集映射 (easyScholar 标准库)
const RANK_MAP: Record<string, string> = {
  pku: "北大核心",
  cssci: "南大核心",
  zhongguokejihexin: "科技核心",
  sciwarn: "预警期刊",
  cscd: "CSCD",
  ssci: "SSCI",
  sci: "SCI",
  swufe: "西财",
  cufe: "中财",
  ruc: "人大",
  nju: "南大",
  zju: "浙大",
  sjtu: "交大",
  fdu: "复旦"
};

// 您提供的法学专项数据集 UUID
const MONITOR_UUIDS = {
  NEGATIVE: "1866000451577192448",     // 华政负面
  LAW_C_EXT: "1959186565267394560",    // 法C扩
  CSSCI_BOOK: "1653331106809507840",   // CSSCI集刊
  CLSCI: "1642199434173014016"         // CLSCI
};

export interface RankTag {
  label: string;
  value: string;
  type: 'official' | 'custom' | 'negative' | 'legal_core';
}

export interface EasyScholarRank {
  tags: RankTag[];
  isNegative: boolean;
}

export const fetchPublicationRank = async (name: string): Promise<EasyScholarRank> => {
  if (!name) return { tags: [], isNegative: false };
  try {
    const url = `${API_BASE}?secretKey=${SECRET_KEY}&publicationName=${encodeURIComponent(name)}`;
    const response = await fetch(url);
    const result = await response.json();
    
    const tags: RankTag[] = [];
    let isNegative = false;

    if (result.code === 200 && result.data) {
      const { officialRank, customRank } = result.data;
      
      // 1. 处理官方标准数据集
      const allRanks = officialRank?.all || {};
      Object.keys(allRanks).forEach(key => {
        if (RANK_MAP[key]) {
          tags.push({ label: RANK_MAP[key], value: allRanks[key], type: 'official' });
        }
        if (key === 'sciwarn') isNegative = true;
      });

      // 2. 处理法学专项自定义数据集
      if (customRank && customRank.rank) {
        customRank.rank.forEach((rankStr: string) => {
          const [uuid, rankIdxStr] = rankStr.split('&&&');
          const rankIdx = parseInt(rankIdxStr);
          const info = customRank.rankInfo?.find((i: any) => i.uuid === uuid);
          
          if (info) {
            let rankText = "";
            switch(rankIdx) {
              case 1: rankText = info.oneRankText; break;
              case 2: rankText = info.twoRankText; break;
              case 3: rankText = info.threeRankText; break;
              case 4: rankText = info.fourRankText; break;
              case 5: rankText = info.fiveRankText; break;
            }

            const isNegativeDataset = uuid === MONITOR_UUIDS.NEGATIVE;
            if (isNegativeDataset) isNegative = true;

            // 针对法学核心数据集使用特殊类型标识
            let type: 'custom' | 'negative' | 'legal_core' = 'custom';
            if (isNegativeDataset) type = 'negative';
            else if ([MONITOR_UUIDS.CLSCI, MONITOR_UUIDS.LAW_C_EXT, MONITOR_UUIDS.CSSCI_BOOK].includes(uuid)) type = 'legal_core';

            tags.push({
              label: info.abbName || "数据集",
              value: rankText || "命中",
              type: type
            });
          }
        });
      }
    }
    return { tags, isNegative };
  } catch (e) {
    console.error("easyScholar API Error:", e);
    return { tags: [], isNegative: false };
  }
};
