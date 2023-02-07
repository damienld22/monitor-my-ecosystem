import { render } from "@solidjs/testing-library";
import { vi } from "vitest";
import AddTechnologyForm from "./AddTechnologyForm";

describe("<AddTechnologyForm />", () => {
  beforeAll(() => {
    // Mock i18n
    vi.mock("@solid-primitives/i18n", () => ({
      useI18n: () => [(value: string) => value],
    }));
  });

  it("The form contains input to select GitHub package / category and language", async () => {
    // ARRANGE
    const { queryByTestId } = render(() => <AddTechnologyForm />);
    const githubPackageInput = (await queryByTestId(
      "add-form-github-package-input"
    )) as HTMLInputElement;
    const languageSelect = (await queryByTestId(
      "add-form-language-select"
    )) as HTMLSelectElement;
    const categorySelect = (await queryByTestId(
      "add-form-category-select"
    )) as HTMLSelectElement;

    // ASSERT
    expect(githubPackageInput).toBeInTheDocument();
    expect(languageSelect).toBeInTheDocument();
    expect(categorySelect).toBeInTheDocument();
  });
});
