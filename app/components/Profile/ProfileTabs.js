import { Text } from "native-base";
import { Colors } from "../../configs/color";
import React from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { StyleSheet, useWindowDimensions } from "react-native";
import { useState } from "react";
import Profile from "./Profile";
import Orders from "./Orders";

const renderScene = SceneMap({
  first: Profile,
  second: Orders,
});

const ProfileTabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "PROFILE",
    },
    {
      key: "second",
      title: "ORDERS",
    },
  ]);

  const renderTabsBar = (props) => (
    <TabBar
      {...props}
      tabStyle={styles.tabStyle}
      indicatorStyle={{ backgroundColor: Colors.black }}
      activeColor={Colors.main}
      inactiveColor={Colors.white}
      renderLabel={({ route, color }) => (
        <Text style={{ color, ...styles.text }}>{route.title}</Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabsBar}
    />
  );
};

export default ProfileTabs;

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: Colors.black,
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
