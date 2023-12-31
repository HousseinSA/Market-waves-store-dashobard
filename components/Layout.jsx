import DataLayout from "./data-layout"
import Sidenav from "./sidenav"

const Layout = ({children}) => {
  return (
    <div className="relative bg-ghostwhite-100 w-full flex flex-col items-center justify-center p-[3.25rem] box-border md:flex md:p-[1.88rem] md:box-border sm:p-[0rem] sm:box-border">
      <div className="self-stretch rounded-[25px] bg-grayscale-white flex items-center justify-center py-[0rem] px-[1.25rem] gap-[1.88rem] border-[10px] border-solid border-grayscale-white sm:rounded-none sm:p-[0rem] sm:box-border">
        <div className="flex flex-col items-center justify-center p-[0.63rem] md:hidden md:w-auto md:[align-self:unset]">
          <Sidenav />
        </div>
        <DataLayout>{children}</DataLayout>
      </div>
    </div>
  )
}

export default Layout
