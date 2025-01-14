import { useContext } from "react";
import { ManagmentContext } from "./ManagmentContext";

function useManagment() {
  const context = useContext(ManagmentContext);
  if (!context) throw new Error("Context was used outside the context box");
  return context;
}

export default useManagment;
