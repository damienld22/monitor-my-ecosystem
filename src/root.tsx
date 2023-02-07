// @refresh reload
import { Routes } from "@solidjs/router";
import { Suspense } from "solid-js";
import {
  Body,
  FileRoutes,
  Head,
  Html,
  Meta,
  Scripts,
  Title,
} from "solid-start";
import { createI18nContext, I18nContext } from "@solid-primitives/i18n";
import { ErrorBoundary } from "solid-start/error-boundary";
import fr from "./i18n/fr.json";
import en from "./i18n/en.json";
import "./root.css";
import Header from "./components/Header/Header";

const i18nContext = createI18nContext({ fr, en }, "fr");

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Monitor my ecosystem</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta
          name="description"
          content="Small tool to help to monitor development ecosystem"
        />
      </Head>
      <Body>
        <I18nContext.Provider value={i18nContext}>
          <Suspense>
            <Header />
            <ErrorBoundary>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </I18nContext.Provider>
        <Scripts />
      </Body>
    </Html>
  );
}
