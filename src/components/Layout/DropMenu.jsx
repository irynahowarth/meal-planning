import React from "react";
import * as Select from "@radix-ui/react-select";
import DropDotsIcon from "../icons/DropDotsIcon";
import { ModalDataContext } from "../Modal/ModalDataProvider";

export default function DropMenu() {
  const [value, setValue] = React.useState(null);
  const { modalView, setModalView, modalData } =
    React.useContext(ModalDataContext);

  React.useEffect(() => {
    if (value === "edit") console.log("edit");
    if (value === "delete") {
      setModalView("deleteRecord");
    }
  }, [value]);

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger>
        <Select.Icon className="">
          <DropDotsIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Content
        position="popper"
        align="end"
        sideOffset={15}
        className=" z-40 min-w-[80px] bg-gray-600 text-white text-sm rounded-md p-2.5 data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade cursor-pointer"
      >
        <Select.Group className="flex flex-col justify-between gap-2">
          <Select.Item value="edit">
            <Select.ItemText>Edit </Select.ItemText>
          </Select.Item>
          <Select.Item value="delete">
            <Select.ItemText>Delete</Select.ItemText>
          </Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}
