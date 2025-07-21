import AppShell from "@/components/layouts/AppShell";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // AppShell wraps the entire application to provide a consistent layout
    // including the Navbar and any other shared components.
    // This allows for a cleaner structure and easier management of shared UI elements.
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
}
