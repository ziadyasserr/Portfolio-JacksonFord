// import React from 'react'

import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function MasterLayout() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
