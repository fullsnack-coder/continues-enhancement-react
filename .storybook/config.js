import { configure } from "@storybook/react";
import requireContext from "require-context.macro";
import "../src/index.css";

const req = requireContext("../src", true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach((path) => {
    return req(path);
  });
}

configure(loadStories, module);
