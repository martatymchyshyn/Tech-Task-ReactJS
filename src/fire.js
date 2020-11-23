import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyB1EXFSP5YFGjTmwDB1QdsBaFInXwHIhKw",
    authDomain: "linkup-studio-test.firebaseapp.com",
    databaseURL: "https://linkup-studio-test.firebaseio.com",
    projectId: "linkup-studio-test",
    storageBucket: "linkup-studio-test.appspot.com",
    messagingSenderId: "1009619358006",
    appId: "1:1009619358006:web:58a3ae0287a95fda9ba397"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;