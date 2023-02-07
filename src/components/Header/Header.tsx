import { useI18n } from "@solid-primitives/i18n";
import { A } from "@solidjs/router";
import { Component } from "solid-js";

const Header: Component = () => {
  const [t] = useI18n();

  return (
    <header>
      <h1 data-testid="title">{t("title")}</h1>
      <div id="menu">
        <ul>
          <li>
            <A data-testid="routing-list" href="/">
              {t("routing-list")}
            </A>
          </li>
          <li>
            <A data-testid="routing-add" href="/add">
              {t("routing-add")}
            </A>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
