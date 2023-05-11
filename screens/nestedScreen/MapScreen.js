import MapView, {Marker} from "react-native-maps";
import {Text, StyleSheet, View} from "react-native";

export const MapScreen = ({
  route: {
    params: {
      location: {latitude, longitude},
    },
  },
}) => {
  console.log("latitude", latitude);
  console.log("longitude", longitude);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0021,
        }}
      >
        <Marker coordinate={{latitude, longitude}} title="test title" />
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
