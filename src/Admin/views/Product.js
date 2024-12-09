import React, { useEffect } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
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
    title: "Age",
    dataIndex: "age",

  },
  {
    title: "Breed",
    dataIndex: "breed",

  },
  {
    title: "Origin",
    dataIndex: "origin",
    
  },
  {
    title: "Gender",
    dataIndex: "gender",
   
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Action",
    dataIndex: "action",

  },
  
  
];

const Product = () => {
  // const dispatch = useDispatch();
  // // useEffect(() => {
  // //   dispatch(getProducts());
  // // }, []);
  // // const productState = useSelector((state) => state.product.products);
  // const data1 = [];
  // for (let i = 0; i < productState.length; i++) {
  //   data1.push({
  //     key: i + 1,
  //     title: productState[i].title,
  //     brand: productState[i].brand,
  //     category: productState[i].category,
  //     color: productState[i].color,
  //     price: `${productState[i].price}`,
  //     action: (
  //       <>
  //         <Link to="/" className=" fs-3 text-danger">
  //           <BiEdit />
  //         </Link>
  //         <Link className="ms-3 fs-3 text-danger" to="/">
  //           <AiFillDelete />
  //         </Link>
  //       </>
  //     ),
  //   });
  // }
  // console.log(data1);
  return (
    <div>
      <h3 className="mb-4 title">Products</h3>
      <div>
        {/* <Table columns={columns} dataSource={data1} /> */}
        <Table columns={columns} />
      </div>
    </div>
  );
};

export default Product;


