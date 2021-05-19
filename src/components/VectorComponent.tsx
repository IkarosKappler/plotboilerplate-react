/**
 * @author  Ikaros Kappler
 * @date    2021-05-19
 * @version 0.0.1
 */

 import * as React from 'react'

 import { Vector, Vertex } from 'plotboilerplate'
 import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider'
 
 interface VectorComponentProps {
   a: Vertex
   b: Vertex
 }
 
 export const VectorComponent: React.FC<VectorComponentProps> = ({ a, b }) => {
   const {
     isInitialized,
     addDrawable,
     plotBoilerplate
   } = usePlotBoilerplateProvider();
   const [drawable, setDrawable] = React.useState<Vector | null>(null)
 
   React.useEffect(() => {
     if (isInitialized) {
       const vector : Vector = new Vector(a, b)
       addDrawable(vector)
       setDrawable(vector)
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
 
   return <span>Vector</span>
 }
 