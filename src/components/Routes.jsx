import { FiSettings } from 'react-icons/fi'
import { GoBell } from 'react-icons/go'
import { GrTransaction } from 'react-icons/gr'
import { HiOutlineArrowsExpand } from 'react-icons/hi'
import { LuLayoutDashboard } from 'react-icons/lu'
import {MdAnnouncement, MdMemory, MdMoveDown, MdOutlineEventAvailable, MdOutlineManageAccounts, MdOutlinePayment } from 'react-icons/md'
import { PiChats } from "react-icons/pi";

export const Routes = [
    {
      name: "Dashboard",
      icon: <LuLayoutDashboard className="text-xl" />,
      route: "/admin/",
      submenu: [],
    },
    {
        name: "Departments",
        icon: <HiOutlineArrowsExpand className="text-xl" />,
        route: "departments",
        submenu: [],
      },
    {
        name: "Members",
        icon: <MdOutlineManageAccounts className="text-xl" />,
        route: "/",
        submenu: [
          {
            name: "Alumini",
            route: "fellow",
          },
          {
            name: "Others",
            route: "associate",
          },
        ],
      },
      {
        name: "Interactions",
        icon: <PiChats className="text-2xl" />,
        route: "/",
        submenu: [
          {
            name: "Meetings",
            route: "meetings",
          },
          {
            name: "Live Chat",
            route: "chats",
          },
          {
            name: "WhatsApp Automation",
            route: "chats",
          },
        ],
      },
      {
        name: "Events",
        icon: <MdOutlineEventAvailable className="text-xl" />,
        route: "/",
        submenu: [
          {
            name: "Webinar",
            route: "webinar",
          },
          {
            name: "Voting (e-election)",
            route: "chats",
          },
          {
            name: "Training Management",
            route: "chats",
          },
        ],
      },
      {
        name: "Dues",
        icon: <MdOutlinePayment className="text-xl" />,
        route: "/",
        submenu: [
          {
            name: "Bank",
            route: "dues/bank",
          },
          {
            name: "Category",
            route: "dues/category",
          },
          {
            name: "Dues List",
            route: "dues/list",
          },
        ],
      },
      {
        name: "Payments",
        icon: <GrTransaction className="text-xl" />,
        route: "/",
        submenu: [
          {
            name: "Dues",
            route: "payments/dues",
          },
          {
            name: "Subscription",
            route: "payments/subscrition",
          },
        ],
      },
      {
        name: "Announcements",
        icon: <MdAnnouncement className="text-xl" />,
        route: "/admin/announcements",
        submenu: [],
      },
      {
        name: "Utility",
        icon: <MdMemory className="text-2xl" />,
        route: "/",
        submenu: [
          {
            name: "ID Creation",
            route: "idcard",
          },
          {
            name: "Code Scanner",
            route: "scan",
          },
        ],
      },
      {
        name: "Services",
        icon: <MdMoveDown className="text-2xl" />,
        route: "/",
        submenu: [
          {
            name: "Savings Channel",
            route: "idcard",
          },
          {
            name: "Insurance Channel",
            route: "scan",
          },
        ],
      },
      {
        name: "Notifications",
        icon: <GoBell className="text-xl" />,
        route: "notify",
        submenu: [],
      },
      {
        name: "Settings",
        icon: <FiSettings className="text-xl" />,
        route: "settings",
        submenu: [],
      },
]