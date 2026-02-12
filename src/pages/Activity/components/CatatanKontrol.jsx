import React from 'react';
import Card from '../../../components/atoms/Card';
import Badge from '../../../components/atoms/Badge';
import { Calendar, Pencil, X } from 'lucide-react';
import Button from "../../../components/atoms/Button";
import { useState, useEffect } from 'react';
import InputLabel from "../../../components/molecules/InputLabel";

const CatatanKontrol = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            <Card size="full" variant="white" boxShadowActive="true" className="py-5">
                <div className="flex flex-col gap-2.5">
                    <div className="flex flex-col gap-0.5">
                        <span className='font-inter font-semibold text-h4'>Catatan Kontrol</span>
                        <span className='font-inter font-light text-h6'>Ringkasan singkat dari setiap kontrol. Tidak harus panjang</span>
                    </div>
                    <div className="relative">
                        <div className="absolute left-4 top-0 h-full w-px bg-black/15 z-0"></div>
                        <div className="grid grid-cols-1 gap-5">
                            <Card variant="gray" size="full" className="rounded-lg flex flex-col gap-4 min-h-fit py-1 relative z-10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size="16"></Calendar>
                                        <span className='font-inter font-medium text-h6 leading-none'>Kontrol • 24 Jan 2026</span>
                                    </div>
                                    <Badge variant="gray" className="font-inter font-medium text-h7 w-17">
                                        Belum dicatat
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="primary" className="p-1.5" onClick={() => setIsOpen(true)}><Pencil size="16"/></Button>
                                    <Card variant="gray" size="full" className="rounded-lg min-h-20 flex justify-center items-center mb-2">
                                        <span className='font-inter text-h6'>Belum ada catatan</span>
                                    </Card>
                                </div>
                            </Card>
                            <Card variant="gray" size="full" className="rounded-lg flex flex-col gap-4 min-h-fit py-1 relative z-10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size="16"></Calendar>
                                        <span className='font-inter font-medium text-h6 leading-none'>Kontrol • 24 Jan 2026</span>
                                    </div>
                                    <Badge variant="primary" className="font-inter font-medium text-h7 w-17">
                                        Membaik
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="primary" className="p-1.5" onClick={() => setIsOpen(true)}><Pencil size="16"/></Button>
                                    <Card variant="primary" size="full" className="rounded-lg min-h-20 flex justify-center items-center mb-2">
                                        <span className='font-inter text-h6'>Belum ada catatan</span>
                                    </Card>
                                </div>
                            </Card>
                            <Card variant="gray" size="full" className="rounded-lg flex flex-col gap-4 min-h-fit py-1 relative z-10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size="16"></Calendar>
                                        <span className='font-inter font-medium text-h6 leading-none'>Kontrol • 24 Jan 2026</span>
                                    </div>
                                    <Badge variant="darkBlue" className="font-inter font-medium text-h7 w-17">
                                        Stabil
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="primary" className="p-1.5" onClick={() => setIsOpen(true)}><Pencil size="16"/></Button>
                                    <Card variant="Blue" size="full" className="rounded-lg min-h-20 flex justify-center items-center mb-2">
                                        <span className='font-inter text-h6'>Belum ada catatan</span>
                                    </Card>
                                </div>
                            </Card>
                            <Card variant="gray" size="full" className="rounded-lg flex flex-col gap-4 min-h-fit py-1 relative z-10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size="16"></Calendar>
                                        <span className='font-inter font-medium text-h6 leading-none'>Kontrol • 24 Jan 2026</span>
                                    </div>
                                    <Badge variant="darkYellow" className="font-inter font-medium text-h7 w-17">
                                        Dipantau
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="primary" className="p-1.5" onClick={() => setIsOpen(true)}><Pencil size="16"/></Button>
                                    <Card variant="yellow" size="full" className="rounded-lg min-h-20 flex justify-center items-center mb-2">
                                        <span className='font-inter text-h6'>Belum ada catatan</span>
                                    </Card>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </Card>

            {isOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto">
                    <div
                        className="w-full inset-0 bg-black/40 min-h-dvh flex justify-center items-center pt-16 pb-4"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                setIsOpen(false);
                            }
                        }}
                    >
                        <div className="relative bg-white w-[90%] max-w-md rounded-2xl px-5 pb-5 z-50 shadow-xl animate-fadeIn" onClick={(e) => e.stopPropagation()}>
                            <div className="relative flex items-end justify-center mb-4">
                                <div className="flex items-center justify-center gap-1.5 bg-primary w-37.5 h-7 rounded-b-md">
                                    <Calendar size="16" className='text-white'></Calendar>
                                    <span className='font-inter font-medium text-h5 leading-none text-white'>24 Jan 2026</span>
                                </div>
                                <Button className="absolute right-0 top-2" onClick={() => setIsOpen(false)}><X /></Button>
                            </div>
                            <div className="space-y-4">
                                <Card variant="gray" size="full" className="rounded-lg flex flex-col gap-4 min-h-fit py-1 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size="16"></Calendar>
                                            <span className='font-inter font-medium text-h6 leading-none'>Kontrol • 24 Jan 2026</span>
                                        </div>
                                        <Badge variant="gray" className="font-inter font-medium text-h7 w-17">
                                            Belum dicatat
                                        </Badge>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button variant="primary" className="p-1.5"><Pencil size="16"/></Button>
                                        <Card variant="gray" size="full" className="rounded-lg min-h-20 flex justify-center items-center mb-2">
                                            <span className='font-inter text-h6'>Belum ada catatan</span>
                                        </Card>
                                    </div>
                                </Card>
                                <InputLabel label="Status" variant="white" placeholder="Status..." className="text-h4"/>
                                <div className="grid grid-cols-1 gap-1.5">
                                    <span className="text-h4 font-inter">Warna Status</span>
                                    <div className="grid grid-cols-1 gap-1">
                                        <div className="flex items-center gap-1">
                                            <input type="radio" id="positif" name="warna_status" value="Positif"/>
                                            <label for="positif" className='font-inter text-h5'>Hijau - Positif</label>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <input type="radio" id="netral" name="warna_status" value="Positif" />
                                            <label for="netral" className='font-inter text-h5'>Biru - Netral</label>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <input type="radio" id="waspada" name="warna_status" value="Positif" />
                                            <label for="waspada" className='font-inter text-h5'>Kuning - Waspada</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-1.5">
                                    <span className="text-h4 font-inter">Warna Status</span>
                                    <textarea className="w-full p-3 bg-white text-black border border-gray-400 rounded-lg resize-none focus:outline-black font-inter text-h4" rows={4} placeholder="Tulis sesuatu di sini..."></textarea>
                                </div>
                                <Button variant="primary" size="full" className="py-1.5! text-h5 rounded-md">Simpan</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CatatanKontrol