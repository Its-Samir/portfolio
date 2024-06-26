"use client";

import Image from "next/image";
import { Heading } from "./ui/Heading";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";

export default function Projects() {
	const router = useRouter();

	function handleOnClick(url: string) {
		router.push(url);
	}

	return (
		<div className="flex flex-col text-slate-400 gap-4 mt-4 p-2 md:p-4">
			<Heading>Projects</Heading>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 transition-all">
				<div className="flex flex-col gap-2 group relative">
					<h2 className="text-2xl z-20">
						<a href="https://nextjsblogit.vercel.app" target="_blank">
							BlogIt - A Fullstack App
						</a>
					</h2>
					<Image
						src={"/assets/blogapp.png"}
						alt={"blogapp-site-img"}
						width={500}
						height={500}
						style={{ width: "auto", height: "auto" }}
					/>
					<div className="absolute text-sm bg-neutral-900/80 h-full w-full left-0 bottom-0 p-2 invisible group-hover:visible duration-200 flex flex-col justify-end gap-2 md:text-base">
						<p className="text-white">
							<a href="https://nextjsblogit.vercel.app" target="_blank">
								A fullstack modern blog app with posts and user account
								handling functionalities.
							</a>
						</p>
						<div className="flex flex-wrap text-white items-center gap-1 sm:gap-2 *:text-sm *:border *:border-slate-600 *:px-2 *:rounded-md *:text-slate-400 *:bg-neutral-800">
							<span>TypeScript</span>
							<span>Nextjs</span>
							<span>Tailwind</span>
							<span>Firebase</span>
							<span>PostgreSQL</span>
							<span>Prisma</span>
						</div>
						<button
							onClick={() =>
								handleOnClick("https://nextjsblogit.vercel.app")
							}
							className="flex items-center gap-1 px-2 py-1 w-fit bg-black text-white rounded-sm sm:px-3 sm:py-2"
						>
							Demo <FaArrowRight />
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-2 group relative">
					<h2 className="text-2xl z-20">
						<a href="https://cartflow.netlify.app" target="_blank">
							Cartflow - A Shopping Cart
						</a>
					</h2>
					<Image
						src={"/assets/shoppingcart.png"}
						alt={"shopping-cart-site-img"}
						width={500}
						height={500}
						style={{ width: "auto", height: "auto" }}
					/>
					<div className="absolute text-sm bg-neutral-900/80 h-full w-full left-0 bottom-0 p-2 invisible group-hover:visible duration-200 flex flex-col justify-end gap-2 md:text-base">
						<p className="text-white">
							<a href="https://cartflow.netlify.app" target="_blank">
								A shopping cart including authentication with firebase,
								adding, updating and deleting products from cart.
							</a>
						</p>
						<div className="flex flex-wrap text-white items-center gap-1 sm:gap-2 *:text-sm *:border *:border-slate-600 *:px-2 *:rounded-md *:text-slate-400 *:bg-neutral-800">
							<span>React</span>
							<span>TypeScript</span>
							<span>Firebase</span>
						</div>
						<button
							onClick={() =>
								handleOnClick("https://cartflow.netlify.app")
							}
							className="flex items-center gap-1 px-2 py-1 w-fit bg-black text-white rounded-sm sm:px-3 sm:py-2"
						>
							Demo <FaArrowRight />
						</button>
					</div>
				</div>
			</div>
			<a href="https://github.com/Its-Samir" target="_blank">
				<Button className="w-fit">Explore</Button>
			</a>
		</div>
	);
}
