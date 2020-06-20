import React from "react";

//Native Base
import { Text, Card, CardItem, Left } from "native-base";

import moment from "moment";
const MarkerCard = ({ restaurant }) => (
  <Card
    style={{
      height: 130,
      width: 240,
      borderStyle: "solid",
      borderBottomWidth: 5,
      borderRadius: 10,
      borderBottomColor: "rgb(192,192,192)   ",
      borderLeftColor: "rgb(192,192,192)   ",
    }}
  >
    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
      Name: {restaurant.title}
    </Text>

    <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>
      Price/Normal: {restaurant.price.normal}
    </Text>
    <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>
      Price/Premuim: {restaurant.price.premuim}
    </Text>
    <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>
      Opens from : {restaurant.from} to : {restaurant.to}
    </Text>
    <Text style={{ fontWeight: "bold", color: "rgb(200,0,0)" }}>
      More Details...
    </Text>
  </Card>
);

export default MarkerCard;
