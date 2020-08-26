const concurrently = require("concurrently");

(async function development() {
  try {
    await concurrently([
      { name: "编译源代码", command: "npx cyber-component dev" },
      { name: "调试案例", command: "npx cyber-spa dev" }
    ]);
  } catch (error) {
    throw error;
  };
})();
