import { View, Text, Image, StyleSheet } from "react-native";

export default function Profil() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/foto3.jpeg")}
        style={styles.image}
      />
      <Text style={styles.name}>Sitti Nurul Annisa</Text>
      <Text style={styles.text}>NIM: 105841115522</Text>
      <Text style={styles.text}>Kelas: TI-6E</Text>
      <Text style={styles.text}>Jurusan: Informatika</Text>
      <Text style={styles.text}>Fakultas: Teknik</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 20 },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 5 },
});
