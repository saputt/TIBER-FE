import React from "react";
import ProfileCard from "./components/ProfileCard";
import SummaryCard from "./components/SummaryCard";
import SettingReminderCard from "./components/SettingReminderCard";
import HelpCard from "./components/HelpCard";
import NoteCard from "./components/NoteCard";
import ButtonTest from "../../components/atoms/ButtonTest";
import { LogOut } from "lucide-react";
import { useProfileStore } from "../../store/useProfileStore";
import ManageReminderLog from "./components/ManageReminderLog";
import ManageControl from "./components/ManageControl";
import { useLogout } from "../../hooks/useAuth";
import { useGetPersonalization } from "../../hooks/useProfile";
import { useAuthStore } from "../../store/useAuthStore";
import { FormatDate } from "../../utils/FormatDate";
import { usePersonalizationStore } from "../../store/usePersonalizationStore";
import Loading from "../../components/molecules/Loading";
import ProfileSkeleton from "./components/ProfileSkeleton";
import { useDashboardOverview } from "../../hooks/useDashboard";

import { useNavigate } from "react-router-dom";
import SuccessModal from "../../components/molecules/SuccessModal";
import { useState } from "react";

const ProfilePage = () => {
  const isDailyOpen = useProfileStore((state) => state.isDailyOpen);
  const isControlOpen = useProfileStore((state) => state.isControlOpen);
  const { mutate: logout, isPending } = useLogout();
  const { data, isLoading } = useGetPersonalization();
  const username = useAuthStore((state) => state.user?.fullname);
  const setPersonalization = usePersonalizationStore(
    (state) => state.setPersonalization,
  );

  const { data: dashboard, isLoading: dashboardLoading } = useDashboardOverview();

  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    logout({
      onSuccess: () => {
        setShowLogoutModal(true);
      },
    });
  };

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    navigate("/");
  };

  if (isLoading || dashboardLoading) {
    return <ProfileSkeleton />;
  }

  setPersonalization(data?.data);
  return (
    <div className="flex flex-col gap-4">
      {isDailyOpen && (
        <ManageReminderLog
          reminderTime={data?.data.reminder_time}
          reminderTimeDay={data?.data.time_category}
        />
      )}
      {isControlOpen && <ManageControl />}

      <ProfileCard
        name={username}
        duration={data?.data.duration_month}
        startDate={FormatDate(data?.data.start_date)}
      />
      <SummaryCard dayPass={dashboard?.data.days_passed} currentStreak={dashboard?.data.current_streak} totalDay={dashboard?.data.total_days} />
      <SettingReminderCard
        reminderTimeDay={data?.data.time_category}
        reminderTime={data?.data.reminder_time}
        checkup={FormatDate(data?.data.next_checkup_date)}
      />
      <HelpCard />
      <NoteCard />
      <ButtonTest
        variant="white"
        size="full"
        className="flex justify-center items-center text-h5"
        onClick={handleLogout}
      >
        <LogOut size={17} />
        {isPending ? "Sedang Keluar..." : "Keluar"}
      </ButtonTest>

      <SuccessModal
        isOpen={showLogoutModal}
        title="Sampai Jumpa Lagi!"
        description="Jangan lupa minum obat ya, walau Aku tidak sedang mendampingimu. Semangat sembuh!"
        buttonText="Ke Landing Page"
        onConfirm={handleLogoutConfirm}
      />
    </div>
  );
};

export default ProfilePage;
