// src/styles/metrics.js

import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  padding: 15,
  ...Platform.select({
    ios:     { headerHeight: 64, headerPadding: 20, marginTop: 40 },
    android: { headerHeight: 44, headerPadding: 0,  marginTop: 20 },
  }),
  tabBarHeight: 50,
  marginLeft: 20,
  marginRight: 20,
};

export default metrics;