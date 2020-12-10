import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

const mapboxAccessToken =
  'pk.eyJ1IjoicmluZ2dhcyIsImEiOiJja2lpdGx0NGYwNnQzMnZwOTF6cDN5MXprIn0.JsCQk39okc1rU9YRHoZEvg';
MapboxGL.setAccessToken(mapboxAccessToken);

const App = () => {
  const jakarta = [106.865036, -6.17511];
  const medan = [98.672226, 3.595196];
  const bali = [115.091949, -8.340539];
  const kalimantan = [111.475288, -0.278781];
  const gorontalo = [122.446724, 0.699937];
  const maluku = [130.145279, -3.238462];
  const papua = [138.080353, -4.269928];
  const startmedans = [
    jakarta,
    medan,
    bali,
    kalimantan,
    gorontalo,
    maluku,
    papua,
  ];
  //<Icon style={styles.icon} name="map-marker" color="#31C283" size={45} />
  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera zoomLevel={2} centerCoordinate={kalimantan} />
        {startmedans.map((point, index) => (
          <MapboxGL.PointAnnotation
            key={`${index}-PointAnnotation`}
            id={`${index}-PointAnnotation`}
            coordinate={point}>
            <View style={styles.annotationContainer}>
              <View style={styles.annotationFill} />
            </View>
            <MapboxGL.Callout title="PIndonesia, Provinsi" />
          </MapboxGL.PointAnnotation>
        ))}
      </MapboxGL.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
  },
});

export default App;
