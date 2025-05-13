import data from "../data";

function Navigation(){
	const {menu}=data; // [{id: "area1", text: "HOME"},{}]

	console.log(menu);

	return(
		<nav id="gnb">
			<ul>
				{/* 
				<li><a href="#area1">HOME</a></li>
				<li><a href="#area2">ABOUT US</a></li>
				<li><a href="#area3">PAGES</a></li>
				<li><a href="#area4">FEATURES</a></li>
				<li><a href="#area5">PORTFOLIO</a></li>
				<li><a href="#area6">BLOG</a></li>
				<li><a href="#area7">SHOP</a></li>
				<li><a href="#area8">CONTACT US</a></li> 
				*/}

				{/*
				{
					menu.map((d, i)=>
						<li key={i+1}><a href={d.id}>{d.text}</a></li>
					)
				} 
				*/}

				{
					menu.map((d,i) =>
						<List key={i+1} propsValue={d} />
					)
				}
			</ul>
		</nav>
	)
}

function List(p){
	// console.log(p); // const p={ propsValue: { id: "area1", text: "Home" } };

	const {id, text}=p.propsValue;

	console.log(id, text); // area1 HOME

	return(
		<li><a href={"#"+id}>{text}</a></li>
	);
}

export default Navigation;