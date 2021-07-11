import Link from "next/link";
import A from "../components/A";

const Index = () => {
	return (
		<div>
			<div className='navbar'>
				<A href={'/'} text={'Home'} />
				<A href={'/users'} text={'Users'} />
			</div>
			<h1>Home Page</h1>
			<style jsx>
				{`
					.navbar{
						background-color: orange;
						padding: 15px;
					}
				
				`}
			</style>
		</div>
	);
}

export default Index