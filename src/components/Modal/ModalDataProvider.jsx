import React from "react";
import useToggle from "../helpers/use-toggle";

export const ModalDataContext = React.createContext();

export default function ModalDataProvider({ children }) {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const [modalView, setModalView] = React.useState("viewRecipe");
  return (
    <ModalDataContext.Provider
      value={{ isOpen, toggleIsOpen, modalView, setModalView }}
    >
      {children}
    </ModalDataContext.Provider>
  );
}
