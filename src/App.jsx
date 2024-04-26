import { lazy } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DarkModeProvider from "./contexts/DarkMode";
const AddBooking = lazy(() => import("./pages/AddBooking"));
const AddCabin = lazy(() => import("./pages/AddCabin"));
const AddGuest = lazy(() => import("./pages/AddGuest"));
const AllGuests = lazy(() => import("./pages/AllGuests"));
const Booking = lazy(() => import("./pages/Booking"));
const Bookings = lazy(() => import("./pages/Bookings"));
const Cabins = lazy(() => import("./pages/Cabins"));
const Checkin = lazy(() => import("./pages/Checkin"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));
import PageNotFound from "./pages/PageNotFound";
const Settings = lazy(() => import("./pages/Settings"));
const Users = lazy(() => import("./pages/Users"));
import GlobalStyles from "./styles/GlobalStyling";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
const Account = lazy(() => import("./pages/Account"));

const client = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route
                path="bookings"
                // there is no path called bookings
                element={<Navigate replace to="all" />}
              />
              <Route path="bookings/all" element={<Bookings />} />
              <Route path="bookings/addBooking" element={<AddBooking />} />
              <Route
                path="cabins"
                // there is no path called cabins
                element={<Navigate replace to="all" />}
              />
              <Route path="cabins/all" element={<Cabins />} />
              <Route path="cabins/addCabin" element={<AddCabin />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
              <Route path="booking/:bookingId" element={<Booking />}></Route>
              <Route path="checkin/:bookingId" element={<Checkin />}></Route>
              <Route
                // there is no path called guests
                path="guests"
                element={<Navigate replace to="all" />}
              />
              <Route path="guests/all" element={<AllGuests />} />
              <Route path="guests/addGuest" element={<AddGuest />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          poition="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "1rem",
              maxWidth: "500px",
              padding: "1rem 1.5rem",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
