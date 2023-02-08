import { Router } from "@solidjs/router";
import {
  fireEvent,
  getByTestId,
  render,
  waitFor,
} from "@solidjs/testing-library";
import { vi } from "vitest";
import AddTechnologyForm from "./AddTechnologyForm";

const mockNavigate = vi.fn();

describe("<AddTechnologyForm />", () => {
  beforeAll(() => {
    // Mock i18n
    vi.mock("@solid-primitives/i18n", () => ({
      useI18n: () => [(value: string) => value],
    }));

    // Mock navigation

    vi.mock("solid-start", () => ({
      useNavigate: (path: string) => mockNavigate(path),
    }));
  });

  it("The form contains input to select GitHub package / category and language", async () => {
    // ARRANGE
    const { queryByTestId } = render(() => <AddTechnologyForm />, {
      wrapper: (props) => <Router>{props.children}</Router>,
    });
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

  it("When the form is submitted but github package is empty, an error is displayed", async () => {
    // ARRANGE
    const { queryByTestId, container } = render(() => <AddTechnologyForm />, {
      wrapper: (props) => <Router>{props.children}</Router>,
    });
    expect(queryByTestId("error-empty-package")).toBeNull();

    // ACT
    fireEvent.click(getByTestId(container, "add-form-submit-button"));

    // ASSERT
    await waitFor(() =>
      expect(queryByTestId("error-empty-package")).toBeInTheDocument()
    );
  });
});
