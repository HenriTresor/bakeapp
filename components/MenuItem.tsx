import { FC } from 'react';

interface MenuItemProps {
  item: { name: string; price: number; image: string };
  onAdd: () => void;
  id: string;
}

const MenuItem: FC<MenuItemProps> = ({ item, onAdd, id }) => {
  return (
    <div className="border p-2 rounded-3xl relative w-[200px] bg-orange-500" id={id}>
      <img src={item.image} alt={item.name} className="w-full " />
      <h3 className="text-lg font-bold mt-2 text-white">{item.name}</h3>
      <p className="text-white font-bold text-3xl">${item.price}</p>
      <div className='w-full flex items-end justify-end'>
       <button onClick={onAdd} className="mt-2 text-orange-500 rounded-3xl bg-white p-4">Add</button>
      </div>
      
    </div>
  );
};

export default MenuItem;
