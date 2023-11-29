import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import usePostHook from "../../hook/usePost";

const SecurityPass = () => {
  const [loading, setLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const { handlePost } = usePostHook();
  const onSuccess = () => {
    setLoading(false);
    toast.success("Password changed successfully");
  };
  const handleSubmit = async () => {
    setLoading(true);
    const fd = new FormData();
    fd.append("old_password", oldPassword);
    fd.append("new_password", newPassword);
    fd.append("new_password_confirmation", newPassword2);
    handlePost(
      `admin/profile/update/password`,
      fd,
      `multipart/form-data`,
      onSuccess
    );
  };
  return (
    <>
      <div>
        <p className="fw-600 pb-2 px-2 border-b-2 border-[#E8EAED]">Password</p>
        <form>
          <div>
            <div className="py-12 border-b lg:pl-12">
              <div className="lg:flex items-center">
                <p className="lg:w-3/12">Current password</p>
                <div className="lg:w-7/12">
                  <div>
                    <input
                      type="password"
                      className="border border-gray-400 w-full mt-2 p-2 rounded"
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-12 border-b lg:pl-12">
              <div className="lg:flex items-center">
                <p className="lg:w-3/12">New password</p>
                <div className="lg:w-7/12">
                  <div>
                    <input
                      type="password"
                      className="border border-gray-400 w-full mt-2 p-2 rounded"
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <p className="mt-2 fs-200 text-[#5F5F5F] fw-500">
                    Your password must be more than 8 characters
                  </p>
                </div>
              </div>
            </div>
            <div className="py-12 border-b lg:pl-12">
              <div className="lg:flex items-center">
                <p className="lg:w-3/12">Confirm password</p>
                <div className="lg:w-7/12">
                  <input
                    type="password"
                    className="border border-gray-400 w-full mt-2 p-2 rounded"
                    onChange={(e) => setNewPassword2(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-12">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-3 bg-[#291670] font-semibold text-lg rounded text-white"
            >
              {loading ? `Submiting...` : `Submit`}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SecurityPass;
