import { Form, Formik } from "formik";
import React from "react";
import SearchIcon from "../icon/SearchIcon";
import { TextInput } from "../Input";

const Header = () => {
  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {() => (
        <Form className="flex justify-between w-full ">
          <div>
            <div className="flex flex-row text-[28px]">
              <p className="text-[28px]">Welcome,</p>
              <p className="text-[28px] text-primary-main">John.</p>
            </div>

            <p>You’ve got 7 tasks to do.</p>
          </div>
          {/* <TextInput
            name="search"
            placeholder="Search"
            icon={<SearchIcon className="w-5 h-5 text-gray-400" />}
          /> */}
        </Form>
      )}
    </Formik>
  );
};

export default Header;
