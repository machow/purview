(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1017:function(e,t,o){"use strict";o.r(t);var n=o(9),s=o(836),a=o.n(s),i=o(989),r=o.n(i),l=o(990),c=o.n(l),d=o(991),p=o.n(d),u=o(992),g=o.n(u),m=o(993),b=o.n(m),h='<section class=""><section class=""> <h1 id=using-plotnine-geoms>Using plotnine Geoms</h1> <pre><code class=language-python>(billie\n &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;))\n  + geom_point()\n)</code></pre> <p><img src='+a()(r.a)+' alt=png></p> <pre><code>&lt;ggplot: (285893615)&gt;</code></pre><aside class=notes> <p>In the previous lesson, you created this scatter plot comparing the energy of each song to its valence.</p> <p>This plot communicates some interesting information: we can see that higher income countries tend to have higher life expectancy.</p> <p>One problem with this plot, however, is that it&#39;s impossible to tell which song is which. Adding labels to the point will let us identify songs in the plot.</p> </aside></section></section><section class=""><section class=""> <h1 id=using-geom_label>Using geom_label</h1> <pre><code class=language-python>(billie\n &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;, label = &quot;track_name&quot;))\n  + geom_label()\n)</code></pre> <p><img src='+a()(c.a)+' alt=png></p> <pre><code>&lt;ggplot: (-9223372036545068926)&gt;</code></pre><aside class=notes> <p>The first option for plotting text is using <code>geom_label()</code>. This plots the text with a filled in box around it.</p> <p>Unlike scanning a DataFrame of results, it&#39;s easy to see pick out songs across a range of valence and energy.</p> <p>For example, relative to other songs:</p> <ul> <li>&quot;i love you&quot; is low valence and low energy </li> <li>&quot;bad guy&quot; is high valence and high energy</li> <li>&quot;bellyache&quot; is extremely high energe and a moderate amount of valence</li> </ul> </aside></section></section><section class=""><section class=""> <h1 id=using-geom_text>Using geom_text</h1> <pre><code class=language-python>(billie\n &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;, label = &quot;track_name&quot;))\n  + geom_text()\n)</code></pre> <p><img src='+a()(p.a)+' alt=png></p> <pre><code>&lt;ggplot: (307217072)&gt;</code></pre><aside class=notes> <p>A second option for plotting text is with <code>geom_text()</code>. This plots text by itself, without a background box.</p> <p>Notice the words in front don&#39;t cover other words as much, but it can also be harder to read them.</p> </aside></section></section><section class=""><section class=""> <h1 id=combining-geoms>Combining geoms</h1> <pre><code class=language-python>(billie\n &gt;&gt; ggplot(aes(&quot;energy&quot;, &quot;valence&quot;, label = &quot;track_name&quot;))\n  + geom_text(nudge_y = .1)\n  + geom_point()\n)</code></pre> <p><img src='+a()(g.a)+' alt=png></p> <pre><code>&lt;ggplot: (-9223372036547558782)&gt;</code></pre><aside class=notes> <p>When you plot multiple geoms--like in this plot--ggplot goes line-by-line, from top to bottom.</p> <p>For example, in the code here, it first puts down the words from <code>geom_text()</code>, then the points from <code>geom_point()</code>.</p> <p>Notice also that <code>geom_text()</code> has an option passed to it, <code>nudge_y = ,1</code>.</p> </aside></section></section><section class=""><section class=""> <h1 id=more-on-geom-options>More on geom options</h1> <p><img src='+a()(b.a)+' alt=""></p> <aside class=notes> <p>In general, there are many arguments you can pass to geoms, and different geoms can take different arguments.</p> <p>The easiest way to understand what arguments geoms can take, and what they do, is to look at the plotnine documentation website.</p> <p>Here are two useful parts of the docs:</p> <ul> <li><a href=https://plotnine.readthedocs.io/en/stable/api.html>list of available geoms</a></li> <li><a href=https://plotnine.readthedocs.io/en/stable/generated/plotnine.geoms.geom_text.html#plotnine.geoms.geom_text>help document on geom_text</a></li> </ul> </aside></section></section><section class=""><section class=""> <h1 id=lets-practice>Let&#39;s practice!</h1> <aside class=notes> <p>In the exercises, you&#39;ll practice creating other scatter plots to compare variables across countries, and in the rest of this chapter you&#39;ll learn more ways to communicate information in a graph.</p> </aside></section></section>',f=o(858),v=o(835),A=o(7);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}A.a.config.optionMergeStrategies;var w={slides:h,CodeCellTemplater:f.a,VueRemarkRoot:v.a},x=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(w).forEach((function(e){"object"===y(w[e])&&"function"==typeof w[e].render?t[e]=w[e]:o[e]=function(){return w[e]}}))},_=A.a.config.optionMergeStrategies,C="__vueRemarkFrontMatter",k={excerpt:null,title:"Geoms",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"visualize",exercise_pars:[{size:{label:"Size",options:[11,5,7,14]},ha:{label:"Horizontal align",options:["center","left","right"]},nudge:{label:"Nudge",options:["nudge_y = 0","nudge_y = .05","nudge_y = -.05","nudge_x = .05"]}}]};var E=function(e){e.options[C]&&(e.options[C]=k),A.a.util.defineReactive(e.options,C,k),e.options.computed=_.computed({$frontmatter:function(){return e.options[C]}},e.options.computed)},B=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[n("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:t.debut,expression:"nb.debut"}]},[n("code-cell",{attrs:{status:t.status,onExecute:t.execute,onReady:t.updateSetupCode,language:"python"}},[n("pre",[n("code",{pre:!0},[e._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\n\n# wranglign ---------\nimport pandas as pd\nfrom siuba import *\n\n# plotting ----------\nfrom plotnine import *\n\ntheme_set(theme_classic(base_family = "Noto Sans CJK JP"))\n\n# data --------------\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/music200.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/music200.csv"\nmusic_top200 = pd.read_csv(fname)\n\n# tracks\n#fname = "/Users/machow/Dropbox/Repo/siublocks-org/intro-tidyverse/tutorial/data/track_features.csv"\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/track_features.csv"\ntrack_features = pd.read_csv(fname)\n\n# student support ----------\nfrom siuba import pipe\nfrom IPython.display import HTML, display\nfrom siututor import Blank\n___ = Blank()\n\n# DataFrame display --------\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# here, we avoid the default df._repr_html_ method, since it inlines css\n# (style tags make vue angry)\nhtml_formatter.for_type(\n    pd.DataFrame,\n    lambda df: df.to_html(max_rows = pd.get_option("display.max_rows"), show_dimensions = True)\n)\n')])])])],1),n("RevealSlides",{attrs:{slides:e.slides}}),n("h3",{attrs:{id:"exercise-1"}},[n("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[n("span",{staticClass:"fa fa-link"})]),e._v("Exercise 1:")]),n("p",[e._v("The options below let you change different arguments to "),n("code",{pre:!0},[e._v("geom_text()")]),e._v(". Try changing them and running the code, in order to get a readable plot. Then, answer the questions underneath the plot.")]),n("CodeCellTemplater",{attrs:{templateVars:e.$frontmatter.exercise_pars[0],status:t.status,onExecute:t.execute,language:"python"},scopedSlots:e._u([{key:"output",fn:function(){return[n("p",[n("g-image",{attrs:{src:o(987)}})],1)]},proxy:!0}],null,!0)},[n("pre",[n("code",{pre:!0},[e._v('(track_features\n  >> filter(_.artist == "Queen")\n  >> ggplot(aes("energy", "valence", label = "track_name"))\n   + geom_point()\n   + geom_text(size = ${this.size}, ha = "${this.ha}", ${this.nudge})\n)    \n')])])]),n("p",[e._v("Below are three songs at different corners of the graph. Can you tell whether they have high or low energy? Valence? Which do you think has low energy and low valence?")]),n("div",{staticStyle:{display:"flex",width:"100%","flex-grow":"1"}},[n("div",{staticStyle:{flex:"1 0"}},[n("p",[e._v("Hammer to Fall")]),n("iframe",{attrs:{width:"200",src:"https://www.youtube.com/embed/JU5LMG3WFBw",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),n("div",{staticStyle:{flex:"1 0"}},[n("p",[e._v("Crazy Little Thing Called Love")]),n("iframe",{attrs:{width:"200",src:"https://www.youtube.com/embed/zO6D_BAuYCI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),n("div",{staticStyle:{flex:"1 0"}},[n("p",[e._v("Love of My Life")]),n("iframe",{attrs:{width:"200",src:"https://www.youtube.com/embed/7hFeER3_ZRQ",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]),n("h3",{attrs:{id:"exercise-2"}},[n("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[n("span",{staticClass:"fa fa-link"})]),e._v("Exercise 2:")]),n("p",[e._v("This exercise is a case study on selecting extreme differences between two features, such as energy and acousticness.")]),n("p",[e._v("At the end of the case study, you'll be prompted to add code!")]),n("p",[e._v("Generally tracks with higher energy tend to be less acoustic, as shown in the plot below.")]),n("code-cell",{attrs:{status:t.status,onExecute:t.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:e._u([{key:"output",fn:function(){return[n("p",[n("g-image",{attrs:{src:o(988),alt:"png"}})],1),n("pre",[n("code",{pre:!0},[e._v("<ggplot: (-9223372036578267595)>\n")])])]},proxy:!0}],null,!0)},[n("pre",[n("code",{pre:!0},[e._v('(track_features\n  >> filter(_.popularity > 33)\n  >> ggplot(aes("energy", "acousticness"))\n   + geom_point()\n)\n')])])]),n("p",[e._v("But notice that in the plot above, there's a point in the top right, that is high energy and high acousticness.")]),n("p",[e._v("In order to find high energy and acousticness songs like this, I used the following code.")]),n("code-cell",{attrs:{status:t.status,onExecute:t.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:e._u([{key:"output",fn:function(){return[n("table",{staticClass:"dataframe",attrs:{border:"1"}},[n("thead",[n("tr",{staticStyle:{"text-align":"right"}},[n("th"),n("th",[e._v("artist")]),n("th",[e._v("album")]),n("th",[e._v("track_name")]),n("th",[e._v("energy")]),n("th",[e._v("valence")]),n("th",[e._v("danceability")]),n("th",[e._v("speechiness")]),n("th",[e._v("acousticness")]),n("th",[e._v("popularity")]),n("th",[e._v("duration")])])]),n("tbody",[n("tr",[n("th",[e._v("23990")]),n("td",[e._v("MC Kevin o Chris")]),n("td",[e._v("Vamos pra Gaiola")]),n("td",[e._v("Vamos pra Gaiola")]),n("td",[e._v("0.971")]),n("td",[e._v("0.521")]),n("td",[e._v("0.872")]),n("td",[e._v("0.2810")]),n("td",[e._v("0.917000")]),n("td",[e._v("61")]),n("td",[e._v("161.600")])]),n("tr",[n("th",[e._v("5211")]),n("td",[e._v("ScHoolboy Q")]),n("td",[e._v("CrasH Talk")]),n("td",[e._v("Black Folk")]),n("td",[e._v("0.902")]),n("td",[e._v("0.400")]),n("td",[e._v("0.734")]),n("td",[e._v("0.3960")]),n("td",[e._v("0.831000")]),n("td",[e._v("51")]),n("td",[e._v("147.040")])]),n("tr",[n("th",[e._v("24929")]),n("td",[e._v("MC Kevin o Chris")]),n("td",[e._v("Eu Vou pro Baile da Gaiola")]),n("td",[e._v("Eu Vou pro Baile da Gaiola")]),n("td",[e._v("0.957")]),n("td",[e._v("0.642")]),n("td",[e._v("0.832")]),n("td",[e._v("0.1050")]),n("td",[e._v("0.824000")]),n("td",[e._v("52")]),n("td",[e._v("123.220")])]),n("tr",[n("th",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")]),n("td",[e._v("...")])]),n("tr",[n("th",[e._v("18951")]),n("td",[e._v("Foo Fighters")]),n("td",[e._v("There Is Nothing Left To Lose")]),n("td",[e._v("Learn to Fly")]),n("td",[e._v("0.919")]),n("td",[e._v("0.537")]),n("td",[e._v("0.465")]),n("td",[e._v("0.0408")]),n("td",[e._v("0.000018")]),n("td",[e._v("74")]),n("td",[e._v("235.293")])]),n("tr",[n("th",[e._v("20425")]),n("td",[e._v("Foo Fighters")]),n("td",[e._v("One By One (Expanded Edition)")]),n("td",[e._v("Times Like These")]),n("td",[e._v("0.908")]),n("td",[e._v("0.265")]),n("td",[e._v("0.377")]),n("td",[e._v("0.0899")]),n("td",[e._v("0.000014")]),n("td",[e._v("68")]),n("td",[e._v("265.560")])]),n("tr",[n("th",[e._v("21871")]),n("td",[e._v("Turmion Kätilöt")]),n("td",[e._v("Global Warning")]),n("td",[e._v("Jumalauta")]),n("td",[e._v("0.939")]),n("td",[e._v("0.549")]),n("td",[e._v("0.454")]),n("td",[e._v("0.0618")]),n("td",[e._v("0.000010")]),n("td",[e._v("42")]),n("td",[e._v("210.107")])])])]),n("p",[e._v("812 rows × 10 columns")])]},proxy:!0}],null,!0)},[n("pre",[n("code",{pre:!0},[e._v("(track_features\n  >> filter(_.energy > .9, _.popularity > 33)\n  >> arrange(-_.acousticness)\n)\n")])])]),n("p",[e._v("Can you plot songs by MC Kevin o Chris, with both points and text?")]),n("code-cell",{attrs:{status:t.status,onExecute:t.execute,ex:"a",exIndx:0,language:"python"},scopedSlots:e._u([{key:"output",fn:function(){return[n("p",[e._v("⚠️: "),n("b",[e._v("Don't forget to replace all the blanks!")])])]},proxy:!0}],null,!0)},[n("pre",[n("code",{pre:!0},[e._v('(track_features\n  >> filter(_.artist == "MC Kevin o Chris")\n  >> ___\n)\n')])])]),n("p",[e._v("Why do you think Vamos pra Gaiola is high energy and high acousticness?")]),n("iframe",{attrs:{width:"200",src:"https://www.youtube.com/embed/0R6zBcV9JiY",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),n("details",[n("summary",[e._v("answer")]),e._v("\nMy best guess is because the drums are done by a persons voice, there are few instruments, but it is still a pretty fast tempo. It would be interesting to look at their other tracks for a comparison.\n")]),n("p",[e._v("Can you modify each code block in the case study to be about high energy and low danceability songs?")])]}}])})],1)}),[],!1,null,null,null);"function"==typeof x&&x(B),"function"==typeof E&&E(B);t.default=B.exports},835:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},836:function(e,t,o){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e)}},843:function(e,t,o){},849:function(e,t,o){var n=o(10),s=o(850).entries;n({target:"Object",stat:!0},{entries:function(e){return s(e)}})},850:function(e,t,o){var n=o(30),s=o(187),a=o(47),i=o(186).f,r=function(e){return function(t){for(var o,r=a(t),l=s(r),c=l.length,d=0,p=[];c>d;)o=l[d++],n&&!i.call(r,o)||p.push(e?[o,r[o]]:r[o]);return p}};e.exports={entries:r(!0),values:r(!1)}},851:function(e,t,o){"use strict";var n=o(843);o.n(n).a},858:function(e,t,o){"use strict";o(849);var n=o(182),s=o(473),a={props:["template","templateVars","locked","status","onExecute","onReady"],data:function(){return{formData:{},code:""}},beforeMount:function(){for(var e={},t=0,o=Object.entries(this.templateVars);t<o.length;t++){var s=Object(n.a)(o[t],2),a=s[0],i=s[1];e[a]=this.getFormEntryDefaults(i)}this.formData=e,this.setCodeFromTemplate()},computed:{templateRaw:function(){return void 0===this.template?Object(s.getPreCodeText)(this.$slots.default):this.template}},methods:{getFormEntryDefaults:function(e){return e.options[0]},setField:function(e,t){this.formData[e]=t,this.setCodeFromTemplate()},setCodeFromTemplate:function(){var e,t;this.code=(e=this.templateRaw,t=this.formData,new Function("return `".concat(e,"`;")).call(t))}}},i=(o(851),o(9)),r=Object(i.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("ul",{staticClass:"code-cell-template__args"},e._l(e.templateVars,(function(t,n){return o("li",[o("label",[e._v(e._s(t.label))]),o("span",[e._v(": ")]),o("select",{on:{input:function(t){return e.setField(n,t.target.value)}}},e._l(t.options,(function(t){return o("option",{domProps:{value:t}},[e._v(e._s(t))])})),0)])})),0),o("CodeCell",e._b({scopedSlots:e._u([{key:"output",fn:function(){return[e._t("output")]},proxy:!0}],null,!0),model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},"CodeCell",e.$props,!1))],1)}),[],!1,null,null,null);t.a=r.exports},987:function(e,t){e.exports={type:"image",mimeType:"image/png",src:"/assets/static/02b-queen-plot.0e237b4.211bee15fe416589bd4a0fe509f45e04.png",size:{width:563,height:430},sizes:"(max-width: 563px) 100vw, 563px",srcset:["/assets/static/02b-queen-plot.0e237b4.211bee15fe416589bd4a0fe509f45e04.png 563w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 563 430' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-dde7c7d7d9b97c45e0230b753a65cbfb'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-dde7c7d7d9b97c45e0230b753a65cbfb)' width='563' height='430' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAxCAYAAABqF6%2b6AAAACXBIWXMAAA9hAAAPYQGoP6dpAAAMyUlEQVRo3sXa968XRRcGcP9Sf7QkRiyJMbFrFBVjL7EANhAL2BuCvYCKgooCiihgL1hBUZk3n0mem3P37vd77wWSd5PJ7M5OPXPOc545uye0wXXkyJGZfJj%2b%2b%2b%2b/Oenff//ted7X52FZ%2bh22qSnt1Em94VjDMY4lnTBJAAcPHmw//vhj%2b%2bmnn2bS77//3tMff/zRfvvtt/brr7/2enJ1f/nll/5OHfV//vnnmfrqfP311%2b2HH35ohw4d6u0PHDgw06f3nrWr/SSpnzLt3aubOcpzb9w672EyjkSQEwXw559/tu%2b%2b%2b659//33vdGePXva3Xff3V588cX22muvtXvvvbdt3LixPfroo%2b39999vr776alu7dm179tln25YtW9rTTz/d1q1b1x555JH2zDPPtPfee6%2b9/vrr7aGHHurt3n333Xbrrbe2xx9/vJfLv/jii/bZZ5%2b122%2b/vY%2bjj/Xr17dXXnml96GvWr558%2ba2YcOG9uSTT/b8hRde6H2Yr3mPJWuKsBYlgN27d/cFvfTSS%2b3555/vE3rjjTfafffd13bu3NkXreypp57qE1Pvueeea0888cRMmcW9%2beabfQHvvPNOW7lyZe9TO5Pfv39/%2b%2bqrr7owCFKZXH19PfbYY10A6kv6ePnll7uA5IRgo2iTedO2LNyC8xwtWZAA0kgH1I96UseocFQxqmtweVJUX3v1Dcxs5N5lR/T96aefdkFnHLk22sfMqllkzDovAty3b19//vbbb/s4UuZgPfq0psOHDy9cAFGfTFh5nofv8049i7KjdnPVqlVtzZo13YSYDZW%2b6aabujmps3Xr1l6HZtjxBx98sO8487rrrrva8uXLuxYwnQsuuKDvuHbayC2e5t1555090Rzj0dIHHnig50xQv/oi1KkgaCGxl5oCMsNy9dMm9wRhsTt27OgLYTbwgDm8/fbbbdu2bd18Pvjgg75jzEk5wTGPjz/%2buCcqTkDqb9q0qZuUetoyhQ8//LBvAgxQh6kZQ10C13/qea/9X3/9NV0DYkc1xYYssr53H7WOibivnsCAyqie/lPXfdSd6qqnvnLt4y28i9nluZqdeZhbxq/z0S6eJibElS7KBMYEENU3CEnfc889fWeoGhW18wE5O6CMWtKCb775pmvE6tWrO7BC9u3bt3d11d47am0M2lFNrJpcNcPMM2W1ztCEZ0BwSH6GAphPA9QjWepl4pCfXXKR1I1glMup5rXXXtvNQbu4uKA4NY8HYe8AreJNFjBpcZPc3xDDZrnB%2bQQw7KQKo5ZX9UuKh4j6UUtjREVhDZUOmitnAn///Xf7559/ZnmVmJQ8ZqD%2b0DMhSjEXKQvWLsn7WW4wC8%2blk0g0tpVJhLmFVSk3sWp3sUnvCTMTMhHqDpyovN0OWNEGYIUkRTOYAW1gNogYrcINaNSNN97Y64R46eujjz7q3oW56QuAcoH4AQIWEkbTZqhwFm%2bCn3zySZ%2bQhViAnK1CcgNAZgj61ltv9YHZtknq0KR0Ts0NxP5j81ReO0K7//7729KlS9vNN9/czj///P6eyVx55ZXt3HPP7eVnnXVWf4cVcpUXX3xxd4UPP/xwr3vddde1Sy%2b9tJ1yyimdgRLSHXfc0QVyySWXdCwyjjnZRMJwT4A2wPzmmADVs%2bDsaAQAiNg3yet4xYoVffcslCBMgMRNlkDsFF8ODL2//PLLuw9m07SKgPPeom677bY%2bIc8A0TgmChfsrI0ZIns8i/6ifTEHZhXNjNmFiNV01CaQw00opfLYf7XlmEgOP9pEqLFX6mmMat9JaT8EuUrE5vMICzoLHA8QHDLBWl5d2HAB9b72XxcyzQuNva9EbJIXk2YJoAphMW5wTPqT3k2j0mMLWAwRO5r2XQBV9efTgGEHocXVFYUmx/7C%2bGK3Y2xxqDFVgEOCMyaAYb0qgGntZzQgk1qMBrjH2hxWoDIQA4DIDjBDhuQOLokhOBbH3eW4C%2biAbO1/zMTGxp9k55MEmDTHBAQkoLgroauFHIb4WO4N6kNrSG9BXCnPYMFcmlziPdTjHnkQSM817d27t2tHyArNyNkiiF2FEGKUnUy9oH2NCA3nHOCeFQ/gI52%2bqgAmgWAkrCP8gK/lfwnCjnJvkmecIX6Xf3bWV/%2baa67pGmESNMHRFP9XN5yAOyREz466jszxIAIniA0P4tkJ8PPPP%2b/lFXjNLziEUqsvzTEBKopBTRLANBCiORajPZPg95EhWuAZeaL2ykwaYQqTcy6/5ZZb%2btkeeUFyaMlFF13Uic7111/f37tXdvXVV/dxmdA555zTzjjjjE6GtD3ppJM6cSLME088sS1btqyTJ9zEnGwSvuEQRttmHYZCOV0KFyOAgF9UMCoctQxASlFFx2E7QvMICstkTl9%2b%2bWXfOTuqPEIlPHECuTloC1%2bYE62zKIKmdQ5f8ChhMm1oh76YnTFCyWcEoEE0YLFucCwqNBZFqn4%2bfcS%2b6zkh54eaKknSNmf6yv7qYQh%2b5f2QfFUsmyUA0nE5hRGCTiaxqnRwLCg8POIOic8YfxjyDNoSgQXYEhEO9dXGZlYgjcBmAiLcUE5wOD9ArHH2sbj6tNj7QuLyx9I%2bu2mecCKuGJAyq4TrmYR3l112Wfd0BAaP3DMRmzyLCFEJGsBG44rGaGVMYBLdzA5Pe7%2bQ9mNMLu9zSLNYJ054AFyBLHMOJ3EPGAGhtvAG3tF4a51DhXORDokNGVR1g%2bEJlVwMmdiYetOAyvdrPzXiU%2bulrjml/xomp%2bYOacGMGpNMLDJYMCcmOOkwlChOJA%2bd5cpNxA7wq%2bpAV%2b9DRpLqMTbcQbt4iNimfiqdlniGxBtTty7MHOLbM5eKE5LnHMbqCXKWGxwLiiIVCSggJYIZCA1yIrEh5VSQenFD1JAdYn18PGZ41VVXdd9OPU2QCvLd5513Xo/oiC%2bcdtpp3W9jjTfccEO3a7EDqsu3iyEuWbKkB0zYOveWIIfoT74ksW/v8AXxCupPUGNUehYVHhMASeMHOkV2%2bGH%2b1gAWzE/zuXbJRAyWGH/sjK%2bW%2b3bH5vLVhtAsTjnB5cMIIpSgqjrGU4YNXnHFFV2o2ujX7hoXoJmP3Nj5hgAA3UcAQy8077dBGBB1S4Qo9pUYftC8uqH49fj2fNUNEZKYF7uMrxYwSYQnppe%2bPKtjPvHv9etz/QyXeSRgM9z9CqLzasDw42gFtQpaY2eE6sYqmlfwGpKlMZ4x6cRX%2bx5Lw69Uw69Xcw5DYwKwK/XwUXc75/phnI2NA0NqLg%2b1HS7keBxnj5WITTSBHIYcWdk9%2bwdYwI1tskMkQwJyTnzsVDlbBD45CueQRVh1l6ft4PGMCC0qJJY8ArB7jq/YFkACVoCvAg6iIUc%2beAUHFwAFfDBKST/5hJ5Ic6Wyw3NE8GbaDk4zj4VElEZ/kBgSISClsslDW0GPhKwhtp2HtHYecgt1c2O0gabIuS%2boTXu4VF6CeUB34fCgOk/B7Tn6cmsEHdCsk65cPloVMx1jj2PRpMpER78LJK5u4XZIZVpgh6k3F4d6mnS%2bFSgnAEdPi6MxXJdF0RzPPlzowwQcT2lOPm8zN2PojwtDqIyd74L5wQHO5LgcXMqzqFJAuHqJsNMIARHLeWSOADQwGZ1VVOdSfKcDjISjPh5tUgTlWZ5DSv7kkpwrCDaRJ0LBCSxWHl5BoATDvGiXqNLpp5/egyECHgIgSBIihOi4xx9oFoJ04YUX9uDHqaee2k4%2b%2beT%2b5UmZQIj%2b4JH5Jh5J83i6iSYQu3WoSCd2PwTGbttZ6g/07CbNAI7KmYCBEg%2bk7ibKjBIfPPvsszsDFBHy9cjC/NnhWTTnzDPP7M/uLYpJWaQyzJRJmZ/%2bsFTClTNRAE1YNJJ2SdZDW3bt2tXxzaZOPAtkRwFc/soCcnK7Zjd1QhBsPgCIOZqUNnY2/wmow76pPBWlaQSpvmSHmIsdkqsn54XUlVsMrTGnGggRavMO4PI6nrNIpsmb6Z9mm5v%2bzHvmH6FpX4aG3%2bXk%2bTsjPCC8oPKEyhbDHvUZAKqHocoea4gtbC6htCR14kXUI5SAqpxgYVDuCYTmWjTToEWAeUE/SQ2PtJUJTovaDMtMNm4viF0/mc3Xfvhlqf4LWAFuEo%2boY6fOVCaY4MgwkVp2zf2kOmPl%2bemhAuvRtI8Aaj33k1LtU3taZINdcwQwBoj1ok5sCorrcLGX9uwSoFrE2H/J0y52zT0iW3DqaC6n0okCmPazdEwjJ7yE0Bf6Y3La56Q57ZrWnjvmWu3qYsav5xyaMFEDpk1qMdoyX12eBHrbVS4NcnNT9c/y4zn%2bsP7o3%2bLTdmOSui5kEsO6zIe/5ladKbgpLpPrG4tTHo/xx7zdCe3/cE2acAKVR7OzR3v9D%2bAzqV7jJdQSAAAAAElFTkSuQmCC' /%3e%3c/svg%3e"}},988:function(e,t){e.exports={type:"image",mimeType:"image/png",src:"/assets/static/02b-geoms_7_0.a0857a9.bf2b3f2609f6768e41aaaf1ddff3d270.png",size:{width:569,height:432},sizes:"(max-width: 569px) 100vw, 569px",srcset:["/assets/static/02b-geoms_7_0.a0857a9.bf2b3f2609f6768e41aaaf1ddff3d270.png 569w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 569 432' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-10db1d5909d8a95145bccaca6a5927f4'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-10db1d5909d8a95145bccaca6a5927f4)' width='569' height='432' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAxCAYAAABqF6%2b6AAAACXBIWXMAAA9hAAAPYQGoP6dpAAANP0lEQVRo3sWaBdBWVRCGP5GQEpEuaUlpEBQE6Rhq6By6QUAJaYZQujuUoYeGoVsalA6lpUO6RTnOszP7zfnvf%2b/HBfnhzJy5Hec9u%2b%2b%2bu/cGjNVevHgRXNL/%2beefMNu0f//9N9id53vtd267PfNdtYBzh/1CZ86cCTc4ZwMkGyxtz58/DwLGugJj38PeDgXSWwNAH/z06VNz9epVc%2bTIkXAXXL9%2b3dy4cUPAefToUZhjt27dMocOHTJPnjyR7b///tsVXAXEBlGBdLMKpxW9FQAY5OHDh2WbQa1YsULW169fbxYuXGi%2b/PJLkzVrVtOrVy9TtWpV06NHDzN37lxToEABU7lyZdO3b185/%2bjRo6Zz585BMG1Q7969K/fW5uY%2buu4EyC8g9nnO%2b7/UBX7//XdZ3r9/3zRv3tysXbvWZMuWzRQsWNDkz5/fJE%2be3Hz88ccmQYIEJlKkSCZ79uwmY8aMJn78%2bKZIkSJmzZo15ueffzZp0qQxDRs2NIsWLTJdunQxP/30U9B6lixZYk6fPm02bdoUxiLc1p3vFwoU%2b7xQvBPwMjVurgA8e/ZMQDh//rxZtWqVDCYQCAR70qRJTZIkSWQ9evToAkjixImDx9OlS2dq1qxpypcvb3LlymWmTJliRo8ebfbt2ydW1r17d9O1a1d5nrrNuXPnxN1of/31l4CPi9EuXbok3W1AznWbvPfu3Ru8/0stgAt4IfXVkydPmt9%2b%2b83s3LnTfPLJJ6Zu3bqmbNmyYYDACljGiBHDfPTRR7LNepQoUQSkb775Rq6tX7%2b%2badOmjUmVKpWpV6%2be6d27txk0aJAAtHLlSnkHwP7ll1/MvXv35Pm45NKlS83t27fN8ePHzZ9//mn2798fPG4PFo6x978WAJyI/yoAy5cvFxPGZBs3biw%2bPmnSJDF1XKJw4cImTpw4Jn369CZLlizmiy%2b%2bEDAiR45sokWLJlYBZ%2bAO7E%2bdOrVYTcyYMWXgTZo0EV7h%2blq1apkffvhBnjF%2b/HhxJazlxIkTZt26dfI%2bbHfr1i3oIiz1Xe/cuWOWLVv26i5gH%2bSGPFC3b968KcuzZ8%2baU6dOmYMHDwoP5MuXT8wbcPLmzSskmCxZMgEDC1CroH/44YcChm5nyJBBXIZ1rgUIeOWDDz6Qc2vUqGEGDx5s2rdvb8qVK2d27NghXESUmTlzpvn111/NxYsXg%2b%2bm7eHDh0GStS3BLdIE3GKwnowLeBEKLzF9%2bnR5obFjx4pLfP311zKrkCCm//7770tnQO%2b99564AoNlH8CwjBo1qhAn55QsWdKkTJlSBl6qVCnTrFkziS6ZMmUSqxoyZIhY4NatW6UfOHBALGTjxo3mypUrMmHbtm2Tc3hPrAQ3oWFFhG51h3AW4GYmtgXYYoeZwEQhLl6yUqVKZvXq1aZKlSoywESJEkl0YNAAwroOmhkHHLUIXASLUYvImTOnAEK0SZEihbgK27gOy1GjRpkHDx6YMWPGCFhbtmwR3waI%2bfPnS4i2hZi2x48fh/P/cBbARZwI47P8448/XEMLL6CiaPHixaZ06dLyEpAijF%2b0aFGZMWYXH2dwefLkEf9W8%2beYTaAAxLlqMSzZnzBhQtmfNm1a8/nnnwtpDhs2zNSpU8cUK1ZMJoKZ5X0BgShFmPXyeedEhwGAgTNoGB9fV5HiJiBoDH7q1KkCxLx588ysWbPk4bA97gAPxI0bV/yeWVezV1DoWAmddc7DInR/rFixxJ2wAtyAbUQXEQVSJaJ06tRJoggNMPr06SMRhHFs377dlQxdSdAmP1sHOLW70xr69esn8RmFx/mYIL4MaTFDX331lbC6RgSdYXv2teMeHGfwaiENGjQIRhRci8gA0aJFevbsKS4GcU6ePFlC6e7du4X8WEe1zpgxI6g%2b3fKMgFvWprMOB6jw4KZuKJIzEJOxAswPJic8Nm3aVGa/Xbt2In7wdx0oM21HB2ZWB%2b4EhZnHrdQqsIiKFSuKzsAlGDyRqFChQnLeggULJDrQeC90xbhx40TMubpAKOWkAEB6KDM3d8BSYF3lENgW5PFTzL5EiRJCbp999pl0rMA2e7UMmwt0CYBYS7x48cRtuB%2bWQVd3Qn9gDRAm5yCwyEk6dOhgateuHdQNTkkdxgJAR7W5TYgorlAy027cA5WGxJ0zZ45YAqT0448/iuJjdnLkyCGk5mX%2bOsu2ssQ6AABStTWEngsIWBecQ2LWsmVL0Q5M2sSJEyXHQEp7cZkAAGEQP51K8NixY2EudNYFuAZRRCPpgRSJ1YgURBICCR7AhzUCMBjM2EmCqhHswTNg5zG21X24FwCpkGLWP/30UyFhiBBtMG3aNCHnkEqQgaK73XIBN%2bZUAFBgRA4aJo9ehwdAn5QYVsZElfT0xWPHjh2GA0J1QHCCo/fSe2A96lq4wnfffSfRglDJZCCaNGw7cwQBAEWFmrJn21aCOmBmW2%2bmogIrUEuhwRugDvGQJ2TOnFk0PiDgu/i1%2brjTpF%2bnAw7cAAC4GqQJSSKU4AASL9yQvIb3xK3tSQxopodsdDYVQooWGltTUt2HAMH/dRu/Q51dvnxZyAlC6t%2b/v4gkXAL1ZpMdoNgk6DbTbtHBvkeZMmVEaLENVyCWUIUAjy5gIgmTWqmyrVoAQC8jGqgEETpAi9CnM%2buVD7hVYxBQ1apVk4djLXv27JGXJGOsXr26zDrRQH2XJYLJCwBnxLD36zqFGDgGa0BWEw24J7wA/7Rt21b4iaoWmaI9JgFg165dwgGYxbVr1yTDwl9sARGq6oK7IIAUYawEKyAKAAQzgpRFvTFT%2bKnXwNyigxsH2C6g68o17INnUJCk4LyHWqtzEgUAGFN9280FvGbbPqZCCQsCDMQQqg0eGDlypPinZnv6orB4KPP32xVIkq7ixYsLD7DN84YPHy4JG5xAVWnEiBHBXCZoAdTkYG4vEgwFgE2SIAyfkLERFRo1amS%2b/fZb06pVKxkoUlZDIP6qg/cbEULxBIPHvXgGwktBQXugEgcMGBCMXHZWGCRBNLTfMGg3HTwuA/PjTjQUGPekVkApi2NaKCG1pWaoL6lk9n9BsLcBt3Xr1vI83IHnu1mvAEBhUsveOiCUoBcJOm9CLQC1hWmxj9RYtQESmuMQ4IYNG0S/E54gSn1xXvD/AuBGmhRVcEPSdUhSCdD%2bGBOwq75OKewXAEKeVl1AGuanIY2RomSEQ4cOlcSEGSH0wQNvwv%2b9QCASsKRSRXGF/ap17GJJyGTIjwu4VZKIJFyLBUBILVq0EGVGFCCLw09tSfumO8DCCYRYUmdIGUmORnHmBAGvGdZs0G8UoCuyRA8KJeTkZINIUsIh4gR5rCWxiOqEQQaPpRF9IMHvv/9eijVEqXBK0J51BgFLsnxZGHSzAqIJ8pgyFT5Paoz5U9jAEuAA1fha9PCjB161c39kN5oDpYgeIEHTcK8V4jAAkCgQEdDLDEBLYqG%2b2Op%2bxJNGEhpEiCokAsD4hCHCE75PeKSSw/abiABeUUFLb1SkeBdyHtd6gD3L1AVgc2Txq3AADMtDdB1ASEfRAEQY3ICqMbk77qC1woggQLeMcfPmzWG%2bd4aRwl5k5gcAt2OkoB07dgwWTkmECEnEZX05skSKmxHJBTYfoEAhQd7H0wW8Poz4AcA%2bj4cQVvF/MkDUIPV%2bZDHZmup3mDoiB6/WoEs%2b4lAlVrIOYwFeH0f9ugA31U/cuBEmR32OkjXmDxNTwCQZ0poA0eBNiiC3cpkmSblz55bn2oIvJAD6cdQvCWIxKpz4boj/ExEAAyU4YcIEqeMjh%2b2sLaLEkBMMBBh99uzZ/gDwawFux/iErr6GygQAcgVCUIUKFYJZoBJURIRBtzyBgizfMVxJ0OsHCTcAnIrR%2bVGFCKA/WOlvNbgAKSkfTDBN/R74NrpWldAdvIsvC3iVeoDzjy8yQvIA/QWGz1d8L1SZiunbtf230bXKrHJYJ8v1JynMlpIYHGD/XORWGkdcaDGEBhEiiBBAfKUBcT5xAwJVIedH0XfR9SMPIHgCgKixq71eDQD0hwQaGRf%2bzkMokKjwABgsAz4AGJb8K4RmoHpEFsns4CYQJkUVagkstVNZoqLDxxc61R626bpO/sG3CeT3wIEDpSDLhxI61WGOX7hwwd%2bPkshZ/Jl0161jJZg62R/r7ENOU3WhLggQLNmvf2vQAYxOhLA7gNFZt4/r%2bXZ3Xus8jpr1uo7vF4yLd3MlQQVBT6Q4ymD4EMpgtXOMgdv72CbjwjKoNXINHRAIjexjBhRAXcI3%2bsuL/gWmx7Em%2b1yWnEfeQu2B5%2bkx%2bxqdPN3Pe3ANnfEweQE/PxKoxvfT9N8iTB8A/TRUI3VJ/kJz/u/j1ZhJIg0D1UqPn4Zl2JwVeJms1RTZto6XdU2nVW%2b7dbf/jp31iFDPsP9BDvUcZ7d/y3UNg35/LfEjiF62D59EHEGOzD7pN27g/FL9us/xM56An39s/fyb63Z%2bqJ%2bftf5AzsBHGQZOTZFP6/oBw08Vyu9/w14fdwLv6j99t5fly1KowUdE%2bw%2blPdmAAIbyzQAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"}},989:function(e,t,o){e.exports=o.p+"assets/img/02b-slides_3_0.8fcb5e0c.png"},990:function(e,t,o){e.exports=o.p+"assets/img/02b-slides_6_0.37fc34f9.png"},991:function(e,t,o){e.exports=o.p+"assets/img/02b-slides_9_0.036a1dc2.png"},992:function(e,t,o){e.exports=o.p+"assets/img/02b-slides_12_0.f72fd29f.png"},993:function(e,t,o){e.exports=o.p+"assets/img/plotnine-geom-doc.e1f66e8c.png"}}]);