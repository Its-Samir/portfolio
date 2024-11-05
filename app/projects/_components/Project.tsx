import React from "react";
import { ProjectData } from "@/data/project-data";

export default function Project({ title, link, techs }: ProjectData) {
	return (
		<div className="rounded-md p-4 border-2 border-slate-500 flex flex-col gap-2">
			<h1 className="text-xl sm:text-2xl text-slate-400 font-bold">
				{title}
			</h1>
			<p className="text-slate-500 flex gap-1 flex-wrap">
				{techs.map((t) => {
					return <span key={t + crypto.randomUUID()}>-{t}</span>;
				})}
			</p>
			<a
				href={link}
				target="_blank"
				className="text-blue-500 hover:text-blue-600 w-fit"
			>
				Visit Project
			</a>
		</div>
	);
}
