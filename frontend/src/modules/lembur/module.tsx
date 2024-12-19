import React from "react";

const LemburForm: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">
        FORM LEMBUR
      </h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Tanggal</label>
          <input type="date" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Nama Karyawan</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Jam Lembur</label>
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

export default LemburForm;
