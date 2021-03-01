/**
 * @author  Ikaros Kappler
 * @date    2021-03-01
 * @version 0.0.1
 */

import React from "react";

import { Line, PlotBoilerplate, Vertex } from "plotboilerplate";

interface LineComponentProps {
    a: Vertex;
    b: Vertex;
}

export const PlotBoilerplateComponent : React.FC<PlotBoilerplateComponentProps> = ({
    fullSize,
    fitToParent,
    enableMouse,
    enableTouch,
    enableKeys }) => {


    const ref : React.RefObject<HTMLCanvasElement> = React.useRef<HTMLCanvasElement>(null);
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
