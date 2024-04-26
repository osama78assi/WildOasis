import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQueryEffect } from "../hooks/useMediaQueryEffect";

import styled from "styled-components";

import { HiOutlineUser } from "react-icons/hi2";
import Logout from "../features/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";
import Menu from "./Menu";
import Span from "./Span";
import ButtonIcon from "./buttons/ButtonIcon";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderItems({ inMenu = false }) {
  const navigate = useNavigate();

  const handelNavigate = () => navigate("/account");

  return !inMenu ? (
    <>
      <li>
        <ButtonIcon onClick={handelNavigate}>
          <Span>Account</Span>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
      <li>
        <DarkModeToggle />
      </li>
    </>
  ) : (
    <>
      <Menu.Button options={{ presentation: true }} onClick={handelNavigate}>
        <ButtonIcon>
          <Span>Account</Span>
          <HiOutlineUser />
        </ButtonIcon>
      </Menu.Button>
      <Menu.Button options={{ presentation: true, hideWhenClick: false }}>
        <Logout />
      </Menu.Button>
      <Menu.Button options={{ presentation: true }}>
        <DarkModeToggle />
      </Menu.Button>
    </>
  );
}

function HeaderMenu() {
  const [view, setView] = useState("row");
  const onMatch = () => setView("column");
  const onNotMatch = () => setView("row");

  useMediaQueryEffect(700, onMatch, onNotMatch);

  return view === "row" ? (
    <StyledHeaderMenu>
      <HeaderItems />
    </StyledHeaderMenu>
  ) : (
    <Menu id={"user"}>
      <Menu.Toggle />
      <Menu.List>
        <HeaderItems inMenu={true} />
      </Menu.List>
    </Menu>
  );
}

export default HeaderMenu;
