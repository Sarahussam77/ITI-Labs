import { useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Details = () => {
  const { params } = useRoute();

  const [user, setUser] = useState(null);

return (
    <View style={styles.card}>
      {params && <Text style={styles.textStyle}>Name: {params.name}</Text>}
      {params && <Text style={styles.textStyle}>Username: {params.username}</Text>}
      {params && <Text style={styles.textStyle}>Email: {params.email}</Text>}
      {params && <Text style={styles.textStyle}>Phone: {params.phone}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Details;






