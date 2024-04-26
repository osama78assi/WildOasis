import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useState } from "react";
import { createPortal } from "react-dom";

import styled from "styled-components";

import Logo from "../Logo";
import MainNav from "./MainNav";
import { HiOutlineBars3, HiOutlineXCircle } from "react-icons/hi2";
import TogglerButton from "./SidebarToggler";
import Uploader from "../../data/Uploader";
import { useMediaQueryEffect } from "../../hooks/useMediaQueryEffect";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 1.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  position: relative;
  z-index: 30;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  transition: color 0.3s, background-color 0.3s, left 0.5s;
  left: 0;

  &.left {
    left: 0;
  }

  @media (max-width: 1000px) {
    &.toggle {
      position: absolute;
      height: 100dvh;
      overflow-y: auto;
      box-shadow: var(--shadow-lg);
    }

    &.left {
      left: -150%;
    }
  }
`;

function Sidebar() {
  const [toggle, setToggle] = useState("left");
  const [showToggler, setShowToggler] = useState(false);
  // For show/hide the sidebar
  const onMatch = () => {
    setShowToggler(true);
  };
  const onNotMatch = () => {
    setShowToggler(false);
  };

  useMediaQueryEffect(1000, onMatch, onNotMatch);
  const ref = useOutsideClick(closeBar);

  function openBar() {
    if (toggle === "left") setToggle("");
  }

  function closeBar() {
    if (toggle === "") setToggle("left");
  }

  return (
    <>
      {showToggler &&
        createPortal(
          <TogglerButton onClick={() => openBar()} $header={true}>
            <HiOutlineBars3 />
          </TogglerButton>,
          document.getElementById("navbar")
        )}
      <StyledSidebar className={`toggle ${toggle}`} ref={ref}>
        {showToggler && (
          <TogglerButton
            onClick={() => closeBar()}
            $text={"var(--color-brand-700)"}
            $bg={"transparent"}
            $bghover={"transparent"}
            $bf={"transparent"}
            $direction={"right"}
            $border={"transparent"}
            $shadow={"none"}
          >
            <HiOutlineXCircle />
          </TogglerButton>
        )}
        <Logo />
        <MainNav onNavigation={closeBar} />
        {/* <Uploader /> */}
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
