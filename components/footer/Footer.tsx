import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="flex items-start lg:gap-32 md:gap-16 sm:gap-6 gap-6 self-stretch lg:flex-row md:flex-col sm:flex-col flex-col ml-auto mr-auto">
        <div className="flex items-center gap-2 flex-1 justify-center ml-auto mr-auto lg:mr-0 lg:ml-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            className="min-w-[52px] min-h-[52]"
          >
            <path
              d="M26 50C39.2547 50 50 39.2547 50 26C50 12.7452 39.2547 2 26 2C12.7452 2 2 12.7452 2 26C2 39.2547 12.7452 50 26 50Z"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.2 27.1997L16.4 31.9997L14 40.3997L16.4 47.5997"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M38 46.3997L36.8 40.3997L30.8 37.9997V29.5997L38 27.1997L48.8 28.3997"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M42.8 10.3999L41.6 13.9999L33.2 15.1999V22.3999L39.2 19.9999H44L48.8 22.3999"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.2 22.3999L9.2 17.5999L15.2 16.3999L20 9.1999L17.6 4.3999"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="text-white font-podkova text-2xl font-semibold leading-6">
            Lorem Travel Agents
          </h3>
        </div>
        <div className="flex items-start lg:gap-32 md:gap-20 sm:gap-7 gap-7 flex-1 mr-0">
          <div className="flex flex-col gap-7">
            <h4 className="text-lg font-medium">Explore Destinations</h4>
            <div className="flex flex-col gap-5">
              <Link className="underline cursor-pointer" href={"#"}>
                Search
              </Link>
              <Link className="underline cursor-pointer" href={"#"}>
                Most Popular
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <h4 className="text-lg font-medium">About Us</h4>
            <div className="flex flex-col gap-5">
              <Link className="underline cursor-pointer" href={"#"}>
                Our Mission
              </Link>
              <Link className="underline cursor-pointer" href={"#"}>
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-8 w-full text-sm lg:flex-row md:flex-col sm:flex-col">
        <p>Lorem Travel Agents 2044©</p>
        <div className="flex gap-[24px] ml-auto mr-auto flex-col lg:flex-row md:flex-row">
          <Link className="underline cursor-pointer" href={"#"}>
            Newsletter
          </Link>
          <Link className="underline cursor-pointer" href={"#"}>
            Privacy Policy
          </Link>
          <Link
            className="underline cursor-pointer overflow-visible"
            href={"#"}
          >
            Made by Malin Grafton
          </Link>
        </div>
        <div className="flex gap-[24px] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="min-w-[20] min-h-[20] max-w-[20]"
          >
            <path
              d="M12.2777 5.98927C8.95046 5.98927 6.26672 8.67301 6.26672 12.0002C6.26672 15.3274 8.95046 18.0112 12.2777 18.0112C15.6049 18.0112 18.2886 15.3274 18.2886 12.0002C18.2886 8.67301 15.6049 5.98927 12.2777 5.98927ZM12.2777 15.9081C10.1275 15.9081 8.36977 14.1556 8.36977 12.0002C8.36977 9.84486 10.1223 8.09232 12.2777 8.09232C14.433 8.09232 16.1856 9.84486 16.1856 12.0002C16.1856 14.1556 14.4278 15.9081 12.2777 15.9081ZM19.9365 5.7434C19.9365 6.52288 19.3087 7.14543 18.5345 7.14543C17.755 7.14543 17.1325 6.51765 17.1325 5.7434C17.1325 4.96914 17.7602 4.34137 18.5345 4.34137C19.3087 4.34137 19.9365 4.96914 19.9365 5.7434ZM23.9177 7.16635C23.8287 5.28826 23.3997 3.62466 22.0239 2.25401C20.6532 0.883373 18.9896 0.454394 17.1115 0.360227C15.1759 0.250367 9.37421 0.250367 7.43857 0.360227C5.56571 0.449162 3.9021 0.878141 2.52623 2.24878C1.15036 3.61942 0.72661 5.28303 0.632444 7.16112C0.522584 9.09676 0.522584 14.8984 0.632444 16.8341C0.721379 18.7122 1.15036 20.3758 2.52623 21.7464C3.9021 23.1171 5.56048 23.546 7.43857 23.6402C9.37421 23.7501 15.1759 23.7501 17.1115 23.6402C18.9896 23.5513 20.6532 23.1223 22.0239 21.7464C23.3945 20.3758 23.8235 18.7122 23.9177 16.8341C24.0275 14.8984 24.0275 9.10199 23.9177 7.16635ZM21.417 18.911C21.009 19.9363 20.219 20.7263 19.1884 21.1396C17.6451 21.7516 13.9831 21.6104 12.2777 21.6104C10.5722 21.6104 6.90496 21.7464 5.36691 21.1396C4.34155 20.7315 3.5516 19.9416 3.13831 18.911C2.52623 17.3677 2.66748 13.7057 2.66748 12.0002C2.66748 10.2948 2.53146 6.62751 3.13831 5.08946C3.54637 4.0641 4.33631 3.27415 5.36691 2.86086C6.91019 2.24878 10.5722 2.39003 12.2777 2.39003C13.9831 2.39003 17.6504 2.25401 19.1884 2.86086C20.2138 3.26892 21.0037 4.05887 21.417 5.08946C22.0291 6.63274 21.8878 10.2948 21.8878 12.0002C21.8878 13.7057 22.0291 17.3729 21.417 18.911Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="min-w-[20] min-h-[20] max-w-[20]"
          >
            <path
              d="M21.4286 0H2.57143C1.88944 0 1.23539 0.270918 0.753154 0.753154C0.270918 1.23539 0 1.88944 0 2.57143L0 21.4286C0 22.1106 0.270918 22.7646 0.753154 23.2468C1.23539 23.7291 1.88944 24 2.57143 24H9.92411V15.8405H6.54911V12H9.92411V9.07286C9.92411 5.74339 11.9063 3.90429 14.9421 3.90429C16.3961 3.90429 17.9164 4.16357 17.9164 4.16357V7.43143H16.2413C14.5907 7.43143 14.0759 8.45571 14.0759 9.50625V12H17.7605L17.1713 15.8405H14.0759V24H21.4286C22.1106 24 22.7646 23.7291 23.2468 23.2468C23.7291 22.7646 24 22.1106 24 21.4286V2.57143C24 1.88944 23.7291 1.23539 23.2468 0.753154C22.7646 0.270918 22.1106 0 21.4286 0Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="14"
            viewBox="0 0 24 18"
            fill="none"
            className="min-w-[20] min-h-[14] max-w-[20] p-0"
          >
            <path
              d="M21.75 0H2.25C1.00734 0 0 1.00734 0 2.25V15.75C0 16.9927 1.00734 18 2.25 18H21.75C22.9927 18 24 16.9927 24 15.75V2.25C24 1.00734 22.9927 0 21.75 0ZM21.75 2.25V4.16273C20.699 5.01862 19.0234 6.3495 15.4412 9.15445C14.6518 9.77541 13.0881 11.2672 12 11.2498C10.9121 11.2674 9.34786 9.77517 8.55877 9.15445C4.97719 6.34992 3.30117 5.01877 2.25 4.16273V2.25H21.75ZM2.25 15.75V7.04991C3.32409 7.90542 4.8473 9.10594 7.16897 10.9239C8.19352 11.7304 9.98775 13.5108 12 13.5C14.0024 13.5108 15.7739 11.7563 16.8306 10.9243C19.1522 9.10636 20.6759 7.90552 21.75 7.04995V15.75H2.25Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
