import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import firebase from 'firebase/app'
import 'firebase/database'

Vue.prototype.$axios = axios
Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyCDMS91pnMH1YotpScuA7H0eGeQUybFGv0",
  authDomain: "escaperoomonline-53920.firebaseapp.com",
  databaseURL: "https://escaperoomonline-53920.firebaseio.com",
  projectId: "escaperoomonline-53920",
  storageBucket: "escaperoomonline-53920.appspot.com",
  messagingSenderId: "1030475900432",
  appId: "1:1030475900432:web:374c8bf8e5beb997048c95",
  measurementId: "G-D6270Q4830"
};

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

