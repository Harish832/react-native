import { View, Text } from 'react-native'
import React from 'react'
// import { ward51,ward52 } from './Data';


export default function Raycasting({region}) {
    var pointInPolygon = require('point-in-polygon');
    var num;

    var polygon = [[9.922135, 78.116752], [9.924756, 78.112028], [9.914308, 78.113326], [9.914139, 78.116418],[9.914815,78.121915],[9.920173,78.123831],[9.921459,78.125853],[9.922135,78.126889]];

    var istrue =pointInPolygon([region.latitude, region.longitude], polygon);
    {istrue?num=51:num=0}

    return (
        num
    )
    
}
