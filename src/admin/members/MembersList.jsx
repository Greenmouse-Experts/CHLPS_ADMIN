import React, { useState } from "react";
import { DataTable } from "../../components/StaticTable";
import { createColumnHelper } from "@tanstack/react-table";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { BsArrowsExpand, BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { BiEdit } from "react-icons/bi";
import { formatAsNgnMoney } from "../../services/helpers";
import { ThreeCircles } from "react-loader-spinner";
import useModal from "../../hook/useModal";
import EditMembership from "./EditMembership";

const MembersGroup = ({ isLoading, data, refetch }) => {
  const navigate = useNavigate();
  const {Modal:Edit, setShowModal:ShowEdit} = useModal()
  const [selectedItem, setSelectedItem] = useState()
  const handleOpenEdit = (item) => {
    setSelectedItem(item)
    ShowEdit(true)
  }
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "ID",
      cell: (info) => <>{info.row.index + 1}</>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.name, {
      id: "Membership Name",
      cell: (info) => (
        <p className="whitespace-normal fw-500">{info.getValue()}</p>
      ),
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.created_at, {
      id: "Added at",
      cell: (info) => <>{dayjs(info.getValue()).format("DD  MMMM YYYY")}</>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.first_time_amount, {
      id: "First Time Amount",
      cell: (info) => <>{formatAsNgnMoney(info.getValue())}</>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.recurring_amount, {
      id: "Continous Amount",
      cell: (info) => <>{formatAsNgnMoney(info.getValue())}</>,
      header: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.id, {
      id: "Action",
      header: (info) => info.column.id,
      cell: (info) => (
        <>
          <Menu placement="bottom-end">
            <MenuHandler>
              <Button className="bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none capitalize">
                <BsThreeDotsVertical className="text-xl text-black" />
              </Button>
            </MenuHandler>
            <MenuList className="">
              <MenuItem
                className="my-1 fw-500 flex items-center gap-x-2 pt-1"
                onClick={() => navigate(`/blog/edit/${info.getValue()}`)}
              >
                <BsArrowsExpand /> View members
              </MenuItem>
              <MenuItem
                className="my-1 fw-500 flex items-center gap-x-2 pt-1"
                onClick={() => handleOpenEdit(info.row.original)}
              >
                <BiEdit /> Edit membership
              </MenuItem>
              <MenuItem
                className="my-1 fw-500 bg-red-500 text-white flex items-center gap-x-2 pt-1"
                //   onClick={() => openDelete(info.getValue())}
              >
                <RiDeleteBinLine /> Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </>
      ),
    }),
  ];
  return (
    <div>
      <div>
      {isLoading && (
          <div className="">
            <ThreeCircles
              height="100"
              width="100"
              color="#291670"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </div>
        )}
        {data && !!data?.data.length && (
          <DataTable data={data.data} columns={columns} />
        )}
      </div>
      <Edit title={'Edit Membership Plan'}>
        <EditMembership item={selectedItem} close={() => ShowEdit(false)} refetch={refetch}/>
      </Edit>
    </div>
  );
};

export default MembersGroup;
