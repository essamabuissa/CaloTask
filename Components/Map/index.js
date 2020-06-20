import React, { useState, useEffect } from "react";
import { Icon, Item, Input, Text, Header } from "native-base";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";
import restaurants from "./data";
import { Callout } from "react-native-maps";
import MarkerCard from "./MarkerCard";

const Map = () => {
  const [query, setQuery] = useState("");
  const filter = () => {
    return restaurants.filter((restaurant) => {
      return `${restaurant.length}${restaurant.price.premuim}${restaurant.price.normal}${restaurant.from}${restaurant.to}`.includes(
        query
      );
    });
  };

  return (
    <>
      <Header searchBar style={{ backgroundColor: "black", height: 70 }}>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            marginTop: 0,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Map
        </Text>
      </Header>
      <Item style={{ borderRadius: 3 }}>
        <Icon name="search" type="FontAwesome" />
        <Input
          placeholder="Search for price or time"
          onChangeText={(value) => setQuery(value)}
          value={query}
          style={{ fontWeight: "bold" }}
        />
        {query ? (
          <Icon
            name="closecircle"
            type="AntDesign"
            onPress={() => setQuery()}
          />
        ) : null}
      </Item>
      <Text style={{ fontWeight: "bold" }}>
        {filter().length} Restaurants found
      </Text>
      <MapView
        initialRegion={{
          latitude: 31.6539,
          longitude: 35.9106,
          latitudeDelta: 1.0922,
          longitudeDelta: 1.0421,
        }}
        style={{ width: 500, height: 700 }}
        showsUserLocation={true}
      >
        {filter().map((restaurant) => (
          <Marker
            coordinate={{
              latitude: restaurant.latitude,
              longitude: restaurant.longitude,
            }}
            key={restaurant.title}
          >
            <Icon name="map-marker" type="FontAwesome" />
            <Callout>
              <MarkerCard restaurant={restaurant} key={restaurant.title} />
            </Callout>
          </Marker>
        ))}
      </MapView>
    </>
  );
};

export default Map;
