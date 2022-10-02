import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyDsPPEBHu6G-xQeM-nP5jZyPNwANn96s34',
	authDomain: 'fir-project-48d1a.firebaseapp.com',
	projectId: 'fir-project-48d1a',
	storageBucket: 'fir-project-48d1a.appspot.com',
	messagingSenderId: '812587000254',
	appId: '1:812587000254:web:eab5e6eaaf000f51d659ef',
	measurementId: 'G-WH6G0CVZLT',
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
