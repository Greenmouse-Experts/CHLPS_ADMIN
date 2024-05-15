import React from "react";
import { MdEdit } from "react-icons/md";

const ViewAnnounce = ({ item, openEdit }) => {
  return (
    <>
      <div className="flex justify-end">
        {openEdit && <p
          className="flex items-center gap-x-2 text-blue-800 mb-1 cursor-pointer font-semibold"
          onClick={openEdit}
        >
          <MdEdit className="text-lg" />
          Edit
        </p>}
      </div>
      <div className="max-h-[500px] overflow-y-auto mb-2 no-scrollbar">
        <div>
          <div dangerouslySetInnerHTML={{__html: item.message}}/>
        </div>
      </div>
    </>
  );
};

export default ViewAnnounce;
