import React from "react";

const IzinTidakMasukForm: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">
        FORM IJIN TIDAK MASUK KERJA
      </h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nama</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Jabatan</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Keperluan</label>
          <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default IzinTidakMasukForm;
