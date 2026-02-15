import React from "react";
import Card from "../atoms/Card";
import Button from "../atoms/Button";

const SuccessModal = ({ isOpen, title, description, buttonText, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <Card className="bg-white w-full max-w-sm rounded-[20px] pt-5 pb-5 shadow-xl relative animate-in zoom-in-95 duration-300 flex flex-col items-center gap-4 text-center">
                <div className="flex flex-col gap-2">
                    <h3 className="text-h3 font-bold text-gray-900">{title}</h3>
                    {description && <p className="text-gray-500 text-h5">{description}</p>}
                </div>

                <Button
                    variant="primary"
                    size="full"
                    className="mt-2 font-semibold text-h5"
                    onClick={onConfirm}
                >
                    {buttonText}
                </Button>
            </Card>
        </div>
    );
};

export default SuccessModal;
