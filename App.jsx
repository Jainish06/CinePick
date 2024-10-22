// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query';
import store from './Redux/store';
import MovieList from './Screens/MovieList';
import Shortlisted from './Screens/Shortlisted';

const queryClient = new QueryClient();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Movies" component={MovieList} />
            <Tab.Screen name="Shortlisted" component={Shortlisted} />
          </Tab.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
