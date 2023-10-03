import Image from "next/image"
import Link from "next/link"
const Sidenav = () => {
  const DashobardImagePath = "/dashboard_images"

  return (

    
    <div className="flex flex-col items-center justify-start py-[0rem] px-[0.63rem] gap-[4.06rem] text-left text-[0.88rem] text-peru font-poppins md:flex md:w-auto md:[align-self:unset] md:flex-1 md:items-center md:justify-start md:pt-[3.13rem] md:px-[0rem] md:pb-[1.25rem] md:box-border mq666:self-stretch mq666:w-auto mq666:h-auto mq666:items-center mq666:justify-center">
        <Image
           className="relative w-[2.15rem] h-[2.6rem]"
          alt=""
          src={DashobardImagePath + "/vector1.svg"}
          width={2.14}
          height={2.14}
        />
        <div className="flex-1 relative font-medium">
          <Link href={"/"}>Dashobard</Link>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[0.63rem]">
        <Image
          className="relative w-[1.16rem] h-[1.25rem]"
          alt=""
          src={DashobardImagePath + "/vector2.svg"}
          width={2.14}
          height={2.14}
        />

        <div className="flex-1 relative font-medium">
          <Link href={"/orders"}>Orders</Link>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[0.63rem]">
        <Image
          className="relative w-[0.92rem] h-[1.25rem]"
          alt=""
          src={DashobardImagePath + "/vector3.svg"}
          width={2.14}
          height={2.14}
        />
        <div className="flex-1 relative font-medium">
          <Link href={"/products"}>products</Link>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[0.63rem]">
        <Image
          className="relative w-[1.07rem] h-[1.2rem]"
          alt=""
          src={DashobardImagePath + "/vector4.svg"}
          width={2.14}
          height={2.14}
        />
        <div className="flex-1 relative font-medium">
          <Link href={"/settings"}>Settings</Link>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center relative gap-[0.63rem] text-[0.75rem] text-cornflowerblue">
        <div className="rounded-3xs bg-lightsteelblue h-[2.19rem] overflow-hidden z-[0]" />
        <div className="my-0 mx-[!important] absolute top-[calc(50%_-_8.5px)] left-[calc(50%_-_51.78px)] w-[6.46rem] flex flex-row items-start justify-start gap-[0.19rem] z-[1]">
          <div className="flex-1 flex flex-col items-start justify-start relative gap-[0.63rem]">
            <Image
              className="relative w-[1.15rem] h-[1.13rem] z-[0]"
              alt=""
              src={DashobardImagePath + "/vector5.svg"}
              width={2.14}
              height={2.14}
            />
            <Image
              className="absolute my-0 mx-[!important] w-[10%] top-[calc(50%_-_0px)] right-[60%] left-[30%] max-w-full overflow-hidden h-[0.13rem] shrink-0 z-[1]"
              alt=""
              src={DashobardImagePath + "/vector6.svg"}
              width={2.14}
              height={2.14}
            />
            <Image
              className="absolute my-0 mx-[!important] w-[10%] top-[calc(50%_-_0px)] right-[30%] left-[60%] max-w-full overflow-hidden h-[0.13rem] shrink-0 z-[2]"
              alt=""
              src={DashobardImagePath + "/vector7.svg"}
              width={2.14}
              height={2.14}
            />
            <Image
              className="absolute my-0 mx-[!important] w-[59.97%] top-[calc(50%_-_6px)] right-[20%] left-[20.03%] max-w-full overflow-hidden h-[0.4rem] shrink-0 z-[3]"
              alt=""
              src={DashobardImagePath + "/vector8.svg"}
              width={2.14}
              height={2.14}
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
  )
}

export default Sidenav
 