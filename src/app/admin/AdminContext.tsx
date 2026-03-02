"use client";

import { createContext, useContext } from "react";

export type AdminContextType = {
  secret: string;
  setSecret: (s: string) => void;
  logout: () => void;
};

export const AdminContext = createContext<AdminContextType>({
  secret: "",
  setSecret: () => {},
  logout: () => {},
});

export const useAdmin = () => useContext(AdminContext);
