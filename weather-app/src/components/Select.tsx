type Value = string | number;

interface SelectOption {
  value: Value;
  label?: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  value: Value;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({
  options,
  value,
  onChange,
  name,
  className = "",
  ...rest
}: SelectProps) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`border rounded px-2 py-1 ${className}`}
      {...rest}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label ?? option.value}
        </option>
      ))}
    </select>
  );
};
