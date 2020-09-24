import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq_Dwb3-EDUihCpcI6zqmVUO76kR7xvWw",
  authDomain: "notifier-28122.firebaseapp.com",
  databaseURL: "https://notifier-28122.firebaseio.com",
  projectId: "notifier-28122",
  storageBucket: "notifier-28122.appspot.com",
  messagingSenderId: "242210720409",
  appId: "1:242210720409:web:44c44092a6bf20bfa70608",
  measurementId: "G-XFQRYTWWV5"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging()



export function initNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission)
    if (permission === "granted") {
      // Get Instance ID token. Initially this makes a network call, once retrieved
      // subsequent calls to getToken will return from cache.
      messaging.getToken().then((currentToken) => {
        if (currentToken) {
          console.log("Token=>", currentToken);;
        } else {

          console.log('No Instance ID token available. Request permission to generate one.');

        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);

      });
    }
  })
}