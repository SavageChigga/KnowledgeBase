import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as d,a as e,b as t,w as a,d as n,e as o,r as i}from"./app.287b883d.js";const h={},_=n('<p>NAS \u4E3B\u8981\u7528\u4E8E Docker \u670D\u52A1\u3001\u5F71\u89C6\u7BA1\u7406\u548C\u6587\u4EF6\u5B58\u50A8\u5907\u7528\u8FD9\u4E09\u65B9\u9762\u3002\u7FA4\u6656 NAS \u5728\u4F7F\u7528\u524D\uFF0C\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\uFF1A</p><ul><li><code>\u63A7\u5236\u9762\u677F\uFF0D\u6587\u4EF6\u670D\u52A1\uFF0DSMB\uFF0D\u9AD8\u7EA7\u8BBE\u7F6E</code>\uFF0C\u5C06\u6700\u5C0F SMB \u534F\u8BAE \u8BBE\u4E3A SMB1\uFF0C\u907F\u514D\u90E8\u5206\u5E94\u7528\u53D1\u73B0\u4E86 NAS \u4F46\u65E0\u6CD5\u6253\u5F00\u5171\u4EAB\u6587\u4EF6\u3002</li><li><code>\u63A7\u5236\u9762\u677F\uFF0D\u4EFB\u52A1\u8BA1\u5212 - \u65B0\u589E - \u8BA1\u5212\u7684\u4EFB\u52A1 - \u7528\u6237\u5B9A\u4E49\u7684\u811A\u672C</code>\uFF0C\u7ED9 NAS \u5EFA\u7ACB\u5B9A\u65F6\u4EFB\u52A1\u811A\u672C\u3002</li><li>SSD \u7F13\u5B58\u5BF9\u5BB6\u7528\u7684 NAS \u6027\u80FD\u63D0\u5347\u4E0D\u5927\uFF0C\u6CA1\u5FC5\u8981\u52A0\u3002</li><li>DS/Transmission \u5957\u4EF6\uFF1A\u7528\u4E8E PT \u4E0B\u8F7D (\u7981\u7528 DHT\uFF0C\u534A\u5C0F\u65F6\u505C\u6B62\u505A\u79CD)\u3002</li><li>Synology Drive Server \u5957\u4EF6\uFF1A\u7535\u8111\u6587\u4EF6\u5907\u4EFD\u3002</li><li>\u7FA4\u6656\u7CFB\u7EDF\u5206\u5E03\u5728\u6240\u6709\u786C\u76D8\uFF0C\u62D4\u51FA\u4E00\u4E2A\u4E0D\u5F71\u54CD\u4F7F\u7528\u3002\u4F46\u5E94\u7528\u4F1A\u6709\u5F71\u54CD\uFF1F</li></ul><h2 id="nas-docker" tabindex="-1"><a class="header-anchor" href="#nas-docker" aria-hidden="true">#</a> NAS Docker</h2><p>NAS Docker \u5EFA\u8BAE\u6307\u5B9A\u672C\u5730\u7AEF\u53E3\uFF0C\u5426\u5219\u91CD\u542F\u5BB9\u5668\u4F1A\u8BA9\u7AEF\u53E3\u53D1\u751F\u6539\u53D8\uFF0C\u91CD\u542F\u4E0D\u4F1A\u4E0D\u5F71\u54CD docker \u914D\u7F6E\u3002\u5347\u7EA7\u5BB9\u5668\u955C\u50CF\uFF0C\u4E0D\u5F71\u54CD\u5185\u90E8\u6570\u636E\u5E93\u3002</p><p>\u7FA4\u6656\u7684\u300CDocker \u5BFC\u51FA\u300D\u53EA\u4F1A\u5BFC\u51FA\u5B89\u88C5\u955C\u50CF\u548C\u914D\u7F6E\uFF0C\u4F46\u4E0D\u5305\u62EC\u5BB9\u5668\u5185\u90E8\u4F7F\u7528\u7684\u6570\u636E\u5E93\uFF0C\u7528\u5904\u4E0D\u5927\u3002</p><h3 id="docker-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#docker-\u5B89\u88C5" aria-hidden="true">#</a> Docker \u5B89\u88C5</h3>',6),p=o("\u63A8\u8350\u7528 "),u=e("code",null,"docker-compose.yml",-1),f=o(" \u5B89\u88C5 Docker\uFF0C\u955C\u50CF\u4F1A\u81EA\u52A8\u540C\u6B65\u5230 NAS \u7684\u5BB9\u5668\u5217\u8868\u4E2D\u3002docker-compose \u4F7F\u7528\u53C2\u8003 "),m={href:"http://ttrss.henry.wang/zh/#%E9%80%9A%E8%BF%87-docker-compose-%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noopener noreferrer"},k=o("TTRSS docker-compose"),b=o("\u3002"),g=n('<ol><li>\u6253\u5F00 <code>\u63A7\u5236\u9762\u677F</code>-<code>\u7EC8\u7AEF\u673A\u548C SNMP</code>\uFF0C\u542F\u52A8 SSH \u529F\u80FD\u3002</li><li>putty \u8FDE\u63A5\u7FA4\u6656 SSH\uFF0C\u8FDB\u5165 <code>docker-compose.yml</code> \u6240\u5728\u8DEF\u5F84\uFF0C\u6BD4\u5982 <code>cd /volume3/storage</code>\u3002</li><li>\u901A\u8FC7\u7EC8\u7AEF\u5728\u540C\u76EE\u5F55\u4E0B\u8FD0\u884C <code>sudo docker-compose up -d</code> \u540E\u7B49\u5F85\u90E8\u7F72\u5B8C\u6210\u3002</li><li>\u5173\u95ED SSH \u529F\u80FD\u3002</li></ol><p>\u6CE8\u610F\uFF1A\u975E root \u7528\u6237\u9700\u5728\u547D\u4EE4\u524D\u6DFB\u52A0 <code>sudo</code>\uFF0C\u5426\u5219\u4F1A\u63D0\u793A <code>Permission denied</code>\u3002</p><h3 id="docker-\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#docker-\u5BB9\u5668" aria-hidden="true">#</a> Docker \u5BB9\u5668</h3><p>NAS \u4E0A\u5E38\u7528\u7684 Docker \u5BB9\u5668\u670D\u52A1\uFF1A</p>',4),v=e("li",null,"RSSHub\uFF1A\u65E0\u9700\u4FDD\u5B58\u6570\u636E\uFF0CpubData \u4E3A GMT \u65F6\u533A\uFF0C\u666E\u901A\u7528\u6237\u65E0\u6CD5\u66F4\u6539\uFF0CDocker Timezone \u8BBE\u7F6E\u4E5F\u4E0D\u4F1A\u6709\u6539\u53D8\u3002",-1),S=e("li",null,"Huginn\uFF1A\u5B9A\u671F\u5907\u4EFD\u6293\u53D6\u811A\u672C\uFF0C\u6570\u636E\u5E93\u4FDD\u5B58\u5728\u672C\u5730\u3002",-1),A=o("Tiny Tiny RSS\uFF1A\u5B9A\u671F\u5907\u4EFD\u8BA2\u9605\u6E90\u548C\u8BBE\u7F6E\uFF0C\u81EA\u52A8\u66F4\u65B0\u3002 "),w={href:"https://registry.hub.docker.com/r/wangqiru/mercury-parser-api",target:"_blank",rel:"noopener noreferrer"},N=o("mercury-parser-api"),y=o("\uFF1A\u5168\u6587\u63D2\u4EF6"),T={href:"https://github.com/AragonSnow/qiandao",target:"_blank",rel:"noopener noreferrer"},x=o("qiandao"),D=o("\uFF1A\u81EA\u52A8\u7B7E\u5230\u5F00\u6E90\u6846\u67B6\uFF0C\u9700\u642D\u914D\u6D4F\u89C8\u5668\u6269\u5C55 "),E={href:"https://github.com/ckx000/get-cookies",target:"_blank",rel:"noopener noreferrer"},B=o("get-cookies"),M=o(" \u4F7F\u7528\uFF0C\u53EF\u5BFC\u51FA\u914D\u7F6E\u3002"),H={href:"https://containrrr.dev/watchtower/",target:"_blank",rel:"noopener noreferrer"},R=o("watchtower"),$=o("\uFF1A\u76D1\u63A7\u5E76\u66F4\u65B0 Docker \u5BB9\u5668\u3002 "),I=e("ul",null,[e("li",null,[o("\u76D1\u63A7\u6307\u5B9A\u540D\u79F0\u7684\u955C\u50CF\uFF1A"),e("code",null,"docker run -d --name watchtower -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --cleanup --run-once nginx redis"),o("\u3002\u672C\u6848\u4F8B\u53EA\u66F4\u65B0\u540D\u4E3A\u201Cnginx\u201D\u548C\u201Credis\u201D\u7684\u5BB9\u5668\uFF0C\u5176\u4ED6\u5BB9\u5668\u5C06\u88AB\u5FFD\u7565\u3002")]),e("li",null,[o("\u6307\u5B9A\u5BB9\u5668\u7684 compose \u547D\u4EE4\u4E2D\u6DFB\u52A0 lable "),e("code",null,"com.centurylinklabs.watchtower.enable=false"),o("\uFF0C\u53EF\u7981\u6B62\u8BE5\u5BB9\u5668\u7684\u76D1\u63A7\u548C\u66F4\u65B0\u3002")])],-1),z={href:"https://github.com/easychen/checkchan-dist",target:"_blank",rel:"noopener noreferrer"},L=o("Check \u9171"),q=o("\uFF1A\u76D1\u6D4B\u7F51\u9875\u5185\u5BB9\u53D8\u5316\uFF0C\u5E76\u53D1\u9001\u5F02\u52A8\u5230\u5FAE\u4FE1\u3002\u4EA6\u652F\u6301 http status\u3001json \u548C rss \u76D1\u6D4B\u3002\u914D\u5408\u81EA\u67B6\u4E91\u7AEF\uFF0C\u5173\u7535\u8111\u540E\u4E5F\u80FD\u8FD0\u884C\u3002"),C={href:"https://www.home-assistant.io/",target:"_blank",rel:"noopener noreferrer"},F=o("Home Assistant"),P=o("\uFF1A\u5F00\u6E90\u5BB6\u5EAD\u81EA\u52A8\u5316\u5E73\u53F0\uFF0C\u53EF\u81EA\u5B9A\u4E49\u96C6\u4E2D\u7BA1\u7406\u5404\u54C1\u724C\u7684\u667A\u80FD\u5BB6\u5C45\u8BBE\u5907\u3002\u7C73\u5BB6\u8BBE\u5907\u9700\u4F7F\u7528 hacs \u4E0B\u7684\u96C6\u6210 "),V=o("Xiaomi Miot Auto"),j=o("\u3002"),X=o("Node-RED"),G=o("\uFF1A\u5F00\u6E90\u6D41\u5904\u7406\uFF0C\u7C7B\u4F3C\u672C\u5730\u7248\u7684 IFTTT\u3002"),O=o("\u5F85\u4E86\u89E3 "),J={href:"https://blog.csdn.net/alex_yangchuansheng/article/details/122295193",target:"_blank",rel:"noopener noreferrer"},K=o("n8n"),Q=o("\uFF1A\u5F00\u6E90 IFTTT \u5DE5\u5177\uFF0C\u504F\u91CD\u4E8E\u4E91\u670D\u52A1\u3002"),U={href:"https://github.com/EstrellaXD/Auto_Bangumi",target:"_blank",rel:"noopener noreferrer"},W=o("AutoBangumi"),Y=o("\uFF1A\u81EA\u52A8\u8FFD\u756A\u5668\uFF0C\u7528\u4EE5\u66FF\u4EE3\u81EA\u6211\u5BA1\u67E5\u7684 Bilibili\u3002"),Z={href:"https://github.com/jxxghp/nas-tools/wiki/%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"},ee=o("nas-tools"),oe=o("\uFF1A\u53F7\u79F0\u80FD\u81EA\u52A8\u6574\u7406\u6587\u4EF6\uFF0C\u4F46\u6D4B\u8BD5\u8BC6\u522B\u4E2D\u5F88\u5BB9\u6613\u51FA\u9519\uFF0C\u6682\u4E0D\u8003\u8651\u3002"),te=e("li",null,"qbittorrent\uFF1ALinux \u7248\u672C\u63D0\u793A\u51FA\u9519\uFF0C\u6682\u505C\u3002",-1),se=e("li",null,"Emby\u3001Plex\uFF1A\u6D41\u5A92\u4F53\u65B9\u6848\uFF0C\u6682\u4E0D\u8003\u8651\u3002",-1),ne=e("li",null,"HomeAssistant\uFF1A\u5F00\u6E90\u667A\u80FD\u5BB6\u5C45\u5E73\u53F0",-1),re=e("li",null,"Clash\uFF1A\u4EE3\u7406\u670D\u52A1\u5668",-1),ae=e("h2",{id:"\u5F71\u89C6\u6574\u7406",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5F71\u89C6\u6574\u7406","aria-hidden":"true"},"#"),o(" \u5F71\u89C6\u6574\u7406")],-1),ie=e("p",null,"\u4E0B\u8F7D\u6587\u4EF6\u540E\uFF0C\u7528 tinyMediaManager \u91CD\u547D\u540D\u5E76\u4E0B\u8F7D NFO \u548C\u5F71\u89C6\u5C01\u9762\uFF0C\u6700\u540E\u653E\u7F6E\u4E8E\u5206\u7C7B\u6587\u4EF6\u5939\u3002",-1),le={href:"https://www.tinymediamanager.org/download/",target:"_blank",rel:"noopener noreferrer"},ce=o("tinyMediaManager"),de=o(" v4 \u514D\u8D39\u7248\u8DB3\u591F\u4E2A\u4EBA\u4F7F\u7528\uFF0Cv3 \u4F5C\u5076\u5C14\u8865\u5145\u4F7F\u7528\uFF0C\u641C\u7D22\u9996\u9009\u8BED\u8A00\u6539\u4E3A\u300C\u5927\u9646\u7B80\u4F53\u300D\u66F4\u7CBE\u51C6\u3002"),he=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),_e=n('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7535\u89C6\u8282\u76EE\u91CD\u547D\u540D\u89C4\u5219</span>\n\u5B63\u6587\u4EF6\u5939\u540D\uFF1ASeason <span class="token variable">${seasonNr}</span>\n\u5267\u96C6\u6863\u6848\u540D\uFF1A<span class="token variable">${showTitle}</span> - S<span class="token variable">${seasonNr2}</span>E<span class="token variable">${episodeNr2}</span> - <span class="token variable">${title}</span>\n\n<span class="token comment"># \u5F53\u53EA\u6709\u4E00\u5B63\u65F6\uFF0C\u5219\u66F4\u6539\u91CD\u547D\u540D\u89C4\u5219</span>\n\u5B63\u6587\u4EF6\u5939\u540D\uFF1A\u4E3A\u7A7A\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8C03\u7528\u9ED8\u8BA4\u503C\n\u5267\u96C6\u6863\u6848\u540D\uFF1A<span class="token variable">${showTitle}</span> - E<span class="token variable">${episodeNr2}</span>\n\n<span class="token comment"># \u591A\u5B63\uFF0C\u6709\u6807\u9898\u65F6</span>\n\u5267\u96C6\u6863\u6848\u540D\uFF1A<span class="token variable">${showTitle}</span> - E<span class="token variable">${episodeNr2}</span> - <span class="token variable">${title}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nas-\u786C\u76D8" tabindex="-1"><a class="header-anchor" href="#nas-\u786C\u76D8" aria-hidden="true">#</a> NAS \u786C\u76D8</h2><p>\u63D2\u5165\u65B0\u786C\u76D8\uFF0C\u65B0\u5EFA\u50A8\u5B58\u7A7A\u95F4\uFF0C\u4F7F\u7528 Btrfs \u6216 Basic \u683C\u5F0F\u3002SHR \u662F\u7FA4\u6656\u7684\u667A\u80FD RAID \u683C\u5F0F\uFF0C\u4E0D\u9002\u7528\u4E8E\u786C\u76D8\u5BB9\u91CF\u4E0D\u540C\u7684\u60C5\u51B5\u3002</p><table><thead><tr><th>\u786C\u76D8</th><th>\u5BB9\u91CF</th><th>\u5230\u671F\u65F6\u95F4\uFF085 \u5E74\uFF09</th></tr></thead><tbody><tr><td>\u786C\u76D8 1</td><td>10T</td><td>2025-06-18</td></tr><tr><td>\u786C\u76D8 2</td><td>4T</td><td>2023-01-24</td></tr><tr><td>\u786C\u76D8 3</td><td>14T</td><td>2027-02-11</td></tr><tr><td>\u786C\u76D8 4</td><td>8T</td><td>2026-01-06</td></tr><tr><td>\u51B7\u5907\u4EFD</td><td>2T</td><td>2014-10</td></tr></tbody></table><p>\u6362\u4E0B\u7684\u673A\u68B0\u786C\u76D8\u505A\u51B7\u5907\u4EFD\uFF0C\u5B58\u50A8\u7167\u7247\u7B49\u957F\u671F\u6570\u636E\u3002</p><p>\u786C\u76D8\u4E34\u671F\u540E\uFF0C\u7528\u5927\u5BB9\u91CF\u786C\u76D8\u66FF\u6362\u3002\u8003\u8651\u8FDB\u5165 <code>\u5B58\u50A8\u6C60 - \u66F4\u6539 RAID \u7C7B\u578B</code>\uFF0C\u65E0\u635F\u8F6C\u6362 basic \u5230 Raid1\u3002\u4E0D\u8FC7\uFF0C\u4E0D\u540C\u5BB9\u91CF\u786C\u76D8\u7EC4 RAID\uFF0C\u53EA\u80FD\u4EE5\u6700\u5C0F\u78C1\u76D8\u5BB9\u91CF\u8BA1\u4F7F\u7528\u7A7A\u95F4\u3002</p><p>\u66F4\u6362\u786C\u76D8\u540E\uFF0C\u6CE8\u610F\u5C06\u6570\u636E\u8FDE\u540C\u6587\u4EF6\u5939\u7528 file station \u590D\u5236\u8FC7\u53BB (\u6309\u4F4F Shift \u9009\u4E2D\u6240\u6709\u4F60\u8981\u7684\u6587\u4EF6\u70B9\u53F3\u952E \u79FB\u52A8\u5230...)\uFF0C\u5173\u673A\u5378\u8F7D\u65E7\u76D8\u3002\u5982\u679C\u8BE5\u786C\u76D8\u6D89\u53CA\u5957\u4EF6\u4F4D\u7F6E\uFF0C\u6CE8\u610F\u68C0\u67E5\u8BBE\u7F6E\u3002<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p>\u5171\u4EAB\u6587\u4EF6\u8FC1\u79FB\uFF1A\u8FDB\u5165 <code>\u63A7\u5236\u9762\u677F-\u5171\u4EAB\u6587\u4EF6\u5939</code>\uFF0C\u628A\u4F60\u7684\u5171\u4EAB\u6587\u4EF6\u5939\u4F4D\u7F6E\u4FEE\u6539\u5230\u65B0\u50A8\u5B58\u7A7A\u95F4\u3002<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p><hr class="footnotes-sep">',9),pe={class:"footnotes"},ue={class:"footnotes-list"},fe={id:"footnote1",class:"footnote-item"},me={href:"https://post.smzdm.com/p/a0d67m2z/",target:"_blank",rel:"noopener noreferrer"},ke=o("\u7FA4\u6656 NAS \u4F7F\u7528 Emby+tMM \u6253\u9020\u5168\u5E73\u53F0\u89C2\u5F71\u7545\u723D\u4F53\u9A8C\uFF08\u9644\u4E0B\u8F7D\u5730\u5740\uFF09"),be=o(),ge=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1),ve={id:"footnote2",class:"footnote-item"},Se={href:"https://www.bigzhang.com/3264.html",target:"_blank",rel:"noopener noreferrer"},Ae=o("\u5982\u4F55\u628A\u7FA4\u6656 NAS \u4E0A\u7684\u5957\u4EF6\u642C\u5230\u53E6\u5916\u4E2A\u786C\u76D8\u4E0A"),we=o(),Ne=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"\u21A9\uFE0E",-1),ye={id:"footnote3",class:"footnote-item"},Te={href:"https://blog.csdn.net/hilaryfrank/article/details/109722319",target:"_blank",rel:"noopener noreferrer"},xe=o("\u7FA4\u6656 NAS \u8DE8\u5B58\u50A8\u7A7A\u95F4\u79FB\u52A8\u5171\u4EAB\u6587\u4EF6\u5939 (NAS \u65B0\u589E\u78C1\u76D8)"),De=o(),Ee=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"\u21A9\uFE0E",-1);function Be(Me,He){const s=i("ExternalLinkIcon"),r=i("RouterLink");return c(),d("div",null,[_,e("p",null,[p,u,f,e("a",m,[k,t(s)]),b]),g,e("ul",null,[v,S,e("li",null,[A,e("ul",null,[e("li",null,[e("a",w,[N,t(s)]),y])])]),e("li",null,[e("a",T,[x,t(s)]),D,e("a",E,[B,t(s)]),M]),e("li",null,[e("a",H,[R,t(s)]),$,I]),e("li",null,[e("a",z,[L,t(s)]),q]),e("li",null,[e("a",C,[F,t(s)]),P,t(r,{to:"/family/HomeAutomation.html#home-assistant"},{default:a(()=>[V]),_:1}),j]),e("li",null,[t(r,{to:"/family/HomeAutomation.html#node-red"},{default:a(()=>[X]),_:1}),G]),e("li",null,[O,e("ul",null,[e("li",null,[e("a",J,[K,t(s)]),Q]),e("li",null,[e("a",U,[W,t(s)]),Y]),e("li",null,[e("a",Z,[ee,t(s)]),oe]),te,se,ne,re])])]),ae,ie,e("p",null,[e("a",le,[ce,t(s)]),de,he]),_e,e("section",pe,[e("ol",ue,[e("li",fe,[e("p",null,[e("a",me,[ke,t(s)]),be,ge])]),e("li",ve,[e("p",null,[e("a",Se,[Ae,t(s)]),we,Ne])]),e("li",ye,[e("p",null,[e("a",Te,[xe,t(s)]),De,Ee])])])])])}var Ie=l(h,[["render",Be],["__file","NAS.html.vue"]]);export{Ie as default};
