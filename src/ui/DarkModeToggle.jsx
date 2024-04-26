import { useDarkMode } from "../contexts/DarkMode";

import { HiMoon, HiSun } from "react-icons/hi2";
import Span from "../ui/Span";
import ButtonIcon from "./buttons/ButtonIcon";

function DarkModeToggle({ onClick }) {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <ButtonIcon
      onClick={() => {
        setIsDarkMode((mode) => !mode);
        // In the menu when I try to add toe the children a onClick prop this component dosen't have it
        // for that it won't accept that handle so made this props to be able to give it from menu
        // and called it conditionaly because if we used it in another place to not worry about passing it
        onClick?.();
      }}
    >
      <Span>{isDarkMode ? "Light mode" : "Dark Mode"}</Span>
      {isDarkMode ? <HiSun /> : <HiMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
