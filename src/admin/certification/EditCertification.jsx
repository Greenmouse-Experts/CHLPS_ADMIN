import React, {useState} from 'react'
import { toast } from 'react-toastify';
import usePostHook from '../../hook/usePost';

const EditCertification = ({item, refetch, close}) => {
  const [loading, setLoading] = useState(false);
  const [inputDetails, setInputDetails] = useState({
    title: item.title,
    first_time_amount: item.first_time_amount,
    recurring_amount: item.recurring_amount,
    description: item.description,
    id:item.id
  });
  const handleChange = (name, value) => {
    setInputDetails({ ...inputDetails, [name]: value });
  };
  const { handlePost } = usePostHook();
  const onSuccess = () => {
    setLoading(false);
    refetch();
    toast.success("Membership plan added successfully");
    close();
  };
  const handleSubmit = async () => {
    setLoading(true);
    handlePost(
      `admin/certifications/update`,
      inputDetails,
      `application/json`,
      onSuccess
    );
  };
  return (
    <div>
      <div>
        <label className="text-lg font-medium">Title</label>
        <input
          type="text"
          className="border border-gray-400 w-full mt-2 p-2 rounded"
          value={inputDetails.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label className="text-lg font-medium">First Time Amount</label>
        <input
          type="number"
          className="border border-gray-400 w-full mt-2 p-2 rounded"
          value={inputDetails.first_time_amount}
          onChange={(e) => handleChange("first_time_amount", e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label className="text-lg font-medium">Recurring Amount</label>
        <input
          type="number"
          className="border border-gray-400 w-full mt-2 p-2 rounded"
          value={inputDetails.recurring_amount}
          onChange={(e) => handleChange("recurring_amount", e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label className="text-lg font-medium">Description</label>
        <textarea
        value={inputDetails.description}
          className="border border-gray-400 w-full mt-2 p-2 rounded h-24"
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </div>
      <div className="mt-8">
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-3 bg-[#291670] font-semibold text-lg rounded text-white"
        >
          {loading ? `Submiting...` : `Submit`}
        </button>
      </div>
    </div>
  )
}

export default EditCertification