import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("axios", () => {
  var mock = new MockAdapter(axios);

  // beforeEach(() => {
  //   mock.reset();
  // });

  it("test get", async () => {
    mock.onGet("/users").reply(200, {
      statusCode: 1,
      status: "success",
      msg: "",
      data: [
        {
          id: 1,
          name: "John Smith",
        },
      ],
    });

    const result = await axios.get("/users");
    expect(result.data.statusCode).toEqual(1);
  });

  it("test post", async () => {
    mock.onPost("/users", { id: 1, name: "foo" }).reply(200, {
      statusCode: 1,
      status: "success",
      msg: "",
    });

    const body = {
      id: 1,
      name: "foo",
    };
    const result = await axios.post("/users", body);
    expect(result.data.statusCode).toEqual(1);

    // const result2 = await axios.get("/users");
    // expect(result2.data.statusCode).toEqual(1);
  });
});
