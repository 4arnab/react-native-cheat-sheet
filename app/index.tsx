import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../assets/images/react-logo.png";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={Logo}
          style={{
            width: 50,
            height: 50,
          }}
        />
      </View>

      <Text style={styles.title}>The Number one </Text>
      <Text style={{ marginTop: 10 }}>Reading list app</Text>
      <Link style={styles.link} href="/about">
        {" "}
        About page
      </Link>
      <Link style={styles.link} href="/contact">
        {" "}
        Contact page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "auto",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {
    // backgroundColor:"",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px 4px 4px rgba(0,0,0,0.1)",
    borderLeftColor: "orange",
    borderLeftWidth: 2,
    marginTop: 10,
  },
  link: {
    borderBottomWidth: 1,
    marginVertical: 3,
  },
});
