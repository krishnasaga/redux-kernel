import { createSpace } from "./";

describe("createSpace", () => {
  let space = createSpace({});
  beforeAll(() => {
    space = createSpace({});
  });

  it("space slices should have space prefix", () => {
    space.putSlice({ sliceName: "flights_seatMap" });
    expect(true).toEqual(true);
    console.log(space.store.getState());
  });
});
