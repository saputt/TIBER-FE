import React from 'react';
import { Pencil, UserRoundPen, X } from "lucide-react";
import { useProfileStore } from "../../../store/useProfileStore";
import Button from "../../../components/atoms/Button";
import InputLabel from "../../../components/molecules/InputLabel";

const FullNameSetting = () => {
    const setFullName = useProfileStore((state) => state.setFullName);

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center">
            <div
                className="w-full inset-0 bg-black/20 min-h-dvh flex justify-center items-center pt-16 pb-4"
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setFullName();
                    }
                }}
            >
                <div className="bg-white w-[90%] max-w-md rounded-md pb-5 z-50 shadow-xl animate-fadeIn" onClick={(e) => e.stopPropagation()}>
                    <div className="flex justify-between items-center px-5 py-3 border-b border-b-black/50">
                        <div className="flex justify-center items-center gap-2">
                            <UserRoundPen size="22"/>
                            <span className="font-inter font-medium text-h3">Nama Lengkap</span>
                        </div>
                        <Button onClick={() => setFullName()}><X /></Button>
                    </div>
                    <div className="grid grid-cols-1 gap-10 px-5 pt-5">
                        <InputLabel label="Nama Lengkap" placeholder="Nama Lengkap..." variant="white" />
                        <div className="flex justify-center items-center gap-10">
                            <Button variant="gray" onClick={() => {setFullName()}} className="h-8 w-20 rounded-xs font-inter text-h4">Batal</Button>
                            <Button variant="primary" className="h-8 w-20 rounded-xs font-inter text-h4">Simpan</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullNameSetting