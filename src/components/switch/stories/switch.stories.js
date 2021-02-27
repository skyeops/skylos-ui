import React from "react";
import { Switch as SwitchComponent } from "../switch";

export default {
  title: "Components/Form/Switch",
  component: SwitchComponent,
  argTypes: {
    activeBackgroundColor: {
      control: "color",
    },
    inactiveBackgroundColor: {
      control: "color",
    },
  },
};

export const Switch = (args) => <SwitchComponent {...args} />;

Switch.args = {
  active: false,
  title: "Label",
  subtitle: "Lorem ipsum dolor sit amet",
};