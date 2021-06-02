import React from 'react';
import Emotes from './Products/emotes';
import Badges from './Products/badges';
// import { Alerts, Banners, Overlays, Panels, Scenes, Transitions } from './Products';
// import { FiberPinRounded } from '@material-ui/icons';

import Alerts from './Products/alerts';
import Banners from './Products/banners';
import Overlays from './Products/overlays';
import Panels from './Products/panels';
import Scenes from './Products/scenes';
import Transitions from './Products/transitions';

function shop() {
    return (
        <div>
            
                <Alerts id=''/>
            <br></br>
            <h1>Emotes</h1>
                <Emotes id=''/>
            <br></br>
            <h1>Badges</h1>
                <Badges id=''/>
            <br></br>
            <h1>Banners</h1>
                <Banners id=''/>

                <Overlays id=''/>

                <Panels id=''/>

                <Scenes id=''/>

                <Transitions id=''/>

            
        </div>


    )
}

export default shop;