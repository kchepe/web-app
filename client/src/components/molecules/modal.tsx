import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../atoms";

interface ModalProps {
  trigger: ReactNode;
  children: ReactNode;
  title?: string;
  subTitle?: string;
  open?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

const Modal = ({
  trigger,
  title,
  subTitle,
  children,
  ...props
}: ModalProps) => {
  return (
    <Dialog {...props}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subTitle}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export { Modal };
