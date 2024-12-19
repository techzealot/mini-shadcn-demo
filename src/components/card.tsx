import { ComponentPropsWithRef } from "react";

import { cn } from "@/lib/utils";

const Card = ({ ref, className, ...props }: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-xl border shadow",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};
Card.displayName = "Card";

const CardHeader = ({
  ref,
  className,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      ref={ref}
      {...props}
    />
  );
};
CardHeader.displayName = "CardHeader";

const CardTitle = ({
  ref,
  className,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={cn("font-semibold leading-none tracking-tight", className)}
      ref={ref}
      {...props}
    />
  );
};
CardTitle.displayName = "CardTitle";

const CardDescription = ({
  ref,
  className,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={cn("text-sm text-muted-foreground", className)}
      ref={ref}
      {...props}
    />
  );
};
CardDescription.displayName = "CardDescription";

const CardContent = ({
  ref,
  className,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return <div className={cn("p-6 pt-0", className)} ref={ref} {...props} />;
};

CardContent.displayName = "CardContent";

const CardFooter = ({
  ref,
  className,
  ...props
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
      ref={ref}
      {...props}
    />
  );
};
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
