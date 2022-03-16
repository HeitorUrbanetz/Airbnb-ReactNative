import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native';
import Router from './src/navigation/Router';




// import HomeScreen from './src/screens/Home';
// import Post from './src/components/Post';

import feed from './assets/data/feed';

// import SearchResultsScreen from './src/screens/ScreenResults';
// import DestinationSearchScreen from './src/screens/DestinationSearch';
// import GuestsScreen from './src/screens/Guests';

const post1 = feed[0];
const post2 = feed[2];


export default function App() {
  return (
    <>
      <StatusBar style="dark-content" />
      
        <Router />
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});

