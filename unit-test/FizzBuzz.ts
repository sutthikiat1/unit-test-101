export class FizzBuzz {
  constructor() {}

  public say(num: number): string {
    let result = num.toString();
    if (num % 3 === 0 && num < 15) {
      return "Fizz";
    } else if (num % 5 === 0 && num < 15) {
      return "Buzz";
    } else if (num % 5 === 0 && num >= 15) {
      return "FizzBuzz";
    }
    return result;
  }
}
