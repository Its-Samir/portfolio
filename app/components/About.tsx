import Image from "next/image";
import { Button } from "./ui/Button";
import { Heading } from "./ui/Heading";

export default function About() {
	return (
		<div className="flex md:flex-row flex-col md:justify-between justify-center">
			<Image
				src={"/assets/boy in table.png"}
				alt="boy in table img"
				width={500}
				height={500}
				className="sm:h-[25rem] h-auto sm:w-[25rem] w-auto hover:scale-95 duration-200"
			/>
			<div className="flex flex-col items-start space-y-3 p-4 w-full lg:w-[35rem]">
				<Heading>About Me</Heading>
				<p className="text-slate-400">
					Hi there! I&apos;m a passionate Fullstack Developer. My journey
					in web development began with a fascination for how websites
					work, leading me to dive deep into both frontend and backend
					technologies.
					<br />
					<br />
					During my studies and through personal projects, I&apos;ve gained
					hands-on experience with technologies like JavaScript, React,
					Node.js, and Golang. I enjoy building seamless, user-friendly
					applications by leveraging the rules of writing clean and
					efficient code.
					<br />
					<br />
					Am always looking for new ways to enhance my skills for new
					technologies and best practices, I&apos;m eager to bring fresh
					ideas and a positive attitude to a collaborative team.
				</p>
				<Button>Lets Talk</Button>
			</div>
		</div>
	);
}
