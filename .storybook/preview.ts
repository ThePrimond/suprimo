import type { Preview } from "@storybook/react";
import { withChakra } from "./decorators/withChakra";
import { extendTheme } from "@chakra-ui/react";

export const decorators = [withChakra];

const theme = extendTheme({});

const preview: Preview = {
  parameters: {
    chakra: { theme: theme },
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
