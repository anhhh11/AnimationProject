import React from 'react'
import {Provider} from 'react-redux';
import {Scene, Router} from 'react-native-router-flux';
import {connect} from 'react-redux';
import store from './store'
const RouterWithRedux = connect()(Router);


import MainView from '../Main/view';
import InfoView from '../Info/view';


const RouterView = React.createClass({
  render(){
    return <Provider store={store}>
      <RouterWithRedux>
        <Scene key="root">
          <Scene key="main" component={MainView} title="Main" initial={true}/>
          <Scene key="info" component={InfoView} title="Info"/>
        </Scene>
      </RouterWithRedux>
    </Provider>

  }
});
export default RouterView;