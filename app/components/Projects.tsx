"use client";

import Image from "next/image";
import { Heading } from "./ui/Heading";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "./ui/Button";
import { PROJECT_DATA } from "@/data/project-data";

export default function Projects() {
	function handleOnClick(url: string) {
		window.location.href = url;
	}

	return (
		<section
			id="projects"
			className="flex flex-col text-slate-400 gap-4 mt-4 p-2 md:p-4"
		>
			<Heading>Projects</Heading>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 transition-all">
				{PROJECT_DATA.map(
					(p, i) =>
						i < 2 && (
							<div
								key={p.title}
								className="flex flex-col gap-2 group relative"
							>
								<h2 className="text-2xl z-20">
									<a href={p.link} target="_blank">
										{p.title}
									</a>
								</h2>
								<Image
									src={p.img}
									alt={p.title}
									width={500}
									height={500}
									style={{ width: "auto", height: "100%" }}
								/>
								<div className="absolute text-sm bg-neutral-900/80 h-full w-full left-0 bottom-0 p-2 invisible group-hover:visible duration-200 flex flex-col justify-end gap-2 md:text-base">
									<p className="text-white">{p.desc}</p>
									<div className="flex flex-wrap text-white items-center gap-1 sm:gap-2 *:text-sm *:border *:border-slate-600 *:px-2 *:rounded-md *:text-slate-400 *:bg-neutral-800">
										{p.techs.map((t) => {
											return (
												<span key={t + crypto.randomUUID()}>
													{t}
												</span>
											);
										})}
									</div>
									<button
										onClick={() => handleOnClick(p.link)}
										className="text-blue-500 bg-transparent flex items-center gap-2 w-fit hover:text-blue-600"
									>
										<span className="peer">Visit Project</span>{" "}
										<FaArrowRight className="peer-hover:ml-1" />
									</button>
								</div>
							</div>
						)
				)}
			</div>
			<a href="/projects" className="w-fit">
				<Button>Explore</Button>
			</a>
		</section>
	);
}
