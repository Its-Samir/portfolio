import Image from "next/image";
import { Button } from "./ui/Button";
import { Heading } from "./ui/Heading";

export default function Techs() {
	return (
		<section
			id="techs"
			className="flex md:flex-row flex-col justify-between gap-2 mt-4"
		>
			<div className="flex flex-col gap-4 sm:p-4 mt-0 md:mt-4 p-2 md:w-[35rem] w-auto">
				<Heading>Technologies</Heading>
				<h1 className="text-2xl text-slate-400 font-sans font-bold">
					Technologies that i have worked with:
				</h1>
				<div className="flex flex-wrap gap-2 justify-start *:font-sans *:border *:border-slate-600 *:px-2 *:rounded-md *:text-slate-400 *:bg-transparent">
					<span>JavaScript</span>
					<span>TypeScript</span>
					<span>Golang</span>
					<span>Node.js</span>
					<span>React.js</span>
					<span>Next.js</span>
					<span>Tailwind</span>
					<span>Shadcn-ui</span>
					<span>Material-ui</span>
					<span>Firebase</span>
					<span>MongoDB</span>
					<span>PostgreSQL</span>
					<span>Prisma</span>
					<span>Git</span>
					<span>GitHub</span>
				</div>
				<div className="flex flex-col md:flex-row items-start gap-2">
					<a href="https://github.com/Its-Samir" target="_blank">
						<Button className="w-fit">Explore</Button>
					</a>
					<Image
						src={"/assets/arrow.png"}
						alt={"arrow-img"}
						width={300}
						height={300}
						style={{ width: "auto", height: "auto", userSelect: "none" }}
						className="hidden md:block"
					/>
				</div>
			</div>
			<div className="relative">
				<div className="border-2 border-violet-500 animate-ping h-[40%] w-[40%] absolute top-0 bottom-0 right-0 left-0 m-auto rounded-full z-20" />
				<Image
					src={"/assets/techs-img.jpg"}
					alt="techs-img"
					width={500}
					height={500}
					className="w-full md:w-[30rem]"
					priority
				/>
			</div>
		</section>
	);
}
