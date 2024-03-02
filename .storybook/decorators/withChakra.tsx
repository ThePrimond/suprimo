import React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

export const withChakra = (StoryFn: () => JSX.Element) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <StoryFn />
    </ChakraProvider>
  );
};
