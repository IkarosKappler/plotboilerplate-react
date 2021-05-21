/**
 * @author  Ikaros Kappler
 * @date    2021-05-21
 * @version 0.0.1
 */

 import * as React from 'react'

 import { VEllipse, Vertex } from 'plotboilerplate'
 import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider'
 
 interface VEllipseComponentProps {
    centerx: number;
    centery: number;
    axisx: number;
    axisy: number;
    rotation?: number
 }
 
 export const VEllipseComponent: React.FC<VEllipseComponentProps> = ({ centerx, centery, axisx, axisy, rotation }) => {
   const {
     isInitialized,
     addDrawable,
     plotBoilerplate
   } = usePlotBoilerplateProvider();
   const [drawable, setDrawable] = React.useState<VEllipse | null>(null)
 
   React.useEffect(() => {
     if (isInitialized) {
       const ellipse : VEllipse = new VEllipse( new Vertex(centerx,centery), new Vertex(axisx, axisy), rotation)
       addDrawable(ellipse)
       setDrawable(ellipse)
     }
   }, [isInitialized])
 
   React.useEffect(() => {
     if (!isInitialized || !drawable) {
       return
     }
     drawable.center.x = centerx;
     drawable.center.y = centery;
     drawable.axis.x = axisx;
     drawable.axis.y = axisy;
     drawable.rotation = rotation;
     plotBoilerplate?.redraw()
   }, [centerx, centery, axisx, axisy, rotation])
 
   return <span>VEllipse</span>
 }
 