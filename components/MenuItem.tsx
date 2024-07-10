'use client'
import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';

interface MenuItemProps {
  item: { name: string; price: number; image: string };
  onAdd: () => boolean;
  id: string;
}

const MenuItem: FC<MenuItemProps> = ({ item, onAdd, id }) => {
  const [btn, setBtn] = useState(false)
  return (
    <div className="border p-2 rounded-3xl relative w-[200px] bg-orange-500" id={id}>
      <img
        src={item.image}
        id={`img-${item.name}`}
        height={100} 
      />
      <h3 className="text-lg font-bold mt-2 text-white">{item.name}</h3>
      <p className="text-white font-bold text-3xl">${item.price}</p>
      <div className='w-full flex items-end justify-end'>
        <button onClick={() => {

          let res = onAdd()
          res && setBtn(true)
        }} className="mt-2 text-orange-500 rounded-3xl bg-white p-4 disabled:bg-gray-500 disabled:text-white disabled:cursor-not-allowed" disabled={btn}>Add</button>
      </div>

    </div>
  );
};

export default MenuItem;
