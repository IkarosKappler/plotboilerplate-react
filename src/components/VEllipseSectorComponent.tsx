/**
 * @author  Ikaros Kappler
 * @date    2021-05-21
 * @version 0.0.1
 */

 import * as React from 'react'

 import { VEllipse, VEllipseSector, Vertex } from 'plotboilerplate'
 import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider'
 
 interface VEllipseComponentProps {
    centerx: number;
    centery: number;
    axisx: number;
    axisy: number;
    rotation?: number
    startAngle: number;
    endAngle: number;
 }
 
 export const VEllipseSectorComponent: React.FC<VEllipseComponentProps> = ({ centerx, centery, axisx, axisy, rotation , startAngle, endAngle }) => {
   const {
     isInitialized,
     addDrawable,
     plotBoilerplate
   } = usePlotBoilerplateProvider();
   const [drawable, setDrawable] = React.useState<VEllipseSector | null>(null)
 
   React.useEffect(() => {
     if (isInitialized) {
       const sector : VEllipseSector = new VEllipseSector(new VEllipse(new Vertex(centerx,centery), new Vertex(axisx,axisy), rotation), startAngle, endAngle )
       addDrawable(sector)
       setDrawable(sector)
     }
   }, [isInitialized])
 
   React.useEffect(() => {
     if (!isInitialized || !drawable) {
       return
     }
     drawable.ellipse.center.x = centerx;
     drawable.ellipse.center.y = centery;
     drawable.ellipse.axis.x = axisx;
     drawable.ellipse.axis.y = axisy;
     drawable.ellipse.rotation = rotation;
     drawable.startAngle = startAngle;
     drawable.endAngle = endAngle;
     plotBoilerplate?.redraw();
   }, [centerx, centery, axisx, axisy, rotation , startAngle, endAngle ])
 
   return <span>VEllipseSector</span>
 }
 