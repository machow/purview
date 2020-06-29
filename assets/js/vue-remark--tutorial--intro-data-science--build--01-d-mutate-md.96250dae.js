(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{835:function(t,d,e){"use strict";d.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},836:function(t,d,e){"use strict";t.exports=function(t,d){return d||(d={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(d.hash&&(t+=d.hash),d.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}},979:function(t,d,e){t.exports=e.p+"assets/img/model-mutate.cad47ff0.png"},998:function(t,d,e){"use strict";e.r(d);var a=e(9),n=e(836),r=e.n(n),s=e(979),o=e.n(s),i="<section><section> <h1 id=the-mutate-verb>The mutate verb</h1> <p><img src="+r()(o.a)+' alt=""></p> <aside class=notes> <p>You&#39;ve already learned two verbs for manipulating data: filter for extracting a subset of the observations, and arrange for sorting them.</p> <p>Suppose you want to change one of the variables in your dataset, based on the other ones. Or suppose you want to add a new variable.</p> <p>For that, you would use the mutate verb.</p> </aside></section></section><section data-transition="slide-in none-out"><section data-transition="slide-in none-out"> <h2 id=using-mutate-to-change-a-variable>Using mutate to change a variable</h2> <pre><code class=language-python>(music_top200\n  &gt;&gt; mutate(streams = _.streams / 1000)\n)</code></pre> <aside class=notes> <p>First you&#39;ll learn how to change an existing variable.</p> <p>You use mutate like you would filter or arrange, after a pipe operator.</p> <p>Inside this mutate statement, what&#39;s on the right of the equals sign is what&#39;s being calculated, and what&#39;s on the left is what&#39;s being replaced. Here, you&#39;re calculating streams slash one thousand.</p> <p><strong>(Click the down arrow for a breakdown)</strong></p> </aside></section><section data-transition="none-in none-out"> <h2 id=using-mutate-to-change-a-variable-1>Using mutate to change a variable</h2> <pre><code class=language-python>(music_top200\n  >> mutate(streams = <mark>_.streams / 1000</mark>)\n)\n</code></pre> <aside class=notes> <p>The slash in Python performs division, so &quot;streams divided by one thousand&quot;.</p> </aside></section><section data-transition="none-in none-out"> <h2 id=using-mutate-to-change-a-variable-2>Using mutate to change a variable</h2> <pre><code class=language-python>(music_top200\n  >> mutate(<mark>streams =</mark> _.streams / 1000)\n)\n</code></pre> <aside class=notes> <p>On the left, you&#39;re saying you want to replace the existing streams column, by writing streams equals.</p> </aside></section></section><section data-transition="none-in slide-out"><section data-transition="none-in slide-out"> <h2 id=using-mutate-to-change-a-variable-result>Using mutate to change a variable (result)</h2> <pre><code class=language-python>(music_top200\n  &gt;&gt; mutate(streams = _.streams / 1000)\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>Argentina</td> <td>1</td> <td>Tusa</td> <td>KAROL G</td> <td>1858.666</td> <td>200.960</td> <td>Americas</td> </tr> <tr> <th>1</th> <td>Argentina</td> <td>2</td> <td>Tattoo</td> <td>Rauw Alejandro</td> <td>1344.382</td> <td>202.887</td> <td>Americas</td> </tr> <tr> <th>2</th> <td>Argentina</td> <td>3</td> <td>Hola - Remix</td> <td>Dalex</td> <td>1330.011</td> <td>249.520</td> <td>Americas</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>12397</th> <td>South Africa</td> <td>198</td> <td>Black And White</td> <td>Niall Horan</td> <td>11.771</td> <td>193.090</td> <td>Africa</td> </tr> <tr> <th>12398</th> <td>South Africa</td> <td>199</td> <td>When I See U</td> <td>Fantasia</td> <td>11.752</td> <td>217.347</td> <td>Africa</td> </tr> <tr> <th>12399</th> <td>South Africa</td> <td>200</td> <td>Psycho!</td> <td>MASN</td> <td>11.743</td> <td>197.217</td> <td>Africa</td> </tr> </tbody> </table> <p>12400 rows × 7 columns</p> </div> <aside class=notes> <p>The result is the same table, but with streams replaced with a new value, one that&#39;s much smaller than it was before.</p> <p>This is how you manipulate existing variables in the table. That&#39;s often necessary during data processing and cleaning.</p> <p>Just like filter and arrange, you&#39;re not altering the original gapminder data, you&#39;re just changing the value in this new data frame that&#39;s being returned.</p> </aside></section></section><section data-transition="slide-in none-out"><section data-transition="slide-in none-out"> <h2 id=using-mutate-to-add-a-new-variable>Using mutate to add a new variable</h2> <pre><code class=language-python>(music_top200\n  &gt;&gt; mutate(ttl_stream_time = _.streams * _.duration)\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> <th>ttl_stream_time</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>Argentina</td> <td>1</td> <td>Tusa</td> <td>KAROL G</td> <td>1858666</td> <td>200.960</td> <td>Americas</td> <td>3.735175e+08</td> </tr> <tr> <th>1</th> <td>Argentina</td> <td>2</td> <td>Tattoo</td> <td>Rauw Alejandro</td> <td>1344382</td> <td>202.887</td> <td>Americas</td> <td>2.727576e+08</td> </tr> <tr> <th>2</th> <td>Argentina</td> <td>3</td> <td>Hola - Remix</td> <td>Dalex</td> <td>1330011</td> <td>249.520</td> <td>Americas</td> <td>3.318643e+08</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>12397</th> <td>South Africa</td> <td>198</td> <td>Black And White</td> <td>Niall Horan</td> <td>11771</td> <td>193.090</td> <td>Africa</td> <td>2.272862e+06</td> </tr> <tr> <th>12398</th> <td>South Africa</td> <td>199</td> <td>When I See U</td> <td>Fantasia</td> <td>11752</td> <td>217.347</td> <td>Africa</td> <td>2.554262e+06</td> </tr> <tr> <th>12399</th> <td>South Africa</td> <td>200</td> <td>Psycho!</td> <td>MASN</td> <td>11743</td> <td>197.217</td> <td>Africa</td> <td>2.315919e+06</td> </tr> </tbody> </table> <p>12400 rows × 8 columns</p> </div> <aside class=notes> <p>Alternatively, you may want to add a new variable.</p> <p>For instance, suppose you want to know the total seconds people have listened to a track.</p> <p>In the data you have a tracks duration in seconds, and its number of streams. This means <strong>total time listened is duration multiplied by streams</strong>.</p> <p>You would use mutate in almost the same way. You pipe your music data to the mutate verb.</p> <p>The asterisk in Python represents multiplication, so you write streams asterisk duration to multiply the two columns.</p> </aside></section></section><section data-transition="none-in slide-out"><section data-transition="none-in slide-out"> <h2 id=using-mutate-to-add-a-new-variable-result>Using mutate to add a new variable (result)</h2> <pre><code class=language-python>(music_top200\n  >> mutate(<mark>ttl_stream_time</mark> = _.streams * _.duration)\n)\n</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> <th>ttl_stream_time</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>Argentina</td> <td>1</td> <td>Tusa</td> <td>KAROL G</td> <td>1858666</td> <td>200.960</td> <td>Americas</td> <td>3.735175e+08</td> </tr> <tr> <th>1</th> <td>Argentina</td> <td>2</td> <td>Tattoo</td> <td>Rauw Alejandro</td> <td>1344382</td> <td>202.887</td> <td>Americas</td> <td>2.727576e+08</td> </tr> <tr> <th>2</th> <td>Argentina</td> <td>3</td> <td>Hola - Remix</td> <td>Dalex</td> <td>1330011</td> <td>249.520</td> <td>Americas</td> <td>3.318643e+08</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>12397</th> <td>South Africa</td> <td>198</td> <td>Black And White</td> <td>Niall Horan</td> <td>11771</td> <td>193.090</td> <td>Africa</td> <td>2.272862e+06</td> </tr> <tr> <th>12398</th> <td>South Africa</td> <td>199</td> <td>When I See U</td> <td>Fantasia</td> <td>11752</td> <td>217.347</td> <td>Africa</td> <td>2.554262e+06</td> </tr> <tr> <th>12399</th> <td>South Africa</td> <td>200</td> <td>Psycho!</td> <td>MASN</td> <td>11743</td> <td>197.217</td> <td>Africa</td> <td>2.315919e+06</td> </tr> </tbody> </table> <p>12400 rows × 8 columns</p> </div> <aside class=notes> <p>Notice that to be informative, we have named the column <code>ttl_stream_time</code>, that&#39;s what&#39;s to the left of the equals sign in our code.</p> <p>Column names need to be one word like this: you can&#39;t use spaces.</p> <p>Notice that in the results, there&#39;s a brand new <code>ttl_stream_time</code> column, which is much larger than <code>streams</code>.</p> </aside></section></section><section data-transition="slide-in none-out"><section data-transition="slide-in none-out"> <h1 id=answering-a-question>Answering a question</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; mutate(ttl_stream_time = _.streams * _.duration)\n  &gt;&gt; filter(_.country == &quot;Costa Rica&quot;)\n  &gt;&gt; arrange(-_.ttl_stream_time)\n)</code></pre> <aside class=notes> <p>Let&#39;s put together the three verbs you learned in this chapter to answer a question about our data.</p> <p>Suppose we wanted to know for a country, like Costa Rica, what songs were listened to longest.</p> <p>We would do this in three steps: </p> <ul> <li>create the column</li> <li>filter for country</li> <li>then sort</li> </ul> <p><strong>(Click the down arrow for a breakdown)</strong></p> </aside></section><section data-transition="none-in none-out"> <h1 id=answering-a-question-1>Answering a question</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; mutate(ttl_stream_time = _.streams * _.duration)\n\n\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> <th>ttl_stream_time</th> </tr> </thead> <tbody> <tr> <th>0</th> <td>Argentina</td> <td>1</td> <td>Tusa</td> <td>KAROL G</td> <td>1858666</td> <td>200.960</td> <td>Americas</td> <td>3.735175e+08</td> </tr> <tr> <th>1</th> <td>Argentina</td> <td>2</td> <td>Tattoo</td> <td>Rauw Alejandro</td> <td>1344382</td> <td>202.887</td> <td>Americas</td> <td>2.727576e+08</td> </tr> <tr> <th>2</th> <td>Argentina</td> <td>3</td> <td>Hola - Remix</td> <td>Dalex</td> <td>1330011</td> <td>249.520</td> <td>Americas</td> <td>3.318643e+08</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>12397</th> <td>South Africa</td> <td>198</td> <td>Black And White</td> <td>Niall Horan</td> <td>11771</td> <td>193.090</td> <td>Africa</td> <td>2.272862e+06</td> </tr> <tr> <th>12398</th> <td>South Africa</td> <td>199</td> <td>When I See U</td> <td>Fantasia</td> <td>11752</td> <td>217.347</td> <td>Africa</td> <td>2.554262e+06</td> </tr> <tr> <th>12399</th> <td>South Africa</td> <td>200</td> <td>Psycho!</td> <td>MASN</td> <td>11743</td> <td>197.217</td> <td>Africa</td> <td>2.315919e+06</td> </tr> </tbody> </table> <p>12400 rows × 8 columns</p> </div> <aside class=notes> <p>We use mutate to create the ttl_stream_time column. </p> </aside></section><section data-transition="none-in none-out"> <h1 id=answering-a-question-2>Answering a question</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; mutate(ttl_stream_time = _.streams * _.duration)\n  &gt;&gt; filter(_.country == &quot;Costa Rica&quot;)\n\n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> <th>ttl_stream_time</th> </tr> </thead> <tbody> <tr> <th>2200</th> <td>Costa Rica</td> <td>1</td> <td>Safaera</td> <td>Bad Bunny</td> <td>338078</td> <td>295.177</td> <td>Americas</td> <td>9.979285e+07</td> </tr> <tr> <th>2201</th> <td>Costa Rica</td> <td>2</td> <td>Si Veo a Tu Mamá</td> <td>Bad Bunny</td> <td>244932</td> <td>170.972</td> <td>Americas</td> <td>4.187651e+07</td> </tr> <tr> <th>2202</th> <td>Costa Rica</td> <td>3</td> <td>Ignorantes</td> <td>Bad Bunny</td> <td>233113</td> <td>210.607</td> <td>Americas</td> <td>4.909523e+07</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>2397</th> <td>Costa Rica</td> <td>198</td> <td>Ride It</td> <td>Regard</td> <td>21731</td> <td>157.606</td> <td>Americas</td> <td>3.424936e+06</td> </tr> <tr> <th>2398</th> <td>Costa Rica</td> <td>199</td> <td>Sola</td> <td>Manuel Turizo</td> <td>21704</td> <td>195.044</td> <td>Americas</td> <td>4.233235e+06</td> </tr> <tr> <th>2399</th> <td>Costa Rica</td> <td>200</td> <td>Nena Maldición (feat. Lenny Tavárez)</td> <td>Paulo Londra</td> <td>21684</td> <td>228.875</td> <td>Americas</td> <td>4.962926e+06</td> </tr> </tbody> </table> <p>200 rows × 8 columns</p> </div> <aside class=notes> <p>Then we&#39;d use filter to restrict our analysis to only Costa Rica. </p> </aside></section><section data-transition="none-in none-out"> <h1 id=answering-a-question-3>Answering a question</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; mutate(ttl_stream_time = _.streams * _.duration)\n  &gt;&gt; filter(_.country == &quot;Costa Rica&quot;) \n  &gt;&gt; arrange(-_.ttl_stream_time) \n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> <th>ttl_stream_time</th> </tr> </thead> <tbody> <tr> <th>2200</th> <td>Costa Rica</td> <td>1</td> <td>Safaera</td> <td>Bad Bunny</td> <td>338078</td> <td>295.177</td> <td>Americas</td> <td>9.979285e+07</td> </tr> <tr> <th>2202</th> <td>Costa Rica</td> <td>3</td> <td>Ignorantes</td> <td>Bad Bunny</td> <td>233113</td> <td>210.607</td> <td>Americas</td> <td>4.909523e+07</td> </tr> <tr> <th>2222</th> <td>Costa Rica</td> <td>23</td> <td>René</td> <td>Residente</td> <td>101872</td> <td>457.592</td> <td>Americas</td> <td>4.661581e+07</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>2377</th> <td>Costa Rica</td> <td>178</td> <td>Dónde Estás</td> <td>KHEA</td> <td>23177</td> <td>153.560</td> <td>Americas</td> <td>3.559060e+06</td> </tr> <tr> <th>2394</th> <td>Costa Rica</td> <td>195</td> <td>Blueberry Faygo</td> <td>Lil Mosey</td> <td>21771</td> <td>162.547</td> <td>Americas</td> <td>3.538811e+06</td> </tr> <tr> <th>2397</th> <td>Costa Rica</td> <td>198</td> <td>Ride It</td> <td>Regard</td> <td>21731</td> <td>157.606</td> <td>Americas</td> <td>3.424936e+06</td> </tr> </tbody> </table> <p>200 rows × 8 columns</p> </div> <aside class=notes> <p>Then we&#39;d use arrange to sort the data in descending order of our new ttl_stream_time variable.</p> </aside></section></section><section data-transition="none-in slide-out"><section data-transition="none-in slide-out"> <h1 id=answering-a-question-result>Answering a question (result)</h1> <pre><code class=language-python>(music_top200\n  &gt;&gt; mutate(ttl_stream_time = _.streams * _.duration)\n  &gt;&gt; filter(_.country == &quot;Costa Rica&quot;) \n  &gt;&gt; arrange(-_.ttl_stream_time) \n)</code></pre> <div> <style scoped>.dataframe tbody tr th:only-of-type{vertical-align:middle}.dataframe thead th{text-align:right}</style><p></p> <table border=1 class=dataframe> <thead> <tr style=text-align:right> <th></th> <th>country</th> <th>position</th> <th>track_name</th> <th>artist</th> <th>streams</th> <th>duration</th> <th>continent</th> <th>ttl_stream_time</th> </tr> </thead> <tbody> <tr> <th>2200</th> <td>Costa Rica</td> <td>1</td> <td>Safaera</td> <td>Bad Bunny</td> <td>338078</td> <td>295.177</td> <td>Americas</td> <td>9.979285e+07</td> </tr> <tr> <th>2202</th> <td>Costa Rica</td> <td>3</td> <td>Ignorantes</td> <td>Bad Bunny</td> <td>233113</td> <td>210.607</td> <td>Americas</td> <td>4.909523e+07</td> </tr> <tr> <th>2222</th> <td>Costa Rica</td> <td>23</td> <td>René</td> <td>Residente</td> <td>101872</td> <td>457.592</td> <td>Americas</td> <td>4.661581e+07</td> </tr> <tr> <th>...</th> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr> <tr> <th>2377</th> <td>Costa Rica</td> <td>178</td> <td>Dónde Estás</td> <td>KHEA</td> <td>23177</td> <td>153.560</td> <td>Americas</td> <td>3.559060e+06</td> </tr> <tr> <th>2394</th> <td>Costa Rica</td> <td>195</td> <td>Blueberry Faygo</td> <td>Lil Mosey</td> <td>21771</td> <td>162.547</td> <td>Americas</td> <td>3.538811e+06</td> </tr> <tr> <th>2397</th> <td>Costa Rica</td> <td>198</td> <td>Ride It</td> <td>Regard</td> <td>21731</td> <td>157.606</td> <td>Americas</td> <td>3.424936e+06</td> </tr> </tbody> </table> <p>200 rows × 8 columns</p> </div> <aside class=notes> <p>This gives us the answer we&#39;re looking for.</p> <p>The most streamed track in Costa Rica is still the first in our result.</p> <p>However, it looks like the track normally in the 23rd position--René by Residente--is third, since it&#39;s over 7 minutes long!</p> </aside></section></section><section><section> <h1 id=lets-practice>Let&#39;s practice!</h1> </section></section>',h=e(835),c=e(7);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}c.a.config.optionMergeStrategies;var u={slides:i,VueRemarkRoot:h.a},m=function(t){var d=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(u).forEach((function(t){"object"===l(u[t])&&"function"==typeof u[t].render?d[t]=u[t]:e[t]=function(){return u[t]}}))},_=c.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",v={excerpt:null,title:"Mutate",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"basics"};var g=function(t){t.options[p]&&(t.options[p]=v),c.a.util.defineReactive(t.options,p,v),t.options.computed=_.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},f=Object(a.a)({},(function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("VueRemarkRoot",[e("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:t._u([{key:"default",fn:function(d){return[e("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:d.debut,expression:"nb.debut"}]},[e("code-cell",{attrs:{status:d.status,onExecute:d.execute,onReady:d.updateSetupCode,language:"python"}},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",{pre:!0,attrs:{class:"language-text"}},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\nimport pandas as pd\nfrom siuba import arrange, select, mutate, filter, _\nfrom plotnine import ggplot, geom_point, coord_flip, aes, labs\n\n# temporary until I figure out where to put data\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/music200.csv"\nmusic_top200 = pd.read_csv(fname)\n\n# tracks\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/track_features.csv"\ntrack_features = pd.read_csv(fname)\n\n\n# TODO: shift into a package or file\nfrom siututor import Blank\n___ = Blank()\n# from siuba import pipe\n# from IPython.display import HTML, display\n# ___ = pipe(lambda x: display(HTML("⚠️: <b>Don\'t forget to replace all the blanks!<b>")) and _)\n\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# when you see a Shout object, call the shout_html function on it\nhtml_formatter.for_type(pd.DataFrame, lambda df: df.to_html(max_rows = pd.get_option("display.max_rows")))')])])])],1),e("RevealSlides",{attrs:{slides:t.slides}}),e("h3",{attrs:{id:"exercise-0"}},[e("a",{attrs:{href:"#exercise-0","aria-hidden":"true"}},[e("span",{staticClass:"fa fa-link"})]),t._v("Exercise 0:")]),e("p",[t._v("Delete the "),e("code",{pre:!0},[t._v("#")]),t._v(" symbol on the line "),e("code",{pre:!0},[t._v("# music_top200")]),t._v(". This symbol is called a comment, and causes everything to the right of it to be ignored.")]),e("code-cell",{attrs:{status:d.status,onExecute:d.execute,language:"python"}},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",{pre:!0,attrs:{class:"language-text"}},[t._v("# I am a helpful not. I am not code!\n\n# music_top200")])])]),e("h3",{attrs:{id:"exercise-1"}},[e("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[e("span",{staticClass:"fa fa-link"})]),t._v("Exercise 1:")]),e("p",[t._v("Currently, the "),e("code",{pre:!0},[t._v("duration")]),t._v(" is calculated in seconds.")]),e("ul",[e("li",[t._v("Delete (uncomment) the "),e("code",{pre:!0},[t._v("#")]),t._v(" symbol in the code.")]),e("li",[t._v("Complete the code to convert duration to milliseconds.")])]),e("details",[e("summary",[t._v("hint")]),t._v("\n  \n  > Delete the # symbol. This is called a comment. When it is the first non-blank on a line, it stops that line from being run.\n  \n  > 1 second is 1000 milliseconds. So you would multiply the duration by 1000.\n")]),e("code-cell",{attrs:{status:d.status,onExecute:d.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[e("table",{staticClass:"dataframe",attrs:{border:"1"}},[e("thead",[e("tr",{staticStyle:{"text-align":"right"}},[e("th"),e("th",[t._v("country")]),e("th",[t._v("position")]),e("th",[t._v("track_name")]),e("th",[t._v("artist")]),e("th",[t._v("streams")]),e("th",[t._v("duration")]),e("th",[t._v("continent")])])]),e("tbody",[e("tr",[e("th",[t._v("0")]),e("td",[t._v("Argentina")]),e("td",[t._v("1")]),e("td",[t._v("Tusa")]),e("td",[t._v("KAROL G")]),e("td",[t._v("1858666")]),e("td",[t._v("200.960")]),e("td",[t._v("Americas")])]),e("tr",[e("th",[t._v("1")]),e("td",[t._v("Argentina")]),e("td",[t._v("2")]),e("td",[t._v("Tattoo")]),e("td",[t._v("Rauw Alejandro")]),e("td",[t._v("1344382")]),e("td",[t._v("202.887")]),e("td",[t._v("Americas")])]),e("tr",[e("th",[t._v("2")]),e("td",[t._v("Argentina")]),e("td",[t._v("3")]),e("td",[t._v("Hola - Remix")]),e("td",[t._v("Dalex")]),e("td",[t._v("1330011")]),e("td",[t._v("249.520")]),e("td",[t._v("Americas")])]),e("tr",[e("th",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")])]),e("tr",[e("th",[t._v("12397")]),e("td",[t._v("South Africa")]),e("td",[t._v("198")]),e("td",[t._v("Black And White")]),e("td",[t._v("Niall Horan")]),e("td",[t._v("11771")]),e("td",[t._v("193.090")]),e("td",[t._v("Africa")])]),e("tr",[e("th",[t._v("12398")]),e("td",[t._v("South Africa")]),e("td",[t._v("199")]),e("td",[t._v("When I See U")]),e("td",[t._v("Fantasia")]),e("td",[t._v("11752")]),e("td",[t._v("217.347")]),e("td",[t._v("Africa")])]),e("tr",[e("th",[t._v("12399")]),e("td",[t._v("South Africa")]),e("td",[t._v("200")]),e("td",[t._v("Psycho!")]),e("td",[t._v("MASN")]),e("td",[t._v("11743")]),e("td",[t._v("197.217")]),e("td",[t._v("Africa")])])])])]},proxy:!0}],null,!0)},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(music_top200\n  # >> mutate(___ = ___)\n)")])])]),e("h3",{attrs:{id:"exercise-2"}},[e("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[e("span",{staticClass:"fa fa-link"})]),t._v("Exercise 2:")]),e("p",[t._v("Uncomment the mutate in the pipe below. Can you fix the two errors in it?")]),e("p",[t._v("It should return data with a new column on the right, that divides position by 200.")]),e("code-cell",{attrs:{status:d.status,onExecute:d.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[e("table",{staticClass:"dataframe",attrs:{border:"1"}},[e("thead",[e("tr",{staticStyle:{"text-align":"right"}},[e("th"),e("th",[t._v("country")]),e("th",[t._v("position")]),e("th",[t._v("track_name")]),e("th",[t._v("artist")]),e("th",[t._v("streams")]),e("th",[t._v("duration")]),e("th",[t._v("continent")])])]),e("tbody",[e("tr",[e("th",[t._v("0")]),e("td",[t._v("Argentina")]),e("td",[t._v("1")]),e("td",[t._v("Tusa")]),e("td",[t._v("KAROL G")]),e("td",[t._v("1858666")]),e("td",[t._v("200.960")]),e("td",[t._v("Americas")])]),e("tr",[e("th",[t._v("1")]),e("td",[t._v("Argentina")]),e("td",[t._v("2")]),e("td",[t._v("Tattoo")]),e("td",[t._v("Rauw Alejandro")]),e("td",[t._v("1344382")]),e("td",[t._v("202.887")]),e("td",[t._v("Americas")])]),e("tr",[e("th",[t._v("2")]),e("td",[t._v("Argentina")]),e("td",[t._v("3")]),e("td",[t._v("Hola - Remix")]),e("td",[t._v("Dalex")]),e("td",[t._v("1330011")]),e("td",[t._v("249.520")]),e("td",[t._v("Americas")])]),e("tr",[e("th",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")])]),e("tr",[e("th",[t._v("12397")]),e("td",[t._v("South Africa")]),e("td",[t._v("198")]),e("td",[t._v("Black And White")]),e("td",[t._v("Niall Horan")]),e("td",[t._v("11771")]),e("td",[t._v("193.090")]),e("td",[t._v("Africa")])]),e("tr",[e("th",[t._v("12398")]),e("td",[t._v("South Africa")]),e("td",[t._v("199")]),e("td",[t._v("When I See U")]),e("td",[t._v("Fantasia")]),e("td",[t._v("11752")]),e("td",[t._v("217.347")]),e("td",[t._v("Africa")])]),e("tr",[e("th",[t._v("12399")]),e("td",[t._v("South Africa")]),e("td",[t._v("200")]),e("td",[t._v("Psycho!")]),e("td",[t._v("MASN")]),e("td",[t._v("11743")]),e("td",[t._v("197.217")]),e("td",[t._v("Africa")])])])])]},proxy:!0}],null,!0)},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(music_top200\n  # >> mutate(new position = position / 200)\n)")])])]),e("h3",{attrs:{id:"exercise-3"}},[e("a",{attrs:{href:"#exercise-3","aria-hidden":"true"}},[e("span",{staticClass:"fa fa-link"})]),t._v("Exercise 3:")]),e("p",[t._v("The mutate below uses code from a future chapter to calculate how many letters are in each artist's name.")]),e("p",[t._v("Which artist with the shortest name has the most streams?")]),e("details",[e("summary",[t._v("hint")]),t._v("\n  \n  > You'll need to use a filter and arrange in the pipe.\n")]),e("code-cell",{attrs:{status:d.status,onExecute:d.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[e("table",{staticClass:"dataframe",attrs:{border:"1"}},[e("thead",[e("tr",{staticStyle:{"text-align":"right"}},[e("th"),e("th",[t._v("country")]),e("th",[t._v("position")]),e("th",[t._v("track_name")]),e("th",[t._v("artist")]),e("th",[t._v("streams")]),e("th",[t._v("duration")]),e("th",[t._v("continent")]),e("th",[t._v("artist_length")])])]),e("tbody",[e("tr",[e("th",[t._v("0")]),e("td",[t._v("Argentina")]),e("td",[t._v("1")]),e("td",[t._v("Tusa")]),e("td",[t._v("KAROL G")]),e("td",[t._v("1858666")]),e("td",[t._v("200.960")]),e("td",[t._v("Americas")]),e("td",[t._v("7")])]),e("tr",[e("th",[t._v("1")]),e("td",[t._v("Argentina")]),e("td",[t._v("2")]),e("td",[t._v("Tattoo")]),e("td",[t._v("Rauw Alejandro")]),e("td",[t._v("1344382")]),e("td",[t._v("202.887")]),e("td",[t._v("Americas")]),e("td",[t._v("14")])]),e("tr",[e("th",[t._v("2")]),e("td",[t._v("Argentina")]),e("td",[t._v("3")]),e("td",[t._v("Hola - Remix")]),e("td",[t._v("Dalex")]),e("td",[t._v("1330011")]),e("td",[t._v("249.520")]),e("td",[t._v("Americas")]),e("td",[t._v("5")])]),e("tr",[e("th",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")]),e("td",[t._v("...")])]),e("tr",[e("th",[t._v("12397")]),e("td",[t._v("South Africa")]),e("td",[t._v("198")]),e("td",[t._v("Black And White")]),e("td",[t._v("Niall Horan")]),e("td",[t._v("11771")]),e("td",[t._v("193.090")]),e("td",[t._v("Africa")]),e("td",[t._v("11")])]),e("tr",[e("th",[t._v("12398")]),e("td",[t._v("South Africa")]),e("td",[t._v("199")]),e("td",[t._v("When I See U")]),e("td",[t._v("Fantasia")]),e("td",[t._v("11752")]),e("td",[t._v("217.347")]),e("td",[t._v("Africa")]),e("td",[t._v("8")])]),e("tr",[e("th",[t._v("12399")]),e("td",[t._v("South Africa")]),e("td",[t._v("200")]),e("td",[t._v("Psycho!")]),e("td",[t._v("MASN")]),e("td",[t._v("11743")]),e("td",[t._v("197.217")]),e("td",[t._v("Africa")]),e("td",[t._v("4")])])])])]},proxy:!0}],null,!0)},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(music_top200\n  >> mutate(artist_length = _.artist.str.len())\n)")])])]),e("prompt-expandable",{attrs:{header:""}},[e("q-multiple-choice",[e("q-opt",{attrs:{text:"V, for their track in Indonesia"}},[e("span",[t._v("That's right!")])]),e("q-opt",{attrs:{text:"V, for their track in Hong Kong"}},[e("span",[t._v("That's the right artist, but did you sort by most streams first?")])]),e("q-opt",{attrs:{text:"F, for their track in Finland"}},[e("span",[t._v("Incorrect. Did you sort by most streams first?")])]),e("q-opt",{attrs:{text:"F, for their track in Hong Kong"}},[e("span",[t._v("Incorrect. Did you sort by most streams first?")])])],1)],1)]}}])})],1)}),[],!1,null,null,null);"function"==typeof m&&m(f),"function"==typeof g&&g(f);d.default=f.exports}}]);