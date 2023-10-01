const Buttons = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-row items-center justify-center gap-[1.25rem] text-left text-[1.13rem] text-grayscale-white font-poppins md:flex md:flex-col">
      <div className="flex-1 rounded-mini [background:linear-gradient(98.86deg,_#6baafc,_#305fec)] shadow-[0px_2px_10px_rgba(175,_137,_255,_0.15)] flex flex-col items-center justify-center p-[0.63rem] gap-[0.31rem] md:flex-[unset] md:self-stretch">
        <div className="self-stretch h-[1.71rem] flex flex-row items-center justify-start">
          <b className="relative">Shipped orders</b>
        </div>
        <div className="self-stretch h-[3.19rem] flex flex-row items-center justify-between text-center text-[3.75rem]">
          <img
            className="relative w-[3.34rem] h-[2.65rem]"
            alt=""
            src="/vector16.svg"
          />
          <div className="relative tracking-[1px] font-semibold">67</div>
        </div>
      </div>
      <div className="flex-1 rounded-mini [background:linear-gradient(98.86deg,_#ef5e7a,_#d35385)] shadow-[0px_2px_10px_rgba(175,_137,_255,_0.15)] flex flex-col items-center justify-center p-[0.63rem] gap-[0.31rem] text-center md:flex-[unset] md:self-stretch">
        <div className="self-stretch h-[1.71rem] flex flex-row items-center justify-start">
          <b className="relative">Pending orders</b>
        </div>
        <div className="self-stretch h-[3.19rem] flex flex-row items-center justify-between text-right text-[3.75rem]">
          <img
            className="relative w-[2.97rem] h-[3.85rem]"
            alt=""
            src="/vector17.svg"
          />
          <div className="relative tracking-[1px] font-semibold">09</div>
        </div>
      </div>
      <div className="flex-1 rounded-mini [background:linear-gradient(98.86deg,_#d623fe,_#a530f2)] shadow-[0px_2px_10px_rgba(175,_137,_255,_0.15)] flex flex-col items-center justify-center p-[0.63rem] gap-[0.31rem] md:flex-[unset] md:self-stretch">
        <div className="self-stretch h-[1.71rem] flex flex-row items-center justify-start">
          <b className="relative">New orders</b>
        </div>
        <div className="self-stretch h-[3.19rem] flex flex-row items-center justify-between text-center text-[3.75rem]">
          <img
            className="self-stretch relative max-h-full w-[3.3rem]"
            alt=""
            src="/vector18.svg"
          />
          <div className="relative tracking-[1px] font-semibold">35</div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
