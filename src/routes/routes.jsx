import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/Landing";
import ActivityPage from "../pages/Activity";
import ProgressPage from "../pages/Progress";
import ProfilePage from "../pages/Profile";
import DashboardPage from "../pages/Dashboard";
import NotFoundPage from "../pages/404";
import RegisterPage from "../pages/Auth/Register";
import LoginPage from "../pages/Auth/Login";
import OnboardingPage from "../pages/Onboarding";
import AppLayout from "../components/templates/AppLayout";

const router = createBrowserRouter([
  //auth page
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

  //onboarding (personalization)
  {
    path: "/onboarding",
    element: <OnboardingPage />,
  },

  {
    path: "/",
    element: <AppLayout />,
    children: [
      //landing page
      {
        path: "/",
        element: <LandingPage />,
      },

      //activity page
      {
        path: "/activity",
        element: <ActivityPage />,
      },

      //progress page
      {
        path: "/progress",
        element: <ProgressPage />,
      },

      //profile page
      {
        path: "/profile",
        element: <ProfilePage />,
      },

      //home page (dashboard)
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },

  //404 page
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
