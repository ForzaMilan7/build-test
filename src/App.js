import UIScript from './Component/UIScript';
import Logo from './Component/Logo';
import Navigation from './Component/Navigation';
import Content from './Component/Content';
import './css/style.css'

function App(){
	return(
		<div className="container">
			<UIScript />
			<div className="top">
				<div className="top_inner">
					<Logo />
					<Navigation />
				</div>
			</div>
			<Content />
		</div>
	);
}

export default App;