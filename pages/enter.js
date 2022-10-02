import { auth, googleAuthProvider } from '../lib /firebase';

export default function Enter(props) {
	const user = null;
	const username = null;

	return (
		<main>
			{user ? (
				!username ? (
					<UsernameForm />
				) : (
					<SignOutButton />
				)
			) : (
				<SignInButton />
			)}
		</main>
	);
}

function SignInButton() {
	const signInWithGoogle = async () => {
		try {
			await auth.signInWithPopup(googleAuthProvider);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<button className="btn-google" onClick={signInWithGoogle}>
			<img src={'/google.png'} /> Sign in with Google
		</button>
	);
}
function SignOutButton() {
	return <button onClick={() => auth.signOut()}>Sign Out</button>;
}
function UsernameForm() {}
