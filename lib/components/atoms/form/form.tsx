import { Flex, FlexProps } from "@chakra-ui/react";
import {
  Formik,
  Form as FormikForm,
  FormikHelpers,
  FormikValues,
} from "formik";
import { FC, ReactNode } from "react";

export type FormProps = FlexProps & {
  initialValues: FormikValues;
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void | Promise<unknown>;
  children: ReactNode;
};

export const Form: FC<FormProps> = ({
  initialValues,
  onSubmit,
  children,
  ...containerProps
}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <FormikForm>
        <Flex flexDirection='column' gap='8px' {...containerProps}>
          {children}
        </Flex>
      </FormikForm>
    </Formik>
  );
};

export default Form;
