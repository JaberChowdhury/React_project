import { Outlet, useNavigation } from "react-router";
import Navbar from "~/components/Navbar";
import React from "react";

const Loading = () => (
  <div className="flex justify-center items-center min-h-[60vh]">
    <span className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></span>
  </div>
);

const Main = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar />
      {navigation.state === "loading" && <Loading />}
      <Outlet />
    </div>
  );
};

export default Main;
