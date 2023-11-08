import React from 'react';
import { Link } from 'react-router-dom';

export const Catalog = () => {
  return (
    <>
      <h1>this is catalog page</h1>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </>
  );
};
