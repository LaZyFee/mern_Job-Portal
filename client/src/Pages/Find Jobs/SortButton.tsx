import { useState } from "react";
import { Button, Combobox, useCombobox } from "@mantine/core";
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
                <Button
                    variant="filled"
                    className="!bg-bright-sun-400"
                    onClick={() => combobox.toggleDropdown()}
                    rightSection={<IconAdjustments size={16} />}
                >
                    {selectedItem || "Pick item"}
                </Button>
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options>{options}</Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};
