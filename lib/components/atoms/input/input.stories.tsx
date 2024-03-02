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

export const Text: Story = {
  args: {
    fieldKey: "email",
    label: "Username or Email",
    showLabel: true,
    placeholder: "",
    type: "email",
  },
};

export const Password: Story = {
  args: {
    fieldKey: "password",
    label: "Password",
    showLabel: true,
    placeholder: "",
    type: "password",
  },
};
