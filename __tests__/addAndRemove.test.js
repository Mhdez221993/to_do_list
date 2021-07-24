// import { test } from "@jest/globals";
import { expect } from "@jest/globals";
import { TaskList } from "../src/addAndRemove";

test('shud return the leght', () => {
  let newtask = new TaskList()
  expect(newtask.add(4)).toBe(8)
})