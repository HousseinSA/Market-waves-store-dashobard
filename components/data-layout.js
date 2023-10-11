import {useRouter} from "next/router"
import Header from "../components/header"
export default function DataLayout({children}) {
  const {pathname} = useRouter()
  const styling =
    "flex-col flex flex-1  overflow-hidden px-[1.25rem] gap-[1.25rem] sm:py-[0.63rem] sm:px-[0rem] sm:box-border"
  if (pathname === "/") {
    return (
      <div className={`justify-center  py-[1.56rem]  items-center ${styling}`}>
        <Header />
        {children}
      </div>
    )
  } else {
    return (
      <div className={`h-screen items-start justify-start ${styling}`}>
        <Header />
        {children}
      </div>
    )
  }
}
