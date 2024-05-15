import React, { useState } from "react";
import usePostHook from "../../hook/usePost";
import { toast } from "react-toastify";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddAnnounce = ({close, refetch}) => {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const { handlePost } = usePostHook();
  const onSuccess = () => {
    setLoading(false)
    refetch()
    toast.success('Announcement added successfully')
    close()
  }
  const handleSubmit = async () => {
    setLoading(true)
   const payload = {
    title: title,
    message: body,
   }
    handlePost(`admin/blogs`, payload, `application/json`, onSuccess)
  };
  return (
    <>
        <div>
          <label className="text-lg font-medium">Title</label>
          <input
            type="text"
            className="border border-gray-400 w-full mt-2 p-2 rounded"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="text-lg font-medium">Body</label>
          <div className="pb-7">
          <ReactQuill theme="snow" value={body} onChange={setBody} className="h-44" />;
          </div>
          {/* <textarea
            className="border border-gray-400 w-full h-24 mt-2 p-2 rounded"
            onChange={(e) => setBody(e.target.value)}
          /> */}
        </div>
        <div className="mt-4">
          <label className="text-lg font-medium w-full">Image Cover</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="border border-gray-400 w-full mt-2 p-2 rounded"
          />
        </div>
        <div className="mt-8">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-3 bg-[#291670] font-semibold text-lg rounded text-white"
          >
            {loading? `Submiting...` : `Submit`}
          </button>
        </div>
    </>
  );
};

export default AddAnnounce;
