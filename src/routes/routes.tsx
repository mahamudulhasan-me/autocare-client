import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import NotFoundLayout from "../layout/NotFoundLayout";
import AboutUsPage from "../pages/about/AboutUs";
import Login from "../pages/authentication/Login";
import CheckoutPage from "../pages/checkout";
import ContactUsPage from "../pages/contact";
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
import AdminProtectedRoute from "./AdminProtectedRoute";
import ProtectedRoute from "./ProtectedRoute";
import UserProtectedRoute from "./UserProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <NotFoundLayout />,
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
        path: "/contact",
        element: <ContactUsPage />,
      },
      {
        path: "/about",
        element: <AboutUsPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFoundLayout />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard/admin",
        element: (
          <AdminProtectedRoute>
            <AdminDashboard />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/dashboard/admin/services",
        element: (
          <AdminProtectedRoute>
            <AdminServices />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/dashboard/admin/slots",
        element: (
          <AdminProtectedRoute>
            <AdminSlots />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/dashboard/admin/users-bookings",
        element: (
          <AdminProtectedRoute>
            <UserBooking />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/dashboard/admin/users-management",
        element: (
          <AdminProtectedRoute>
            <AdminUserManagement />
          </AdminProtectedRoute>
        ),
      },
      {
        path: "/dashboard/user",
        element: (
          <UserProtectedRoute>
            <AdminDashboard />
          </UserProtectedRoute>
        ),
      },
      {
        path: "/dashboard/user/booked-slots",
        element: (
          <UserProtectedRoute>
            <BookedSlot />
          </UserProtectedRoute>
        ),
      },
      {
        path: "/dashboard/user/profile",
        element: (
          <UserProtectedRoute>
            <UserProfile />
          </UserProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
