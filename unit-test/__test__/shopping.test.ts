import { getDiscount } from "../shopping";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("shopping", () => {
  const mock = new MockAdapter(axios);

  it("should will get discount 10%", async () => {
    //arrange
    const expectedResult = {
      productId: 1,
      productName: "รองเท้า",
      qty: 1,
      price: 1000,
      discount: 10,
      net: 900,
    };

    //action
    mock
      .onPost("/getdiscount", {
        productId: 1,
        qty: 1,
      })
      .reply(200, {
        discount: 10,
      });

    const response = await getDiscount(1, "รองเท้า", 1, 1000);

    //asset
    expect(response.net).toEqual(expectedResult.net);
  });
});

//ค่าบริการร้านชาบู หัวละ 299 ต่อคน แต่หากมา 4 คน จะจ่ายในราคา 3 คน และ มีค่าบริการ service charge 10% ต่อหัว
//api spec(จำนวนคน) response = จำนวนคน , ราคารวมทั้งหมด , service charge , ราคารวมทั้งหมด + service charge
