import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Forms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  //   tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    fieldKey: "email",
    label: "Email",
    type: "email",
  },
};
