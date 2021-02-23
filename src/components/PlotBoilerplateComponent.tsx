/**
 * @author  Ikaros Kappler
 * @date    2021-02-03
 * @version 0.0.1
 */

import React from "react";
// import * as PB from "plotboilerplate/src/es2015/index";
// import * as PB from "plotboilerplate/src/js/index";
// import PlotBoilerplate from "plotboilerplate/src/js/module";
// import { PlotBoilerplate } from "plotboilerplate/src/es2015/PlotBoilerplate";

import { PlotBoilerplate } from "plotboilerplate";

interface PlotBoilerplateComponentProps {
    fullSize? : boolean;
    fitToParent? : boolean;
    enableMouse? : boolean;
    enableTouch? : boolean;
    enableKeys? : boolean;
}

export const PlotBoilerplateComponent : React.FC<PlotBoilerplateComponentProps> = ({ fullSize, fitToParent, enableMouse, enableTouch, enableKeys }) => {
    // return (<button>{text}</button>);

    const ref : React.RefObject<HTMLCanvasElement> = React.useRef<HTMLCanvasElement>(null);
    //const [pb,setPB] = React.useState<PB.PlotBoilerplate|null>(null);
    const [pb,setPB] = React.useState<PlotBoilerplate|null>(null);

    React.useEffect( () => {
	// console.log( "useEffect", PlotBoilerplate );
	if( ref.current ) {
	    setPB( new PlotBoilerplate( { canvas : ref.current,
					  fullSize,
					  fitToParent,
					  enableMouse,
					  enableTouch,
					  enableKeys
	    } ) );
	    console.log('PB initialized', pb );
	}
    }, [ref.current, setPB, PlotBoilerplate] );

    return (<canvas ref={ref}></canvas>);
};

