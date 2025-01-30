import { Outlet } from "react-router";
import Header from "./HeaderSection/Header";

function PageLayout() {
  return (
    <main className="flex flex-col max-w-screen-xl justify-center m-auto space-y-4 border-0">
      <Header />
      <Outlet />
    </main>
  );
}

export default PageLayout;
