import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "theme-ui";

export default {
  title: "Button",
  component: Button,
};

export const Text = () => (
  <Button sx={{ color: "primary", bg: 'text' }} onClick={action("clicked")}>
    Hello Button
  </Button>
);

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
