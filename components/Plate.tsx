import { FC } from 'react';

const Plate: FC<{ items: any[] }> = ({ items }) => {
  return (
    <div className="relative w-[400px] h-[400px] border rounded-full">
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
