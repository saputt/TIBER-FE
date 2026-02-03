import React from "react";
import ProfileCard from "./components/ProfileCard";
import SummaryCard from "./components/SummaryCard";

const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-4">
      <ProfileCard />
      <SummaryCard />
    </div>
  );
};

export default ProfilePage;
