(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1018:function(t,e,o){"use strict";o.r(e);var s=o(9),n=o(836),a=o.n(n),i=o(996),r=o.n(i),d=o(997),c=o.n(d),p='<section class=""><section class=""> <h1 id=faceting>Faceting</h1> <p>You&#39;ve learned to use color in your scatterplots.</p> <p>Now you&#39;ll learn another way to explore your data. plotnine lets you divide your plot into subplots to get one smaller graph for each level of a variable.</p> <p>This is called faceting, and it&#39;s another powerful way to communicate relationships within your data.</p> </section></section><section class=font-size-sm><section class=font-size-sm> <h1 id=faceting-1>Faceting</h1> <pre><code class=language-python>asia_top200 = (\n  music_top200\n  &gt;&gt; filter(_.continent == &quot;Asia&quot;)\n)\nasia_top200</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> </tr> </thead> <tbody> <tr> <th>4600</th> <td>Hong Kong</td> <td>1</td> <td>WANNABE</td> <td>ITZY</td> <td>112648</td> <td>191.242</td> <td>Asia</td> </tr> <tr> <th>4601</th> <td>Hong Kong</td> <td>2</td> <td>Intentions (feat. Quavo)</td> <td>Justin Bieber</td> <td>104467</td> <td>212.867</td> <td>Asia</td> </tr> <tr> <th>4602</th> <td>Hong Kong</td> <td>3</td> <td>Señorita</td> <td>Shawn Mendes</td> <td>84196</td> <td>190.960</td> <td>Asia</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>12197</th> <td>Viet Nam</td> <td>198</td> <td>Đưa Nhau Đi Trốn (Chill Version)</td> <td>Đen</td> <td>20750</td> <td>241.959</td> <td>Asia</td> </tr> <tr> <th>12198</th> <td>Viet Nam</td> <td>199</td> <td>Hôm Nay Tôi Buồn</td> <td>Phùng Khánh Linh</td> <td>20580</td> <td>275.000</td> <td>Asia</td> </tr> <tr> <th>12199</th> <td>Viet Nam</td> <td>200</td> <td>Kick It</td> <td>NCT 127</td> <td>20495</td> <td>233.013</td> <td>Asia</td> </tr> </tbody> </table> <p>2600 rows × 7 columns</p> </div> <aside class=notes> <p>For this example, we&#39;ll use Spotify top 200 track data for countries in Asia.</p> </aside></section></section><section class=""><section class=""> <h1 id=faceting-2>Faceting</h1> <pre><code class=language-python>(asia_top200\n  &gt;&gt; ggplot(aes(&quot;position&quot;, &quot;streams&quot;, color = &quot;country&quot;))\n   + geom_point()\n)</code></pre> <p><img src='+a()(r.a)+' alt=png></p> <pre><code>&lt;ggplot: (272006166)&gt;</code></pre><aside class=notes> <p>This plot shows the number of streams for each top 200 track in Asian countries.</p> <p>There are so many countries that the plot hits two issues:</p> <ol> <li>it has to use many different colors.</li> <li>many points are on top of each other.</li> </ol> <p>A facetted plot could help here, by giving each country its own small panel.</p> </aside></section></section><section class=""><section class=""> <h1 id=faceting-3>Faceting</h1> <pre><code class=language-python>(asia_top200\n  &gt;&gt; ggplot(aes(&quot;position&quot;, &quot;streams&quot;, color = &quot;country&quot;))\n   + geom_point()\n   + facet_wrap(&#39;~country&#39;)\n)</code></pre> <p><img src='+a()(c.a)+' alt=png></p> <pre><code>&lt;ggplot: (-9223372036561595844)&gt;</code></pre><aside class=notes> <p>You facet a plot by adding another option, with a +, to the end of your code, after geom_point.</p> <p>You add facet underscore wrap, then &quot;tilde continent&quot; within the parentheses.</p> <p>In R, the tilde symbol typically means &quot;by&quot;, meaning that we&#39;re splitting the plot by continent, and you can usually find it on the upper left of your keyboard. This tells ggplot2 to divide the data into subplots based on the continent variable.</p> <p>Faceting is a powerful tool, and in the exercises you&#39;ll see how you can use faceting not just to compare among continents, but to compare between all of the years in our dataset.</p> </aside></section></section><section class=""><section class=""> <h1 id=lets-practice>Let&#39;s practice!</h1> <aside class=notes> <p>Scroll down to get started with practice!</p> </aside></section></section>',l=o(835),u=o(7);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}u.a.config.optionMergeStrategies;var g={slides:p,VueRemarkRoot:l.a},m=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(g).forEach((function(t){"object"===h(g[t])&&"function"==typeof g[t].render?e[t]=g[t]:o[t]=function(){return g[t]}}))},f=u.a.config.optionMergeStrategies,b="__vueRemarkFrontMatter",y={excerpt:null,title:"Facets",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"visualize"};var v=function(t){t.options[b]&&(t.options[b]=y),u.a.util.defineReactive(t.options,b,y),t.options.computed=f.computed({$frontmatter:function(){return t.options[b]}},t.options.computed)},w=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("VueRemarkRoot",[s("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:e.debut,expression:"nb.debut"}]},[s("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[s("pre",[s("code",{pre:!0},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\n\n# wranglign ---------\nimport pandas as pd\nfrom siuba import *\n\n# plotting ----------\nfrom plotnine import *\n\ntheme_set(theme_classic(base_family = "Noto Sans CJK JP"))\n\n# data --------------\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/music200.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/music200.csv"\nmusic_top200 = pd.read_csv(fname)\n\n# tracks\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/track_features.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/track_features.csv"\ntrack_features = pd.read_csv(fname)\n\n# student support ----------\nfrom siuba import pipe\nfrom IPython.display import HTML, display\nfrom siututor import Blank\n___ = Blank()\n\n# DataFrame display --------\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# here, we avoid the default df._repr_html_ method, since it inlines css\n# (style tags make vue angry)\nhtml_formatter.for_type(\n    pd.DataFrame,\n    lambda df: df.to_html(max_rows = pd.get_option("display.max_rows"), show_dimensions = True)\n)\n')])])])],1),s("RevealSlides",{attrs:{slides:t.slides}}),s("h3",{attrs:{id:"exercise-1"}},[s("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[s("span",{staticClass:"fa fa-link"})]),t._v("Exercise 1:")]),s("p",[s("strong",[t._v("TODO")])]),s("h3",{attrs:{id:"exercise-2"}},[s("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[s("span",{staticClass:"fa fa-link"})]),t._v("Exercise 2:")]),s("p",[t._v("Below is the start of plotnine's documentation for "),s("code",{pre:!0},[t._v("facet_wrap")]),t._v(". ")]),s("img",{staticStyle:{width:"100%"},attrs:{src:o(994)}}),s("p",[t._v("Notice that the Parameters section lists "),s("code",{pre:!0},[t._v("ncol")]),t._v(" and "),s("code",{pre:!0},[t._v("nrow")]),t._v(" options. These determine how many columns or rows to use. For example, the plot below has "),s("code",{pre:!0},[t._v("nrow = 1")]),t._v(".")]),s("p",[t._v("Try out the plot as is, and with the "),s("code",{pre:!0},[t._v("nrow")]),t._v(" argument changed to "),s("code",{pre:!0},[t._v("ncol = 1")]),t._v(".\nThen, answer the questions below.")]),s("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[s("p",[s("g-image",{attrs:{src:o(995),alt:"png"}})],1),s("pre",[s("code",{pre:!0},[t._v("<ggplot: (-9223372036572546644)>\n")])])]},proxy:!0}],null,!0)},[s("pre",[s("code",{pre:!0},[t._v('# This code keeps the 3 artists listed ----\nartists_to_keep = ["Billie Eilish", "ITZY", "Roddy Ricch"]\n\nsome_artists = (\n  track_features\n  >> filter(_.artist.isin(artists_to_keep))\n)\n\n# This code plots the data ----\n(some_artists\n  >> ggplot(aes("energy", "valence", color = "artist"))\n   + geom_point()\n   + facet_wrap("~artist", nrow = 1)\n   + labs(title = "Song features across 3 artists")\n)\n')])])]),s("prompt-expandable",{attrs:{header:"Which of the three artists tends to have the lowest valence?"}},[s("q-multiple-choice",[s("q-opt",{attrs:{text:"Billie Eilish"}},[s("span",[t._v('Correct! We\'ll discuss how to measure the idea of "tends to have" in the next chapter.')])]),s("q-opt",{attrs:{text:"ITZY"}},[s("span",[t._v("That's not right. This artist tends to have the highest valence.")])]),s("q-opt",{attrs:{text:"Roddy Ricch"}},[s("span",[t._v("That's not right. Look for the cluster of points toward the bottom of the plot.")])])],1)],1),s("p",[t._v("Which value seems easier to compare across facets, when ncol is set to 1?")]),s("details",[s("summary",[t._v("answer")]),t._v("\n    \nThis is subjective, but I would say energy is easier to compare, since there is only one x-axis for across all plots. (For example, there is a only one spot on the x-axis where energy is .25).\n    \n")])]}}])})],1)}),[],!1,null,null,null);"function"==typeof m&&m(w),"function"==typeof v&&v(w);e.default=w.exports},835:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},836:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}},994:function(t,e,o){t.exports=o.p+"assets/img/facet_wrap_docs.81eabe7b.png"},995:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/assets/static/02d-facets_5_0.578a6fa.3a242eacc0a2a05cc168f1ab82e8afcc.png",size:{width:703,height:478},sizes:"(max-width: 703px) 100vw, 703px",srcset:["/assets/static/02d-facets_5_0.578a6fa.3a242eacc0a2a05cc168f1ab82e8afcc.png 703w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 703 478' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-91bee90957f94db181ddaafc76c978a6'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-91bee90957f94db181ddaafc76c978a6)' width='703' height='478' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAsCAYAAADVX77/AAAACXBIWXMAAA9hAAAPYQGoP6dpAAAHbElEQVRo3sWa6XLTPBSGc/93wQ3A8ANmYIABCrRspXTfkzZb0zRJsy%2bOcz49So5xXNuJs31ONJYtyZKO3rNKKQlco9FoZtJ6juNMte33%2b5Lk4hvD4dDmXdf13vnL5x2Tv12SKxXW0SyCcDH5Dx8%2byLt37%2bTNmzfy5csXefv2rbx%2b/dret7a25P3797bs79%2b/8vPnT/vu27dv8unTJ5u/uLiQX79%2byffv3%2bXFixe2/qtXr2Rvb2/mxMPGGCTg3AQIo/w8VC0UCnJ9fW0n8uPHD6nVapLJZOTm5sYmynK5nJRKJVs3n89LsVj06lQqFSmXyzav5eTv7u5m9h02xkVQMIUA4Hh6emoHmE6n7WCYHCvECh4cHMjv37/tZI%2bPj%2b2gSUzq6urK1qUtz0xGy/nO/v6%2bRYKW8z6bzdpEnrYkyiAabUDC7u6u7Y%2b25HlH0jHe3t7K4eGhNJvNxRGgjeDhs7MzGQwG0m637TMr9PHjR/n8%2bbPteGdnxz6zur1eT1qtlq3HqkEkVpv3tCd1u12LDNpSTp53lHU6HXunP1gBosJa%2bk2IBqvAXvQLIVgAFoK2JOozlmq1uhgB/DBCEP3588euisKYPJPTVeXOs64SK8Cd5/Pzc7saCmUt465I0W/zzpbfGvjnCpJJZyyRtK2yBW20nSKHpO21D4i4FAKgJqsDrBa97u/vpV6vJ26XHeWl3CxLqViSZa6FZIA2YuLw4OXlpYeGedWPqjCQgWBL2r5vfrV6TXLZXOK2Yep5IQJwASOES9IPaV0IMC8vemw3GhOv2WhaNvLbBJu4nghBZYEgRZ9QOUT9JCFAsE6j0fh/COCfWBgB4vLBdwipeQngTsqzvbxU3Kp0mh0r6MIIELkIq0YA6ktlQLAjt98Tp1YNtRg1zwomZYHW0KhbGUij3rDSfOMECCIgKAM8IwndXMjHEgAbYFEWwJCJY4EoH2GlBEAILsMCSYWg1sk7xiqs5aSYK8Yi4PHRMZqit1IieCygVl2YEPyX3FgELCQEzR81WK1XJZ/LxxKg03bl7KQzqbMiAugH1KkhRXmGq0RAsG2cGvQvRqfjRk4%2bbNFmjWXKDgAFngyYDAK%2bRwA2vm5J5%2bxkqmwVCNB6UWowTADufG1IId%2bPVNd%2bQypuMePV4GQQw0bdEKAvzuOjuJ12LOWXQUCcHRD81mDgSq/rJpJPUahIBSM6fhkwmiGNN0EALS/f46EOZ2oGbBGCNARl8D7DTOspAuBZAf2gHRAcRBxPLWIHBNviRIXZAVpeeXAs/0fZA3p/eHiQCyPPWEjmNkv9pra3t71BQwAPAUCtdCfDdnumMbIuBIQRPO67Xlm5ZDRG28YtCMERPyCoQ8J9nkIABFAXdsoQIu5nPDu3241VfZtigVm63yujbb0ljrFpHo3cIjEmEsGddmBBU8%2bfP7cFVs92OlYdBiX9VNDE1EEwhrHGOhFQrTihrPjEZDe2SmlUsXPRsF6cukwhMOAbKhLRCdoBwQ6cx5pljU0SAL1/m%2bnFsoKfAGX33obdkGdAPg4xKSassKCR3xeI4vX/iwXGY3Qln%2b2HjHHMuDwPuuOwfbc7jhvybdicOz6HCn2LgGn9Oog0haMgJBtiAbX%2bsAFqVSdykYZDVzLpvtRqj3b/gURQlXgj8o47oTuPAHHxAA9WhpLdqzFrdM5PPfmwbi0QJ/zmNdM13B/JAv6JBuMB6vwMmw1xNerqOJGssQ47IGxyfl8gKnIVJTCD76LjAb5B9G4yc/nn60bAXbFvLcJ5HaF5AqjRMUEETuZ6vOJmQK29XRlNoLQpQyi4ygjAXs9dT0RIYwIZYOgMzCCG4kwMJFign89u1BeIcmJWOfmpgAj6MsPegDGEnOytOK3WP55jq%2bvk6InwWzcLxG3YrhQBKgAZhMoAdwL3frEg7aMDowUubVxgUwTwnJvywOju4cpXPjQqjPHglwH2Xa1qCeD3CTbJApjA7dYaCTClBQwKbhiEsQx72bHX1Mukn0w%2bCgFJo8JJWWAjO0MXpydm1l0jA5peRMjP%2b3EIWKUdsM69gEgCDEzHZzvbMjIOj7IBkw9uiETp1eDOUBKdDAL8O0Mb2xydQoBhgVsziVHlQdqH%2b9K/ScvIOBODQm6uj8ECbLEvcuGkcDZgmWvpIzKWBYx36Jh7F6%2bJyRsTGGSgJSgn%2bfOU40VibzMBBCF5LQ/WD3tG%2bIIcBLDr64tvx7XVctJKEMAdGF6bgZCOT05sOOn66soOjiMsHFshT%2bCEPOWcD4J/CayQp4zEuR6O3OieA2d88DV45s6xGOqTx0PDFtG2nDQ5Ojqy5fRHP7zTvvHqGA95VPdwOFycAGENsQPojKTn%2bRgMiVViBfToS1inTIiJKUtAHIigMkIPSenhJv%2bl%2bxOqkvHp%2bZbaKMgL%2bgZtK2WBoFABmkxcn8nrM0TwlwWT1iXYgoRnogxc4UoZ34gSeMG%2b/c9RfS%2bFgCSUnOWL%2b4/NEJB4%2bfKlPe317NkzewgryebrrOdl1WNqnp2UJCoozolBS7QmPsa8bZP49otc/wH5UQouq/ggIgAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"}},996:function(t,e,o){t.exports=o.p+"assets/img/02d-slides_8_0.4c30886c.png"},997:function(t,e,o){t.exports=o.p+"assets/img/02d-slides_11_0.5c0344f1.png"}}]);