import {
	Avatar,
	Github,
	Leetcode,
	Linkedin,
	Hackerrank,
} from "./assets/svg.jsx";

import profile from "./assets/profile.png";

const linkObj = [
	// {
	// 	name: "Portfolio",
	// 	tagName: "portfolio",
	// 	svg: <Avatar />,
	// 	link: "/",
	// },
	{
		name: "Github",
		tagName: "github",
		svg: <Github />,
		link: "https://github.com/Farooq-Mohammed",
	},
	{
		name: "Linkedin",
		tagName: "linkedin",
		svg: <Linkedin />,
		link: "https://www.linkedin.com/in/mohdfarooqahmed/",
	},
	{
		name: "Leetcode",
		tagName: "leetcode",
		svg: <Leetcode />,
		link: "https://leetcode.com/u/18211a05h5/",
	},
	{
		name: "Hackerrank",
		tagName: "hackerrank",
		svg: <Hackerrank />,
		link: "https://www.hackerrank.com/profile/omar_farooq023",
	},
];

function App() {
	return (
		<div className="main">
			<div className="image-container">
				<img src={profile} alt="profile pic" className="profile" />
			</div>
			<div className="context">
				<h3>Hi, I&apos;m Mohammed Farooq Ahmed</h3>
				<h4>Checkout my links below 👇</h4>
			</div>
			<div className="links-container" name="links-container">
				{linkObj.map((obj) => (
					<li key={obj.name} className="link" name={obj.tagName}>
						<a href={obj.link}>
							{obj.svg}
							<span>{obj.name}</span>
						</a>
					</li>
				))}
			</div>
		</div>
	);
}

export default App;
