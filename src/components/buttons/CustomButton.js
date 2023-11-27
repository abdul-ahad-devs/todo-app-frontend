const CustomButton = ({ label, btnClassName, labelClassName, onClick }) => {
  return (
    <button
      className={`flex flex-row items-center cursor-pointer justify-center rounded-lg bg-primaryGreen py-2 px-4 ${btnClassName}`}
      onClick={onClick}
    >
      <label
        className={`text-base font-semibold bg-[transparent] cursor-pointer  ${labelClassName}`}
      >
        {label}
      </label>
    </button>
  );
};

export default CustomButton;
