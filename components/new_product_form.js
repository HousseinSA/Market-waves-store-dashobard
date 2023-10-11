import Image from "next/image"
import {useRouter} from "next/router"
import {useRef} from "react"
const AddNewProduct = () => {
  const TitleRef = useRef()
  const DescreptionRef = useRef()
  const PriceRef = useRef()
  const {push} = useRouter()
  async function handleSubmit() {
    const title = TitleRef.current.value
    const descreption = DescreptionRef.current.value
    const price = PriceRef.current.value
    const productInfo = {title, descreption, price}
    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(productInfo),
      "content-type": "application/json",
    })
    if(response.ok){
    push('/products')
    }
  }
  const DashobardImagePath = "/dashboard_images"
  const NewProductForm =
    "self-stretch w-5/6  flex flex-row items-start justify-start py-[0.5rem] px-[0rem] text-[1rem] sm:flex   mq666:gap-[0.31rem] text-main sm:items-center sm:justify-center "
  return (
    <div className={NewProductForm}>
      <div className="self-stretch w-full h-[399.5px] flex flex-col items-center justify-center gap-[20px] sm:pl-0 sm:pr-[00px] sm:box-border   mq612:flex-1 mq612:pl-5 mq612:pr-5 mq612:box-border">
        <input
          ref={TitleRef}
          className="font-light main text-sm placeholder:text-main focus:outline-main bg-[transparent] self-stretch box-border h-[46.5px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-0 px-[5px] border-[1px] border-solid border-main"
          placeholder="PRODUCT NAME"
          type="text"
          required
        />
        <textarea
          ref={DescreptionRef}
          className="bg-[transparent] placeholder:text-main h-auto focus:outline-main w-auto font-light main text-sm self-stretch box-border overflow-hidden flex flex-col items-center justify-center py-0 px-[5px] border-[1px] border-solid border-main"
          placeholder="DESCREPTION"
          rows={10}
          required={true}
          cols={30}
        />
        <input
          ref={PriceRef}
          className="font-light main text-sm placeholder:text-main focus:outline-main bg-[transparent] self-stretch box-border h-[46.5px] flex flex-col items-center justify-center py-0 px-[5px] border-[1px] border-solid border-main"
          placeholder="PRICE IN USD"
          type="number"
          required
        />
        <div className="self-stretch rounded hover:cursor-pointer  bg-gainsboro shadow-[0px_2px_2px_rgba(0,_0,_0,_0.3)] h-[46.5px] flex flex-col items-center justify-center py-0 px-[5px] box-border mq612:pl-0 mq612:pr-0 mq612:box-border">
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-[5px] gap-[10px]">
            <div className="flex flex-row items-center justify-start">
              <Image
                className=" w-[23.39px] h-6"
                alt=""
                width={23.39}
                height={6}
                src={DashobardImagePath + "/vector3.svg"}
              />
            </div>
            <div
              className="flex-1 justify-center  leading-[20px] uppercase font-thin"
              onClick={handleSubmit}>
              add Product
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewProduct
