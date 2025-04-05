import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export function InputAutocomplete({ value, setValue, options, placeholder, emptyPlaceholder, ...props }) {
	const [open, setOpen] = React.useState<boolean>(true);
	// its weird, dont touch it
	const [refresh, refresher] = React.useState<number>(0);

	return (
		<div style={{ position: "relative" }}>
			<Input key={refresh} defaultValue={value} {...props} />
			{open && <Dropdown options={options} refresher={refresher} setValue={setValue} setOpen={setOpen} />}
		</div>
	);
}

const Dropdown = ({ options, refresher, setValue, setOpen }) => {
	return (
		<>
			<div className={"absolute w-fulll border-blue-200/75 z-100"} style={{ top: "120%" }}>
				{options &&
					options.map((el, i) => (
						<div
							className={
								"bg-white z-9 hover:bg-sky-100 relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-100 border-blue-200/25 border cursor-pointer"
							}
							key={i}
							onClick={() => {
								setValue(el);
								// its weird, dont touch it
								refresher(i => i + 1);
								setOpen(false);
							}}
						>
							{el}
						</div>
					))}
			</div>
		</>
	);
};

export default { InputAutocomplete };
