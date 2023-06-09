import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import HttpApi from "i18next-http-backend";
import { Suspense } from "react";
import "./18n";
import LoadingPage from "./components/Content/LodaingPage/LoadingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(LanguageDetector)
//   .use(HttpApi)
//   .init({
//     supportedLngs: ["en", "ru"],
//     fallbackLng: "ru",
//     detection: {
//       order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
//       caches: ["cookie"],
//     },
//     backend: {
//       loadPath: "/public/acssest/locales/{{lng}}/translation.json",
//     },
//   });

root.render(
  <Suspense fallback={<LoadingPage />}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
