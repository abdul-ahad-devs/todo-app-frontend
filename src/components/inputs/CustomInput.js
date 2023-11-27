const CustomInput = ({
  containerClassName,
  label,
  labelClassName,
  inputClassName,
  value,
  onChange,
  placeholder,
  errorText,
}) => {
  return (
    <div className={`flex flex-col relative ${containerClassName}`}>
      <label
        className={`absolute top-[-1.5rem] left-1 text-sm font-semibold mb-1 ${labelClassName}`}
      >
        {label}
      </label>
      <input
        className={`rounded-xl border-2 border-primaryGreen focus-visible:shadow-none p-2 ${inputClassName}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <p className="text-[red] text-sm font-semibold bottom-[-1.5rem] absolute ">
        {errorText}
      </p>
    </div>
  );
};

export default CustomInput;
