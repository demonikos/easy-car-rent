import React from 'react';
import { Link } from 'react-router-dom';

export const Favorites = () => {
  return (
    <>
      <h1>this is favorites page</h1>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
    </>
  );
};
