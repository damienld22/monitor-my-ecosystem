import { useI18n } from "@solid-primitives/i18n";
import { Component, For } from "solid-js";
import { AVAILABLE_CATEGORIES, AVAILABLE_LANGUAGES } from "~/constants";

const AddTechnologyForm: Component = () => {
  const [t] = useI18n();

  return (
    <div id="add-technology-form">
      {/* GITHUB PACKAGE */}
      <div class="add-technology-form-item">
        <label for="githubPackage">{t("technology-github-package")}</label>
        <input
          data-testid="add-form-github-package-input"
          type="text"
          name="githubPackage"
        />
      </div>

      {/* LANGUAGE SELECTION */}
      <div class="add-technology-form-item">
        <label for="language">{t("technology-category")}</label>
        <select data-testid="add-form-language-select" name="language">
          <For each={AVAILABLE_LANGUAGES}>
            {(language) => <option value={language}>{language}</option>}
          </For>
        </select>
      </div>

      {/* CATEGORY SELECTION */}
      <div class="add-technology-form-item">
        <label for="category">{t("technology-language")}</label>
        <select data-testid="add-form-category-select" name="category">
          <For each={AVAILABLE_CATEGORIES}>
            {(category) => <option value={category}>{category}</option>}
          </For>
        </select>
      </div>

      {/* ACTIONS */}
      <button>{t("add")}</button>
    </div>
  );
};

export default AddTechnologyForm;
