// authSolution.js
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

let authStateInitialized = false; // Flag to prevent duplicate state updates

onAuthStateChanged(auth, (user) => {
  if (!authStateInitialized) {
    authStateInitialized = true; // Set flag after the first update

    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/auth/web/auth-state-persistence
      const uid = user.uid;
      console.log('User signed in:', uid);
      // ... rest of your signed-in code
    } else {
      // User is signed out
      console.log('User signed out');
      // ... rest of your signed-out code
    }
  } else {
    console.log('Skipping duplicate onAuthStateChanged event');
  }
});