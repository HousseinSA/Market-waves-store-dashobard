import Image from "next/image"
const LoginPage = () => {
  const loginPageImages = "/login_page_image"
  return (
    <div className="relative bg-background2 w-full overflow-hidden flex flex-col items-start justify-start text-center text-[1rem] text-background-100">
      <div className="self-stretch h-screen overflow-hidden shrink-0 flex flex-col items-center justify-center py-[0rem] px-[1.25rem] box-border relative gap-[0.63rem]">
        <div className="my-0 mx-[!important] absolute w-full top-[0rem] right-[0%] left-[0%] flex flex-row items-center justify-center gap-[3.25rem] z-[0]">
          <div className="self-stretch flex-1 flex flex-row items-center justify-end z-[0]">
            <Image
              className="relative w-[61.44rem] h-[56.63rem]"
              alt=""
              src={loginPageImages + "/vector.svg"}
              width={61.44}
              height={61.44}
            />
          </div>
          <div className="my-0 mx-[!important] absolute top-[25.56rem] left-[calc(50%_-_764.55px)] h-[45.25rem] flex flex-col items-start justify-center z-[1] md:hidden">
            <div className="flex-1 relative rounded-[50%] bg-background1 w-[38.13rem]" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-[0rem] px-[3.13rem] gap-[2.5rem] z-[1] mq612:self-stretch mq612:w-auto mq612:items-center mq612:justify-center mq612:pl-[0rem] mq612:pr-[0rem] mq612:box-border">
          <div className="flex flex-col items-center justify-center gap-[0.56rem]">
            <div className="h-[4.84rem] flex flex-col items-center justify-end relative gap-[0.63rem]">
              <Image
                className="relative w-[7.7rem] h-[5.07rem] z-[0]"
                alt=""
                src={loginPageImages + "/vector1.svg"}
                width={61.44}
                height={61.44}
              />
              <div className="my-0 mx-[!important] absolute top-[1.2rem] left-[3.48rem] w-[1.71rem] flex flex-row items-center justify-end z-[1]">
                <Image
                  className="flex-1 relative max-w-full overflow-hidden h-[2.28rem]"
                  alt=""
                  src={loginPageImages + "/vector2.svg"}
                  width={61.44}
                  height={61.44}
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[1rem]">
              <Image
                className="relative w-[0.88rem] h-[0.88rem]"
                alt=""
                src={loginPageImages + "/vector3.svg"}
                width={61.44}
                height={61.44}
              />
              <Image
                className="relative w-[0.88rem] h-[0.88rem]"
                alt=""
                src={loginPageImages + "/vector4.svg"}
                width={61.44}
                height={61.44}
              />
            </div>
          </div>
          <div className="self-stretch rounded bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.3)] flex flex-row items-center justify-center py-[0.75rem] px-[7.69rem] gap-[0.94rem] mq612:pl-[0rem] mq612:pr-[0rem] mq612:box-border">
            <div className="flex flex-row items-center justify-center">
              <Image
                className="relative w-[1.46rem] h-[1.5rem]"
                alt=""
                src={loginPageImages + "/vector5.svg"}
                width={61.44}
                height={61.44}
              />
            </div>
            <div className="relative leading-[1.25rem] uppercase font-semibold">
              Login with google
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
