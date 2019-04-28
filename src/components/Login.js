/**
 *  @author hhx
 *  @date 2019-03-06 17:23
 */
import Vue from 'vue'
import Login from './Login.vue';

let LoginConstructor = Vue.extend(Login);


let LoginInstance;

const getInstance = () => {
    LoginInstance = new LoginConstructor({
      el: document.createElement('div')
    });
    console.log(LoginInstance)
    document.body.appendChild(LoginInstance.$el);
};

let login = function () {
  if (!LoginInstance) {
      getInstance();
  }
};

export default {
    install: (Vue, options) => {
        Vue.prototype.$login = login
    }
}
