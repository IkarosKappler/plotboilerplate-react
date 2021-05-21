/**
 * @author  Ikaros Kappler
 * @date    2021-05-21
 * @version 0.0.1
 */

 import * as React from 'react'

 import { Circle, CircleSector, Vertex } from 'plotboilerplate'
 import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider'
 
 interface CircleSectorComponentProps {
   centerx: number;
   centery: number;
   radius: number;
   startAngle: number;
   endAngle: number;
 }
 
 export const CircleSectorComponent: React.FC<CircleSectorComponentProps> = ({ centerx, centery, radius, startAngle, endAngle }) => {
   const {
     isInitialized,
     addDrawable,
     plotBoilerplate
   } = usePlotBoilerplateProvider();
   const [drawable, setDrawable] = React.useState<CircleSector | null>(null)
 
   React.useEffect(() => {
     if (isInitialized) {
       const sector : CircleSector = new CircleSector(new Circle(new Vertex(centerx,centery), radius), startAngle, endAngle);
       addDrawable(sector);
       setDrawable(sector);
     }
   }, [isInitialized])
 
   React.useEffect(() => {
     if (!isInitialized || !drawable) {
       return
     }
     drawable.circle.center.set(centerx,centery);
     drawable.circle.radius = radius;
     drawable.startAngle = startAngle
     drawable.endAngle = endAngle;
     plotBoilerplate?.redraw()
   }, [centerx, centery, startAngle, endAngle]);
 
   return <span>CircleSector</span>
 }
 