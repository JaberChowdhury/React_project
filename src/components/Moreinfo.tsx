import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Code from "./Code";
import React from "react";

type propsType = {
  children: React.ReactNode;
};

const Moreinfo = ({ children, d }: propsType) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>More info</DialogTitle>
          <DialogDescription>
            Read more info about this element
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 overflow-hidden">
          <div className="grid flex-1 gap-2 overflow-x-scroll">
            <Code code={JSON.stringify(d, null, 2)} />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Moreinfo;
