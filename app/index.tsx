import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_500Medium } from "@expo-google-fonts/inter";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#1B3031",
      }}
    >
      
      
      <Image source={require("../assets/images/insect.jpg")} style={{
          resizeMode: "contain",
          width:"110%",
          height:"70%",
        margin:-60,
      }}/>
      <View style={{
        backgroundColor:"#D9D9D9",
        width:"100%",
        height:"45%",
        borderTopLeftRadius:40,
        borderTopRightRadius:40,


      }}>
        <View style={{
          padding:20,
          display:"flex",
          alignItems:"center",
      }}>
        
      <View style={{}}>
            <Text  style={{
              color:"#284026",
              fontFamily: "Inter_600SemiBold",
            }}>
              Você tem um pet e quer saber a raça dele?
            </Text>
            <Text style={{
              fontFamily: "Inter_400Regular",
            }}>
              Com nosso app, você descobre em segundos!
            </Text>
          <TouchableOpacity style={styles.button} onPress={() => alert("Analisando...")}>
               <Text style={styles.buttonText}>
                Analisar
                </Text>

          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
button: {
    marginTop: 20,
    backgroundColor: "#466619",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center",
  },
})
