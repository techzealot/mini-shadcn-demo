import { PlusSquareIcon } from "lucide-react";

import type {
  Meta,
  StoryObj,
} from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./button";

const meta = {
  component: Button,
  argTypes: {
    variant: {
      options: ["default", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "select" },
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "sm",
    children: "Button",
  },
};

export const Icon: Story = {
  args: {
    variant: "default",
    size: "icon",
    children: <PlusSquareIcon />,
  },
};
