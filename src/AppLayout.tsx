import { Outlet } from "react-router-dom";
import Header from "./ui/Header";

export default function AppLayout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
