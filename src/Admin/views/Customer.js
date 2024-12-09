import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

const columns = [
  {
    title: "ID",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
   
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
 
];

const Customer = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUsers());
  // }, []);
  // const customerstate = useSelector((state) => state.customer.customers);
  // const data1 = [];
  // for (let i = 0; i < customerstate.length; i++) {
  //   if (customerstate[i].role !== "admin") {
  //     data1.push({
  //       key: i + 1,
  //       name: customerstate[i].firstname + " " + customerstate[i].lastname,
  //       email: customerstate[i].email,
  //       mobile: customerstate[i].mobile,
  //     });
  //   }
  // }

  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div>
        {/* <Table columns={columns} dataSource={data1} /> */}
        <Table columns={columns}  />
      </div>
    </div>
  );
};

export default Customer;