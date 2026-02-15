import React, { useState } from 'react';
import { Eye, EyeOff, LockKeyhole, X } from "lucide-react";
import { useProfileStore } from "../../../store/useProfileStore";
import Button from "../../../components/atoms/Button";
import InputLabel from "../../../components/molecules/InputLabel";
import { Link } from 'react-router-dom';

const ChangePasswordSetting = () => {
    const setChangePassword = useProfileStore((state) => state.setChangePassword);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center">
            <div
                className="w-full inset-0 bg-black/20 min-h-dvh flex justify-center items-center pt-16 pb-4"
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setChangePassword();
                    }
                }}
            >
                <div className="bg-white w-[90%] max-w-md rounded-md pb-5 z-50 shadow-xl animate-fadeIn" onClick={(e) => e.stopPropagation()}>
                    <div className="flex justify-between items-center px-5 py-3 border-b border-b-black/50">
                        <div className="flex justify-center items-center gap-2">
                            <LockKeyhole size="22"/>
                            <span className="font-inter font-medium text-h3">Sesuaikan Kata Sandi</span>
                        </div>
                        <Button onClick={() => setChangePassword()}><X /></Button>
                    </div>
                    <div className="grid grid-cols-1 gap-14 px-5 pt-5">
                        <div className="grid grid-cols-1 gap-3">
                            <div className="flex flex-col">
                                <InputLabel 
                                    label="Masukkan Kata Sandi Anda sekarang" 
                                    placeholder="Sandi sekarang..." 
                                    variant="white" 
                                    type={showCurrentPassword ? "text" : "password"} 
                                    endIcon={showCurrentPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                    onEndIconClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                />
                                <div className="text-end">
                                    <Link to="*" className="font-inter text-h5 underline text-black/70 w-fit">
                                        Lupa sandi
                                    </Link>
                                </div>
                            </div>
                            <InputLabel 
                                label="Masukkan Kata Sandi baru" 
                                placeholder="Sandi baru..." 
                                variant="white" 
                                type={showNewPassword ? "text" : "password"} 
                                endIcon={showNewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                onEndIconClick={() => setShowNewPassword(!showNewPassword)}
                            />
                            <InputLabel 
                                label="Konfirmasi Kata Sandi baru" 
                                placeholder="Konfirmasi kata sandi..." 
                                variant="white" 
                                type={showConfirmPassword ? "text" : "password"} 
                                endIcon={showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                onEndIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            />
                        </div>
                        <div className="flex justify-center items-center gap-10">
                            <Button variant="gray" onClick={() => {setChangePassword()}} className="h-8 w-20 rounded-xs font-inter text-h4">Batal</Button>
                            <Button variant="primary" className="h-8 w-20 rounded-xs font-inter text-h4">Simpan</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePasswordSetting