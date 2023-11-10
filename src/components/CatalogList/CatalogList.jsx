import React from 'react';

import css from "./CatalogList.module.scss"
import { CatalogCard } from 'components/CatalogCard/CatalogCard';

export const CatalogList = (arr) => {

    return (
        <div className={css.cardList}>
        {arr.map(card => (
            <CatalogCard />
        ))}
        </div>
    )
}