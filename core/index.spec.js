import { createSpace, selectSliceFromState } from "./";

describe("createSpace", () => {
  let space = createSpace({});
  beforeAll(() => {
    space = createSpace({
      namespace: "mfe"
    });
  });

  it("space slices should have space prefix", () => {
    space.putSlice({ sliceName: "flights_seatMap" });
    expect(true).toEqual(true);
    console.log(space.store.getState());
    space.addToCollection({
      sliceName: "flights_seatMap",
      entity: { id: 1 }
    });
    console.log(
      selectSliceFromState(space.store.getState(), "mfe_flights_seatMap")
    );
  });
});
