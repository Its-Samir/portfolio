import React, { ButtonHTMLAttributes } from "react";

export const Button = React.forwardRef<
	HTMLButtonElement,
	ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
	return (
		<button
			className={`py-2 px-4 bg-transparent text-teal-500 border border-teal-600 hover:bg-teal-600 hover:text-white duration-500 rounded-md ${className}`}
			{...props}
			ref={ref}
		>
			{children}
		</button>
	);
});
