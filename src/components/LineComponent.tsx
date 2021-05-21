/**
 * @author  Ikaros Kappler
 * @date    2021-03-01
 * @version 0.0.1
 */

import * as React from 'react'

import { Line, Vertex } from 'plotboilerplate'
import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider'

interface LineComponentProps {
  ax: number;
  ay: number;
  bx: number;
  by: number;
}

export const LineComponent: React.FC<LineComponentProps> = ({ ax, ay, bx, by }) => {
  const {
    isInitialized,
    addDrawable,
    plotBoilerplate
  } = usePlotBoilerplateProvider();
  const [drawable, setDrawable] = React.useState<Line | null>(null)

  React.useEffect(() => {
    if (isInitialized) {
      const line : Line = new Line(new Vertex(ax,ay), new Vertex(bx,by))
      addDrawable(line)
      setDrawable(line)
    }
  }, [isInitialized])

  React.useEffect(() => {
    if (!isInitialized || !drawable) {
      return
    }
    drawable.a.x = ax;
     drawable.a.y = ay;
     drawable.b.x = bx;
     drawable.b.y = by;
    plotBoilerplate?.redraw()
  }, [ax, ay, bx, by])

  return <span>Line</span>
}
