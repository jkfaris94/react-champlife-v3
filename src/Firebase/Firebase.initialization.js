import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize the app once when this module is loaded
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const Initialization = () => {
  // keep Initialization as an empty default export to satisfy hook
};

export default Initialization;
