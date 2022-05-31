import React from 'react';
import { Link } from 'react-router-dom';
export const Etop = () => {
  return (
    <>
      <Link to="/employee/user">従業員管理</Link>
      <br />
      <Link to="/employee/event">イベント管理</Link>
    </>
  );
};
