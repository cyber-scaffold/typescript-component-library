const path = require("path");
const watch = require("watch");
const execa = require("execa");
// const concurrently = require("concurrently");

const watchPath = path.resolve(__dirname, "../src/");

async function developmentTask() {
  try {
    await execa("cyber-component", ["build"], { stdout: "inherit" });
    await execa("cyber-spa", ["dev"], { stdout: "inherit" });
  } catch (error) {
    throw error;
  } finally {
    process.exit(0);
  };
};

watch.watchTree(watchPath, developmentTask);


