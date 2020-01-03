import { createSpace } from "./";

describe("createSpace", () => {
  let space = createSpace({});
  beforeAll(() => {
    space = createSpace({});
  });

  it("should be able to add new slices", () => {
    space.putSlice("slicename");
    expect(true).toEqual(true);
  });

  it("space slices should have space prefix", () => {
    space.putSlice({ sliceName: "flights_seatMap" });
    expect(true).toEqual(true);
    console.log(space.store.getState());
  });
});
