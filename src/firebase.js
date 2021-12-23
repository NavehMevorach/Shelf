import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBxxc04SO_ykiX7twCzjTKnX8r50OUB1E0",
  authDomain: "shelf-1a161.firebaseapp.com",
  projectId: "shelf-1a161",
  storageBucket: "shelf-1a161.appspot.com",
  messagingSenderId: "870953352377",
  appId: "1:870953352377:web:fc1c38d7dcffad81582f68",
  measurementId: "G-70NMJDP9ZT",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// const db = firebase.firestore().doc()

export default firebase
