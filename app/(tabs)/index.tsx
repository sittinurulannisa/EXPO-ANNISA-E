import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
      <Image
        source={require("../../assets/images/foto.jpeg")}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>
        Unismuh Makassar adalah salah satu perguruan tinggi swasta ternama di Makassar, Sulawesi Selatan.
        Terletak di Jalan Sultan Alauddin No. 259, kampus ini memiliki berbagai fakultas dan program studi unggulan.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginTop: 10 },
  image: { width: "100%", height: 200, borderRadius: 10 },
});
