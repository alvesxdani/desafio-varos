import React, { ReactNode, SetStateAction } from "react"

export interface IProvider {
    initialTheme: string
    children: ReactNode
}

export interface IContextTheme {
    theme: string;
    setTheme: React.Dispatch<SetStateAction<string>>;
  }