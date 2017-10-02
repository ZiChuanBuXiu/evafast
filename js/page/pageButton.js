import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import PageOne from './PageOne';
import PageTwo from './PageTwo';

class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="PageOne" component={PageOne} title="PageOne" initial={true} />
                    <Scene key="PageTwo" component={PageTwo} title="PageTwo" />
                </Scene>
            </Router>
        )
    }
}
export default App;