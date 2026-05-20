import { add, subtract, multiply, divide, modulo } from "../calculator";

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
  test("berechnet den Rest einer Division", () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test("wirft Fehler bei Modulo mit 0", () => {
      expect(() => modulo(5, 0)).toThrow("Division durch 0 nicht erlaubt");
    });
});
