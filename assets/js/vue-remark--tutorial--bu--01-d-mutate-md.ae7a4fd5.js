(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1005:function(t,e,o){"use strict";o.r(e);var d=o(9),_=o(833),a=o(7);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.a.config.optionMergeStrategies;var s={VueRemarkRoot:_.a},n=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===v(s[t])&&"function"==typeof s[t].render?e[t]=s[t]:o[t]=function(){return s[t]}}))},r=a.a.config.optionMergeStrategies,i="__vueRemarkFrontMatter",p={excerpt:null,title:"Mutate",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"basics"};var u=function(t){t.options[i]&&(t.options[i]=p),a.a.util.defineReactive(t.options,i,p),t.options.computed=r.computed({$frontmatter:function(){return t.options[i]}},t.options.computed)},c=Object(d.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"}]},[o("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\nimport pandas as pd\nfrom siuba import arrange, select, mutate, filter, _\nfrom plotnine import ggplot, geom_point, coord_flip, aes, labs\n\n# temporary until I figure out where to put data\nurl = "https://siublocks.s3.us-east-2.amazonaws.com/music_top200.csv"\nmusic_top200 = pd.read_csv(url)\n\n\n# TODO: shift into a package or file\nfrom siuba import pipe\nfrom IPython.display import HTML, display\n___ = pipe(lambda x: display(HTML("⚠️: <b>Don\'t forget to replace all the blanks!<b>")) and _)\n\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# when you see a Shout object, call the shout_html function on it\nhtml_formatter.for_type(pd.DataFrame, lambda df: df.to_html(max_rows = pd.get_option("display.max_rows")))')])])])],1),o("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[o("table",{staticClass:"dataframe",attrs:{border:"1"}},[o("thead",[o("tr",{staticStyle:{"text-align":"right"}},[o("th"),o("th",[t._v("country")]),o("th",[t._v("country_code")]),o("th",[t._v("position")]),o("th",[t._v("track_name")]),o("th",[t._v("artist")]),o("th",[t._v("streams")]),o("th",[t._v("track_id")]),o("th",[t._v("danceability")]),o("th",[t._v("energy")]),o("th",[t._v("key")]),o("th",[t._v("loudness")]),o("th",[t._v("mode")]),o("th",[t._v("speechiness")]),o("th",[t._v("acousticness")]),o("th",[t._v("instrumentalness")]),o("th",[t._v("liveness")]),o("th",[t._v("valence")]),o("th",[t._v("tempo")]),o("th",[t._v("track_href")]),o("th",[t._v("analysis_url")]),o("th",[t._v("duration_ms")]),o("th",[t._v("time_signature")]),o("th",[t._v("streamed_ms")])])]),o("tbody",[o("tr",[o("th",[t._v("0")]),o("td",[t._v("United States")]),o("td",[t._v("us")]),o("td",[t._v("1")]),o("td",[t._v("The Box")]),o("td",[t._v("Roddy Ricch")]),o("td",[t._v("12987027")]),o("td",[t._v("0nbXyq5TXYPCO7pr3N8S4I")]),o("td",[t._v("0.896")]),o("td",[t._v("0.586")]),o("td",[t._v("10.0")]),o("td",[t._v("-6.687")]),o("td",[t._v("0.0")]),o("td",[t._v("0.0559")]),o("td",[t._v("0.1040")]),o("td",[t._v("0.00000")]),o("td",[t._v("0.790")]),o("td",[t._v("0.642")]),o("td",[t._v("116.971")]),o("td",[t._v("https://api.spotify.com/v1/tracks/0nbXyq5TXYPCO7pr3N8S4I")]),o("td",[t._v("https://api.spotify.com/v1/audio-analysis/0nbXyq5TXYPCO7pr3N8S4I")]),o("td",[t._v("196653.0")]),o("td",[t._v("4.0")]),o("td",[t._v("2.553938e+12")])]),o("tr",[o("th",[t._v("1")]),o("td",[t._v("United States")]),o("td",[t._v("us")]),o("td",[t._v("2")]),o("td",[t._v("Myron")]),o("td",[t._v("Lil Uzi Vert")]),o("td",[t._v("9163134")]),o("td",[t._v("56uXDJRCuoS7abX3SkzHKQ")]),o("td",[t._v("0.770")]),o("td",[t._v("0.655")]),o("td",[t._v("8.0")]),o("td",[t._v("-6.976")]),o("td",[t._v("0.0")]),o("td",[t._v("0.2960")]),o("td",[t._v("0.0537")]),o("td",[t._v("0.00000")]),o("td",[t._v("0.215")]),o("td",[t._v("0.584")]),o("td",[t._v("155.039")]),o("td",[t._v("https://api.spotify.com/v1/tracks/56uXDJRCuoS7abX3SkzHKQ")]),o("td",[t._v("https://api.spotify.com/v1/audio-analysis/56uXDJRCuoS7abX3SkzHKQ")]),o("td",[t._v("224955.0")]),o("td",[t._v("4.0")]),o("td",[t._v("2.061293e+12")])]),o("tr",[o("th",[t._v("2")]),o("td",[t._v("United States")]),o("td",[t._v("us")]),o("td",[t._v("3")]),o("td",[t._v("Blueberry Faygo")]),o("td",[t._v("Lil Mosey")]),o("td",[t._v("8043475")]),o("td",[t._v("22LAwLoDA5b4AaGSkg6bKW")]),o("td",[t._v("0.774")]),o("td",[t._v("0.554")]),o("td",[t._v("0.0")]),o("td",[t._v("-7.909")]),o("td",[t._v("1.0")]),o("td",[t._v("0.0383")]),o("td",[t._v("0.2070")]),o("td",[t._v("0.00000")]),o("td",[t._v("0.132")]),o("td",[t._v("0.349")]),o("td",[t._v("99.034")]),o("td",[t._v("https://api.spotify.com/v1/tracks/22LAwLoDA5b4AaGSkg6bKW")]),o("td",[t._v("https://api.spotify.com/v1/audio-analysis/22LAwLoDA5b4AaGSkg6bKW")]),o("td",[t._v("162547.0")]),o("td",[t._v("4.0")]),o("td",[t._v("1.307443e+12")])]),o("tr",[o("th",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")]),o("td",[t._v("...")])]),o("tr",[o("th",[t._v("12414")]),o("td",[t._v("South Africa")]),o("td",[t._v("za")]),o("td",[t._v("198")]),o("td",[t._v("Black And White")]),o("td",[t._v("Niall Horan")]),o("td",[t._v("11771")]),o("td",[t._v("7rpNuuoMbid56XkDsx2FjE")]),o("td",[t._v("0.443")]),o("td",[t._v("0.582")]),o("td",[t._v("2.0")]),o("td",[t._v("-6.020")]),o("td",[t._v("1.0")]),o("td",[t._v("0.0482")]),o("td",[t._v("0.0301")]),o("td",[t._v("0.00000")]),o("td",[t._v("0.127")]),o("td",[t._v("0.239")]),o("td",[t._v("147.589")]),o("td",[t._v("https://api.spotify.com/v1/tracks/7rpNuuoMbid56XkDsx2FjE")]),o("td",[t._v("https://api.spotify.com/v1/audio-analysis/7rpNuuoMbid56XkDsx2FjE")]),o("td",[t._v("193090.0")]),o("td",[t._v("4.0")]),o("td",[t._v("2.272862e+09")])]),o("tr",[o("th",[t._v("12415")]),o("td",[t._v("South Africa")]),o("td",[t._v("za")]),o("td",[t._v("199")]),o("td",[t._v("When I See U")]),o("td",[t._v("Fantasia")]),o("td",[t._v("11752")]),o("td",[t._v("4iuNZTcvT9diFySSzVsnVS")]),o("td",[t._v("0.569")]),o("td",[t._v("0.596")]),o("td",[t._v("8.0")]),o("td",[t._v("-6.486")]),o("td",[t._v("1.0")]),o("td",[t._v("0.1710")]),o("td",[t._v("0.4570")]),o("td",[t._v("0.00009")]),o("td",[t._v("0.205")]),o("td",[t._v("0.757")]),o("td",[t._v("93.134")]),o("td",[t._v("https://api.spotify.com/v1/tracks/4iuNZTcvT9diFySSzVsnVS")]),o("td",[t._v("https://api.spotify.com/v1/audio-analysis/4iuNZTcvT9diFySSzVsnVS")]),o("td",[t._v("217347.0")]),o("td",[t._v("4.0")]),o("td",[t._v("2.554262e+09")])]),o("tr",[o("th",[t._v("12416")]),o("td",[t._v("South Africa")]),o("td",[t._v("za")]),o("td",[t._v("200")]),o("td",[t._v("Psycho!")]),o("td",[t._v("MASE")]),o("td",[t._v("11743")]),o("td",[t._v("5LKkteRQ1wWv7XCIEA5F2q")]),o("td",[t._v("0.868")]),o("td",[t._v("0.365")]),o("td",[t._v("7.0")]),o("td",[t._v("-9.510")]),o("td",[t._v("1.0")]),o("td",[t._v("0.0383")]),o("td",[t._v("0.4330")]),o("td",[t._v("0.00000")]),o("td",[t._v("0.207")]),o("td",[t._v("0.471")]),o("td",[t._v("114.979")]),o("td",[t._v("https://api.spotify.com/v1/tracks/5LKkteRQ1wWv7XCIEA5F2q")]),o("td",[t._v("https://api.spotify.com/v1/audio-analysis/5LKkteRQ1wWv7XCIEA5F2q")]),o("td",[t._v("197217.0")]),o("td",[t._v("4.0")]),o("td",[t._v("2.315919e+09")])])])])]},proxy:!0}],null,!0)},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(music_top200\n  >> mutate(streamed_ms = _.streams * _.duration_ms)\n)")])])]),o("h3",{attrs:{id:"exercise-1-todo"}},[o("a",{attrs:{href:"#exercise-1-todo","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Exercise 1 TODO:")]),o("p",[t._v("Use the code above, and modify it find the longest streamed ("),o("code",{pre:!0},[t._v("streamed_ms")]),t._v(") song in Canada. Is it the song in the first "),o("code",{pre:!0},[t._v("position")]),t._v("?")]),o("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v("()")])])]},proxy:!0}],null,!0)},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(\n\n)")])])])]}}])})],1)}),[],!1,null,null,null);"function"==typeof n&&n(c),"function"==typeof u&&u(c);e.default=c.exports},833:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);