import React from "react";
import Header from "./Header";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="px-[3%] py-[2%] h-screen bg-base-white ">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
