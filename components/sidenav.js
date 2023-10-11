const Sidenav = () => {
  return (
    <div className="flex flex-col items-center justify-start py-[0rem] px-[0.63rem] gap-[4.06rem] text-left text-[0.88rem] text-peru font-poppins md:gap-[4.06rem] md:items-center md:justify-center md:pl-[0rem] md:pt-[5rem] md:box-border mq666:hidden mq666:self-stretch mq666:w-auto mq666:h-auto mq666:gap-[4.06rem] mq666:items-center mq666:justify-center mq666:pl-[3.25rem] mq666:pt-[0rem] mq666:box-border">
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
        <div className="flex-1 relative font-medium md:hidden">Dashboard</div>
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
      <div className="self-stretch flex flex-row items-center justify-center relative gap-[0.63rem] text-[0.75rem] ">
        <div className="rounded-3xs h-[2.19rem] overflow-hidden z-[0]" />
        <div className="my-0 bg-ghostwhite-100 p-2 pl-0 rounded-lg mx-[!important] absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_51.78px)] w-[6.46rem] flex flex-row items-start justify-start gap-[0.19rem] z-[1]">
          <div className="flex-1 flex flex-col items-start justify-start relative gap-[0.63rem]">
            <Image
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

export default Sidenav
