/**
 * @author  Ikaros Kappler
 * @date    2021-05-21
 * @version 0.0.1
 */

 import * as React from 'react'

 import { Polygon, Vertex } from 'plotboilerplate'
 import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider'
 
 interface PolygonComponentProps {
    datax: Array<number>;
    datay: Array<number>;
    isOpen?: boolean;
 }
 
 export const PolygonComponent: React.FC<PolygonComponentProps> = ({ datax, datay, isOpen }) => {
   const {
     isInitialized,
     addDrawable,
     plotBoilerplate
   } = usePlotBoilerplateProvider();
   const [drawable, setDrawable] = React.useState<Polygon | null>(null)
 
   React.useEffect(() => {
     if (isInitialized) {
       const polygon : Polygon = new Polygon(coordinatesToVertices(datax,datay), isOpen);
       addDrawable(polygon);
       setDrawable(polygon);
     }
   }, [isInitialized])
 
   React.useEffect(() => {
     if (!isInitialized || !drawable) {
       return
     }
     drawable.vertices = coordinatesToVertices(datax,datay);
     drawable.isOpen = isOpen;
     plotBoilerplate?.redraw();
   }, [datax, datay, isOpen])
 
   return <span>Polygon</span>
 }
 
 const coordinatesToVertices = (datax:number[], datay:number[]) : Array<Vertex> => {
    const n : number = Math.max( datax.length, datay.length );
    const arr : Array<Vertex> = new Array(n);
    for( var i = 0; i < n; i++ ) {
        arr[i] = new Vertex( i < datax.length ? datax[i] : 0, i < datay.length ? datay[i] : 0 );
    }
    return arr;
 }