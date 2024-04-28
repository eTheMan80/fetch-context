/* eslint-disable import/no-anonymous-default-export */

import { imgDataArray } from "../mockData"

export default {
  get: jest.fn().mockResolvedValue({
    data: imgDataArray,
  }),
}
