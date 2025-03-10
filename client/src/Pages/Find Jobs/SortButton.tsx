import { useState } from "react";
import { ActionIcon, Combobox, useCombobox } from "@mantine/core";
import { IconAdjustments } from "@tabler/icons-react";

const opt = ["Relevance", "Most Recent", "Salary (Low to High)", "Salary (High to Low)"];

export const SortButton = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const options = opt.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    return (
        <Combobox

            store={combobox}
            width={250}
            position="bottom-start"
            withArrow
            onOptionSubmit={(val) => {
                setSelectedItem(val);
                combobox.closeDropdown();
            }}
        >
            <Combobox.Target >
                <div
                    className=" flex cursor-pointer hover:bg-mine-shaft-900 items-center text-sm border border-bright-sun-400  rounded-xl py-1 px-2 pr-1"
                    onClick={() => combobox.toggleDropdown()}
                >
                    {selectedItem}
                    <ActionIcon color="brightSun.4" variant="transparent" aria-label="settings">
                        <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
                    </ActionIcon>
                </div>
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options>{options}</Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};
