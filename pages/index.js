import Sidenav from "../components/sidenav";
import Header from "../components/header";
import Buttons from "../components/buttons";
import Inbox from "../components/inbox";
import RecentActivity from "../components/recent-activity";

const Desktop = () => {
  return (
    <div className="relative bg-ghostwhite-100 w-full flex flex-col items-center justify-center p-[3.25rem] box-border sm:p-[0rem] sm:box-border">
      <div className="self-stretch rounded-[25px] bg-grayscale-white box-border flex flex-row items-center justify-center py-[0rem] px-[1.25rem] gap-[1.88rem] h-auto border-[10px] border-solid border-grayscale-white md:gap-[0.31rem] sm:rounded-none sm:p-[0rem] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-center p-[0.63rem] md:items-center md:justify-start md:pt-[0rem] md:px-[0rem] md:pb-[0rem] md:box-border sm:hidden mq666:pl-[0.63rem] mq666:box-border">
          <Sidenav />
        </div>
        <div className="flex-1 overflow-x-auto flex flex-col items-center justify-center py-[1.56rem] px-[1.25rem] gap-[1.25rem] md:self-stretch md:h-auto sm:py-[0.63rem] sm:px-[0rem] sm:box-border mq666:pl-[0.63rem] mq666:pr-[0.63rem] mq666:box-border">
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
