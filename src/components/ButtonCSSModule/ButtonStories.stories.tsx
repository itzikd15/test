import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ButtonCSSModule from "./ButtonCSSMoudle";


const meta: Meta<typeof ButtonCSSModule> = {
  title:     "Components/ButtonCSSModule",
  component: ButtonCSSModule,
    argTypes: {

    },
};

export default meta;

type Story = StoryObj<typeof ButtonCSSModule>;

export const Contained: Story = {
  args: {
      variant: 'contained',
      disabled: false
  },
};

export const Text: Story = {
  args: {
      variant: 'text',
      disabled: false
  },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        disabled: false
    },
};