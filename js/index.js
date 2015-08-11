import React from 'react-native';
import App from './app';

import component from 'omniscient/native';
import immstruct from 'immstruct';

const data = immstruct({ clicks: 0 });

// render loop
const updateOnChange = [{
  componentDidMount: function () {
    const self = this;
    data.on('swap', function () {
      self.forceUpdate();
    });
  }
}];

const WrapperComponent = component(updateOnChange, function WrapperComponent () {
  return App(data.cursor());
});

React.AppRegistry.registerComponent('Project', () => WrapperComponent.jsx);