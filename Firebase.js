import {initializeApp} from "Firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0oH8GXRI8m2dAacQCiNSuMrGHFmOd9EQ",
  authDomain: "whatsapp-clone-eb82e.firebaseapp.com",
  projectId: "whatsapp-clone-eb82e",
  storageBucket: "whatsapp-clone-eb82e.appspot.com",
  messagingSenderId: "713548746067",
  appId: "1:713548746067:web:d1dcd5f7b79acffb0925a6"
};
  const app = initializeApp(firebaseConfig);
  console.log(app);
  const db = app.fireStore();
  //export const auth = getAuth(app);
  export default db;