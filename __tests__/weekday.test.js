import { TestScheduler } from "jest";
import { numDayOfWeek, stringDayOfTheWeek } from "../src/weekday";


describe('numDayOfWeek', () => {
  test('should return day of week as number 0-6', () => {
    const newDay = new Date('02/03/2022');
    const myDay = numDayOfWeek(newDay);
    expect(myDay).toEqual(4);
  });
});

describe('stringDayOfTheWeek', () => {
  test('should return day of week in string format', () => {
    const newDay = new Date('02/03/2022');
    const stringDay = stringDayOfTheWeek(newDay);
    expect(stringDay).toEqual('Thursday');
  })
});
