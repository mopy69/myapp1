import * as React from "react";

type SeparatorProps = React.HTMLAttributes<HTMLDivElement>;

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      aria-orientation="horizontal"
      className={`h-px w-[90%] bg-gray-400 dark:bg-gray-700 mx-auto ${className}`}
      {...props}
    />
  )
);

Separator.displayName = "Separator";

export { Separator };
