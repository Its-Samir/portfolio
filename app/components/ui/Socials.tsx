import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Socials() {
	return (
		<div className="flex gap-2 items-center">
			<a
				aria-label="For more info checkout github profile"
				href="https://github.com/Its-Samir"
				target="_blank"
			>
				<button
					className="rounded-full bg-white p-2 hover:shadow-white shadow-md duration-500"
					id="social-btn"
					aria-label="github-button"
				>
					<FaGithub size={18} />
				</button>
			</a>
			<a
				aria-label="For more info checkout twitter profile"
				href="https://twitter.com/ItsSamirK"
				target="_blank"
			>
				<button
					className="rounded-full bg-white p-2 hover:shadow-white shadow-md duration-500"
					id="social-btn"
					aria-label="twitter-button"
				>
					<FaXTwitter size={18} />
				</button>
			</a>
			<a
				aria-label="For more info checkout linkedin profile"
				href="https://www.linkedin.com/in/samir-kotal-275b36252"
				target="_blank"
			>
				<button
					className="rounded-full bg-white p-2 hover:shadow-white shadow-md duration-500"
					id="social-btn"
					aria-label="linkedin-button"
				>
					<FaLinkedinIn size={18} />
				</button>
			</a>
		</div>
	);
}
