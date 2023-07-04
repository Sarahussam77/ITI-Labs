import React, { createContext, useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SectionList,
  Image,
} from "react-native";
import styles from "../../styles";
const Contact = () => {
  const sections = [
    {
      id: "0",
      title: "A",
      data: [
        { id: "0", fname: "Ahmed", img: require("../../assets/avatar1.png") },
        { id: "1", fname: "Adam", img: require("../../assets/avatar2.png") },
        { id: "2", fname: "Ali", img: require("../../assets/avatar3.png") },
      ],
    },
    {
      id: "1",
      title: "B",
      data: [
        { id: "3", fname: "Bahaa", img: require("../../assets/avatar4.png") },
        { id: "4", fname: "bassem", img: require("../../assets/avatar5.png") },
      ],
    },
    {
      id: "2",
      title: "C",
      data: [
        { id: "5", fname: "Coco", img: require("../../assets/avatar6.png") },
        { id: "6", fname: "Carla", img: require("../../assets/avatar1.png") },
      ],
    },
    {
      id: "3",
      title: "D",
      data: [
        { id: "7", fname: "Diaa", img: require("../../assets/avatar2.png") },
        { id: "8", fname: "Dalia", img: require("../../assets/avatar3.png") },
        { id: "12", fname: "Dahab", img: require("../../assets/avatar6.png") },
      ],
    },
    {
      id: "4",
      title: "M",
      data: [
        { id: "9", fname: "sara", img: require("../../assets/avatar5.png") },
        { id: "10", fname: "Mariam", img: require("../../assets/avatar4.png") },
        { id: "11", fname: "ali", img: require("../../assets/avatar.png") },
      ],
    },
  ];

  return (
    <View>
      <SectionList
        sections={sections}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        renderItem={({ item: { fname, img } }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              paddingVertical: 6,
              paddingHorizontal: 6,
            }}
          >
            <Image
              source={img}
              style={{
                width: 32,
                height: 32,
                borderRadius: 50,
              }}
            />
            <Text style={[styles.itemStyle, { flexGrow: 2 }]}>{fname}</Text>
          </View>
        )}
        keyExtractor={(props) => props.id}
        // horizontal
      ></SectionList>
    </View>
  );
};

export default Contact;
