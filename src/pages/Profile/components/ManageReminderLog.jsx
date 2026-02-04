import React from "react";

const ManageReminderLog = () => {
  return (
    <div className="h-screen w-full bg-white/10 backdrop-blur-sm fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-5">
      <Card
        className="flex flex-col items-center gap-3 py-8 relative"
        boxShadowActive={true}
        variant="white"
        size="full"
      ></Card>
    </div>
  );
};

export default ManageReminderLog;
