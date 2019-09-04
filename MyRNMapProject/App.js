/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react'

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

const App = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      region={{
        latitude: 37.485178,
        longitude: -122.147135,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
      }}
      showsUserLocation
    />
  )
}

export default App
