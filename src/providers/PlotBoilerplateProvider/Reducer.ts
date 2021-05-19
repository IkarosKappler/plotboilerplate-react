/**
 * @date 2021-03-01
 */

import { PlotBoilerplateState } from './Provider';

export type ActionName = 'ADD_DRAWABLE' | 'ADD_VERTEX' | 'SET_PLOTBOILERPLATE';

// export interface Action {
//   actionType: string;
//   value: any;
// }

export type PBAction = { actionType: ActionName; value: any };

export const reducer = (state: PlotBoilerplateState, action: PBAction) => {
  switch (action.actionType) {
    case 'ADD_DRAWABLE':
      state.plotBoilerplate?.add(action.value);
      return { ...state, drawables: [...state.drawables, action.value] };
    case 'ADD_VERTEX':
      state.plotBoilerplate?.add(action.value);
      return { ...state, vertices: [...state.vertices, action.value] };
    case 'SET_PLOTBOILERPLATE':
      return { ...state, plotBoilerplate: action.value };
    default:
      return state;
  }
};
