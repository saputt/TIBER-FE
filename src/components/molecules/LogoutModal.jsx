import React from "react";
import Card from "../atoms/Card";
import Button from "../atoms/Button";

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200">
            <Card
                variant="white"
                className="w-full max-w-sm p-6 space-y-6 shadow-xl"
                padding="p-6"
            >
                <div className="space-y-2 text-center">
                    <h3 className="text-h3 font-bold text-gray-900">Konfirmasi Keluar</h3>
                    <p className="text-gray-500 text-h5">
                        Apakah Anda yakin ingin keluar dari aplikasi?
                    </p>
                </div>

                <div className="flex gap-3">
                    <Button
                        variant="gray"
                        size="full"
                        onClick={onClose}
                        className="font-semibold py-2.5"
                    >
                        Batal
                    </Button>
                    <Button
                        variant="primary"
                        size="full"
                        onClick={onConfirm}
                        className="font-semibold py-2.5 shadow-lg shadow-primary/20"
                    >
                        Keluar
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default LogoutModal;
