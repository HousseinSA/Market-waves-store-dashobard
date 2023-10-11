import Image from "next/image"
const AddProduct_btn = () => {
  const DashobardImagePath = "/dashboard_images"
  return (
    <div className="self-stretch rounded bg-gainsboro shadow-[0px_4px_4px_rgba(0,_0,_0,_0.3)] h-[46.5px] flex flex-row items-center justify-center py-3 px-[123px] box-border gap-[20px] mq612:pl-0 mq612:pr-0 mq612:box-border">
      <div className="flex flex-row items-center justify-center">
        <Image
          className="relative w-[23.39px] h-6"
          alt="product_icon"
          width={23.39}
          height={6}
          src={DashobardImagePath + "/vector3.svg"}
        />
      </div>
      <div className="relative leading-[20px] uppercase font-semibold">
        add product
      </div>
    </div>
  )
}

export default AddProduct_btn
