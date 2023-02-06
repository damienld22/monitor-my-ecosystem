import { fireEvent, queryByTestId, render } from "@solidjs/testing-library";
import Title from "./Title";

describe("<Title />", () => {
  it("increments value", async () => {
    // ARRANGE
    const { queryByTestId, unmount } = render(() => <Title />);
    const h1 = (await queryByTestId("title")) as HTMLHeadingElement;

    // ASSERT
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/Monitor my ecosystem/);
    unmount();
  });
});
