/**
 * @author  Ikaros Kappler
 * @date    2021-02-03
 * @version 0.0.1
 */

import * as React from 'react'

import { PlotBoilerplate } from 'plotboilerplate'
import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider'

interface PlotBoilerplateComponentProps {
  backgroundColor?: string;
  fullSize?: boolean
  fitToParent?: boolean
  enableMouse?: boolean
  enableTouch?: boolean
  enableKeys?: boolean
}

export const PlotBoilerplateComponent: React.FC<PlotBoilerplateComponentProps> = ({
  backgroundColor,
  fullSize,
  fitToParent,
  enableMouse,
  enableTouch,
  enableKeys,
  children
}) => {
  const ref: React.RefObject<HTMLCanvasElement> = React.useRef<HTMLCanvasElement>(
    null
  )
  const { isInitialized, setPlotBoilerplate } = usePlotBoilerplateProvider();

  React.useEffect(() => {

    if (!isInitialized && ref.current) {
      setPlotBoilerplate(
        new PlotBoilerplate({
          canvas: ref.current,
          backgroundColor,
          fullSize,
          fitToParent,
          enableMouse,
          enableTouch, // : false, // TODO: include alloyfinger to make this work
          enableKeys
        })
      )
    }
  }, [isInitialized, ref.current, setPlotBoilerplate, PlotBoilerplate]);

  return (<canvas ref={ref}>{children}</canvas>);
}
