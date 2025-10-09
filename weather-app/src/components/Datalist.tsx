type DatalistProps<T> = {
  id: string;
  options: T[];
  getOptionValue?: (item: T) => string;
  getOptionLabel?: (item: T) => string;
};

export const Datalist = <T,>({
  id,
  options,
  getOptionValue = (item) => String(item),
  getOptionLabel,
}: DatalistProps<T>) => {
  return (
    <datalist id={id}>
      {options.map((item) => {
        const value = getOptionValue(item);
        const label = getOptionLabel?.(item) || value;

        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </datalist>
  );
};
