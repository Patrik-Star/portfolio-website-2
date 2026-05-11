import React from "react";
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
};

export const ExpandableCard: React.FC<ExpandableCardProps> = ({
  isExpanded,
  onExpand,
  onCollapse,
  children,
  expandedContent,
  title,
  className = "",
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Dialog
      open={isExpanded}
      onOpenChange={(open) => (open ? onExpand() : onCollapse())}
    >
      <DialogTrigger asChild>
        <div
          className={`relative cursor-pointer transition-shadow ${className} z-30`}
          onClick={onExpand}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onExpand();
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Learn More Tag */}
          <span
            className={` z-10 pointer-events-none absolute left-1/2 -translate-x-1/2 -top-4 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-lg transition-all duration-300 ease-out
              ${isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75 z-20'}
            `}
            style={{
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))',
              boxShadow: '0 4px 16px -4px rgba(0,0,0,0.10)',
              willChange: 'opacity, transform',
            }}
            aria-hidden="true"
          >
            Learn More
          </span>
          {children}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] bg-white p-0 !rounded-[1.5rem] flex flex-col max-h-[80vh]">
        <div className="mt-4 flex-1 overflow-y-auto px-6 pt-4">
          <h2 className="text-3xl font-bold pb-2">{title}</h2>
          <div className="prose">
            <Markdown remarkPlugins={[remarkGfm]}>{expandedContent}</Markdown>
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
