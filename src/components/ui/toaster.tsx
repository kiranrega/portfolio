
import { useEffect, useState } from "react";
import { Toast } from "./toast";
import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-0 z-[100] flex flex-col gap-2 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col-reverse md:max-w-[420px]">
      {toasts.map((toast) => {
        return (
          <Toast
            key={toast.id}
            open={toast.open}
            onOpenChange={(open) => {
              if (!open) toast.onOpenChange?.(false);
            }}
            variant={toast.variant}
            title={toast.title}
            description={toast.description}
            action={toast.action}
          />
        );
      })}
    </div>
  );
}
