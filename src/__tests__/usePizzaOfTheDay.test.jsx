import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";
import { renderHook, waitFor } from "@testing-library/react"; // change import

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const testPizza = {
  id: "calabrese",
  name: "The Calabrese Pizza",
  category: "Supreme",
  description:
    "Salami, Pancetta, Tomatoes, Red Onions, Friggitello Peppers, Garlic",
  image: "/public/pizzas/calabrese.webp",
  sizes: { S: 12.25, M: 16.25, L: 20.25 },
};

function getPizzaOfTheDay() {
  let pizza;

  function TestComponent() {
    pizza = usePizzaOfTheDay();
    return null;
  }

  render(<TestComponent />);

  return pizza;
}

test("gives null when first called", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const pizza = getPizzaOfTheDay();
  expect(pizza).toBeNull();
});

test("to be null on initial load", async () => {
    fetch.mockResponseOnce(JSON.stringify(testPizza));
    const { result } = renderHook(() => usePizzaOfTheDay(""));
    expect(result.current).toBeNull();
});
  
test("to call the API and give back the pizza of the day", async () => {
    fetch.mockResponseOnce(JSON.stringify(testPizza));
    const { result } = renderHook(() => usePizzaOfTheDay(""));
    await waitFor(() => {
      expect(result.current).toEqual(testPizza);
    });
    expect(fetchMocker).toBeCalledWith("/api/pizza-of-the-day");
  });