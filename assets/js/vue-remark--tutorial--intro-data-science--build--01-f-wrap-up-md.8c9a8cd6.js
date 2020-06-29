(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1012:function(t,e,o){"use strict";o.r(e);var a=o(9),n=o(835),s=o(7);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var i={VueRemarkRoot:n.a},p=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(i).forEach((function(t){"object"===r(i[t])&&"function"==typeof i[t].render?e[t]=i[t]:o[t]=function(){return i[t]}}))},c=s.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",l={excerpt:null,title:"Wrap up",output:"html_document",editor_options:{chunk_output_type:"console"},chunk:"basics"};var m=function(t){t.options[u]&&(t.options[u]=l),s.a.util.defineReactive(t.options,u,l),t.options.computed=c.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},d=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("Notebook",{attrs:{branch:"master",repo:"machow/purview",url:"https://mybinder.org",useBinder:"1",useStorage:"1"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("details",{directives:[{name:"fix-codemirror",rawName:"v-fix-codemirror"},{name:"show",rawName:"v-show",value:e.debut,expression:"nb.debut"}]},[o("code-cell",{attrs:{status:e.status,onExecute:e.execute,onReady:e.updateSetupCode,language:"python"}},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v('# TODO: explain how to run this, and that they only need the gist (loads tools)\nimport pandas as pd\nfrom siuba import arrange, select, mutate, filter, _\nfrom plotnine import ggplot, geom_point, coord_flip, aes, labs\n\n# temporary until I figure out where to put data\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/music200.csv"\nmusic_top200 = pd.read_csv(fname)\n\n# tracks\nfname = "https://siublocks.s3.us-east-2.amazonaws.com/course-data/track_features.csv"\ntrack_features = pd.read_csv(fname)\n\n\n# TODO: shift into a package or file\nfrom siututor import Blank\n___ = Blank()\n# from siuba import pipe\n# from IPython.display import HTML, display\n# ___ = pipe(lambda x: display(HTML("⚠️: <b>Don\'t forget to replace all the blanks!<b>")) and _)\n\npd.set_option("display.max_rows", 6)\n\nfrom IPython import get_ipython\n# special ipython function to get the html formatter\nhtml_formatter = get_ipython().display_formatter.formatters[\'text/html\']\n\n# when you see a Shout object, call the shout_html function on it\nhtml_formatter.for_type(pd.DataFrame, lambda df: df.to_html(max_rows = pd.get_option("display.max_rows")))')])])])],1),o("h3",{attrs:{id:"putting-it-together-work-in-progress"}},[o("a",{attrs:{href:"#putting-it-together-work-in-progress","aria-hidden":"true"}},[o("span",{staticClass:"fa fa-link"})]),t._v("Putting it together (WORK IN PROGRESS)")]),o("p",[t._v("TODO: this will be slides explaining importing and comments. Student should be able to produce a valid python file that someone (with python experience) could run.")]),o("p",[t._v("Importing is how you get the data (like "),o("code",{pre:!0},[t._v("music_top200")]),t._v(") and verbs into Python.")]),o("pre",{pre:!0,attrs:{class:"language-python"}},[o("code",{pre:!0,attrs:{class:"language-python"}},[o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" siuba "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" plotnine "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" music_top200 "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")])])]),o("p",[t._v("Comments mean that you can start a line with "),o("code",{pre:!0},[t._v("#")]),t._v(" to ignore all the code in it")]),o("pre",{pre:!0,attrs:{class:"language-python"}},[o("code",{pre:!0,attrs:{class:"language-python"}},[o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# this is just a helpful message")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the code below here won't run")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# music_top200")])])]),o("h3",{attrs:{id:"exercise-1"}},[o("a",{attrs:{href:"#exercise-1","aria-hidden":"true"}},[o("span",{staticClass:"fa fa-link"})]),t._v("Exercise 1:")]),o("p",[t._v("The code below imports everything from siuba.")]),o("ul",[o("li",[t._v("Add lines to import everything from "),o("code",{pre:!0},[t._v("plotnine")]),t._v(" and "),o("code",{pre:!0},[t._v("music_top200")]),t._v(" as well.")])]),o("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"}},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v("from siuba import *")])])]),o("h3",{attrs:{id:"exercise-2"}},[o("a",{attrs:{href:"#exercise-2","aria-hidden":"true"}},[o("span",{staticClass:"fa fa-link"})]),t._v("Exercise 2:")]),o("p",[t._v("For the artist with the top track in Spain, what country has the most streams for one of their tracks?")]),o("p",[t._v("Note: you may need to code multiple times.")]),o("details",[o("summary",[t._v("hint")]),t._v("\n    \n  > First, find the artist in the top position in Spain. After, can you get only that artists tracks? Once you do that you should be close!\n    \n")]),o("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v("()")])])]},proxy:!0}],null,!0)},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v("(\n    \n)")])])]),o("h3",{attrs:{id:"exercise-3"}},[o("a",{attrs:{href:"#exercise-3","aria-hidden":"true"}},[o("span",{staticClass:"fa fa-link"})]),t._v("Exercise 3:")]),o("code-cell",{attrs:{status:e.status,onExecute:e.execute,language:"python"},scopedSlots:t._u([{key:"output",fn:function(){return[o("p",[t._v("⚠️: "),o("b",[t._v("Don't forget to replace all the blanks!")])])]},proxy:!0}],null,!0)},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[t._v('(music_top200\n  >> mutate(___)\n  >> mutate(stream_seconds = ___)\n  # >> ggplot(aes("stream_seconds", "position", color = "duration"))\n  # + geom_point()\n)')])])])]}}])})],1)}),[],!1,null,null,null);"function"==typeof p&&p(d),"function"==typeof m&&m(d);e.default=d.exports},835:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);