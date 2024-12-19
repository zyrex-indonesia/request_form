import React, { useEffect, useState } from "react";
import axios from "axios";
import BaseLayout from "../../components/layout/base"

const UserDashboard: React.FC = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8000/user/dashboard/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setForms(response.data);
    } catch (error) {
      console.error("Error fetching forms:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <BaseLayout>
    <div className="max-w-6xl mx-auto p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Submitted Forms</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Hari</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form: any) => (
            <tr key={form.id}>
              <td className="border border-gray-300 p-2 text-center">{form.id}</td>
              <td className="border border-gray-300 p-2">{form.hari}</td>
              <td className="border border-gray-300 p-2">{form.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </BaseLayout>
  );
};

export default UserDashboard;
