import { Outlet } from "react-router-dom";
import Header from "./ui/Header";
import useManagment from "./context/useManagment";

export default function AppLayout() {
  const { isDarkMode } = useManagment();
  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
