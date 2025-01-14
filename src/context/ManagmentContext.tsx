import { createContext, ReactNode, useState } from "react";
import data from "../../data.json";
import { IAllBoards } from "../types/types";

interface ManagmentContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  allTask: IAllBoards;
  setAllTask: React.Dispatch<React.SetStateAction<IAllBoards>>;
}

const defaultValues: ManagmentContextType = {
  isDarkMode: false,
  setIsDarkMode: () => {},
  allTask: data,
  setAllTask: () => {},
};

const ManagmentContext = createContext<ManagmentContextType>(defaultValues);

interface ManagmentContextProviderProps {
  children: ReactNode;
}

function ManagmentContextProvider({ children }: ManagmentContextProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [allTask, setAllTask] = useState<IAllBoards>(data);

  return (
    <ManagmentContext.Provider
      value={{ isDarkMode, setIsDarkMode, allTask, setAllTask }}
    >
      {children}
    </ManagmentContext.Provider>
  );
}

export { ManagmentContext, ManagmentContextProvider };
