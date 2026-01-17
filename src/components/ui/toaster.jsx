"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastTitle,
} from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

function ToastItem({
  id,
  title,
  description,
  action,
  props,
  open,
  duration,
  dismiss,
}) {
  // Auto-dismiss logic
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        dismiss(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [open, id, duration, dismiss]);

  if (!open) return null;

  return (
    <Toast key={id} {...props}>
      <div className="grid gap-1">
        {title && <ToastTitle>{title}</ToastTitle>}
        {description && <ToastDescription>{description}</ToastDescription>}
      </div>
      {action}
      <ToastClose onClick={() => dismiss(id)} />
    </Toast>
  );
}

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          {...toast}
          duration={toast.duration || 3000}
          dismiss={dismiss}
        />
      ))}
    </div>
  );
}
