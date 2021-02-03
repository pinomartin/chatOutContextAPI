import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAubS3DwyRm0JtS0rGP0Wf7L7-SO4pO2r8",
    authDomain: "chat-out-context.firebaseapp.com",
    projectId: "chat-out-context",
    storageBucket: "chat-out-context.appspot.com",
    messagingSenderId: "636184604843",
    appId: "1:636184604843:web:bf852a5f1db89cbbe387ee"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  
  const provider = new firebase.auth.GoogleAuthProvider();

  

  export  {db , auth , provider } 