import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Socials() {
	return (
		<div className="flex gap-2 items-center">
			<a href="https://github.com/Its-Samir" target="_blank">
				<button className="rounded-full bg-white p-2 hover:shadow-white shadow-md duration-500">
					<FaGithub size={18} />
				</button>
			</a>
			<a href="https://twitter.com/ItsSamirK" target="_blank">
				<button className="rounded-full bg-white p-2 hover:shadow-white shadow-md duration-500">
					<FaXTwitter size={18} />
				</button>
			</a>
			<a
				href="https://www.linkedin.com/in/samir-kotal-275b36252"
				target="_blank"
			>
				<button className="rounded-full bg-white p-2 hover:shadow-white shadow-md duration-500">
					<FaLinkedinIn size={18} />
				</button>
			</a>
		</div>
	);
}
