import React, { useState } from "react";
import { Input } from "./ui/input";
import { EyeIcon, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

const InputWithIcon = ({ type, icon, ...rest }) => {
	const [show, setShow] = useState(false);
	return (
		<div className="relative flex items-center">
			<div className="absolute left-3 read-only text-grey-100">{icon}</div>
			<Input
				className={cn("pl-10 border-grey-light bg-grey-dark", type === "password"? "pr-10" : "")}
				{...rest}
				type={show ? "text" : type}
			></Input>
			{type === "password" && (
				<div
					className="absolute cursor-pointer right-3 read-only text-grey-100"
					onClick={() => setShow(!show)}
				>
					{show ? <EyeIcon className="h-5" /> : <EyeOff className="h-5" />}
				</div>
			)}
		</div>
	);
};

export default InputWithIcon;