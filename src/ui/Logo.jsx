import { useDarkMode } from "../contexts/DarkMode";

import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: ${(props) => (props.$h ? props.$h : 9.6)}rem;
  width: auto;
`;

function Logo({ h }) {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" $h={h} />
    </StyledLogo>
  );
}

export default Logo;
