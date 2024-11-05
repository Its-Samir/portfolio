import Image from "next/image";
import { Heading } from "./ui/Heading";
import { Button } from "./ui/Button";

export default function KeySkillsAndKnowledge() {
	return (
		<section
			id="key-skills"
			className="flex justify-between md:flex-row flex-col mt-8"
		>
			<div className="flex gap-4 px-4 md:w-[40rem]">
				<div className="flex flex-col items-center">
					<div className="bg-violet-700 rounded-full w-3 h-3 -m-1" />
					<div className="h-full w-[2px] bg-gradient-to-b from-violet-700 from-60%" />
				</div>
				<div className="mt-4 flex flex-col">
					<Heading>Key Skills</Heading>
					<p className="my-4 text-slate-400">
						<strong>Motivated</strong>: Which helps me to concentrate
						while making projects, <strong>Problem-solving</strong>:
						Leveraging the key concepts of programming for critical
						thinking, <strong>Open-minded</strong>: I like to share my
						ideas with other people, <strong>Creativity</strong>: Always
						stay ready to learn about new technologies.
					</p>
					<a
						href="https://github.com/Its-Samir"
						target="_blank"
						className="w-fit"
					>
						<Button>Explore</Button>
					</a>
				</div>
			</div>
			<div className="text-slate-400">
				<Heading className="px-4 mt-4">Knowledge</Heading>
				<div className="flex justify-between gap-2 w-full p-4 mb-4">
					<Image
						src={"/assets/webdevelopment.png"}
						alt={"webdevelopment-img"}
						width={100}
						height={100}
						className="sm:w-[5rem] sm:h-[5rem] w-[4rem] h-[4rem]"
					/>
					<div className="flex flex-col gap-2">
						<h2 className="text-2xl font-bold">Web Development</h2>
						<p>
							Developing dynamic, responsive websites/web apps that
							enhance user engagement and business visibility.
						</p>
					</div>
				</div>
				<div className="flex justify-between gap-2 w-full p-4 mb-4">
					<Image
						src={"/assets/app-development.jpg"}
						alt={"app-development-img"}
						width={100}
						height={100}
						className="sm:w-[5rem] sm:h-[5rem] w-[4rem] h-[4rem]"
					/>
					<div className="flex flex-col gap-2">
						<h2 className="text-2xl font-bold">App Development</h2>
						<p>
							Creating intuitive, user-friendly mobile apps for seamless
							experiences on iOS and Android.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
