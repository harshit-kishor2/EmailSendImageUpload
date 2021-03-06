import Axios from "axios";

const initialState = {
  imageLoadingStatus: "not loaded",
  imageError: null,
};

//types
const IMAGE_LOADING_PENDING = "IMAGE_LOADING_PENDING";
const IMAGE_LOADING_FULLFILLED = "IMAGE_LOADING_FULLFILLED";
const IMAGE_LOADING_ERROR = "IMAGE_LOADING_ERROR";

//Actions
export const imageUploadAction = (param1, param2) => async (dispatch) => {
  dispatch({ type: IMAGE_LOADING_PENDING, payload: {} });
  try {
    const response = await Axios.post("/api/app/imageTest", param1, param2);
    dispatch({ type: IMAGE_LOADING_FULLFILLED, payload: response.data });
  } catch (error) {
    dispatch({
      type: IMAGE_LOADING_ERROR,
      payload: error.response.data.message,
    });
  }
};

//reducers

export const imageUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_LOADING_PENDING:
      return { imageLoadingStatus: "loading" };
    case IMAGE_LOADING_FULLFILLED:
      return { imageLoadingStatus: "loaded" };
    case IMAGE_LOADING_ERROR:
      return { imageLoadingStatus: "error", imageError: action.payload };
    default:
      return state;
  }
};
