import Image from "next/image"
const Header = () => {
  const DashobardImagePath = "/dashboard_images"

  return (
    <div className="self-stretch flex flex-row items-center justify-between py-[0.5rem] px-[0rem] text-left text-[1rem] text-black font-poppins sm:flex mq666:gap-[0.31rem]">
      <div className="flex flex-col items-start justify-center">
        <div className="relative">total balance</div>
        <div className="relative text-[1.75rem] font-semibold">$ 45,365.00</div>
      </div>
      <div className="flex-1 rounded-3xs bg-grayscale-white shadow-[0px_0px_5px_rgba(0,_0,_0,_0.1)_inset] hidden flex-row items-center justify-center relative text-[1.13rem] text-lightgray md:hidden">
        <div className="my-0 mx-[!important] absolute top-[0.5rem] left-[0.89rem] flex flex-row items-center justify-center gap-[0.5rem] z-[0]">
          <Image
            className="relative w-[1.25rem] h-[1.25rem]"
            alt=""
            src={DashobardImagePath + "/vector9.svg"}
            width={1.5}
            height={1.5}
          />
          <div className="relative">Search</div>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-end gap-[1.88rem] md:hidden">
        <div className="flex flex-row items-start justify-center gap-[0.25rem]">
          <Image
            className="relative w-[1.5rem] h-[1.5rem]"
            alt=""
            src={DashobardImagePath + "/vector10.svg"}
            width={1.5}
            height={1.5}
          />
          <Image
            className="relative w-[0.47rem] h-[0.47rem]"
            alt=""
            src="/vector11.svg"
            width={1.5}
            height={1.5}
          />
        </div>
        <div className="flex flex-row items-start justify-end">
          <Image
            className="relative w-[1.4rem] h-[1.37rem]"
            alt=""
            src={DashobardImagePath + "/vector12.svg"}
            width={1.5}
            height={1.5}
          />
          <Image
            className="relative w-[0.47rem] h-[0.47rem]"
            alt=""
            src={DashobardImagePath + "/vector13.svg"}
            width={1.5}
            height={1.5}
          />
          <Image
            className="relative w-[0.25rem] h-[0.11rem]"
            alt=""
            src={DashobardImagePath + "/vector14.svg"}
            width={1.5}
            height={1.5}
          />
        </div>
        <Image
          className="relative rounded-[50%] w-[3.13rem] h-[3.13rem] object-cover"
          alt=""
          src={DashobardImagePath + "/ellipse-1@2x.png"}
          width={1.5}
          height={1.5}
        />
      </div>
      <div className="w-[3.13rem] overflow-hidden shrink-0 hidden flex-col items-center justify-center py-[0.63rem] px-[0rem] box-border md:flex">
        <Image
          className="relative w-[3.13rem] h-[2.25rem]"
          alt=""
          src={DashobardImagePath + "/vector15.svg"}
          width={1.5}
          height={1.5}
        />
      </div>
    </div>
  )
}

export default Header
