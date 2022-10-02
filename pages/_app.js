import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { createContext } from 'react';
import { UserContext } from '../lib/context';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

function MyApp({ Component, pageProps }) {
	const [username, setUsername] = useState(null);

	return (
		<>
			<UserContext.Provider value={{ user: {}, username: 'Chris' }}>
				<Navbar />
				<Component {...pageProps} />
				<Toaster />
			</UserContext.Provider>
		</>
	);
}

export default MyApp;
