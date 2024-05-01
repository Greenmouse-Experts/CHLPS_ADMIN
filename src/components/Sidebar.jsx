import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import logo from "../image/logo.svg";
import { Routes } from "./Routes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useModal from "../hook/useModal";
import { FiLogOut } from "react-icons/fi";

const SidebarLayout = () => {
  const { pathname } = useLocation();
  const [expanded, setExpanded] = useState();
  const navigate = useNavigate();
  const { Modal, setShowModal } = useModal();
  // const handleExpand = (val) => {
  //   if(val === expanded){
  //     setExpanded('')
  //   }else setExpanded(val)
  // }
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="left-0 top-0  overflow-hidden fixed index-30 h-screen bg-white">
      <Sidebar
        customBreakPoint="970px"
        className="h-full overflow-hidden pb-4 border-none fs-700 fw-500 px-4"
        backgroundColor=""
      >
        <div className="flex justify-center py-2 items-center">
          <Link to="/" className="block gap-x-1">
            <img src={logo} alt="logo" className="w-48" />
          </Link>
        </div>
        <Menu
          className="overflow-y-auto scroll-pro h-[84vh]"
          transitionDuration={600}
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0)
                return {
                  color: active ? "#291670" : "#333",
                  marginTop: "10px",
                  height: "auto",
                  padding: "6px 15px 6px 8px !important ",
                  textAlign: "left",
                  borderRadius: "10px",
                  fontWeight: active ? "600" : "500",
                  borderLeft: active ? "5px solid #FAB814" : "",
                  background: active ? "#29167038" : "",
                  "&:hover": {
                    color: "#291670",
                    background: "#29167038",
                    borderLeft: "5px solid #FAB814",
                    fontWeight: "500",
                  },
                };
            },
          }}
        >
          {Routes.map((item, i) => {
            return (
              <>
                {!!item.submenu.length ? (
                  <SubMenu
                    active={false}
                    label={item.name}
                    icon={item.icon}
                    key={item.name}
                  >
                    {item.submenu.map((item, i) => (
                      <MenuItem
                        component={<Link to={item.route} />}
                        active={pathname === item.route && true}
                      >
                        <p className="fs-400">{item.name}</p>
                      </MenuItem>
                    ))}
                  </SubMenu>
                ) : (
                  <MenuItem
                    component={<Link to={item.route} />}
                    icon={item.icon}
                    active={pathname === item.route && true}
                    key={item.name}
                  >
                    <p className="fs-400">{item.name}</p>
                  </MenuItem>
                )}
              </>
            );
          })}
          <MenuItem onClick={() => setShowModal(true)} icon={<FiLogOut />}>
            <p className="fs-400">Logout</p>
          </MenuItem>
        </Menu>
      </Sidebar>
      <Modal title={""} noHead>
        <div className="p-5">
          <p className="text-center">Are you sure you want to logout?</p>
          <div className="mt-6 flex items-center justify-between">
            <button
              className="px-5 py-2 bg-red-500 rounded text-white"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="px-5 py-2 bg-blue-900 rounded text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SidebarLayout;
