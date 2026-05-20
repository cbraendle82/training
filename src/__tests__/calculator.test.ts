import { add, subtract, multiply, divide } from "../calculator";

describe("Calculator", () => {
  test("addiert zwei Zahlen", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtrahiert zwei Zahlen", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multipliziert zwei Zahlen", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("dividiert zwei Zahlen", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("wirft Fehler bei Division durch 0", () => {
    expect(() => divide(5, 0)).toThrow("Division durch 0 nicht erlaubt");
  });
});
