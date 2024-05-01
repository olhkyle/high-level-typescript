import { Equal, Expect } from "../../helper";

const getLocationWeather = (locationId: string) => {
  return `Weather at location ${locationId}`;
};

type GetLocationWeatherReturn = ReturnType<typeof getLocationWeather>;
const getDetailedWeather = (
  locationId: string,
  details?: {
    tempUnit?: "C" | "F";
    includeForecast?: boolean;
  }
) => {};

type GetDetailedWeatherParameters = Parameters<typeof getDetailedWeather>;

type tests = [
  Expect<Equal<GetLocationWeatherReturn, string>>,
  Expect<
    Equal<
      GetDetailedWeatherParameters,
      [
        locationId: string,
        details?: {
          tempUnit?: "C" | "F";
          includeForecast?: boolean;
        }
      ]
    >
  >
];

/**함수 선언문일 경우 위의 tuple 타입에서 key인 locationId를 명시하지 않아도 테스트를 통과하지만,
 * arrow func : tuple 타입에서 인수명인 key를 작성해주어야 테스트를 통과
 **/
