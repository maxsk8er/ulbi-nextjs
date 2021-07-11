import Link from "next/link";

const Index = () => {
	return (
		<div>
			<div className='navbar'>
				<Link href='/'>
					<a className='link'>Home</a>
				</Link>
				<Link href='/users'>
					<a className='link'>Users</a>
				</Link>
			</div>
			<h1>Home Page</h1>
			<style jsx>
				{`
					.navbar{
						background-color: orange;
						padding: 15px;
						box-sizing: border-box;
					}
					.link{
						text-decoration: none;
						color: white;
						font-size: 20px;
						margin: 10px;
					}
				`}
			</style>
		</div>
	);
}

export default Index