import React from "react";

export default function ModeSwitch() {
  return (
    <div className="switch-wrappe p-5 absolute bottom-0 left-0 flex gap-3">
      <span>Dark mode</span>
      <button
        type="button"
        className="switch bg-white w-14 h-6 border rounded-full cursor-pointer box-content outline-offset-[6px p-0.5"
        onClick={() => console.log("switch Mode")}
      >
        <span
          className="switch-ball h-full aspect-square bg-gray-300 block rounded-full"
          style={{
            transition: "transform 300ms",
            transform: `translateX(${"year" === "year" ? "130%" : "0%"})`,
          }}
        />
      </button>
    </div>
  );
}
