import { createSlice } from "@reduxjs/toolkit";
import { mockedTasks } from "../../__mocked__/tasks.mocked";
import { uniqueId } from "../../utils/uniqueId";
import { STATUS } from "../../constants/status.constants";

export const pendingSlice = createSlice({
  name: "pendings",
  initialState: {
    activeCount: 0,
    doneCount: 0,
    data: mockedTasks,
  },
  reducers: {
    setPendings: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
    addPendings: (state, action) => {
      const { status } = action.payload;
      console.log(status);
      return {
        ...state,
        activeCount:
          status === STATUS.ACTIVE ? state.activeCount + 1 : state.activeCount,
        doneCount:
          status === STATUS.DONE ? state.doneCount + 1 : state.doneCount,
        data: [...state.data, { ...action.payload, id: uniqueId() }],
      };
    },
    changeStatusPending: (state, action) => {
      const { id, status } = action.payload;
      return {
        ...state,
        data: state.data.map((i) => {
          if (i.id === id)
            return {
              ...i,
              status: status,
            };
          return i;
        }),
      };
    },
    /*deletePending: (state, action) => {
			const id  = action.payload;
			console.log('deleted :)', action.payload);
			return {...state, data: state.data.filter(i => i.id !== id)}
		}*/
  },
});

export const { addPendings, setPendings, changeStatusPending } =
  pendingSlice.actions;

export default pendingSlice.reducer;
