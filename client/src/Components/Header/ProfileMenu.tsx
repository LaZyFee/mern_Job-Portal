import { Menu, Avatar, rem, Switch } from '@mantine/core';
import {
  IconMessageCircle,
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconSun,
  IconMoonStars,
  IconLogout2,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ProfileMenu = () => {
  const [checkd, setChecked] = useState(false);
  const [opened, setOpened] = useState(false);
  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <Avatar src="avatar.png" alt="it's me" className="cursor-pointer" />
      </Menu.Target>

      <Menu.Dropdown onChange={() => setOpened(true)}>
        <Link to="/profile">
          <Menu.Item leftSection={<IconUserCircle style={{ width: rem(14), height: rem(14) }} />}>
            Profile
          </Menu.Item>
        </Link>
        <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText style={{ width: rem(14), height: rem(14) }} />}>
          Resume
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMoon style={{ width: rem(14), height: rem(14) }} />}
          rightSection={<Switch
            checked={checkd}
            onChange={(event) => setChecked(event.currentTarget.checked)}
            size='md'
            color='dark.4'
            onLabel={<IconSun style={{ width: rem(14), height: rem(14) }} color='yellow' />}
            offLabel={<IconMoonStars style={{ width: rem(14), height: rem(14) }} color='cyan' />} />
          }>
          Theme
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          color='red'
          leftSection={<IconLogout2 size={14} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}