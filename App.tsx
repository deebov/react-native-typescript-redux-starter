import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import * as config from './src/config';
import { PersistGate } from 'redux-persist/integration/react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { mapping, light as lightTheme } from '@eva-design/eva';
import * as Font from 'expo-font';
// @ts-ignore
import AppContainer from './src/navigation/AppNavigator';

interface MyProps {}

interface MyState {
  fontLoaded: boolean;
}

class App extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Merriweather-Regular': require('./assets/fonts/Merriweather-Regular.ttf'),
      'Merriweather-Bold': require('./assets/fonts/Merriweather-Bold.ttf'),
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'RobotoMono-Regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
    });
    this.setState({
      fontLoaded: true,
    });
  }

  loader() {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  render() {
    if (!this.state.fontLoaded) {
      return this.loader();
    }
    return (
      <Provider store={config.store}>
        <PersistGate loading={this.loader()} persistor={config.persistor}>
          <ApplicationProvider mapping={mapping} theme={lightTheme}>
            <AppContainer />
          </ApplicationProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App; // comment this to enable storybook
