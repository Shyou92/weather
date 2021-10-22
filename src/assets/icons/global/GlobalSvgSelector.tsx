import React from 'react'

interface Props {
  id: string,
}

export const GlobalSvgSelector = ({ id }: Props) => {
  switch (id) {
    case "header-logo":
      return (
      <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65Z" fill="#4793FF"/>
        <path d="M65 32.5C65 29.8954 64.6916 27.3631 64.113 24.9358L54.3423 15.1651L53.0241 15.7211L48.3235 11.1622C48.3235 11.1622 46.5495 14.0707 44.5394 12.8754L41.3829 9.79712L41.1963 14.2822L8.78809 46.265L27.0688 64.5458C28.8351 64.843 30.6492 65 32.5 65C50.4493 65 65 50.4493 65 32.5Z" fill="#424FDD"/>
        <path d="M58.3388 29.0023L59.7103 28.1252L58.2387 27.1841C56.6468 26.1659 56.217 24.03 57.2916 22.4755L58.2847 21.0387L56.6808 20.7601C54.8077 20.4347 53.5845 18.6126 53.9927 16.7559L54.3422 15.1659L52.6363 15.541C50.7905 15.9467 48.9765 14.7403 48.637 12.8812L48.3233 11.163L46.9922 12.1001C45.4377 13.1946 43.2843 12.7711 42.26 11.1694L41.3829 9.79797L40.4418 11.2695C39.4237 12.8615 37.2878 13.2912 35.7333 12.2167L34.2964 11.2235L34.0179 12.8275C33.6925 14.7005 31.8705 15.9237 30.0136 15.5156L28.4237 15.1661L28.7987 16.8719C29.2044 18.7177 27.998 20.5317 26.1389 20.8712L24.4207 21.1849L25.3579 22.516C26.4524 24.0705 26.0288 26.2239 24.4272 27.2482L23.0557 28.1253L24.5271 29.0664C26.1192 30.0846 26.5488 32.2204 25.4743 33.775L24.4812 35.2118L26.0851 35.4904C27.9581 35.8157 29.1813 37.6379 28.7732 39.4946L28.4237 41.0845L30.1296 40.7095C31.9753 40.3038 33.7894 41.5102 34.1288 43.3693L34.4425 45.0876L35.7736 44.1505C37.3282 43.056 39.4816 43.4795 40.5058 45.0812L41.3829 46.4526L42.324 44.9811C43.3422 43.3891 45.4781 42.9594 47.0326 44.0339L48.4695 45.0271L48.748 43.4231C49.0734 41.5501 50.8955 40.3269 52.7522 40.735L54.3422 41.0845L53.9672 39.3787C53.5614 37.5329 54.7678 35.7189 56.627 35.3794L58.3453 35.0657L57.4081 33.7346C56.3136 32.1801 56.7371 30.0265 58.3388 29.0023V29.0023Z" fill="#FDBF2D"/>
        <path d="M57.4082 33.734L58.3451 35.0645L56.6275 35.3781C54.7676 35.7183 53.5615 37.5324 53.9678 39.3783L54.3423 41.0833L52.7529 40.7342C50.8955 40.3254 49.0738 41.5492 48.7475 43.4218L48.4695 45.0265L47.0323 44.0324C45.4784 42.9584 43.3418 43.3875 42.3237 44.9795L41.3829 46.4522V9.797L42.2602 11.1681C43.2847 12.7702 45.4378 13.1943 46.9917 12.0987L48.3235 11.1617L48.637 12.8807C48.976 14.7393 50.7902 15.9453 52.6361 15.5404L54.3423 15.1646L53.9932 16.7553C53.5844 18.6114 54.8082 20.4344 56.6808 20.7594L58.2842 21.0374L57.2914 22.4745C56.2174 24.0297 56.6465 26.1651 58.2385 27.1832L59.7099 28.1239L58.3388 29.0012C56.7366 30.0257 56.3139 32.1788 57.4082 33.734Z" fill="#FD9827"/>
        <path d="M41.383 40.9705C48.4777 40.9705 54.2291 35.2191 54.2291 28.1243C54.2291 21.0296 48.4777 15.2782 41.383 15.2782C34.2883 15.2782 28.5369 21.0296 28.5369 28.1243C28.5369 35.2191 34.2883 40.9705 41.383 40.9705Z" fill="#FFE05F"/>
        <path d="M54.2293 28.1239C54.2293 35.2193 48.4771 40.9703 41.3829 40.9703V15.2788C48.4771 15.2788 54.2293 21.0298 54.2293 28.1239V28.1239Z" fill="#F9CB0D"/>
        <path d="M42.5274 32.242C42.1958 32.242 41.8694 32.2633 41.5478 32.3006C41.5794 31.9404 41.5966 31.5761 41.5966 31.2077C41.5966 24.3886 36.0687 18.8606 29.2495 18.8606C23.5703 18.8606 18.7873 22.6953 17.3468 27.9164C16.8894 27.8562 16.4229 27.8248 15.9491 27.8248C10.0886 27.8248 5.33777 32.5756 5.33777 38.4361C5.33777 44.2967 10.0886 49.0475 15.9491 49.0475H42.5274C47.1682 49.0475 50.9302 45.2854 50.9302 40.6447C50.9302 36.004 47.1682 32.242 42.5274 32.242V32.242Z" fill="white"/>
        <path d="M50.9302 40.6436C50.9302 45.2846 47.1684 49.0466 42.5272 49.0466H28.134V18.9097C28.5016 18.8759 28.8735 18.8596 29.2498 18.8596C36.0691 18.8596 41.5969 24.3873 41.5969 31.2066C41.5969 31.5753 41.5795 31.9395 41.5478 32.2996C41.8696 32.2625 42.1956 32.2407 42.5272 32.2407C47.1684 32.2407 50.9302 36.0036 50.9302 40.6436V40.6436Z" fill="#DAEFEC"/>
      </svg>
      );
    case "change-theme":
      return (
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6667 4.09792V24.7917C6.83958 24.7917 2.91667 20.9562 2.91667 16.2312C2.91667 13.9562 3.82083 11.8125 5.46875 10.1937L11.6667 4.09792ZM11.6667 0L3.42708 8.10833C1.3125 10.1937 0 13.0667 0 16.2312C0 22.575 5.22083 27.7083 11.6667 27.7083C18.1125 27.7083 23.3333 22.575 23.3333 16.2312C23.3333 13.0667 22.0208 10.1937 19.9062 8.10833L11.6667 0Z" fill="#4793FF"/>
        </svg>
      )
      case "sun":
        return (
          <svg width="119" height="119" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M59.5229 88.0144C75.2638 88.0144 88.0243 75.2545 88.0243 59.5144C88.0243 43.7742 75.2638 31.0143 59.5229 31.0143C43.782 31.0143 31.0215 43.7742 31.0215 59.5144C31.0215 75.2545 43.782 88.0144 59.5229 88.0144Z" fill="url(#paint0_linear_2:179)"/>
            <path d="M86.3084 5.95127L79.6106 22.1222C77.4274 27.389 69.5268 24.1172 71.71 18.8504L78.4078 2.67947C80.591 -2.58734 88.4916 0.684466 86.3084 5.95127ZM47.2843 100.155L40.5865 116.326C38.4033 121.593 30.5027 118.321 32.6859 113.054L39.3837 96.8835C41.5669 91.6167 49.4675 94.8885 47.2843 100.155ZM116.326 40.5959L100.154 47.2934C94.8873 49.4765 91.6154 41.5763 96.8824 39.3932L113.054 32.6957C118.321 30.5126 121.593 38.4128 116.326 40.5959ZM22.1176 79.6182L5.94586 86.3157C0.6788 88.4988 -2.59316 80.5986 2.6739 78.4155L18.8456 71.718C24.1127 69.5349 27.3846 77.4351 22.1176 79.6182ZM113.054 86.3214L96.8824 79.6239C91.6154 77.4408 94.8873 69.5406 100.154 71.7237L116.326 78.4212C121.593 80.6043 118.321 88.5045 113.054 86.3214ZM18.8456 47.2991L2.6739 40.6016C-2.59316 38.4185 0.6788 30.5183 5.94586 32.7014L22.1176 39.3989C27.3846 41.582 24.1127 49.4822 18.8456 47.2991ZM40.5808 2.67377L47.2786 18.8447C49.4618 24.1115 41.5612 27.3833 39.378 22.1165L32.6802 5.94557C30.497 0.678766 38.3976 -2.59304 40.5808 2.67377ZM79.6049 96.8778L86.3027 113.049C88.4859 118.316 80.5853 121.587 78.4021 116.321L71.7043 100.15C69.5211 94.8828 77.4217 91.611 79.6049 96.8778Z" fill="#FFB300"/>
            <defs>
              <linearGradient id="paint0_linear_2:179" x1="59.5229" y1="31.0143" x2="59.5229" y2="87.2546" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFC227"/>
                <stop offset="1" stopColor="#FFB300"/>
              </linearGradient>
            </defs>
          </svg>
        )
      case "sunny": 
        return (
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 1220 1280"><g fill="#FFC227">
            <path d="M597.4 2.4c-7.2 3.3-13.1 9-16.5 16l-2.9 6v92.3c0 67.9.3 92.9 1.2 94.6.6 1.2 1.5 2.9 2 3.7l1.5 3c1.4 3 9.3 9.7 13.5 11.4 2.4 1 5.1 2.2 6 2.7 2.4 1.2 15.8 1.1 15.8-.1 0-.6.8-1 1.9-1 2.7 0 10.2-4.4 13.7-8.2 4.3-4.5 8.4-12.2 8.4-15.8 0-1.6.3-3.1.8-3.3.4-.3.5-40.9.2-90.4l-.5-89.8-3-5.4c-4.3-7.8-10.3-13.3-17.9-16.5-5.9-2.5-17.9-2-24.2.8zM245.5 116.6c-7.2 1.9-17 9.3-20 15-1.1 2.1-2.3 4.1-2.6 4.4-2.1 1.7-3.5 16.1-1.9 20.3 2.8 7.3 4.4 10.5 7.9 15.2 2.1 2.7 5 6.8 6.6 9 1.6 2.2 3.3 4.1 3.7 4.3.4.2.8.9.8 1.6 0 .7.8 2.2 1.8 3.4 4.3 5.1 5.2 6.2 6.9 8.9 1.7 2.6 9.8 13.8 12.6 17.3.7.8 4.1 5.5 7.7 10.5 3.5 4.9 6.8 9.1 7.2 9.3.4.2.8 1 .8 1.7s.3 1.5.8 1.7c.4.1 2.5 2.8 4.7 5.8s4.3 5.6 4.7 5.8c.5.2.8.8.8 1.3 0 1 10.7 16 19 26.6 2.2 2.8 4 5.6 4 6.1s.7 1.5 1.6 2.3c.9.7 4.5 5.5 8.1 10.6 7.4 10.7 15.2 17.2 21.4 18 2.2.3 4.2 1 4.5 1.4.7 1.2 9.1 1.2 9.8 0 .3-.4 2.3-1.1 4.3-1.3 4-.6 11.2-4.9 15-9 1.2-1.2 3.6-5 5.4-8.3 2.8-5.4 3.2-6.9 3.2-14.5 0-10.1-1.1-12.5-13.7-29.5-4.5-6.1-9.1-12.4-10.1-14-1-1.7-2.5-3.6-3.2-4.4-1.3-1.3-7.5-9.9-12.2-17-1.3-2-2.7-3.8-3-4.1-.4-.3-2.4-3-4.6-6-2.2-3-4.8-6.4-5.7-7.4-1-1.1-2-2.8-2.4-3.8-.3-1-1-1.8-1.5-1.8s-.9-.4-.9-1c0-.5-.7-1.8-1.5-2.7-.8-1-4.9-6.5-9.1-12.3-4.3-5.8-8-10.7-8.3-11-.3-.3-1-1.2-1.6-2.2-1.3-2.1-11.6-17-12.7-18.3-.5-.5-4-5.3-7.9-10.5-12.8-17.2-18-20.9-30.3-21.5-4.5-.2-9-.2-10.1.1zM956.8 116.7c-1.6.2-2.8.9-2.8 1.4 0 .5-.5.9-1.1.9-2.9 0-11 8.2-18.4 18.5-1.1 1.6-3.2 4.4-4.7 6.4s-3.1 4-3.5 4.6c-.5.5-2.1 3-3.8 5.5-1.6 2.5-3.3 4.6-3.7 4.8-.5.2-.8.8-.8 1.4 0 .6-1.1 2.4-2.5 4.2-1.4 1.7-2.9 3.6-3.4 4.2-.5.6-2.6 3.5-4.7 6.5s-4.1 5.6-4.4 5.9c-.3.3-2.3 3-4.5 6s-4.3 5.6-4.7 5.8c-.5.2-.8 1-.8 1.8s-.4 1.4-.9 1.4-1.2.8-1.5 1.7c-.3 1-1.9 3.4-3.6 5.3-1.6 1.9-3 3.8-3 4.2 0 .3-1.9 3-4.3 6-4.4 5.5-5.1 6.5-11.5 15.8-2 3-4.2 6.1-4.9 7-7.9 9.9-21.3 28.8-23.9 33.8-3 5.6-3.4 7.3-3.4 13.8 0 4.1.4 8.2.9 9.2.5.9 1.5 3 2.2 4.7 1.9 4 2.6 5 7.9 10.2 7.2 7.1 11.4 8.5 23.4 8.1 10-.3 10.2-.3 16.2-4.5 4-2.7 7.9-6.6 11-11 2.6-3.7 5.2-7 5.6-7.1.4-.2.8-.9.8-1.6 0-.7 1.1-2.3 2.5-3.6 1.4-1.3 2.5-2.9 2.5-3.7 0-.7.3-1.3.8-1.3.4-.1 2.3-2.4 4.2-5.2 1.9-2.8 7.7-10.6 12.8-17.5 5-6.9 9.2-12.7 9.2-12.9 0-.6 5.1-7.5 6.1-8.4.3-.3 2-2.6 3.7-5.2 1.8-2.5 3.8-5.2 4.5-6 .7-.7 2.3-2.9 3.4-4.8 1.2-2 3-4.6 4.1-5.7 1-1.2 2.6-3.2 3.5-4.5.9-1.3 5.4-7.4 9.9-13.6 4.6-6.2 10.9-15 14.1-19.6 3.2-4.6 6.6-9.2 7.5-10.3.9-1 2.5-3.6 3.6-5.8 1-2.2 2.2-4.8 2.7-5.7 1.3-2.5 1.1-15.2-.2-18.5-3.1-7.5-4.1-9.2-7.1-12.4-1.8-1.9-5.5-5-8.3-6.9-4.8-3.3-5.5-3.5-14.5-3.6-5.2-.1-10.7 0-12.2.3zM585 304.9c-.8.4-7.2 1.1-14.2 1.5-13 .6-21.8 1.9-25.3 3.5-1.1.5-5.1 1.5-9 2.1-12.3 1.9-13.5 2.2-14.1 3.1-.3.5-1.4.9-2.4.9-2.2 0-21.7 6.3-26.7 8.6-1.7.7-3.6 1.4-4.2 1.4-.6 0-1.9.4-2.9.9-.9.5-3.5 1.7-5.7 2.6-16.9 7.2-34.4 16-36.8 18.4-.6.6-1.7 1.1-2.4 1.1-.8 0-2.2.8-3.3 1.8-1 1-4.2 3-6.9 4.5-2.8 1.5-7.1 4.2-9.5 5.9-2.4 1.8-7.5 5.5-11.3 8.3-3.7 2.7-7.3 5.4-7.9 6-.7.5-3.6 2.8-6.5 5s-12.1 10.7-20.4 19c-20.8 20.6-33.4 35.5-43.9 52-2.1 3.2-4.4 6.5-5.2 7.2-.8.8-1.4 2.1-1.4 2.9 0 .8-.4 1.4-1 1.4-.5 0-1 .5-1 1.1 0 .6-1.3 2.9-2.8 5.2-1.6 2.3-4.4 7.3-6.3 11.2-1.9 3.8-3.6 7.2-3.9 7.5-1.2 1.2-8 15.9-8 17.4 0 .9-.4 1.6-1 1.6-.5 0-1 .9-1 1.9 0 1.1-.5 2.3-1 2.6-.6.3-1 1.3-1 2 0 .8-1.1 3.9-2.5 6.9-1.4 3-2.5 6.1-2.5 7 0 .8-.4 1.8-1 2.1-.5.3-1 1.7-1 3s-.4 2.6-.9 2.9c-.5.3-1.2 2.6-1.5 5-.4 2.5-1.4 5.9-2.3 7.6-.8 1.7-1.7 5-2 7.3-.3 2.3-1 4.7-1.5 5.4-.5.7-.7 1.7-.3 2.3.3.6-.1 2.4-.9 4.1-.9 1.8-1.9 6.7-2.2 11.1-.4 4.3-1.1 8.1-1.5 8.4-.5.3-.9 2.9-.9 5.8 0 2.8-.6 5.8-1.2 6.4-1 1-1.3 10.6-1.3 41.2s.3 40.2 1.3 41.1c.6.7 1.2 3.7 1.2 6.5 0 2.9.4 5.5.9 5.8.4.3 1.1 4.1 1.5 8.4.3 4.4 1.3 9.3 2.2 11.1.8 1.7 1.2 3.5.9 4.1-.4.6-.2 1.6.3 2.3.5.7 1.2 3.1 1.5 5.4.3 2.3 1.2 5.6 2 7.3.9 1.7 1.9 5.1 2.3 7.6.3 2.4 1 4.7 1.5 5 .5.3.9 1.6.9 2.9 0 1.3.5 2.7 1 3 .6.3 1 1.3 1 2.1 0 .9 1.1 4 2.5 7s2.5 6.1 2.5 6.9c0 .7.5 1.7 1 2 .6.3 1 1.5 1 2.6 0 1 .5 1.9 1 1.9.6 0 1 .8 1 1.7 0 1.7 6.9 16.4 8.1 17.3.3.3 1 1.6 1.4 3 .4 1.4 1.6 3.7 2.6 5.2 1.1 1.4 1.9 2.9 1.9 3.4 0 .4 1.6 3.1 3.5 6s3.5 5.7 3.5 6.3c0 .6.5 1.1 1 1.1.6 0 1 .6 1 1.4 0 .8.6 2.1 1.4 2.9.8.7 3.1 4 5.2 7.2 3.1 4.9 6.5 9.8 11.2 16 3 4 8.9 11.2 9.9 12 .6.5 2.8 3 4.8 5.5 12.1 14.9 33.4 34.3 54.5 49.9 3 2.2 6 4.4 6.5 4.8 2.1 1.8 12.4 8.3 13 8.3.5 0 6.4 3.9 7.5 5 .3.3 2.7 1.6 5.3 3 9.4 4.8 10.2 5.3 10.8 6.2.3.6.9.9 1.3.8.3 0 3.7 1.3 7.4 3s8.7 4.1 11.2 5.2c2.5 1.1 6.2 2.9 8.3 3.9 2 1 5.3 2.1 7.2 2.5 1.9.3 3.8 1 4.1 1.5.3.5 1.4.9 2.5.9 1 0 1.9.4 1.9 1 0 .5.8 1 1.8 1s5.1 1.1 9 2.5c3.9 1.4 8.3 2.5 9.7 2.5 1.4 0 2.5.4 2.5.9s1.7 1.1 3.8 1.5c11.5 1.7 18.9 3.3 20.7 4.3 2.3 1.3 20.7 3.3 30.1 3.3 3.5 0 6.5.4 6.8.9.9 1.3 29.1 2.1 41.6 1.1 6.3-.5 17.1-1.4 24-1.9 14.2-1.1 25.8-2.9 26.5-4.1.3-.4 3.5-1.1 7.2-1.5 3.6-.4 7.6-1.1 8.7-1.5 1.2-.4 3.9-1.3 6.1-1.8 7.4-1.9 28-8.6 30.5-9.9 1.4-.7 3-1.3 3.7-1.3.7 0 2.7-.8 4.5-1.8 1.8-1 5.2-2.4 7.6-3.2 2.3-.7 4.2-1.7 4.2-2.2 0-.4.6-.8 1.3-.8.6 0 3.9-1.4 7.2-3 3.3-1.6 6.3-3 6.8-3 .4 0 4.1-2 8.1-4.5 4.1-2.5 7.7-4.5 8.1-4.5.3 0 6.1-3.6 12.7-8 6.7-4.4 12.6-8 13-8 .4 0 .8-.4.8-1 0-.5 1.2-1.6 2.8-2.4 1.5-.8 3.9-2.5 5.3-3.8 1.5-1.3 4.2-3.5 6-5 1.9-1.5 4.7-3.7 6.3-5 8-6.4 25.9-23.9 34.6-33.8 3-3.4 6-6.7 6.5-7.4 2.3-2.4 11.2-13.7 14.5-18.3 1.9-2.6 3.9-5.2 4.3-5.8.8-1.1 7.9-11.9 13-20 1.7-2.8 5-8.6 7.2-13 2.3-4.4 4.6-8.9 5.2-10 .7-1.1 1.8-3.5 2.5-5.3.7-1.7 1.6-3.2 2-3.2.4 0 1-1.6 1.4-3.5.3-1.9 1-3.8 1.5-4.1.5-.3.9-1.4.9-2.5 0-1 .5-1.9 1-1.9.6 0 1-.7 1-1.5s.4-2.3.9-3.3c2.1-3.9 4.1-9.1 4.1-10.5 0-.9.5-1.9 1-2.2.6-.3 1-1.7 1-3s.4-2.6.9-2.9c.5-.3 1.2-2.7 1.6-5.3.4-2.5 1.3-5.6 2-6.7.8-1.2 2.1-5.7 2.9-10.1.8-4.4 2.2-10.5 3-13.5.9-3 1.6-7.3 1.6-9.5 0-2.3.4-4.5.9-5.1 1.1-1.1 1.7-6 3.8-33.6 1.5-20.3 1.5-23.3 0-43.5-2.1-27.7-2.7-32.6-3.8-33.7-.5-.6-.9-2.8-.9-5.1 0-2.2-.7-6.5-1.6-9.5-.8-3-2.2-9.1-3-13.5-.9-4.4-2.1-8.9-2.9-10.1-.7-1.1-1.6-4.2-2-6.7-.4-2.6-1.1-5-1.6-5.3-.5-.3-.9-1.6-.9-2.9 0-1.3-.4-2.7-1-3-.5-.3-1-1.3-1-2.1 0-.9-1.1-4-2.5-7s-2.5-6.1-2.5-6.9c0-.8-.4-1.5-1-1.5-.5 0-1-1.1-1-2.5s-.4-2.5-1-2.5c-.5 0-1-.7-1-1.6 0-.8-1.1-3.5-2.5-6s-2.5-5.1-2.5-5.9c0-.7-.3-1.5-.7-1.7-.5-.2-2.8-4.3-5.3-9.3-2.5-4.9-6.2-11.7-8.4-15-9.7-15.1-11.6-18.1-12.3-19-.5-.6-2.6-3.5-4.8-6.5-2.2-3-4.4-6-5-6.6-.5-.6-2.3-2.8-4-4.9-1.6-2.1-3.4-4.3-4-4.9-.5-.6-3.9-4.4-7.5-8.5-10.4-11.9-21.9-23.1-34.5-33.6-3.3-2.7-6.5-5.4-7.1-6-.6-.5-2.7-2.1-4.7-3.5s-3.7-2.8-3.7-3.3c0-.4-.7-.7-1.5-.7s-2-.9-2.7-2c-.7-1.1-1.6-2-2-2-.5 0-3.6-1.9-7.1-4.3-3.4-2.4-8.4-5.6-11.2-7.2-2.7-1.5-5.2-3.1-5.5-3.5-.3-.4-1.5-1-2.7-1.4-1.3-.4-2.3-1.1-2.3-1.5 0-.4-2.5-1.8-5.5-3.1s-5.5-2.8-5.5-3.2c0-.4-.5-.8-1.1-.8-.6 0-4.1-1.4-7.8-3.1-3.6-1.7-8.6-4-11.1-5.1-2.5-1.1-6.2-2.9-8.3-3.9-2-1-5.3-2.1-7.2-2.5-1.9-.3-3.8-1-4.1-1.5-.3-.5-1.4-.9-2.5-.9-1 0-1.9-.4-1.9-.8s-2.7-1.4-6-2.1c-3.3-.8-6.3-1.7-6.6-2.2-.2-.5-2.7-1.1-5.4-1.5-2.8-.4-5-1-5-1.4 0-.4-1.7-1-3.7-1.4-9.9-1.5-19.1-3.3-21.5-4.4-1.4-.6-8.2-1.6-15-2.1-6.8-.6-14.8-1.4-17.8-1.7-9.3-1-53.4-1.4-55-.5zM1180 420.1c-1.9.6-5 1.3-6.7 1.6-1.8.3-3.3.9-3.3 1.4 0 .5-1.1.9-2.4.9-1.4 0-2.7.4-3 .9-.3.5-2.3 1.2-4.3 1.6-2.1.3-4.7 1.2-5.8 1.9-1.1.7-3.8 1.6-6 2-4.1.8-11.5 3.1-15 4.6-1.1.5-3.8 1.4-6 2.1-2.2.6-5.7 1.8-7.8 2.5-2 .8-4.9 1.4-6.2 1.4-1.4 0-2.5.4-2.5.8s-2.1 1.3-4.7 2c-2.7.8-5.6 1.8-6.5 2.3-1 .5-2.7.9-3.7.9-1.1 0-2.2.4-2.5.9-.4.5-2.5 1.2-4.8 1.6-2.3.4-5 1.1-6 1.6s-2.7 1.3-3.8 1.9c-1.1.5-2.7 1-3.5 1-.8 0-2.3.4-3.3.9-.9.5-4.4 1.7-7.7 2.6-3.3 1-6.9 2.1-8 2.6-5 2-11.8 3.9-14 3.9-1.4 0-2.5.3-2.5.7 0 .5-3.5 1.9-7.8 3.2-4.2 1.3-8.1 2.7-8.7 3.1-.5.4-2.7 1-4.8 1.4-4 .7-5.1 1.5-12.4 8-4.4 4-8.3 10.7-8.3 14.5 0 1.1-.4 2.3-1 2.6-1.3.8-1.3 10-.1 12.3.6.9 1.3 3.4 1.6 5.4.3 2.1 1 3.8 1.5 3.8.6 0 1 .6 1 1.4 0 1.7 10 11.6 11.8 11.6.6 0 1.2.4 1.2.8 0 2.8 22.8 4.8 25.3 2.3.6-.6 2.1-1.1 3.3-1.1 1.3 0 2.6-.5 2.9-1 .3-.6 1.7-1 3.1-1 1.3 0 2.4-.5 2.4-1 0-.6.8-1 1.7-1 1 0 5.1-1.1 9.3-2.4 4.1-1.4 12.9-4.1 19.5-6.2 6.6-2.1 12.5-4.1 13-4.5.6-.4 3.1-1 5.8-1.4 2.6-.4 4.7-1 4.7-1.4 0-.4 2.1-1.2 4.8-2 2.6-.7 5.6-1.7 6.7-2.1 1.1-.5 6.1-2.1 11-3.6 5-1.5 9.4-3.1 9.9-3.6.6-.4 2-.8 3.2-.8 1.3 0 2.5-.4 2.8-.9.4-.5 2.3-1.2 4.4-1.6 4.4-.7 10.8-2.8 11.8-3.8.4-.4 1.8-.7 3-.7 1.3 0 2.5-.4 2.8-.9.3-.4 2.5-1.1 4.8-1.5 2.3-.4 4.7-1.1 5.3-1.6.6-.5 3.7-1.6 6.9-2.4 3.2-.9 7.1-2.2 8.8-3 1.6-.9 4.6-1.8 6.7-2.2 4.6-.9 8.3-3.4 14.4-9.8 6.8-7.1 7.7-9.9 7.6-22.5 0-11.1 0-10.9-5.8-19.2-2.2-3.2-8.5-8.1-13.8-10.8-3.1-1.6-16.1-2.2-20.3-1zM22.5 421.3c-1.6.6-3.2 1.4-3.5 1.7-.3.3-1.8 1.2-3.4 2-3.4 1.8-10.6 9.6-12.5 13.6-.7 1.6-1.7 3.7-2.2 4.6-.5 1-.9 5.3-.9 9.7 0 6.9.4 8.6 3.1 13.7 1.7 3.3 4 7 5.2 8.3 3.3 3.5 10 7.9 13.3 8.7 1.6.4 3.4 1 4 1.5.5.5 3.6 1.5 6.8 2.3 3.2.9 7.1 2.2 8.7 3 1.7.8 5 1.8 7.4 2.2 2.5.3 4.5 1 4.5 1.5s1 .9 2.3.9c1.3 0 2.7.4 3.2.8.6.5 2.8 1.4 5 2 13.6 3.8 16.1 4.6 16.9 5.4.6.4 2 .8 3.3.8 1.3 0 2.3.4 2.3 1 0 .5.9 1 2 1 2.2 0 22.3 6.4 25.2 8 .9.5 3.5 1.3 5.8 1.6 2.2.4 4.3 1.1 4.6 1.5.3.5 1.4.9 2.5.9 1 0 2.7.4 3.7 1 2.6 1.5 17 6 19.1 6 1 0 2.1.3 2.5.7.4.4 1.3.8 1.9.8.7.1 2.3.6 3.7 1.2 1.4.6 5.2 1.9 8.5 2.9s6.7 2.1 7.5 2.5c8.7 3.8 21.1 4.9 29.3 2.5 3.1-.9 5.7-2.1 5.7-2.6 0-.6.6-1 1.4-1 1.6 0 11.6-10.6 11.6-12.3.1-.7.9-3 2-5.2 2.3-4.7 2.6-14.7.6-18.6-.7-1.4-1.6-3.7-1.9-5.1-1-3.8-9.8-12.9-14.9-15.4-2.3-1.2-6.8-2.9-9.8-3.8-3-.9-6.4-2.1-7.5-2.5-1.1-.5-4-1.5-6.5-2.2-2.5-.7-4.9-1.6-5.5-2-.5-.4-2.6-1-4.5-1.3-1.9-.4-4.4-1.1-5.5-1.6-3.2-1.4-17.8-6-19.2-6-.7 0-2.2-.5-3.3-1-1.1-.6-2.9-1.5-4-2-1.1-.6-2.9-1-4-1s-2-.4-2-.9-2.2-1.1-5-1.5c-2.7-.4-5.2-1.1-5.5-1.6-.3-.6-1.5-1-2.6-1-1 0-2.7-.4-3.7-.9-.9-.5-3.7-1.5-6.2-2.2-2.5-.7-4.9-1.6-5.5-2-.5-.4-2.7-1-4.8-1.4-2-.4-4-1.1-4.3-1.6-.3-.5-1.6-.9-2.8-.9-2 0-8.4-2.1-15.1-5.1-1.1-.5-4.1-1.3-6.7-1.9-5.5-1.2-18.6-5.5-19.5-6.4-.4-.3-1.7-.6-3-.6-1.2 0-2.3-.4-2.3-.9 0-2.2-20.8-3.6-25.5-1.8zM1022.5 743.4c-.5.2-2.9.9-5.2 1.6-2.4.7-4.3 1.7-4.3 2.2 0 .4-.5.8-1.2.8-1.8 0-10.1 9.1-12.1 13.2-.9 2-1.7 4.7-1.7 6.1 0 1.4-.4 2.9-1 3.2-.5.3-1 2.6-1 5s.5 4.7 1 5c.6.3 1 1.8 1 3.2 0 1.4.8 4.1 1.7 6.1 2.2 4.6 12.4 15.2 14.7 15.2.9 0 1.6.4 1.6 1 0 .5.9 1 2 1 1.9 0 9.5 2.2 13.5 4 1.1.4 4.1 1.4 6.8 2.1 2.6.8 4.7 1.6 4.7 2 0 .4 2.2 1 5 1.4 2.7.4 5.2 1.1 5.6 1.6.3.5 1.6.9 2.9.9 1.3 0 2.6.4 2.9.9.3.4 2 1.2 3.8 1.6 1.8.4 3.5.9 3.8 1 .3.1 1.9.5 3.5.9 1.7.4 3.8 1.1 4.7 1.7 1 .5 2.5.9 3.3.9.8 0 2.5.5 3.8 1.2 4.6 2.4 5.7 2.8 7.2 2.8s9.5 2.5 13 4c1.1.5 3.8 1.4 6 2.1 2.2.7 4.5 1.6 5 2 .6.3 2.7 1 4.9 1.3 2.1.4 4.6 1.1 5.5 1.6.9.4 7 2.5 13.6 4.6 6.6 2 12.7 4 13.5 4.2.8.3 2.2.7 3 .8 2.4.5 11.3 3.5 13.2 4.5 1 .5 2.6.9 3.6.9s2.2.3 2.6.7c1.7 1.8 8.8 3.3 15.3 3.3 8.7 0 15.7-2.8 21.8-8.7 8.7-8.4 9.5-10.3 9.5-23.8 0-9.8-.3-12-2.1-15.2-3.5-6.2-13.1-14.9-17.6-15.9-1.6-.3-4.7-1.4-7-2.5-2.4-1-5.2-1.9-6.3-1.9-1.1 0-2.9-.5-4-1-1.1-.6-2.8-1.4-3.8-1.9s-3.8-1.2-6.2-1.6c-2.5-.4-4.9-1-5.5-1.4-.5-.4-5-2-10-3.5-4.9-1.5-9.8-3.2-10.7-3.7-1-.5-2.5-.9-3.3-.9-.8 0-2.3-.4-3.3-1-2.7-1.5-17-6-19.2-6-1.1 0-2-.5-2-1 0-.6-1.1-1-2.5-1s-3.4-.5-4.5-1c-1.1-.6-2.9-1.5-4-2-1.1-.6-2.6-1-3.5-1-1.4 0-14.9-4.2-19-5.9-1.1-.5-4.7-1.7-8-2.6-9.4-2.8-20.8-6.6-22.7-7.6-1-.5-2.5-.9-3.3-.9-.8 0-2.3-.4-3.3-.9-4.4-2.2-9.3-3.3-16.7-3.7-4.4-.2-8.4-.2-9 0zM171 748.7c-6.9 2.4-13.3 4.4-14.2 4.4-1 0-2 .4-2.3 1-.4.5-1.5.9-2.5.9-1.9 0-9.7 2.3-13.5 4-1.1.5-3.8 1.4-6 2.1-2.2.6-4.7 1.5-5.5 1.9-.9.4-3.1 1.1-5 1.4-3.4.7-6.5 1.8-10.2 3.7-1 .5-2.5.9-3.3.9-.8 0-2.3.4-3.3.9-.9.6-4.4 1.7-7.7 2.6-6 1.7-9.4 2.9-12.7 4.6-1 .5-2.7.9-3.7.9-1.1 0-2.3.4-2.6 1-.3.5-1.5 1-2.5 1-1.9 0-15.5 4.2-19.5 6-1.1.5-3.6 1.2-5.5 1.6-1.9.3-3.9.9-4.5 1.3-1.6 1-7.9 3.1-9.3 3.1-.7 0-3.1.9-5.4 2-2.3 1.1-5.7 2.3-7.7 2.6-4.3.8-9.3 3.8-14.1 8.5-3.7 3.6-5 5.7-9.2 14.1-1.1 2.4-1 15.4.1 17.6.5.9 1.6 3.2 2.3 4.9.7 1.8 1.6 3.3 2 3.3.5 0 .8.6.8 1.4 0 1.8 6.6 7.7 12.6 11.2 4.3 2.5 5.8 2.9 13.4 2.9 7.6 0 13.7-1.1 19.5-3.6 1.1-.4 5.2-1.8 9-3 3.9-1.2 7.5-2.5 8-2.9.6-.4 2.6-1.1 4.5-1.5 1.9-.4 10.2-2.9 18.4-5.6 8.2-2.7 15.4-4.9 16-4.9.7 0 3.1-.9 5.4-2 2.2-1.1 5-2 6.2-2 1.1 0 2.8-.4 3.8-1 2.3-1.3 10.9-4 12.7-4 .9 0 2.4-.5 3.5-1 1.1-.6 2.9-1.5 4-2 1.1-.6 2.7-1 3.5-1 .8 0 2.3-.4 3.3-1 .9-.5 5.8-2.1 10.7-3.6 5-1.5 9.5-3.1 10-3.5.6-.4 3-1 5.5-1.4 4.4-.7 5.3-1.1 9.7-3.3 1.3-.7 3.2-1.2 4.2-1.2 1.1 0 2.3-.5 2.6-1 .3-.6 1.7-1 3-1s2.7-.5 3-1c.3-.6 1.5-1 2.7-1 3.6 0 8.9-3.2 14.4-8.7 3-3 5.4-5.9 5.4-6.4 0-.6 1-3.1 2.2-5.7 3.4-7.4 3-15-1.4-24.3-2.5-5.4-4.7-8.5-7.4-10.5-2.1-1.6-4.6-3.5-5.5-4.3-3.2-2.7-9.4-4.1-17.4-4-6.8.1-9.9.8-20.5 4.6zM866 962.9c-.8.5-3.5 1.1-6 1.5-3.4.5-5.9 1.9-10.5 5.7-3.3 2.8-6.4 6.1-7 7.3-.5 1.1-1.2 2.3-1.5 2.6-1.4 1.4-3 5.2-3 7.4 0 1.4-.4 2.8-1 3.1-.5.3-1 2.8-1 5.5s.5 5.2 1 5.5c.6.3 1 1.7 1 3s.5 2.7 1 3c.6.3 1 1.5 1 2.6 0 1 .5 1.9 1 1.9.6 0 1 .5 1 1.1 0 .7 1.5 3 3.3 5.3 1.8 2.3 4.1 5.4 5.1 6.9.9 1.6 2.4 3.6 3.1 4.5.8.9 3.9 5.1 6.9 9.2 3 4.1 5.9 7.9 6.3 8.5.5.5 2 2.6 3.3 4.5 1.3 1.9 3 4.1 3.7 4.8.7.7 1.3 1.8 1.3 2.3 0 .5.8 1.8 1.8 3 .9 1.1 2.7 3.3 3.9 4.7 1.3 1.5 2.3 3 2.3 3.4 0 .4.6 1.3 1.3 2 .7.7 3.5 4.4 6.2 8.3 2.7 3.8 5.2 7.2 5.5 7.5.4.3 4 5.2 8 11 4.1 5.8 8 11.1 8.6 11.7.7.7 2.2 2.9 3.5 5 1.3 2.1 2.6 4 2.9 4.3.6.4 14.8 19.9 19.8 27 3.1 4.4 10.6 11.6 14.7 14 3.5 2.1 5.3 2.4 14.5 2.4 10.5.1 10.5.1 16-3.6 3-2 6.7-4.9 8.2-6.5 3.5-3.7 7.8-11.8 7.8-14.8 0-1.3.5-2.7 1-3 .6-.3 1-2.4 1-4.5s-.4-4.2-1-4.5c-.5-.3-1-1.7-1-3 0-3.4-4.5-11.4-11-19.5-2-2.5-4.5-5.8-5.5-7.4-1.1-1.6-2.9-4.1-4-5.6s-3.8-5.4-6-8.6c-2.2-3.2-4.8-6.6-5.7-7.5-1-.9-1.8-2-1.8-2.3 0-.4-.6-1.4-1.2-2.1-3-3.3-3.8-4.5-3.8-5.4 0-.5-.4-1.1-.8-1.3-.4-.2-3-3.5-5.7-7.3-5.5-7.8-5.5-7.8-8.8-12-1.3-1.7-5.7-7.7-9.7-13.5-4.1-5.8-7.7-10.7-8.2-10.8-.4-.2-.8-1-.8-1.8s-.3-1.4-.7-1.4c-.5 0-2.1-2-3.8-4.5-1.6-2.4-3.3-4.5-3.7-4.5-.5 0-.8-.5-.8-1 0-.9-12.5-18.6-16.3-23-.7-.8-2.5-3.4-4.1-5.7-5-7.5-14.8-14.3-20.5-14.3-1.6 0-3.3-.5-3.6-1-.7-1.2-5.4-1.3-7.5-.1zM338.7 966.4c-8.6 4.5-11.3 7.3-24.4 26.6-2.1 3-4.6 6.2-5.5 7.1-1 .9-1.8 2-1.8 2.4 0 .4-1.1 2.1-2.5 3.9-3.2 3.9-3.2 4-7.9 10.6-2.2 3-4.3 5.6-4.8 5.8-.4.2-.8 1-.8 1.8s-.4 1.4-.9 1.4-1.2.8-1.5 1.8c-.4 1-1.4 2.7-2.4 3.8-1 1-5.1 6.6-9.1 12.4-4.1 5.8-7.8 10.6-8.2 10.8-.5.2-.9 1-.9 1.8s-.4 1.4-.8 1.4-1.6 1.5-2.7 3.2c-1 1.8-2.4 3.8-2.9 4.4-.6.6-2 2.3-3.1 3.9-5.7 8-9.7 13.5-12.7 17.5-1.8 2.5-3.6 4.9-4 5.5-.4.5-1.8 2.3-3.1 4-5.1 6.6-13.5 19.2-15.3 23-2.1 4.6-2.6 20.7-.6 22.7.7.7 1.2 1.9 1.2 2.8 0 1 1 2.8 2.1 4.1 1.2 1.3 2.8 3.4 3.6 4.6.8 1.2 4 3.9 7.1 6l5.7 3.8h23l5.8-3.9c5.1-3.4 9.6-8.6 19.2-22.1.8-1.1 3.6-4.9 6.2-8.5 2.7-3.6 6.1-8.6 7.8-11 1.6-2.5 3.7-5.2 4.5-6 .9-.8 2.9-3.6 4.5-6.2 1.7-2.7 3.3-4.8 3.8-4.8.4 0 .7-.6.7-1.4 0-.8.4-1.6.8-1.8.4-.2 3.7-4.4 7.2-9.3 3.5-5 7-9.6 7.7-10.3.7-.8 1.8-2.3 2.5-3.5 1.4-2.8 7.1-10.1 8.1-10.5.4-.2.7-.8.7-1.3 0-1.2 7-10.9 7.8-10.9.4 0 2-2.3 3.7-5 1.6-2.8 3.3-5 3.7-5 .4 0 .8-.5.8-1.1 0-.7 1.5-3 3.3-5.3 1.8-2.3 4.8-6.2 6.5-8.8 1.8-2.5 3.8-5.2 4.4-6 .7-.7 3.1-4 5.3-7.3l4-6v-11.3c0-6.4-.4-11.6-1-12-.6-.4-1.7-2-2.5-3.7-2.3-4.6-5.8-8.2-11.9-12.3-5.4-3.5-6-3.7-15.6-4-9.1-.3-10.4-.1-14.8 2.2zM604 1048c0 .5-1.1 1-2.5 1-2.8 0-12 5.6-15 9.2-2.8 3.4-6.5 10.6-6.5 12.8 0 1-.4 2.2-1 2.5-.7.4-1 31.7-1 90.6 0 59.3.3 89.9 1 89.9.6 0 1 .8 1 1.9 0 6.4 9.5 17.8 18.5 22 5.4 2.5 18.3 2.9 23.6.7 7.2-3 14.7-9.5 17.1-14.9.7-1.5 1.6-2.7 2-2.7.5 0 .8-1.1.8-2.4 0-1.4.5-2.8 1-3.1.7-.4 1-32.2 1-92s-.3-91.6-1-92c-.5-.3-1-1.5-1-2.6 0-1-.4-1.9-1-1.9-.5 0-1-.9-1-2 0-4.4-14-16-19.4-16-1.4 0-2.8-.5-3.1-1-.3-.6-3.5-1-7.1-1-3.6 0-6.4.4-6.4 1z"/></g></svg>
        )
      case "light_rain_sun": 
          return (
            <svg width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 24C32.4183 24 36 20.4183 36 16C36 11.5817 32.4183 8 28 8C23.5817 8 20 11.5817 20 16C20 20.4183 23.5817 24 28 24Z" fill="url(#paint0_linear_2:14)"/>
              <path d="M26.96 1.45999L27.48 4.41399C27.828 6.38399 24.872 6.90399 24.526 4.93399L24.006 1.97999C23.658 0.00998566 26.614 -0.510014 26.96 1.45999ZM37.546 4.98199L35.826 7.43999C34.678 9.07799 32.222 7.35799 33.368 5.71999L35.088 3.26199C36.236 1.62399 38.692 3.34399 37.546 4.98199ZM16.984 6.45399L19.442 8.17399C21.08 9.32199 19.36 11.778 17.722 10.632L15.264 8.91199C13.626 7.76399 15.346 5.30799 16.984 6.45399ZM38.282 21.366L40.74 23.086C42.378 24.234 40.658 26.69 39.02 25.544L36.562 23.824C34.924 22.676 36.644 20.22 38.282 21.366ZM42.542 14.958L39.588 15.478C37.618 15.826 37.098 12.87 39.068 12.524L42.022 12.004C43.992 11.656 44.512 14.612 42.542 14.958Z" fill="#FFB300"/>
              <path d="M10.218 38.926L8.11798 43.924C7.79798 44.688 8.15598 45.568 8.91998 45.888C9.68398 46.208 10.564 45.85 10.884 45.086L12.984 40.088C13.304 39.324 12.946 38.444 12.182 38.124C11.418 37.804 10.538 38.162 10.218 38.926ZM20.218 36.926L18.118 41.924C17.798 42.688 18.156 43.568 18.92 43.888C19.684 44.208 20.564 43.85 20.884 43.086L22.984 38.088C23.304 37.324 22.946 36.444 22.182 36.124C21.418 35.804 20.538 36.162 20.218 36.926Z" fill="#66AFEB"/>
              <path d="M8 34C3.582 34 0 30.418 0 26C0 21.582 3.582 18 8 18C8.834 18 9.636 18.128 10.392 18.364C11.518 14.68 14.946 12 19 12C23.97 12 28 16.03 28 21C28 21.47 27.964 21.93 27.894 22.38C28.55 22.134 29.258 22 30 22C33.314 22 36 24.686 36 28C36 31.314 33.314 34 30 34H8Z" fill="url(#paint1_linear_2:14)"/>
              <path d="M10 21C10 25.97 14.03 30 19 30C23.502 30 27.23 26.696 27.894 22.38C28.55 22.134 29.258 22 30 22C33.314 22 36 24.686 36 28C36 31.314 33.314 34 30 34H8C3.582 34 0 30.418 0 26C0 21.582 3.582 18 8 18C8.834 18 9.636 18.128 10.392 18.364C10.136 19.198 10 20.082 10 21Z" fill="url(#paint2_radial_2:14)"/>
              <defs>
              <linearGradient id="paint0_linear_2:14" x1="36" y1="8" x2="24.7832" y2="19.0723" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFB301"/>
              <stop offset="1" stopColor="#FFC533"/>
              </linearGradient>
              <linearGradient id="paint1_linear_2:14" x1="18" y1="12" x2="18" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9FC7FF"/>
              <stop offset="1" stopColor="#9BC1F5"/>
              </linearGradient>
              <radialGradient id="paint2_radial_2:14" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.0679 -22.6966) rotate(-90) scale(20.9574 6.69705)">
              <stop stopColor="#486DA8" stopOpacity="0.4"/>
              <stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
              </radialGradient>
              </defs>
            </svg>
          )
      case "rainy":
          return (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.218 32.926L14.118 37.924C13.798 38.688 14.156 39.568 14.92 39.888C15.684 40.208 16.564 39.85 16.884 39.086L18.984 34.088C19.304 33.324 18.946 32.444 18.182 32.124C17.418 31.804 16.538 32.162 16.218 32.926ZM26.218 30.926L24.118 35.924C23.798 36.688 24.156 37.568 24.92 37.888C25.684 38.208 26.564 37.85 26.884 37.086L28.984 32.088C29.304 31.324 28.946 30.444 28.182 30.124C27.418 29.804 26.538 30.162 26.218 30.926Z" fill="#66AFEB"/>
              <path d="M14 28C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C17.518 8.68 20.946 6 25 6C29.97 6 34 10.03 34 15C34 15.47 33.964 15.93 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14Z" fill="url(#paint0_linear_2:27)"/>
              <path d="M16 15C16 19.97 20.03 24 25 24C29.502 24 33.23 20.696 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C16.136 13.198 16 14.082 16 15Z" fill="url(#paint1_radial_2:27)"/>
              <defs>
              <linearGradient id="paint0_linear_2:27" x1="24" y1="6" x2="24" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9FC7FF"/>
              <stop offset="1" stopColor="#9BC1F5"/>
              </linearGradient>
              <radialGradient id="paint1_radial_2:27" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.7539 -24.6966) rotate(-90) scale(20.9574 6.69705)">
              <stop stopColor="#486DA8" stopOpacity="0.4"/>
              <stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
              </radialGradient>
              </defs>
            </svg>
          )
      case "close":
        return (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.25 8.25C16.836 8.25 16.5 8.586 16.5 9C16.5 13.1355 13.1355 16.5 9 16.5C4.8645 16.5 1.5 13.1355 1.5 9C1.5 4.8645 4.8645 1.5 9 1.5C11.0134 1.5 12.9034 2.28675 14.322 3.7155C14.6138 4.00912 15.0889 4.011 15.3825 3.71925C15.6765 3.4275 15.678 2.95238 15.3862 2.65838C13.6841 0.94425 11.4157 0 9 0C4.03725 0 0 4.03725 0 9C0 13.9628 4.03725 18 9 18C13.9624 18 18 13.9628 18 9C18 8.586 17.664 8.25 17.25 8.25Z" fill="#4793FF"/>
            <path d="M10.0605 9L11.7803 7.28025C12.0731 6.98737 12.0731 6.51262 11.7803 6.21975C11.4874 5.92687 11.0126 5.92687 10.7198 6.21975L9.00003 7.9395L7.28028 6.21975C6.98778 5.92687 6.51228 5.92687 6.21978 6.21975C5.9269 6.51262 5.9269 6.98737 6.21978 7.28025L7.93953 9L6.21978 10.7198C5.9269 11.0126 5.9269 11.4874 6.21978 11.7803C6.36603 11.9269 6.55803 12 6.75003 12C6.94203 12 7.13403 11.9269 7.28028 11.7803L9.00003 10.0605L10.7198 11.7803C10.8664 11.9269 11.058 12 11.25 12C11.442 12 11.6336 11.9269 11.7803 11.7803C12.0731 11.4874 12.0731 11.0126 11.7803 10.7198L10.0605 9Z" fill="#4793FF"/>
          </svg>
        )
    default:
      return null;
  }
}
