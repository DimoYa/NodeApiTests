const supertest = require("supertest");
const sinon = require("sinon");

let app, request, auth;

before(() => {
  auth = require("../../middleware/auth-check");
  sinon.stub(auth, "ensureAuthenticated").callsFake(function (req, res, next) {
    return next();
  });

  app = require("../../index");
  request = supertest(app);
});

describe("GET All furniture", () => {
  it("should return 200", (done) => {
    request.get("/furniture/all").expect(200, done);
  });
});

after(() => {
  auth.ensureAuthenticated.restore();
  app.close();
});
