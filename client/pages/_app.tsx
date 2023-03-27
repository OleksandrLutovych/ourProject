import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";
import "../styles/global.scss";

const manrope = Manrope({ weight: "400", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="manrope.className">
      <Component {...pageProps} />;
    </main>
  );
}
