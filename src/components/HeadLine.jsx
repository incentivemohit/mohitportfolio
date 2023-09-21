import React from "react";

export default function HeadLine({ headline }) {
  return (
    <p className="w-full bg-white text-center py-1 border border-t-2 border-b-2 border-black text-3xl">
      {headline}
    </p>
  );
}
