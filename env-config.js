const prod = process.env.NODE_ENV === "production";
const name = "test";

module.exports = {
  "process.env.BACKEND_URL": prod ? `/${name}` : "",
};
