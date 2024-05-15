import React, {useState} from 'react'
import { toast } from 'react-toastify';
import usePostHook from '../../hook/usePost';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditAnnounce = ({item, refetch, close}) => {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState(item?.title || "");
  const [body, setBody] = useState(item?.message || "");
  const [image, setImage] = useState();
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const { handlePost } = usePostHook();
  const onSuccess = () => {
    setLoading(false)
    console.log(image);
    refetch()
    toast.success('Announcement added successfully')
    close()
  }
  const handleSubmit = async () => {
    setLoading(true)
    const payload = {
      title: title,
      message: body,
      id: item.id
     }
    handlePost(`admin/blogs/update`, payload, `application/json`, onSuccess)
  };
  return (
    <>
        <div>
          <label className="text-lg font-medium">Title</label>
          <input
            type="text"
            className="border border-gray-400 w-full mt-2 p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="text-lg font-medium">Body</label>
          <div className="pb-7">
          <ReactQuill theme="snow" value={body} onChange={setBody} className="h-44" />;
          </div>
        </div>
        <div className="mt-4">
          <img src={item.image} alt="announce" className='w-24' />
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
            {loading? `Updating...` : `Submit`}
          </button>
        </div>
    </>
  )
}

export default EditAnnounce
