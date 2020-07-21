(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1015:function(t,e,o){"use strict";o.r(e);var a=o(9),s=o(836),n=o.n(s),i=o(990),r=o.n(i),c=o(991),d=o.n(c),p='<section class=""><section class=""> <h1 id=faceting>Faceting</h1> <p>You&#39;ve learned to use color in your scatterplots.</p> <p>Now you&#39;ll learn another way to explore your data. plotnine lets you divide your plot into subplots to get one smaller graph for each level of a variable.</p> <p>This is called faceting, and it&#39;s another powerful way to communicate relationships within your data.</p> </section></section><section class=font-size-sm><section class=font-size-sm> <h1 id=faceting-1>Faceting</h1> <pre><code class=language-python>asia_top200 = (\n  music_top200\n  &gt;&gt; filter(_.continent == &quot;Asia&quot;)\n)\nasia_top200</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> </tr> </thead> <tbody> <tr> <th>4600</th> <td>Hong Kong</td> <td>1</td> <td>WANNABE</td> <td>ITZY</td> <td>112648</td> <td>191.242</td> <td>Asia</td> </tr> <tr> <th>4601</th> <td>Hong Kong</td> <td>2</td> <td>Intentions (feat. Quavo)</td> <td>Justin Bieber</td> <td>104467</td> <td>212.867</td> <td>Asia</td> </tr> <tr> <th>4602</th> <td>Hong Kong</td> <td>3</td> <td>Señorita</td> <td>Shawn Mendes</td> <td>84196</td> <td>190.960</td> <td>Asia</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>12197</th> <td>Viet Nam</td> <td>198</td> <td>Đưa Nhau Đi Trốn (Chill Version)</td> <td>Đen</td> <td>20750</td> <td>241.959</td> <td>Asia</td> </tr> <tr> <th>12198</th> <td>Viet Nam</td> <td>199</td> <td>Hôm Nay Tôi Buồn</td> <td>Phùng Khánh Linh</td> <td>20580</td> <td>275.000</td> <td>Asia</td> </tr> <tr> <th>12199</th> <td>Viet Nam</td> <td>200</td> <td>Kick It</td> <td>NCT 127</td> <td>20495</td> <td>233.013</td> <td>Asia</td> </tr> </tbody> </table> <p>2600 rows × 7 columns</p> </div> <aside class=notes> <p>For this example, we&#39;ll use Spotify top 200 track data for countries in Asia.</p> </aside></section></section><section class=""><section class=""> <h1 id=faceting-2>Faceting</h1> <pre><code class=language-python>(asia_top200\n  &gt;&gt; ggplot(aes(&quot;position&quot;, &quot;streams&quot;, color = &quot;country&quot;))\n   + geom_point()\n)</code></pre> <p><img src='+n()(r.a)+' alt=png></p> <pre><code>&lt;ggplot: (-9223372036554425214)&gt;</code></pre><aside class=notes> <p>This plot shows the number of streams for each top 200 track in Asian countries.</p> <p>There are so many countries that the plot hits two issues:</p> <ol> <li>it has to use many different colors.</li> <li>many points are on top of each other.</li> </ol> <p>A facetted plot could help here, by giving each country its own small panel.</p> </aside></section></section><section class=""><section class=""> <h1 id=faceting-3>Faceting</h1> <pre><code class=language-python>(asia_top200\n  &gt;&gt; ggplot(aes(&quot;position&quot;, &quot;streams&quot;, color = &quot;country&quot;))\n   + geom_point()\n   + facet_wrap(&#39;~country&#39;)\n)</code></pre> <p><img src='+n()(d.a)+' alt=png></p> <pre><code>&lt;ggplot: (-9223372036554401634)&gt;</code></pre><aside class=notes> <p>You facet a plot by adding another option, with a +, to the end of your code, after geom_point.</p> <p>You add facet underscore wrap, then &quot;tilde continent&quot; within the parentheses.</p> <p>In R, the tilde symbol typically means &quot;by&quot;, meaning that we&#39;re splitting the plot by continent, and you can usually find it on the upper left of your keyboard. This tells ggplot2 to divide the data into subplots based on the continent variable.</p> <p>Faceting is a powerful tool, and in the exercises you&#39;ll see how you can use faceting not just to compare among continents, but to compare between all of the years in our dataset.</p> </aside></section></section><section class=""><section class=""> <h1 id=lets-practice>Let&#39;s practice!</h1> <aside class=notes> <p>Scroll down to get started with practice!</p> </aside></section></section>',l=o(835),u=o(7);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}u.a.config.optionMergeStrategies;var f={slides:p,VueRemarkRoot:l.a},g=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(f).forEach((function(t){"object"===h(f[t])&&"function"==typeof f[t].render?e[t]=f[t]:o[t]=function(){return f[t]}}))},m=u.a.config.optionMergeStrategies,b="__vueRemarkFrontMatter",y={excerpt:null,title:"Facets",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"visualize"};var A=function(t){t.options[b]&&(t.options[b]=y),u.a.util.defineReactive(t.options,b,y),t.options.computed=m.computed({$frontmatter:function(){return t.options[b]}},t.options.computed)},w=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:e.debut,expression:"nb.debut"}]},[a("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\n\n# wranglign ---------\nimport pandas as pd\nfrom siuba import *\n\n# plotting ----------\nfrom plotnine import *\n\ntheme_set(theme_classic(base_family = "Noto Sans CJK JP"))\n\n# data --------------\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/music200.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/music200.csv"\nmusic_top200 = pd.read_csv(fname)\n\n# tracks\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/track_features.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/track_features.csv"\ntrack_features = pd.read_csv(fname)\n\n# student support ----------\nfrom siuba import pipe\nfrom IPython.display import HTML, display\nfrom siututor import Blank\n___ = Blank()\n\n# DataFrame display --------\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# here, we avoid the default df._repr_html_ method, since it inlines css\n# (style tags make vue angry)\nhtml_formatter.for_type(\n    pd.DataFrame,\n    lambda df: df.to_html(max_rows = pd.get_option("display.max_rows"), show_dimensions = True)\n)')])])])],1),a("RevealSlides",{attrs:{slides:t.slides}}),a("h3",{attrs:{id:"exercise-1"}},[a("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[a("span",{staticClass:"fa fa-link"})]),t._v("Exercise 1:")]),a("p",[a("strong",[t._v("TODO")])]),a("h3",{attrs:{id:"exercise-2"}},[a("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[a("span",{staticClass:"fa fa-link"})]),t._v("Exercise 2:")]),a("p",[t._v("Below is the start of plotnine's documentation for "),a("code",{pre:!0},[t._v("facet_wrap")]),t._v(". ")]),a("img",{staticStyle:{width:"100%"},attrs:{src:o(988)}}),a("p",[t._v("Notice that the Parameters section lists "),a("code",{pre:!0},[t._v("ncol")]),t._v(" and "),a("code",{pre:!0},[t._v("nrow")]),t._v(" options. These determine how many columns or rows to use. For example, the plot below has "),a("code",{pre:!0},[t._v("nrow = 1")]),t._v(".")]),a("p",[t._v("Try out the plot as is, and with the "),a("code",{pre:!0},[t._v("nrow")]),t._v(" argument changed to "),a("code",{pre:!0},[t._v("ncol = 1")]),t._v(".\nThen, answer the questions below.")]),a("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v("findfont: Font family ['Noto Sans CJK JP'] not found. Falling back to DejaVu Sans.\nfindfont: Font family ['Noto Sans CJK JP'] not found. Falling back to DejaVu Sans.\nfindfont: Font family ['Noto Sans CJK JP'] not found. Falling back to DejaVu Sans.")])]),a("p",[a("g-image",{attrs:{src:o(989),alt:"png"}})],1),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v("<ggplot: (295497981)>")])])]},proxy:!0}],null,!0)},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[t._v('# This code keeps the 3 artists listed ----\nartists_to_keep = ["Billie Eilish", "ITZY", "Roddy Ricch"]\n\nsome_artists = (\n  track_features\n  >> filter(_.artist.isin(artists_to_keep))\n)\n\n# This code plots the data ----\n(some_artists\n  >> ggplot(aes("energy", "valence", color = "artist"))\n   + geom_point()\n   + facet_wrap("~artist", nrow = 1)\n   + labs(title = "Song features across 3 artists")\n)')])])]),a("prompt-expandable",{attrs:{header:"Which of the three artists tends to have the lowest valence?"}},[a("q-multiple-choice",[a("q-opt",{attrs:{text:"Billie Eilish"}},[a("span",[t._v('Correct! We\'ll discuss how to measure the idea of "tends to have" in the next chapter.')])]),a("q-opt",{attrs:{text:"ITZY"}},[a("span",[t._v("That's not right. This artist tends to have the highest valence.")])]),a("q-opt",{attrs:{text:"Roddy Ricch"}},[a("span",[t._v("That's not right. Look for the cluster of points toward the bottom of the plot.")])])],1)],1),a("p",[t._v("Which value seems easier to compare across facets, when ncol is set to 1?")]),a("details",[a("summary",[t._v("answer")]),t._v("\n    \nThis is subjective, but I would say energy is easier to compare, since there is only one x-axis for across all plots. (For example, there is a only one spot on the x-axis where energy is .25).\n    \n")])]}}])})],1)}),[],!1,null,null,null);"function"==typeof g&&g(w),"function"==typeof A&&A(w);e.default=w.exports},835:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},836:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}},988:function(t,e,o){t.exports=o.p+"assets/img/facet_wrap_docs.81eabe7b.png"},989:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/intro-to-siuba/assets/static/02d-facets_5_1.15e281f.8f2ea0a4416b0021180fb51e1a406ad9.png",size:{width:708,height:476},sizes:"(max-width: 708px) 100vw, 708px",srcset:["/intro-to-siuba/assets/static/02d-facets_5_1.15e281f.8f2ea0a4416b0021180fb51e1a406ad9.png 708w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 708 476' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-c8fa1cd3434caaa65ae7621f78888c23'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-c8fa1cd3434caaa65ae7621f78888c23)' width='708' height='476' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAArCAYAAADIWo5HAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAHUklEQVRo3sWaaVMbORCG%2bf//ZItKVT4k2WQrB5uEQMKdAzDYxtjG3BhsY4/HM%2b7VI%2bhhPMzhe1VWaWSNpNar7lZ3jxbkMfX7/aDMyqRerxc8a%2bp0OhIdLyv5vi%2be5wV1fQ7TMwpdw86raSEOgLikk0AwqVgsyps3b%2bTr16/y%2bvVr%2bf37t3z79k0WFxdtnefPnz/Lp0%2bf5MOHD1IqleTVq1eyublp2969eyffv3%2b342xvb8vOzo5tp8/bt29tvry8DECKW2yUvokAiA7CTkR3J5zggHK5LNVqVfb39%2b0C4AAWenR0ZP9ncefn51KpVKRer9u26%2btrOT09Dd7hf/3v7OwseP/4%2bFju7%2b8TCVcayeMuPpYDut2u7O3t2cVBMMT8%2bfPH7sz6%2brr8%2bvVLVldXg92D6FqtZnMul5N8Pi8nJyd2QWSeeYcxNjY2bH/epY0SECiZizb9HyDgqh8/fsjKyorlEubf2tqy5cHBgaVR6bu5uRmPA6LogTqDA0Sz2bQli4KVWTiTwcJfvnyxxLPrjUbDlgAAJ1BvtVq2P7ndbtsxWAwldf7Xd%2bh7UjuRf5f%2bHRgPOpaXl%2b1cAA4IiBAlADGO4ziWWy4uLsYXgXAnFswi2AkWSGYHr66u7CQ8I5tk3UEyO0H7z58/7W6y89qmY2j/8P82Vx7a6cs42jc8F/SwaM3RuaF7Ig5Apu/u7uxEDDhugi1HTYZPpOoZMSqfyCRpLB0Qln0Wjlyzg0naNyuj3PSIHDZ7vlFmfc/OPc6cEx%2bDURFQDhh2sDABgBc9y9N2K9wXACbR6OOkWCWobJxkjEQJHAeAuHa4Z%2b4ARIkBgLAIxBEbJS5MtLLxsBzg%2bI7stXP2OV/IJwIctwHTwCgWAHYiDECgKI3R0ru%2bSiVwVAAoXd%2b1z4eHh4kckLYBcxMBr9UUr3E3fRHo8%2bsnisCghTpdEXmmBDEsogAMIwLjKEFtb3otOXJKUj4qi9/3E%2bfrdn3J7bUn0vqJHOC6rjUnMTKwrKIiMG0Ansk2HFA8ylSyhcPOVEVhAAAsMNgwrAPCk6ADfNedmggMcwzGKcB6vSedtj%2b025xGS6wIqB2gHNApHIpv7IP6P3%2bLe3E%2bdR0wKgCHubbs77YfaexnWoNpdMSeAoEOUBEIuZzTFIHoeFlKMOv5SVc41lHCqMMqjXJGuL4QbQCAQAfEBB%2bytDSLGBeAQqGQyAHXV66c1rrBrkfbw4GavxYX5f3797K0tGSBSOOIBRDC39YX4%2byALNkKP7OIYeyAOILi7IAnZ83YC66faJGGfZqOceqUk/EacblR7ij529vbQQ6gAwEGZP%2bZCCD/xbz4j%2bAkW2SzEYEscYgM8tCGrVApS6vRsLEDNpcADy7%2b2tqaDbqEN8gC8PHjxwCAqB2QJv9xxE4CQJIzFCfracrSfyxVD6SKAJEXgpvEAojEwDJpImDZrHZij8Rpc0AUgPC45ZJjuNPLNI8xpPJOUe6Mxbqz/bDrRJ50PWF32wLAjr948cIGJ9UIChtCcbuMSPhud64AsHivpzaLn8Ep/dSAbvj9BV4kCqS7Dcsk%2bQLD%2bPSzFgFOgPxBJ1EEaK8cu4ajG1a3kdEDxBcpmYPnAIBUOyC0MO%2b%2bJb27W6sTejfXsSfDLJRgkoWXpo9aTUNjz7NaX6PWiDjhdzKiHoiAfuxIigcEALTvxb26lL45Nru1aqICGtYdjgOAiPEk7vCovkEiB0QDIizaqRxnEjQrAJ78FaPZ773M02CUGGJqPMAqElPHJPaMMYHmT5t01qZws%2bFJpezEeqhTjQdUQgBgCFn0Ly%2bktbWR6B7PSgnGfQ%2bcSUQI7Y/S4EQoGQB8c9Z7Xefpq61RgnDBLJ2hMADDGEBTjwfwBYaYQAk7wCg99f09ozWdalmaa6tz5wBCYL1enHk8xahwYkhMv/sX8tLaXDfK0J07AAQ/KsfOzELlsUqwUq3CEtJ7ZHnk32s2rA0wr3jALCPB6QERYzeXjeFgVK44p7UHrigVny1%2bXsfgNAOgQwHQNsrwYGUZrThIJEZRyjmbBMAoZ3IUgLl9GxwAwDg6ZaMEvfMzaR8VpHtxLq45HTqGCwIgUgjAkQqLwCjEIwL/y8fRZyJgTgIxR2DPyH7fiMIoKSrHoySiSXP/PP7c3HTlIJeztkDJKMO8YWkIg7U5HfCktM5uE21h0bAvNgT/E9rSu0LcGqGkTl/9/E5f2niX/7jooCF56uq18Z7%2bx/v01bF0HtrcmHD9SAAMnr3GmzID1us3dhIuQRE44YYH9d3dXWs4sWDqeicAImBhnom9QRh98b7wxnjmig1jEXsoPoJLnb72O6EpEUPaABfjjJgedcJZjMPYzAkIjK3zTkUEBn1v30ZTNGDKwnjW21uAgN2g6EfB1Hf1Rhd1vUtIH/rGhaz0OCarTtCxNKqjfZO%2bYE8EQD8lHJ71bSBOKb58%2bdLeFeRuIHcB9UJTUv9JZH8iEUgDIy0knnZms9PsHDuvrJv2sWKcI3ASG%2bE/HnoRS1p0xUwAAAAASUVORK5CYII=' /%3e%3c/svg%3e"}},990:function(t,e,o){t.exports=o.p+"assets/img/02d-slides_8_0.4c30886c.png"},991:function(t,e,o){t.exports=o.p+"assets/img/02d-slides_11_0.5c0344f1.png"}}]);