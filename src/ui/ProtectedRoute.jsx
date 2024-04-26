import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

import FullPageSpinner from "./loading/FullPageSpinner";

function ProtectedRoute({ children }) {
  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  // 2. if there is NO authenticated user,redirect to the login page

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  // 3. While loading, show a spinner
  if (isLoading) {
    return <FullPageSpinner />;
  }

  // 4. if there is a user, render the app
  else if (isAuthenticated) {
    return children;
  }
}

export default ProtectedRoute;
