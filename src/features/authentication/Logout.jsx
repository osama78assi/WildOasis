import { useLogout } from "./useLogout";

import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Span from "../../ui/Span";
import ButtonIcon from "../../ui/buttons/ButtonIcon";
import SpinnerMini from "../../ui/loading/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonIcon onClick={logout} disabled={isLoading}>
      <Span>Logout</Span>{" "}
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
