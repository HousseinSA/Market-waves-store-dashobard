import Sidenav from "../components/sidenav";
import Header from "../components/header";
import Buttons from "../components/buttons";
import Inbox from "../components/inbox";
import RecentActivity from "../components/recent-activity";

const Desktop = () => {
  return (
    <div className="relative bg-ghostwhite-100 w-full flex flex-col items-center justify-center p-[3.25rem] box-border md:flex md:p-[1.88rem] md:box-border sm:p-[0rem] sm:box-border">
      <div className="self-stretch rounded-[25px] bg-grayscale-white flex flex-row items-center justify-center py-[0rem] px-[1.25rem] gap-[1.88rem] border-[10px] border-solid border-grayscale-white sm:rounded-none sm:h-screen">
        <div className="flex flex-col items-center justify-center p-[0.63rem] md:hidden md:w-auto md:[align-self:unset]">
          <Sidenav />
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-[1.56rem] px-[1.25rem] gap-[1.25rem]">
          <Header />
          <Buttons />
          <Inbox />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
