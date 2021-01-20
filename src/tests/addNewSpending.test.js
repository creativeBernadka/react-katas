import { spendingsSlice } from "../store/spendingsSlice";

describe("addNewSpending", () => {

  it("correctly adds new spending", () => {
    const initialState = {
      spendings: [
        {
          date: "2020-12-05",
          category: {
            name: "",
            subcategoryName: "",
          },
          spendingValues: [""],
          id: "",
        },
      ],
    };
    const {caseReducers: {addNewSpending}} = spendingsSlice
  
    const results = addNewSpending(initialState.spendings , {payload: {id: 1, date: "2021-01-20"}})
    expect(results).toHaveLength(2)

  });
});

