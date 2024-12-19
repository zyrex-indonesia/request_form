import React, { useState } from "react";
import BaseLayout from "../../components/layout/base"

const IzinJamForm: React.FC = () => {
  const [checkboxes, setCheckboxes] = useState({
    terlambat: false,
    pulangCepat: false,
    meninggalkanKerja: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxes((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <BaseLayout>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
        <h1 className="text-2xl font-bold mb-4 text-center">
            FORM IJIN JAM
        </h1>
        <form className="space-y-4">
            {/* Name and Department */}
            <div className="grid grid-cols-3 gap-4">
            <div>
                <label className="block text-sm font-medium">Nama</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
                <label className="block text-sm font-medium">Dept</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
                <label className="block text-sm font-medium">Status</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            </div>

            {/* Hari and Pertanggal */}
            <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium">Hari</label>
                <input type="date" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
                <label className="block text-sm font-medium">Pertanggal</label>
                <input type="date" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            </div>

            {/* Dari Jam and Sampai Jam */}
            <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium">Dari Jam</label>
                <input type="time" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
                <label className="block text-sm font-medium">Sampai Jam</label>
                <input type="time" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            </div>

            {/* Checkboxes */}
            <div>
            <label className="block text-sm font-medium mb-2">Pilih Ijin</label>
            <div className="flex items-center mb-2">
                <input
                type="checkbox"
                id="terlambat"
                name="terlambat"
                checked={checkboxes.terlambat}
                onChange={handleCheckboxChange}
                className="mr-2"
                />
                <label htmlFor="terlambat" className="text-sm">
                Izin Masuk Terlambat
                </label>
            </div>
            <div className="flex items-center mb-2">
                <input
                type="checkbox"
                id="pulangCepat"
                name="pulangCepat"
                checked={checkboxes.pulangCepat}
                onChange={handleCheckboxChange}
                className="mr-2"
                />
                <label htmlFor="pulangCepat" className="text-sm">
                Izin Pulang Cepat
                </label>
            </div>
            <div className="flex items-center">
                <input
                type="checkbox"
                id="meninggalkanKerja"
                name="meninggalkanKerja"
                checked={checkboxes.meninggalkanKerja}
                onChange={handleCheckboxChange}
                className="mr-2"
                />
                <label htmlFor="meninggalkanKerja" className="text-sm">
                Izin Meninggalkan Jam Kerja
                </label>
            </div>
            </div>

            {/* Keperluan */}
            <div>
            <label className="block text-sm font-medium">Keperluan</label>
            <textarea
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Isi keperluan"
            ></textarea>
            </div>

            {/* Lampiran */}
            <div>
            <label className="block text-sm font-medium">Lampiran / Bukti</label>
            <input
                type="file"
                className="w-full p-2 border border-gray-300 rounded"
            />
            </div>

            {/* Submit Button */}
            <div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
            </div>
        </form>
        </div>
    </BaseLayout>
  );
};

export default IzinJamForm;
