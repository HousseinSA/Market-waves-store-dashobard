import Image from "next/image"
import {useSession} from "next-auth/react"
const Header = () => {
  const DashobardImagePath = "/dashboard_images"
  const {data: session} = useSession()
  return (
    <div className="self-stretch flex flex-row items-center justify-between py-[0.5rem] px-[0rem] text-left text-[1rem] text-black font-poppins sm:flex mq666:gap-[0.31rem]">
      <div className="flex flex-col items-start justify-center">
        <div className="relative">total balance</div>
        <div className="relative text-[1.75rem] font-semibold">$ 45,365.00</div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-end gap-[1.88rem] md:hidden">
        <Image
          className="relative rounded-[50%] w-[3.13rem] h-[3.13rem] object-cover"
          alt=""
          src={session?.user.image}
          width={50}
          height={50}
        />
      </div>
      <div className="w-[3.13rem] overflow-hidden shrink-0 hidden flex-col items-center justify-center py-[0.63rem] px-[0rem] box-border md:flex sm:flex mq666:flex">
        <Image
          className="relative w-[3.13rem] h-[2.25rem]"
          alt=""
          width={3.14}
          height={3.14}
          src={DashobardImagePath + "/vector15.svg"}
        />
      </div>
    </div>
  )
}

export default Header
