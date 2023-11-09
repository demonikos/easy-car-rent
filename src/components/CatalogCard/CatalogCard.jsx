import React from 'react';
import css from './CatalogCard.module.scss';

export const CatalogCard = () => {
  return (
    <>
      <div className={css.cardWrap}>
        <div className={css.cardImage}></div>
        <div className={css.cardInfo}>
          <div className={css.cardMainInfo}>
            <p className={css.cardName}>
              Buick <span className={css.cardModel}>Enclave</span>, 2008
            </p>
            <p className={css.cardName}>$40</p>
          </div>
          <div className={css.cardAdditionalInfo}>
            Kiev | Ukraine | Luxury Car Rentals | Premium | Suv | Enclave | 9582
            | Power liftgate
          </div>
        </div>
        <button type="click" className={css.cardButton}>
          <span className={css.buttonText}>Learn more</span>
        </button>
      </div>
    </>
  );
};
