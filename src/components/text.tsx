import {
  ComponentProps,
  ComponentPropsWithRef,
} from "react";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

//ignore
interface TextProps extends ComponentPropsWithRef<"div"> {
  asChild?: boolean;
}

//封装通用的文本组件
const Text = ({ className, asChild = false, ref, ...props }: TextProps) => {
  const Comp = asChild ? Slot : "div";
  return <Comp className={cn(className)} ref={ref} {...props} />;
};

export default Text;

//react19可以直接使用ref属性，不需要使用forwardRef
const H1 = ({ className, ref, ...props }: ComponentPropsWithRef<"h1">) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

const H2 = ({ className, ...props }: ComponentProps<"h2">) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  );
};
const H3 = ({ className, ...props }: ComponentProps<"h3">) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  );
};

const H4 = ({ className, ...props }: ComponentProps<"h2">) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  );
};

const P = ({ className, ...props }: ComponentProps<"p">) => {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  );
};

const Blockquote = ({ className, ...props }: ComponentProps<"blockquote">) => {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  );
};

const List = ({ className, ...props }: ComponentProps<"ul">) => {
  return (
    <ul
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
      {...props}
    />
  );
};
const Code = ({ className, ...props }: ComponentProps<"code">) => {
  return (
    <code
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
      {...props}
    />
  );
};
const Lead = ({ className, ...props }: ComponentProps<"p">) => {
  return (
    <p className={cn("text-muted-foreground text-xl", className)} {...props} />
  );
};
const Large = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={cn("text-lg font-semibold", className)} {...props} />;
};
const Small = ({ className, ...props }: ComponentProps<"small">) => {
  return (
    <small
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    />
  );
};
const Muted = ({ className, ...props }: ComponentProps<"p">) => {
  return (
    <p className={cn("text-muted-foreground text-sm", className)} {...props} />
  );
};

export { Blockquote, Code, H1, H2, H3, H4, Large, Lead, List, Muted, P, Small };
