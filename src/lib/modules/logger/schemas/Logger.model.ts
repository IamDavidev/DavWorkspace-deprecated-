import { type ToastT } from "sonner";

export interface ILogger {
  log: (message: string, options: ToastT) => void;
  error: (message: string, options: ToastT) => void;
  warn: (message: string, options: ToastT) => void;
  debug: (message: string, options: ToastT) => void;
}
