import React from "react";

interface HighlightProps {
  text: string;
  highlight: string;
  className?: string;
}

export const Highlight: React.FC<HighlightProps> = ({ text, highlight, className }) => {
  if (!highlight) return <>{text}</>;
  const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark
            key={i}
            className={className || "bg-orange-200 text-black px-1 rounded"}
            style={{ padding: "0 2px" }}
          >
            {part}
          </mark>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
};
