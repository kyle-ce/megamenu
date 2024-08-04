import React from "react";

const MenuItem = ({
  name,
  className,
  children,
}: {
  name: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <li className={`h-full group ${className}`}>
      <button className="px-3 py-4 rounded-lg group-hover:bg-zinc-50/50 group-focus-within:bg-zinc-50/50 ">
        {name}
      </button>
      <div className="absolute invisible w-full top-[100%] left-0 shadow-lg rounded-lg opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-x-0 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0  translate-x-[100%]  transition-all duration-300">
        <div className="flex justify-around gap-6 p-6 text-black">
          {children}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
