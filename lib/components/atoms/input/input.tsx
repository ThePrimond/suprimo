import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControlProps,
  forwardRef,
} from "@chakra-ui/react";
import { Field } from "formik";
import React, { ForwardedRef } from "react";

export type InputProps = {
  label: string;
  fieldKey: string;
  showLabel?: boolean;
  //   If formik wrap with `Form` component
  mode?: "native" | "formik";
  error?: string;
} & ChakraInputProps &
  FormControlProps;

export const Input = forwardRef<InputProps, "input">(
  (
    {
      label,
      fieldKey,
      showLabel = false,
      mode = "native",
      error,
      ...inputProps
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        {mode === "native" ? (
          <FormControl isInvalid={inputProps.isInvalid}>
            {showLabel && <FormLabel htmlFor={fieldKey}>{label}</FormLabel>}
            <ChakraInput
              data-test-id={fieldKey}
              placeholder={inputProps.placeholder || label}
              type={inputProps.type || "text"}
              ref={ref}
              {...inputProps}
            />
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
          </FormControl>
        ) : (
          <Field name={fieldKey}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors[fieldKey] && form.touched[fieldKey]}>
                {showLabel && <FormLabel htmlFor={fieldKey}>{label}</FormLabel>}
                <ChakraInput
                  data-test-id={fieldKey}
                  {...field}
                  placeholder={inputProps.placeholder || label}
                  ref={ref}
                  {...inputProps}
                />
                <FormErrorMessage>{form.errors[fieldKey]}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        )}
      </>
    );
  }
);

export default Input;
