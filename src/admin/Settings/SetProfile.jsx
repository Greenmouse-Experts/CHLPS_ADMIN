import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import EditProfile from "./EditProfile";
import useModal from "../../hook/useModal";
import useGetHook from "../../hook/useGet";
import { BsFillCameraFill } from "react-icons/bs";
import usePostHook from "../../hook/usePost";
import { toast } from "react-toastify";
import Initials from "../../components/initials";
// import EditProfile from "./EditProfile";

const ProfileSettings = () => {
  const { data: user, refetch } = useGetHook("admin/profile");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState();
  const [isBusy, setIsBusy] = useState(false);
  const { Modal, setShowModal } = useModal();
  const { handlePost } = usePostHook();
  const onSuccess = () => {
    toast.success("Profile updated successfully");
    setLoading(false);
    refetch();
  };
  const changeProfileImage = async (e) => {
    setIsBusy(true);
    e.preventDefault();
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);
    const formData = new FormData();
    formData.append("avatar", e.target.files[0]);
    handlePost(
      `admin/profile/upload/profile-picture`,
      formData,
      "multipart/form-data",
      onSuccess
    );
  };
  console.log(loading)
  return (
    <>
      <div className="border border-[#E8EAED] rounded-[15px] p-6 flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div>
            {user?.data?.avatar ? (
              <div className="relative z-0 w-[100px] h-[100px]">
                <img
                  src={preview ? preview : user?.data?.avatar}
                  alt="profile"
                  width={100}
                  height={100}
                  className="rounded-[80px] border w-full h-full mx-auto"
                />
                <p className="w-8 h-8 rounded-[80px] grid place-content-center bg-white absolute overflow-hidden z-10 -bottom-[5px] right-[0px] border cursor-pointer">
                  {isBusy ? (
                    ""
                  ) : (
                    <BsFillCameraFill className="text-primary relative" />
                  )}
                  <input
                    type="file"
                    onChange={(e) => changeProfileImage(e)}
                    className="w-full h-full absolute z-10 opacity-0 cursor-pointer"
                  />
                </p>
              </div>
            ) : (
              <div className="text-white relative font-semibold">
                <Initials
                  name={`${user?.data?.first_name} ${user?.data?.last_name}`}
                  size={80}
                  text="25"
                />
                <p className="w-8 h-8 rounded-[80px] grid place-content-center bg-white absolute overflow-hidden z-10 -bottom-[10px] right-[0px] border cursor-pointer">
                  {isBusy ? (
                    ""
                  ) : (
                    <BsFillCameraFill className="text-black relative" />
                  )}
                  <input
                    type="file"
                    onChange={(e) => changeProfileImage(e)}
                    className="w-full h-full absolute z-10 opacity-0 cursor-pointer"
                  />
                </p>
              </div>
            )}
          </div>
          <div>
            <p className="fw-600 fs-500 capitalize">
              {user?.data?.first_name} {user?.data?.last_name}
            </p>
            <p className="fs-300 mt-1">Super admin, Nigeria.</p>
          </div>
        </div>
        <div
          className="flex gap-x-2 items-center p-1 px-2 rounded-[15px] border border-[#5F5F5F] cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <p>Edit</p>
          <AiOutlineEdit />
        </div>
      </div>
      <div className="border border-[#E8EAED] rounded-[15px] p-6 mt-6">
        <p className="fw-600">Personal Information</p>
        <div className="grid lg:grid-cols-2 lg:w-10/12 gap-6 mt-6">
          <div className="">
            <p className="text-[#5F5F5F] fw-500 fs-400">First Name</p>
            <p className="mt-2 fw-500 capitalize">{user?.data?.first_name}</p>
          </div>
          <div className="">
            <p className="text-[#5F5F5F] fw-500 fs-400">Last Name</p>
            <p className="mt-2 fw-500 capitalize">{user?.data?.last_name}</p>
          </div>
          <div className="">
            <p className="text-[#5F5F5F] fw-500 fs-400">Email address</p>
            <p className="mt-2 fw-500">{user?.data?.email}</p>
          </div>
          <div className="">
            <p className="text-[#5F5F5F] fw-500 fs-400">Phone</p>
            <p className="mt-2 fw-500">{user?.data?.phone || "Nill"}</p>
          </div>
        </div>
      </div>
      <div className="border border-[#E8EAED] rounded-[15px] p-6 mt-6">
        <p className="fw-600">Address</p>
        <div className="grid lg:grid-cols-2 lg:w-10/12 gap-6 mt-6">
          <div className="">
            <p className="text-[#5F5F5F] fw-500 fs-400">Country</p>
            <p className="mt-2 fw-500">{user?.data?.country || "Nill"}</p>
          </div>
          <div className="">
            <p className="text-[#5F5F5F] fw-500 fs-400">City/State</p>
            <p className="mt-2 fw-500">{user?.data?.state || "Nill"}</p>
          </div>
        </div>
      </div>
      <Modal title="Update Admin Profile">
        <EditProfile data={user?.data} refetch={refetch} close={() => setShowModal(false)} />
      </Modal>
    </>
  );
};

export default ProfileSettings;
