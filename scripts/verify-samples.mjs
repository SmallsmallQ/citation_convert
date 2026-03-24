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
    label: "文集文章",
    input: "王保树：《股份有限公司机关构造中的董事和董事会》,载梁慧星主编：《民商法论丛》第1卷，法律出版社1994年版，第110页。",
    expected: "王保树：《股份有限公司机关构造中的董事和董事会》，载梁慧星主编：《民商法论丛》第1卷，法律出版社1994年版，第110页。",
  },
  {
    label: "网络文献",
    input: "梁秋坪、郝萍：《全国打击治理农村赌博工作现场会召开》,载人民网2024年10月12日，http://society.people.com.cn/n1/2024/1012/c1008-40337761.html。",
    expected: "梁秋坪、郝萍：《全国打击治理农村赌博工作现场会召开》，载人民网2024年10月12日，http://society.people.com.cn/n1/2024/1012/c1008-40337761.html。",
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
    label: "裁判文书顺序",
    input: "包郑照等诉苍南县人民政府强制拆除房屋案，浙江省高级人民法院民事判决书，(1988)浙法民上字7号。",
    expected: "包郑照等诉苍南县人民政府强制拆除房屋案，浙江省高级人民法院(1988)浙法民上字7号民事判决书。",
  },
  {
    label: "英文期刊文章",
    input: "Charles A.Reich,The New Property,73 Yale Law Journal 733,737-738(1964).",
    expected: "Charles A. Reich, *The New Property*, 73 Yale Law Journal 733, 737-738 (1964).",
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
