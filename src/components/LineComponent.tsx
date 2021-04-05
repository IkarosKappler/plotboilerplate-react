/**
 * @author  Ikaros Kappler
 * @date    2021-03-01
 * @version 0.0.1
 */

import React from 'react'

import { Line, Vertex } from 'plotboilerplate'
import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider'

interface LineComponentProps {
  a: Vertex
  b: Vertex
}

export const LineComponent: React.FC<LineComponentProps> = ({ a, b }) => {
  const { isInitialized, addDrawable } = usePlotBoilerplateProvider()

  React.useEffect(() => {
    // console.log('useEffect LineComponent', 'isInitialized', isInitialized)
    if (isInitialized) {
      addDrawable(new Line(a, b))
      //   console.log('Adding line drawable')
    }
  }, [isInitialized])

  return <span>Line</span>
}
