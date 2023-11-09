import React from 'react';
import { Link } from 'react-router-dom';

import { CatalogCard } from 'components/CatalogCard/CatalogCard';

export const Home = () => {
  return (
    <>
      <h1>this is home page</h1>
      <Link to="/catalog">Catalog</Link>
      <Link to="/favorites">Favorites</Link>
      <CatalogCard />
    </>
  )
}