/**
 * @author  Ikaros Kappler
 * @date    2021-02-03
 * @version 0.0.1
 */

import React from "react";
// TODO: why can't I import from "plotboilerplate"
// Seems the type declarations are missing there
import { PlotBoilerplate as PB } from "plotboilerplate/src/ts/PlotBoilerplate";


interface PlotBoilerplateProps {
    // canvas : HTMLCanvasElement | SVGElement | string;
    fullSize? : boolean;
    fitToParent? : boolean;
    enableMouse? : boolean;
    enableTouch? : boolean;
    enableKeys? : boolean;
}

export const PlotBoilerplate : React.FC<PlotBoilerplateProps> = ({ fullSize, fitToParent, enableMouse, enableTouch, enableKeys }) => {
    // return (<button>{text}</button>);

    const ref : React.RefObject<HTMLCanvasElement|null> = React.useRef<HTMLCanvasElement|null>(null);
    const [pb,setPB] = React.useState<PB|null>(null);

    React.useEffect( () => {
	if( ref.current ) {
	    setPB( new PB( { canvas : ref.current, fullSize, fitToParent, enableMouse, enableTouch, enableKeys } ) );
	    console.log('PB initialized', pb );
	}
    } );

    return (<canvas ref={ref}></canvas>);
};

// export default PlotBoilerplate;
