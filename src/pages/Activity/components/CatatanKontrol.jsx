import React, { useEffect } from "react";
import Card from "../../../components/atoms/Card";
import { Plus, Pencil } from "lucide-react";
import Button from "../../../components/atoms/Button";
import { useActivityStore } from "../../../store/useActivityStore";
import NoteCard from "./NoteCard";
import AddNoteForm from "./AddNoteForm";
import { useGetDailyNotes } from "../../../hooks/useActivity";

const CatatanKontrol = ({ data }) => {
  const setCatatan = useActivityStore((state) => state.setCatatan);
  const isCatatanOpen = useActivityStore((state) => state.isCatatanOpen);
  const { data: dailyNotes, isLoading } = useGetDailyNotes();

  if (isLoading) return;

  console.log(dailyNotes);
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

  // Dummy data with varying lengths to demonstrate Masonry layout
  const notes = [
    {
      id: 1,
      date: "24 Jan 2026",
      status: "Positif",
      statusColor: "green",
      note: "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    },
    {
      id: 2,
      date: "25 Jan 2026",
      status: "Netral",
      statusColor: "blue",
      note: "Tidak ada keluhan berarti. Masih rutin minum obat.",
    },
    {
      id: 3,
      date: "26 Jan 2026",
      status: "Waspada",
      statusColor: "yellow",
      note: "Sedikit mual setelah makan siang. Perlu diobservasi apakah karena makanan atau efek obat. Jika berlanjut akan konsul dokter. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      id: 4,
      date: "27 Jan 2026",
      status: "Belum dicatat",
      statusColor: "gray",
      note: "",
    },
    {
      id: 5,
      date: "28 Jan 2026",
      status: "Positif",
      statusColor: "green",
      note: "Badan terasa segar bugar.",
    },
    {
      id: 6,
      date: "29 Jan 2026",
      status: "Waspada",
      statusColor: "yellow",
      note: "Ada sedikit nyeri di persendian lutut. Mungkin karena cuaca dingin atau kelelahan. Perlu istirahat cukup malam ini. Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <>
      <Card size="full" variant="white" boxShadowActive={true} className="py-5">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-1">
            <div className="flex flex-col gap-1">
              <span className="font-inter font-semibold text-h4 text-gray-900">
                Catatan Kontrol
              </span>
              <span className="font-inter font-light text-h6 text-gray-500">
                Ringkasan singkat dari setiap kontrol.
              </span>
            </div>
            {/* Desktop Add Button */}
            <div className="hidden md:block">
              <Button
                variant="primary"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all"
                onClick={() => setCatatan()}
              >
                <Plus size={18} strokeWidth={2.5} />
                <span className="text-h5 font-bold">Tulis Catatan</span>
              </Button>
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="relative min-h-[200px]">
            {/* Timeline Line (Desktop Only) */}
            <div className="absolute left-4 top-0 h-full w-px bg-gray-200 z-0 hidden lg:block"></div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
              {dailyNotes?.data.map((note) => (
                <div key={note.id} className="break-inside-avoid mb-5">
                  <NoteCard
                    date={note.created_at}
                    status={note.status}
                    statusColor={note.color_status}
                    note={note.notes}
                    onClick={() => setCatatan()}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {notes.length === 0 && (
            <div className="flex flex-col items-center justify-center py-10 text-gray-400">
              <p className="italic">Belum ada catatan.</p>
            </div>
          )}
        </div>
      </Card>

      {/* Mobile Floating Action Button (FAB) */}
      <div className="md:hidden fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Button
          variant="primary"
          className="w-14 h-14 rounded-full shadow-xl shadow-primary/40 flex items-center justify-center p-0 transition-transform active:scale-95 hover:scale-105"
          onClick={() => setCatatan()}
          aria-label="Add Note"
        >
          <Pencil size={24} className="text-white" strokeWidth={2.5} />
        </Button>
      </div>

      {/* Add Note Modal */}
      {isCatatanOpen && <AddNoteForm />}
    </>
  );
};

export default CatatanKontrol;
