import React from "react";
import { BiPlus } from "react-icons/bi";
import useGetHook from "../../hook/useGet";
import MembersGroup from "../../admin/members/MembersList";
import useModal from "../../hook/useModal";
import AddCertification from "../../admin/certification/AddCertification";
import CertificationList from "../../admin/certification/CertificationList";

const MembersCertification = () => {
  const { data, isLoading, refetch } = useGetHook("admin/certifications");
  const { Modal, setShowModal} = useModal();
  return (
    <div>
      <div className="px-5">
        <div className="p-6 bg-white">
          <div className="admin_head">
            <div className="leftt">
              <h3 className="text-2xl font-semibold">CHLPS Certifications</h3>
            </div>

            <div className="rightt">
              <button onClick={() => setShowModal(true)}>
                <BiPlus /> Add New Certification
              </button>
            </div>
          </div>
          <div className="mt-8">
          <CertificationList data={data} isLoading={isLoading} refetch={refetch}/>
          </div>
        </div>
      </div>
      <Modal title={'Add New Certification'}>
        <AddCertification close={() => setShowModal(false)} refetch={refetch}/>
      </Modal>
    </div>
  );
};

export default MembersCertification;
