import { formatCitationByRules } from "../services/citationRules.js";

const cases = [
  {
    label: "中文图书",
    input: "王名扬：《美国行政法》,中国法制出版社1995年版，第18页。",
    expected: "王名扬：《美国行政法》，中国法制出版社1995年版，第18页。",
  },
  {
    label: "中文期刊文章",
    input: "季卫东：《法律程序的意义——对中国法制建设的另一种思考》,载《中国社会科学》1993年第1期，第91页。",
    expected: "季卫东：《法律程序的意义——对中国法制建设的另一种思考》，载《中国社会科学》1993年第1期，第91页。",
  },
  {
    label: "无作者中文期刊文章补书名号",
    input: "生成式人工智能的知识产权法律因应与制度创新》，载《法制博览》2025年第32期，第130-132页。",
    expected: "《生成式人工智能的知识产权法律因应与制度创新》，载《法制博览》2025年第32期，第130-132页。",
    expectedDocType: "journal_article",
  },
  {
    label: "文集文章",
    input: "王保树：《股份有限公司机关构造中的董事和董事会》,载梁慧星主编：《民商法论丛》第1卷，法律出版社1994年版，第110页。",
    expected: "王保树：《股份有限公司机关构造中的董事和董事会》，载梁慧星主编：《民商法论丛》第1卷，法律出版社1994年版，第110页。",
  },
  {
    label: "网络文献",
    input: "梁秋坪、郝萍：《全国打击治理农村赌博工作现场会召开》,载人民网2024年10月12日，http://society.people.com.cn/n1/2024/1012/c1008-40337761.html。",
    expected: "梁秋坪、郝萍：《全国打击治理农村赌博工作现场会召开》，载人民网2024年10月12日，http://society.people.com.cn/n1/2024/1012/c1008-40337761.html。",
    expectedDocType: "web_article",
  },
  {
    label: "无作者网络文献",
    input: "法国最高行政法院网站，https://conseil-etat.fr/zh,2024 年10月8日访问。",
    expected: "法国最高行政法院网站，https://conseil-etat.fr/zh,2024年10月8日访问。",
  },
  {
    label: "微信公众号文章",
    input: "刘松山：《失信惩戒立法的三大问题》,载微信公众号“中国法律评论”2019年11月19日，https://mp.weixin.qq.com/s/example。",
    expected: "刘松山：《失信惩戒立法的三大问题》，载微信公众号“中国法律评论”2019年11月19日。",
  },
  {
    label: "学位论文",
    input: "李松锋：《游走在上帝与凯撒之间——美国宪法第一修正案中的政教关系研究》,中国政法大学2013年博士学位论文，第30页。",
    expected: "李松锋：《游走在上帝与凯撒之间——美国宪法第一修正案中的政教关系研究》，中国政法大学2013年博士学位论文，第30页。",
  },
  {
    label: "规范性文件文号",
    input: "《国务院关于在全国建立农村最低生活保障制度的通知》(国发[2007]19号),第四节。",
    expected: "《国务院关于在全国建立农村最低生活保障制度的通知》(国发〔2007〕19号)，第四节。",
  },
  {
    label: "修订法律文件",
    input: "《公司法》(2005年修订)第16条。",
    expected: "《公司法》(2005年修订)第16条。",
  },
  {
    label: "修正法律文件",
    input: "《公司法》(2013年修正)第36条。",
    expected: "《公司法》(2013年修正)第36条。",
  },
  {
    label: "法律文件草案",
    input: "《行政复议法(修订草案)》,2022年10月27日全国人大常委会第一次审议稿。",
    expected: "《行政复议法(修订草案)》，2022年10月27日全国人大常委会第一次审议稿。",
    expectedDocType: "official_document",
  },
  {
    label: "已废止规范性文件",
    input: "《最高人民法院、最高人民检察院关于依法严惩破坏计划生育犯罪活动的通知》(法发[1993]36号，已废止)。",
    expected: "《最高人民法院、最高人民检察院关于依法严惩破坏计划生育犯罪活动的通知》(法发〔1993〕36号，已废止)。",
  },
  {
    label: "会议决议",
    input: "《中共中央关于全面推进依法治国若干重大问题的决定》,2014年10月23日中国共产党第十八届中央委员会第四次全体会议通过。",
    expected: "《中共中央关于全面推进依法治国若干重大问题的决定》，2014年10月23日中国共产党第十八届中央委员会第四次全体会议通过。",
  },
  {
    label: "会议报告",
    input: "李克强：《政府工作报告》,2023年3月5日在第十四届全国人民代表大会第一次会议上。",
    expected: "李克强：《政府工作报告》，2023年3月5日在第十四届全国人民代表大会第一次会议上。",
    expectedDocType: "official_document",
  },
  {
    label: "会议报告带出处",
    input: "李克强：《政府工作报告》,2023年3月5日在第十四届全国人民代表大会第一次会议上，载《国务院公报》2023年 第 8 号。",
    expected: "李克强：《政府工作报告》，2023年3月5日在第十四届全国人民代表大会第一次会议上，载《国务院公报》2023年第8号。",
  },
  {
    label: "国家标准",
    input: "国家质量监督检验检疫总局、中国国家标准化管理委员会《信息与文献参考文献著录规则》,GB/T  7714—2015。",
    expected: "国家质量监督检验检疫总局、中国国家标准化管理委员会《信息与文献参考文献著录规则》，GB/T 7714—2015。",
  },
  {
    label: "白皮书带链接",
    input: "国务院新闻办公室：《新时代的中国网络法治建设》,2023年3月16日发布，https://www.gov.cn/zhengce/2023-03/16/content_5747005.htm。",
    expected: "国务院新闻办公室：《新时代的中国网络法治建设》，2023年3月16日发布，https://www.gov.cn/zhengce/2023-03/16/content_5747005.htm。",
    expectedDocType: "official_document",
  },
  {
    label: "白皮书带出版信息",
    input: "最高人民法院：《中国法院的司法改革(2013—2022)》,2023年2月21日发布，人民法院出版社2023年版。",
    expected: "最高人民法院：《中国法院的司法改革(2013—2022)》，2023年2月21日发布，人民法院出版社2023年版。",
  },
  {
    label: "规范性文件出处",
    input: "《司法部关于可否张贴判决书及应注意事项的批复》(1956年8月24日),载中华人民共和国司法部编：《中华人民共和国司法行政历史文件汇编(1950—1985)》,法律出版社1987年版，第655页。",
    expected:
      "《司法部关于可否张贴判决书及应注意事项的批复》(1956年8月24日)，载中华人民共和国司法部编：《中华人民共和国司法行政历史文件汇编(1950—1985)》，法律出版社1987年版，第655页。",
    expectedDocType: "official_document",
  },
  {
    label: "官方说明带职务和链接",
    input: "周强(最高人民法院院长):《关于〈中华人民共和国民事诉讼法(修正草案)〉的说明》,2022年12月27日在第十三届全国人大常委会第三十八次会议上，http://www.npc.gov.cn/c2/c30834/202309/t20230906_431582.html。",
    expected:
      "周强(最高人民法院院长)：《关于〈中华人民共和国民事诉讼法(修正草案)〉的说明》，2022年12月27日在第十三届全国人大常委会第三十八次会议上，http://www.npc.gov.cn/c2/c30834/202309/t20230906_431582.html。",
    expectedDocType: "official_document",
  },
  {
    label: "裁判文书顺序",
    input: "包郑照等诉苍南县人民政府强制拆除房屋案，浙江省高级人民法院民事判决书，(1988)浙法民上字7号。",
    expected: "包郑照等诉苍南县人民政府强制拆除房屋案，浙江省高级人民法院(1988)浙法民上字7号民事判决书。",
    expectedDocType: "judicial_case",
  },
  {
    label: "公报案例",
    input: "陆红霞诉南通市发展和改革委员会政府信息公开答复案，载《最高人民法院公报》2015年第11期。",
    expected: "陆红霞诉南通市发展和改革委员会政府信息公开答复案，载《最高人民法院公报》2015年第11期。",
  },
  {
    label: "案例库案例",
    input: "车某玲诉朱某芳相邻关系纠纷案，人民法院案例库 2024-18-2-053-001。",
    expected: "车某玲诉朱某芳相邻关系纠纷案，人民法院案例库2024-18-2-053-001。",
  },
  {
    label: "指导性案例",
    input: "荣宝英诉王阳、永诚财产保险股份有限公司江阴支公司机动车交通事故责任纠纷案，最高人民法院指导案例24号(2014年)。",
    expected: "荣宝英诉王阳、永诚财产保险股份有限公司江阴支公司机动车交通事故责任纠纷案，最高人民法院指导案例24号(2014年)。",
  },
  {
    label: "英文期刊文章",
    input: "Charles A.Reich,The New Property,73 Yale Law Journal 733,737-738(1964).",
    expected: "Charles A. Reich, *The New Property*, 73 Yale Law Journal 733, 737-738 (1964).",
  },
  {
    label: "英文GB/T期刊文章",
    input: "Shumailov I, Shumaylov Z, Zhao Y, et al. AI models collapse when trained on recursively generated data[J]. Nature, 2024, 631(8022): 755-759.",
    expected: "Shumailov I, Shumaylov Z, Zhao Y, et al., *AI models collapse when trained on recursively generated data*, Nature, 2024, 631(8022): 755-759.",
    expectedDocType: "english_article",
  },
  {
    label: "英文图书",
    input: "William P.Alford,To Steal a Book Is an Elegant Offense:Intellectual Property Law in Chinese Civilization,Stanford University Press,1995,p.98-99.",
    expected: "William P. Alford, *To Steal a Book Is an Elegant Offense:Intellectual Property Law in Chinese Civilization*, Stanford University Press, 1995, p.98-99.",
  },
  {
    label: "英美案例",
    input: "Chevron U.S.A.,Inc.v.Natural Resources Defense Council,Inc.,467 U.S.837(1984).",
    expected: "Chevron U.S.A., Inc. v. Natural Resources Defense Council, Inc., 467 U.S.837 (1984).",
  },
  {
    label: "日文图书",
    input: "我妻栄『新訂担保物権法(民法講義Ⅲ)』(有斐閣, 1971年)50頁。",
    expected: "我妻栄『新訂担保物権法(民法講義Ⅲ)』(有斐閣, 1971年)50頁。",
  },
  {
    label: "日文编著析出文章",
    input: "佐藤英明「一時所得の要件に関する覚書」金子宏ほか编『租税法と市場』(有斐閣,2014年)220頁。",
    expected: "佐藤英明「一時所得の要件に関する覚書」金子宏ほか编『租税法と市場』(有斐閣,2014年)220頁。",
    expectedDocType: "japanese_article",
  },
];

const failures = [];

for (const testCase of cases) {
  const result = formatCitationByRules(testCase.input, "legal");
  if (result.text !== testCase.expected) {
    failures.push({
      label: testCase.label,
      expected: testCase.expected,
      actual: result.text,
    });
  }
  if (testCase.expectedDocType && result.docType !== testCase.expectedDocType) {
    failures.push({
      label: `${testCase.label} 文献类型`,
      expected: testCase.expectedDocType,
      actual: result.docType,
    });
  }
}

if (failures.length) {
  console.error(`共 ${failures.length} 条样例未通过:`);
  for (const failure of failures) {
    console.error(`\n[${failure.label}]`);
    console.error(`expected: ${failure.expected}`);
    console.error(`actual  : ${failure.actual}`);
  }
  process.exit(1);
}

console.log(`全部 ${cases.length} 条样例通过。`);
