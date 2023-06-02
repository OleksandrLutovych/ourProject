import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";
import { Provider } from "react-redux";
import store from "redux-state/store/store";
import "../styles/global.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import UserNavigation from "components/UserNavigation/UserNavigation";

const manrope = Manrope({ weight: "400", subsets: ["latin"] });

const firebaseConfig = {
  apiKey: "AIzaSyBpAIYDRHQxqMKef-DUGOAB0K4QuQXj01Q",
  authDomain: "e-commerce-webapp-185b5.firebaseapp.com",
  projectId: "e-commerce-webapp-185b5",
  storageBucket: "e-commerce-webapp-185b5.appspot.com",
  messagingSenderId: "871948991632",
  appId: "1:871948991632:web:8926e0bc065d8c51102c15",
  measurementId: "G-9PH5238WLH",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <main className="manrope.className">
          <Component {...pageProps} />;
        </main>
      </Provider>
    </ThemeProvider>
  );
}
