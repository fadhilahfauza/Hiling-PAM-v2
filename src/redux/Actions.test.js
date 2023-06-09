import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchIPRequest, fetchIPSuccess, fetchIPFailure } from "./Actions";

const mockStore = configureMockStore([thunk]);

describe("Actions", () => {
  let mockAxios;
  beforeEach(() => {
    // membuat mock adapter sebelum dilakukan pengujain untuk axios
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    // mengatur menjadi state awal axios ketika salah satu pengujian selesai
    mockAxios.restore();
  });
  it("fetch ip request", () => {
    const expectedAction = { type: "FETCH_IP_REQUEST" };
    expect(fetchIPRequest()).toEqual(expectedAction);
  });

  it("fetch ip success", () => {
    const data = { ip: "127.0.0.1" };
    const expectedAction = {
      type: "FETCH_IP_SUCCESS",
      payload: data,
    };
    expect(fetchIPSuccess(data)).toEqual(expectedAction);
  });

  it("fetch ip failure", () => {
    const error = "Error fetching IP";
    const expectedAction = {
      type: "FETCH_IP_FAILURE",
      payload: error,
    };
    expect(fetchIPFailure(error)).toEqual(expectedAction);
  });
});
