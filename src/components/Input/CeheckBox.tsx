import React from "react";
import { Field, ErrorMessage } from "formik";

const CheckboxInput = ({
  name,
  label = "",
  ...rest
}: {
  name: string;
  label?: string;
}) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <div className="flex items-center">
        <Field
          type="checkbox"
          id={name}
          name={name}
          className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          {...rest}
        />
        {label && (
          <label htmlFor={name} className="ml-2 text-sm text-gray-700">
            {label}
          </label>
        )}
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default CheckboxInput;
