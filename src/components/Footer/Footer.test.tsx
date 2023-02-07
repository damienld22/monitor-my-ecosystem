import { render } from "@solidjs/testing-library";
import Footer from "./Footer";

describe("<Header />", () => {
  it("The footer contains 'Zenika' + current year", async () => {
    // ARRANGE
    const { queryByTestId } = render(() => <Footer />);
    const text = (await queryByTestId("footer-text")) as HTMLHeadingElement;
    const currentYear = new Date().getFullYear();

    // ASSERT
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent(`Zenika ${currentYear}`);
  });
});
