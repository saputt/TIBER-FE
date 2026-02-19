import React, { useState, useEffect } from "react";
import Card from "../../../components/atoms/Card";
import { Plus, Pencil } from "lucide-react";
import Button from "../../../components/atoms/Button";
import { useActivityStore } from "../../../store/useActivityStore";
import NoteCard from "./NoteCard";
import AddNoteForm from "./AddNoteForm";
import EditNoteForm from "./EditNoteForm";
import { useGetDailyNotes } from "../../../hooks/useActivity";
import DailyJournalSkeleton from "./DailyJournalSkeleton";

const DailyJournal = () => {
    const setCatatan = useActivityStore((state) => state.setCatatan);
    const isCatatanOpen = useActivityStore((state) => state.isCatatanOpen);
    const { data: dailyNotes, isLoading } = useGetDailyNotes();
    const [selectedNote, setSelectedNote] = useState(null);

    useEffect(() => {
        if (isCatatanOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isCatatanOpen]);

    if (isLoading) return <DailyJournalSkeleton />;

    const handleAddUser = () => {
        setSelectedNote(null);
        setCatatan();
    };

    const handleEditUser = (note) => {
        setSelectedNote(note);
        setCatatan();
    };

    return (
        <>
            <Card size="full" variant="white" boxShadowActive={true} className="py-5">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-1">
                        <div className="flex flex-col gap-1">
                            <span className="font-inter font-semibold text-h4 text-gray-900">
                                Catatan
                            </span>
                            <span className="font-inter font-light text-h6 text-gray-500">
                                Catatan harian kamu
                            </span>
                        </div>
                        <div className="hidden md:block">
                            <Button
                                variant="primary"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all"
                                onClick={handleAddUser}
                            >
                                <Plus size={18} strokeWidth={2.5} />
                                <span className="text-h5 font-bold">Tulis Catatan</span>
                            </Button>
                        </div>
                    </div>

                    <div className="relative min-h-[200px]">
                        {/* <div className="absolute left-4 top-0 h-full w-px bg-gray-200 z-0 hidden lg:block"></div> */}

                        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
                            {dailyNotes?.data.map((note) => (
                                <div key={note.id} className="break-inside-avoid mb-5">
                                    <NoteCard
                                        date={new Date(note.created_at).toLocaleDateString(
                                            "id-ID",
                                            { day: "2-digit", month: "short", year: "numeric" },
                                        )}
                                        status={note.status}
                                        statusColor={note.color_status}
                                        note={note.notes}
                                        onClick={() => handleEditUser(note)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {dailyNotes?.data.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                            <p className="italic">Belum ada catatan.</p>
                        </div>
                    )}
                </div>
            </Card>

            <div className="md:hidden fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Button
                    variant="primary"
                    className="w-14 h-14 rounded-full shadow-xl shadow-primary/40 flex items-center justify-center p-0 transition-transform active:scale-95 hover:scale-105"
                    onClick={handleAddUser}
                    aria-label="Add Note"
                >
                    <Pencil size={24} className="text-white" strokeWidth={2.5} />
                </Button>
            </div>

            {isCatatanOpen &&
                (selectedNote ? (
                    <EditNoteForm initialData={selectedNote} />
                ) : (
                    <AddNoteForm />
                ))}
        </>
    );
};

export default DailyJournal;
