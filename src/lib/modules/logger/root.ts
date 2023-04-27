import { type ReactNode } from "react";
import { toast, type ToastT } from "sonner";

type OptionsLogger = Omit<ToastT, "id" | "title">;
interface IOptionsLoggerPromise {
  loading: string | ReactNode;
  success: string | ReactNode | ((data: any) => ReactNode | string);
  error: string | ReactNode | ((error: any) => ReactNode | string);
}

type IMessage = string | ReactNode;
type IPromise = Promise<any> | (() => Promise<any>);

interface ILogger {
  success: (message: IMessage, options?: OptionsLogger) => void;
  error: (message: IMessage, options?: OptionsLogger) => void;
  action: (message: IMessage, options: Omit<OptionsLogger, "action">, action: {
    label: string;
    onClick: () => void;
  }) => void;
  promise: (promise: IPromise, options: IOptionsLoggerPromise) => void;
}

export class Logger implements ILogger {
  success(message: IMessage, options?: OptionsLogger): void {
    toast.success(message, options);
  }

  error(message: IMessage, options?: OptionsLogger): void {
    toast.error(message, options);
  }

  action(message: IMessage, options: Omit<OptionsLogger, "action">, action: {
    label: string;
    onClick: () => void;
  }): void {
    toast(message, {
      ...options,
      action,
    });
  }

  promise(promise: IPromise, options: IOptionsLoggerPromise): void {
    toast.promise(promise, options);
  }
}

export const compositionLogger = (): { logger: ILogger } => {
  const logger = new Logger();

  return {
    logger,
  };
};
