const ExcludeIconRed = ({ style, onClick }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      style={style}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM5 8.25C4.58579 8.25 4.25 8.58579 4.25 9C4.25 9.41421 4.58579 9.75 5 9.75H13C13.4142 9.75 13.75 9.41421 13.75 9C13.75 8.58579 13.4142 8.25 13 8.25H5Z"
        fill="#FF4842"
      />
    </svg>
  );
};
export default ExcludeIconRed;
