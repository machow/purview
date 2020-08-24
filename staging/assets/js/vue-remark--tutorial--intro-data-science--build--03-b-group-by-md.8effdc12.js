(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1016:function(t,e,a){"use strict";a.r(e);var n=a(9),s=a(836),o=a.n(s),i=a(984),r=a.n(i),d='<section class=""><section class=""> <h1 id=the-group_by-verb>The group_by verb</h1> <p>In the last lesson, you used the summarize verb to calculate an average either,</p> <ul> <li>across all countries (the entire dataset)</li> <li>within a particular country (filtered data)</li> </ul> <p>In this lesson you&#39;ll learn the group_by verb, which opens up a new option for calculating an average:</p> <ul> <li>within each country</li></ul></section></section><section class=""><section class="">   <h1 id=the-group_by-verb-1>The group_by verb</h1> <p><img src='+o()(r.a)+' alt=""></p> <aside class=notes> <p>You use group_by to define groupings of data (blue and green chunks in diagram).</p> <p>Then, you would follow it with summarize to convert those groups to a single value (like a mean).</p> </aside></section></section><section class=""><section class=""> <h1 id=the-summarize-verb>The summarize verb</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter(_.country == &quot;Japan&quot;)\n  &gt;&gt; summarize(avg_duration = _.duration.mean()))</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>avg_duration</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>250.53499</td> </tr> </tbody> </table> </div> <aside class=notes> <p>For example, here you&#39;re finding the average track duration in Japan.</p> <p>What if we weren&#39;t interested just in the average duration for Japan, but for each country in the dataset?</p> <p>You could rerun this code and change the country each time, but that&#39;s very tedious.</p> </aside></section></section><section class=""><section class=""> <h1 id=summarizing-by-country>Summarizing by country</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; group_by(_.country)\n  &gt;&gt; summarize(avg_duration = _.duration.mean())\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>avg_duration</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>Argentina</td> <td>212.847855</td> </tr> <tr> <th>1</th> <td>Australia</td> <td>204.795300</td> </tr> <tr> <th>2</th> <td>Austria</td> <td>184.894870</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> </tr> <tr> <th>59</th> <td>United States</td> <td>190.827500</td> </tr> <tr> <th>60</th> <td>Uruguay</td> <td>210.796985</td> </tr> <tr> <th>61</th> <td>Viet Nam</td> <td>217.222830</td> </tr> </tbody> </table> <p>62 rows × 2 columns</p> </div> <aside class=notes> <p>Instead, you can use the group_by verb, which tells siuba to summarize within groups instead of summarizing the entire dataset. Notice that this replaces the filter country equals Japan with group_by country.</p> <p><code>group_by(_.country)</code> tells the summarize step that it should perform the summary within each country: within Argentina, then within Australia, and so on through Viet Nam, then combine the results.</p> <p>Instead of getting one row overall, you now get <strong>one row for each country</strong>. There&#39;s now a year variable along with the new avg_duration variable.</p> </aside></section></section><section class=""><section class=""> <h1 id=summarizing-by-continent-and-position>Summarizing by continent and position</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; group_by(_.continent, _.position)\n  &gt;&gt; summarize(\n      min_streams = _.streams.min(),\n      max_streams = _.streams.max()\n  )\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>continent</th> <th>position</th> <th>min_streams</th> <th>max_streams</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>Africa</td> <td>1</td> <td>94422</td> <td>94422</td> </tr> <tr> <th>1</th> <td>Africa</td> <td>2</td> <td>74689</td> <td>74689</td> </tr> <tr> <th>2</th> <td>Africa</td> <td>3</td> <td>67552</td> <td>67552</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>997</th> <td>Oceania</td> <td>198</td> <td>44570</td> <td>225951</td> </tr> <tr> <th>998</th> <td>Oceania</td> <td>199</td> <td>44364</td> <td>225492</td> </tr> <tr> <th>999</th> <td>Oceania</td> <td>200</td> <td>44291</td> <td>225179</td> </tr> </tbody> </table> <p>1000 rows × 4 columns</p> </div> <aside class=notes> <p>You can also group by multiple variables.</p> <p>Suppose you&#39;re interested calculating min and max streams within each continent, and each position.</p> <p>Now the output has one row for each combination of a continent and position.</p> <p><strong>(Click down to see what the steps leading to this code might look like)</strong></p> </aside></section><section class=""> <h1 id=summarizing-by-continent-and-position-1>Summarizing by continent and position</h1> <pre><code class=language-python>(music_top200\n\n  &gt;&gt; summarize(\n      min_streams = _.streams.min(),\n      max_streams = _.streams.max()\n  )\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>min_streams</th> <th>max_streams</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>1470</td> <td>12987027</td> </tr> </tbody> </table> </div> <aside class=notes> <p>You might start by summarizing min and max streams across all the data.</p> </aside></section><section class=""> <h1 id=summarizing-by-continent-and-position-2>Summarizing by continent and position</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; filter(_.continent == &quot;Oceania&quot;, _.position == 1)\n  &gt;&gt; summarize(\n      min_streams = _.streams.min(),\n      max_streams = _.streams.max()\n  )\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>min_streams</th> <th>max_streams</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>321272</td> <td>1757343</td> </tr> </tbody> </table> </div> <aside class=notes> <p>Then, you might add a filter, so your summarize is over one specific grouping (position 1 tracks in Oceania).</p> </aside></section><section class=""> <h1 id=summarizing-by-continent-and-position-3>Summarizing by continent and position</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; group_by(_.continent, _.position)\n  &gt;&gt; summarize(\n      min_streams = _.streams.min(),\n      max_streams = _.streams.max()\n  )\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>continent</th> <th>position</th> <th>min_streams</th> <th>max_streams</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>Africa</td> <td>1</td> <td>94422</td> <td>94422</td> </tr> <tr> <th>1</th> <td>Africa</td> <td>2</td> <td>74689</td> <td>74689</td> </tr> <tr> <th>2</th> <td>Africa</td> <td>3</td> <td>67552</td> <td>67552</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>997</th> <td>Oceania</td> <td>198</td> <td>44570</td> <td>225951</td> </tr> <tr> <th>998</th> <td>Oceania</td> <td>199</td> <td>44364</td> <td>225492</td> </tr> <tr> <th>999</th> <td>Oceania</td> <td>200</td> <td>44291</td> <td>225179</td> </tr> </tbody> </table> <p>1000 rows × 4 columns</p> </div> <aside class=notes> <p>Finally, you might replace the filter with a group_by.</p> <p>Note that you might save this result as a variable and use it in a new pipe or visualization. For example, the new pipe might filter to keep where position is 1, so you can inspect min and max streams for the top tracks across continents.</p> </aside><aside class=notes> </aside></section></section><section class=""><section class=""> <h1 id=lets-practice>Let&#39;s practice!</h1> </section></section>',c=a(835),l=a(7);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}l.a.config.optionMergeStrategies;var u={slides:d,VueRemarkRoot:c.a},p=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(u).forEach((function(t){"object"===h(u[t])&&"function"==typeof u[t].render?e[t]=u[t]:a[t]=function(){return u[t]}}))},m=l.a.config.optionMergeStrategies,g="__vueRemarkFrontMatter",y={excerpt:null,title:"Group by",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"summarize"};var b=function(t){t.options[g]&&(t.options[g]=y),l.a.util.defineReactive(t.options,g,y),t.options.computed=m.computed({$frontmatter:function(){return t.options[g]}},t.options.computed)},f=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[n("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:e.debut,expression:"nb.debut"}]},[n("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[n("pre",[n("code",{pre:!0},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\n\n# wranglign ---------\nimport pandas as pd\nfrom siuba import *\n\n# plotting ----------\nfrom plotnine import *\n\ntheme_set(theme_classic(base_family = "Noto Sans CJK JP"))\n\n# data --------------\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/music200.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/music200.csv"\nmusic_top200 = pd.read_csv(fname)\n\n# tracks\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/track_features.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/track_features.csv"\ntrack_features = pd.read_csv(fname)\n\n# student support ----------\nfrom siuba import pipe\nfrom IPython.display import HTML, display\nfrom siututor import Blank\n___ = Blank()\n\n# DataFrame display --------\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# here, we avoid the default df._repr_html_ method, since it inlines css\n# (style tags make vue angry)\nhtml_formatter.for_type(\n    pd.DataFrame,\n    lambda df: df.to_html(max_rows = pd.get_option("display.max_rows"), show_dimensions = True)\n)\n')])])])],1),n("RevealSlides",{attrs:{slides:t.slides}}),n("h3",{attrs:{id:"exercise-1"}},[n("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[n("span",{staticClass:"fa fa-link"})]),t._v("Exercise 1:")]),n("p",[t._v("Modify the code below so it calculates max popularity and average danceability "),n("strong",[t._v("for each artist")]),t._v(".")]),n("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[n("table",{staticClass:"dataframe",attrs:{border:"1"}},[n("thead",[n("tr",{staticStyle:{"text-align":"right"}},[n("th"),n("th",[t._v("max_popularity")]),n("th",[t._v("avg_danceability")])])]),n("tbody",[n("tr",[n("th",[t._v("0")]),n("td",[t._v("99")]),n("td",[t._v("0.677941")])])])]),n("p",[t._v("1 rows × 2 columns")])]},proxy:!0}],null,!0)},[n("pre",[n("code",{pre:!0},[t._v("artists = (track_features\n  >> summarize(\n      max_popularity = _.popularity.max(),\n      avg_danceability = _.danceability.mean()\n  )\n)\nartists\n")])])]),n("p",[t._v("Make a scatterplot of the data.")]),n("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"}},[n("pre",[n("code",[t._v("\n\n\n\n")])])]),n("p",[t._v("In the plot above, what strange thing is going on with the distribution of max popularity?")]),n("details",[n("summary",[t._v("possible answer")]),n("p",[t._v("There are many artists with a max popularity of 0! ")])]),n("h3",{attrs:{id:"exercise-2"}},[n("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[n("span",{staticClass:"fa fa-link"})]),t._v("Exercise 2:")]),n("p",[t._v("In the last exercise of the facets chapter, you examined track features for three artists.")]),n("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"}},[n("pre",[n("code",{pre:!0},[t._v('# This code keeps the 3 artists listed ----\n\nartists_to_keep = ["Billie Eilish", "ITZY", "Roddy Ricch"]\n\nsome_artists = (\n  track_features\n  >> filter(_.artist.isin(artists_to_keep))\n)\n\n#uncomment line below to see data\n#some_artists\n')])])]),n("p",[t._v("We used a plot and intuition to judge who tended to have highest energy and valence tracks.")]),n("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[n("p",[n("g-image",{attrs:{src:a(983),alt:"png"}})],1),n("pre",[n("code",{pre:!0},[t._v("<ggplot: (-9223372036555294755)>\n")])])]},proxy:!0}],null,!0)},[n("pre",[n("code",{pre:!0},[t._v('# This code plots the data ----\n(some_artists\n  >> ggplot(aes("energy", "valence", color = "artist"))\n   + geom_point()\n   + facet_wrap("~artist", nrow = 1)\n   + labs(title = "Song features across 3 artists")\n)\n')])])]),n("p",[t._v("Now you should be able to answer the question more directly!")]),n("p",[n("strong",[t._v("Use a grouped summarize to calculate the mean energy and valence for each artist")]),t._v(".")]),n("code-cell",{attrs:{status:e.status,onExecute:e.execute,ex:"a",exIndx:0,language:"python"}},[n("pre",[n("code",[t._v("# summarizing mean energy and valence for each artist\n\n\n\n")])])]),n("p",[t._v("Q: In this data, which artist has the lowest average energy, and what is its value?")]),n("details",[n("summary",[t._v("answer")]),t._v("Billie Eilish, 0.321004")]),n("p",[t._v("Q: What about for lowest average valence?")]),n("details",[n("summary",[t._v("answer")]),t._v("Billie Eilish, 0.266948")])]}}])})],1)}),[],!1,null,null,null);"function"==typeof p&&p(f),"function"==typeof b&&b(f);e.default=f.exports},835:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},836:function(t,e,a){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}},983:function(t,e){t.exports={type:"image",mimeType:"image/png",src:"/assets/static/03b-group-by_11_0.578a6fa.3a242eacc0a2a05cc168f1ab82e8afcc.png",size:{width:703,height:478},sizes:"(max-width: 703px) 100vw, 703px",srcset:["/assets/static/03b-group-by_11_0.578a6fa.3a242eacc0a2a05cc168f1ab82e8afcc.png 703w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 703 478' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-91bee90957f94db181ddaafc76c978a6'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-91bee90957f94db181ddaafc76c978a6)' width='703' height='478' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAsCAYAAADVX77/AAAACXBIWXMAAA9hAAAPYQGoP6dpAAAHbElEQVRo3sWa6XLTPBSGc/93wQ3A8ANmYIABCrRspXTfkzZb0zRJsy%2bOcz49So5xXNuJs31ONJYtyZKO3rNKKQlco9FoZtJ6juNMte33%2b5Lk4hvD4dDmXdf13vnL5x2Tv12SKxXW0SyCcDH5Dx8%2byLt37%2bTNmzfy5csXefv2rbx%2b/dret7a25P3797bs79%2b/8vPnT/vu27dv8unTJ5u/uLiQX79%2byffv3%2bXFixe2/qtXr2Rvb2/mxMPGGCTg3AQIo/w8VC0UCnJ9fW0n8uPHD6nVapLJZOTm5sYmynK5nJRKJVs3n89LsVj06lQqFSmXyzav5eTv7u5m9h02xkVQMIUA4Hh6emoHmE6n7WCYHCvECh4cHMjv37/tZI%2bPj%2b2gSUzq6urK1qUtz0xGy/nO/v6%2bRYKW8z6bzdpEnrYkyiAabUDC7u6u7Y%2b25HlH0jHe3t7K4eGhNJvNxRGgjeDhs7MzGQwG0m637TMr9PHjR/n8%2bbPteGdnxz6zur1eT1qtlq3HqkEkVpv3tCd1u12LDNpSTp53lHU6HXunP1gBosJa%2bk2IBqvAXvQLIVgAFoK2JOozlmq1uhgB/DBCEP3588euisKYPJPTVeXOs64SK8Cd5/Pzc7saCmUt465I0W/zzpbfGvjnCpJJZyyRtK2yBW20nSKHpO21D4i4FAKgJqsDrBa97u/vpV6vJ26XHeWl3CxLqViSZa6FZIA2YuLw4OXlpYeGedWPqjCQgWBL2r5vfrV6TXLZXOK2Yep5IQJwASOES9IPaV0IMC8vemw3GhOv2WhaNvLbBJu4nghBZYEgRZ9QOUT9JCFAsE6j0fh/COCfWBgB4vLBdwipeQngTsqzvbxU3Kp0mh0r6MIIELkIq0YA6ktlQLAjt98Tp1YNtRg1zwomZYHW0KhbGUij3rDSfOMECCIgKAM8IwndXMjHEgAbYFEWwJCJY4EoH2GlBEAILsMCSYWg1sk7xiqs5aSYK8Yi4PHRMZqit1IieCygVl2YEPyX3FgELCQEzR81WK1XJZ/LxxKg03bl7KQzqbMiAugH1KkhRXmGq0RAsG2cGvQvRqfjRk4%2bbNFmjWXKDgAFngyYDAK%2bRwA2vm5J5%2bxkqmwVCNB6UWowTADufG1IId%2bPVNd%2bQypuMePV4GQQw0bdEKAvzuOjuJ12LOWXQUCcHRD81mDgSq/rJpJPUahIBSM6fhkwmiGNN0EALS/f46EOZ2oGbBGCNARl8D7DTOspAuBZAf2gHRAcRBxPLWIHBNviRIXZAVpeeXAs/0fZA3p/eHiQCyPPWEjmNkv9pra3t71BQwAPAUCtdCfDdnumMbIuBIQRPO67Xlm5ZDRG28YtCMERPyCoQ8J9nkIABFAXdsoQIu5nPDu3241VfZtigVm63yujbb0ljrFpHo3cIjEmEsGddmBBU8%2bfP7cFVs92OlYdBiX9VNDE1EEwhrHGOhFQrTihrPjEZDe2SmlUsXPRsF6cukwhMOAbKhLRCdoBwQ6cx5pljU0SAL1/m%2bnFsoKfAGX33obdkGdAPg4xKSassKCR3xeI4vX/iwXGY3Qln%2b2HjHHMuDwPuuOwfbc7jhvybdicOz6HCn2LgGn9Oog0haMgJBtiAbX%2bsAFqVSdykYZDVzLpvtRqj3b/gURQlXgj8o47oTuPAHHxAA9WhpLdqzFrdM5PPfmwbi0QJ/zmNdM13B/JAv6JBuMB6vwMmw1xNerqOJGssQ47IGxyfl8gKnIVJTCD76LjAb5B9G4yc/nn60bAXbFvLcJ5HaF5AqjRMUEETuZ6vOJmQK29XRlNoLQpQyi4ygjAXs9dT0RIYwIZYOgMzCCG4kwMJFign89u1BeIcmJWOfmpgAj6MsPegDGEnOytOK3WP55jq%2bvk6InwWzcLxG3YrhQBKgAZhMoAdwL3frEg7aMDowUubVxgUwTwnJvywOju4cpXPjQqjPHglwH2Xa1qCeD3CTbJApjA7dYaCTClBQwKbhiEsQx72bHX1Mukn0w%2bCgFJo8JJWWAjO0MXpydm1l0jA5peRMjP%2b3EIWKUdsM69gEgCDEzHZzvbMjIOj7IBkw9uiETp1eDOUBKdDAL8O0Mb2xydQoBhgVsziVHlQdqH%2b9K/ScvIOBODQm6uj8ECbLEvcuGkcDZgmWvpIzKWBYx36Jh7F6%2bJyRsTGGSgJSgn%2bfOU40VibzMBBCF5LQ/WD3tG%2bIIcBLDr64tvx7XVctJKEMAdGF6bgZCOT05sOOn66soOjiMsHFshT%2bCEPOWcD4J/CayQp4zEuR6O3OieA2d88DV45s6xGOqTx0PDFtG2nDQ5Ojqy5fRHP7zTvvHqGA95VPdwOFycAGENsQPojKTn%2bRgMiVViBfToS1inTIiJKUtAHIigMkIPSenhJv%2bl%2bxOqkvHp%2bZbaKMgL%2bgZtK2WBoFABmkxcn8nrM0TwlwWT1iXYgoRnogxc4UoZ34gSeMG%2b/c9RfS%2bFgCSUnOWL%2b4/NEJB4%2bfKlPe317NkzewgryebrrOdl1WNqnp2UJCoozolBS7QmPsa8bZP49otc/wH5UQouq/ggIgAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"}},984:function(t,e,a){t.exports=a.p+"assets/img/model_group_by.5d6d9d3e.png"}}]);