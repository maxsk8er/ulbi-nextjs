import A from "./A";
import Head from "next/head";

const MainContainer = ({ children, keywords }) => {
	return (
		<>
			<Head	>
				<meta keywords={"maxsk8er, nextjs" + keywords}></meta>
				<title>Home Page</title>
			</Head>
			<div className="navbar">
				<A href={"/"} text={"Home"} />
				<A href={"/users"} text={"Users"} />
			</div>
			<div>
				{children}
			</div>
			<style jsx>
				{`
					.navbar{
						background-color: orange;
						padding: 15px;
					}
				
				`}
			</style>
		</>
	);
};

export default MainContainer;