const closeCircle = ({ style, onClick, fill="#7F7F7F" }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      style={style}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5 2.25C5.94365 2.25 2.25 5.94365 2.25 10.5C2.25 15.0563 5.94365 18.75 10.5 18.75C15.0563 18.75 18.75 15.0563 18.75 10.5C18.75 5.94365 15.0563 2.25 10.5 2.25ZM0.75 10.5C0.75 5.11522 5.11522 0.75 10.5 0.75C15.8848 0.75 20.25 5.11522 20.25 10.5C20.25 15.8848 15.8848 20.25 10.5 20.25C5.11522 20.25 0.75 15.8848 0.75 10.5ZM6.96967 6.96967C7.26256 6.67678 7.73744 6.67678 8.03033 6.96967L10.5001 9.4394L12.9695 6.96991C13.2624 6.67702 13.7373 6.67702 14.0302 6.96991C14.3231 7.26281 14.3231 7.73768 14.0302 8.03057L11.5607 10.5001L14.0302 12.9695C14.3231 13.2624 14.3231 13.7373 14.0302 14.0302C13.7373 14.3231 13.2624 14.3231 12.9695 14.0302L10.5001 11.5607L8.03033 14.0304C7.73744 14.3233 7.26256 14.3233 6.96967 14.0304C6.67678 13.7376 6.67678 13.2627 6.96967 12.9698L9.4394 10.5001L6.96967 8.03033C6.67678 7.73744 6.67678 7.26256 6.96967 6.96967Z"
        fill={fill}
      />
    </svg>
  );
};
export default closeCircle;
