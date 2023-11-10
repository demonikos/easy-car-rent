import { Home } from 'pages/Home';
import { Catalog } from 'pages/Catalog';
import { Favorites } from 'pages/Favorites';

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </>
  );
};