import { useEffect, useState } from 'react';
import { Checkbox, Combobox, Group, Input, Pill, PillsInput, useCombobox } from '@mantine/core';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MultiSelectCreatable = (props: any) => {


    useEffect(() => {
        setData(props.options);
    }, [props.options]);

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });

    const [search, setSearch] = useState('');
    const [data, setData] = useState<string[]>([]);
    const [value, setValue] = useState<string[]>([]);

    const exactOptionMatch = data.some((item) => item === search);

    const handleValueSelect = (val: string) => {
        setSearch('');

        if (val === '$create') {
            setData((current) => [...current, search]);
            setValue((current) => [...current, search]);
        } else {
            setValue((current) =>
                current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
            );
        }
    };

    const handleValueRemove = (val: string) =>
        setValue((current) => current.filter((v) => v !== val));

    const values = value.slice(0, 2).map((item) => (
        <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}> {item}
        </Pill>
    ))

    const options = data.filter((item) => item.toLowerCase().includes(search.trim().toLowerCase())).map((item) => (
        <Combobox.Option value={item} key={item} active={value.includes(item)}>
            <Group gap="sm">
                <Checkbox
                    size='xs'
                    color='brightSun.4'
                    checked={value.includes(item)}
                    onChange={() => { }}
                    aria-hidden
                    tabIndex={-1}
                    style={{ pointerEvents: "none" }}
                />
                <span>{item}</span>
            </Group>
        </Combobox.Option>
    ));


    return (
        <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
            <Combobox.DropdownTarget>
                <PillsInput
                    onClick={() => combobox.toggleDropdown()}
                    rightSection={<Combobox.Chevron />}
                    leftSection={
                        <div>
                            <props.icon
                                className='text-bright-sun-400 p-1 bg:mine-shaft-900 rounded-full mr-1' />
                        </div>
                    }
                >
                    <Pill.Group>
                        {value.length > 0 ? (
                            <>
                                {values}
                                {value.length > 2 && (
                                    <Pill>+{value.length - 2} more</Pill>
                                )}
                            </>
                        ) : (
                            <Input.Placeholder className='text-mine-shaft-100'>{props.title}</Input.Placeholder>
                        )}


                    </Pill.Group>
                </PillsInput>
            </Combobox.DropdownTarget>

            <Combobox.Dropdown>
                <Combobox.Search value={search} onChange={(event) => setSearch(event.currentTarget.value)} placeholder="Search for values" />
                <Combobox.Options>
                    {options}

                    {!exactOptionMatch && search.trim().length > 0 && (
                        <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
                    )}

                    {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
                        <Combobox.Empty>Nothing found</Combobox.Empty>
                    )}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
}