import { FizzBuzz } from "../FizzBuzz";

describe("FizzBuzz", () => {
  const fizzBuzz = new FizzBuzz();

  it("should say input", () => {
    //arrange
    const input = 1;

    //assert
    expect(fizzBuzz.say(input)).toEqual(input.toString());
  });

  it("should say Fizz", () => {
    //assert
    expect(fizzBuzz.say(3)).toEqual("Fizz");
    expect(fizzBuzz.say(6)).toEqual("Fizz");
    expect(fizzBuzz.say(9)).toEqual("Fizz");
    expect(fizzBuzz.say(12)).toEqual("Fizz");
  });

  it("should say Buzz", () => {
    //assert
    expect(fizzBuzz.say(10)).toEqual("Buzz");
    expect(fizzBuzz.say(5)).toEqual("Buzz");
  });

  it("should say FizzBuzz", () => {
    //assert
    expect(fizzBuzz.say(15)).toEqual("FizzBuzz");
    expect(fizzBuzz.say(30)).toEqual("FizzBuzz");
  });

  test.each([
    { num: 3, expected: "Fizz" },
    { num: 6, expected: "Fizz" },
    { num: 9, expected: "Fizz" },
    { num: 12, expected: "Fizz" },
  ])(
    "should say $num when given $expected($num, $expected)",
    ({ num, expected }) => {
      expect(fizzBuzz.say(num)).toBe(expected);
    }
  );
});
