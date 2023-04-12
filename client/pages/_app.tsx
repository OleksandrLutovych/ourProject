import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";
import { Provider } from "react-redux";
import store from "redux-state/store/store";
import "../styles/global.scss";

const manrope = Manrope({ weight: "400", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className="manrope.className">
        <Component {...pageProps} />;
      </main>
    </Provider>
  );
}
