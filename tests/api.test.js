import pkg from "pactum";
const { spec } = pkg;
import { expect } from "chai";

describe("api tests", () => {
  it("Get all books and verify author and title of the first book", async () => {
    const response = await spec().get("https://demoqa.com/BookStore/v1/Books");
    expect(response.statusCode).to.eql(200);
    expect(response.body.books[0].title).to.eql("Git Pocket Guide");
  });
});
