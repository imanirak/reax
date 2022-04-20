import Welcome from "../Welcome";
import Post from "../Post";
import NavBar from '../NavBar';
import { Route, Routes } from "react-router-dom";

const post = {
	title: "Go Little Rockstar",
	author: "KDG",
	body: "I am going to learn this shit.",
};

function Home(props) {
	return (
		<>
			<NavBar />
			<Routes>
				<Route 
					path="/" 
					element={<Welcome name={"Karina"} location={"New York City"} />}>
				</Route>
				<Route
					path="posts"
					element={<Post title={post.title} author={post.author} body={post.body} />}
					>
				</Route>
			</Routes>
		</>
	);
}

export default Home;