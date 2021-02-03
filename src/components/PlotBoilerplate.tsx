/**
 * @author  Ikaros Kappler
 * @date    2021-02-03
 * @version 0.0.1
 */

import React from "react";


interface PlotBoilerplateProps {
    canvas : HTMLCanvasElement | SVGElement | string;
}

const PlotBoilerplate : React.FC<PlotBoilerplateProps> = ({canvas}) => {
       return (<button>{text}</button>);
};

export default PlotBoilerplate;