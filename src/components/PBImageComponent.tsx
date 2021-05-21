/**
 * @author  Ikaros Kappler
 * @date    2021-05-21
 * @version 0.0.1
 */

 import * as React from 'react'

 import { PBImage, Vertex } from 'plotboilerplate'
 import { usePlotBoilerplateProvider } from '../providers/PlotBoilerplateProvider/Provider'
 
 interface PBImageComponentProps {
    src: string;
    upperleftx: number;
    upperlefty: number;
    lowerrightx: number;
    lowerrighty: number;
 }
 
 export const PBImageComponent: React.FC<PBImageComponentProps> = ({ src, upperleftx, upperlefty, lowerrightx, lowerrighty }) => {
   const {
     isInitialized,
     addDrawable,
     plotBoilerplate
   } = usePlotBoilerplateProvider();
   const [drawable, setDrawable] = React.useState<PBImage | null>(null)
 
   React.useEffect(() => {
    if (isInitialized) {
       const htmlImage : HTMLImageElement = document.createElement("img");
       htmlImage.addEventListener('load', () => { console.log('loaded'); if( htmlImage.complete ) { plotBoilerplate?.redraw(); } });
       htmlImage.setAttribute("src", src);
       const pbimage : PBImage = new PBImage(htmlImage, new Vertex(upperleftx, upperlefty), new Vertex(lowerrightx, lowerrighty));
       addDrawable(pbimage);
       setDrawable(pbimage);
     }
   }, [isInitialized])
 
   React.useEffect(() => {
     if (!isInitialized || !drawable) {
       return
     }
     drawable.image.src = src;
     drawable.upperLeft.x = upperlefty;
     drawable.upperLeft.y = upperlefty;
     drawable.lowerRight.x = lowerrightx;
     drawable.lowerRight.y = lowerrighty;
     plotBoilerplate?.redraw()
   }, [src, upperleftx, upperlefty, lowerrightx, lowerrighty])
 
   return <span>PBImage</span>
 }
 