import React from "react";
import useToggle from "../helpers/use-toggle";

export const ModalDataContext = React.createContext();

export default function ModalDataProvider({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalView, setModalView] = React.useState("viewRecipe");
  const [modalData, setModalData] = React.useState(null);
  return (
    <ModalDataContext.Provider
      value={{
        isOpen,
        setIsOpen,
        modalView,
        setModalView,
        modalData,
        setModalData,
      }}
    >
      {children}
    </ModalDataContext.Provider>
  );
}
