import firebase from 'firebase/compat/app'
import  'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDWCy-5whaF6HU9NOjWitFwAeacAepUoqQ",
    authDomain: "movie-tonight-5bb64.firebaseapp.com",
    projectId: "movie-tonight-5bb64",
    storageBucket: "movie-tonight-5bb64.appspot.com",
    messagingSenderId: "726254365974",
    appId: "1:726254365974:web:bd18f41bb45ed1888f7437"
  };

  const firebasApp=firebase.initializeApp(firebaseConfig)
  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  export {auth , provider};

