import React from 'react-native';
import component from 'omniscient/native';

const { StyleSheet } = React;

const View = React.createFactory(React.View),
      TouchableHighlight = React.createFactory(React.TouchableHighlight),
      Text = React.createFactory(React.Text);

const Button = component(function Button (clicks) {
  const onPress = () => clicks.update(n => n + 1);
  return TouchableHighlight({ onPress },
                            Text({}, `clicks ${clicks.deref()}`));
});

export default component(function App (state) {
  return View({ style: styles.container },
              Button(state.cursor('clicks')));
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff'
  }
});