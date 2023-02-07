import { render } from "@solidjs/testing-library";
import { vi } from "vitest";
import Title from "./Title";

describe("<Title />", () => {
  beforeAll(() => {
    // Mock i18n
    vi.mock("@solid-primitives/i18n", () => ({
      useI18n: () => [(value: string) => value],
    }));
  });

  it("increments value", async () => {
    // ARRANGE
    const { queryByTestId, unmount } = render(() => <Title />);
    const h1 = (await queryByTestId("title")) as HTMLHeadingElement;

    // ASSERT
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/^title$/);
    unmount();
  });
});
