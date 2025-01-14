export default function Header() {
  return (
    <div className="w-full h-[64px] bg-[#fff] dark:bg-[#2B2C37] flex items-center justify-between px-[16px]">
      <div className="flex items-center gap-[16px]">
        <img src="/assets/logo-mobile.svg" alt="logo-mobile" />
        <div className="flex items-center gap-[9px]">
          <h2 className="text-[18px] font-bold text-[#000112] dark:text-[#FFFFFF]">
            Platform Launch
          </h2>
          <img src="/assets/icon-chevron-down.svg" alt="arrow-down" />
        </div>
      </div>
      <div className="flex items-center gap-[16px]">
        <div className="w-[48px] h-[32px] rounded-[24px] bg-[#635FC7] flex items-center justify-center">
          <img src="/assets/plus.png" alt="plus" />
        </div>
        <div>
          <img
            src="/assets/icon-vertical-ellipsis.svg"
            alt="vertical-ellipsis"
          />
        </div>
      </div>
    </div>
  );
}
