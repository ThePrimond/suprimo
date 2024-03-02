import type { Preview } from "@storybook/react";
import { withChakra } from "./decorators/withChakra";

export const decorators = [withChakra];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: decorators,
};

export default preview;
