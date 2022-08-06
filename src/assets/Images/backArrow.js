function BackArrow({ style, onClick }) {
  return (
    <svg
      style={style}
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.50001 11.2L14.2 5.59995C14.6 5.19995 15.2 5.19995 15.6 5.59995C16 5.99995 16 6.59995 15.6 6.99995L10.7 12L15.6 17C16 17.4 16 18 15.6 18.4C15.4 18.6 15.2 18.7 14.9 18.7C14.6 18.7 14.4 18.6 14.2 18.4L8.50001 12.8C8.10001 12.3 8.10001 11.7 8.50001 11.2C8.50001 11.3 8.50001 11.3 8.50001 11.2Z"
        fill="#2A2A2A"
      />
    </svg>
  );
}

export default BackArrow;
