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
          <Tab.Navigator
          // screenOptions={({route}) => ({
          //   tabBarIcon: ({focused, color, size}) => {
          //     let iconName;

          //     if (route.name === 'Movies') {
          //       iconName = focused
          //         ? 'ios-information-circle'
          //         : 'ios-information-circle-outline';
          //     } else if (route.name === 'Shortlisted') {
          //       iconName = focused ? 'ios-list' : 'ios-list-outline';
          //     }

          //     // You can return any component that you like here!
          //     return <Ionicons name={iconName} size={size} color={color} />;
          //   },
          //   tabBarActiveTintColor: 'tomato',
          //   tabBarInactiveTintColor: 'gray',
          // })}
          >
            <Tab.Screen name="Movies" component={MovieList} />
            <Tab.Screen name="Shortlisted" component={Shortlisted} />
          </Tab.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
