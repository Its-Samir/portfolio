import React from "react";
import Project from "./_components/Project";
import { PROJECT_DATA } from "@/data/project-data";

export default function ProjectsPage() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-wrap w-[100%] p-4 gap-2">
			{PROJECT_DATA.map((p) => (
				<Project {...p} />
			))}
		</div>
	);
}
