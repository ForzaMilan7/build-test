import data from "../data";

function Logo(){
	console.log(data);

	const {logo}=data; // const logoData=data.logo;

	return(
		<h1 className="logo">
			<a href="">
				<img src={"/images/"+logo.path} alt={logo.label} />
			</a>
		</h1>
	)
}

export default Logo;