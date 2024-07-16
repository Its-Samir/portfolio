export default interface ProjectDataType {
	img: string;
	title: string;
	desc?: String,
	stacks: string[];
	link: string;
}

export const ProjectData: ProjectDataType[] = [
	{
		img: "/assets/docsdrive.png",
		title: "DocsDrive - A File Management App",
		desc: "A file management app, inspired from google drive, it has the functionalities of uploading, editing, star, share, trash, deleting, sorting files/folders and analytics with charts",
		stacks: [
			"TypeScript",
			"React",
			"NodeJS",
			"Tailwind",
			"Firebase",
			"MongoDB",
			"Prisma",
		],
		link: "https://docsdrive.netlify.app",
	},
	{
		img: "/assets/blogapp.png",
		title: "BlogIt - A Modern Blog App",
		desc: "A modern blog app with posts and user account handling functionalities",
		stacks: [
			"TypeScript",
			"Nextjs",
			"Tailwind",
			"Firebase",
			"PostgreSQL",
			"Prisma",
		],
		link: "https://nextjsblogit.vercel.app",
	},
	{
		img: "/assets/reacttodolist.png",
		title: "Simple Todo App",
		desc: "",
		stacks: ["React"],
		link: "https://the-react-todolist.netlify.app",
	},
	{
		img: "/assets/simongame.png",
		title: "Simon game",
		desc: "",
		stacks: ["JavaScript", "jQuery"],
		link: "https://its-samir.github.io/simon-game",
	},
	{
		img: "/assets/tailwindsite.png",
		title: "Tailwind Site",
		desc: "",
		stacks: ["TailwindCSS"],
		link: "https://its-samir.github.io/tailwind-site",
	},
	{
		img: "/assets/personalportfolio.png",
		title: "Portfolio Interface",
		desc: "",
		stacks: ["React", "Scss"],
		link: "https://personalsiteproject.netlify.app",
	},
	{
		img: "/assets/weatherapp.png",
		title: "Weather app",
		desc: "",
		stacks: ["Nodejs", "Express", "API"],
		link: "https://dailyweatherapp.onrender.com",
	},
	{
		img: "/assets/shoppingcart.png",
		title: "Shopping Cart",
		desc: "",
		stacks: ["React", "TypeScript", "Firebase"],
		link: "https://cartinflows.netlify.app",
	},
];
