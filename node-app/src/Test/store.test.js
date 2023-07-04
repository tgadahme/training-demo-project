const request = require("supertest");
const app = require("../app.js");

describe("Space test suite", () => {
  /**
   * Test: GET /api/stores/:AccountId
   * Description: Test the /api/stores endpoint with a valid AccountId.
   * Expected Result: The response should contain an array with a single store object,
   *                 and the response status code should be 200.
   */
  it("tests /api/store endpoint", async () => {
    const response = await request(app).get("/api/stores/100");

    expect(response.body).toEqual([
      {
        id: 121,
        name: "Rally's 103",
        is_active: 1,
        address: "8667 JAMACHA RD",
        locality: "Spring Valley",
        region: "CA",
        postalcode: "91977",
      },
    ]);

    expect(response.body).toHaveLength(1);
    expect(response.statusCode).toBe(200);
  });

  /**
   * Test: GET /api/stores/:AccountId
   * Description: Test the /api/stores endpoint with an AccountId that has no stores.
   * Expected Result: The response should contain an error message indicating no stores found,
   *                 and the response status code should be 404.
   */
  it("tests /api/store endpoint no stores", async () => {
    const response = await request(app).get("/api/stores/123");

    expect(response.body.message).toEqual("No stores found");
    expect(response.statusCode).toBe(404);
  });
});
