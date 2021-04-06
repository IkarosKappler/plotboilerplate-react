/**
 * @author  Ikaros Kappler
 * @date    2021-03-01
 * @version 0.0.1
 */

import * as React from 'react'

import { Line, Vertex } from 'plotboilerplate'
import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider'

interface LineComponentProps {
  a: Vertex
  b: Vertex
}

export const LineComponent: React.FC<LineComponentProps> = ({ a, b }) => {
  const {
    isInitialized,
    addDrawable,
    plotBoilerplate
  } = usePlotBoilerplateProvider()
  const [drawable, setDrawable] = React.useState<Line | null>(null)

  React.useEffect(() => {
    if (isInitialized) {
      const line = new Line(a, b)
      addDrawable(line)
      setDrawable(line)
    }
  }, [isInitialized])

  React.useEffect(() => {
    if (!isInitialized || !drawable) {
      return
    }
    drawable.a = a
    drawable.b = b
    plotBoilerplate?.redraw()
  }, [a, b])

  return <span>Line</span>
}
