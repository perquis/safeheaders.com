import type { ComponentProps, FC } from "react";

export const Clipboard: FC<ComponentProps<"svg">> = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.3525 3.95831C9.13745 3.95831 8.93122 4.04374 8.77915 4.1958C8.62709 4.34786 8.54167 4.5541 8.54167 4.76915V5.98998H11.4583V4.76915C11.4583 4.66267 11.4374 4.55723 11.3966 4.45885C11.3559 4.36048 11.2961 4.27109 11.2208 4.1958C11.1456 4.12051 11.0562 4.06078 10.9578 4.02004C10.8594 3.97929 10.754 3.95831 10.6475 3.95831H9.3525ZM12.6117 4.14415H13.3333C13.9411 4.14415 14.524 4.38559 14.9538 4.81536C15.3836 5.24513 15.625 5.82803 15.625 6.43581V15C15.625 15.6078 15.3836 16.1907 14.9538 16.6204C14.524 17.0502 13.9411 17.2916 13.3333 17.2916H6.66667C6.05888 17.2916 5.47598 17.0502 5.04621 16.6204C4.61644 16.1907 4.375 15.6078 4.375 15V6.43581C4.375 5.82803 4.61644 5.24513 5.04621 4.81536C5.47598 4.38559 6.05888 4.14415 6.66667 4.14415H7.38833C7.52064 3.72714 7.78238 3.36314 8.13556 3.10496C8.48875 2.84678 8.91501 2.70784 9.3525 2.70831H10.6475C11.5675 2.70831 12.3475 3.31165 12.6117 4.14415ZM12.7083 5.39415V6.53165C12.7083 6.92331 12.3917 7.23998 12 7.23998H8C7.81214 7.23998 7.63197 7.16535 7.49913 7.03252C7.36629 6.89968 7.29167 6.71951 7.29167 6.53165V5.39415H6.66667C6.09167 5.39415 5.625 5.86081 5.625 6.43581V15C5.625 15.575 6.09167 16.0416 6.66667 16.0416H13.3333C13.9083 16.0416 14.375 15.575 14.375 15V6.43581C14.375 5.86081 13.9083 5.39415 13.3333 5.39415H12.7083Z"
      fill="currentColor"
    />
  </svg>
);
