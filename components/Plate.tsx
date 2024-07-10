import { FC } from 'react';

const Plate: FC<{ items: any[] }> = ({ items }) => {
  return (
    <div className="relative w-[100%] h-[500px] border-8 border-black " id='plate'>
      <img
        src={'/images/plate.png'}
        className='absolute top-0 left-0 w-full h-full'
      />
      {items.map((item, index) => (
        <img
          key={index}
          src={item.image}
          alt={item.name}
          className="absolute w-[75%]"
          style={{
            top: `${20 * (index % 2)}%`,   // Adjust position as needed
            left: `${20 * (index % 2)}%`,  // Adjust position as needed
          }}
        />
      ))}
    </div>
  );
};

export default Plate;
