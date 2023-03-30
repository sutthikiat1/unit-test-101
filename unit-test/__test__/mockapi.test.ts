import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("axios", () => {
  var mock = new MockAdapter(axios);

  beforeEach(() => {
    mock.reset();
  });

  it("should get status code", async () => {
    mock.onGet("/users").reply(200, {
      statusCode: 1,
      status: "success",
      msg: "",
      data: [
        {
          id: 1,
          name: "John Smith",
        },
        {
          id: 2,
          name: "Jimmy",
        },
      ],
    });
    const expectedResult = "John Smith";

    const result = await axios.get("/users");

    expect(result.data.data[0].name).toBe(expectedResult);
  });

  it("should get status code from post method", async () => {
    mock
      .onPost("/add-user", {
        id: 2,
        name: "messi",
      })
      .reply(200, {
        msg: "add user successfully",
      });

    const expectedResult = "add user successfully";

    const result = await axios.post("/add-user", {
      id: 2,
      name: "messi",
    });

    const result2 = await axios.get("/users");
    expect(result2.data.statusCode).toEqual(1);

    expect(result.data.msg).toBe(expectedResult);
  });

  // it("test get", async () => {
  //   mock.onGet("/users").reply(200, {
  //     statusCode: 1,
  //     status: "success",
  //     msg: "",
  //     data: [
  //       {
  //         id: 1,
  //         name: "John Smith",
  //       },
  //     ],
  //   });

  //   const result = await axios.get("/users");
  //   expect(result.data.statusCode).toEqual(1);
  // });

  // it("test post", async () => {
  //   mock.onPost("/users", { id: 1, name: "foo" }).reply(200, {
  //     statusCode: 1,
  //     status: "success",
  //     msg: "",
  //   });

  //   const body = {
  //     id: 1,
  //     name: "foo",
  //   };
  //   const result = await axios.post("/users", body);
  //   expect(result.data.statusCode).toEqual(1);

  //   // const result2 = await axios.get("/users");
  //   // expect(result2.data.statusCode).toEqual(1);
  // });
});
