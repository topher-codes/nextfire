import Link from 'next/link';

export default function Navbar() {
	const { user, username } = {};
	return (
		<nav className="navbar">
			<ul>
				<li>
					<Link href={'/'}>
						<button>FEED</button>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
