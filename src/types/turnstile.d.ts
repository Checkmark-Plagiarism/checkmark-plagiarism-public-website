export {};

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: string | HTMLElement,
        opts: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "auto" | "dark" | "light";
        }
      ) => void;
      reset?: (el?: string | HTMLElement) => void;
      getResponse?: (el?: string | HTMLElement) => string | null;
    };
  }
}
