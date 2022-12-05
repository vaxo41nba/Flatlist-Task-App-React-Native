import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import Constants from 'expo-constants';

import Navigator from './navigation';
import store from './redux/store';

export default function App() {
  const iphone = Platform.OS === 'ios';

  return (
    <Provider store={store}>
      {iphone && <StatusBar style="dark" />}
      {iphone && <SafeAreaView style={styles.statusBar} />}
      <Navigator />
      {iphone && <SafeAreaView style={styles.statusBar} />}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#161629',
    paddingTop: Platform.OS == 'android' ? Constants.statusBarHeight : 0,
  },
  statusBar: {
    flex: 0,
    backgroundColor: 'white',
  },
});
