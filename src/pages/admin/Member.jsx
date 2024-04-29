import React from "react";
import { BiPlus } from "react-icons/bi";
import useGetHook from "../../hook/useGet";
import MembersGroup from "../../admin/members/MembersList";
import AddMembership from "../../admin/members/AddMembership";
import useModal from "../../hook/useModal";

const MembersViaMembership = () => {
  const { data, isLoading, refetch } = useGetHook("admin/memberships");
  const { Modal, setShowModal} = useModal();
  return (
    <div>
      <div className="px-5">
        <div className="p-6 bg-white">
          <div className="admin_head">
            <div className="leftt">
              <h3 className="text-2xl font-semibold">CHLPS Memberships</h3>
            </div>

            <div className="rightt">
              <button onClick={() => setShowModal(true)}>
                <BiPlus /> Add New Membership Forum
              </button>
            </div>
          </div>
          <div className="mt-8">
          <MembersGroup data={data} isLoading={isLoading} refetch={refetch}/>
          </div>
        </div>
      </div>
      <Modal title={'Add New Membership Plan'}>
        <AddMembership close={() => setShowModal(false)} refetch={refetch}/>
      </Modal>
    </div>
  );
};

export default MembersViaMembership;
