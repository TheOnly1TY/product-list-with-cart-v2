"use client";

type ButtonProps = {
  children: string;
  action: () => void;
};
export function Button({ children, action }: ButtonProps) {
  return (
    <button
      className="w-full h-[3.3125rem] bg-vibrant-orange
       text-white text-base font-semibold rounded-full
         transition-all duration-300 ease-in-out hover:bg-[#952c0b]
         cursor-pointer"
      onClick={action}
    >
      {children}
    </button>
  );
}
