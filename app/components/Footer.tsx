import Image from "next/image";
import { Heading } from "./ui/Heading";
import Socials from "./ui/Socials";

export default function Footer() {
	return (
		<div className="flex flex-col gap-3 p-2 sm:p-4">
			<div className="flex flex-col md:flex-row justify-between items-start gap-4">
				<div className="flex flex-col gap-3 w-auto md:w-[35rem]">
					<Heading>Lets Connect</Heading>
					<p className="text-slate-400">
						If you like the work you can connect with me, It would be nice
						to connect with you.
					</p>
					<Socials />
					<a
						href="mailto:shubhod2k18@gmail.com"
						className="rounded-md px-3 py-2 bg-teal-700 text-white hover:bg-teal-600 w-fit"
					>
						Contact Me
					</a>
				</div>
				<Image
					src={"/assets/lets-connect.jpg"}
					alt={"lets-connect-img"}
					width={500}
					height={500}
					style={{ userSelect: "none" }}
					className="w-full sm:w-[25rem] rounded-lg"
				/>
			</div>
			<hr />
			<div className="px-1 py-2 sm:px-4 bg-slate-900 rounded-md">
				<p className="sm:text-left text-center text-slate-200">
					Made with ❤ by Samir, Copyright &copy; {new Date().getFullYear()}
				</p>
			</div>
		</div>
	);
}
