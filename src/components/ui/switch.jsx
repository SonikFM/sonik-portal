import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef(({ className, thumbClass, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={cn(
			"peer bg-grey-light inline-flex h-4 w-7 shrink-0 cursor-pointer items-center shrink-0 rounded-full border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-pink data-[state=unchecked]:bg-grey-light",
			className
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			className={cn(
				"pointer-events-none border-4 box-content border-white bg-grey border-grey block h-1 w-1 rounded-full data-[state=checked]:border-white data-[state=checked]:bg-pink  data-[state=unchecked]:bg-grey-light  shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-1",
				thumbClass
			)}
		/>
	</SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
