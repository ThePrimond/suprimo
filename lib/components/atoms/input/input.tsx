import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControlProps,
} from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";
import { FC } from "react";

export type InputProps = {
  label: string;
  fieldKey: string;
  showLabel?: boolean;
  //   If formik wrap with `Form` component
  mode?: "native" | "formik";
  error?: string;
} & ChakraInputProps &
  FormControlProps;

export const Input: FC<InputProps> = ({
  label,
  fieldKey,
  showLabel = false,
  mode = "native",
  error,
  ...inputProps
}) => {
  return (
    <>
      {mode === "native" ? (
        <FormControl isInvalid={inputProps.isInvalid}>
          {showLabel && <FormLabel htmlFor={fieldKey}>{label}</FormLabel>}
          <ChakraInput
            data-test-id={fieldKey}
            placeholder={inputProps.placeholder || label}
            type={inputProps.type || "text"}
            {...inputProps}
          />
          {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>
      ) : (
        <Field name={fieldKey}>
          {({ field, form }: any) => (
            <FormControl
              isInvalid={form.errors[fieldKey] && form.touched[fieldKey]}>
              {showLabel && <FormLabel htmlFor={fieldKey}>{label}</FormLabel>}
              <ChakraInput
                data-test-id={fieldKey}
                {...field}
                placeholder={inputProps.placeholder || label}
                {...inputProps}
              />
              <FormErrorMessage>{form.errors[fieldKey]}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
      )}
    </>
  );
};

export default Input;
