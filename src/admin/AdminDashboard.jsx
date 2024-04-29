import React, { useState } from "react";
import useGetHook from "../hook/useGet";
import { Topnav } from "./Topnav";
import { Route, Routes } from "react-router-dom";
import "../stylesheet/layout.css";
import Admin from "./Admin";
import Fellow from "../pages/admin/Fellow";
import Associate from "../pages/admin/Associate";
import Notify from "../pages/admin/Notify";
import AdminAnnouncement from "../pages/admin/Announcement";
import AdminBanks from "../pages/admin/Dues/Banks";
import AdminDuesCategory from "../pages/admin/Dues/Category";
import AdminDues from "../pages/admin/Dues/Dues";
import DuesPayments from "../pages/admin/Payments/Dues";
import SubscriptionPayments from "../pages/admin/Payments/Subscription";
import SettingsPage from "../pages/admin/Settings";
import SidebarLayout from "../components/Sidebar";
import MembersViaMembership from "../pages/admin/Member";
import MembersCertification from "../pages/admin/Certificate";

const AdminDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 650);
  const currentYear = new Date().getFullYear();
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const {data, isLoading } = useGetHook('admin/profile')

  return (
    <div className="layout">
      <div className="cide">
        <SidebarLayout/>
        {/* <Sidenav showSidebar={showSidebar} toggleSidebar={toggleSidebar} /> */}
      </div>
      <div className={`${showSidebar ? "components" : "close-side"}`}>
        <div className="top_admin_nav !hidden lg:!block">
          <Topnav
            data={data?.data}
            isLoading={isLoading}
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
            toggleSidebar={toggleSidebar}
          />
        </div>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Admin />} />
            <Route path="fellow" element={<Fellow />} />
            <Route path="associate" element={<Associate />} />
            <Route path="departments" element={<MembersViaMembership/>} />
            <Route path="certifications" element={<MembersCertification/>} />
            <Route path="idcard" element={<></>} />
            <Route path="scan" element={<></>} />
            <Route path="departments" element={<></>} />
            <Route path="departments" element={<></>} />
            <Route path="announcements" element={<AdminAnnouncement />} />
            <Route path="notify" element={<Notify datas={data?.data} />} />
            <Route path="dues/list" element={<AdminDues/>} />
            <Route path="dues/bank" element={<AdminBanks/>} />
            <Route path="dues/category" element={<AdminDuesCategory/>} />
            <Route path="payments/subscrition" element={<SubscriptionPayments/>} />
            <Route path="payments/dues" element={<DuesPayments/>} />
            <Route path="settings" element={<SettingsPage/>} />
          </Routes>
        </div>
        <div className="py-4 pt-8 text-center bg-[#f6f7fb]">
        All rights reserved. Copyright © {currentYear} Admitterly
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
