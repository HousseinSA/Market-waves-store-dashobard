import Image from "next/image"
const RecentActivity = () => {
  const DashobardImagePath = "/dashboard_images"
  return (
    <div className="self-stretch rounded-mini flex flex-col items-center justify-center relative gap-[0.63rem] text-left text-[0.88rem] text-grayscale-black font-poppins">
      <div className="absolute my-0 mx-[!important] w-[99.88%] top-[0rem] right-[0.12%] left-[0%] rounded-mini bg-grayscale-white shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)] h-[14.88rem] z-[0]" />
      <div className="self-stretch flex flex-col items-center justify-center py-[0.63rem] px-[0rem] gap-[0.63rem] z-[1]">
        <div className="self-stretch h-[2.23rem] flex flex-row items-center justify-center py-[0rem] px-[2rem] box-border gap-[1.56rem] text-[1.13rem] text-black">
          <div className="flex-1 relative font-medium">Recent Activity</div>
          <div className="relative text-[0.88rem] tracking-[0.2px] leading-[1.25rem] font-semibold text-accent-default text-right">
            View all
          </div>
        </div>
        <div className="self-stretch h-[2.23rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.94rem] px-[2rem] box-border gap-[1.56rem]">
          <div className="flex-1 flex flex-row items-center justify-start gap-[1.56rem]">
            <Image
              className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
              alt=""
              width={1.25}
              height={1.25}
              src={DashobardImagePath + "/controls--checkbox--active.svg"}
            />
            <div className="relative tracking-[0.2px] leading-[1.25rem] font-semibold">
              Update payment report
            </div>
          </div>
          <div className="rounded-lg bg-ghostwhite-200 overflow-hidden flex flex-row items-center justify-center py-[0.31rem] px-[0.75rem] text-center text-[0.69rem] text-grayscale-gray">
            <div className="relative tracking-[0.5px] uppercase font-semibold">
              Default
            </div>
          </div>
        </div>
        <div className="self-stretch h-[2.23rem] flex flex-col items-center justify-end py-[0rem] px-[1.88rem] box-border">
          <div className="self-stretch flex-1 flex flex-row items-start justify-center gap-[1.63rem]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[1.63rem]">
              <div className="overflow-hidden flex flex-row items-center justify-start relative gap-[0.63rem]">
                <div className="relative rounded-[50%] bg-accent-default w-[1.25rem] h-[1.25rem] z-[0]" />
                <Image
                  width={1.25}
                  height={1.25}
                  className="absolute my-0 mx-[!important] h-[43.29%] w-[58.5%] top-[30.75%] right-[20.75%] bottom-[25.96%] left-[20.75%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src={DashobardImagePath + "/check.svg"}
                />
              </div>
              <div className="relative tracking-[0.2px] leading-[1.25rem] font-semibold">
                Confirm order update
              </div>
            </div>
            <div className="rounded-lg bg-gold overflow-hidden flex flex-row items-start justify-center py-[0.31rem] px-[0.75rem] text-center text-[0.69rem] text-grayscale-white">
              <div className="relative tracking-[0.5px] uppercase font-semibold">
                Urgent
              </div>
            </div>
          </div>
          <Image
            width={1.25}
            height={1.25}
            className="self-stretch relative max-w-full overflow-hidden h-[0.06rem] shrink-0"
            alt=""
            src={DashobardImagePath + "/divider--line--horizontal.svg"}
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-center py-[0rem] px-[1.88rem]">
          <div className="self-stretch h-[2.23rem] flex flex-row items-start justify-center gap-[1.63rem]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[1.63rem]">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="relative rounded-[50%] bg-red w-[1.25rem] h-[1.25rem]" />
              </div>
              <div className="relative tracking-[0.2px] leading-[1.25rem] font-semibold">
                Finish shipping update
              </div>
            </div>
            <div className="rounded-lg bg-gold overflow-hidden flex flex-row items-start justify-center py-[0.31rem] px-[0.75rem] text-center text-[0.69rem] text-grayscale-white">
              <div className="relative tracking-[0.5px] uppercase font-semibold">
                Urgent
              </div>
            </div>
          </div>
          <Image
            width={1.25}
            height={1.25}
            className="self-stretch relative max-w-full overflow-hidden h-[0.06rem] shrink-0"
            alt=""
            src={DashobardImagePath + "/divider--line--horizontal1.svg"}
          />
        </div>
        <div className="self-stretch h-[2.23rem] flex flex-col items-center justify-center py-[0rem] px-[1.88rem] box-border">
          <div className="self-stretch flex-1 flex flex-row items-start justify-center gap-[2.25rem]">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[2.25rem]">
              <Image
                width={1.25}
                height={1.25}
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src={DashobardImagePath + "/controls--checkbox--inactive.svg"}
              />
              <div className="relative tracking-[0.2px] leading-[1.25rem] font-semibold">
                Create new order
              </div>
            </div>
            <div className="rounded-lg bg-mediumseagreen overflow-hidden flex flex-row items-start justify-center py-[0.31rem] px-[0.75rem] text-center text-[0.69rem] text-grayscale-white">
              <div className="relative tracking-[0.5px] uppercase font-semibold">
                New
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentActivity
