import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ExpandableCardProps = {
  isExpanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
  children: React.ReactNode;
  expandedContent: any;
  title: string;
  className?: string;
  tags?: string[];
};

export const ExpandableCard = ({
  isExpanded,
  onExpand,
  onCollapse,
  children,
  expandedContent,
  title,
  className = "",
  tags,
}: ExpandableCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const hasDescription: boolean =
    expandedContent && expandedContent.trim().length > 0;

  return (
    <Dialog
      open={isExpanded}
      onOpenChange={(open) => (open ? onExpand() : onCollapse())}
    >
      <DialogTrigger asChild disabled={!hasDescription}>
        <div
          className={`relative transition-shadow ${className} z-30 ${hasDescription ? "cursor-pointer" : "cursor-default"}`}
          onClick={hasDescription ? onExpand : undefined}
          tabIndex={hasDescription ? 0 : -1}
          role={hasDescription ? "button" : undefined}
          onKeyDown={hasDescription ? (e) => {
            if (e.key === "Enter" || e.key === " ") onExpand();
          } : undefined}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Learn More Tag */}
          {hasDescription && (
            <span
              className={`z-10 pointer-events-none absolute left-1/2 -translate-x-1/2 -top-4 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-lg transition-all duration-300 ease-out
                ${isHovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-75 z-20"}
              `}
              style={{
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))",
                boxShadow: "0 4px 16px -4px rgba(0,0,0,0.10)",
                willChange: "opacity, transform",
              }}
              aria-hidden="true"
            >
              Learn More
            </span>
          )}
          {children}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] bg-white p-0 !rounded-[1.5rem] flex flex-col max-h-[80vh]">
        <div className="mt-4 flex-1 overflow-y-auto px-6 pt-4">
          <h2 className="text-3xl font-bold pb-2">{title}</h2>
          <div className="prose w-full max-w-none prose-li:my-1 prose-p:my-3 leading-relaxed">
            <Markdown remarkPlugins={[remarkGfm]}>{expandedContent}</Markdown>
          </div>
          <div className="justify-left my-6 flex flex-wrap ">
            {tags &&
              tags.map((tag: any, index: number) => (
                <div
                  key={index}
                  className="py-2 px-4 shadow-md rounded-full bg-gray-200 text-gray-700 font-mono text-xs mr-2 mt-2"
                >
                  {tag}
                </div>
              ))}
          </div>
        </div>
        <DialogFooter className="bg-gray-300 rounded-b-[1.4rem] p-0">
          <DialogClose asChild>
            <Button variant="outline" className="p-4 m-4 rounded-[1.5rem]">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
