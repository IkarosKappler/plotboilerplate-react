/**
 * @date 2021-03-01
 */

import { Drawable, PlotBoilerplate } from 'plotboilerplate'
import * as React from 'react'
import { Action, reducer } from './Reducer'

export interface PlotBoilerplateState {
  vertices: Array<any>
  drawables: Array<any>
  plotBoilerplate: PlotBoilerplate | null
}

const initialState: PlotBoilerplateState = {
  vertices: [],
  drawables: [],
  plotBoilerplate: null
}

export const PlotBoilerplateContext = React.createContext({
  state: initialState,
  dispatch: (_action: Action) => {
    console.warn('Fake dispatch. This should never be called!', _action)
  }
})

export const PlotBoilerplateProvider: React.FC = ({ children }) => {
  const context = React.useContext(PlotBoilerplateContext)
  const { state: _state } = context
  const [state, dispatch] = React.useReducer(reducer, _state)

  const value = React.useMemo<{
    state: PlotBoilerplateState
    dispatch: React.Dispatch<Action>
  }>(
    () => ({
      state,
      dispatch
    }),
    [state, state.plotBoilerplate, dispatch]
  )

  return (
    <PlotBoilerplateContext.Provider value={value}>
      {children}
    </PlotBoilerplateContext.Provider>
  )
}

export const usePlotBoilerplateProvider = () => {
  const context = React.useContext(PlotBoilerplateContext)
  const { state, dispatch } = context

  if (!state) {
    console.warn(
      'Using PlotBoilerplateProvider without a PlotBoilerplateContext'
    )
    throw 'Using PlotBoilerplateProvider without a PlotBoilerplateContext'
  }

  var setPlotBoilerplate = (pb: PlotBoilerplate) => {
    dispatch({ actionType: 'setPlotBoilerplate', value: pb })
  }

  var addDrawable = (d: Drawable) => {
    // console.log('AddDrawable')
    dispatch({ actionType: 'addDrawable', value: d })
  }

  return React.useMemo(
    () => ({
      isInitialized: state.plotBoilerplate !== null,
      plotBoilerplate: state.plotBoilerplate,
      addDrawable,
      setPlotBoilerplate
    }),
    [state]
  )
}
