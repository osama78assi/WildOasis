import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";

import { HiChevronDown } from "react-icons/hi2";
import Collapse from "../Collapse";
import NavItem from "./NavItem";

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  color: var(--color-grey-600);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.3s;

  /* if the main nav is open */
  &.active {
    background-color: var(--color-grey-50);
  }

  &:hover {
    background-color: var(--color-grey-50);
  }

  /* catch the nav icon not the arrow icon */
  &:hover > div > div,
  &.active > div > div {
    color: var(--color-grey-800);
    svg {
      color: var(--color-brand-600);
    }
  }
  & > div > div > svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: ${(props) => (props.$active ? "1rem" : "0px")};
  transition: background-color 0.3s, border 0.3s, opacity 0.5s,
    margin ${(props) => props.$marginTime}ms;
  /* top left side of the tree */
  &::before {
    position: absolute;
    content: "";
    display: block;
    width: 1px;
    height: var(--var-height);
    left: 0;
    bottom: -1rem;
    background: var(--color-brand-500);
    transition: height 0.5s;
  }
`;

const Ul = styled.ul`
  transition: all 0.3s;

  /* the inner nav links container */
  & > li {
    position: relative;
    margin-bottom: 0.3rem;
    &::before,
    &::after {
      content: "";
      position: absolute;
      display: block;
      background: var(--color-brand-500);
      z-index: 10;
    }

    // horizontal column
    &::before {
      background-color: transparent;
      border: 1px solid var(--color-brand-500);
      border-top: none;
      border-right: none;
      border-bottom-left-radius: 100%;
      border-bottom-right-radius: 100%;
      top: calc(50% - 7px);
      transform: translate(-50%);
      left: 0.5rem;
      height: 7px;
      width: 1.5rem;
    }

    // vertical column
    &::after {
      width: 1px;
      top: 0;
      left: 0;
      height: calc(100% + 0.6rem);
    }
  }

  // last inner nav link
  & > :last-child {
    margin-bottom: 0px;
    // vertical column
    &::after {
      height: calc(50% - 1px);
    }
  }

  /* the inner nav links */
  li a:link,
  li a:visited {
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1rem 1.5rem;
    transition: all 0.3s;
  }

  li a svg {
    width: 2rem;
    height: 2rem;
  }
`;

const Context = createContext({
  paths: null,
  active: null,
  setActive: null,
  id: null,
});

function NavItemCollapse({
  collapsed = true,
  headerText,
  HeaderIcon,
  timeout = 1000,
  id,
  children,
}) {
  const paths = useRef({});
  const [active, setActive] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  // used ref to avoid re-render lost data and to not cause re-render to the component
  const initialRender = useRef(true);
  const [cssVariable, setCssVariable] = useState(isCollapsed ? "0px" : "1px");
  const { pathname } = useLocation();

  // check if the current path is in paths object
  useEffect(() => {
    if (paths.current) {
      if (paths.current[pathname]) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
  }, [pathname]);

  // adding animation on the tree visualization
  useEffect(() => {
    if (!isCollapsed) {
      setCssVariable("0px");
    } else {
      setCssVariable("1rem");
    }
  }, [isCollapsed]);

  // really before the result pain on the screen because of the header's margin
  useLayoutEffect(() => {
    if (initialRender.current) {
      /*
        there is an issue if the initial state is collapsed
        then the collapse component will ignore this value
        and when the user click it will reverse the initial state
        then collapse component will not do anything
        testCase:
        isCollapse: ture ==collpase component==> ignore
        clicked => isCollapsed: flase ==collapse component==> it's opened close it
      */
      setIsCollapsed((val) => !val);
    }
    initialRender.current = false;
  }, [isCollapsed]);

  function collapse() {
    setIsCollapsed((val) => !val);
  }

  return (
    <Context.Provider value={{ paths, active, setActive, id }}>
      <StyledItem className={`${active && "active"}`} id={id}>
        <Header
          onClick={collapse}
          $active={isCollapsed}
          $marginTime={timeout}
          style={{ "--var-height": cssVariable }}
        >
          <Div>
            <HeaderIcon />
            <span>{headerText}</span>
          </Div>
          <HiChevronDown
            style={{
              transition: "0.3s rotate",
              rotate: isCollapsed ? "180deg" : "0deg",
            }}
          />
        </Header>

        <Collapse collapsed={isCollapsed} timeOut={timeout}>
          <Ul>{children}</Ul>
        </Collapse>
      </StyledItem>
    </Context.Provider>
  );
}

function CollapseItem({ to, Icon, children }) {
  const { id, paths } = useContext(Context);

  // on the initial render add the path to paths object
  useEffect(() => {
    if (paths.current) {
      paths.current[to] = to;
    }
  }, []);

  return (
    <NavItem to={to} Icon={Icon} dataCollapse={id} bc="var(--color-grey-0)">
      {children}
    </NavItem>
  );
}

NavItemCollapse.CollapseItem = CollapseItem;
export default NavItemCollapse;
