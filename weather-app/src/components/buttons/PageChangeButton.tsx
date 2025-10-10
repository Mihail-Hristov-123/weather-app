type PageChange = "increment" | "decrement";

interface Props {
  type: PageChange;
  disabled: boolean;
  onClick: () => void;
}

const buttonNames: Record<PageChange, string> = {
  increment: "Next",
  decrement: "Back",
};

export const PageChangeButton = ({ type, disabled, onClick }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-2 border rounded dark:bg-white text-black ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
      }`}
    >
      {buttonNames[type]}
    </button>
  );
};
