/**
 * @author  Ikaros Kappler
 * @date    2021-02-03
 * @version 0.0.1
 */

import React from "react";
// TODO: why can't I import from "plotboilerplate"
// Seems the type declarations are missing there
// import { PlotBoilerplate as PB } from "plotboilerplate/src/ts/PlotBoilerplate";
// import { PlotBoilerplate as PB } from "plotboilerplate";
import { PlotBoilerplate } from "plotboilerplate";
// import { PlotBoilerplate as PB } from "plotboilerplate/src/js/PlotBoilerplate";
// import PlotBoilerplate from "plotboilerplate/src/js/module";

// console.log("PlotBoilerplate.tsx", "PB", PlotBoilerplate );


interface PlotBoilerplateComponentProps {
    // canvas : HTMLCanvasElement | SVGElement | string;
    fullSize? : boolean;
    fitToParent? : boolean;
    enableMouse? : boolean;
    enableTouch? : boolean;
    enableKeys? : boolean;
}

export const PlotBoilerplateComponent : React.FC<PlotBoilerplateComponentProps> = ({ fullSize, fitToParent, enableMouse, enableTouch, enableKeys }) => {
    // return (<button>{text}</button>);

    const ref : React.RefObject<HTMLCanvasElement> = React.useRef<HTMLCanvasElement>(null);
    const [pb,setPB] = React.useState<PlotBoilerplate|null>(null);

    React.useEffect( () => {
	// console.log( "useEffect", PlotBoilerplate );
	if( ref.current ) {
	    setPB( new PlotBoilerplate( { canvas : ref.current, fullSize, fitToParent, enableMouse, enableTouch, enableKeys } ) );
	    console.log('PB initialized', pb );
	}
    }, [ref.current, setPB, PlotBoilerplate] );

    return (<canvas ref={ref}></canvas>);
};

// export default PlotBoilerplate;
