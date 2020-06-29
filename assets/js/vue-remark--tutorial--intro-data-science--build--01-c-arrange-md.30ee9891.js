(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{835:function(t,e,d){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},836:function(t,e,d){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}},980:function(t,e,d){t.exports=d.p+"assets/img/model-arrange.abf74a97.png"},999:function(t,e,d){"use strict";d.r(e);var a=d(9),r=d(836),o=d.n(r),s=d(980),n=d.n(s),i="<section><section> <h1 id=the-arrange-verb>The arrange verb</h1> <p><img src="+o()(n.a)+' alt=""></p> <aside class=notes> <p>In the last video you learned the filter verb, for extracting a subset of your observations based on a condition.</p> <p>Now you&#39;ll learn the arrange verb.</p> <p>Arrange sorts the observations in a dataset, in ascending or descending order based on one of its variables.</p> <p>This is useful, for example, when you want to know the most extreme values in a dataset.</p> </aside></section></section><section><section> <h2 id=sorting-with-arrange>Sorting with arrange</h2> <pre><code class=language-python>(music_top200\n  &gt;&gt; arrange(_.duration)\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> </tr> </thead> <tbody> <tr> <th>10868</th> <td>Slovakia</td> <td>69</td> <td>Klop Klop</td> <td>Karlo</td> <td>17222</td> <td>65.631</td> <td>Europe</td> </tr> <tr> <th>4586</th> <td>Greece</td> <td>187</td> <td>FENDI</td> <td>iLLEOo</td> <td>16786</td> <td>76.099</td> <td>Europe</td> </tr> <tr> <th>9937</th> <td>Poland</td> <td>138</td> <td>Mistrz ping-ponga</td> <td>PRO8L3M</td> <td>145143</td> <td>83.360</td> <td>Europe</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>535</th> <td>Australia</td> <td>136</td> <td>Innerbloom</td> <td>RÜFÜS DU SOL</td> <td>260092</td> <td>578.041</td> <td>Oceania</td> </tr> <tr> <th>1302</th> <td>Brazil</td> <td>103</td> <td>Poesia Acústica #8: Amor e Samba</td> <td>Pineapple StormTv</td> <td>839192</td> <td>614.615</td> <td>Americas</td> </tr> <tr> <th>11557</th> <td>Turkey</td> <td>158</td> <td>Susamam</td> <td>Şanışer</td> <td>194804</td> <td>851.871</td> <td>Asia</td> </tr> </tbody> </table> <p>12400 rows × 7 columns</p> </div> <aside class=notes> <p>Just like filter, you use the arrange verb after the pipe operator.</p> <p>You would type music, then the pipe operator (two greater than symbols) and then arrange. Within those parentheses, you tell it what column you want to arrange by.</p> <p>The observations are now sorted in ascending order, with the lowest duration songs appearing first.</p> <p>Look at the second to rightmost column: it starts with 65.631, the smallest value in the dataset, then keeps increasing. Looking at the track name column, this track is called Klop Klop, and is the shortest track in the data.</p> <p>Just like with filter, the music object itself is unchanged: arrange is just giving you a new, sorted dataset.</p> </aside></section></section><section><section> <h2 id=arrange-descending>arrange descending</h2> <pre><code class=language-python>(music_top200\n  &gt;&gt; arrange(-_.duration)\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> </tr> </thead> <tbody> <tr> <th>11557</th> <td>Turkey</td> <td>158</td> <td>Susamam</td> <td>Şanışer</td> <td>194804</td> <td>851.871</td> <td>Asia</td> </tr> <tr> <th>1302</th> <td>Brazil</td> <td>103</td> <td>Poesia Acústica #8: Amor e Samba</td> <td>Pineapple StormTv</td> <td>839192</td> <td>614.615</td> <td>Americas</td> </tr> <tr> <th>535</th> <td>Australia</td> <td>136</td> <td>Innerbloom</td> <td>RÜFÜS DU SOL</td> <td>260092</td> <td>578.041</td> <td>Oceania</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>9937</th> <td>Poland</td> <td>138</td> <td>Mistrz ping-ponga</td> <td>PRO8L3M</td> <td>145143</td> <td>83.360</td> <td>Europe</td> </tr> <tr> <th>4586</th> <td>Greece</td> <td>187</td> <td>FENDI</td> <td>iLLEOo</td> <td>16786</td> <td>76.099</td> <td>Europe</td> </tr> <tr> <th>10868</th> <td>Slovakia</td> <td>69</td> <td>Klop Klop</td> <td>Karlo</td> <td>17222</td> <td>65.631</td> <td>Europe</td> </tr> </tbody> </table> <p>12400 rows × 7 columns</p> </div> <aside class=notes> <p>arrange also lets you sort in <strong>descending order</strong>. To do that, you&#39;d put a <strong>negative sign</strong> next to the variable you&#39;re sorting by.</p> <p>This lets us see that the track with the longest duration is Susamam, which is a hit in at least Turkey. It&#39;s almost 15 minutes long!</p> <p>However, we might be interested in looking at duration within a specific country.</p> </aside></section></section><section><section> <h2 id=arrange-and-filter>arrange and filter</h2> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter(_.country == &quot;United States&quot;)\n  &gt;&gt; arrange(-_.duration)\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> </tr> </thead> <tbody> <tr> <th>7841</th> <td>United States</td> <td>42</td> <td>After Hours</td> <td>The Weeknd</td> <td>3672033</td> <td>361.027</td> <td>Americas</td> </tr> <tr> <th>7915</th> <td>United States</td> <td>116</td> <td>Life Is Good (feat. Drake, DaBaby &amp; Lil Baby) ...</td> <td>Future</td> <td>2181930</td> <td>315.346</td> <td>Americas</td> </tr> <tr> <th>7923</th> <td>United States</td> <td>124</td> <td>SICKO MODE</td> <td>Travis Scott</td> <td>2085268</td> <td>312.820</td> <td>Americas</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>7832</th> <td>United States</td> <td>33</td> <td>Strawberry Peels (feat. Young Thug &amp; Gunna)</td> <td>Lil Uzi Vert</td> <td>4007781</td> <td>115.350</td> <td>Americas</td> </tr> <tr> <th>7853</th> <td>United States</td> <td>54</td> <td>CITY OF ANGELS</td> <td>24kGoldn</td> <td>3443366</td> <td>112.493</td> <td>Americas</td> </tr> <tr> <th>7971</th> <td>United States</td> <td>172</td> <td>Skechers</td> <td>DripReport</td> <td>1731265</td> <td>106.000</td> <td>Americas</td> </tr> </tbody> </table> <p>200 rows × 7 columns</p> </div> <aside class=notes> <p>Suppose you wanted to find the longest duration song in the United States.</p> <p>To do that, you can combine the two verbs you&#39;ve already learned: filter, and arrange.</p> </aside></section><section> <h2 id=arrange-and-filter-1>arrange and filter</h2> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter(_.country == &quot;United States&quot;)\n\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> </tr> </thead> <tbody> <tr> <th>7800</th> <td>United States</td> <td>1</td> <td>The Box</td> <td>Roddy Ricch</td> <td>12987027</td> <td>196.653</td> <td>Americas</td> </tr> <tr> <th>7801</th> <td>United States</td> <td>2</td> <td>Myron</td> <td>Lil Uzi Vert</td> <td>9163134</td> <td>224.955</td> <td>Americas</td> </tr> <tr> <th>7802</th> <td>United States</td> <td>3</td> <td>Blueberry Faygo</td> <td>Lil Mosey</td> <td>8043475</td> <td>162.547</td> <td>Americas</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>7997</th> <td>United States</td> <td>198</td> <td>Lights Up</td> <td>Harry Styles</td> <td>1606234</td> <td>172.227</td> <td>Americas</td> </tr> <tr> <th>7998</th> <td>United States</td> <td>199</td> <td>Without Me</td> <td>Halsey</td> <td>1606153</td> <td>201.661</td> <td>Americas</td> </tr> <tr> <th>7999</th> <td>United States</td> <td>200</td> <td>Enemies (feat. DaBaby)</td> <td>Post Malone</td> <td>1597824</td> <td>196.760</td> <td>Americas</td> </tr> </tbody> </table> <p>200 rows × 7 columns</p> </div> <aside class=notes> <p><strong>Longest duration song in the United States.</strong></p> <p>You start with the music dataset, then a pipe to give the dataset to filter. Then you specify that you want to filter for country equals equals United States.</p> <p>Then you use another pipe step.</p> </aside></section><section> <h2 id=arrange-and-filter-2>arrange and filter</h2> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter(_.country == &quot;United States&quot;)\n  &gt;&gt; arrange(-_.duration)\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> </tr> </thead> <tbody> <tr> <th>7841</th> <td>United States</td> <td>42</td> <td>After Hours</td> <td>The Weeknd</td> <td>3672033</td> <td>361.027</td> <td>Americas</td> </tr> <tr> <th>7915</th> <td>United States</td> <td>116</td> <td>Life Is Good (feat. Drake, DaBaby &amp; Lil Baby) ...</td> <td>Future</td> <td>2181930</td> <td>315.346</td> <td>Americas</td> </tr> <tr> <th>7923</th> <td>United States</td> <td>124</td> <td>SICKO MODE</td> <td>Travis Scott</td> <td>2085268</td> <td>312.820</td> <td>Americas</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>7832</th> <td>United States</td> <td>33</td> <td>Strawberry Peels (feat. Young Thug &amp; Gunna)</td> <td>Lil Uzi Vert</td> <td>4007781</td> <td>115.350</td> <td>Americas</td> </tr> <tr> <th>7853</th> <td>United States</td> <td>54</td> <td>CITY OF ANGELS</td> <td>24kGoldn</td> <td>3443366</td> <td>112.493</td> <td>Americas</td> </tr> <tr> <th>7971</th> <td>United States</td> <td>172</td> <td>Skechers</td> <td>DripReport</td> <td>1731265</td> <td>106.000</td> <td>Americas</td> </tr> </tbody> </table> <p>200 rows × 7 columns</p> </div> <aside class=notes> <p><strong>Longest duration song in the United States.</strong></p> <p>The added pipe line takes the result of the filter, and gives it to arrange. You specify that you want to sort in descending order of duration.</p> </aside></section></section><section><section> <h2 id=arrange-and-filter-3>arrange and filter</h2> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter(_.country == &quot;United States&quot;)\n  &gt;&gt; arrange(-_.duration)\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> </tr> </thead> <tbody> <tr> <th>7841</th> <td>United States</td> <td>42</td> <td>After Hours</td> <td>The Weeknd</td> <td>3672033</td> <td>361.027</td> <td>Americas</td> </tr> <tr> <th>7915</th> <td>United States</td> <td>116</td> <td>Life Is Good (feat. Drake, DaBaby &amp; Lil Baby) ...</td> <td>Future</td> <td>2181930</td> <td>315.346</td> <td>Americas</td> </tr> <tr> <th>7923</th> <td>United States</td> <td>124</td> <td>SICKO MODE</td> <td>Travis Scott</td> <td>2085268</td> <td>312.820</td> <td>Americas</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>7832</th> <td>United States</td> <td>33</td> <td>Strawberry Peels (feat. Young Thug &amp; Gunna)</td> <td>Lil Uzi Vert</td> <td>4007781</td> <td>115.350</td> <td>Americas</td> </tr> <tr> <th>7853</th> <td>United States</td> <td>54</td> <td>CITY OF ANGELS</td> <td>24kGoldn</td> <td>3443366</td> <td>112.493</td> <td>Americas</td> </tr> <tr> <th>7971</th> <td>United States</td> <td>172</td> <td>Skechers</td> <td>DripReport</td> <td>1731265</td> <td>106.000</td> <td>Americas</td> </tr> </tbody> </table> <p>200 rows × 7 columns</p> </div> <aside class=notes> <p>The result shows that the longest duration track in the United States is After Hours by The Weeknd.</p> <p>We can explore many such questions with various combinations of dplyr verbs.</p> <p>Over the course of these lessons, you&#39;ll learn to pipe together multiple simple operations to create a rich and informative data analysis.</p> </aside></section></section><section><section> <h1 id=lets-practice>Let&#39;s practice!</h1> </section></section>',h=d(835),c=d(7);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}c.a.config.optionMergeStrategies;var l={slides:i,VueRemarkRoot:h.a},u=function(t){var e=t.options.components=t.options.components||{},d=t.options.computed=t.options.computed||{};Object.keys(l).forEach((function(t){"object"===p(l[t])&&"function"==typeof l[t].render?e[t]=l[t]:d[t]=function(){return l[t]}}))},m=c.a.config.optionMergeStrategies,g="__vueRemarkFrontMatter",y={excerpt:null,title:"Arrange",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"basics"};var f=function(t){t.options[g]&&(t.options[g]=y),c.a.util.defineReactive(t.options,g,y),t.options.computed=m.computed({$frontmatter:function(){return t.options[g]}},t.options.computed)},_=Object(a.a)({},(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("VueRemarkRoot",[d("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[d("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:e.debut,expression:"nb.debut"}]},[d("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",{pre:!0,attrs:{class:"language-text"}},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\nimport pandas as pd\nfrom siuba import arrange, select, mutate, filter, _\nfrom plotnine import ggplot, geom_point, coord_flip, aes, labs\n\n# temporary until I figure out where to put data\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/music200.csv"\nmusic_top200 = pd.read_csv(fname)\n\n# tracks\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/track_features.csv"\ntrack_features = pd.read_csv(fname)\n\n\n# TODO: shift into a package or file\nfrom siuba import pipe\nfrom IPython.display import HTML, display\n___ = pipe(lambda x: display(HTML("⚠️: <b>Don\'t forget to replace all the blanks!</b>")) and _)\n\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# when you see a Shout object, call the shout_html function on it\nhtml_formatter.for_type(pd.DataFrame, lambda df: df.to_html(max_rows = pd.get_option("display.max_rows")))')])])])],1),d("RevealSlides",{attrs:{slides:t.slides}}),d("h3",{attrs:{id:"exercise-1"}},[d("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[d("span",{staticClass:"fa fa-link"})]),t._v("Exercise 1:")]),d("p",[t._v("Modify the code below to arrange by artist name in "),d("strong",[t._v("descending")]),t._v(" order.")]),d("details",[d("summary",[t._v("hint")]),t._v("\n  \n  > You can sort something in descending order, using the `-` operator.\n   \n  "),d("details",[d("summary",[t._v("another hint")]),t._v("\n      \n  > Start by using the pipe operator with `arrange()`. You will need to specify what to arrange by.\n      \n  ")])]),d("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[d("table",{staticClass:"dataframe",attrs:{border:"1"}},[d("thead",[d("tr",{staticStyle:{"text-align":"right"}},[d("th"),d("th",[t._v("country")]),d("th",[t._v("position")]),d("th",[t._v("track_name")]),d("th",[t._v("artist")]),d("th",[t._v("streams")]),d("th",[t._v("duration")]),d("th",[t._v("continent")])])]),d("tbody",[d("tr",[d("th",[t._v("0")]),d("td",[t._v("Argentina")]),d("td",[t._v("1")]),d("td",[t._v("Tusa")]),d("td",[t._v("KAROL G")]),d("td",[t._v("1858666")]),d("td",[t._v("200.960")]),d("td",[t._v("Americas")])]),d("tr",[d("th",[t._v("1")]),d("td",[t._v("Argentina")]),d("td",[t._v("2")]),d("td",[t._v("Tattoo")]),d("td",[t._v("Rauw Alejandro")]),d("td",[t._v("1344382")]),d("td",[t._v("202.887")]),d("td",[t._v("Americas")])]),d("tr",[d("th",[t._v("2")]),d("td",[t._v("Argentina")]),d("td",[t._v("3")]),d("td",[t._v("Hola - Remix")]),d("td",[t._v("Dalex")]),d("td",[t._v("1330011")]),d("td",[t._v("249.520")]),d("td",[t._v("Americas")])]),d("tr",[d("th",[t._v("...")]),d("td",[t._v("...")]),d("td",[t._v("...")]),d("td",[t._v("...")]),d("td",[t._v("...")]),d("td",[t._v("...")]),d("td",[t._v("...")]),d("td",[t._v("...")])]),d("tr",[d("th",[t._v("12397")]),d("td",[t._v("South Africa")]),d("td",[t._v("198")]),d("td",[t._v("Black And White")]),d("td",[t._v("Niall Horan")]),d("td",[t._v("11771")]),d("td",[t._v("193.090")]),d("td",[t._v("Africa")])]),d("tr",[d("th",[t._v("12398")]),d("td",[t._v("South Africa")]),d("td",[t._v("199")]),d("td",[t._v("When I See U")]),d("td",[t._v("Fantasia")]),d("td",[t._v("11752")]),d("td",[t._v("217.347")]),d("td",[t._v("Africa")])]),d("tr",[d("th",[t._v("12399")]),d("td",[t._v("South Africa")]),d("td",[t._v("200")]),d("td",[t._v("Psycho!")]),d("td",[t._v("MASN")]),d("td",[t._v("11743")]),d("td",[t._v("197.217")]),d("td",[t._v("Africa")])])])])]},proxy:!0}],null,!0)},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(music_top200\n\n)")])])]),d("prompt-expandable",{attrs:{header:"What artist is the first observation (row) in the result?"}},[d("q-multiple-choice",[d("q-opt",{attrs:{text:"$NOT"}},[d("span",[t._v('"Great job!"')])]),d("q-opt",{attrs:{text:"高爾宣 OSN"}},[d("span",[t._v('"Incorrect"')])]),d("q-opt",{attrs:{text:"Aaron Smith"}},[d("span",[t._v('"Incorrect"')])]),d("q-opt",{attrs:{text:"Y2K"}},[d("span",[t._v('"Incorrect"')])])],1)],1),d("h3",{attrs:{id:"exercise-2"}},[d("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[d("span",{staticClass:"fa fa-link"})]),t._v("Exercise 2:")]),d("p",[t._v("What is the first track, if you filter to keep only observations from the country Mexico, and then sort by track name?")]),d("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[d("p",[t._v("⚠️: "),d("b",[t._v("Don't forget to replace all the blanks!")])]),d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",{pre:!0,attrs:{class:"language-text"}},[t._v("<siuba.dply.verbs.Pipeable at 0x11f26e7b8>")])])]},proxy:!0}],null,!0)},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(music_top200\n  >> ___\n  >> arrange(___)\n)")])])]),d("prompt-expandable",{attrs:{header:""}},[d("q-multiple-choice",[d("q-opt",{attrs:{text:"11 PM"}},[d("span",[t._v('"Great job!"')])]),d("q-opt",{attrs:{text:"一天 (電視劇《想見你》插曲)"}},[d("span",[t._v('"Incorrect"')])]),d("q-opt",{attrs:{text:"everything i wanted"}},[d("span",[t._v('"Incorrect"')])]),d("q-opt",{attrs:{text:"#24"}},[d("span",[t._v('"Be sure to filter where country is Mexico"')])])],1)],1),d("h3",{attrs:{id:"exercise-3"}},[d("a",{attrs:{href:"#exercise-3","aria-hidden":"true"}},[d("span",{staticClass:"fa fa-link"})]),t._v("Exercise 3:")]),d("p",[t._v("Below is code with the arrange verb removed. Modify it to arrange..")]),d("ul",[d("li",[t._v("first by position")]),d("li",[t._v("second by streams")])]),d("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[d("p",[t._v("⚠️: "),d("b",[t._v("Don't forget to replace all the blanks!")])])]},proxy:!0}],null,!0)},[d("pre",{pre:!0,attrs:{class:"language-text"}},[d("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(music_top200\n  >> ___\n)")])])]),d("prompt-expandable",{attrs:{header:"What country has the position 1 track (The Box) with fewest streams?"}},[d("q-multiple-choice",[d("q-opt",{attrs:{text:"Cyprus"}},[d("span",[t._v("That's right! Make sure to double check that the track is named The Box by Roddy Ricch.")])]),d("q-opt",{attrs:{text:"United States"}},[d("span",[t._v("Incorrect")])]),d("q-opt",{attrs:{text:"Brazil"}},[d("span",[t._v("Incorrect")])]),d("q-opt",{attrs:{text:"Luxembou"}},[d("span",[t._v("Incorrect")])])],1)],1),d("h3",{attrs:{id:"exercise-4"}},[d("a",{attrs:{href:"#exercise-4","aria-hidden":"true"}},[d("span",{staticClass:"fa fa-link"})]),t._v("Exercise 4")]),d("p",[t._v("What's the shortest song in the top position in the "),d("code",{pre:!0},[t._v("music_top200")]),t._v(" data?")]),d("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"}}),d("prompt-expandable",{attrs:{header:""}},[d("q-multiple-choice",[d("q-opt",{attrs:{text:"Bad Girls, Good Vibes"}},[d("span",[t._v("That's right!")])]),d("q-opt",{attrs:{text:"Klop Klop"}},[d("span",[t._v("Incorrect. This is the shortest track in any position. Can you sort to get top position tracks first?")])]),d("q-opt",{attrs:{text:"Susamam"}},[d("span",[t._v("Incorrect. This is the longest track in any position. Can you sort to get top position tracks first?")])]),d("q-opt",{attrs:{text:"Blockparty"}},[d("span",[t._v("Incorrect. This is the shortest track in the last position.")])])],1)],1)]}}])})],1)}),[],!1,null,null,null);"function"==typeof u&&u(_),"function"==typeof f&&f(_);e.default=_.exports}}]);