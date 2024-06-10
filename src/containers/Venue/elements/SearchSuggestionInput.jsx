import SearchIcon from "@/svgs/SearchIcon";
import { XIcon } from "lucide-react";
import React, { useState } from "react";

const SearchSuggestionInput = () => {
	const [values, setValues] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const handleKeyDown = (event) => {
		if (event.key === "Enter" && inputValue.trim()) {
			setValues([...values, inputValue.trim()]);
			setInputValue("");
		}
	};

	const handleRemove = (index) => {
		setValues(values.filter((_, i) => i !== index));
	};

	return (
		<div className="flex flex-wrap items-center px-3 border rounded-lg border-grey-light">
      <SearchIcon className=" text-grey-100"/>
			{values.map((value, index) => (
				<div
					key={index}
					className="flex items-center pr-2 pl-1 h-5 m-1 text-xs rounded-full bg-grey-100/[16%] text-grey ml-2"
				>
					<button
						onClick={() => handleRemove(index)}
						className="text-grey hover:text-white focus:outline-none"
					>
						<XIcon className="w-3 h-3" />
					</button>
					<span className="ml-1">{value}</span>
				</div>
			))}
			<input
				type="text"
				className="flex-grow p-2 outline-none bg-grey-dark text-grey-100"
				placeholder=""
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</div>
	);
};

export default SearchSuggestionInput;
