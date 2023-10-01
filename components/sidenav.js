const Sidenav = () => {
  return (
    <div className="flex flex-col items-center justify-center p-[1.25rem] gap-[4.06rem] text-left text-[0.88rem] text-darkslateblue font-poppins">
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
        <div className="flex-1 relative font-medium">Dashboard</div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[0.63rem]">
        <img
          className="relative w-[1.16rem] h-[1.25rem]"
          alt=""
          src="/vector2.svg"
        />
        <div className="flex-1 relative font-medium">Order</div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[0.63rem]">
        <img
          className="relative w-[0.92rem] h-[1.25rem]"
          alt=""
          src="/vector3.svg"
        />
        <div className="flex-1 relative font-medium">Products</div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[0.63rem]">
        <img
          className="relative w-[1.07rem] h-[1.2rem]"
          alt=""
          src="/vector4.svg"
        />
        <div className="flex-1 relative font-medium">Settings</div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center relative gap-[0.63rem] text-[0.75rem] text-cornflowerblue">
        <div className="rounded-3xs bg-lightsteelblue h-[2.19rem] overflow-hidden z-[0]" />
        <div className="my-0 mx-[!important] absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_51.78px)] w-[6.46rem] flex flex-row items-start justify-start gap-[0.19rem] z-[1]">
          <div className="flex-1 flex flex-col items-start justify-start relative gap-[0.63rem]">
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
      <div className="self-stretch relative text-[0.75rem] leading-[1rem] font-medium text-silver text-center">
        <p className="m-0">{`Terms & Services`}</p>
        <p className="m-0">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Sidenav;
