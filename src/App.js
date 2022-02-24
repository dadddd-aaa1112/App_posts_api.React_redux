import './App.css'
import Like from './components/Like'
import Title from './components/Title'
import Comments from './components/Comments'

import Spin from './components/Spin'
function App() {
	return (
		<div className="App">
			<div className="wrap">
				<Spin />
				<div className="card">
					<div className="card-image">
						<img
							src="https://avatars.mds.yandex.net/i?id=25722f78d9c1afaa61e6e0a6e904a5c9-5221692-images-thumbs&n=13&exp=1"
							alt="surfing"
						/>
						<Title />
						<Like />
					</div>
					<Comments />
				</div>
			</div>
		</div>
	)
}

export default App
