import React, { useState, useEffect, useRef } from "react";
import { LuMenu } from "react-icons/lu";
import "../stylesheet/component.css";
import { GoBell } from "react-icons/go";
import user from "../image/Ellipse 922.png";
import { Link } from "react-router-dom";
import useGetHook from "../hook/useGet";
import { formatDistanceToNow } from "date-fns";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { BiLogOut } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import Initials from "../components/initials";

export const Topnav = ({ toggleSidebar, data }) => {
  const formatTimeAgo = (timestamp) => {
    const apiDate = new Date(timestamp);
    return formatDistanceToNow(apiDate);
  };
  const [activeDropdown, setActiveDropdown] = useState(false);
  const { data: datas, isLoading } = useGetHook(
    "admin/get/all/unread/notifications"
  );
  const currentDate = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log(data);
  const day = currentDate.getDate();
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;
  const popup = () => {
    setActiveDropdown(!activeDropdown);
  };

  const bellIconRef = useRef(null);
  const handleClickOutside = (event) => {
    if (
      bellIconRef.current &&
      !bellIconRef.current.contains(event.target) &&
      !activeDropdown
    ) {
      setActiveDropdown(false);
    }
  };

  // Add click event listener when the component mounts
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="top_nav">
      <div className="icon_menu">
        <div className="menu-icon" onClick={toggleSidebar}>
          <LuMenu />
        </div>
        <div className="icon_text">
          <h3>Hello Super Admin</h3>
          <p>{formattedDate}</p>
        </div>
      </div>
      <div className="icon_menu">
        <div ref={bellIconRef} onClick={popup} className="bell">
          <GoBell />
          <span>{datas?.data?.length}</span>
          {activeDropdown && (
            <div className="bell_drop">
              <div className="add_head">
                <p>Recent Notification</p>{" "}
              </div>
              {datas?.data.length > 0 ? (
                datas.data.map((item) => (
                  <div key={item.id}>
                    <div className="bell_body">
                      <GoBell />
                      <div>
                        <h3>
                          {item.body} <span>{item.title}</span>
                        </h3>
                        <p>{formatTimeAgo(item.created_at)} ago</p>{" "}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <p className="no_body">No Notifications</p>
                </div>
              )}
              <Link to="notify">View Details</Link>
            </div>
          )}
        </div>
        <div>
          <Menu placement="bottom-end">
            <MenuHandler>
              <Button className="p-0 m-0 bg-transparent !shadow-none">
              {data?.avatar && <img src={data?.avatar} alt="profile" className="w-20 circle"/>}
                {!data?.avatar && <Initials name={`${data?.first_name} ${data?.last_name}`} size={45} text="19" />}
              </Button>
            </MenuHandler>
            <MenuList className="p-2">
              <MenuItem>
                <Link
                  to={"settings"}
                  className="block text-gray-800 font-medium flex gap-x-1 items-center fw-500"
                >
                  {" "}
                  <BsGear />
                  Settings
                </Link>
              </MenuItem>
              <MenuItem
                className="bg-red-400 text-white font-medium flex mt-1 gap-x-1 items-center fw-500"
                // onClick={() => setShowModal(true)}
              >
                <BiLogOut />
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        {/* <img src={data?.avatar || user} alt="profile" /> */}
      </div>
    </div>
  );
};
