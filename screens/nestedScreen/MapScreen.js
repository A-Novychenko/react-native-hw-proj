import MapView, {Marker} from "react-native-maps";
import {Text, StyleSheet, View} from "react-native";

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 50.411404,
          longitude: 30.525744,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0021,
        }}
      >
        <Marker
          coordinate={{latitude: 50.411404, longitude: 30.525744}}
          title="test title"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
