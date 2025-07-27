// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG1irXtAY0rfo0DBXA3jdxPnp9xNkyV98",
  authDomain: "tech4good-2bb70.firebaseapp.com",
  projectId: "tech4good-2bb70",
  storageBucket: "tech4good-2bb70.firebasestorage.app",
  messagingSenderId: "1096886882690",
  appId: "1:1096886882690:web:c398836224e6dd44b57f9b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Get a list of cities from your database
export async function getEvents() {
  const eventsCol = collection(db, 'events');
  const eventSnapshot = await getDocs(eventsCol);
  const eventsList = eventSnapshot.docs.map(doc => doc.data());
  return eventsList;
}