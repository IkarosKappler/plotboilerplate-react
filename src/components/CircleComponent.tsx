/**
 * @author  Ikaros Kappler
 * @date    2021-05-19
 * @version 0.0.1
 */

 import * as React from 'react'

 import { Circle, Vertex } from 'plotboilerplate'
 import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider'
 
 interface CircleComponentProps {
   centerx: number;
   centery: number;
   radius: number;
 }
 
 export const CircleComponent: React.FC<CircleComponentProps> = ({ centerx, centery, radius }) => {
   const {
     isInitialized,
     addDrawable,
     plotBoilerplate
   } = usePlotBoilerplateProvider();
   const [drawable, setDrawable] = React.useState<Circle | null>(null)
 
   React.useEffect(() => {
     if (isInitialized) {
       const circle : Circle = new Circle( new Vertex(centerx, centery), radius);
       addDrawable(circle);
       setDrawable(circle);
     }
   }, [isInitialized])
 
   React.useEffect(() => {
     if (!isInitialized || !drawable) {
       return
     }
     drawable.center.x = centerx;
     drawable.center.y = centery;
     drawable.radius = radius;
     plotBoilerplate?.redraw()
   }, [centerx, centery, radius])
 
   return <span>Circle</span>
 }
 