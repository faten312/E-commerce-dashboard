import React from "react";
import Navebar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./list.scss";
const List = () => {
  return (
    <>
      <Navebar />
      <div className="list">
        <div className="side">
          <Sidebar />
        </div>
        <div className="main">List page</div>
      </div>
    </>
  );
};

export default List;
