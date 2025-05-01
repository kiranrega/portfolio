
import { forwardRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface SheetProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Sheet = ({ children, open, onOpenChange }: SheetProps) => {
  const [isOpen, setIsOpen] = useState(open || false);

  const handleOpenChange = (newOpen: boolean) => {
    setIsOpen(newOpen);
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  return <>{children}</>;
};

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'top' | 'right' | 'bottom' | 'left';
}

const SheetContent = forwardRef<HTMLDivElement, SheetContentProps>(
  ({ className, children, side = 'right', ...props }, ref) => {
    const sideClasses = {
      top: 'top-0 left-0 right-0',
      right: 'top-0 right-0 h-full',
      bottom: 'bottom-0 left-0 right-0',
      left: 'top-0 left-0 h-full'
    };

    return (
      <div
        ref={ref}
        className={cn(
          "fixed z-50 bg-background shadow-lg",
          sideClasses[side],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SheetContent.displayName = "SheetContent";

export { Sheet, SheetContent };
