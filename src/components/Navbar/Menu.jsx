import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

export default function DrawerMenu() {
  return (
    <>
      <Menu>
        <MenuButton>
          <box-icon name="menu"></box-icon>
        </MenuButton>
        <MenuList>
          <MenuItem as="a" href="/">
            Home
          </MenuItem>
          <MenuItem as="a" href="/#education">
            Education
          </MenuItem>
          <MenuItem as="a" href="/#experience">
            Work Experience
          </MenuItem>
          <MenuItem as="a" href="/#projects">
            Projects
          </MenuItem>
          <MenuItem as="a" href="/#about">
            About
          </MenuItem>
          <MenuItem as="a" href="/#contact">
            Contact
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
