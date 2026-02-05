import { Pencil } from "lucide-react";
import React from "react";

const ProfileInfoSetting = () => {
  return (
    <div>
      <div className="w-14 h-14 aspect-square rounded-full bg-primary flex items-center justify-center text-h1 font-semibold text-white">
        S
      </div>

      <div className="flex items-center gap-1">
        <p className="text-h5 font-medium">Sauki</p>
        <Pencil size={10} />
      </div>
    </div>
  );
};

export default ProfileInfoSetting;
