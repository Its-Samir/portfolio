import React, { HtmlHTMLAttributes } from "react";

export const Heading = React.forwardRef<
	HTMLHeadingElement,
	HtmlHTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => {
	return (
		<h1
			className={`text-4xl font-bold font-sans text-teal-500 ${className}`}
			{...props}
			ref={ref}
		>
			{children}
		</h1>
	);
});
