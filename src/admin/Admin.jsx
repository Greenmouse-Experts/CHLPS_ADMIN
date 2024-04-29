import React from "react";
import "../stylesheet/layout.css";
import img1 from "../image/profit 5.png";
import img2 from "../image/profit 6.png";
import img3 from "../image/profit 7.png";
import useGetHook from "../hook/useGet";
import dayjs from "dayjs";
import { formatAsNgnMoney } from "../services/helpers";
import { Link } from "react-router-dom";
import MembersJoined from "./charts/membersJoined";
import DuesPayment from "./charts/duesPayment";
// eslint-disable-next-line

const Admin = () => {
  const currentYear = new Date().getFullYear();
  const { data: user, refetch } = useGetHook(
    `admin/dashboard?year=${currentYear}`
  );

  const list = [
    {
      head: "Total Members",
      num: user?.data.totalMembers,
      Image: img1,
      color: "bg-purple-50",
    },
    {
      head: "Total Subscribers",
      num: user?.data.totalSubscribers,
      Image: img2,
      color: "bg-blue-50",
    },
    {
      head: "Total Dues Paid",
      num: user && formatAsNgnMoney(user?.data.totalDuesPaid),
      Image: img3,
      color: "bg-yellow-50",
    },
    {
      head: "Total Subscription Paid",
      num: user && formatAsNgnMoney(user?.data.totalSubscriptionPaid),
      Image:
        "https://img.freepik.com/premium-vector/sack-money-big-pile-cash-money-icon-illustration-money-bag-flat-icon_385450-362.jpg",
      color: "bg-white",
    },
  ];
  const events = [
    {
      name: "Members submit in China",
      img: "https://smedigest.com.ng/wp-content/uploads/2017/05/event-in-niigeria-make-money.jpg",
    },
    {
      name: "Allumini members annual convention",
      img: "https://thefisayo.com/wp-content/uploads/2017/10/OCT11-770x510.jpg",
    },
    {
      name: "Around the world in 80 day challenge",
      img: "https://i1.wp.com/businessday.ng/wp-content/uploads/2020/10/event-hall.jpg?fit=700%2C435&ssl=1",
    },
    {
      name: "Professional Showcase",
      img: "https://smedigest.com.ng/wp-content/uploads/2017/05/event-in-niigeria-make-money.jpg",
    },
  ];
  const routes = [
    {
      name: "Add Member",
      route: "fellow",
    },
    {
      name: "Add New Dues",
      route: "/admin/payments/dues",
    },
    {
      name: "Monitor Savings Channel",
      route: "/admin/payments/dues",
    },
    {
      name: "Create Meetings",
      route: "/admin/payments/dues",
    },
  ];
  const channels = [
    {
      name: "Alumini Savings",
      img: "https://static-00.iconduck.com/assets.00/money-bag-icon-444x512-9v29n3bt.png",
      num: "34",
      total: 23000,
    },
    {
      name: "Bile Yearly",
      img: "https://cdn-icons-png.flaticon.com/512/925/925014.png",
      num: "24",
      total: 128000,
    },
    {
      name: "Laravel Binds",
      img: "https://cdn-icons-png.flaticon.com/512/6475/6475889.png",
      num: "124",
      total: 528000,
    },
  ]

  return (
    <>
      <div className="p-3">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {list.map((item, i) => (
            <div
              className={`border p-6 rounded-lg ${item.color}`}
              key={i}
            >
              <div>
                <img src={item.Image} alt="" className="w-[40px]" />
                <p className="font-semibold mt-2">{item.head}</p>
              </div>
              <div className="flex justify-end mt-5">
                <p className="font-bold text-2xl">{item.num || 0}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 gap-x-5 flex">
          <div className="w-8/12">
            <div className="bg-white px-4 py-3 border-t-[3px] border-[#FAB814] rounded-xl shadow">
              <div className="mb-4">
                <p className="text-lg font-semibold">Recent Members</p>
              </div>
              <div className="w-full flex flex-col overflow-x-auto rounded-xl">
                <table className="overflow-x-auto rounded-xl">
                  <thead className="rounded-xl">
                    <tr className="bg-gray-200 rounded-xl">
                      <th className="align-middle p-2 text-[15px] text-left font-medium whitespace-nowrap">
                        S/N
                      </th>
                      <th className="align-middle p-2 text-[15px] text-left font-medium whitespace-nowrap">
                        Member Id
                      </th>
                      <th className="align-middle p-2 text-[15px] text-left font-medium whitespace-nowrap">
                        Member Name
                      </th>
                      <th className="align-middle p-2 text-[15px] text-left font-medium whitespace-nowrap">
                        Profession
                      </th>
                      <th className="align-middle p-2 text-[15px] text-left font-medium whitespace-nowrap">
                        Subscription
                      </th>
                      <th className="align-middle p-2 text-[15px] text-left font-medium whitespace-nowrap">
                        Date Registered
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {user &&
                      user?.data?.latestFiveMember.map((item, index) => (
                        <tr key={index} className="h-[53px]">
                          <td className="text-[15px] py-2">{index + 1}</td>
                          <td className="text-[15px] py-2 font-medium">
                            {item.membership_id}
                          </td>
                          <td className="text-[15px] py-2">
                            {item.first_name} {item.last_name}
                          </td>
                          <td className="text-[15px] py-2">
                            {item.account_type}
                          </td>
                          <td className="text-[15px] py-2">
                            {item?.isSubscribed === "0" ? (
                              <span className="px-2 py-1 text-sm bg-orange-100 font-medium rounded-lg">
                                Unsubscribed
                              </span>
                            ) : (
                              <span className="px-2 py-1 text-sm bg-green-100 font-medium rounded-lg">
                                Subscribed
                              </span>
                            )}
                          </td>
                          <td className="text-[15px] py-2">
                            {dayjs(item.created_at).format("DD-MM-YYYY")}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <div className="bg-white px-4 py-3 border-t-[3px] border-[#FAB814] rounded-xl shadow">
              <div className="mb-4 flex justify-between items-center">
                <p className="text-lg font-semibold">Upcoming Events</p>
                <Link to={'/admin/announcements'} className="font-medium text-[#FAB814] underline">View More</Link>
              </div>
              <div>
                {events.map((item, i) => (
                  <div className="flex items-center gap-x-2 mb-[13px]" key={i}>
                    <div className="w-3/12">
                      <img src={item.img} alt="event" className="w-[100px]" />
                    </div>
                    <div className="w-9/12">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-[11px]">2 mins ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 gap-x-5 flex">
          <div className="w-3/12">
            <div className="bg-[#FAB814] h-[236px] flex items-center relative border-[3px] border-white py-6 px-5 rounded-xl hover:scale-105 duration-100 shadow">
              <div className="relative z-10">
                <p className="font-medium mb-4 text-center">
                  Boost Interactions with your members by exploring the
                  interaction section on the Menu.
                </p>
                <div className="text-center">
                  <Link className="bg-white px-4 font-medium py-1 rounded-xl text-[14px]">
                    Meet Now
                  </Link>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1701181895/BOG/meet-removebg-preview_abmtoq.png"
                alt="bg"
                className="absolute top-0 left-0 w-full h-full opacity-10"
              />
            </div>
          </div>
          <div className="w-9/12">
            <div className="bg-white px-4 py-3 border-t-[3px] border-[#FAB814] rounded-xl shadow">
              <div className="mb-4">
                <p className="text-lg font-semibold">Top Services</p>
              </div>
              <div className="grid lg:grid-cols-4">
                {
                  channels.map((item, i) => (
                    <div className="text-center">
                      <p className="font-semibold">{item.name}</p>
                      <img src={item.img} alt="maps" className="mx-auto w-12 my-4"/>
                      <p className="font-medium">{`${item.num} members`}</p>
                      <p className="text-lg font-semibold">{formatAsNgnMoney(item.total)}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 gap-x-5 flex">
          <div className="w-8/12">
            <div className="bg-white px-4 py-3 border-t-[3px] border-[#FAB814] rounded-xl shadow">
              <div className="mb-4">
                <p className="text-lg font-semibold">Dues Payments</p>
              </div>
              <div className="h-[300px]">
                {user && <DuesPayment data={user?.data?.usersPayments} />}
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <div className="bg-white px-4 py-3 border-t-[3px] border-[#FAB814] rounded-xl shadow">
              <div className="mb-4">
                <p className="text-lg font-semibold">Members Chart</p>
              </div>
              <div className="h-[300px]">
                {user && (
                  <MembersJoined data={user?.data?.monthly_members_joined} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
