"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Socials from "./ui/Socials";
import { Button } from "./ui/Button";

export default function Header() {
	return (
		<header className="flex md:flex-row flex-col md:justify-between items-center gap-2 py-4">
			<div className="gap-2 sm:gap-3 flex flex-col md:items-start items-center sm:p-4 p-2 md:w-[35rem] w-full">
				<span className="font-bold text-2xl text-white">
					Hey, I&apos;m <span className="text-teal-600">Samir</span>,
				</span>
				{/* <TypeAnimation
					sequence={["a Learner", 1000, "a Web Developer", 1000]}
					wrapper="h1"
					speed={50}
					className="lg:text-5xl md:text-3xl text-[1.6rem] text-transparent bg-clip-text bg-gradient-to-t from-teal-600 to-teal-100 font-bold font-sans"
					repeat={Infinity}
				/> */}
				<h1 className="lg:text-5xl md:text-3xl text-[1.6rem] animate-text text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-violet-600 to-blue-500 font-extrabold font-sans pb-0 md:pb-1">
					Web Developer
				</h1>
				<p className="text-slate-400 text-center md:text-left">
					Thanks for visiting my site, its really nice to have you here.
				</p>
				<div className="flex items-center gap-2">
					<a
						href="https://www.linkedin.com/in/samir-kotal-275b36252"
						target="_blank"
					>
						<button className="py-2 px-3 bg-red-600 hover:bg-red-700 text-white border-none rounded-md">
							Lets Connect
						</button>
					</a>
					<Button>My Resume</Button>
				</div>
				<Socials />
			</div>
			<Image
				src={"/assets/boy-img.jpg"}
				alt="boy-img"
				priority
				width={500}
				height={500}
				className="animate-wave lg:h-[25rem] lg:w-[30rem] sm:h-[20rem] sm:w-[25rem] h-auto w-auto"
			/>
		</header>
	);
}
