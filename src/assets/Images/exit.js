const Exit = ({ style, onClick }) => {
  return (
    <svg
      width="25"
      height="24"
      onClick={onClick}
      style={style}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.91 11.9999L18.21 7.70994C18.3983 7.52164 18.5041 7.26624 18.5041 6.99994C18.5041 6.73364 18.3983 6.47825 18.21 6.28994C18.0217 6.10164 17.7663 5.99585 17.5 5.99585C17.2337 5.99585 16.9783 6.10164 16.79 6.28994L12.5 10.5899L8.21 6.28994C8.0217 6.10164 7.7663 5.99585 7.5 5.99585C7.2337 5.99585 6.9783 6.10164 6.79 6.28994C6.6017 6.47825 6.49591 6.73364 6.49591 6.99994C6.49591 7.26624 6.6017 7.52164 6.79 7.70994L11.09 11.9999L6.79 16.2899C6.69627 16.3829 6.62188 16.4935 6.57111 16.6154C6.52034 16.7372 6.4942 16.8679 6.4942 16.9999C6.4942 17.132 6.52034 17.2627 6.57111 17.3845C6.62188 17.5064 6.69627 17.617 6.79 17.7099C6.88296 17.8037 6.99356 17.8781 7.11542 17.9288C7.23728 17.9796 7.36799 18.0057 7.5 18.0057C7.63201 18.0057 7.76272 17.9796 7.88458 17.9288C8.00644 17.8781 8.11704 17.8037 8.21 17.7099L12.5 13.4099L16.79 17.7099C16.883 17.8037 16.9936 17.8781 17.1154 17.9288C17.2373 17.9796 17.368 18.0057 17.5 18.0057C17.632 18.0057 17.7627 17.9796 17.8846 17.9288C18.0064 17.8781 18.117 17.8037 18.21 17.7099C18.3037 17.617 18.3781 17.5064 18.4289 17.3845C18.4797 17.2627 18.5058 17.132 18.5058 16.9999C18.5058 16.8679 18.4797 16.7372 18.4289 16.6154C18.3781 16.4935 18.3037 16.3829 18.21 16.2899L13.91 11.9999Z"
        fill="#545454"
      />
    </svg>
  );
};

export default Exit;