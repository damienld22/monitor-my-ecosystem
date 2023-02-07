import { Router } from "@solidjs/router";
import {
  queryAllByAttribute,
  queryByAttribute,
  render,
} from "@solidjs/testing-library";
import { vi } from "vitest";
import Header from "./Header";

describe("<Header />", () => {
  beforeAll(() => {
    // Mock i18n
    vi.mock("@solid-primitives/i18n", () => ({
      useI18n: () => [(value: string) => value],
    }));
  });

  it("The header contains the title", async () => {
    // ARRANGE
    const { queryByTestId } = render(() => <Header />, {
      wrapper: (props) => <Router>{props.children}</Router>,
    });
    const h1 = (await queryByTestId("title")) as HTMLHeadingElement;

    // ASSERT
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/^title$/);
  });

  it("The header contains the menu", async () => {
    // ARRANGE
    const { queryByTestId } = render(() => <Header />, {
      wrapper: (props) => <Router>{props.children}</Router>,
    });
    const routeAdd = (await queryByTestId("routing-add")) as HTMLAnchorElement;
    const routeList = (await queryByTestId(
      "routing-list"
    )) as HTMLAnchorElement;

    // ASSERT
    expect(routeAdd).toBeInTheDocument();
    expect(routeAdd).toHaveTextContent(/^routing-add$/);
    expect(routeList).toBeInTheDocument();
    expect(routeList).toHaveTextContent(/^routing-list$/);
  });
});
