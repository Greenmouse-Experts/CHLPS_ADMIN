import { FaEnvelopeOpenText } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { RxEnvelopeClosed } from "react-icons/rx";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import usePostHook from "../../hook/usePost";
import { GoDiscussionClosed } from "react-icons/go";
import { useState } from "react";

const TicketList = ({ items, refetch }) => {
  const [loading, setLoading] = useState(false);
  const [closeId, setCloseId] = useState("");
  const formatTicketIcon = {
    open: <FaEnvelopeOpenText className="text-green-700" />,
    answered: <HiOutlineChatBubbleLeftRight className="text-blue-800" />,
    closed: <RxEnvelopeClosed className="text-orange-800" />,
  };
  const formatBorder = {
    open: "border-green-700",
    answered: "border-blue-700",
    closed: "border-orange-700",
  };
  const onSuccess = () => {
    setLoading(false);
    refetch();
    toast.success("Ticket closed successfully");
  };
  const { handlePost } = usePostHook();
  const closeTicket = (id) => {
    setCloseId(id);
    setLoading(true);
    const payload = {
      id: id,
    };
    handlePost(
      `admin/support-tickets/close`,
      payload,
      `application/json`,
      onSuccess
    );
  };
  return (
    <div className="mt-5 grid gap-3 lg:mt-12 mb-8">
      {items &&
        !!items?.length &&
        items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-x-4 border-l-[3px] p-4 bg-[#FAF9F6] ${
              formatBorder[item.status.toLowerCase()]
            }`}
          >
            <div className="flex gap-x-4 w-full items-center">
              <div className="text-5xl shrink-0">
                {formatTicketIcon[item.status.toLowerCase()]}
              </div>
              <div>
                <p className="fw-600 text-lg">{item.title}</p>
                <p className="syne">{item.message}</p>
                <p>{dayjs(item.created_at).format("hh:mm DD/MMM/YYYY")}</p>
              </div>
            </div>
            {item.status !== "Closed" && (
              <div>
                {loading && closeId === item.id ? (
                  <p>Closing...</p>
                ) : (
                  <div onClick={() => closeTicket(item.id)} className="flex items-center cursor-pointer gap-x-2">
                    <GoDiscussionClosed />
                    <p>Close</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default TicketList;
