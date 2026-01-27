import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Auth/login";
import RegisterPage from "../pages/Auth/register";
import OnboardingPage from "../pages/Auth/onboarding";
import LandingPage from "../pages/Landing";
import ActivityPage from "../pages/Activity";
import ProgressPage from "../pages/Progress";
import ProfilePage from "../pages/Profile";
import DashboardPage from "../pages/Dashboard";
import NotFoundPage from "../pages/404";

const router = createBrowserRouter([
    //auth page
    {
        path : '/login',
        element : <LoginPage/>
    },
    {
        path : '/register',
        element : <RegisterPage/>
    },

    //onboarding (personalization)
    {
        path : '/onboarding',
        element : <OnboardingPage/>
    },

    //landing page
    {
        path : '/',
        element : <LandingPage/>
    },

    //activity page
    {
        path : '/activity',
        element : <ActivityPage/>
    },

    //progress page
    {
        path : '/progress',
        element : <ProgressPage/>
    },

    //profile page
    {
        path : '/profile',
        element : <ProfilePage/>
    },

    //home page (dashboard)
    {
        path : '/dashboard',
        element : <DashboardPage/>
    },

    //404 page
    {
        path : '*',
        element : <NotFoundPage/>
    }
])

export default router