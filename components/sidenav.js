const Sidenav = () => {
  return (
    <div className="flex flex-col items-center justify-start py-[0rem] px-[0.63rem] gap-[4.06rem] text-left text-[0.88rem] text-peru font-poppins mq666:self-stretch mq666:w-auto mq666:h-auto mq666:items-center mq666:justify-center">
      <img
        className="relative w-[2.15rem] h-[2.6rem]"
        alt=""
        src="/vector.svg"
      />
      <div className="self-stretch flex flex-row items-center justify-center gap-[0.63rem]">
        <img
          className="relative w-[1.04rem] h-[1.13rem]"
          alt=""
          src="/vector1.svg"
        />
        <div className="flex-1 relative font-medium md:hidden md:hover:flex">
          Dashboard
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[0.63rem]">
        <img
          className="relative w-[1.16rem] h-[1.25rem]"
          alt=""
          src="/vector2.svg"
        />
        <div className="flex-1 relative font-medium md:hidden">Order</div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[0.63rem]">
        <img
          className="relative w-[0.92rem] h-[1.25rem]"
          alt=""
          src="/vector3.svg"
        />
        <div className="flex-1 relative font-medium md:hidden">Products</div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[0.63rem]">
        <img
          className="relative w-[1.07rem] h-[1.2rem]"
          alt=""
          src="/vector4.svg"
        />
        <div className="flex-1 relative font-medium md:hidden">Settings</div>
      </div>
      <div className="self-stretch rounded-mini bg-lightgray overflow-hidden flex flex-row items-center justify-start py-[0.31rem] px-[0rem] text-[0.75rem] md:hidden">
        <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.44rem] pl-[0.13rem] gap-[0.19rem] md:flex">
          <div className="flex flex-col items-start justify-center relative md:hidden">
            <img
              className="relative w-[1.15rem] h-[1.13rem] z-[0]"
              alt=""
              src="/vector5.svg"
            />
            <img
              className="absolute my-0 mx-[!important] w-[10%] top-[calc(50%_-_0px)] right-[60%] left-[30%] max-w-full overflow-hidden h-[0.13rem] shrink-0 z-[1]"
              alt=""
              src="/vector6.svg"
            />
            <img
              className="absolute my-0 mx-[!important] w-[10%] top-[calc(50%_-_0px)] right-[30%] left-[60%] max-w-full overflow-hidden h-[0.13rem] shrink-0 z-[2]"
              alt=""
              src="/vector7.svg"
            />
            <img
              className="absolute my-0 mx-[!important] w-[59.97%] top-[calc(50%_-_6px)] right-[20%] left-[20.03%] max-w-full overflow-hidden h-[0.4rem] shrink-0 z-[3]"
              alt=""
              src="/vector8.svg"
            />
          </div>
          <div className="relative font-semibold">Connect Now</div>
        </div>
      </div>
      <div className="self-stretch relative text-[0.75rem] leading-[1rem] font-medium text-silver text-center md:hidden">
        <p className="m-0">{`Terms & Services`}</p>
        <p className="m-0">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Sidenav;
