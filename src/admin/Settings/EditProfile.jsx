import React, { useState } from "react";
import usePostHook from "../../hook/usePost";
import { toast } from "react-toastify";

const EditProfile = ({ data, close, refetch }) => {
  const [loading, setLoading] = useState(false);
  const [fname, setFname] = useState(data?.first_name);
  const [lname, setLname] = useState(data?.last_name);
  const [email, setEmail] = useState(data?.email);
  const [phone, setPhone] = useState(data?.phone_number);
  const { handlePost } = usePostHook();
  const onSuccess = () => {
    toast.success("Profile updated successfully");
    setLoading(false);
    close()
    refetch();
  };
  const handleUpateProfile = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("first_name", fname);
    formData.append("last_name", lname);
    formData.append("email", email);
    formData.append("phone_number", phone);
    handlePost(
      `admin/profile/update`,
      formData,
      "multipart/form-data",
      onSuccess
    );
  };
  return (
    <div>
      <form>
        <div className="w-full">
          <p className="fs-400 text-primary">First Name:</p>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            className="border-b w-full bg-transparent p-2"
          />
        </div>
        <div className="w-full mt-3">
          <p className="fs-400 text-primary">Last Name:</p>
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            className="border-b w-full bg-transparent p-2"
          />
        </div>
        <div className="w-full mt-3">
          <p className="fs-400 text-primary">Email:</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b w-full bg-transparent p-2"
          />
        </div>
        <div className="w-full mt-3">
          <p className=" text-primary">Phone:</p>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-b w-full bg-transparent p-2"
          />
        </div>
        <div className="flex justify-end mt-6">
        <button
            type="button"
          className="px-6 py-2 border border-green-600 bg-blue-800 text-white font-semibold rounded-lg"
          onClick={handleUpateProfile}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
