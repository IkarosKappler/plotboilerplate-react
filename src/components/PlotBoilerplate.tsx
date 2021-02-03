/**
 * @author  Ikaros Kappler
 * @date    2021-02-03
 * @version 0.0.1
 */

import React from "react";
import { PlotBoilerplate as PB } from "plotboilerplate";


interface PlotBoilerplateProps {
    // canvas : HTMLCanvasElement | SVGElement | string;
    fullsize? : boolean;
    fitToParent? : boolean;
    enableMouse? : boolean;
    enableTouch? : boolean;
    enableKeys? : boolean;
}

const PlotBoilerplate : React.FC<PlotBoilerplateProps> = ({ fullSize, fitToParent, enableMouse, enableTouch, enableKeys }) => {
    // return (<button>{text}</button>);

    const ref : MutableRefObject<Canvas> = React.useRef<Canvas>(null);
    const [pb,setPB] = React.useState<PB|undefined>(null);

    React.useEffect( () => {
	if( ref.current ) {
	    setPB( new PB( { canvas : ref.current, fullSize, fitToParent, enableMouse, enableTouch, enableKeys } ) );
	}
    }
    
    return (<canvas ref={ref}></canvas>);
};

export default PlotBoilerplate;
