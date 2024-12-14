import { ComponentPropsWithRef, forwardRef } from "react";
import { cva, VariantProps } from "cva";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
//TODO 借用tailwind机制实现简单的主题
const buttonVariants = cva({
  base: "",
  variants: {
    variant: {
      primary: "",
      secondary: "",
      ghost: "",
    },
    size: {
      sm: "",
      icon: "",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export interface ButtonProps
  extends ComponentPropsWithRef<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size, className, asChild = false, ...props }: ButtonProps,
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

export default Button;
