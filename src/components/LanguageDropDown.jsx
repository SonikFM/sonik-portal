

import * as React from "react";
import { ChevronDown, GlobeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { languages } from "@/contants/languages";
import { useTranslation } from "react-i18next";

export function LanguageDropDown() {
	const { i18n } = useTranslation();
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(i18n.language);

	React.useEffect(() => {
		if (i18n.language && i18n.language !== value) {
			setValue(i18n.language);
		}
	}, [i18n]);

	const handleLanguageChange = (v) => {
		i18n.changeLanguage(v);
	};

	const currentLang = languages.find((i) => i.value === value);
	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					role="combobox"
					aria-expanded={open}
					className="justify-between h-5 p-0 text-grey-100 hover:bg-grey-200 hover:text-white "
				>
					<GlobeIcon className="w-4 h-4" />
					<div className="flex flex-col text-left w-[calc(100%-40px)] truncate shrink ml-1">
						<p className="text-sm uppercase text-grey-100 ">
							{currentLang?.key}
						</p>
					</div>
					<ChevronDown className="w-5 h-5 p-[2px] rounded-md text-grey-100 shrink-0" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[150px] p-0 border border-grey-light bg-grey-100">
				<Command className="overflow-hidden bg-grey-100">
					<CommandGroup>
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							{[...languages].map((language) => (
								<CommandItem
									onSelect={() => {
										handleLanguageChange(language.value);
										setValue(language.value);
										setOpen(false);
									}}
								>
									{language.label}
								</CommandItem>
							))}
						</CommandList>
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
