import { useRef } from "react";

import styled from "styled-components";

import { FaHome } from "react-icons/fa";
import {
  HiMiniUserGroup,
  HiMiniUserPlus,
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { IoBodyOutline, IoBookmarkOutline } from "react-icons/io5";
import { MdBookmarkAdd } from "react-icons/md";
import { TbHomePlus } from "react-icons/tb";
import NavItem from "./NavItem";
import NavItemCollapse from "./NavItemCollapse";

// eslint-disable-next-line
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Nav = styled.nav`
  flex-basis: 70%;
  overflow: auto;
  padding: 0rem 1rem;
`;

function MainNav({ onNavigation }) {
  // to recognize collapsable element
  const ids = useRef({
    guestsHeader: "guestsHeader",
    cabinsHeader: "cabinsHeader",
  });
  function handelCloseBar(e) {
    const target = e.target.closest("li");
    if (target && !target.id) {
      onNavigation();
    }
  }

  return (
    <Nav>
      <NavList onClick={(e) => handelCloseBar(e)}>
        <NavItem to="/dashboard" Icon={HiOutlineHome}>
          Home
        </NavItem>

        <NavItemCollapse
          collapsed={true}
          headerText="Bookings"
          HeaderIcon={HiOutlineCalendarDays}
          id={ids.current.cabinsHeader}
        >
          <NavItemCollapse.CollapseItem
            Icon={IoBookmarkOutline}
            to={"/bookings/all"}
          >
            All bookings
          </NavItemCollapse.CollapseItem>
          <NavItemCollapse.CollapseItem
            Icon={MdBookmarkAdd}
            to={"/bookings/addBooking"}
          >
            Add booking
          </NavItemCollapse.CollapseItem>
        </NavItemCollapse>

        <NavItemCollapse
          collapsed={true}
          headerText="Cabins"
          HeaderIcon={HiOutlineHomeModern}
          id={ids.current.cabinsHeader}
        >
          <NavItemCollapse.CollapseItem Icon={FaHome} to={"/cabins/all"}>
            All cabins
          </NavItemCollapse.CollapseItem>
          <NavItemCollapse.CollapseItem
            Icon={TbHomePlus}
            to={"/cabins/addCabin"}
          >
            Add cabin
          </NavItemCollapse.CollapseItem>
        </NavItemCollapse>

        <NavItem to="/users" Icon={HiOutlineUsers}>
          Users
        </NavItem>

        <NavItemCollapse
          collapsed={true}
          headerText="Guests"
          HeaderIcon={IoBodyOutline}
          id={ids.current.guestsHeader}
        >
          <NavItemCollapse.CollapseItem
            Icon={HiMiniUserGroup}
            to={"/guests/all"}
          >
            All guests
          </NavItemCollapse.CollapseItem>
          <NavItemCollapse.CollapseItem
            Icon={HiMiniUserPlus}
            to={"/guests/addGuest"}
          >
            Add guests
          </NavItemCollapse.CollapseItem>
        </NavItemCollapse>

        <NavItem to="/settings" Icon={HiOutlineCog6Tooth}>
          Settings
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default MainNav;
