import { cn } from "#/utils/utils";

interface ChipProps {
  testId?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export function Chip({
  children,
  testId,
  variant = "primary",
  onClick,
  className,
}: React.PropsWithChildren<ChipProps>) {
  const baseStyles = "px-4 rounded-[100px] text-center font-semibold";
  const variantStyles = {
    primary: "bg-[#FFE165] text-black text-lg",
    secondary: "bg-[#E4E4E4] text-black text-sm px-2 cursor-pointer",
  };

  const chipClassName = cn(baseStyles, variantStyles[variant], className);

  if (onClick) {
    return (
      <button
        type="button"
        data-testid={testId}
        onClick={onClick}
        className={chipClassName}
      >
        {children}
      </button>
    );
  }

  return (
    <div
      data-testid={testId}
      data-openhands-chip
      style={{ minWidth: variant === "primary" ? "100px" : undefined }}
      className={chipClassName}
    >
      {children}
    </div>
  );
}
