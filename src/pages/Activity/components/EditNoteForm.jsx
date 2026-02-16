import React, { useState, useEffect } from "react";
import Button from "../../../components/atoms/Button";
import InputLabel from "../../../components/molecules/InputLabel";
import { Calendar, X } from "lucide-react";
import { useActivityStore } from "../../../store/useActivityStore";
import NoteCard from "./NoteCard";
import { useEditDailyNotes } from "../../../hooks/useActivity";

const EditNoteForm = ({ initialData }) => {
  const setCatatan = useActivityStore((state) => state.setCatatan);
  const [noteText, setNoteText] = useState(initialData?.notes || "");
  const [selectedStatus, setSelectedStatus] = useState(
    initialData?.status || "",
  );
  const [selectedColor, setSelectedColor] = useState(
    initialData?.color_status || "gray",
  );

  const today = initialData?.created_at
    ? new Date(initialData.created_at).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    : "24 Jan 2026";

  const { mutate: editDailyNotes } = useEditDailyNotes();

  const handleEditNote = (e) => {
    e.preventDefault();

    editDailyNotes({
      id: initialData?.id,
      status: selectedStatus,
      color_status: selectedColor,
      notes: noteText,
    });

    setCatatan();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto">
      <div
        className="w-full inset-0 bg-black/40 min-h-dvh flex justify-center items-center py-4 md:pt-16"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setCatatan();
          }
        }}
      >
        <div
          className="relative bg-white w-[95%] md:w-full max-w-md rounded-2xl px-4 md:px-5 pb-5 z-50 shadow-xl animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative flex items-end justify-center mb-4">
            <div className="flex items-center justify-center gap-1.5 bg-primary w-37.5 h-7 rounded-b-md shadow-md">
              <Calendar size="16" className="text-white"></Calendar>
              <span className="font-inter font-medium text-h5 leading-none text-white">
                {today}
              </span>
            </div>
            <Button
              className="absolute right-0 top-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setCatatan()}
            >
              <X size={20} className="text-gray-500" />
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex flex-col gap-2">
              <span className="text-h6 font-inter text-gray-400 font-medium uppercase tracking-wider text-center">
                Live Preview
              </span>
              <div className="pointer-events-none select-none transform scale-95 origin-top transition-all duration-300">
                <NoteCard
                  date={today}
                  status={selectedStatus}
                  statusColor={selectedColor}
                  note={noteText}
                />
              </div>
            </div>

            <hr className="border-gray-100" />

            <form onSubmit={handleEditNote}>
              <div className="flex flex-col gap-4 my-3">
                <div className="grid grid-cols-1 gap-2">
                  <InputLabel
                    label="Nama Status"
                    variant="white"
                    placeholder="Cth: Membaik, Pusing..."
                    className="text-h4"
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <span className="text-h4 font-inter font-semibold">
                    Warna Label
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-green-50 transition-colors border border-transparent hover:border-green-100 has-[:checked]:bg-green-50 has-[:checked]:border-green-200">
                      <input
                        type="radio"
                        name="warna_status"
                        className="accent-primary w-4 h-4"
                        checked={selectedColor === "hijau"}
                        onChange={() => setSelectedColor("hijau")}
                      />
                      <span className="font-inter text-h5 text-gray-700">
                        Hijau
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100 has-[:checked]:bg-blue-50 has-[:checked]:border-blue-200">
                      <input
                        type="radio"
                        name="warna_status"
                        className="accent-blue-500 w-4 h-4"
                        checked={selectedColor === "biru"}
                        onChange={() => setSelectedColor("biru")}
                      />
                      <span className="font-inter text-h5 text-gray-700">
                        Biru
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-yellow-50 transition-colors border border-transparent hover:border-yellow-100 has-[:checked]:bg-yellow-50 has-[:checked]:border-yellow-200">
                      <input
                        type="radio"
                        name="warna_status"
                        className="accent-yellow-500 w-4 h-4"
                        checked={selectedColor === "kuning"}
                        onChange={() => setSelectedColor("kuning")}
                      />
                      <span className="font-inter text-h5 text-gray-700">
                        Kuning
                      </span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <span className="text-h4 font-inter font-semibold">
                    Catatan
                  </span>
                  <textarea
                    className="w-full p-3 bg-gray-50 text-black border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-inter text-h5 leading-relaxed placeholder:text-gray-400"
                    rows={4}
                    placeholder="Tulis perkembangan kesehatanmu di sini..."
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <Button
                variant="primary"
                type="submit"
                size="full"
                className="py-2.5 text-h5 font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] transition-all"
              >
                Simpan Perubahan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNoteForm;
