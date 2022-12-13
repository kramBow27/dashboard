// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB8Hf6yBQG-wj__D9TlwZJ17L5svFpttLg',
  authDomain: 'erp-front-65c81.firebaseapp.com',
  projectId: 'erp-front-65c81',
  storageBucket: 'erp-front-65c81.appspot.com',
  messagingSenderId: '911677991035',
  appId: '1:911677991035:web:a521c485a0e237ffcddade',
  measurementId: 'G-SD9Z219YBV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
