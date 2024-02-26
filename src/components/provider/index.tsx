import { ThemeProvider } from "@/components/theme/theme-provider";
import { Provider } from "react-redux";
import store from "@/app/store";
import React from "react";

interface propsType {
  children: React.ReactNode;
}

const Home = ({ children }: propsType) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
};

export default Home;
