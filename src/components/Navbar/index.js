import React from 'react';
import { useNavigate, NavLink, useMatch, Outlet } from 'react-router-dom';

function navbar() {
  return (
    <div>
      navbar
      <Outlet />
    </div>
  );
}

export default navbar;
