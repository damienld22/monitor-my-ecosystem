import { createForm } from "@felte/solid";
import { useI18n } from "@solid-primitives/i18n";
import { Component, For, Show } from "solid-js";
import { useNavigate } from "solid-start";
import { AVAILABLE_CATEGORIES, AVAILABLE_LANGUAGES } from "~/constants";
import { useTechnologyContext } from "~/hooks/useTechnologies";
import { NewTechnology } from "~/types";

const AddTechnologyForm: Component = () => {
  const [t] = useI18n();
  const navigate = useNavigate();
  const { add } = useTechnologyContext();
  const { form, errors } = createForm<NewTechnology>({
    validate: (values) => {
      const errors: Partial<NewTechnology> = {};

      if (values.githubPackage.length === 0) {
        errors.githubPackage = "empty";
      }

      return errors;
    },
    onSubmit: (newTechno: NewTechnology) => add(newTechno),
    onSuccess: () => navigate("/"),
  });

  return (
    <form use:form id="add-technology-form">
      {/* GITHUB PACKAGE */}
      <div class="add-technology-form-item">
        <label for="githubPackage">{t("technology-github-package")}</label>
        <input
          data-testid="add-form-github-package-input"
          type="text"
          autocomplete="off"
          name="githubPackage"
          id="githubPackage"
        />
        <Show when={errors()?.githubPackage?.includes("empty")}>
          <label data-testid="error-empty-package" class="error">
            {t("technology-github-package-error")}
          </label>
        </Show>
      </div>

      {/* LANGUAGE SELECTION */}
      <div class="add-technology-form-item">
        <label for="language">{t("technology-category")}</label>
        <select
          id="language"
          data-testid="add-form-language-select"
          name="language"
        >
          <For each={AVAILABLE_LANGUAGES}>
            {(language) => <option value={language}>{language}</option>}
          </For>
        </select>
      </div>

      {/* CATEGORY SELECTION */}
      <div class="add-technology-form-item">
        <label for="category">{t("technology-language")}</label>
        <select
          id="category"
          data-testid="add-form-category-select"
          name="category"
        >
          <For each={AVAILABLE_CATEGORIES}>
            {(category) => <option value={category}>{category}</option>}
          </For>
        </select>
      </div>

      {/* ACTIONS */}
      <button data-testid="add-form-submit-button" type="submit">
        {t("add")}
      </button>
    </form>
  );
};

export default AddTechnologyForm;
