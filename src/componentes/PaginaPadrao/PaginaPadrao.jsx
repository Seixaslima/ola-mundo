import Banner from 'componentes/Banner/Banner';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
  return (
    <main>
      <Banner />

      <Outlet />
    </main>
  );
}
