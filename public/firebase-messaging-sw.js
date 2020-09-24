importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCuXO3BpB9S-fnJADRUppe5kcOaXZz3JVM",
  authDomain: "notifierapp-c57e3.firebaseapp.com",
  databaseURL: "https://notifierapp-c57e3.firebaseio.com",
  projectId: "notifierapp-c57e3",
  storageBucket: "notifierapp-c57e3.appspot.com",
  messagingSenderId: "502211357459",
  appId: "1:502211357459:web:c9c6eb581ca78c311048e6"
};

firebase.initializeApp(firebaseConfig);

firebase.messaging()