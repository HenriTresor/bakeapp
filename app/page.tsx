"use client"

import { useRef, useState } from 'react';
import SearchBar from '../components/SearchBar';
import MenuItem from '../components/MenuItem';
import Cart from '../components/Cart';

import Plate from '../components/Plate';

const Home = () => {
  const [query, setQuery] = useState('');
  const [plateItems, setPlateItems] = useState<any[]>([]);
  const [items, setItems] = useState([
    { name: 'Cheese Burger', price: 4, image: '/images/cheese-burger.png' },
    { name: 'Small Waffle', price: 4, image: '/images/small-waffle.png' },
    { name: 'Medium Waffle', price: 4, image: '/images/cheese-burger.png' },
    { name: 'Big Waffle', price: 4, image: '/images/big-waffle.png' },
    { name: 'Beef Burger', price: 4, image: '/images/small-waffle.png' },
  ]);

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  const plateRef = useRef<HTMLDivElement>(null);

  const handleAddToPlate = (item: any) => {
    setPlateItems([...plateItems, item]);
    const itemElement = document.getElementById(`item-${item.name}`);
    if (itemElement && plateRef.current) {
      const plateRect = plateRef.current.getBoundingClientRect();
      const itemRect = itemElement.getBoundingClientRect();
      const clone = itemElement.cloneNode(true) as HTMLElement;
      clone.style.position = 'absolute';
      clone.style.left = `${itemRect.left}px`;
      clone.style.top = `${itemRect.top}px`;
      clone.style.width = `${itemRect.width}px`;
      clone.style.height = `${itemRect.height}px`;
      clone.classList.add('animate-to-plate');
      document.body.appendChild(clone);
      setTimeout(() => {
        clone.remove();
      }, 1000);
    }
  };


  return (
    <div className="overflow-x-hidden">
      <header className='w-full bg-orange-500 rounded-3xl p-4 pr-8 pl-8 relative rounded-b-full'>
        <h1 className="text-2xl font-bold mb-4 text-white">Bakery Menu</h1>
        <SearchBar onSearch={setQuery} />
      </header>
      <div className='w-full flex flex-col items-end'>
        <div className='flex w-full items-center justify-between'>
          <div className="flex flex-grow flex-wrap w-[46%]">
            {filteredItems.map((item, index) => (
              <MenuItem key={index} item={item} onAdd={() => handleAddToPlate(item)} id={`item-${item.name}`} />
            ))}
          </div>
          <div ref={plateRef} className="mt-8 w-[46%] flex items-center justify-center">
            <Plate items={plateItems} />
          </div>

        </div>
        <div className='p-5'>
          <button className='p-5 rounded-3xl bg-[#ff90a2] text-white cursor-pointer'
          onClick={()=>{
            window.open(`https://checkout.stripe.com/pay/cs_test_a1b2c3d4e5f6g7h8i9j0klmnopqrstuv`)
          }}
          >
            checkout
          </button>
        </div>
      </div>


    </div>
  );
};

export default Home;
