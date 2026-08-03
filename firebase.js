const firebaseConfig = {
  apiKey: "AIzaSyC1r1n2FpEVX7eIziJ66InIJ_BP6ZD0kOs",
  authDomain: "cozy-s-wear.firebaseapp.com",
  databaseURL: "https://cozy-s-wear-default-rtdb.firebaseio.com/",
  projectId: "cozy-s-wear",
  storageBucket: "cozy-s-wear.firebasestorage.app",
  messagingSenderId: "371371769544",
  appId: "1:371371769544:web:262fefd35d3e9c223e2ffd"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
