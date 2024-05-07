import React from "react";

export default (props) => (
  <svg
    width={props.width || "41"}
    height={props.height || "52"}
    style={props.style}
    viewBox="0 0 41 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="9"
      y="6"
      width="32"
      height="46"
      rx="6"
      fill={props.color || "#BE8BFF"}
    />
    <path
      d="M30.728 30.5839V41.4C30.728 43.9361 28.6641 46 26.128 46H4.6C2.06387 46 0 43.9361 0 41.4V4.6C0 2.06387 2.06387 0 4.6 0H26.128C28.6641 0 30.728 2.06387 30.728 4.6V19.9333L32.7275 18.906C33.4757 18.5165 34.4034 18.8171 34.7913 19.5699L37.72 25.2755C37.9055 25.6358 37.9393 26.0575 37.8151 26.4439C37.6909 26.8318 37.4179 27.1538 37.0545 27.3393L30.728 30.5839ZM27.6613 21.5081V4.6C27.6613 3.75513 26.9744 3.06667 26.128 3.06667H4.6C3.7536 3.06667 3.06667 3.75513 3.06667 4.6V41.4C3.06667 42.2449 3.7536 42.9333 4.6 42.9333H26.128C26.9744 42.9333 27.6613 42.2449 27.6613 41.4V32.1801L19.0685 36.5838C18.8937 36.6743 18.7113 36.7279 18.5273 36.7463L18.5257 36.7479L12.4583 37.5406C12.3341 37.5575 12.2115 37.5651 12.0888 37.5651C11.0691 37.5651 10.143 37.007 9.6646 36.0763C9.12793 35.0336 9.29967 33.8069 10.1001 32.9498L14.2324 28.5338C14.2922 28.4633 14.3597 28.3973 14.4317 28.3391C14.5375 28.2517 14.6525 28.1811 14.7721 28.1275L27.6613 21.5081ZM12.9582 34.3819L15.9651 33.9879L15.0282 32.1693L12.9582 34.3819ZM30.0947 23.7038C30.0319 23.7498 29.9659 23.7912 29.8954 23.828L17.5076 30.1944L19.0225 33.1399L34.2915 25.3107L32.7612 22.3345L30.0947 23.7038ZM22.2027 21.804H8.52533C7.6774 21.804 6.992 21.1171 6.992 20.2707C6.992 19.4243 7.6774 18.7373 8.52533 18.7373H22.2027C23.0506 18.7373 23.736 19.4243 23.736 20.2707C23.736 21.1171 23.0506 21.804 22.2027 21.804ZM21.2796 16.491H9.44993C8.602 16.491 7.9166 15.8041 7.9166 14.9577C7.9166 14.1113 8.602 13.4243 9.44993 13.4243H21.2796C22.1275 13.4243 22.8129 14.1113 22.8129 14.9577C22.8129 15.8041 22.1275 16.491 21.2796 16.491ZM20.6003 11.178H10.1277C9.27973 11.178 8.59433 10.4911 8.59433 9.64467C8.59433 8.79827 9.27973 8.11133 10.1277 8.11133H20.6003C21.4483 8.11133 22.1337 8.79827 22.1337 9.64467C22.1337 10.4911 21.4483 11.178 20.6003 11.178Z"
      fill="black"
    />
  </svg>
);
