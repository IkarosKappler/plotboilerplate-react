/**
 * @author  Ikaros Kappler
 * @date    2021-05-19
 * @version 0.0.1
 */

 import * as React from 'react'

 import { Circle, Vertex } from 'plotboilerplate'
 import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider'
 
 interface CircleComponentProps {
   center: Vertex;
   radius: number;
 }
 
 export const CircleComponent: React.FC<CircleComponentProps> = ({ center, radius }) => {
   const {
     isInitialized,
     addDrawable,
     plotBoilerplate
   } = usePlotBoilerplateProvider();
   const [drawable, setDrawable] = React.useState<Circle | null>(null)
 
   React.useEffect(() => {
     if (isInitialized) {
       const circle : Circle = new Circle(center, radius);
       addDrawable(circle);
       setDrawable(circle);
     }
   }, [isInitialized])
 
   React.useEffect(() => {
     if (!isInitialized || !drawable) {
       return
     }
     drawable.center = center;
     drawable.radius = radius;
     plotBoilerplate?.redraw()
   }, [center, radius])
 
   return <span>Circle</span>
 }
 