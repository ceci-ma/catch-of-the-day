import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4quTayLc1EBi8EsrJwf2_WlqZb4AkWC0",
  authDomain: "catch-of-the-day-cecilia.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-cecilia.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
