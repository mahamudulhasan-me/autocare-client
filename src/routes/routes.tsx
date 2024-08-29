import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/authentication/Login";
import AdminDashboard from "../pages/dashboard/adminDashboard/AdminDashboard";
import AdminServices from "../pages/dashboard/adminDashboard/serviceManagement/AdminServices";
import AdminSlots from "../pages/dashboard/adminDashboard/slotManagement/AdminSlots";
import AdminUserManagement from "../pages/dashboard/adminDashboard/AdminUserManagement";
import HomePage from "../pages/home";

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
        path: "/login",
        element: <Login />,
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
        path: "/dashboard/admin/users",
        element: <AdminUserManagement />,
      },
      {
        path: "/dashboard/user",
        element: <AdminDashboard />,
      },
    ],
  },
]);

export default router;
