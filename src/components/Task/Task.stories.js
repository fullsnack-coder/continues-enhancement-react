import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Task from "./Task";

export const task = {
  //Initial data for component
  id: "1",
  title: "Todo first task",
  status: "TASK_INBOX",
  updateAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

storiesOf("Task", module)
  .add("default", () => <Task task={task} {...actions} />)
  .add("pinned", () => (
    <Task task={{ ...task, status: "PINNED_TASK" }} {...actions} />
  ))
  .add("archived", () => (
    <Task task={{ ...task, status: "ARCHIVED_TASK" }} {...actions} />
  ));
