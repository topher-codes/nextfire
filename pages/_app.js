import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { useUserData } from '../lib/hooks';
import { UserContext } from '../lib/context';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../lib/firebase';

function MyApp({ Component, pageProps }) {
	const userData = useUserData();
	return (
		<>
			<UserContext.Provider value={userData}>
				<Navbar />
				<Component {...pageProps} />
				<Toaster />
			</UserContext.Provider>
		</>
	);
}

export default MyApp;
