import React, { HtmlHTMLAttributes } from "react";

export const HeadingSecondary = React.forwardRef<
	HTMLHeadingElement,
	HtmlHTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => {
	return (
		<h2
			className={`text-4xl font-bold font-sans text-teal-500 ${className}`}
			{...props}
			ref={ref}
		>
			{children}
		</h2>
	);
});
