import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './ProductDrop.css';
import { Link } from 'react-router-dom';

function ProductDrop() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'ProductDrop-menu clicked' : 'ProductDrop-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProductDrop;
