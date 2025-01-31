import { Outlet } from "react-router";

function PageLayout() {
  return (
    <main className="flex flex-col max-w-screen-xl justify-center m-auto space-y-4 border-0">
      <Outlet />
    </main>
  );
}

export default PageLayout;
