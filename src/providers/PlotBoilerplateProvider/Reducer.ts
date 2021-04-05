/**
 * @date 2021-03-01
 */

import { PlotBoilerplateState } from './Provider'

export interface Action {
  actionType: any
  value: any
}

export const reducer = (state: PlotBoilerplateState, action: Action) => {
  switch (action.actionType) {
    case 'addDrawable':
      state.plotBoilerplate?.add(action.value)
      return { ...state, drawables: [...state.drawables, action.value] }
    case 'setPlotBoilerplate':
      return { ...state, plotBoilerplate: action.value }
    default:
      return state
  }
}
