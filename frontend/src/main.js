import { createApp } from 'vue'
import store from "@/store/index.js";
import App from './App.vue'
import router from './router'
import i18n from "@/i18n/i18n.js";
import ElementPlus from 'element-plus' 
import 'element-plus/dist/index.css'

import { useAdaptLayout } from '@/hooks/adaptLayout.js'
import VConsole from 'vconsole'
useAdaptLayout()


import { PageLoading } from "@/utils/global_base";

import { PageLocales } from "@/utils/locale";

import VueClipboard from "vue-clipboard2";
if (import.meta.env.MODE === 'test') {
    new VConsole()
}
const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(store);
app.use(VueClipboard);

app.use(i18n);
app.mount('#app')
app.config.globalProperties.$local = new PageLocales(); // localstroge
app.config.globalProperties.$loadingBox = new PageLoading(); // loading


router.beforeEach((to, from, next) => {

    let user_access = localStorage.getItem("access");
    let account_id = localStorage.getItem("account_id");
    let email = localStorage.getItem("email");
    let psd =   localStorage.getItem("psd");

     if(Boolean(user_access)&& Boolean(account_id)){

        store.state.user.isLogin = true;
        store.state.user.email = email;
        store.state.user.account_id = account_id;
        store.state.user.user_access = user_access;
        store.state.user.haveWalletPassword = Number(psd);
        next();
     } else {
        if (to.meta.isLogin) {
            next({
                path: '/login',
            })
           
        } else {
            next()
        }
     }

     if(to.fullPath == "/login"){
        if(Boolean(user_access)&& Boolean(account_id)){
          next({
            path:from.fullPath
          });
        }else {
          next();
        }
      }
   
})

router.afterEach(() => {
    window.scroll(0, 0);
});