import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="flex justify-between sm:px-4 px-2 py-1 items-center backdrop-blur-sm text-white sticky top-0 z-20 w-full">
			<Image
				src={"/assets/favicon.ico"}
				alt="logo-img"
				width={100}
				height={100}
				className="h-[2rem] sm:h-[2.5rem] w-[2rem] sm:w-[2.5rem]"
			/>

			<button className="rounded-sm px-2 sm:px-3 py-1 sm:py-2 bg-teal-700 hover:bg-transparent border border-teal-600 hover:border-teal-600 hover:text-teal-500 text-white duration-500">
				Lets Talk
			</button>
		</nav>
	);
}
