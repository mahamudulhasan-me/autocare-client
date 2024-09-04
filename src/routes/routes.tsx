import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/authentication/Login";
import CheckoutPage from "../pages/checkout";
import AdminDashboard from "../pages/dashboard/adminDashboard/AdminDashboard";
import AdminServices from "../pages/dashboard/adminDashboard/serviceManagement/AdminServices";
import AdminSlots from "../pages/dashboard/adminDashboard/slotManagement/AdminSlots";
import UserBooking from "../pages/dashboard/adminDashboard/user/BookingAllUsers";
import AdminUserManagement from "../pages/dashboard/adminDashboard/user/UserManagement";
import UserProfile from "../pages/dashboard/profile/UserProfile";
import BookedSlot from "../pages/dashboard/userDashboard/bookedSlot/BookedSlot";
import HomePage from "../pages/home";
import ServicePage from "../pages/services";
import ServiceDetails from "../pages/services/serviceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/services/:slugId",
        element: <ServiceDetails />,
      },
      {
        path: "/services/:slug/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/payment/success",
        element: <div>success</div>,
      },
      {
        path: "/payment/failure",
        element: <div>failure</div>,
      },
      {
        path: "/payment/processing",
        element: <div>processing</div>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/admin",
        element: <AdminDashboard />,
      },
      {
        path: "/dashboard/admin/services",
        element: <AdminServices />,
      },
      {
        path: "/dashboard/admin/slots",
        element: <AdminSlots />,
      },
      {
        path: "/dashboard/admin/users-bookings",
        element: <UserBooking />,
      },
      {
        path: "/dashboard/admin/users-management",
        element: <AdminUserManagement />,
      },
      {
        path: "/dashboard/user",
        element: <AdminDashboard />,
      },
      {
        path: "/dashboard/user/booked-slots",
        element: <BookedSlot />,
      },
      {
        path: "/dashboard/user/profile",
        element: <UserProfile />,
      },
    ],
  },
]);

export default router;
