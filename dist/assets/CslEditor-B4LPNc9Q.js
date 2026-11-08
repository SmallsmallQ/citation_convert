import{r as v,R as t,A as z,C as E}from"./index-DFq3h_kl.js";import{C as k}from"./citeproc-CFGJg-h8.js";const A=`<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" class="note" version="1.0" initialize-with=". " demote-non-dropping-particle="sort-only" default-locale="en-US" default-locale-sort="zh-CN">
  <info>
    <title>法学引注手册（第二版，多语言，重复引用不省略，标注页码）</title>
    <id>https://zotero-chinese.com/styles/法学引注手册（第二版，多语言，重复引用不省略，标注页码）</id>
    <link href="https://zotero-chinese.com/styles/法学引注手册（第二版，多语言，重复引用不省略，标注页码）" rel="self"/>
    <link href="http://www.zotero.org/styles/bluebook-law-review" rel="template"/>
    <link href="http://www.law-lib.com/shopping/shopview_p.asp?id=100480" rel="documentation"/>
    <author>
      <name>Zeping Lee</name>
      <email>zepinglee@gmail.com</email>
    </author>
    <category citation-format="note"/>
    <category field="law"/>
    <summary>1. 文献的语言默认为英语，其他语言的文献需要在 \`language\` 字段填写对应的语言代码。2. 各类文献的字段信息填写方式可以参考 Zotero 群组“Chinese CSL development”的“法学引注手册”分类，其中录入了《手册》的示例文献。3. 最高人民法院发布的指导性案例，需要连同“案例编号”、”发布时间”（注意区别于”裁判时间”）分别在填写在 \`Extra\` 中的 \`Series\`, \`Series Number\` 和 \`available-date\` 字段。4. 《最高人民法院公报》上的案例，发布时间和期号需要分别填写在 \`Extra\` 的 \`available-date\` 和 \`Issue\` 字段。5. 司法案例的裁判文书名称需要填写在 \`Extra\` 的 \`Genre\` 字段，比如 \`Genre: 行政判决书\`。6. 英国案例和法文文献的支持尚不完善，需要测试反馈。7. 德文的“法律评注”使用 book section 文献类型，并将标题留空。8. 德文的“祝贺文集“与“纪念文集”使用 book section 文献类型，但需要将书名填在 \`Series\` 字段。</summary>
    <updated>2026-03-07T17:45:12+08:00</updated>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
  </info>
  <locale xml:lang="de">
    <date form="text" delimiter=" ">
      <date-part name="day" form="ordinal"/>
      <date-part name="month"/>
      <date-part name="year"/>
    </date>
  </locale>
  <locale xml:lang="en">
    <date form="text" delimiter=" ">
      <date-part name="day"/>
      <date-part name="month"/>
      <date-part name="year"/>
    </date>
    <terms>
      <term name="accessed">last visited</term>
      <term name="page" form="short">p.</term>
    </terms>
  </locale>
  <locale xml:lang="fr">
    <date form="text" delimiter=" ">
      <date-part name="day"/>
      <date-part name="month"/>
      <date-part name="year"/>
    </date>
    <terms>
      <term name="page" form="short">p.</term>
    </terms>
  </locale>
  <locale xml:lang="ja">
    <terms>
      <term name="accessed">访问于</term>
      <term name="issue" form="short">号</term>
      <term name="page" form="short">頁</term>
      <term name="volume" form="short">巻</term>
    </terms>
  </locale>
  <locale xml:lang="zh">
    <date form="text">
      <date-part name="year" suffix="年" range-delimiter="&#8212;"/>
      <date-part name="month" form="numeric" suffix="月" range-delimiter="&#8212;"/>
      <date-part name="day" suffix="日" range-delimiter="&#8212;"/>
    </date>
    <terms>
      <term name="article-locator" form="short">条</term>  <!-- 《宪法》第十八条翻译为“Article 18” -->
      <term name="book" form="short">编</term>  <!-- 《民法典》第一编翻译为“Book One” -->
      <term name="accessed">访问</term>
      <term name="edition" form="short">版</term>
      <term name="compiler" form="short">汇编</term>
      <term name="editor" form="short">主编</term>
      <term name="ibid">同上注</term>
      <term name="in">载</term>
      <term name="op-cit">同前注</term>
      <term name="page" form="short">页</term>
      <term name="paragraph" form="short">款</term>
      <term name="rule" form="short">条</term>
      <term name="section" form="short">条</term>
      <term name="open-quote">“</term>
      <term name="close-quote">”</term>
      <term name="open-inner-quote">‘</term>
      <term name="close-inner-quote">’</term>
    </terms>
  </locale>
  <locale>
    <style-options punctuation-in-quote="false"/>
    <terms>
      <term name="page-range-delimiter">-</term>
    </terms>
  </locale>
  <macro name="author-de">
    <names variable="author">
      <!-- 两人或三人合作的，用“/”连接。三人以上合作的，仅写第一作者，余下 用“u. a.”。 -->
      <name et-al-min="4" et-al-use-first="1" initialize="false" delimiter="/"/>
      <label form="short" prefix=" (" suffix=")"/>
      <substitute>
        <names variable="editor"/>
        <names variable="compiler"/>
      </substitute>
    </names>
  </macro>
  <macro name="author-en">
    <names variable="author">
      <!-- 英文引注体例：四人以上的，可以只写第一作者，余下用 et al.。 -->
      <name et-al-min="4" et-al-use-first="1" initialize="false" and="symbol" delimiter=", " delimiter-precedes-last="never"/>
      <label form="short" prefix=" "/>
      <substitute>
        <names variable="editor"/>
        <names variable="compiler"/>
      </substitute>
    </names>
  </macro>
  <macro name="author-fr">
    <names variable="author">
      <name et-al-min="4" et-al-use-first="1" initialize="false" and="symbol" delimiter=", " delimiter-precedes-last="never"/>
      <label form="short" prefix=" "/>
      <substitute>
        <names variable="editor"/>
        <names variable="compiler"/>
      </substitute>
    </names>
  </macro>
  <macro name="author-ja">
    <names variable="author">
      <name delimiter="="/>
      <label form="short"/>
      <substitute>
        <names variable="editor"/>
        <names variable="compiler"/>
      </substitute>
    </names>
  </macro>
  <macro name="author-zh">
    <text variable="nationality" prefix="［" suffix="］"/>
    <text variable="dynasty" prefix="（" suffix="）"/>
    <names variable="author">
      <name delimiter="、" delimiter-precedes-et-al="never"/>
      <label form="short"/>
      <substitute>
        <!-- 文献主要作者（包括文献的原创者及主编、汇编者等) -->
        <choose>
          <if variable="container-title" match="none">
            <names variable="editor"/>
          </if>
        </choose>
        <choose>
          <if variable="container-title" match="none">
            <names variable="compiler"/>
          </if>
        </choose>
        <names variable="host"/>
      </substitute>
    </names>
  </macro>
  <macro name="access-de">
    <group delimiter=". ">
      <text variable="URL"/>
      <!-- 上传或者访问日期 -->
      <choose>
        <if variable="issued">
          <text macro="issuance-de" prefix="(" suffix=")"/>
        </if>
        <else>
          <group delimiter=" " prefix="(" suffix=")">
            <text term="retrieved"/>
            <text value="am"/>
            <date variable="accessed" form="text"/>
          </group>
        </else>
      </choose>
    </group>
  </macro>
  <macro name="access-en">
    <choose>
      <if variable="URL">
        <group delimiter=" ">
          <text variable="URL"/>
          <choose>
            <if variable="issued" match="none">
              <group prefix="(" suffix=")">
                <text term="accessed" suffix=" "/>
                <date variable="accessed">
                  <date-part name="month" form="short" suffix=" "/>
                  <date-part name="day" suffix=", "/>
                  <date-part name="year"/>
                </date>
              </group>
            </if>
          </choose>
        </group>
      </if>
    </choose>
  </macro>
  <macro name="access-fr">
    <group delimiter=". ">
      <group prefix="[" suffix="]">
        <text term="online" text-case="capitalize-first" suffix=": "/>
        <text variable="URL"/>
      </group>
      <choose>
        <!-- 原则上标注上传日期;若无法获知上传日期，则标注访问日期。 -->
        <if variable="issued">
          <text macro="issuance-fr"/>
        </if>
        <else>
          <group>
            <text term="accessed" text-case="capitalize-first" suffix=" "/>
            <date variable="accessed" form="text"/>
          </group>
        </else>
      </choose>
    </group>
  </macro>
  <macro name="access-ja">
    <choose>
      <!-- 一般不要求注明“访问日期”。网页没有显示上传日期的，引用时可以标注最后访问日期 -->
      <if variable="issued">
        <text macro="issuance-ja" prefix="（" suffix="）"/>
      </if>
      <else>
        <group prefix="（" suffix="）">
          <text term="accessed"/>
          <date variable="accessed" form="text"/>
        </group>
      </else>
    </choose>
    <text variable="URL"/>
  </macro>
  <macro name="access-zh">
    <choose>
      <if variable="URL">
        <group delimiter="，">
          <text variable="URL"/>
          <choose>
            <!-- 一般不要求注明“访问日期”。网页没有显示上传日期的，引用时可以标注最后访问日期 -->
            <if variable="issued" match="none">
              <group>
                <date variable="accessed" form="text"/>
                <text term="accessed"/>
              </group>
            </if>
          </choose>
        </group>
      </if>
    </choose>
  </macro>
  <macro name="source-de">
    <group delimiter=", ">
      <text macro="author-de"/>
      <choose>
        <!-- 91. 德文学术文献 -->
        <if type="article-journal">
          <group delimiter=", ">
            <text variable="title"/>
            <group delimiter=" ">
              <choose>
                <!-- 若仅有期刊年份，直接标注在期刊名称之后。 -->
                <!-- 若同时有期刊卷册数和年份，则将卷册数标注在期刊名称之后，随后再以括号标记年份。 -->
                <if variable="volume">
                  <text macro="container-de"/>
                  <text variable="volume"/>
                  <text macro="issuance-de" prefix="(" suffix=")"/>
                </if>
                <else>
                  <text macro="container-de"/>
                  <text macro="issuance-de"/>
                </else>
              </choose>
            </group>
            <text macro="locator-de"/>
          </group>
        </if>
        <!-- 2) 报纸杂志文章 -->
        <else-if type="article-magazine article-newspaper" match="any">
          <group delimiter=", ">
            <text variable="title"/>
            <group delimiter=": ">
              <text term="in"/>
              <group delimiter=" ">
                <text macro="container-de"/>
                <text value="v."/>
                <text macro="issuance-de"/>
              </group>
            </group>
            <text macro="locator-de"/>
          </group>
        </else-if>
        <!-- 3) 专著与教科书 -->
        <else-if type="book thesis" match="any">
          <group delimiter=", ">
            <text variable="title"/>
            <text macro="volume-de"/>
            <group delimiter=" ">
              <text macro="edition-de"/>
              <text macro="issuance-de"/>
            </group>
            <text macro="locator-de"/>
          </group>
        </else-if>
        <else-if type="chapter paper-conference" match="any">
          <choose>
            <!-- 4) 法律评注 和 5) 集合作品中的文章 -->
            <if variable="container-title">
              <text variable="title"/>
              <text macro="container-de"/>
              <group delimiter=" ">
                <text macro="edition-de"/>
                <text macro="issuance-de"/>
              </group>
              <text macro="locator-de"/>
            </if>
            <!-- 6) 祝贺文集与纪念文集 -->
            <else-if variable="collection-title">
              <text variable="title"/>
              <text variable="collection-title"/>
              <group delimiter=" ">
                <text macro="edition-de"/>
                <text macro="issuance-de"/>
              </group>
              <text macro="locator-de"/>
            </else-if>
          </choose>
        </else-if>
        <!-- 92. 德文法规 -->
        <else-if type="legislation">
          <group delimiter=" ">
            <choose>
              <if variable="locator">
                <text macro="locator-de"/>
              </if>
              <else>
                <text macro="section-en"/>
              </else>
            </choose>
            <choose>
              <if variable="container-title">
                <text variable="container-title"/>
              </if>
              <else>
                <text variable="title"/>
              </else>
            </choose>
          </group>
        </else-if>
        <!-- 93. 德文案例 -->
        <else-if type="legal_case">
          <group delimiter=", ">
            <group delimiter=" ">
              <text variable="authority"/>
              <text variable="container-title"/>
              <choose>
                <!-- 引用载于期刊的判决时，标明做出判决的法院、所载 期刊的名称和年份 -->
                <if variable="issued">
                  <text macro="issuance-de"/>
                </if>
                <!-- 引用判例集中的判决时，标出判例集的名称、卷号 -->
                <else>
                  <text variable="volume"/>
                </else>
              </choose>
            </group>
            <group delimiter=" ">
              <text variable="page-first"/>
              <text variable="locator" prefix="(" suffix=")"/>
            </group>
          </group>
        </else-if>
        <!-- 85. 英文网络文章 -->
        <else>
          <group delimiter=", ">
            <text macro="title-de"/>
            <text macro="access-de"/>
          </group>
        </else>
      </choose>
    </group>
  </macro>
  <!-- 英文引注体例参照 bluebook-law-review 改写 -->
  <macro name="source-en">
    <group delimiter=", ">
      <text macro="author-en"/>
      <choose>
        <!-- 78. 英文学术期刊 -->
        <if type="article-journal">
          <group delimiter=", ">
            <text macro="title-en"/>
            <group delimiter=" ">
              <text macro="container-en"/>
              <group delimiter=", ">
                <text variable="page-first"/>
                <text macro="locator-en"/>
              </group>
              <text macro="issuance-en" prefix="(" suffix=")"/>
            </group>
          </group>
        </if>
        <!-- 79. 英文报纸杂志文章 -->
        <else-if type="article-magazine article-newspaper" match="any">
          <group delimiter=", ">
            <text macro="title-en"/>
            <text macro="container-en"/>
            <text macro="issuance-en"/>
            <text macro="locator-or-page-en"/>
          </group>
        </else-if>
        <!-- 80. 英文书籍 -->
        <else-if type="book thesis" match="any">
          <group delimiter=", ">
            <text macro="title-en"/>
            <text macro="secondary-contributors-en"/>
            <text variable="publisher"/>
            <text macro="issuance-en"/>
            <text macro="locator-en"/>
          </group>
        </else-if>
        <!-- 81. 英文集合作品中的文章 -->
        <else-if type="chapter paper-conference" match="any">
          <text macro="title-en"/>
          <text macro="container-en"/>
          <text variable="publisher"/>
          <text macro="issuance-en"/>
          <text macro="locator-en"/>
        </else-if>
        <!-- 82. 美国联邦法规 -->
        <else-if type="legislation">
          <group delimiter=" ">
            <choose>
              <if variable="number">
                <!-- Department of Transportation Act, Pub. L. No. 89-670, § 9, 80 Stat. -->
                <group delimiter=", ">
                  <text macro="title-en"/>
                  <group delimiter=" ">
                    <text value="Pub. L. No."/>
                    <text variable="number"/>
                  </group>
                  <text macro="section-en"/>
                  <text macro="container-en"/>
                </group>
              </if>
              <else>
                <!-- Administrative Procedure Act § 6, 5 U.S.C. -->
                <group delimiter=", ">
                  <text macro="title-en"/>
                  <group delimiter=" ">
                    <text macro="container-en"/>
                    <text macro="section-en"/>
                  </group>
                </group>
              </else>
            </choose>
            <text variable="page"/>
            <text macro="locator-en"/>
            <text macro="issuance-en" prefix="(" suffix=")"/>
          </group>
        </else-if>
        <!-- 83. 美国法院案例 -->
        <else-if type="legal_case">
          <group delimiter=" ">
            <group delimiter=", ">
              <text macro="title-en"/>
              <group delimiter=" ">
                <text value="No."/>
                <text variable="number"/>
              </group>
              <text variable="volume"/>
            </group>
            <text macro="container-en"/>
            <group delimiter=", ">
              <text variable="page"/>
              <text variable="locator"/>
            </group>
            <group delimiter=" " prefix="(" suffix=")">
              <text variable="authority"/>
              <text macro="issuance-en"/>
            </group>
          </group>
        </else-if>
        <!-- 85. 英文网络文章 -->
        <else-if type="post post-weblog webpage" match="any">
          <group delimiter=", ">
            <text macro="title-en"/>
            <group delimiter=" ">
              <text macro="container-en"/>
              <text macro="issuance-en" prefix="(" suffix=")"/>
            </group>
            <text macro="access-en"/>
          </group>
        </else-if>
        <else>
          <text macro="title-en"/>
          <text macro="container-en"/>
          <text variable="publisher"/>
          <text macro="issuance-en"/>
          <text macro="locator-en"/>
        </else>
      </choose>
    </group>
  </macro>
  <!-- 法文引注体例 -->
  <macro name="source-fr">
    <group delimiter=", ">
      <text macro="author-fr"/>
      <choose>
        <!-- 86. 法文学术文献 -->
        <if type="book">
          <text macro="title-fr"/>
          <text variable="publisher"/>
          <text macro="edition-fr"/>
          <text variable="publisher-place"/>
          <text macro="issuance-fr"/>
          <text macro="locator-fr"/>
        </if>
        <else-if type="article-journal article-magazine article-newspaper" match="any">
          <text macro="title-fr"/>
          <text macro="container-fr"/>
          <text macro="issuance-fr"/>
          <text macro="locator-or-page-fr"/>
        </else-if>
        <else-if type="chapter paper-conference" match="any">
          <text macro="title-fr"/>
          <text macro="container-fr"/>
          <text macro="issuance-fr"/>
          <text macro="locator-or-page-fr"/>
        </else-if>
        <else-if type="report">
          <text macro="title-fr"/>
          <text macro="container-fr"/>
          <choose>
            <if variable="publisher">
              <text variable="publisher"/>
            </if>
            <else>
              <text variable="genre"/>
            </else>
          </choose>
          <group>
            <text value="nᵒ "/>
            <text variable="number"/>
          </group>
          <text macro="issuance-fr"/>
          <text macro="locator-or-page-fr"/>
        </else-if>
        <else-if type="thesis">
          <text macro="title-fr"/>
          <group>
            <text value="Thèse de "/>
            <text variable="publisher"/>
          </group>
          <text macro="issuance-fr"/>
          <text macro="locator-fr"/>
        </else-if>
        <!-- 87. 法国法律 -->
        <else-if type="legislation">
          <group delimiter=" ">
            <choose>
              <if variable="number">
                <!-- Department of Transportation Act, Pub. L. No. 89-670, § 9, 80 Stat. -->
                <group delimiter=", ">
                  <text macro="title-en"/>
                  <group delimiter=" ">
                    <text value="Pub. L. No."/>
                    <text variable="number"/>
                  </group>
                  <text macro="container-en"/>
                </group>
              </if>
              <else>
                <!-- Administrative Procedure Act § 6, 5 U.S.C. -->
                <text macro="title-en"/>
                <text macro="container-en"/>
              </else>
            </choose>
            <text variable="page"/>
            <text macro="locator-fr"/>
            <text macro="issuance-en" prefix="(" suffix=")"/>
          </group>
        </else-if>
        <!-- 88. 法国法院判决 -->
        <else-if type="legal_case">
          <group delimiter=" ">
            <group delimiter=", ">
              <text macro="title-en"/>
              <group delimiter=" ">
                <text value="No."/>
                <text variable="number"/>
              </group>
              <text variable="volume"/>
            </group>
            <text macro="container-en"/>
            <group delimiter=", ">
              <text variable="page"/>
              <text variable="locator"/>
            </group>
            <group delimiter=" " prefix="(" suffix=")">
              <text variable="authority"/>
              <text macro="issuance-fr"/>
            </group>
          </group>
        </else-if>
        <!-- 89. 法文网络信息 -->
        <else-if type="post post-weblog webpage" match="any">
          <group delimiter=", ">
            <text macro="title-fr"/>
            <text macro="container-fr"/>
            <text macro="access-fr"/>
          </group>
        </else-if>
        <else>
          <group delimiter=", ">
            <text macro="title-fr"/>
            <text variable="publisher"/>
            <text macro="edition-fr"/>
            <text variable="publisher-place"/>
            <text macro="issuance-fr"/>
            <text macro="locator-fr"/>
          </group>
        </else>
      </choose>
    </group>
  </macro>
  <macro name="source-ja">
    <text macro="author-ja"/>
    <choose>
      <!-- 96. 日文学术文献 -->
      <if type="book thesis" match="any">
        <text macro="title-ja"/>
        <text macro="publisher-ja"/>
        <text macro="locator-ja"/>
      </if>
      <else-if type="article-journal article-magazine article-newspaper" match="any">
        <text macro="title-ja"/>
        <text macro="container-ja"/>
        <text macro="issuance-ja" prefix="（" suffix="）"/>
        <choose>
          <if type="article-journal">
            <text macro="locator-or-page-ja"/>
          </if>
        </choose>
      </else-if>
      <else-if type="chapter paper-conference" match="any">
        <text macro="title-ja"/>
        <text macro="container-ja"/>
        <text macro="publisher-ja"/>
        <text macro="locator-or-page-ja"/>
      </else-if>
      <!-- 97. 日文案例 -->
      <else-if type="legal_case">
        <group delimiter="，">
          <group>
            <text variable="authority"/>
            <text macro="issuance-ja"/>
            <text value="判決"/>
          </group>
          <group>
            <text variable="container-title"/>
            <text macro="volume-ja"/>
            <group>
              <text variable="number"/>
              <text term="issue" form="short"/>
            </group>
            <text macro="locator-or-page-ja"/>
          </group>
        </group>
      </else-if>
      <!-- 98. 日文法规 -->
      <else-if type="legislation">
        <choose>
          <if variable="title">
            <text variable="title"/>
          </if>
          <else>
            <text variable="container-title"/>
          </else>
        </choose>
        <choose>
          <if variable="locator">
            <text macro="locator-ja"/>
          </if>
          <else>
            <text macro="section-zh"/>
          </else>
        </choose>
      </else-if>
      <else-if type="post post-weblog webpage" match="any">
        <text macro="title-ja"/>
        <text macro="issuance-ja"/>
        <text macro="access-ja"/>
      </else-if>
      <else>
        <text macro="title-ja"/>
        <text variable="container-title"/>
        <text macro="publisher-ja"/>
        <text macro="locator-or-page-ja"/>
      </else>
    </choose>
  </macro>
  <macro name="source-zh">
    <choose>
      <if type="article-journal article-magazine" match="any">
        <group delimiter="：">
          <text macro="author-zh"/>
          <group delimiter="，">
            <text macro="title-zh"/>
            <text macro="secondary-contributors-zh"/>
            <text macro="container-zh"/>
            <text macro="locator-or-page-zh"/>
          </group>
        </group>
      </if>
      <else-if type="article-newspaper">
        <group delimiter="：">
          <text macro="author-zh"/>
          <group delimiter="，">
            <text macro="title-zh"/>
            <text macro="secondary-contributors-zh"/>
            <text macro="container-zh"/>
            <text macro="locator-or-page-zh"/>
          </group>
        </group>
      </else-if>
      <else-if type="chapter paper-conference" match="any">
        <group delimiter="：">
          <text macro="author-zh"/>
          <group delimiter="，">
            <text macro="title-zh"/>
            <text macro="secondary-contributors-zh"/>
            <text macro="container-zh"/>
            <text macro="publisher-zh"/>
            <text macro="locator-or-page-zh"/>
          </group>
        </group>
      </else-if>
      <else-if type="book thesis" match="any">
        <group delimiter="：">
          <text macro="author-zh"/>
          <group delimiter="，">
            <text macro="title-zh"/>
            <text macro="secondary-contributors-zh"/>
            <text macro="publisher-zh"/>
            <text macro="locator-zh"/>
          </group>
        </group>
      </else-if>
      <else-if type="broadcast">
        <group delimiter="：">
          <text macro="author-zh"/>
          <group delimiter="，">
            <text macro="title-zh"/>
            <text macro="container-zh"/>
            <text macro="access-zh"/>
          </group>
        </group>
      </else-if>
      <!-- 49. 引用个人博客、微信公众号 -->
      <else-if type="post post-weblog webpage" match="any">
        <group delimiter="：">
          <text macro="author-zh"/>
          <group delimiter="，">
            <text macro="title-zh"/>
            <text macro="container-zh"/>
            <text macro="access-zh"/>
          </group>
        </group>
      </else-if>
      <!-- (四)引用法律文件 -->
      <else-if type="legislation treaty" match="any">
        <group delimiter="，">
          <group>
            <text macro="title-zh"/>
            <choose>
              <!-- 优先使用 locator 的条文序号 -->
              <if variable="locator">
                <text macro="locator-zh"/>
              </if>
              <else-if variable="section">
                <text macro="section-zh"/>
              </else-if>
            </choose>
          </group>
          <choose>
            <if variable="chapter-number">
              <!-- 63.2) 引用全国人大及其常委会通过的法律性质的决定 -->
              <group>
                <text macro="issuance-zh"/>
                <text variable="chapter-number"/>
                <text value="通过"/>
              </group>
            </if>
          </choose>
        </group>
      </else-if>
      <else-if type="regulation">
        <!-- 63.3) 援引法规、规章的条文；64. 引用规范性文件 -->
        <group delimiter="，">
          <text macro="title-zh"/>
          <choose>
            <if variable="section locator" match="none">
              <text variable="number"/>
            </if>
          </choose>
          <choose>
            <if variable="chapter-number">
              <!-- 67. 引用官方会议决议 -->
              <group>
                <text macro="issuance-zh"/>
                <text variable="chapter-number"/>
                <text value="通过"/>
              </group>
            </if>
            <else-if variable="number" match="none">
              <!-- 必要时，进一步标明发布日期 -->
              <!-- 比如：无文件号（<https://github.com/redleafnew/Chinese-STD-GB-T-7714-related-csl/issues/210>） -->
              <group>
                <text macro="issuance-zh"/>
                <text value="发布"/>
              </group>
            </else-if>
          </choose>
          <choose>
            <!-- 优先使用 locator 的条文序号 -->
            <if variable="locator">
              <text macro="locator-zh"/>
            </if>
            <else-if variable="section">
              <text macro="section-zh"/>
            </else-if>
          </choose>
        </group>
      </else-if>
      <else-if type="report">
        <group delimiter="：">
          <text macro="author-zh"/>
          <group delimiter="，">
            <text macro="title-zh"/>
            <group>
              <text macro="issuance-zh"/>
              <choose>
                <if variable="event-title">
                  <!-- 63.2) 引用全国人大及其常委会通过的法律性质的决定 -->
                  <group>
                    <text value="在"/>
                    <text variable="event-title"/>
                    <text value="上"/>
                  </group>
                </if>
              </choose>
            </group>
          </group>
        </group>
      </else-if>
      <!-- 65. 引用国家标准 -->
      <else-if type="standard">
        <group>
          <text macro="author-zh"/>
          <group delimiter="，">
            <text macro="title-zh"/>
            <text variable="number"/>
          </group>
        </group>
      </else-if>
      <!-- (五)引用司法案例 -->
      <else-if type="legal_case">
        <group delimiter="，">
          <text macro="title-zh"/>
          <choose>
            <if variable="collection-title">
              <!-- 指导性案例 -->
              <group>
                <text macro="container-zh"/>
                <text macro="issuance-zh" prefix="（" suffix="）"/>
              </group>
            </if>
            <else-if variable="container-title">
              <!-- 《最高人民法院公报》上的案例 -->
              <text macro="container-zh"/>
            </else-if>
            <else-if variable="archive">
              <!-- 引用“人民法院案例库”中的案例 -->
              <group>
                <text variable="archive"/>
                <text variable="archive_location"/>
              </group>
            </else-if>
            <else>
              <group>
                <text macro="container-zh"/>
                <!-- <text macro="issuance-zh"/> -->
              </group>
            </else>
          </choose>
        </group>
      </else-if>
      <else-if type="interview">
        <group delimiter="，">
          <text macro="title-zh"/>
          <text macro="issuance-zh"/>
          <text variable="publisher-place"/>
        </group>
      </else-if>
      <else-if type="personal_communication">
        <group delimiter="，">
          <text macro="title-zh"/>
          <text macro="issuance-zh"/>
        </group>
      </else-if>
      <else-if type="event speech" match="any">
        <group delimiter="：">
          <text macro="author-zh"/>
          <group delimiter="，">
            <text macro="title-zh"/>
            <text macro="issuance-zh"/>
            <text variable="publisher-place"/>
          </group>
        </group>
      </else-if>
      <else-if type="manuscript" variable="archive" match="any">
        <group delimiter="：">
          <text macro="author-zh"/>
          <group delimiter="，">
            <group>
              <text macro="title-zh"/>
              <text macro="issuance-zh" prefix="（" suffix="）"/>
            </group>
            <group>
              <text variable="archive"/>
              <text variable="archive_collection"/>
            </group>
            <group>
              <text value="档案号"/>
              <text variable="archive_location"/>
            </group>
          </group>
        </group>
      </else-if>
      <else>
        <group delimiter="：">
          <text macro="author-zh"/>
          <group delimiter="，">
            <text macro="title-zh"/>
            <text macro="container-zh"/>
            <text macro="publisher-zh"/>
            <text macro="locator-zh"/>
          </group>
        </group>
      </else>
    </choose>
  </macro>
  <macro name="title-de">
    <text variable="title"/>
  </macro>
  <macro name="title-en">
    <choose>
      <if type="legislation">
        <text variable="title" text-case="title"/>
      </if>
      <else-if type="legal_case">
        <text variable="title"/>
      </else-if>
      <else>
        <text variable="title" text-case="title" font-style="italic"/>
      </else>
    </choose>
  </macro>
  <macro name="title-fr">
    <choose>
      <if type="book report thesis" match="any">
        <text variable="title" font-style="italic"/>
      </if>
      <else-if type="article-journal article-magazine article-newspaper chapter paper-conference" match="any">
        <text variable="title" quotes="true"/>
      </else-if>
      <else-if type="post post-weblog webpage" match="any">
        <choose>
          <if variable="container-title">
            <text variable="title" quotes="true"/>
          </if>
          <else>
            <text variable="title"/>
          </else>
        </choose>
      </else-if>
      <else>
        <text variable="title"/>
      </else>
    </choose>
  </macro>
  <macro name="title-ja">
    <choose>
      <if type="book">
        <group prefix="『" suffix="』">
          <text variable="title"/>
          <group prefix="（" suffix="）">
            <text variable="collection-title"/>
            <number variable="collection-number" form="roman" text-case="uppercase"/>
          </group>
        </group>
      </if>
      <else>
        <text variable="title" prefix="「" suffix="」"/>
      </else>
    </choose>
  </macro>
  <macro name="title-zh">
    <choose>
      <if type="classic">
        <group delimiter="，">
          <text variable="title" prefix="《" suffix="》"/>
          <choose>
            <if variable="container-title" match="none">
              <group delimiter="">
                <text macro="volume-zh"/>
                <text variable="volume-title" prefix="《" suffix="》"/>
              </group>
            </if>
          </choose>
        </group>
      </if>
      <else-if type="webpage">
        <choose>
          <if variable="container-title">
            <text variable="title" prefix="《" suffix="》"/>
          </if>
          <else>
            <text variable="title"/>
          </else>
        </choose>
        <text macro="edition-zh" prefix="（" suffix="）"/>
      </else-if>
      <else-if type="interview">
        <choose>
          <if variable="title">
            <text variable="title"/>
          </if>
          <else>
            <names variable="interviewer">
              <name delimiter="、" delimiter-precedes-et-al="never"/>
            </names>
            <names variable="author" prefix="与">
              <name delimiter="、" delimiter-precedes-et-al="never"/>
            </names>
            <text variable="medium"/>
            <text term="interview"/>
          </else>
        </choose>
      </else-if>
      <else-if type="personal_communication">
        <names variable="author">
          <name delimiter="、" delimiter-precedes-et-al="never"/>
        </names>
        <names variable="recipient" prefix="给">
          <name delimiter="、" delimiter-precedes-et-al="never"/>
        </names>
        <text variable="medium" prefix="的"/>
      </else-if>
      <else-if type="event speech" match="any">
        <text variable="title"/>
      </else-if>
      <else-if type="legislation treaty" match="any">
        <text variable="title" form="short" prefix="《" suffix="》"/>
        <group prefix="（" suffix="）">
          <choose>
            <if variable="edition">
              <text macro="edition-zh"/>
            </if>
            <else-if variable="status">
              <text variable="status"/>
            </else-if>
          </choose>
        </group>
      </else-if>
      <else-if type="regulation">
        <text variable="title" form="short" prefix="《" suffix="》"/>
        <group prefix="（" suffix="）">
          <choose>
            <if variable="edition">
              <text macro="edition-zh"/>
            </if>
            <else-if variable="status">
              <text variable="status"/>
            </else-if>
            <else-if variable="section locator" match="any">
              <!-- 64.1 《最高人民法院关于适用〈中华人民共和国行政诉讼法〉的解释》(法释 〔2018〕1 号)，第 100 条。 -->
              <text variable="number"/>
            </else-if>
          </choose>
        </group>
      </else-if>
      <else-if type="legal_case">
        <text variable="title"/>
      </else-if>
      <else>
        <text variable="title" prefix="《" suffix="》"/>
        <choose>
          <if variable="container-title" type="chapter entry-dictionary entry-encyclopedia paper-conference" match="none">
            <group prefix="（" suffix="）">
              <text macro="edition-zh"/>
              <text macro="volume-zh"/>
            </group>
          </if>
        </choose>
      </else>
    </choose>
  </macro>
  <!-- 25（2）其他贡献者（包括文献的翻译者、勘校者等） -->
  <macro name="secondary-contributors-en">
    <names variable="translator" delimiter=", ">
      <label form="verb" suffix=" "/>
      <name initialize="false" and="symbol" delimiter=", " delimiter-precedes-last="never"/>
    </names>
  </macro>
  <macro name="secondary-contributors-zh">
    <names variable="translator" delimiter="，">
      <name delimiter="、" delimiter-precedes-et-al="never"/>
      <label form="short"/>
    </names>
  </macro>
  <macro name="edition-de">
    <choose>
      <if is-numeric="edition">
        <number variable="edition" form="ordinal"/>
        <label variable="edition" form="short" prefix=" "/>
      </if>
      <else>
        <text variable="edition"/>
      </else>
    </choose>
  </macro>
  <macro name="edition-fr">
    <choose>
      <if is-numeric="edition">
        <number variable="edition" form="ordinal"/>
        <label variable="edition" form="short" prefix=" "/>
      </if>
      <else>
        <text variable="edition"/>
      </else>
    </choose>
  </macro>
  <macro name="edition-zh">
    <choose>
      <if is-numeric="edition">
        <text value="第"/>
        <number variable="edition"/>
        <label variable="edition" form="short"/>
      </if>
      <else>
        <text variable="edition"/>
      </else>
    </choose>
  </macro>
  <macro name="editor-de">
    <names variable="editor">
      <name et-al-min="4" et-al-use-first="1" initialize="false" delimiter="/"/>
      <label form="short" prefix=" (" suffix=")"/>
    </names>
  </macro>
  <macro name="editor-en">
    <names variable="editor">
      <name et-al-min="5" et-al-use-first="1" initialize="true" and="symbol" delimiter=", " delimiter-precedes-last="never"/>
      <label form="short" prefix=" "/>
    </names>
  </macro>
  <macro name="editor-fr">
    <names variable="editor">
      <name initialize="true" and="symbol" delimiter=", " delimiter-precedes-last="never"/>
      <label form="short" prefix=" (" suffix=")"/>
      <substitute>
        <names variable="editorial-director"/>
      </substitute>
    </names>
  </macro>
  <macro name="editor-ja">
    <names variable="editor">
      <name et-al-min="3" et-al-use-first="1" delimiter="="/>
      <label form="short"/>
    </names>
  </macro>
  <macro name="editor-zh">
    <names variable="editor">
      <name delimiter="、" delimiter-precedes-et-al="never"/>
      <label form="short"/>
    </names>
  </macro>
  <macro name="container-de">
    <choose>
      <if type="article-journal article-magazine article-newspaper" match="any">
        <text variable="container-title" form="short"/>
      </if>
      <else-if type="chapter paper-conference" match="any">
        <group delimiter=": ">
          <text term="in"/>
          <group delimiter=", ">
            <text macro="editor-de"/>
            <text variable="container-title"/>
            <text macro="volume-de"/>
          </group>
        </group>
      </else-if>
      <else-if type="legislation">
        <group delimiter=" ">
          <text variable="volume"/>
          <text variable="container-title"/>
        </group>
      </else-if>
      <else>
        <text variable="container-title"/>
      </else>
    </choose>
  </macro>
  <macro name="container-en">
    <choose>
      <if type="article-journal article-magazine" match="any">
        <group delimiter=" ">
          <text variable="volume"/>
          <text variable="container-title" text-case="title"/>
        </group>
      </if>
      <else-if type="chapter paper-conference" match="any">
        <group delimiter=" ">
          <text term="in"/>
          <group delimiter=", ">
            <text macro="editor-en"/>
            <group delimiter=" ">
              <text variable="volume"/>
              <text variable="container-title" text-case="title"/>
            </group>
          </group>
        </group>
      </else-if>
      <else-if type="legislation">
        <group delimiter=" ">
          <text variable="volume"/>
          <text variable="container-title" text-case="title"/>
        </group>
      </else-if>
      <else>
        <text variable="container-title" text-case="title"/>
      </else>
    </choose>
  </macro>
  <macro name="container-fr">
    <choose>
      <if type="article-journal article-magazine" match="any">
        <group delimiter=", ">
          <text variable="container-title" form="short" font-style="italic"/>
          <text macro="issue-fr"/>
        </group>
      </if>
      <else-if type="chapter paper-conference" match="any">
        <group delimiter=" ">
          <text term="in"/>
          <group delimiter=", ">
            <text macro="editor-fr"/>
            <text variable="container-title" font-style="italic"/>
            <text macro="edition-fr"/>
          </group>
        </group>
      </else-if>
      <else>
        <text variable="container-title"/>
      </else>
    </choose>
  </macro>
  <macro name="container-ja">
    <choose>
      <if type="article-journal article-magazine article-newspaper" match="any">
        <text variable="container-title"/>
        <text macro="volume-ja"/>
        <text macro="issue-ja"/>
      </if>
      <else-if type="chapter paper-conference" match="any">
        <text macro="editor-ja"/>
        <text variable="container-title" prefix="『" suffix="』"/>
      </else-if>
      <else-if type="legal_case">
        <choose>
          <if variable="number">
            <!-- 指导性案例 -->
            <text variable="container-title"/>
          </if>
          <else>
            <!-- 《最高人民法院公报》 -->
            <text term="in"/>
            <text variable="container-title" prefix="《" suffix="》"/>
            <text macro="issuance-zh"/>
            <text macro="issue-zh"/>
          </else>
        </choose>
      </else-if>
      <else-if type="post post-weblog webpage" match="any">
        <!-- 2020 年版的网络文献和微信公众号文章的网站标题与上传日期之间均无逗号 -->
        <text term="in"/>
        <text variable="container-title"/>
        <text macro="issuance-zh"/>
      </else-if>
      <else>
        <text term="in"/>
        <text variable="container-title" prefix="《" suffix="》"/>
      </else>
    </choose>
  </macro>
  <macro name="container-zh">
    <choose>
      <if type="article-journal article-magazine" match="any">
        <text term="in"/>
        <text variable="container-title" prefix="《" suffix="》"/>
        <text macro="issuance-zh"/>
        <text macro="issue-zh"/>
        <choose>
          <if type="article-magazine" has-day="issued">
            <date variable="issued" form="text" prefix="（" suffix="）"/>
          </if>
        </choose>
      </if>
      <else-if type="article-newspaper">
        <text term="in"/>
        <text variable="container-title" prefix="《" suffix="》"/>
        <text macro="issuance-zh"/>
      </else-if>
      <else-if type="broadcast">
        <text variable="container-title"/>
        <text macro="issuance-zh" suffix="播出"/>
      </else-if>
      <else-if type="post webpage" match="any">
        <!-- 2020 年版的网络文献和微信公众号文章的网站标题与上传日期之间均无逗号 -->
        <text term="in"/>
        <text variable="container-title"/>
        <text macro="issuance-zh"/>
      </else-if>
      <else-if type="post-weblog">
        <!-- 49. 引用个人博客、微信公众号 -->
        <choose>
          <if variable="container-title">
            <text term="in"/>
            <choose>
              <if variable="genre">
                <text variable="genre"/>
                <text variable="container-title" quotes="true"/>
              </if>
              <else>
                <text variable="container-title"/>
              </else>
            </choose>
          </if>
        </choose>
        <text macro="issuance-zh"/>
      </else-if>
      <else-if type="legal_case">
        <choose>
          <if variable="collection-title">
            <!-- 指导性案例 -->
            <text variable="collection-title"/>
            <choose>
              <if is-numeric="collection-number">
                <number variable="collection-number"/>
                <text value="号"/>
              </if>
              <else>
                <text variable="collection-number"/>
              </else>
            </choose>
          </if>
          <else-if variable="container-title">
            <!-- 《最高人民法院公报》的案例 -->
            <text term="in"/>
            <text variable="container-title" prefix="《" suffix="》"/>
            <text macro="issuance-zh"/>
            <text macro="issue-zh"/>
          </else-if>
          <else>
            <text variable="authority"/>
            <text variable="number"/>
            <choose>
              <if variable="genre">
                <!-- 用户需要在 genre 中填写司法案例的文书名称，如“民事判决书”、“行政判决书” -->
                <text variable="genre"/>
              </if>
              <else>
                <text value="判决书"/>
              </else>
            </choose>
          </else>
        </choose>
      </else-if>
      <else-if type="chapter entry-dictionary entry-encyclopedia" variable="container-title" match="any">
        <text term="in"/>
        <group delimiter="：">
          <text macro="editor-zh"/>
          <text variable="container-title" prefix="《" suffix="》"/>
        </group>
        <choose>
          <if variable="edition">
            <group prefix="（" suffix="）">
              <text macro="edition-zh"/>
              <text macro="volume-zh"/>
            </group>
          </if>
          <else>
            <!-- 连续出版物的卷、辑，不加括号。 -->
            <text macro="volume-zh"/>
            <text macro="issue-zh"/>
          </else>
        </choose>
      </else-if>
      <else-if type="paper-conference">
        <group>
          <names variable="organizer">
            <name delimiter="、"/>
          </names>
          <text variable="event-title"/>
          <choose>
            <if variable="publisher event-place" match="any">
              <text term="paper-conference"/>
            </if>
            <else>
              <text macro="issuance-zh"/>
              <text term="paper-conference"/>
            </else>
          </choose>
        </group>
      </else-if>
      <else>
        <text term="in"/>
        <text variable="container-title" prefix="《" suffix="》"/>
      </else>
    </choose>
  </macro>
  <macro name="volume-de">
    <choose>
      <if is-numeric="volume">
        <label variable="volume" suffix=" "/>
        <number variable="volume" form="roman" text-case="uppercase"/>
      </if>
      <else>
        <text variable="volume"/>
      </else>
    </choose>
  </macro>
  <macro name="volume-ja">
    <choose>
      <if is-numeric="volume">
        <number variable="volume"/>
        <choose>
          <if type="legal_case">
            <choose>
              <if variable="number">
                <label variable="volume" form="short"/>
              </if>
              <else>
                <text value="輯"/>
              </else>
            </choose>
          </if>
          <else>
            <label variable="volume" form="short"/>
          </else>
        </choose>
      </if>
      <else>
        <text variable="volume"/>
      </else>
    </choose>
  </macro>
  <macro name="volume-zh">
    <choose>
      <if is-numeric="volume">
        <text value="第"/>
        <number variable="volume"/>
        <label variable="volume" form="short"/>
      </if>
      <else>
        <text variable="volume"/>
      </else>
    </choose>
  </macro>
  <macro name="issue-fr">
    <choose>
      <if is-numeric="issue">
        <label variable="issue" form="short" suffix=" "/>
        <number variable="issue"/>
      </if>
      <else>
        <text variable="issue"/>
      </else>
    </choose>
  </macro>
  <macro name="issue-ja">
    <choose>
      <if is-numeric="issue">
        <number variable="issue"/>
        <label variable="issue" form="short"/>
      </if>
      <else>
        <text variable="issue"/>
      </else>
    </choose>
  </macro>
  <macro name="issue-zh">
    <choose>
      <if is-numeric="issue">
        <text value="第"/>
        <number variable="issue"/>
        <choose>
          <if type="chapter paper-conference" match="any">
            <text value="辑"/>
          </if>
          <else>
            <label variable="issue" form="short"/>
          </else>
        </choose>
      </if>
      <else>
        <text variable="issue"/>
      </else>
    </choose>
  </macro>
  <!-- 条文序号 -->
  <macro name="section-en">
    <choose>
      <if is-numeric="section">
        <label variable="section" form="symbol" suffix=" "/>
        <text variable="section"/>
      </if>
      <else>
        <text variable="section"/>
      </else>
    </choose>
  </macro>
  <macro name="section-zh">
    <choose>
      <if is-numeric="section">
        <text value="第"/>
        <number variable="section"/>
        <label variable="section"/>
      </if>
      <else>
        <text variable="section"/>
      </else>
    </choose>
  </macro>
  <macro name="publisher-ja">
    <group delimiter="，" prefix="（" suffix="）">
      <text variable="publisher"/>
      <text macro="issuance-zh"/>
    </group>
  </macro>
  <macro name="publisher-zh">
    <choose>
      <if type="post webpage" match="any">
        <text variable="publisher"/>
        <text macro="issuance-zh"/>
      </if>
      <else-if type="paper-conference">
        <choose>
          <if variable="publisher">
            <text variable="publisher"/>
            <text macro="issuance-zh"/>
            <text term="edition" form="short"/>
          </if>
          <else-if variable="event-place">
            <text macro="issuance-zh"/>
            <choose>
              <if variable="event-place">
                <text term="at"/>
                <text variable="event-place"/>
              </if>
            </choose>
          </else-if>
        </choose>
      </else-if>
      <else>
        <text variable="publisher"/>
        <text macro="issuance-zh"/>
        <choose>
          <if type="thesis">
            <choose>
              <if variable="genre">
                <text variable="genre"/>
              </if>
              <else>
                <text value="博士学位论文"/>
              </else>
            </choose>
          </if>
          <else-if type="classic" variable="edition" match="all">
            <text macro="edition-zh"/>
          </else-if>
          <else>
            <text term="edition" form="short"/>
          </else>
        </choose>
      </else>
    </choose>
  </macro>
  <macro name="issuance-de">
    <choose>
      <if type="article-magazine article-newspaper" match="any">
        <date variable="issued" delimiter=" ">
          <date-part name="day" form="ordinal"/>
          <date-part name="month" form="numeric" suffix="."/>
          <date-part name="year"/>
        </date>
      </if>
      <else-if type="post post-weblog webpage" match="any">
        <date variable="issued" form="text"/>
      </else-if>
      <else>
        <date variable="issued">
          <date-part name="year"/>
        </date>
      </else>
    </choose>
  </macro>
  <macro name="issuance-en">
    <choose>
      <if type="article-magazine article-newspaper post post-weblog webpage" match="any">
        <date variable="issued" form="text"/>
      </if>
      <else>
        <date variable="issued">
          <date-part name="year"/>
        </date>
      </else>
    </choose>
  </macro>
  <macro name="issuance-fr">
    <choose>
      <if type="report">
        <date variable="issued" form="text" date-parts="year-month"/>
      </if>
      <else-if type="post post-weblog thesis webpage" match="any">
        <date variable="issued" form="text"/>
      </else-if>
      <else>
        <date variable="issued">
          <date-part name="year"/>
        </date>
      </else>
    </choose>
  </macro>
  <macro name="issuance-ja">
    <choose>
      <if type="legal_case post post-weblog webpage" match="any">
        <date variable="issued" form="text"/>
      </if>
      <else>
        <date variable="issued" form="text" date-parts="year"/>
      </else>
    </choose>
  </macro>
  <macro name="issuance-zh">
    <choose>
      <if type="legal_case">
        <choose>
          <if variable="collection-title container-title" match="any">
            <choose>
              <if variable="available-date">
                <date variable="available-date" form="text" date-parts="year"/>
              </if>
              <else>
                <date variable="issued" form="text" date-parts="year"/>
              </else>
            </choose>
          </if>
          <else>
            <date variable="issued" form="text"/>
          </else>
        </choose>
      </if>
      <else-if type="article-newspaper broadcast event interview legislation personal_communication post post-weblog regulation report speech webpage" match="any">
        <date variable="issued" form="text"/>
      </else-if>
      <else-if type="paper-conference" match="any">
        <choose>
          <if variable="container-title">
            <date variable="issued" form="text" date-parts="year"/>
          </if>
          <else>
            <date variable="issued" form="text"/>
          </else>
        </choose>
      </else-if>
      <else-if variable="archive">
        <date variable="issued" form="text"/>
      </else-if>
      <else>
        <date variable="issued" form="text" date-parts="year"/>
      </else>
    </choose>
  </macro>
  <macro name="locator-de">
    <choose>
      <if is-numeric="locator" locator="article-locator page section" match="any">
        <label variable="locator" form="symbol" suffix=" "/>
        <text variable="locator"/>
      </if>
      <else>
        <text variable="locator"/>
      </else>
    </choose>
  </macro>
  <macro name="locator-en">
    <choose>
      <if is-numeric="locator">
        <choose>
          <if type="article-journal">
            <!-- 采用期刊卷数和文章首页页码分别标注在期刊名称前后的，文章特定内容的页码前不加 p.，逗号后直接写页码。 -->
            <text variable="locator"/>
          </if>
          <else-if type="article-newspaper">
            <text term="at" suffix=" "/>
            <text variable="locator"/>
          </else-if>
          <else>
            <label variable="locator" form="short" suffix=" "/>
            <text variable="locator"/>
          </else>
        </choose>
      </if>
      <else>
        <text variable="locator"/>
      </else>
    </choose>
  </macro>
  <macro name="locator-fr">
    <choose>
      <if variable="locator">
        <choose>
          <if is-numeric="locator">
            <label variable="locator" form="short" suffix=" "/>
            <number variable="locator"/>
          </if>
          <else>
            <text variable="locator"/>
          </else>
        </choose>
      </if>
      <else-if variable="page">
        <choose>
          <if is-numeric="page">
            <label variable="page" form="short" suffix=" "/>
            <number variable="page"/>
          </if>
          <else>
            <text variable="page"/>
          </else>
        </choose>
      </else-if>
    </choose>
  </macro>
  <macro name="locator-ja">
    <choose>
      <if is-numeric="locator">
        <text variable="locator"/>
        <choose>
          <if locator="page" type="article-newspaper" match="all">
            <text value="版"/>
          </if>
          <else>
            <label variable="locator" form="short"/>
          </else>
        </choose>
      </if>
      <else>
        <text variable="locator"/>
      </else>
    </choose>
  </macro>
  <macro name="locator-zh">
    <choose>
      <if is-numeric="locator">
        <text value="第"/>
        <text variable="locator"/>
        <choose>
          <if locator="page" type="article-newspaper" match="all">
            <text value="版"/>
          </if>
          <else>
            <label variable="locator" form="short"/>
          </else>
        </choose>
      </if>
      <else>
        <text variable="locator"/>
      </else>
    </choose>
  </macro>
  <macro name="locator-or-page-en">
    <choose>
      <if variable="locator">
        <text macro="locator-en"/>
      </if>
      <else-if variable="page">
        <choose>
          <if type="article-newspaper">
            <text term="at" suffix=" "/>
            <text variable="page" form="short"/>
          </if>
          <else-if type="article-magazine">
            <label variable="page" form="short" suffix=" "/>
            <text variable="page"/>
          </else-if>
        </choose>
      </else-if>
    </choose>
  </macro>
  <macro name="locator-or-page-fr">
    <choose>
      <if variable="locator">
        <text macro="locator-fr"/>
      </if>
      <else-if is-numeric="page">
        <label variable="page" form="short" suffix=" "/>
        <text variable="page"/>
      </else-if>
      <else>
        <text variable="page"/>
      </else>
    </choose>
  </macro>
  <macro name="locator-or-page-ja">
    <choose>
      <if variable="locator">
        <text macro="locator-ja"/>
      </if>
      <else-if is-numeric="page">
        <text variable="page-first"/>
        <label variable="page" form="short"/>
      </else-if>
      <else>
        <text variable="page"/>
      </else>
    </choose>
  </macro>
  <!-- 报纸的出版信息，一般注明年、月、日;必要时，注明版次。 -->
  <macro name="locator-or-page-zh">
    <choose>
      <if variable="locator">
        <text macro="locator-zh"/>
      </if>
      <else-if is-numeric="page">
        <text value="第"/>
        <text variable="page"/>
        <choose>
          <if type="article-newspaper">
            <text value="版"/>
          </if>
          <else>
            <label variable="page" form="short"/>
          </else>
        </choose>
      </else-if>
      <else>
        <text variable="page"/>
      </else>
    </choose>
  </macro>
  <macro name="citation-layout-de">
    <text macro="source-de"/>
  </macro>
  <macro name="citation-layout-en">
    <text macro="source-en"/>
  </macro>
  <macro name="citation-layout-fr">
    <text macro="source-fr"/>
  </macro>
  <macro name="citation-layout-ja">
    <text macro="source-ja"/>
  </macro>
  <macro name="citation-layout-zh">
    <text macro="source-zh"/>
  </macro>
  <macro name="type-sort">
    <choose>
      <if type="book chapter classic report" match="any">
        <text value="1"/>
      </if>
      <else-if type="article-journal article-magazine article-newspaper" match="any">
        <text value="2"/>
      </else-if>
      <else-if type="broadcast motion_picture post post-weblog song webpage" match="any">
        <text value="3"/>
      </else-if>
      <else-if type="article event interview manuscript paper-conference personal_communication speech thesis" match="any">
        <text value="4"/>
      </else-if>
      <else-if type="legislation regulation treaty" match="any">
        <text value="5"/>
      </else-if>
      <else-if type="legal_case">
        <text value="6"/>
      </else-if>
      <else>
        <text value="7"/>
      </else>
    </choose>
  </macro>
  <macro name="citation-number">
    <text variable="citation-number" prefix="〔" suffix="〕"/>
  </macro>
  <!-- 作者人数为两人或者三人的，一一列明。 -->
  <!-- 作者人数众多，不便全部列明的，可以根据情况列 1-2 个，后面加“等”。 -->
  <citation et-al-min="4" et-al-use-first="2">
    <layout suffix="." delimiter="; " locale="de">
      <text macro="citation-layout-de"/>
    </layout>
    <layout suffix="." delimiter="; " locale="fr">
      <text macro="citation-layout-fr"/>
    </layout>
    <layout suffix="。" delimiter="；" locale="ja">
      <text macro="citation-layout-ja"/>
    </layout>
    <layout suffix="。" delimiter="；" locale="zh">
      <text macro="citation-layout-zh"/>
    </layout>
    <layout suffix="." delimiter="; ">
      <text macro="citation-layout-en"/>
    </layout>
  </citation>
  <bibliography second-field-align="flush" et-al-min="6" et-al-use-first="2">
    <sort>
      <key macro="type-sort"/>
      <key macro="author-en"/>
      <key variable="issued"/>
    </sort>
    <layout locale="de">
      <text macro="citation-number"/>
      <text macro="source-de" suffix="."/>
    </layout>
    <layout locale="fr">
      <text macro="citation-number"/>
      <text macro="source-fr" suffix="."/>
    </layout>
    <layout locale="ja">
      <text macro="citation-number"/>
      <text macro="source-ja" suffix="。"/>
    </layout>
    <layout locale="zh">
      <text macro="citation-number"/>
      <text macro="source-zh" suffix="。"/>
    </layout>
    <layout>
      <text macro="citation-number"/>
      <text macro="source-en" suffix="."/>
    </layout>
  </bibliography>
</style>
`,M=`<?xml version="1.0" encoding="utf-8"?>
<locale xmlns="http://purl.org/net/xbiblio/csl" version="1.0" xml:lang="en-US">
  <!-- The abbreviations in this file follow the recommendations of The Chicago Manual of Style, 18th ed. (2024), sec. 10.48 (cited hereafter as CMOS), unless stated otherwise. -->
  <!-- Additional abbreviations are from:
        1. Oxford Dictionary for Writers and Editors (2000), https://archive.org/details/oxfordstylemanua0000unse (cited hereafter as ODWE): reference has also been made to the New Oxford Dictionary for Writers and Editors (NODWE), but periods must be added to contractions in these later editions to reflect US English usage
        2. Oxford Dictionary of Abbreviations (2011), https://doi.org/10.1093/acref/9780199698295.001.0001 (cited hereafter as ODA)
  -->
  <info>
    <translator>
      <name>Andrew Dunning</name>
      <uri>https://orcid.org/0000-0003-0464-5036</uri>
    </translator>
    <translator>
      <name>Sebastian Karcher</name>
      <uri>https://orcid.org/0000-0001-8249-7388</uri>
    </translator>
    <translator>
      <name>Rintze M. Zelle</name>
      <uri>https://orcid.org/0000-0003-1779-8883</uri>
    </translator>
    <translator>
      <name>Denis Meier</name>
    </translator>
    <translator>
      <name>Brenton M. Wiernik</name>
      <uri>https://orcid.org/0000-0001-9560-6336</uri>
    </translator>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
    <updated>2026-01-10T00:00:00+00:00</updated>
  </info>
  <style-options punctuation-in-quote="true"/>
  <date form="text">
    <date-part name="month" suffix=" "/>
    <date-part name="day" suffix=", "/>
    <date-part name="year"/>
  </date>
  <date form="numeric">
    <date-part name="month" form="numeric-leading-zeros" suffix="/"/>
    <date-part name="day" form="numeric-leading-zeros" suffix="/"/>
    <date-part name="year"/>
  </date>
  <terms>
    <!-- LONG GENERAL TERMS -->
    <term name="accessed">accessed</term>
    <term name="advance-online-publication">advance online publication</term>
    <term name="album">album</term>
    <term name="and">and</term>
    <term name="and others">and others</term>
    <term name="anonymous">anonymous</term>
    <term name="at">at</term>
    <term name="audio-recording">audio recording</term>
    <term name="available at">available at</term>
    <term name="by">by</term>
    <term name="circa">circa</term>
    <term name="cited">cited</term>
    <term name="et-al">et al.</term>
    <term name="film">film</term>
    <term name="forthcoming">forthcoming</term>
    <term name="from">from</term>
    <term name="henceforth">henceforth</term>
    <term name="ibid">ibid.</term>
    <term name="in">in</term>
    <term name="in press">in press</term>
    <term name="internet">internet</term>
    <term name="letter">letter</term>
    <term name="loc-cit">loc. cit.</term> <!-- like ibid., the abbreviated form is the regular form  -->
    <term name="no date">no date</term>
    <term name="no-place">no place</term>
    <term name="no-publisher">no publisher</term>
    <term name="on">on</term>
    <term name="online">online</term>
    <term name="op-cit">op. cit.</term> <!-- like ibid., the abbreviated form is the regular form  -->
    <term name="original-work-published">original work published</term>
    <term name="personal-communication">personal communication</term>
    <term name="podcast">podcast</term>
    <term name="podcast-episode">podcast episode</term>
    <term name="preprint">preprint</term>
    <term name="presented at">presented at the</term>
    <term name="radio-broadcast">radio broadcast</term>
    <term name="radio-series">radio series</term>
    <term name="radio-series-episode">radio series episode</term>
    <term name="reference">
      <single>reference</single>
      <multiple>references</multiple>
    </term>
    <term name="retrieved">retrieved</term>
    <term name="review-of">review of</term>
    <term name="scale">scale</term>
    <term name="special-issue">special issue</term>
    <term name="special-section">special section</term>
    <term name="television-broadcast">television broadcast</term>
    <term name="television-series">television series</term>
    <term name="television-series-episode">television series episode</term>
    <term name="video">video</term>
    <term name="working-paper">working paper</term>

    <!-- SHORT GENERAL TERMS -->
    <!-- Omitted short forms: accessed, album, and (symbol), and others, at (symbol), forthcoming, henceforth, ibid, in, in press, internet, loc-cit, on, online, op-cit, podcast, preprint, presented at -->
    <term name="advance-online-publication" form="short">adv. online pub.</term> <!-- ODA -->
    <term name="anonymous" form="short">anon.</term>
    <term name="audio-recording" form="short">au. rec.</term> <!-- ODA -->
    <term name="available at" form="short">avail. at</term> <!-- ODA -->
    <term name="circa" form="short">c.</term>
    <!-- CMOS 10.48 recommends "ca." for "circa" but also allows "c.", which CSL has used historically -->
    <term name="cited" form="short">cit.</term> <!-- ODA -->
    <term name="film" form="short">flm.</term> <!-- ODA -->
    <term name="from" form="short">fr.</term>
    <term name="letter" form="short">let.</term> <!-- ODA -->
    <term name="no date" form="short">n.d.</term>
    <term name="no-place" form="short">n.p.</term>
    <term name="no-publisher" form="short">n.p.</term>
    <term name="original-work-published" form="short">orig. pub.</term> <!-- Oxford Guide to Style -->
    <term name="personal-communication" form="short">pers. comm.</term>
    <term name="podcast-episode" form="short">podcast ep.</term>
    <term name="radio-broadcast" form="short">radio bdcst.</term> <!-- ODA -->
    <term name="radio-series" form="short">radio ser.</term> <!-- ODA -->
    <term name="radio-series-episode" form="short">radio ser. ep.</term> <!-- ODA -->
    <term name="reference" form="short">
      <single>ref.</single>
      <multiple>refs.</multiple>
    </term>
    <term name="retrieved" form="short">rtvd.</term> <!-- ODA -->
    <term name="review-of" form="short">rev. of</term>
    <term name="scale" form="short">sc.</term> <!-- ODA -->
    <term name="special-issue" form="short">spec. iss.</term> <!-- ODA -->
    <term name="special-section" form="short">spec. sec.</term> <!-- ODA/CMOS -->
    <term name="television-broadcast" form="short">TV bdcst.</term> <!-- ODA -->
    <term name="television-series" form="short">TV ser.</term> <!-- ODA -->
    <term name="television-series-episode" form="short">TV ser. ep.</term> <!-- ODA -->
    <term name="video" form="short">vid.</term> <!-- ODA -->
    <term name="working-paper" form="short">wkg. paper</term> <!-- ODA -->

    <!-- SYMBOLIC GENERAL FORMS -->
    <term name="and" form="symbol">&amp;</term>
    <term name="at" form="symbol">@</term>

    <!-- LONG ITEM TYPE FORMS -->
    <term name="article">preprint</term>
    <term name="article-journal">journal article</term>
    <term name="article-magazine">magazine article</term>
    <term name="article-newspaper">newspaper article</term>
    <term name="bill">bill</term>
    <!-- book is in the list of locator terms -->
    <term name="broadcast">broadcast</term>
    <!-- chapter is in the list of locator terms -->
    <term name="classic">classical work</term>
    <term name="collection">archival collection</term>
    <term name="dataset">dataset</term>
    <term name="document">document</term>
    <term name="entry">entry</term>
    <term name="entry-dictionary">dictionary entry</term>
    <term name="entry-encyclopedia">encyclopedia entry</term>
    <term name="event">event</term>
    <!-- figure is in the list of locator terms -->
    <term name="graphic">graphic</term>
    <term name="hearing">hearing</term>
    <term name="interview">interview</term>
    <term name="legal_case">legal case</term>
    <term name="legislation">legislation</term>
    <term name="manuscript">manuscript</term>
    <term name="map">map</term>
    <term name="motion_picture">video recording</term>
    <term name="musical_score">musical score</term>
    <term name="pamphlet">pamphlet</term>
    <term name="paper-conference">conference paper</term>
    <term name="patent">patent</term>
    <term name="performance">performance</term>
    <term name="periodical">periodical</term>
    <term name="personal_communication">personal communication</term>
    <term name="post">post</term>
    <term name="post-weblog">blog post</term>
    <term name="regulation">regulation</term>
    <term name="report">report</term>
    <term name="review">review</term>
    <term name="review-book">book review</term>
    <term name="software">software</term>
    <term name="song">audio recording</term>
    <term name="speech">presentation</term>
    <term name="standard">standard</term>
    <term name="thesis">thesis</term>
    <term name="treaty">treaty</term>
    <term name="webpage">webpage</term>

    <!-- SHORT ITEM TYPE FORMS -->
    <!-- Omitted short forms: article, bill, entry, event, hearing, map, periodical, speech, treaty -->
    <term name="article-journal" form="short">jour. art.</term> <!-- ODWE -->
    <term name="article-magazine" form="short">mag. art.</term> <!-- ODWE -->
    <term name="article-newspaper" form="short">newspaper art.</term>
    <term name="broadcast" form="short">bdcst.</term> <!-- ODA -->
    <!-- book is in the list of locator terms -->
    <!-- chapter is in the list of locator terms -->
    <term name="classic" form="short">class. wk.</term> <!-- ODWE -->
    <term name="collection" form="short">arch. coll.</term> <!-- ODA -->
    <term name="document" form="short">doc.</term>
    <term name="entry-dictionary" form="short">dict. entry</term>
    <term name="entry-encyclopedia" form="short">ency. entry</term>
    <!-- figure is in the list of locator terms -->
    <term name="graphic" form="short">gr.</term> <!-- ODA -->
    <term name="interview" form="short">int.</term> <!-- ODA -->
    <term name="legal_case" form="short">leg. case</term> <!-- ODA -->
    <term name="legislation" form="short">legis.</term> <!-- ODA -->
    <term name="manuscript" form="short">
      <single>MS</single>
      <multiple>MSS</multiple>
    </term>
    <term name="motion_picture" form="short">vid. rec.</term> <!-- ODA -->
    <term name="musical_score" form="short">mus. score</term> <!-- ODWE -->
    <term name="pamphlet" form="short">pam.</term> <!-- ODWE -->
    <term name="paper-conference" form="short">conf. paper</term> <!-- ODA -->
    <term name="patent" form="short">pat.</term> <!-- ODWE -->
    <term name="performance" form="short">prfm.</term> <!-- ODA -->
    <term name="personal_communication" form="short">pers. comm.</term>
    <term name="regulation" form="short">reg.</term> <!-- ODA -->
    <term name="report" form="short">rep.</term> <!-- ODWE -->
    <term name="review" form="short">rev.</term>
    <term name="review-book" form="short">bk. rev.</term>
    <term name="software" form="short">sftw.</term> <!-- ODA -->
    <term name="song" form="short">au. rec.</term> <!-- ODA -->
    <term name="standard" form="short">std.</term> <!-- ODA -->
    <term name="thesis" form="short">thes.</term> <!-- ODA -->
    <term name="webpage" form="short">webpg.</term> <!-- ODA -->

    <!-- LONG VERB ITEM TYPE FORMS -->
    <!-- Only where applicable -->
    <term name="hearing" form="verb">testimony of</term>
    <term name="review" form="verb">review of</term>
    <term name="review-book" form="verb">review of the book</term>

    <!-- SHORT VERB ITEM TYPE FORMS -->
    <!-- Only where applicable -->
    <term name="hearing" form="verb-short">test. of</term> <!-- ODA -->
    <term name="review" form="verb-short">rev. of</term>
    <term name="review-book" form="verb-short">rev. of the bk.</term>

    <!-- HISTORICAL ERA TERMS -->
    <term name="ad"> AD</term>
    <term name="bc"> BC</term>
    <term name="bce"> BCE</term>
    <term name="ce"> CE</term>

    <!-- PUNCTUATION -->
    <term name="open-quote">“</term>
    <term name="close-quote">”</term>
    <term name="open-inner-quote">‘</term>
    <term name="close-inner-quote">’</term>
    <term name="page-range-delimiter">–</term>
    <term name="colon">:</term>
    <term name="comma">,</term>
    <term name="semicolon">;</term>

    <!-- ORDINALS -->
    <term name="ordinal">th</term>
    <term name="ordinal-01">st</term>
    <term name="ordinal-02">nd</term>
    <term name="ordinal-03">rd</term>
    <term name="ordinal-11">th</term>
    <term name="ordinal-12">th</term>
    <term name="ordinal-13">th</term>

    <!-- LONG ORDINALS -->
    <term name="long-ordinal-01">first</term>
    <term name="long-ordinal-02">second</term>
    <term name="long-ordinal-03">third</term>
    <term name="long-ordinal-04">fourth</term>
    <term name="long-ordinal-05">fifth</term>
    <term name="long-ordinal-06">sixth</term>
    <term name="long-ordinal-07">seventh</term>
    <term name="long-ordinal-08">eighth</term>
    <term name="long-ordinal-09">ninth</term>
    <term name="long-ordinal-10">tenth</term>

    <!-- LONG LOCATOR FORMS -->
    <term name="act">
      <single>act</single>
      <multiple>acts</multiple>
    </term>
    <term name="appendix">
      <single>appendix</single>
      <multiple>appendices</multiple>
    </term>
    <term name="article-locator">
      <single>article</single>
      <multiple>articles</multiple>
    </term>
    <term name="book">
      <single>book</single>
      <multiple>books</multiple>
    </term>
    <term name="canon">
      <single>canon</single>
      <multiple>canons</multiple>
    </term>
    <term name="chapter">
      <single>chapter</single>
      <multiple>chapters</multiple>
    </term>
    <term name="column">
      <single>column</single>
      <multiple>columns</multiple>
    </term>
    <term name="elocation">
      <single>location</single>
      <multiple>locations</multiple>
    </term>
    <term name="equation">
      <single>equation</single>
      <multiple>equations</multiple>
    </term>
    <term name="figure">
      <single>figure</single>
      <multiple>figures</multiple>
    </term>
    <term name="folio">
      <single>folio</single>
      <multiple>folios</multiple>
    </term>
    <term name="issue">
      <single>issue</single>
      <multiple>issues</multiple>
    </term>
    <term name="line">
      <single>line</single>
      <multiple>lines</multiple>
    </term>
    <term name="note">
      <single>note</single>
      <multiple>notes</multiple>
    </term>
    <term name="opus">
      <single>opus</single>
      <multiple>opera</multiple>
    </term>
    <term name="page">
      <single>page</single>
      <multiple>pages</multiple>
    </term>
    <term name="paragraph">
      <single>paragraph</single>
      <multiple>paragraphs</multiple>
    </term>
    <term name="part">
      <single>part</single>
      <multiple>parts</multiple>
    </term>
    <term name="rule">
      <single>rule</single>
      <multiple>rules</multiple>
    </term>
    <term name="scene">
      <single>scene</single>
      <multiple>scenes</multiple>
    </term>
    <term name="section">
      <single>section</single>
      <multiple>sections</multiple>
    </term>
    <term name="sub-verbo">
      <single>sub verbo</single>
      <multiple>sub verbis</multiple>
    </term>
    <term name="supplement">
      <single>supplement</single>
      <multiple>supplements</multiple>
    </term>
    <term name="table">
      <single>table</single>
      <multiple>tables</multiple>
    </term>
    <!-- A timestamp is a composite of hours, minutes, etc. and therefore has no default label. -->
    <term name="timestamp"/>
    <term name="title-locator">
      <single>title</single>
      <multiple>titles</multiple>
    </term>
    <term name="verse">
      <single>verse</single>
      <multiple>verses</multiple>
    </term>
    <term name="volume">
      <single>volume</single>
      <multiple>volumes</multiple>
    </term>

    <!-- SHORT LOCATOR FORMS -->
    <!-- Omitted short forms: act, timestamp -->
    <term name="appendix" form="short">
      <single>app.</single>
      <multiple>apps.</multiple>
    </term>
    <term name="article-locator" form="short">
      <single>art.</single>
      <multiple>arts.</multiple>
    </term>
    <term name="book" form="short">
      <single>bk.</single>
      <multiple>bks.</multiple>
    </term>
    <term name="canon" form="short">
      <!-- Oxford Dictionary for Writers and Editors -->
      <single>can.</single>
      <multiple>cann.</multiple>
    </term>
    <term name="chapter" form="short">
      <single>chap.</single>
      <multiple>chaps.</multiple>
    </term>
    <term name="column" form="short">
      <single>col.</single>
      <multiple>cols.</multiple>
    </term>
    <term name="elocation" form="short">
      <single>loc.</single>
      <multiple>locs.</multiple>
    </term>
    <term name="equation" form="short">
      <single>eq.</single>
      <multiple>eqq.</multiple>
    </term>
    <term name="figure" form="short">
      <single>fig.</single>
      <multiple>figs.</multiple>
    </term>
    <term name="folio" form="short">
      <single>fol.</single>
      <multiple>fols.</multiple>
    </term>
    <term name="issue" form="short">
      <single>no.</single>
      <multiple>nos.</multiple>
    </term>
    <term name="line" form="short">
      <single>l.</single>
      <multiple>ll.</multiple>
    </term>
    <term name="note" form="short">
      <single>n.</single>
      <multiple>nn.</multiple>
    </term>
    <term name="opus" form="short">
      <single>op.</single>
      <multiple>opp.</multiple>
    </term>
    <term name="page" form="short">
      <single>p.</single>
      <multiple>pp.</multiple>
    </term>
    <term name="paragraph" form="short">
      <single>para.</single>
      <multiple>paras.</multiple>
    </term>
    <term name="part" form="short">
      <single>pt.</single>
      <multiple>pts.</multiple>
    </term>
    <term name="rule" form="short">
      <!-- legal abbreviations in the Oxford Guide to Style, sec. 13.2.1 -->
      <single>r.</single>
      <multiple>rr.</multiple>
    </term>
    <term name="scene" form="short">
      <single>sc.</single>
      <multiple>scs.</multiple>
    </term>
    <term name="section" form="short">
      <single>sec.</single>
      <multiple>secs.</multiple>
    </term>
    <term name="sub-verbo" form="short">
      <single>s.v.</single>
      <multiple>s.vv.</multiple>
    </term>
    <term name="supplement" form="short">
      <single>supp.</single>
      <multiple>supps.</multiple>
    </term>
    <term name="table" form="short">
      <!-- Oxford Dictionary of Abbreviations -->
      <single>tbl.</single>
      <multiple>tbls.</multiple>
    </term>
    <term name="title-locator" form="short">
      <!-- Oxford Dictionary for Writers and Editors -->
      <single>tit.</single>
      <multiple>titt.</multiple>
    </term>
    <term name="verse" form="short">
      <single>v.</single>
      <multiple>vv.</multiple>
    </term>
    <term name="volume" form="short">
      <single>vol.</single>
      <multiple>vols.</multiple>
    </term>

    <!-- SYMBOLIC LOCATOR FORMS -->
    <term name="chapter" form="symbol">
      <!-- caput/capita, esp. in legal works; cf. CMOS 14.196 -->
      <single>c.</single>
      <multiple>cc.</multiple>
    </term>
    <term name="paragraph" form="symbol">
      <single>¶</single>
      <multiple>¶¶</multiple>
    </term>
    <term name="section" form="symbol">
      <single>§</single>
      <multiple>§§</multiple>
    </term>

    <!-- LONG NUMBER VARIABLE FORMS -->
    <term name="chapter-number">
      <single>chapter</single>
      <multiple>chapters</multiple>
    </term>
    <term name="citation-number">
      <single>citation</single>
      <multiple>citations</multiple>
    </term>
    <term name="collection-number">
      <single>number</single>
      <multiple>numbers</multiple>
    </term>
    <term name="edition">
      <single>edition</single>
      <multiple>editions</multiple>
    </term>
    <term name="first-reference-note-number">
      <single>note</single>
      <multiple>notes</multiple>
    </term>
    <term name="number">
      <single>number</single>
      <multiple>numbers</multiple>
    </term>
    <term name="number-of-pages">
      <single>page</single>
      <multiple>pages</multiple>
    </term>
    <term name="number-of-volumes">
      <single>volume</single>
      <multiple>volumes</multiple>
    </term>
    <term name="page-first">
      <single>page</single>
      <multiple>pages</multiple>
    </term>
    <term name="printing">
      <single>printing</single>
      <multiple>printings</multiple>
    </term>
    <term name="version">
      <single>version</single>
      <multiple>versions</multiple>
    </term>

    <!-- SHORT NUMBER VARIABLE FORMS -->
    <term name="chapter-number" form="short">
      <single>chap.</single>
      <multiple>chaps.</multiple>
    </term>
    <term name="citation-number" form="short">
      <single>cit.</single>
      <multiple>cits.</multiple>
    </term>
    <term name="collection-number" form="short">
      <single>no.</single>
      <multiple>nos.</multiple>
    </term>
    <term name="edition" form="short">
      <single>ed.</single>
      <multiple>eds.</multiple>
    </term>
    <term name="first-reference-note-number" form="short">
      <single>n.</single>
      <multiple>nn.</multiple>
    </term>
    <term name="number" form="short">
      <single>no.</single>
      <multiple>nos.</multiple>
    </term>
    <term name="number-of-pages" form="short">
      <single>p.</single>
      <multiple>pp.</multiple>
    </term>
    <term name="number-of-volumes" form="short">
      <single>vol.</single>
      <multiple>vols.</multiple>
    </term>
    <term name="page-first" form="short">
      <single>p.</single>
      <multiple>pp.</multiple>
    </term>
    <term name="printing" form="short">
      <!-- Oxford Dictionary for Writers and Editors -->
      <single>ptg.</single>
      <multiple>ptgs.</multiple>
    </term>
    <term name="version" form="short">v.</term> <!-- no plural -->

    <!-- LONG ROLE FORMS -->
    <term name="author"/> <!-- generally blank -->
    <term name="chair">
      <single>chair</single>
      <multiple>chairs</multiple>
    </term>
    <term name="collection-editor">
      <single>editor</single>
      <multiple>editors</multiple>
    </term>
    <term name="compiler">
      <single>compiler</single>
      <multiple>compilers</multiple>
    </term>
    <term name="composer"/> <!-- generally blank -->
    <term name="container-author"/> <!-- generally blank -->
    <term name="contributor">
      <single>contributor</single>
      <multiple>contributors</multiple>
    </term>
    <term name="curator">
      <single>curator</single>
      <multiple>curators</multiple>
    </term>
    <term name="director">
      <single>director</single>
      <multiple>directors</multiple>
    </term>
    <term name="editor">
      <single>editor</single>
      <multiple>editors</multiple>
    </term>
    <term name="editor-translator">
      <single>editor &amp; translator</single>
      <multiple>editors &amp; translators</multiple>
    </term>
    <term name="editortranslator">
      <single>editor &amp; translator</single>
      <multiple>editors &amp; translators</multiple>
    </term>
    <term name="editorial-director">
      <single>editor</single>
      <multiple>editors</multiple>
    </term>
    <term name="executive-producer">
      <single>executive producer</single>
      <multiple>executive producers</multiple>
    </term>
    <term name="guest">
      <single>guest</single>
      <multiple>guests</multiple>
    </term>
    <term name="host">
      <single>host</single>
      <multiple>hosts</multiple>
    </term>
    <term name="illustrator">
      <single>illustrator</single>
      <multiple>illustrators</multiple>
    </term>
    <term name="interviewer"/> <!-- generally blank -->
    <term name="narrator">
      <single>narrator</single>
      <multiple>narrators</multiple>
    </term>
    <term name="organizer">
      <single>organizer</single>
      <multiple>organizers</multiple>
    </term>
    <term name="original-author"/> <!-- generally blank -->
    <term name="performer">
      <single>performer</single>
      <multiple>performers</multiple>
    </term>
    <term name="producer">
      <single>producer</single>
      <multiple>producers</multiple>
    </term>
    <term name="recipient"/> <!-- generally blank -->
    <term name="reviewed-author"/> <!-- generally blank -->
    <term name="script-writer">
      <single>writer</single>
      <multiple>writers</multiple>
    </term>
    <term name="series-creator">
      <single>series creator</single>
      <multiple>series creators</multiple>
    </term>
    <term name="translator">
      <single>translator</single>
      <multiple>translators</multiple>
    </term>

    <!-- SHORT ROLE FORMS -->
    <!-- Omitted roles:
         author, chair, composer, container-author, guest, host, interviewer, original-author, recipient, reviewed-author
    -->
    <term name="collection-editor" form="short">
      <single>ed.</single>
      <multiple>eds.</multiple>
    </term>
    <term name="compiler" form="short">
      <single>comp.</single>
      <multiple>comps.</multiple>
    </term>
    <term name="contributor" form="short">
      <!-- Oxford Dictionary of Abbreviations -->
      <single>contrib.</single>
      <multiple>contribs.</multiple>
    </term>
    <term name="curator" form="short">
      <!-- Oxford Art Online <https://www.oxfordartonline.com/page/1661> -->
      <single>cur.</single>
      <multiple>curs.</multiple>
    </term>
    <term name="director" form="short">
      <single>dir.</single>
      <multiple>dirs.</multiple>
    </term>
    <term name="editor" form="short">
      <single>ed.</single>
      <multiple>eds.</multiple>
    </term>
    <term name="editor-translator" form="short">
      <single>ed. &amp; trans.</single>
      <multiple>eds. &amp; trans.</multiple>
    </term>
    <term name="editortranslator" form="short">
      <single>ed. &amp; trans.</single>
      <multiple>eds. &amp; trans.</multiple>
    </term>
    <term name="editorial-director" form="short">
      <single>ed.</single>
      <multiple>eds.</multiple>
    </term>
    <term name="executive-producer" form="short">
      <!-- Oxford Dictionary of Abbreviations -->
      <single>exec. prod.</single>
      <multiple>exec. prods.</multiple>
    </term>
    <term name="illustrator" form="short">
      <single>ill.</single>
      <multiple>ills.</multiple>
    </term>
    <term name="narrator" form="short">
      <!-- Oxford Dictionary of Abbreviations -->
      <single>narr.</single>
      <multiple>narrs.</multiple>
    </term>
    <term name="organizer" form="short">
      <!-- possibly misleading: Oxford Dictionary of Abbreviations only defines this as organization or organized -->
      <single>org.</single>
      <multiple>orgs.</multiple>
    </term>
    <term name="performer" form="short">
      <!-- Oxford Dictionary of Abbreviations -->
      <single>perf.</single>
      <multiple>perfs.</multiple>
    </term>
    <term name="producer" form="short">
      <!-- Oxford Dictionary of Abbreviations -->
      <single>prod.</single>
      <multiple>prods.</multiple>
    </term>
    <term name="script-writer" form="short">
      <!-- Oxford Dictionary of Abbreviations -->
      <single>wrtr.</single>
      <multiple>wrtrs.</multiple>
    </term>
    <term name="series-creator" form="short">
      <single>ser. creator</single>
      <multiple>ser. creators</multiple>
    </term>
    <term name="translator" form="short">trans.</term> <!-- no plural -->

    <!-- VERB ROLE FORMS -->
    <term name="chair" form="verb">chaired by</term>
    <term name="collection-editor" form="verb">edited by</term>
    <term name="compiler" form="verb">compiled by</term>
    <term name="composer" form="verb">composed by</term>
    <term name="container-author" form="verb">by</term>
    <term name="contributor" form="verb">with</term>
    <term name="curator" form="verb">curated by</term>
    <term name="director" form="verb">directed by</term>
    <term name="editor" form="verb">edited by</term>
    <term name="editor-translator" form="verb">edited &amp; translated by</term>
    <term name="editortranslator" form="verb">edited &amp; translated by</term>
    <term name="editorial-director" form="verb">edited by</term>
    <term name="executive-producer" form="verb">executive produced by</term>
    <term form="verb" name="guest">
      <single>with guest</single>
      <multiple>with guests</multiple>
    </term>
    <term name="host" form="verb">hosted by</term>
    <term name="illustrator" form="verb">illustrated by</term>
    <term name="interviewer" form="verb">interview by</term>
    <term name="narrator" form="verb">narrated by</term>
    <term name="organizer" form="verb">organized by</term>
    <term name="original-author" form="verb">by</term>
    <term name="performer" form="verb">performed by</term>
    <term name="producer" form="verb">produced by</term>
    <term name="recipient" form="verb">to</term>
    <term name="reviewed-author" form="verb">by</term>
    <term name="script-writer" form="verb">written by</term>
    <term name="series-creator" form="verb">created by</term>
    <term name="translator" form="verb">translated by</term>

    <!-- SHORT VERB ROLE FORMS -->
    <!-- Omitted roles:
         author, chair, container-author, contributor, guest, host, interviewer, original-author, recipient, reviewed-author, series-creator
    -->
    <term name="collection-editor" form="verb-short">ed. by</term>
    <term name="compiler" form="verb-short">comp. by</term>
    <term name="composer" form="verb-short">comp. by</term> <!-- ODWE -->
    <term name="curator" form="verb-short">cur. by</term> <!-- Oxford Art Online -->
    <term name="director" form="verb-short">dir. by</term>
    <term name="editor" form="verb-short">ed. by</term>
    <term name="editor-translator" form="verb-short">ed. &amp; trans. by</term>
    <term name="editortranslator" form="verb-short">ed. &amp; trans. by</term>
    <term name="editorial-director" form="verb-short">ed. by</term>
    <term name="executive-producer" form="verb-short">exec. prod. by</term> <!-- ODA -->
    <term name="illustrator" form="verb-short">ill. by</term>
    <term name="narrator" form="verb-short">narr. by</term> <!-- ODA -->
    <term name="organizer" form="verb-short">org. by</term> <!-- ODA -->
    <term name="performer" form="verb-short">perf. by</term> <!-- ODA -->
    <term name="producer" form="verb-short">prod. by</term> <!-- ODA -->
    <term name="script-writer" form="verb-short">writ. by</term> <!-- ODA -->
    <term name="translator" form="verb-short">trans. by</term>

    <!-- LONG MONTH FORMS -->
    <term name="month-01">January</term>
    <term name="month-02">February</term>
    <term name="month-03">March</term>
    <term name="month-04">April</term>
    <term name="month-05">May</term>
    <term name="month-06">June</term>
    <term name="month-07">July</term>
    <term name="month-08">August</term>
    <term name="month-09">September</term>
    <term name="month-10">October</term>
    <term name="month-11">November</term>
    <term name="month-12">December</term>

    <!-- SHORT MONTH FORMS -->
    <!-- Chicago Manual of Style, 18th ed., sec. 10.44 (identical to New Hart's Rules, 2nd ed., sec. 10.2.6) -->
    <term name="month-01" form="short">Jan.</term>
    <term name="month-02" form="short">Feb.</term>
    <term name="month-03" form="short">Mar.</term>
    <term name="month-04" form="short">Apr.</term>
    <term name="month-05" form="short">May</term>
    <term name="month-06" form="short">June</term>
    <term name="month-07" form="short">July</term>
    <term name="month-08" form="short">Aug.</term>
    <term name="month-09" form="short">Sept.</term>
    <term name="month-10" form="short">Oct.</term>
    <term name="month-11" form="short">Nov.</term>
    <term name="month-12" form="short">Dec.</term>

    <!-- SEASONS -->
    <term name="season-01">Spring</term>
    <term name="season-02">Summer</term>
    <term name="season-03">Autumn</term>
    <term name="season-04">Winter</term>
  </terms>
</locale>
`,T=`<?xml version="1.0" encoding="utf-8"?>
<locale xmlns="http://purl.org/net/xbiblio/csl" version="1.0" xml:lang="zh-CN">
  <info>
    <translator>
      <name>rongls</name>
    </translator>
    <translator>
      <name>sati-bodhi</name>
    </translator>
    <translator>
      <name>Heromyth</name>
    </translator>
    <translator>
      <name>Zeping Lee</name>
    </translator>
    <translator>
      <name>韩小土</name>
    </translator>
    <translator>
      <name>韩敏义</name>
    </translator>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
    <updated>2025-10-16T11:24:00+08:00</updated>
  </info>
  <style-options punctuation-in-quote="false"/>
  <date form="text">
    <date-part name="year" suffix="年" range-delimiter="&#8212;"/>
    <date-part name="month" form="numeric" suffix="月" range-delimiter="&#8212;"/>
    <date-part name="day" suffix="日" range-delimiter="&#8212;"/>
  </date>
  <date form="numeric">
    <date-part name="year" range-delimiter="/"/>
    <date-part name="month" form="numeric-leading-zeros" prefix="-" range-delimiter="/"/>
    <date-part name="day" form="numeric-leading-zeros" prefix="-" range-delimiter="/"/>
  </date>
  <terms>
    <!-- LONG GENERAL TERMS -->
    <term name="accessed">见于</term>
    <term name="advance-online-publication">网络首发</term>
    <term name="album">专辑</term>
    <term name="and">和</term>
    <term name="and others">及其他</term>
    <term name="anonymous">作者不详</term>
    <term name="at">于</term>
    <term name="audio-recording">录音</term>
    <term name="available at">载于</term>
    <term name="by">著</term>
    <term name="circa">介于</term>
    <term name="cited">见引于</term>
    <term name="et-al">等</term>
    <term name="film">电影</term>
    <term name="forthcoming">即将出版</term>
    <term name="from">从</term>
    <term name="henceforth">从此以后</term>
    <term name="ibid">同上</term>
    <term name="in">收入</term>
    <term name="in press">送印中</term>
    <term name="internet">网际网络</term>
    <term name="letter">信函</term>
    <term name="loc-cit">同前注</term>
    <term name="no date">日期不详</term>
    <term name="no-place">出版地不详</term>
    <term name="no-publisher">出版者不详</term> <!-- sine nomine -->
    <term name="on">在</term>
    <term name="online">在线</term>
    <term name="op-cit">同前注</term>
    <term name="original-work-published">原著出版于</term>
    <term name="personal-communication">的私人交流</term>
    <term name="podcast">播客</term>
    <term name="podcast-episode">播客集</term>
    <term name="preprint">预印本</term>
    <term name="presented at">发表于</term>
    <term name="radio-broadcast">电台广播</term>
    <term name="radio-series">广播剧</term>
    <term name="radio-series-episode">广播剧集</term>
    <term name="reference">参考</term>
    <term name="retrieved">取读于</term>
    <term name="review-of">评论</term>
    <term name="scale">比例</term>
    <term name="special-issue">特刊</term>
    <term name="special-section">特稿</term>
    <term name="television-broadcast">电视广播</term>
    <term name="television-series">电视剧</term>
    <term name="television-series-episode">电视剧集</term>
    <term name="video">视频</term>
    <term name="working-paper">工作论文</term>

    <!-- SHORT GENERAL TERMS -->
    <term name="anonymous" form="short">无名氏</term>
    <term name="circa" form="short">约</term>
    <term name="no date" form="short">不详</term>
    <term name="no-place" form="short">出版地不详</term>
    <term name="no-publisher" form="short">出版者不详</term>
    <term name="reference" form="short">参</term>
    <term name="review-of" form="short">评</term>

    <!-- SYMBOLIC GENERAL FORMS -->

    <!-- LONG ITEM TYPE FORMS -->
    <term name="article">预印本</term>
    <term name="article-journal">期刊文章</term>
    <term name="article-magazine">杂志文章</term>
    <term name="article-newspaper">报纸文章</term>
    <term name="bill">法案</term>
    <!-- book is in the list of locator terms -->
    <term name="broadcast">广播</term>
    <!-- chapter is in the list of locator terms -->
    <term name="classic">古籍</term>
    <term name="collection">馆藏</term>
    <term name="dataset">数据集</term>
    <term name="document">文档</term>
    <term name="entry">词条</term>
    <term name="entry-dictionary">字典词条</term>
    <term name="entry-encyclopedia">百科词条</term>
    <term name="event">活动</term>
    <!-- figure is in the list of locator terms -->
    <term name="graphic">视觉作品</term>
    <term name="hearing">听证会</term>
    <term name="interview">访谈</term>
    <term name="legal_case">司法案例</term>
    <term name="legislation">法律</term>
    <term name="manuscript">手稿</term>
    <term name="map">地图</term>
    <term name="motion_picture">录像</term>
    <term name="musical_score">乐谱</term>
    <term name="pamphlet">小册子</term>
    <term name="paper-conference">会议论文</term>
    <term name="patent">专利</term>
    <term name="performance">演出</term>
    <term name="periodical">期刊</term>
    <term name="personal_communication">的私人交流</term>
    <term name="post">帖子</term>
    <term name="post-weblog">博客帖子</term>
    <term name="regulation">法规</term>
    <term name="report">报告</term>
    <term name="review">评论</term>
    <term name="review-book">书评</term>
    <term name="software">软件</term>
    <term name="song">录音</term>
    <term name="speech">演讲</term>
    <term name="standard">标准</term>
    <term name="thesis">学位论文</term>
    <term name="treaty">条约</term>
    <term name="webpage">网页</term>

    <!-- SHORT ITEM TYPE FORMS -->
    <term name="article-journal" form="short">期刊文章</term>
    <term name="article-magazine" form="short">杂志文章</term>
    <term name="article-newspaper" form="short">报纸文章</term>
    <!-- book is in the list of locator terms -->
    <!-- chapter is in the list of locator terms -->
    <term name="document" form="short">文档</term>
    <!-- figure is in the list of locator terms -->
    <term name="graphic" form="short">视觉作品</term>
    <term name="interview" form="short">采访</term>
    <term name="manuscript" form="short">手稿</term>
    <term name="motion_picture" form="short">录像</term>
    <term name="report" form="short">报告</term>
    <term name="review" form="short">评论</term>
    <term name="review-book" form="short">书评</term>
    <term name="song" form="short">录音</term>

    <!-- LONG VERB ITEM TYPE FORMS -->
    <!-- Only where applicable -->
    <term name="hearing" form="verb">听证会</term>
    <term name="review" form="verb">评论</term>
    <term name="review-book" form="verb">书评</term>

    <!-- SHORT VERB ITEM TYPE FORMS -->

    <!-- HISTORICAL ERA TERMS -->
    <term name="ad">公元</term>
    <term name="bc">公元前</term>
    <term name="bce">公元前</term>
    <term name="ce">公元</term>

    <!-- PUNCTUATION -->
    <term name="open-quote">《</term>
    <term name="close-quote">》</term>
    <term name="open-inner-quote">〈</term>
    <term name="close-inner-quote">〉</term>
    <term name="page-range-delimiter">～</term>
    <term name="colon">：</term>
    <term name="comma">，</term>
    <term name="semicolon">；</term>

    <!-- ORDINALS -->
    <term name="ordinal"/>

    <!-- LONG ORDINALS -->
    <term name="long-ordinal-01">一</term>
    <term name="long-ordinal-02">二</term>
    <term name="long-ordinal-03">三</term>
    <term name="long-ordinal-04">四</term>
    <term name="long-ordinal-05">五</term>
    <term name="long-ordinal-06">六</term>
    <term name="long-ordinal-07">七</term>
    <term name="long-ordinal-08">八</term>
    <term name="long-ordinal-09">九</term>
    <term name="long-ordinal-10">十</term>

    <!-- LONG LOCATOR FORMS -->
    <term name="act">幕</term>
    <term name="appendix">附录</term>
    <term name="article-locator">条</term> <!-- 用于法律，如“《公司法》第 16 条” -->
    <term name="book">册</term>
    <term name="canon">准则</term>
    <term name="chapter">章</term>
    <term name="column">栏</term>
    <term name="elocation">位置</term>
    <term name="equation">公式</term>
    <term name="figure">图表</term>
    <term name="folio">版</term>
    <term name="issue">期</term>
    <term name="line">行</term>
    <term name="note">注脚</term>
    <term name="opus">作品</term>
    <term name="page">页</term>
    <term name="paragraph">段落</term>
    <term name="part">部分</term>
    <term name="rule">规则</term>
    <term name="scene">场</term>
    <term name="section">节</term>
    <term name="sub-verbo">另见</term>
    <term name="supplement">补充</term>
    <term name="table">表格</term>
    <term name="timestamp"> <!-- generally blank -->
      <single/>
      <multiple/>
    </term>
    <term name="title-locator">编</term> <!-- 用于法律，如“《美国法典》第19编” -->
    <term name="verse">篇</term>
    <term name="volume">卷</term>

    <!-- SHORT LOCATOR FORMS -->
    <term name="appendix" form="short">附录</term>
    <term name="article-locator" form="short">条</term>
    <term name="book" form="short">册</term>
    <term name="chapter" form="short">章</term>
    <term name="column" form="short">栏</term>
    <term name="elocation" form="short">位置</term>
    <term name="equation" form="short">式</term>
    <term name="figure" form="short">图</term>
    <term name="folio" form="short">版</term>
    <term name="issue" form="short">期</term>
    <term name="line" form="short">行</term>
    <term name="note" form="short">注</term>
    <term name="opus" form="short">op.</term>
    <term name="page" form="short">页</term>
    <term name="paragraph" form="short">段</term>
    <term name="part" form="short">部</term>
    <term name="rule" form="short">规则</term>
    <term name="scene" form="short">场</term>
    <term name="section" form="short">节</term>
    <term name="sub-verbo" form="short">另见</term>
    <term name="supplement" form="short">补充</term>
    <term name="table" form="short">表</term>
    <term name="timestamp" form="short"> <!-- generally blank -->
      <single/>
      <multiple/>
    </term>
    <term name="title-locator" form="short">编</term>
    <term name="verse" form="short">篇</term>
    <term name="volume" form="short">卷</term>

    <!-- SYMBOLIC LOCATOR FORMS -->
    <term name="paragraph" form="symbol">
      <single>¶</single>
      <multiple>¶¶</multiple>
    </term>
    <term name="section" form="symbol">
      <single>§</single>
      <multiple>§§</multiple>
    </term>

    <!-- LONG NUMBER VARIABLE FORMS -->
    <term name="chapter-number">章</term>
    <term name="citation-number">引用</term>
    <term name="collection-number">册</term>
    <term name="edition">版本</term>
    <term name="first-reference-note-number">前注</term>
    <term name="number">编号</term>
    <term name="number-of-pages"> 总页数</term>
    <term name="number-of-volumes">卷</term>
    <term name="page-first">页</term>
    <term name="printing">编号</term>
    <term name="version">版</term>

    <!-- SHORT NUMBER VARIABLE FORMS -->
    <term name="chapter-number" form="short">章</term>
    <term name="citation-number" form="short">引用</term>
    <term name="collection-number" form="short">册</term>
    <term name="edition" form="short">版</term>
    <term name="first-reference-note-number" form="short">前注</term>
    <term name="number" form="short">
      <single>no.</single>
      <multiple>nos.</multiple>
    </term>
    <term name="number-of-pages" form="short">共</term>
    <term name="number-of-volumes" form="short">卷</term>
    <term name="page-first" form="short">页</term>
    <term name="printing" form="short">编号</term>

    <!-- LONG ROLE FORMS -->
    <term name="author"/> <!-- generally blank -->
    <term name="chair">主席</term>
    <term name="collection-editor">总编辑</term>
    <term name="compiler">编撰</term>
    <term name="composer"/> <!-- generally blank -->
    <term name="container-author"/> <!-- generally blank -->
    <term name="contributor">贡献者</term>
    <term name="curator">策展人</term>
    <term name="director">导演</term>
    <term name="editor">编辑</term>
    <term name="editor-translator">编译</term>
    <term name="editortranslator">编译</term>
    <term name="editorial-director">主编</term>
    <term name="executive-producer">监制</term>
    <term name="guest">嘉宾</term>
    <term name="host">主持</term>
    <term name="illustrator">绘图</term>
    <term name="interviewer"/> <!-- generally blank -->
    <term name="narrator">朗读者</term>
    <term name="organizer">组织者</term>
    <term name="original-author"/> <!-- generally blank -->
    <term name="performer">表演</term>
    <term name="producer">制片人</term>
    <term name="recipient"/> <!-- generally blank -->
    <term name="reviewed-author"/> <!-- generally blank -->
    <term name="script-writer">编剧</term>
    <term name="series-creator">创作</term>
    <term name="translator">翻译</term>

    <!-- SHORT ROLE FORMS -->
    <term name="compiler" form="short">编</term>
    <term name="contributor" form="short">贡献</term>
    <term name="curator" form="short">策展</term>
    <term name="director" form="short">导演</term>
    <term name="editor" form="short">编</term>
    <term name="editor-translator" form="short">编译</term>
    <term name="editortranslator" form="short">编译</term>
    <term name="editorial-director" form="short">主编</term>
    <term name="executive-producer" form="short">监制</term>
    <term name="illustrator" form="short">绘</term>
    <term name="narrator" form="short">朗读</term>
    <term name="organizer" form="short">组织</term>
    <term name="performer" form="short">表演</term>
    <term name="producer" form="short">制片人</term>
    <term name="script-writer" form="short">编剧</term>
    <term name="series-creator" form="short">创作</term>
    <term name="translator" form="short">译</term>

    <!-- VERB ROLE FORMS -->
    <term name="chair" form="verb">主席</term>
    <term name="collection-editor" form="verb">总编辑</term>
    <term name="compiler" form="verb">编撰</term>
    <term name="container-author" form="verb">著</term>
    <term name="contributor" form="verb">贡献</term>
    <term name="curator" form="verb">策展</term>
    <term name="director" form="verb">指导</term>
    <term name="editor" form="verb">编辑</term>
    <term name="editor-translator" form="verb">编译</term>
    <term name="editortranslator" form="verb">编译</term>
    <term name="editorial-director" form="verb">主编</term>
    <term name="executive-producer" form="verb">监制</term>
    <term name="guest" form="verb">嘉宾</term>
    <term name="host" form="verb">主持</term>
    <term name="illustrator" form="verb">绘图</term>
    <term name="interviewer" form="verb">采访</term>
    <term name="narrator" form="verb">朗读</term>
    <term name="organizer" form="verb">组织</term>
    <term name="performer" form="verb">表演</term>
    <term name="producer" form="verb">制片</term>
    <term name="recipient" form="verb">受函</term>
    <term name="reviewed-author" form="verb">校订</term>
    <term name="script-writer" form="verb">编剧</term>
    <term name="series-creator" form="verb">创作</term>
    <term name="translator" form="verb">翻译</term>

    <!-- SHORT VERB ROLE FORMS -->
    <term name="collection-editor" form="verb-short">总编</term>
    <term name="compiler" form="verb-short">编</term>
    <term name="contributor" form="verb-short">贡献</term>
    <term name="curator" form="verb-short">策展</term>
    <term name="director" form="verb-short">导</term>
    <term name="editor" form="verb-short">编</term>
    <term name="editor-translator" form="verb-short">编译</term>
    <term name="editortranslator" form="verb-short">编译</term>
    <term name="editorial-director" form="verb-short">主编</term>
    <term name="executive-producer" form="verb-short">监制</term>
    <term name="guest" form="verb-short">嘉宾</term>
    <term name="host" form="verb-short">主持</term>
    <term name="illustrator" form="verb-short">绘</term>
    <term name="narrator" form="verb-short">朗读</term>
    <term name="organizer" form="verb-short">组织</term>
    <term name="performer" form="verb-short">表演</term>
    <term name="producer" form="verb-short">制片</term>
    <term name="reviewed-author" form="verb-short">校</term>
    <term name="script-writer" form="verb-short">编剧</term>
    <term name="series-creator" form="verb-short">创作</term>
    <term name="translator" form="verb-short">译</term>

    <!-- LONG MONTH FORMS -->
    <term name="month-01">一月</term>
    <term name="month-02">二月</term>
    <term name="month-03">三月</term>
    <term name="month-04">四月</term>
    <term name="month-05">五月</term>
    <term name="month-06">六月</term>
    <term name="month-07">七月</term>
    <term name="month-08">八月</term>
    <term name="month-09">九月</term>
    <term name="month-10">十月</term>
    <term name="month-11">十一月</term>
    <term name="month-12">十二月</term>

    <!-- SHORT MONTH FORMS -->
    <term name="month-01" form="short">1月</term>
    <term name="month-02" form="short">2月</term>
    <term name="month-03" form="short">3月</term>
    <term name="month-04" form="short">4月</term>
    <term name="month-05" form="short">5月</term>
    <term name="month-06" form="short">6月</term>
    <term name="month-07" form="short">7月</term>
    <term name="month-08" form="short">8月</term>
    <term name="month-09" form="short">9月</term>
    <term name="month-10" form="short">10月</term>
    <term name="month-11" form="short">11月</term>
    <term name="month-12" form="short">12月</term>

    <!-- SEASONS -->
    <term name="season-01">春</term>
    <term name="season-02">夏</term>
    <term name="season-03">秋</term>
    <term name="season-04">冬</term>
  </terms>
</locale>
`,L=`<?xml version="1.0" encoding="utf-8"?>
<locale xmlns="http://purl.org/net/xbiblio/csl" version="1.0" xml:lang="de-DE">
  <info>
    <translator>
      <name>Till A. Heilmann</name>
    </translator>
    <translator>
      <name>Ulrich</name>
    </translator>
    <translator>
      <name>Rintze M. Zelle</name>
    </translator>
    <translator>
      <name>Sebastian Karcher</name>
    </translator>
    <translator>
      <name>jakov</name>
    </translator>
    <translator>
      <name>Patrick O'Brien</name>
    </translator>
    <translator>
      <name>Nicolas Chachereau</name>
    </translator>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
    <updated>2026-09-10T03:24:00+00:00</updated>
  </info>
  <style-options punctuation-in-quote="false"/>
  <date form="text">
    <date-part name="day" form="ordinal" suffix=" "/>
    <date-part name="month" suffix=" "/>
    <date-part name="year"/>
  </date>
  <date form="numeric">
    <date-part name="day" form="numeric-leading-zeros" suffix="."/>
    <date-part name="month" form="numeric-leading-zeros" suffix="."/>
    <date-part name="year"/>
  </date>
  <terms>
    <!-- LONG GENERAL TERMS -->
    <term name="accessed">zugegriffen</term>
    <term name="advance-online-publication">Online-Vorab-Publikation</term>
    <term name="album">Album</term>
    <term name="and">und</term>
    <term name="and others">und andere</term>
    <term name="anonymous">ohne Autor</term>
    <term name="at">auf</term>
    <term name="audio-recording">Tonaufnahme</term>
    <term name="available at">verfügbar unter</term>
    <term name="by">von</term>
    <term name="circa">circa</term>
    <term name="cited">zitiert</term>
    <term name="et-al">u.&#160;a.</term>
    <term name="film">Film</term>
    <term name="forthcoming">i.&#160;E.</term>
    <term name="from">von</term>
    <term name="henceforth">zukünftig</term>
    <term name="ibid">ebd.</term>
    <term name="in">in</term>
    <term name="in press">im Druck</term>
    <term name="internet">Internet</term>
    <term name="letter">Brief</term>
    <term name="loc-cit">loc. cit.</term> <!-- like ibid., the abbreviated form is the regular form  -->
    <term name="no date">ohne Datum</term>
    <term name="no-place">ohne Ort</term>
    <term name="no-publisher">ohne Verlag</term> <!-- sine nomine -->
    <term name="on">auf</term>
    <term name="online">online</term>
    <term name="op-cit">op. cit.</term> <!-- like ibid., the abbreviated form is the regular form  -->
    <term name="original-work-published">Ursprünglich erschienen</term>
    <term name="personal-communication">persönliche Kommunikation</term>
    <term name="podcast">Podcast</term>
    <term name="podcast-episode">Podcast-Episode</term>
    <term name="preprint">Preprint</term>
    <term name="presented at">gehalten auf der</term>
    <term name="radio-broadcast">Radioaufzeichnung</term>
    <term name="radio-series">Sendereihe</term>
    <term name="radio-series-episode">Sendereihenfolge</term>
    <term name="reference">
      <single>Referenz</single>
      <multiple>Referenzen</multiple>
    </term>
    <term name="retrieved">abgerufen</term>
    <term name="review-of">review of</term>
    <term name="scale">Maßstab</term>
    <term name="special-issue">Spezialausgabe</term>
    <term name="special-section">Sonderbereich</term>
    <term name="television-broadcast">Fernsehsendung</term>
    <term name="television-series">Fernsehserie</term>
    <term name="television-series-episode">Serienfolge</term>
    <term name="video">Video</term>
    <term name="working-paper">Arbeitspapier</term>

    <!-- SHORT GENERAL TERMS -->
    <term name="anonymous" form="short">o.&#160;A.</term>
    <term name="circa" form="short">ca.</term>
    <term name="no date" form="short">o.&#160;J.</term>
    <term name="no-place" form="short">o.&#160;O.</term>
    <term name="no-publisher" form="short">o.&#160;V.</term>
    <term name="reference" form="short">
      <single>Ref.</single>
      <multiple>Ref.</multiple>
    </term>
    <term name="review-of" form="short">rev. of</term>

    <!-- SYMBOLIC GENERAL FORMS -->

    <!-- LONG ITEM TYPE FORMS -->
    <term name="article">preprint</term>
    <term name="article-journal">Zeitschriftenartikel</term>
    <term name="article-magazine">Magazinartikel</term>
    <term name="article-newspaper">Zeitungsartikel</term>
    <term name="bill">Gesetzentwurf</term>
    <!-- book is in the list of locator terms -->
    <term name="broadcast">Sendung</term>
    <!-- chapter is in the list of locator terms -->
    <term name="classic">Klassiker</term>
    <term name="collection">Sammlung</term>
    <term name="dataset">Datensatz</term>
    <term name="document">Dokument</term>
    <term name="entry">Eintrag</term>
    <term name="entry-dictionary">Wörterbucheintrag</term>
    <term name="entry-encyclopedia">Lexikoneintrag</term>
    <term name="event">Event</term>
    <!-- figure is in the list of locator terms -->
    <term name="graphic">Bild</term>
    <term name="hearing">Anhörung</term>
    <term name="interview">Interview</term>
    <term name="legal_case">Rechtsfall</term>
    <term name="legislation">Gesetz</term>
    <term name="manuscript">Manuskript</term>
    <term name="map">Karte</term>
    <term name="motion_picture">Videoaufnahme</term>
    <term name="musical_score">Partitur</term>
    <term name="pamphlet">Broschüre</term>
    <term name="paper-conference">Konferenzbeitrag</term>
    <term name="patent">Patent</term>
    <term name="performance">Aufführung</term>
    <term name="periodical">Zeitschrift</term>
    <term name="personal_communication">persönliche Kommunikation</term>
    <term name="post">Post</term>
    <term name="post-weblog">Blogeintrag</term>
    <term name="regulation">Verordnung</term>
    <term name="report">Bericht</term>
    <term name="review">Rezension</term>
    <term name="review-book">Buchbesprechung</term>
    <term name="software">Software</term>
    <term name="song">Audioaufnahme</term>
    <term name="speech">Vortrag</term>
    <term name="standard">Norm</term>
    <term name="thesis">Abschlussarbeit</term>
    <term name="treaty">Abkommen</term>
    <term name="webpage">Webseite</term>

    <!-- SHORT ITEM TYPE FORMS -->
    <term name="article-journal" form="short">Zeitschriftenart.</term>
    <term name="article-magazine" form="short">Mag. Art.</term>
    <term name="article-newspaper" form="short">newspaper art.</term>
    <!-- book is in the list of locator terms -->
    <!-- chapter is in the list of locator terms -->
    <term name="document" form="short">doc.</term>
    <!-- figure is in the list of locator terms -->
    <term name="graphic" form="short">Bild</term>
    <term name="interview" form="short">Interv.</term>
    <term name="manuscript" form="short">MS</term>
    <term name="motion_picture" form="short">video rec.</term>
    <term name="report" form="short">rep.</term>
    <term name="review" form="short">rev.</term>
    <term name="review-book" form="short">bk. rev.</term>
    <term name="song" form="short">audio rec.</term>

    <!-- LONG VERB ITEM TYPE FORMS -->
    <!-- Only where applicable -->
    <term name="hearing" form="verb">testimony of</term>
    <term name="review" form="verb">review of</term>
    <term name="review-book" form="verb">review of the book</term>

    <!-- SHORT VERB ITEM TYPE FORMS -->

    <!-- HISTORICAL ERA TERMS -->
    <term name="ad">&#160;n.&#160;Chr.</term>
    <term name="bc">&#160;v.&#160;Chr.</term>
    <term name="bce">BCE</term>
    <term name="ce">CE</term>

    <!-- PUNCTUATION -->
    <term name="open-quote">„</term>
    <term name="close-quote">“</term>
    <term name="open-inner-quote">‚</term>
    <term name="close-inner-quote">‘</term>
    <term name="page-range-delimiter">–</term>
    <term name="colon">:</term>
    <term name="comma">,</term>
    <term name="semicolon">;</term>

    <!-- ORDINALS -->
    <term name="ordinal">.</term>

    <!-- LONG ORDINALS -->
    <term name="long-ordinal-01">erster</term>
    <term name="long-ordinal-02">zweiter</term>
    <term name="long-ordinal-03">dritter</term>
    <term name="long-ordinal-04">vierter</term>
    <term name="long-ordinal-05">fünfter</term>
    <term name="long-ordinal-06">sechster</term>
    <term name="long-ordinal-07">siebter</term>
    <term name="long-ordinal-08">achter</term>
    <term name="long-ordinal-09">neunter</term>
    <term name="long-ordinal-10">zehnter</term>

    <!-- LONG LOCATOR FORMS -->
    <term name="act">
      <single>Akt</single>
      <multiple>Akten</multiple>
    </term>
    <term name="appendix">
      <single>Appendix</single>
      <multiple>Appendices</multiple>
    </term>
    <term name="article-locator">
      <single>Artikel</single>
      <multiple>Artikel</multiple>
    </term>
    <term name="book">
      <single>Buch</single>
      <multiple>Bücher</multiple>
    </term>
    <term name="canon">
      <single>canon</single>
      <multiple>canons</multiple>
    </term>
    <term name="chapter">
      <single>Kapitel</single>
      <multiple>Kapitel</multiple>
    </term>
    <term name="column">
      <single>Spalte</single>
      <multiple>Spalten</multiple>
    </term>
    <term name="elocation">
      <single>location</single>
      <multiple>locations</multiple>
    </term>
    <term name="equation">
      <single>equation</single>
      <multiple>equations</multiple>
    </term>
    <term name="figure">
      <single>Abbildung</single>
      <multiple>Abbildungen</multiple>
    </term>
    <term name="folio">
      <single>Blatt</single>
      <multiple>Blätter</multiple>
    </term>
    <term name="issue">
      <single>Nummer</single>
      <multiple>Nummern</multiple>
    </term>
    <term name="line">
      <single>Zeile</single>
      <multiple>Zeilen</multiple>
    </term>
    <term name="note">
      <single>Anmerkung</single>
      <multiple>Anmerkungen</multiple>
    </term>
    <term name="opus">
      <single>Opus</single>
      <multiple>Opera</multiple>
    </term>
    <term name="page">
      <single>Seite</single>
      <multiple>Seiten</multiple>
    </term>
    <term name="paragraph">
      <single>Absatz</single>
      <multiple>Absätze</multiple>
    </term>
    <term name="part">
      <single>Teil</single>
      <multiple>Teile</multiple>
    </term>
    <term name="rule">
      <single>rule</single>
      <multiple>rules</multiple>
    </term>
    <term name="scene">
      <single>scene</single>
      <multiple>scenes</multiple>
    </term>
    <term name="section">
      <single>Abschnitt</single>
      <multiple>Abschnitte</multiple>
    </term>
    <term name="sub-verbo">
      <single>sub verbo</single>
      <multiple>sub verbis</multiple>
    </term>
    <term name="supplement">
      <single>supplement</single>
      <multiple>supplements</multiple>
    </term>
    <term name="table">
      <single>table</single>
      <multiple>tables</multiple>
    </term>
    <term name="timestamp"> <!-- generally blank -->
      <single/>
      <multiple/>
    </term>
    <term name="title-locator">
      <single>title</single>
      <multiple>titles</multiple>
    </term>
    <term name="verse">
      <single>Vers</single>
      <multiple>Verse</multiple>
    </term>
    <term name="volume">
      <single>Band</single>
      <multiple>Bände</multiple>
    </term>

    <!-- SHORT LOCATOR FORMS -->
    <term name="appendix" form="short">
      <single>app.</single>
      <multiple>apps.</multiple>
    </term>
    <term name="article-locator" form="short">
      <single>art.</single>
      <multiple>arts.</multiple>
    </term>
    <term name="book" form="short">B.</term>
    <term name="chapter" form="short">Kap.</term>
    <term name="column" form="short">Sp.</term>
    <term name="elocation" form="short">
      <single>loc.</single>
      <multiple>locs.</multiple>
    </term>
    <term name="equation" form="short">
      <single>eq.</single>
      <multiple>eqs.</multiple>
    </term>
    <term name="figure" form="short">Abb.</term>
    <term name="folio" form="short">Fol.</term>
    <term name="issue" form="short">Nr.</term>
    <term name="line" form="short">Z.</term>
    <term name="note" form="short">Anm.</term>
    <term name="opus" form="short">op.</term>
    <term name="page" form="short">
      <single>S.</single>
      <multiple>S.</multiple>
    </term>
    <term name="paragraph" form="short">Abs.</term>
    <term name="part" form="short">Teil</term>
    <term name="rule" form="short">
      <single>r.</single>
      <multiple>rr.</multiple>
    </term>
    <term name="scene" form="short">
      <single>sc.</single>
      <multiple>scs.</multiple>
    </term>
    <term name="section" form="short">Abschn.</term>
    <term name="sub-verbo" form="short">
      <single>s.&#160;v.</single>
      <multiple>s.&#160;vv.</multiple>
    </term>
    <term name="supplement" form="short">
      <single>supp.</single>
      <multiple>supps.</multiple>
    </term>
    <term name="table" form="short">
      <single>tbl.</single>
      <multiple>tbls.</multiple>
    </term>
    <term name="timestamp" form="short"> <!-- generally blank -->
      <single/>
      <multiple/>
    </term>
    <term name="title-locator" form="short">
      <single>tit.</single>
      <multiple>tits.</multiple>
    </term>
    <term name="verse" form="short">
      <single>V.</single>
      <multiple>V.</multiple>
    </term>
    <term name="volume" form="short">
      <single>Bd.</single>
      <multiple>Bde.</multiple>
    </term>

    <!-- SYMBOLIC LOCATOR FORMS -->
    <term name="paragraph" form="symbol">
      <single>¶</single>
      <multiple>¶¶</multiple>
    </term>
    <term name="section" form="symbol">
      <single>§</single>
      <multiple>§§</multiple>
    </term>

    <!-- LONG NUMBER VARIABLE FORMS -->
    <term name="chapter-number">
      <single>chapter</single>
      <multiple>chapters</multiple>
    </term>
    <term name="citation-number">
      <single>citation</single>
      <multiple>citations</multiple>
    </term>
    <term name="collection-number">
      <single>Nummer</single>
      <multiple>Nummern</multiple>
    </term>
    <term name="edition">
      <single>Auflage</single>
      <multiple>Auflagen</multiple>
    </term>
    <term name="first-reference-note-number">
      <single>Ref.</single>
      <multiple>Ref.</multiple>
    </term>
    <term name="number">
      <single>Nummer</single>
      <multiple>Nummern</multiple>
    </term>
    <term name="number-of-pages">
      <single>Seite</single>
      <multiple>Seiten</multiple>
    </term>
    <term name="number-of-volumes">
      <single>volume</single>
      <multiple>volumes</multiple>
    </term>
    <term name="page-first">
      <single>page</single>
      <multiple>pages</multiple>
    </term>
    <term name="printing">
      <single>printing</single>
      <multiple>printings</multiple>
    </term>
    <term name="version">Version</term>

    <!-- SHORT NUMBER VARIABLE FORMS -->
    <term name="chapter-number" form="short">
      <single>chap.</single>
      <multiple>chaps.</multiple>
    </term>
    <term name="citation-number" form="short">
      <single>cit.</single>
      <multiple>cits.</multiple>
    </term>
    <term name="collection-number" form="short">Nr.</term>
    <term name="edition" form="short">Aufl.</term>
    <term name="first-reference-note-number" form="short">
      <single>Ref.</single>
      <multiple>Ref.</multiple>
    </term>
    <term name="number" form="short">
      <single>Nr.</single>
      <multiple>Nr.</multiple>
    </term>
    <term name="number-of-pages" form="short">
      <single>S.</single>
      <multiple>S.</multiple>
    </term>
    <term name="number-of-volumes" form="short">
      <single>vol.</single>
      <multiple>vols.</multiple>
    </term>
    <term name="page-first" form="short">
      <single>p.</single>
      <multiple>pp.</multiple>
    </term>
    <term name="printing" form="short">
      <single>print.</single>
      <multiple>prints.</multiple>
    </term>

    <!-- LONG ROLE FORMS -->
    <term name="author"/> <!-- generally blank -->
    <term name="chair">
      <single>Vorsitz</single>
      <multiple>Vorsitz</multiple>
    </term>
    <term name="collection-editor">
      <single>Reihenherausgeber</single>
      <multiple>Reihenherausgeber</multiple>
    </term>
    <term name="compiler">
      <single>Bearbeiter</single>
      <multiple>Bearbeiter</multiple>
    </term>
    <term name="composer"/> <!-- generally blank -->
    <term name="container-author"/> <!-- generally blank -->
    <term name="contributor">
      <single>Beitragende</single>
      <multiple>Beitragende</multiple>
    </term>
    <term name="curator">
      <single>Direktor</single>
      <multiple>Direktor</multiple>
    </term>
    <term name="director">
      <single>Regisseur</single>
      <multiple>Regisseure</multiple>
    </term>
    <term name="editor">
      <single>Herausgeber</single>
      <multiple>Herausgeber</multiple>
    </term>
    <term name="editor-translator">
      <single>Herausgeber&#160;und Übersetzer</single>
      <multiple>Herausgeber&#160;und Übersetzer</multiple>
    </term>
    <term name="editortranslator">
      <single>Herausgeber&#160;und Übersetzer</single>
      <multiple>Herausgeber&#160;und Übersetzer</multiple>
    </term>
    <term name="editorial-director">
      <single>Herausgeber</single>
      <multiple>Herausgeber</multiple>
    </term>
    <term name="executive-producer">
      <single>Produktionsleiter</single>
      <multiple>Produktionsleiter</multiple>
    </term>
    <term name="guest">
      <single>Gast</single>
      <multiple>Gäste</multiple>
    </term>
    <term name="host">
      <single>Gastgeber</single>
      <multiple>Gastgeber</multiple>
    </term>
    <term name="illustrator">
      <single>Illustrator</single>
      <multiple>Illustratoren</multiple>
    </term>
    <term name="interviewer"/> <!-- generally blank -->
    <term name="narrator">
      <single>Erzähler</single>
      <multiple>Erzähler</multiple>
    </term>
    <term name="organizer">
      <single>Veranstalter</single>
      <multiple>Veranstalter</multiple>
    </term>
    <term name="original-author"/> <!-- generally blank -->
    <term name="performer">
      <single>Künstler</single>
      <multiple>Künstler</multiple>
    </term>
    <term name="producer">
      <single>Produzent</single>
      <multiple>Produzenten</multiple>
    </term>
    <term name="recipient"/> <!-- generally blank -->
    <term name="reviewed-author"/> <!-- generally blank -->
    <term name="script-writer">
      <single>Drehbuchautor</single>
      <multiple>Drehbuchautoren</multiple>
    </term>
    <term name="series-creator">
      <single>Idee</single>
      <multiple>Idee</multiple>
    </term>
    <term name="translator">
      <single>Übersetzer</single>
      <multiple>Übersetzer</multiple>
    </term>

    <!-- SHORT ROLE FORMS -->
    <term name="collection-editor" form="short">
      <single>Hrsg.</single>
      <multiple>Hrsg.</multiple>
    </term>
    <term name="compiler" form="short">
      <single>comp.</single>
      <multiple>comps.</multiple>
    </term>
    <term name="contributor" form="short">
      <single>contrib.</single>
      <multiple>contribs.</multiple>
    </term>
    <term name="curator" form="short">
      <single>cur.</single>
      <multiple>curs.</multiple>
    </term>
    <term name="director" form="short">
      <single>Reg.</single>
      <multiple>Reg.</multiple>
    </term>
    <term name="editor" form="short">
      <single>Hrsg.</single>
      <multiple>Hrsg.</multiple>
    </term>
    <term name="editor-translator" form="short">
      <single>Hrsg.&#160;u. Übers.</single>
      <multiple>Hrsg.&#160;u. Übers.</multiple>
    </term>
    <term name="editortranslator" form="short">
      <single>Hrsg.&#160;u. Übers.</single>
      <multiple>Hrsg.&#160;u. Übers.</multiple>
    </term>
    <term name="editorial-director" form="short">
      <single>Hrsg.</single>
      <multiple>Hrsg.</multiple>
    </term>
    <term name="executive-producer" form="short">
      <single>exec. prod.</single>
      <multiple>exec. prods.</multiple>
    </term>
    <term name="illustrator" form="short">
      <single>Ill.</single>
      <multiple>Ill.</multiple>
    </term>
    <term name="narrator" form="short">
      <single>narr.</single>
      <multiple>narrs.</multiple>
    </term>
    <term name="organizer" form="short">
      <single>org.</single>
      <multiple>orgs.</multiple>
    </term>
    <term name="performer" form="short">
      <single>perf.</single>
      <multiple>perfs.</multiple>
    </term>
    <term name="producer" form="short">
      <single>prod.</single>
      <multiple>prods.</multiple>
    </term>
    <term name="script-writer" form="short">
      <single>writ.</single>
      <multiple>writs.</multiple>
    </term>
    <term name="series-creator" form="short">
      <single>Idee</single>
      <multiple>Idee</multiple>
    </term>
    <term name="translator" form="short">
      <single>Übers.</single>
      <multiple>Übers.</multiple>
    </term>

    <!-- VERB ROLE FORMS -->
    <term name="chair" form="verb">Vorsitz durch</term>
    <term name="collection-editor" form="verb">herausgegeben von</term>
    <term name="compiler" form="verb">kompiliert von</term>
    <term name="container-author" form="verb">von</term>
    <term name="contributor" form="verb">mit</term>
    <term name="curator" form="verb">kuriert von</term>
    <term name="director" form="verb">Regie von</term>
    <term name="editor" form="verb">herausgegeben von</term>
    <term name="editor-translator" form="verb">herausgegeben und übersetzt von</term>
    <term name="editortranslator" form="verb">herausgegeben und übersetzt von</term>
    <term name="editorial-director" form="verb">herausgegeben von</term>
    <term name="executive-producer" form="verb">Produktionsleitung von</term>
    <term name="guest" form="verb">mit Gast</term>
    <term name="host" form="verb">veranstaltet von</term>
    <term name="illustrator" form="verb">illustriert von</term>
    <term name="interviewer" form="verb">interviewt von</term>
    <term name="narrator" form="verb">Narration von</term>
    <term name="organizer" form="verb">organisiert von</term>
    <term name="performer" form="verb">Aufführung von</term>
    <term name="producer" form="verb">produziert von</term>
    <term name="recipient" form="verb">an</term>
    <term name="reviewed-author" form="verb">von</term>
    <term name="script-writer" form="verb">geschrieben von</term>
    <term name="series-creator" form="verb">Idee von</term>
    <term name="translator" form="verb">übersetzt von</term>

    <!-- SHORT VERB ROLE FORMS -->
    <term name="collection-editor" form="verb-short">hrsg. von</term>
    <term name="compiler" form="verb-short">komp. von</term>
    <term name="contributor" form="verb-short">m.</term>
    <term name="curator" form="verb-short">kur. von</term>
    <term name="director" form="verb-short">Reg.</term>
    <term name="editor" form="verb-short">hrsg. von</term>
    <term name="editor-translator" form="verb-short">hg.&#160;u. übers. von</term>
    <term name="editortranslator" form="verb-short">hg.&#160;u. übers. von</term>
    <term name="editorial-director" form="verb-short">hrsg. von</term>
    <term name="executive-producer" form="verb-short">Prod. gel. v.</term>
    <term name="guest" form="verb-short">w. guest</term>
    <term name="host" form="verb-short">veranst. von</term>
    <term name="illustrator" form="verb-short">illus. von</term>
    <term name="narrator" form="verb-short">Narr. von</term>
    <term name="organizer" form="verb-short">org. von</term>
    <term name="performer" form="verb-short">aufg. von</term>
    <term name="producer" form="verb-short">prod. von</term>
    <term name="script-writer" form="verb-short">writ. by</term>
    <term name="series-creator" form="verb-short">Idee von</term>
    <term name="translator" form="verb-short">übers. von</term>

    <!-- LONG MONTH FORMS -->
    <term name="month-01">Januar</term>
    <term name="month-02">Februar</term>
    <term name="month-03">März</term>
    <term name="month-04">April</term>
    <term name="month-05">Mai</term>
    <term name="month-06">Juni</term>
    <term name="month-07">Juli</term>
    <term name="month-08">August</term>
    <term name="month-09">September</term>
    <term name="month-10">Oktober</term>
    <term name="month-11">November</term>
    <term name="month-12">Dezember</term>

    <!-- SHORT MONTH FORMS -->
    <term name="month-01" form="short">Jan.</term>
    <term name="month-02" form="short">Feb.</term>
    <term name="month-03" form="short">März</term>
    <term name="month-04" form="short">Apr.</term>
    <term name="month-05" form="short">Mai</term>
    <term name="month-06" form="short">Juni</term>
    <term name="month-07" form="short">Juli</term>
    <term name="month-08" form="short">Aug.</term>
    <term name="month-09" form="short">Sep.</term>
    <term name="month-10" form="short">Okt.</term>
    <term name="month-11" form="short">Nov.</term>
    <term name="month-12" form="short">Dez.</term>

    <!-- SEASONS -->
    <term name="season-01">Frühjahr</term>
    <term name="season-02">Sommer</term>
    <term name="season-03">Herbst</term>
    <term name="season-04">Winter</term>
  </terms>
</locale>
`,N=`<?xml version="1.0" encoding="utf-8"?>
<locale xmlns="http://purl.org/net/xbiblio/csl" version="1.0" xml:lang="fr-FR">
  <info>
    <translator>
      <name>Grégoire Colly</name>
    </translator>
    <translator>
      <name>Collectif Zotero francophone</name>
    </translator>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
    <updated>2025-10-18T05:52:35+00:00</updated>
  </info>
  <style-options punctuation-in-quote="false" limit-day-ordinals-to-day-1="true"/>
  <date form="text">
    <date-part name="day" suffix=" "/>
    <date-part name="month" suffix=" "/>
    <date-part name="year"/>
  </date>
  <date form="numeric">
    <date-part name="day" form="numeric-leading-zeros" suffix="/"/>
    <date-part name="month" form="numeric-leading-zeros" suffix="/"/>
    <date-part name="year"/>
  </date>
  <terms>
    <!-- LONG GENERAL TERMS -->
    <term name="accessed">consulté le</term>
    <term name="advance-online-publication">publication en ligne anticipée</term>
    <term name="album">album</term>
    <term name="and">et</term>
    <term name="and others">et autres</term>
    <term name="anonymous">anonyme</term>
    <term name="at">sur</term>
    <term name="audio-recording">enregistrement audio</term>
    <term name="available at">disponible sur</term>
    <term name="by">par</term>
    <term name="circa">vers</term>
    <term name="cited">cité</term>
    <term name="et-al">et al.</term>
    <term name="film">film</term>
    <term name="forthcoming">à paraître</term>
    <term name="from">à l'adresse</term>
    <term name="henceforth">désormais</term>
    <term name="ibid">ibid.</term>
    <term name="in">in</term>
    <term name="in press">sous presse</term>
    <term name="internet">Internet</term>
    <term name="letter">lettre</term>
    <term name="loc-cit">loc.&#160;cit.</term> <!-- like ibid., the abbreviated form is the regular form  -->
    <term name="no date">sans date</term>
    <term name="no-place">sans lieu</term>
    <term name="no-publisher">sans nom</term> <!-- sine nomine -->
    <term name="on">sur</term>
    <term name="online">en ligne</term>
    <term name="op-cit">op.&#160;cit.</term> <!-- like ibid., the abbreviated form is the regular form  -->
    <term name="original-work-published">édition originale</term>
    <term name="personal-communication">communication personnelle</term>
    <term name="podcast">podcast</term>
    <term name="podcast-episode">épisode de podcast</term>
    <term name="preprint">prépublication</term>
    <term name="presented at">présenté à</term>
    <term name="radio-broadcast">émission de radio</term>
    <term name="radio-series">série radiophonique</term>
    <term name="radio-series-episode">épisode de série radiophonique</term>
    <term name="reference">
      <single>référence</single>
      <multiple>références</multiple>
    </term>
    <term name="retrieved">consulté</term>
    <term name="review-of">recension de</term>
    <term name="scale">échelle</term>
    <term name="special-issue">numéro spécial</term>
    <term name="special-section">section spéciale</term>
    <term name="television-broadcast">émission de télévision</term>
    <term name="television-series">série télévisée</term>
    <term name="television-series-episode">épisode de série télévisée</term>
    <term name="video">vidéo</term>
    <term name="working-paper">document de travail</term>

    <!-- SHORT GENERAL TERMS -->
    <!-- Omitted short forms: accessed, album, and (symbol), and others, at (symbol), forthcoming, henceforth, ibid, in, in press, internet, loc-cit, on, online, op-cit, podcast, preprint, presented at -->

    <term name="advance-online-publication" form="short">publ. en ligne antic.</term>
    <term name="anonymous" form="short">anon.</term>
    <term name="audio-recording" form="short">enr. audio</term>
    <term name="available at" form="short">dispo. sur</term>
    <term name="circa" form="short">v.</term>
    <term name="cited" form="short">cité</term>
    <term name="film" form="short">film</term>
    <term name="from" form="short">à l'adr.</term>
    <term name="letter" form="short">let.</term>
    <term name="no date" form="short">s.&#160;d.</term>
    <term name="no-place" form="short">s.&#160;l.</term>
    <term name="no-publisher" form="short">s.&#160;n.</term>
    <term name="original-work-published" form="short">éd. orig.</term>
    <term name="personal-communication" form="short">comm. perso.</term>
    <term name="podcast-episode" form="short">épis. de podcast</term>
    <term name="radio-broadcast" form="short">émiss. de radio</term>
    <term name="radio-series-episode" form="short">épis. de série radio</term>
    <term name="reference" form="short">
      <single>réf.</single>
      <multiple>réf.</multiple>
    </term>
    <term name="retrieved" form="short">consulté</term>
    <term name="review-of" form="short">recens. de</term>
    <term name="scale" form="short">éch.</term>
    <term name="special-issue" form="short">nᵒ spéc.</term>
    <term name="special-section" form="short">sect. spéc.</term>
    <term name="television-broadcast" form="short">émiss. de TV</term>
    <term name="television-series" form="short">série TV</term>
    <term name="television-series-episode" form="short">épis. de série TV</term>
    <term name="video" form="short">vidéo</term>
    <term name="working-paper" form="short">doc. de travail</term>

    <!-- SYMBOLIC GENERAL FORMS -->
    <term name="and" form="symbol">&amp;</term>
    <term name="at" form="symbol">@</term>

    <!-- LONG ITEM TYPE FORMS -->
    <term name="article">article</term>
    <term name="article-journal">article de revue</term>
    <term name="article-magazine">article de magazine</term>
    <term name="article-newspaper">article de presse</term>
    <term name="bill">projet de loi</term>
    <!-- book is in the list of locator terms -->
    <term name="broadcast">émission</term>
    <!-- chapter is in the list of locator terms -->
    <term name="classic">classique</term>
    <term name="collection">collection</term>
    <term name="dataset">jeu de données</term>
    <term name="document">document</term>
    <term name="entry">entrée</term>
    <term name="entry-dictionary">entrée de dictionnaire</term>
    <term name="entry-encyclopedia">entrée d'encyclopédie</term>
    <term name="event">événement</term>
    <!-- figure is in the list of locator terms -->
    <term name="graphic">image</term>
    <term name="hearing">audience</term>
    <term name="interview">entretien</term>
    <term name="legal_case">affaire</term>
    <term name="legislation">acte juridique</term>
    <term name="manuscript">manuscrit</term>
    <term name="map">carte</term>
    <term name="motion_picture">enregistrement vidéo</term>
    <term name="musical_score">partition musicale</term>
    <term name="pamphlet">pamphlet</term>
    <term name="paper-conference">article de colloque</term>
    <term name="patent">brevet</term>
    <term name="performance">interprétation</term>
    <term name="periodical">périodique</term>
    <term name="personal_communication">communication personnelle</term>
    <term name="post">billet</term>
    <term name="post-weblog">billet de blog</term>
    <term name="regulation">règlement</term>
    <term name="report">rapport</term>
    <term name="review">recension</term>
    <term name="review-book">recension de livre</term>
    <term name="software">logiciel</term>
    <term name="song">chanson</term>
    <term name="speech">présentation</term>
    <term name="standard">norme</term>
    <term name="thesis">thèse</term>
    <term name="treaty">traité</term>
    <term name="webpage">page web</term>

    <!-- SHORT ITEM TYPE FORMS -->
    <!-- Omitted short forms: article, bill, entry, event, hearing, map, periodical, speech, treaty -->
    <term name="article-journal" form="short">art. de revue</term>
    <term name="article-magazine" form="short">art. de mag.</term>
    <term name="article-newspaper" form="short">art. de presse</term>
    <!-- book is in the list of locator terms -->
    <!-- chapter is in the list of locator terms -->
    <term name="classic" form="short">class.</term>
    <term name="collection" form="short">coll.</term>
    <term name="document" form="short">doc.</term>
    <term name="entry-dictionary" form="short">entrée de dict.</term>
    <term name="entry-encyclopedia" form="short">entrée d'encycl.</term>
    <!-- figure is in the list of locator terms -->
    <term name="graphic" form="short">img.</term>
    <term name="interview" form="short">entret.</term>
    <term name="legal_case" form="short">aff.</term>
    <term name="legislation" form="short">acte jurid.</term>
    <term name="manuscript" form="short">
      <single>ms.</single>
      <multiple>mss.</multiple>
    </term>
    <term name="motion_picture" form="short">enr. vidéo</term>
    <term name="musical_score" form="short">partit. music.</term>
    <term name="pamphlet" form="short">pamph.</term>
    <term name="paper-conference" form="short">art. de conf.</term>
    <term name="patent" form="short">brevet</term>
    <term name="performance" form="short">interprét.</term>
    <term name="personal_communication" form="short">comm. perso.</term>
    <term name="regulation" form="short">règl.</term>
    <term name="report" form="short">rapp.</term>
    <term name="review" form="short">recens.</term>
    <term name="review-book" form="short">recens. de livre</term>
    <term name="software" form="short">logic.</term>
    <term name="song" form="short">enr. audio</term>
    <term name="standard" form="short">norme</term>
    <term name="thesis" form="short">thèse</term>
    <term name="webpage" form="short">p. web</term>

    <!-- LONG VERB ITEM TYPE FORMS -->
    <!-- Only where applicable -->
    <term name="hearing" form="verb">témoignage de</term>
    <term name="review" form="verb">recension</term>
    <term name="review-book" form="verb">recension de livre</term>

    <!-- SHORT VERB ITEM TYPE FORMS -->
    <!-- Only where applicable -->
    <term name="hearing" form="verb-short">témoign. de</term> <!-- ODA -->
    <term name="review" form="verb-short">recens. de</term>
    <term name="review-book" form="verb-short">recens. de livre</term>

    <!-- HISTORICAL ERA TERMS -->
    <term name="ad">apr. J.-C.</term>
    <term name="bc">av. J.-C.</term>
    <term name="bce">av. n. è.</term>
    <term name="ce">n. è.</term>

    <!-- PUNCTUATION -->
    <term name="open-quote">«&#160;</term>
    <term name="close-quote">&#160;»</term>
    <term name="open-inner-quote">“</term>
    <term name="close-inner-quote">”</term>
    <term name="page-range-delimiter">&#8209;</term> <!-- non-breaking hyphen -->
    <term name="colon">&#160;:</term>
    <term name="comma">,</term>
    <term name="semicolon">&#160;;</term>

    <!-- ORDINALS -->
    <term name="ordinal">ᵉ</term>
    <term name="ordinal-01" gender-form="feminine" match="whole-number">ʳᵉ</term>
    <term name="ordinal-01" gender-form="masculine" match="whole-number">ᵉʳ</term>

    <!-- LONG ORDINALS -->
    <term name="long-ordinal-01">premier</term>
    <term name="long-ordinal-02">deuxième</term>
    <term name="long-ordinal-03">troisième</term>
    <term name="long-ordinal-04">quatrième</term>
    <term name="long-ordinal-05">cinquième</term>
    <term name="long-ordinal-06">sixième</term>
    <term name="long-ordinal-07">septième</term>
    <term name="long-ordinal-08">huitième</term>
    <term name="long-ordinal-09">neuvième</term>
    <term name="long-ordinal-10">dixième</term>

    <!-- LONG LOCATOR FORMS -->
    <term name="act">
      <single>acte</single>
      <multiple>actes</multiple>
    </term>
    <term name="appendix">
      <single>appendice</single>
      <multiple>appendices</multiple>
    </term>
    <term name="article-locator">
      <single>article</single>
      <multiple>articles</multiple>
    </term>
    <term name="book">
      <single>livre</single>
      <multiple>livres</multiple>
    </term>
    <term name="canon">
      <single>canon</single>
      <multiple>canons</multiple>
    </term>
    <term name="chapter">
      <single>chapitre</single>
      <multiple>chapitres</multiple>
    </term>
    <term name="column">
      <single>colonne</single>
      <multiple>colonnes</multiple>
    </term>
    <term name="elocation">
      <single>emplacement</single>
      <multiple>emplacements</multiple>
    </term>
    <term name="equation">
      <single>équation</single>
      <multiple>équations</multiple>
    </term>
    <term name="figure">
      <single>figure</single>
      <multiple>figures</multiple>
    </term>
    <term name="folio">
      <single>folio</single>
      <multiple>folios</multiple>
    </term>
    <term name="issue" gender="masculine">
      <single>numéro</single>
      <multiple>numéros</multiple>
    </term>
    <term name="line">
      <single>ligne</single>
      <multiple>lignes</multiple>
    </term>
    <term name="note">
      <single>note</single>
      <multiple>notes</multiple>
    </term>
    <term name="opus">
      <single>opus</single>
      <multiple>opus</multiple>
    </term>
    <term name="page">
      <single>page</single>
      <multiple>pages</multiple>
    </term>
    <term name="paragraph">
      <single>paragraphe</single>
      <multiple>paragraphes</multiple>
    </term>
    <term name="part">
      <single>partie</single>
      <multiple>parties</multiple>
    </term>
    <term name="rule">
      <single>règle</single>
      <multiple>règles</multiple>
    </term>
    <term name="scene">
      <single>scène</single>
      <multiple>scènes</multiple>
    </term>
    <term name="section">
      <single>section</single>
      <multiple>sections</multiple>
    </term>
    <term name="sub-verbo">
      <single>sub verbo</single>
      <multiple>sub verbis</multiple>
    </term>
    <term name="supplement">
      <single>supplément</single>
      <multiple>suppléments</multiple>
    </term>
    <term name="table">
      <single>tableau</single>
      <multiple>tableaux</multiple>
    </term>
    <term name="timestamp"> <!-- generally blank -->
      <single/>
      <multiple/>
    </term>
    <term name="title-locator">
      <single>titre</single>
      <multiple>titres</multiple>
    </term>
    <term name="verse">
      <single>verset</single>
      <multiple>versets</multiple>
    </term>
    <term name="volume" gender="masculine">
      <single>volume</single>
      <multiple>volumes</multiple>
    </term>

    <!-- SHORT LOCATOR FORMS -->
    <!-- Omitted short forms: act, timestamp -->
    <term name="appendix" form="short">
      <single>append.</single>
      <multiple>append.</multiple>
    </term>
    <term name="article-locator" form="short">
      <single>art.</single>
      <multiple>art.</multiple>
    </term>
    <term name="book" form="short">
      <single>livre</single>
      <multiple>livres</multiple>
    </term>
    <term name="canon" form="short">
      <single>can.</single>
      <multiple>can.</multiple>
    </term>
    <term name="chapter" form="short">
      <single>chap.</single>
      <multiple>chap.</multiple>
    </term>
    <term name="column" form="short">
      <single>col.</single>
      <multiple>col.</multiple>
    </term>
    <term name="elocation" form="short">
      <single>emplact</single>
      <multiple>emplact</multiple>
    </term>
    <term name="equation" form="short">
      <single>eqt.</single>
      <multiple>eqt.</multiple>
    </term>
    <term name="figure" form="short">
      <single>fig.</single>
      <multiple>fig.</multiple>
    </term>
    <term name="folio" form="short">
      <single>fᵒ</single>
      <multiple>fᵒˢ</multiple>
    </term>
    <term name="issue" form="short">
      <single>nᵒ</single>
      <multiple>nᵒˢ</multiple>
    </term>
    <term name="line" form="short">
      <single>l.</single>
      <multiple>l.</multiple>
    </term>
    <term name="note" form="short">
      <single>n.</single>
      <multiple>n.</multiple>
    </term>
    <term name="opus" form="short">
      <single>op.</single>
      <multiple>op.</multiple>
    </term>
    <term name="page" form="short">
      <single>p.</single>
      <multiple>p.</multiple>
    </term>
    <term name="paragraph" form="short">
      <single>paragr.</single>
      <multiple>paragr.</multiple>
    </term>
    <term name="part" form="short">
      <single>part.</single>
      <multiple>part.</multiple>
    </term>
    <term name="rule" form="short">
      <single>règle</single>
      <multiple>règles</multiple>
    </term>
    <term name="scene" form="short">
      <single>sc.</single>
      <multiple>sc.</multiple>
    </term>
    <term name="section" form="short">
      <single>sect.</single>
      <multiple>sect.</multiple>
    </term>
    <term name="sub-verbo" form="short">
      <single>s.&#160;v.</single>
      <multiple>s.&#160;v.</multiple>
    </term>
    <term name="supplement" form="short">
      <single>suppl.</single>
      <multiple>suppl.</multiple>
    </term>
    <term name="table" form="short">
      <single>tab.</single>
      <multiple>tab.</multiple>
    </term>
    <term name="timestamp" form="short"> <!-- generally blank -->
      <single/>
      <multiple/>
    </term>
    <term name="title-locator" form="short">
      <single>tit.</single>
      <multiple>tit.</multiple>
    </term>
    <term name="verse" form="short">
      <single>v.</single>
      <multiple>v.</multiple>
    </term>
    <term name="volume" form="short">
      <single>vol.</single>
      <multiple>vol.</multiple>
    </term>

    <!-- SYMBOLIC LOCATOR FORMS -->
    <term name="chapter" form="symbol">
      <!-- caput/capita, esp. in legal works; cf. CMOS 14.196 -->
      <single>c.</single>
      <multiple>c.</multiple>
    </term>
    <term name="paragraph" form="symbol">
      <single>§</single>
      <multiple>§</multiple>
    </term>
    <term name="section" form="symbol">
      <single>§</single>
      <multiple>§</multiple>
    </term>

    <!-- LONG NUMBER VARIABLE FORMS -->
    <term name="chapter-number">
      <single>chapitre</single>
      <multiple>chapitres</multiple>
    </term>
    <term name="citation-number">
      <single>citation</single>
      <multiple>citations</multiple>
    </term>
    <term name="collection-number" gender="masculine">
      <single>numéro</single>
      <multiple>numéros</multiple>
    </term>
    <term name="edition" gender="feminine">
      <single>édition</single>
      <multiple>éditions</multiple>
    </term>
    <term name="first-reference-note-number">
      <single>référence</single>
      <multiple>références</multiple>
    </term>
    <term name="number">
      <single>numéro</single>
      <multiple>numéros</multiple>
    </term>
    <term name="number-of-pages">
      <single>page</single>
      <multiple>pages</multiple>
    </term>
    <term name="number-of-volumes">
      <single>volume</single>
      <multiple>volumes</multiple>
    </term>
    <term name="page-first">
      <single>page</single>
      <multiple>pages</multiple>
    </term>
    <term name="printing">
      <single>impression</single>
      <multiple>impressions</multiple>
    </term>
    <term name="version">
      <single>version</single>
      <multiple>versions</multiple>
    </term>

    <!-- SHORT NUMBER VARIABLE FORMS -->
    <term name="chapter-number" form="short">
      <single>chap.</single>
      <multiple>chap.</multiple>
    </term>
    <term name="citation-number" form="short">
      <single>cit.</single>
      <multiple>cit.</multiple>
    </term>
    <term name="collection-number" form="short">
     <single>nᵒ</single>
      <multiple>nᵒˢ</multiple>
    </term>
    <term name="edition" form="short">
      <single>éd.</single>
      <multiple>éd.</multiple>
    </term>
    <term name="first-reference-note-number" form="short">
      <single>réf.</single>
      <multiple>réf.</multiple>
    </term>
    <term name="number" form="short">
     <single>nᵒ</single>
     <multiple>nᵒˢ</multiple>
    </term>
    <term name="number-of-pages" form="short">
      <single>p.</single>
      <multiple>p.</multiple>
    </term>
    <term name="number-of-volumes" form="short">
      <single>vol.</single>
      <multiple>vol.</multiple>
    </term>
    <term name="page-first" form="short">
      <single>p.</single>
      <multiple>p.</multiple>
    </term>
    <term name="printing" form="short">
      <single>impr.</single>
      <multiple>impr.</multiple>
    </term>
    <term name="version" form="short">v.</term> <!-- no plural -->

    <!-- LONG ROLE FORMS -->
    <term name="author"/> <!-- generally blank -->
    <term name="chair">
      <single>président</single>
      <multiple>présidents</multiple>
    </term>
    <term name="collection-editor">
      <single>directeur</single>
      <multiple>directeurs</multiple>
    </term>
    <term name="compiler">
      <single>compilateur</single>
      <multiple>compilateurs</multiple>
    </term>
    <term name="composer"/> <!-- generally blank -->
    <term name="container-author"/> <!-- generally blank -->
    <term name="contributor">
      <single>contributeur</single>
      <multiple>contributeurs</multiple>
    </term>
    <term name="curator">
      <single>commissaire</single>
      <multiple>commissaires</multiple>
    </term>
    <term name="director">
      <single>réalisateur</single>
      <multiple>réalisateurs</multiple>
    </term>
    <term name="editor">
      <single>éditeur</single>
      <multiple>éditeurs</multiple>
    </term>
    <term name="editor-translator">
      <single>éditeur et traducteur</single>
      <multiple>éditeurs et traducteurs</multiple>
    </term>
    <term name="editortranslator">
      <single>éditeur et traducteur</single>
      <multiple>éditeurs et traducteurs</multiple>
    </term>
    <term name="editorial-director">
      <single>directeur</single>
      <multiple>directeurs</multiple>
    </term>
    <term name="executive-producer">
      <single>producteur exécutif</single>
      <multiple>producteurs exécutifs</multiple>
    </term>
    <term name="guest">
      <single>invité</single>
      <multiple>invités</multiple>
    </term>
    <term name="host">
      <single>hôte</single>
      <multiple>hôtes</multiple>
    </term>
    <term name="illustrator">
      <single>illustrateur</single>
      <multiple>illustrateurs</multiple>
    </term>
    <term name="interviewer"/> <!-- generally blank -->
    <term name="narrator">
      <single>narrateur</single>
      <multiple>narrateurs</multiple>
    </term>
    <term name="organizer">
      <single>organisateur</single>
      <multiple>organisateurs</multiple>
    </term>
    <term name="original-author"/> <!-- generally blank -->
    <term name="performer">
      <single>interprète</single>
      <multiple>interprètes</multiple>
    </term>
    <term name="producer">
      <single>producteur</single>
      <multiple>producteurs</multiple>
    </term>
    <term name="recipient"/> <!-- generally blank -->
    <term name="reviewed-author"/> <!-- generally blank -->
    <term name="script-writer">
      <single>scénariste</single>
      <multiple>scénaristes</multiple>
    </term>
    <term name="series-creator">
      <single>créateur de série</single>
      <multiple>créateurs de série</multiple>
    </term>
    <term name="translator">
      <single>traducteur</single>
      <multiple>traducteurs</multiple>
    </term>

    <!-- SHORT ROLE FORMS -->
    <!-- Omitted roles:
         author, chair, composer, container-author, guest, host, interviewer, original-author, recipient, reviewed-author
    -->
    <term name="collection-editor" form="short">
      <single>dir.</single>
      <multiple>dir.</multiple>
    </term>
    <term name="compiler" form="short">
      <single>compil.</single>
      <multiple>compil.</multiple>
    </term>
    <term name="contributor" form="short">
      <single>contrib.</single>
      <multiple>contrib.</multiple>
    </term>
    <term name="curator" form="short">
      <single>commiss.</single>
      <multiple>commiss.</multiple>
    </term>
    <term name="director" form="short">
      <single>réal.</single>
      <multiple>réal.</multiple>
    </term>
    <term name="editor" form="short">
      <single>éd.</single>
      <multiple>éd.</multiple>
    </term>
    <term name="editor-translator" form="short">
      <single>éd. et trad.</single>
      <multiple>éd. et trad.</multiple>
    </term>
    <term name="editortranslator" form="short">
      <single>éd. et trad.</single>
      <multiple>éd. et trad.</multiple>
    </term>
    <term name="editorial-director" form="short">
      <single>dir.</single>
      <multiple>dir.</multiple>
    </term>
    <term name="executive-producer" form="short">
      <single>prod. exé.</single>
      <multiple>prod. exé.</multiple>
    </term>
    <term name="illustrator" form="short">
      <single>ill.</single>
      <multiple>ill.</multiple>
    </term>
    <term name="narrator" form="short">
      <single>narr.</single>
      <multiple>narr.</multiple>
    </term>
    <term name="organizer" form="short">
      <single>org.</single>
      <multiple>org.</multiple>
    </term>
    <term name="performer" form="short">
      <single>interpr.</single>
      <multiple>interpr.</multiple>
    </term>
    <term name="producer" form="short">
      <single>prod.</single>
      <multiple>prod.</multiple>
    </term>
    <term name="script-writer" form="short">
      <single>scénar.</single>
      <multiple>scénar.</multiple>
    </term>
    <term name="series-creator" form="short">
      <single>créat.</single>
      <multiple>créat.</multiple>
    </term>
    <term name="translator" form="short">
      <single>trad.</single>
      <multiple>trad.</multiple>
    </term>

    <!-- VERB ROLE FORMS -->
    <term name="chair" form="verb">présidé par</term>
    <term name="collection-editor" form="verb">sous la direction de</term>
    <term name="compiler" form="verb">compilé par</term>
    <term name="composer" form="verb">composé par</term>
    <term name="container-author" form="verb">par</term>
    <term name="contributor" form="verb">avec</term>
    <term name="curator" form="verb">organisé par</term>
    <term name="director" form="verb">réalisé par</term>
    <term name="editor" form="verb">édité par</term>
    <term name="editor-translator" form="verb">édité et traduit par</term>
    <term name="editortranslator" form="verb">édité et traduit par</term>
    <term name="editorial-director" form="verb">sous la direction de</term>
    <term name="executive-producer" form="verb">production exécutive par</term>
    <term name="guest" form="verb">
      <single>avec pour invité</single>
      <multiple>avec pour invités</multiple>
    </term>
    <term name="host" form="verb">animé par</term>
    <term name="illustrator" form="verb">illustré par</term>
    <term name="interviewer" form="verb">entretien réalisé par</term>
    <term name="narrator" form="verb">lu par</term>
    <term name="organizer" form="verb">organisé par</term>
    <term name="original-author" form="verb">par</term>
    <term name="performer" form="verb">interprété par</term>
    <term name="producer" form="verb">produit par</term>
    <term name="recipient" form="verb">à</term>
    <term name="reviewed-author" form="verb">par</term>
    <term name="script-writer" form="verb">scénario de</term>
    <term name="series-creator" form="verb">créé par</term>
    <term name="translator" form="verb">traduit par</term>

    <!-- SHORT VERB ROLE FORMS -->
    <!-- Omitted roles:
         author, chair, container-author, contributor, guest, host, interviewer, original-author, recipient, reviewed-author, series-creator
    -->
    <term name="collection-editor" form="verb-short">ss la dir. de</term>
    <term name="compiler" form="verb-short">compil. par</term>
    <term name="composer" form="verb-short">comp. par</term>
    <term name="contributor" form="verb-short">ac</term>
    <term name="curator" form="verb-short">org. par</term>
    <term name="director" form="verb-short">réal. par</term>
    <term name="editor" form="verb-short">éd. par</term>
    <term name="editor-translator" form="verb-short">éd. et trad. par</term>
    <term name="editortranslator" form="verb-short">éd. et trad. par</term>
    <term name="editorial-director" form="verb-short">ss la dir. de</term>
    <term name="executive-producer" form="verb-short">prod. exé. par</term>
    <term name="guest" form="verb-short">ac pr inv.</term>
    <term name="host" form="verb-short">animé par</term>
    <term name="illustrator" form="verb-short">ill. par</term>
    <term name="narrator" form="verb-short">lu par</term>
    <term name="organizer" form="verb-short">org. par</term>
    <term name="performer" form="verb-short">interpr. par</term>
    <term name="producer" form="verb-short">prod. par</term>
    <term name="script-writer" form="verb-short">scénar. de</term>
    <term name="series-creator" form="verb-short">créé par</term>
    <term name="translator" form="verb-short">trad. par</term>

    <!-- LONG MONTH FORMS -->
    <term name="month-01" gender="masculine">janvier</term>
    <term name="month-02" gender="masculine">février</term>
    <term name="month-03" gender="masculine">mars</term>
    <term name="month-04" gender="masculine">avril</term>
    <term name="month-05" gender="masculine">mai</term>
    <term name="month-06" gender="masculine">juin</term>
    <term name="month-07" gender="masculine">juillet</term>
    <term name="month-08" gender="masculine">août</term>
    <term name="month-09" gender="masculine">septembre</term>
    <term name="month-10" gender="masculine">octobre</term>
    <term name="month-11" gender="masculine">novembre</term>
    <term name="month-12" gender="masculine">décembre</term>

    <!-- SHORT MONTH FORMS -->
    <term name="month-01" form="short">janv.</term>
    <term name="month-02" form="short">févr.</term>
    <term name="month-03" form="short">mars</term>
    <term name="month-04" form="short">avr.</term>
    <term name="month-05" form="short">mai</term>
    <term name="month-06" form="short">juin</term>
    <term name="month-07" form="short">juill.</term>
    <term name="month-08" form="short">août</term>
    <term name="month-09" form="short">sept.</term>
    <term name="month-10" form="short">oct.</term>
    <term name="month-11" form="short">nov.</term>
    <term name="month-12" form="short">déc.</term>

    <!-- SEASONS -->
    <term name="season-01">printemps</term>
    <term name="season-02">été</term>
    <term name="season-03">automne</term>
    <term name="season-04">hiver</term>
  </terms>
</locale>
`,C=`<?xml version="1.0" encoding="utf-8"?>
<locale xmlns="http://purl.org/net/xbiblio/csl" version="1.0" xml:lang="ja-JP">
  <info>
    <translator>
      <name>Shoji Takahashi</name>
    </translator>
    <translator>
      <name>cmplstofB</name>
    </translator>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
    <updated>2026-01-10T00:00:00+00:00</updated>
    <!--
      日本語化にあたって参考にした文献
      * SIST 02:2007「参照文献の書き方」
      * JIS X 0807:1999「電子文献の引用法」
    -->
  </info>
  <style-options punctuation-in-quote="false"/>
  <date form="text">
    <date-part name="year" suffix="年"/>
    <date-part name="month" form="numeric" suffix="月"/>
    <date-part name="day" suffix="日"/>
  </date>
  <date form="numeric">
    <date-part name="year" suffix="年"/>
    <date-part name="month" form="numeric" suffix="月"/>
    <date-part name="day" suffix="日"/>
  </date>
  <terms>
    <!-- LONG GENERAL TERMS -->
    <term name="accessed">参照</term>
    <!-- cf: https://www.jstage.jst.go.jp/static/pages/advance_online_publication/-char/ja -->
    <term name="advance-online-publication">早期公開</term>
    <term name="album">アルバム</term>
    <term name="and">と</term>
    <term name="and others">ほか</term>
    <term name="anonymous">匿名</term>
    <term name="at">にて</term>
    <term name="audio-recording">音声録音</term>
    <term name="available at">入手先</term>
    <term name="by">による</term>
    <term name="circa">およそ</term>
    <term name="cited">引用</term>
    <term name="et-al">ほか</term>
    <term name="film">映像作品</term>
    <term name="forthcoming">近刊</term>
    <term name="from">から</term>
    <term name="henceforth">現在より</term>
    <term name="ibid">前掲</term>
    <term name="in"/>
    <term name="in press">近刊</term>
    <term name="internet">インターネット</term>
    <term name="letter">手紙</term>
    <term name="loc-cit">同頁</term> <!-- like ibid., the abbreviated form is the regular form  -->
    <term name="no date">日付なし</term>
    <term name="no-place">所在不詳</term>
    <term name="no-publisher">作者不詳</term> <!-- sine nomine -->
    <term name="on">において</term>
    <term name="online">オンライン</term>
    <term name="op-cit">同前</term> <!-- like ibid., the abbreviated form is the regular form  -->
    <term name="original-work-published">original work published</term>
    <term name="personal-communication">個人間疎通</term>
    <term name="podcast">音声配信</term>
    <term name="podcast-episode">音声配信の一話</term>
    <term name="preprint">査読前原稿</term>
    <term name="presented at">講演場所</term>
    <term name="radio-broadcast">ラジオ配信</term>
    <term name="radio-series">ラジオ番組</term>
    <term name="radio-series-episode">ラジオ番組の一話</term>
    <term name="reference">
      <single>参照</single>
      <multiple>参照</multiple>
    </term>
    <term name="retrieved">回収</term>
    <term name="review-of">review of</term>
    <term name="scale">位</term>
    <term name="special-issue">特別号</term>
    <term name="special-section">特別節</term>
    <term name="television-broadcast">テレビ放送</term>
    <term name="television-series">テレビ番組</term>
    <term name="television-series-episode">テレビ番組の一話</term>
    <term name="video">動画</term>
    <term name="working-paper">報告書</term>

    <!-- SHORT GENERAL TERMS -->
    <term name="anonymous" form="short">匿名</term>
    <term name="circa" form="short">およそ</term>
    <term name="no date" form="short">日付なし</term>
    <term name="no-place" form="short">所在不詳</term>
    <term name="no-publisher" form="short">作者不詳</term>
    <term name="reference" form="short">
      <single>参照</single>
      <multiple>参照</multiple>
    </term>
    <term name="review-of" form="short">rev. of</term>

    <!-- SYMBOLIC GENERAL FORMS -->

    <!-- LONG ITEM TYPE FORMS -->
    <term name="article">記事</term>
    <term name="article-journal">学術論文</term>
    <term name="article-magazine">雑誌記事</term>
    <term name="article-newspaper">報道記事</term>
    <term name="bill">証書</term>
    <!-- book is in the list of locator terms -->
    <term name="broadcast">配信</term>
    <!-- chapter is in the list of locator terms -->
    <term name="classic">古典</term>
    <term name="collection">集体</term>
    <term name="dataset">データ集合</term>
    <term name="document">文書</term>
    <term name="entry">見出し語</term>
    <term name="entry-dictionary">辞書の見出し語</term>
    <term name="entry-encyclopedia">辞典の見出し語</term>
    <term name="event">催し</term>
    <!-- figure is in the list of locator terms -->
    <term name="graphic">視覚的</term>
    <term name="hearing">聴覚的</term>
    <term name="interview">面接</term>
    <term name="legal_case">裁判事例</term>
    <term name="legislation">法律</term>
    <term name="manuscript">写本</term>
    <term name="map">地図</term>
    <term name="motion_picture">映像記録</term>
    <term name="musical_score">楽譜</term>
    <term name="pamphlet">小冊子</term>
    <term name="paper-conference">会議論文</term>
    <term name="patent">特許</term>
    <term name="performance">実演</term>
    <term name="periodical">定期刊行物</term>
    <term name="personal_communication">個人間疎通</term>
    <term name="post">投稿</term>
    <term name="post-weblog">ブログ投稿</term>
    <term name="regulation">規則</term>
    <term name="report">報告書</term>
    <term name="review">論評</term>
    <term name="review-book">書評</term>
    <term name="software">ソフトウェア</term>
    <term name="song">音声記録</term>
    <term name="speech">講演</term>
    <term name="standard">標準</term>
    <term name="thesis">定立</term>
    <term name="treaty">条約</term>
    <term name="webpage">Webページ</term>

    <!-- SHORT ITEM TYPE FORMS -->
    <term name="article-journal" form="short">学術論文</term>
    <term name="article-magazine" form="short">雑誌記事</term>
    <term name="article-newspaper" form="short">報道記事</term>
    <!-- book is in the list of locator terms -->
    <!-- chapter is in the list of locator terms -->
    <term name="document" form="short">文書</term>
    <!-- figure is in the list of locator terms -->
    <term name="graphic" form="short">視覚的</term>
    <term name="manuscript" form="short">写本</term>
    <term name="motion_picture" form="short">映像記録</term>
    <term name="report" form="short">報告書</term>
    <term name="review" form="short">論評</term>
    <term name="review-book" form="short">書評</term>
    <term name="song" form="short">音声記録</term>

    <!-- LONG VERB ITEM TYPE FORMS -->
    <!-- Only where applicable -->
    <term name="hearing" form="verb">testimony of</term>
    <term name="review" form="verb">review of</term>
    <term name="review-book" form="verb">review of the book</term>

    <!-- SHORT VERB ITEM TYPE FORMS -->

    <!-- HISTORICAL ERA TERMS -->
    <term name="ad">紀元前</term>
    <term name="bc">紀元後</term>
    <term name="bce">通用紀元前</term>
    <term name="ce">通用紀元</term>

    <!-- PUNCTUATION -->
    <term name="open-quote">「</term>
    <term name="close-quote">」</term>
    <term name="open-inner-quote">『</term>
    <term name="close-inner-quote">』</term>
    <term name="page-range-delimiter">–</term>
    <term name="colon">:</term>
    <term name="comma">,</term>
    <term name="semicolon">;</term>

    <!-- ORDINALS -->
    <term name="ordinal">番目</term>
    <term name="ordinal-01">番目</term>
    <term name="ordinal-02">番目</term>
    <term name="ordinal-03">番目</term>
    <term name="ordinal-11">番目</term>
    <term name="ordinal-12">番目</term>
    <term name="ordinal-13">番目</term>

    <!-- LONG ORDINALS -->
    <term name="long-ordinal-01">1番目</term>
    <term name="long-ordinal-02">2番目</term>
    <term name="long-ordinal-03">3番目</term>
    <term name="long-ordinal-04">4番目</term>
    <term name="long-ordinal-05">5番目</term>
    <term name="long-ordinal-06">6番目</term>
    <term name="long-ordinal-07">7番目</term>
    <term name="long-ordinal-08">8番目</term>
    <term name="long-ordinal-09">9番目</term>
    <term name="long-ordinal-10">10番目</term>

    <!-- LONG LOCATOR FORMS -->
    <term name="act">
      <single>幕</single>
      <multiple>幕</multiple>
    </term>
    <term name="appendix">
      <single>附録</single>
      <multiple>附録</multiple>
    </term>
    <term name="article-locator">
      <single>記事</single>
      <multiple>記事</multiple>
    </term>
    <term name="book">
      <single>書籍</single>
      <multiple>書籍</multiple>
    </term>
    <term name="canon">
      <single>規範</single>
      <multiple>規範</multiple>
    </term>
    <term name="chapter">
      <single>章</single>
      <multiple>章</multiple>
    </term>
    <term name="column">
      <single>欄</single>
      <multiple>欄</multiple>
    </term>
    <term name="elocation">
      <single>場所</single>
      <multiple>場所</multiple>
    </term>
    <term name="equation">
      <single>式</single>
      <multiple>式</multiple>
    </term>
    <term name="figure">
      <single>図</single>
      <multiple>図</multiple>
    </term>
    <term name="folio">
      <single>面</single>
      <multiple>面</multiple>
    </term>
    <term name="issue">
      <single>号</single>
      <multiple>号</multiple>
    </term>
    <term name="line">
      <single>行</single>
      <multiple>行</multiple>
    </term>
    <term name="note">
      <single>註</single>
      <multiple>註</multiple>
    </term>
    <term name="opus">
      <single>作品</single>
      <multiple>作品</multiple>
    </term>
    <term name="page">
      <single>ページ</single>
      <multiple>ページ</multiple>
    </term>
    <term name="paragraph">
      <single>段落</single>
      <multiple>段落</multiple>
    </term>
    <term name="part">
      <single>部</single>
      <multiple>部</multiple>
    </term>
    <term name="rule">
      <single>規則</single>
      <multiple>規則</multiple>
    </term>
    <term name="scene">
      <single>舞台</single>
      <multiple>舞台</multiple>
    </term>
    <term name="section">
      <single>節</single>
      <multiple>節</multiple>
    </term>
    <term name="sub-verbo">
      <!--
        『辞書』における「単語」
                ^^^^^^^^
      -->
      <single>における</single>
      <multiple>における</multiple>
    </term>
    <term name="supplement">
      <single>supplement</single>
      <multiple>supplements</multiple>
    </term>
    <term name="table">
      <single>表</single>
      <multiple>表</multiple>
    </term>
    <term name="timestamp"> <!-- generally blank -->
      <single/>
      <multiple/>
    </term>
    <term name="title-locator">
      <single>題名</single>
      <multiple>題名</multiple>
    </term>
    <term name="verse">
      <single>詩歌</single>
      <multiple>詩歌</multiple>
    </term>
    <term name="volume">
      <single>巻</single>
      <multiple>巻</multiple>
    </term>

    <!-- SHORT LOCATOR FORMS -->
    <term name="appendix" form="short">
      <single>附録</single>
      <multiple>附録</multiple>
    </term>
    <term name="article-locator" form="short">
      <single>記事</single>
      <multiple>記事</multiple>
    </term>
    <term name="book" form="short">書籍</term>
    <term name="chapter" form="short">章</term>
    <term name="column" form="short">欄</term>
    <term name="elocation" form="short">
      <single>場所</single>
      <multiple>場所</multiple>
    </term>
    <term name="equation" form="short">
      <single>式</single>
      <multiple>式</multiple>
    </term>
    <term name="figure" form="short">図</term>
    <term name="folio" form="short">面</term>
    <term name="issue" form="short">号</term>
    <term name="line" form="short">行</term>
    <term name="note" form="short">註</term>
    <term name="opus" form="short">作品</term>
    <term name="page" form="short">
      <single>ページ</single>
      <multiple>ページ</multiple>
    </term>
    <term name="paragraph" form="short">段落</term>
    <term name="part" form="short">部</term>
    <term name="rule" form="short">
      <single>規則</single>
      <multiple>規則</multiple>
    </term>
    <term name="scene" form="short">
      <single>舞台</single>
      <multiple>舞台</multiple>
    </term>
    <term name="section" form="short">節</term>
    <term name="sub-verbo" form="short">
      <single>における</single>
      <multiple>における</multiple>
    </term>
    <term name="supplement" form="short">
      <single>supp.</single>
      <multiple>supps.</multiple>
    </term>
    <term name="table" form="short">
      <single>題名</single>
      <multiple>題名</multiple>
    </term>
    <term name="timestamp" form="short"> <!-- generally blank -->
      <single/>
      <multiple/>
    </term>
    <term name="title-locator" form="short">
      <single>tit.</single>
      <multiple>tits.</multiple>
    </term>
    <term name="verse" form="short">
      <single>詩歌</single>
      <multiple>詩歌</multiple>
    </term>
    <term name="volume" form="short">
      <single>巻</single>
      <multiple>巻</multiple>
    </term>

    <!-- SYMBOLIC LOCATOR FORMS -->
    <term name="paragraph" form="symbol">
      <single>¶</single>
      <multiple>¶¶</multiple>
    </term>
    <term name="section" form="symbol">
      <single>§</single>
      <multiple>§§</multiple>
    </term>

    <!-- LONG NUMBER VARIABLE FORMS -->
    <term name="chapter-number">
      <single>chapter</single>
      <multiple>chapters</multiple>
    </term>
    <term name="citation-number">
      <single>citation</single>
      <multiple>citations</multiple>
    </term>
    <term name="collection-number">
      <single>号</single>
      <multiple>号</multiple>
    </term>
    <term name="edition">
      <single>版</single>
      <multiple>版</multiple>
    </term>
    <term name="first-reference-note-number">
      <single>註</single>
      <multiple>註</multiple>
    </term>
    <term name="number">
      <single>number</single>
      <multiple>numbers</multiple>
    </term>
    <term name="number-of-pages">
      <single>ページ</single>
      <multiple>ページ</multiple>
    </term>
    <term name="number-of-volumes">
      <single>volume</single>
      <multiple>volumes</multiple>
    </term>
    <term name="page-first">
      <single>page</single>
      <multiple>pages</multiple>
    </term>
    <term name="printing">
      <single>printing</single>
      <multiple>printings</multiple>
    </term>
    <term name="version">版</term>

    <!-- SHORT NUMBER VARIABLE FORMS -->
    <term name="chapter-number" form="short">
      <single>chap.</single>
      <multiple>chaps.</multiple>
    </term>
    <term name="citation-number" form="short">
      <single>cit.</single>
      <multiple>cits.</multiple>
    </term>
    <term name="collection-number" form="short">no.</term>
    <term name="edition" form="short">版</term>
    <term name="first-reference-note-number" form="short">註</term>
    <term name="number" form="short">
      <single>no.</single>
      <multiple>nos.</multiple>
    </term>
    <term name="number-of-pages" form="short">
      <single>ページ</single>
      <multiple>ページ</multiple>
    </term>
    <term name="number-of-volumes" form="short">
      <single>vol.</single>
      <multiple>vols.</multiple>
    </term>
    <term name="page-first" form="short">
      <single>p.</single>
      <multiple>pp.</multiple>
    </term>
    <term name="printing" form="short">
      <single>print.</single>
      <multiple>prints.</multiple>
    </term>

    <!-- LONG ROLE FORMS -->
    <term name="author"/> <!-- generally blank -->
    <term name="chair">
      <single>議長</single>
      <multiple/>
    </term>
    <term name="collection-editor">
      <single>ed.</single>
      <multiple>eds.</multiple>
    </term>
    <term name="compiler">
      <single>編纂者</single>
      <multiple/>
    </term>
    <term name="composer"/> <!-- generally blank -->
    <term name="container-author"/> <!-- generally blank -->
    <term name="contributor">
      <single>協力者</single>
      <multiple>協力者</multiple>
    </term>
    <term name="curator">
      <single>管理者</single>
      <multiple>管理者</multiple>
    </term>
    <term name="director">
      <single>指導者</single>
      <multiple>指導者</multiple>
    </term>
    <term name="editor">
      <single>編集者</single>
      <multiple>編集者</multiple>
    </term>
    <term name="editor-translator">
      <single>編集・翻訳者</single>
      <multiple>編集・翻訳者</multiple>
    </term>
    <term name="editortranslator">
      <single>編集・翻訳者</single>
      <multiple>編集・翻訳者</multiple>
    </term>
    <term name="editorial-director">
      <single>編集者</single>
      <multiple>編集者</multiple>
    </term>
    <term name="executive-producer">
      <single>制作総指揮者</single>
      <multiple>制作総指揮者</multiple>
    </term>
    <term name="guest">
      <single>特別出演者</single>
      <multiple>特別出演者</multiple>
    </term>
    <term name="host">
      <single>主催者</single>
      <multiple>主催者</multiple>
    </term>
    <term name="illustrator">
      <single>図解者</single>
      <multiple>図解者</multiple>
    </term>
    <term name="interviewer"/> <!-- generally blank -->
    <term name="narrator">
      <single>語り手</single>
      <multiple>語り手</multiple>
    </term>
    <term name="organizer">
      <single>組織者</single>
      <multiple>組織者</multiple>
    </term>
    <term name="original-author"/> <!-- generally blank -->
    <term name="performer">
      <single>演者</single>
      <multiple>演者</multiple>
    </term>
    <term name="producer">
      <single>指揮者</single>
      <multiple>指揮者</multiple>
    </term>
    <term name="recipient"/> <!-- generally blank -->
    <term name="reviewed-author"/> <!-- generally blank -->
    <term name="script-writer">
      <single>執筆者</single>
      <multiple>執筆者</multiple>
    </term>
    <term name="series-creator">
      <single>番組制作者</single>
      <multiple>番組制作者</multiple>
    </term>
    <term name="translator">
      <single>翻訳者</single>
      <multiple>翻訳者</multiple>
    </term>

    <!-- SHORT ROLE FORMS -->
    <term name="compiler" form="short">纂</term>
    <term name="contributor" form="short">協力</term>
    <term name="curator" form="short">管理</term>
    <term name="director" form="short">指導</term>
    <term name="editor" form="short">編</term>
    <term name="editor-translator" form="short">編・訳</term>
    <term name="editortranslator" form="short">編・訳</term>
    <term name="editorial-director" form="short">編・指導</term>
    <term name="executive-producer" form="short">総指揮</term>
    <term name="illustrator" form="short">図解</term>
    <term name="narrator" form="short">語り</term>
    <term name="organizer" form="short">組織</term>
    <term name="performer" form="short">演</term>
    <term name="producer" form="short">指揮</term>
    <term name="script-writer" form="short">執筆</term>
    <term name="series-creator" form="short">番組制作</term>
    <term name="translator" form="short">訳</term>

    <!-- VERB ROLE FORMS -->
    <term name="chair" form="verb">議長: </term>
    <term name="collection-editor" form="verb">編集者: </term>
    <term name="compiler" form="verb">編纂者: </term>
    <term name="container-author" form="verb">作者: </term>
    <term name="contributor" form="verb">協力者: </term>
    <term name="curator" form="verb">蒐集者: </term>
    <term name="director" form="verb">指導者: </term>
    <term name="editor" form="verb">編集者: </term>
    <term name="editor-translator" form="verb">編集・翻訳者: </term>
    <term name="editortranslator" form="verb">編集・翻訳者: </term>
    <term name="editorial-director" form="verb">編集者: </term>
    <term name="executive-producer" form="verb">制作総指揮者: </term>
    <term name="guest" form="verb">特別出演者: </term>
    <term name="host" form="verb">主催者: </term>
    <term name="illustrator" form="verb">図解者: </term>
    <term name="interviewer" form="verb">面接者: </term>
    <term name="narrator" form="verb">語り手: </term>
    <term name="organizer" form="verb">組織者: </term>
    <term name="performer" form="verb">演者: </term>
    <term name="producer" form="verb">指揮者: </term>
    <term name="recipient" form="verb">受領者: </term>
    <term name="reviewed-author" form="verb">査読者: </term>
    <term name="script-writer" form="verb">執筆者: </term>
    <term name="series-creator" form="verb">番組作成者: </term>
    <term name="translator" form="verb">翻訳者: </term>

    <!-- SHORT VERB ROLE FORMS -->
    <term name="collection-editor" form="verb-short">編: </term>
    <term name="compiler" form="verb-short">纂: </term>
    <term name="contributor" form="verb-short">協力: </term>
    <term name="curator" form="verb-short">管理: </term>
    <term name="director" form="verb-short">指導: </term>
    <term name="editor" form="verb-short">編: </term>
    <term name="editor-translator" form="verb-short">編・訳: </term>
    <term name="editortranslator" form="verb-short">編・訳: </term>
    <term name="editorial-director" form="verb-short">編: </term>
    <term name="executive-producer" form="verb-short">総指揮: </term>
    <term name="guest" form="verb-short">特別出演: </term>
    <term name="host" form="verb-short">主催: </term>
    <term name="illustrator" form="verb-short">図: </term>
    <term name="narrator" form="verb-short">語り: </term>
    <term name="organizer" form="verb-short">組織: </term>
    <term name="performer" form="verb-short">演: </term>
    <term name="producer" form="verb-short">指揮: </term>
    <term name="script-writer" form="verb-short">執筆: </term>
    <term name="series-creator" form="verb-short">番組制作: </term>
    <term name="translator" form="verb-short">訳: </term>

    <!-- LONG MONTH FORMS -->
    <term name="month-01">1月</term>
    <term name="month-02">2月</term>
    <term name="month-03">3月</term>
    <term name="month-04">4月</term>
    <term name="month-05">5月</term>
    <term name="month-06">6月</term>
    <term name="month-07">7月</term>
    <term name="month-08">8月</term>
    <term name="month-09">9月</term>
    <term name="month-10">10月</term>
    <term name="month-11">11月</term>
    <term name="month-12">12月</term>

    <!-- SHORT MONTH FORMS -->
    <term name="month-01" form="short">1月</term>
    <term name="month-02" form="short">2月</term>
    <term name="month-03" form="short">3月</term>
    <term name="month-04" form="short">4月</term>
    <term name="month-05" form="short">5月</term>
    <term name="month-06" form="short">6月</term>
    <term name="month-07" form="short">7月</term>
    <term name="month-08" form="short">8月</term>
    <term name="month-09" form="short">9月</term>
    <term name="month-10" form="short">10月</term>
    <term name="month-11" form="short">11月</term>
    <term name="month-12" form="short">12月</term>

    <!-- SEASONS -->
    <term name="season-01">春季</term>
    <term name="season-02">夏季</term>
    <term name="season-03">秋季</term>
    <term name="season-04">冬季</term>
  </terms>
</locale>
`,j={page:"页码",section:"条",paragraph:"款",chapter:"章",article:"条文"},D=new Set(["zh","en","de","fr","ja"]),I=new Set("article article-journal article-magazine article-newspaper bill book broadcast chapter classic collection dataset document entry entry-dictionary entry-encyclopedia event figure graphic hearing interview legal_case legislation manuscript map motion_picture musical_score pamphlet paper-conference patent performance periodical personal_communication post post-weblog regulation report review review-book software song speech standard thesis treaty webpage".split(" "));function F(e){let l;try{l=JSON.parse(e)}catch{throw new Error("JSON 格式有误，请导入 Zotero 导出的 CSL JSON，或检查逗号与引号。")}if(Array.isArray(l)||(l=[l]),!l.length)throw new Error("文件中没有文献。");if(l.length>200)throw new Error("每次最多导入 200 条文献。");const m=new Set;return l.map((n,h)=>{const s=`第 ${h+1} 条`;if(!n||typeof n!="object"||Array.isArray(n))throw new Error(`${s}不是文献对象。`);if(typeof n.type!="string"||!I.has(n.type))throw new Error(`${s}缺少有效的 CSL type（如 book、article-journal、legal_case）。`);const f=String(n.id??`item-${h+1}`);if(m.has(f))throw new Error(`${s}的 id「${f}」重复，请为不同文献使用不同 id。`);m.add(f);for(const p of["author","editor","translator","compiler"])if(n[p]!==void 0&&(!Array.isArray(n[p])||n[p].some(r=>!r||typeof r!="object"||!["literal","family","given"].some(o=>typeof r[o]=="string"))))throw new Error(`${s}的 ${p} 应为姓名数组，如 [{"literal":"张三"}]。`);for(const p of["issued","accessed","available-date"])if(n[p]!==void 0){const r=n[p];if(!r||typeof r!="object"||!(typeof r.literal=="string"||Array.isArray(r["date-parts"])&&r["date-parts"].length&&r["date-parts"].every(o=>Array.isArray(o)&&o.length>=1&&o.length<=3&&o.every(Number.isInteger))))throw new Error(`${s}的 ${p} 应为 CSL 日期，如 {"date-parts":[[2024,10,12]]}。`)}if(n.language!==void 0&&typeof n.language!="string")throw new Error(`${s}的 language 应为语言代码字符串。`);if(n.title!==void 0&&typeof n.title!="string")throw new Error(`${s}的 title 应为字符串。`);return{...n,id:f}})}function B(e,l=""){const m=[],n=(e.language||"en").split(/[-_]/)[0].toLowerCase();return e.language?D.has(n)||m.push("原样式没有该语种的专用规则，将回退为英文。"):m.push("未填写 language，按原样式默认使用英文；中文请设为 zh-CN。"),n==="fr"&&m.push("原样式注明法文支持尚不完善，请核对结果。"),!e.title&&!(n==="de"&&e.type==="chapter")&&m.push("缺少标题。"),["book","chapter","article-journal","thesis"].includes(e.type)&&(!e.author?.length&&!e.editor?.length&&!e.compiler?.length&&m.push("未填写作者或编者。"),e.issued||m.push("缺少出版年份。"),["book","chapter"].includes(e.type)&&!e.publisher&&m.push("未填写出版社。"),["chapter","article-journal"].includes(e.type)&&!e["container-title"]&&!e["collection-title"]&&m.push("未填写刊名或文集名。"),!l&&!(n==="fr"&&e.page)&&m.push("未填写引用定位；文献总页码不能代替具体引文页码。")),["webpage","post","post-weblog"].includes(e.type)&&(e.URL||m.push("未填写网址。"),!e.issued&&!e.accessed&&m.push("缺少发布日期和访问日期。")),e.type==="legal_case"&&n==="zh"&&(e["collection-title"]||e["container-title"]?(e["available-date"]||m.push("缺少案例发布时间 available-date；请勿以裁判日期代替。"),e["collection-title"]&&!e["collection-number"]&&m.push("指导性案例缺少 collection-number。"),!e["collection-title"]&&!e.issue&&m.push("公报案例缺少期号 issue。")):e.archive||(!e.authority||!e.number||!e.genre)&&m.push("裁判文书应填写法院 authority、案号 number 和文书类型 genre。")),m}function H(e){return e.replace(/<i\b[^>]*>([\s\S]*?)<\/i>/gi,"*$1*").replace(/<[^>]*>/g,"").replace(/&#(x[\da-f]+|\d+);/gi,(l,m)=>String.fromCodePoint(m[0].toLowerCase()==="x"?parseInt(m.slice(1),16):Number(m))).replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&nbsp;/g," ")}function G(e,l,m,n){const h=new Map(e.map(r=>[String(r.id),r])),s=new k.Engine({retrieveLocale:r=>n[r]||n[Object.keys(n).find(o=>o.startsWith(r.split("-")[0]))]||n["en-US"],retrieveItem:r=>structuredClone(h.get(String(r)))},m);s.updateItems(e.map(r=>String(r.id)));const f=[],p=[];return l.forEach((r,o)=>{if(!h.has(String(r.id)))throw new Error("引用对应的文献不存在。");const d=`citation-${o}`,b={id:String(r.id),...r.locator?.trim()?{locator:r.locator.trim(),label:r.label||"page"}:{}},y={citationID:d,citationItems:[b],properties:{noteIndex:o+1}},[,O]=s.processCitationCluster(y,f,[]);O.forEach(([x,a])=>{p[x]=H(a)}),f.push([d,o+1])}),p}const q=(e,l)=>G(e,l,A,{"en-US":M,"zh-CN":T,"de-DE":L,"fr-FR":N,"ja-JP":C}),R=JSON.stringify([{id:"book-1",type:"book",language:"zh-CN",author:[{literal:"王名扬"}],title:"美国行政法",publisher:"中国法制出版社",issued:{"date-parts":[[1995]]}},{id:"article-1",type:"article-journal",language:"en-US",author:[{given:"Charles A.",family:"Reich"}],title:"The New Property","container-title":"Yale Law Journal",volume:"73",page:"733-787",issued:{"date-parts":[[1964]]}},{id:"law-1",type:"legislation",language:"zh-CN",title:"中华人民共和国民法典",section:"1224"}],null,2),S={"zh-CN":"中文","en-US":"English","de-DE":"Deutsch","fr-FR":"Français","ja-JP":"日本語"};function V({onGenerate:e}){const[l,m]=v.useState(""),[n,h]=v.useState([]),[s,f]=v.useState([]),[p,r]=v.useState(""),[o,d]=v.useState(!1),b=a=>{try{const c=F(a);h(c),f(c.map(u=>({key:crypto.randomUUID(),id:u.id,locator:"",label:"page"}))),r(""),d(!1)}catch(c){r(c.message)}},y=async a=>{if(a){if(a.size>2*1024*1024){r("文件超过 2 MB，请分批导入。");return}try{const c=await a.text();m(c),d(!0),b(c)}catch{r("文件读取失败，请重新选择。")}}},O=()=>{try{const a=q(n,s);e(s.map((c,u)=>{const i=n.find(g=>g.id===c.id);return{id:crypto.randomUUID(),original:JSON.stringify(i,null,2),formatted:a[u],style:E.LEGAL,provider:z.DEEPSEEK,source:"csl",timestamp:Date.now(),warnings:B(i,c.locator)}})),r("")}catch(a){r(`无法生成引注：${a.message}`)}},x=(a,c)=>f(u=>u.map(i=>i.key===a?{...i,...c}:i));return t.createElement("div",{className:"csl-editor"},t.createElement("div",{className:"input-toolbar"},t.createElement("label",{className:"button secondary upload"},"导入 CSL JSON",t.createElement("input",{type:"file",accept:".json,application/json",onChange:a=>{y(a.target.files?.[0]),a.target.value=""}})),t.createElement("button",{className:"text-button",onClick:()=>{m(R),b(R)}},"载入示例")),t.createElement("textarea",{"aria-label":"CSL JSON 文献数据",className:"json-input",value:l,onChange:a=>{m(a.target.value),d(!0)},placeholder:`粘贴 CSL JSON，或从 Zotero 选择“导出条目 → CSL JSON”。

[{ "id": "1", "type": "book", "language": "zh-CN", "title": "…" }]`,spellCheck:!1}),t.createElement("button",{className:"button secondary parse-button",disabled:!l.trim(),onClick:()=>b(l)},o&&n.length?"更新文献":"解析文献"),n.length>0&&t.createElement("div",{className:"reference-list"},s.map((a,c)=>{const u=n.find(i=>i.id===a.id);return t.createElement("div",{className:"reference-editor",key:a.key},t.createElement("div",{className:"reference-title"},t.createElement("span",{className:"number"},String(c+1).padStart(2,"0")),t.createElement("strong",null,u.title||"未填写标题"),t.createElement("button",{className:"icon-button",title:"移除此处引用","aria-label":`移除第 ${c+1} 处引用`,disabled:o,onClick:()=>f(i=>i.filter(g=>g.key!==a.key))},"×")),t.createElement("div",{className:"reference-fields"},t.createElement("select",{"aria-label":`第 ${c+1} 条文献语言`,disabled:o,value:u.language||"",onChange:i=>h(g=>g.map(w=>w.id===u.id?{...w,language:i.target.value}:w))},t.createElement("option",{value:""},"默认（英文）"),!Object.hasOwn(S,u.language||"")&&u.language&&t.createElement("option",{value:u.language},u.language),Object.entries(S).map(([i,g])=>t.createElement("option",{key:i,value:i},g))),t.createElement("select",{"aria-label":`第 ${c+1} 处定位类型`,disabled:o,value:a.label,onChange:i=>x(a.key,{label:i.target.value})},Object.entries(j).map(([i,g])=>t.createElement("option",{key:i,value:i},g))),t.createElement("input",{"aria-label":`第 ${c+1} 处引用定位`,disabled:o,value:a.locator,onChange:i=>x(a.key,{locator:i.target.value}),placeholder:a.label==="page"?"如 18-20":"如 1224"})),t.createElement("button",{className:"text-button repeat",disabled:o||s.length>=200,onClick:()=>f(i=>[...i,{...a,key:crypto.randomUUID(),locator:""}])},"＋ 再次引用"))})),o&&n.length>0&&t.createElement("p",{className:"inline-note"},"JSON 已修改，请先更新文献。"),p&&t.createElement("p",{className:"error",role:"alert"},p),t.createElement("button",{className:"button primary generate",disabled:!s.length||o,onClick:O},"生成",s.length?` ${s.length} 条`:"","引注 ",t.createElement("span",{"aria-hidden":"true"},"↗")),t.createElement("details",{className:"field-guide"},t.createElement("summary",null,"字段填写说明"),t.createElement("p",null,"语言默认英文，中文请填写 zh-CN。page 记录文献起止页；上方定位填写本次引用页码。"),t.createElement("p",null,"指导性案例：collection-title、collection-number、available-date。公报案例：container-title、issue、available-date。裁判文书：authority、number、genre。"),t.createElement("p",null,"德文法律评注使用 chapter，标题留空；祝贺或纪念文集将文集名放入 collection-title。法文及英国案例仍需人工核对。")))}export{V as default};
