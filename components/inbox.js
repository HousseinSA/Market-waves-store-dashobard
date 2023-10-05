const Inbox = () => {
  const DashobardImagePath = "/dashboard_images"

  return (
    <div className="self-stretch rounded-mini flex flex-col items-center justify-center relative gap-[0.63rem] text-left text-[0.88rem] text-grayscale-black font-poppins md:self-stretch md:w-auto md:h-auto md:flex-col">
      <div className="absolute my-0 mx-[!important] w-[100.64%] top-[-0.01rem] right-[-0.24%] left-[-0.4%] rounded-mini bg-gray shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)] h-[7.31rem] z-[0]" />
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[0rem] px-[5rem] gap-[2.44rem] z-[1] text-[1.13rem]">
        <b className="flex-1 relative tracking-[0.4px] flex items-center h-[1.69rem]">
          Inbox
        </b>
        <div className="relative text-[0.88rem] tracking-[0.2px] leading-[1.25rem] font-semibold text-accent-default text-center">
          View details
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center z-[2]">
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[0.13rem]"
          alt=""
          src={DashobardImagePath + "/divider.svg"}
        />
      </div>
      <div className="self-stretch flex flex-row items-center justify-between py-[0rem] px-[5rem] z-[3]">
        <div className="relative tracking-[0.2px] leading-[1.25rem] font-medium">
          Waiting for order#12345
        </div>
        <div className="relative tracking-[0.2px] leading-[1.25rem] font-medium text-grayscale-gray text-right">
          4:39
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center z-[4]">
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[0.13rem]"
          alt=""
          src={DashobardImagePath + "/divider1.svg"}
        />
      </div>
      <div className="self-stretch flex flex-row items-center justify-between py-[0rem] px-[5rem] z-[5]">
        <div className="relative tracking-[0.2px] leading-[1.25rem] font-medium">
          Customer support id#22234
        </div>
        <div className="relative tracking-[0.2px] leading-[1.25rem] font-medium text-grayscale-gray text-right inline-block w-[1.94rem] h-[0.06rem] shrink-0 md:flex-1">
          11:07
        </div>
      </div>
    </div>
  )
}

export default Inbox
