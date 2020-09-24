import Vue from 'vue'
import App from './App.vue'
import router from './router'

// custom js
import req from "@/api/request";
import tools from "@/js/tools";

// element-ui
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css

// quill-editor
import quillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(ElementUI) //使用elementUI
Vue.use(quillEditor)

Vue.config.productionTip = false

Vue.prototype.req = req
Vue.prototype.tools = tools


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
