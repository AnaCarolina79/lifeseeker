import { Text, View, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions } from "react-native";
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_500Medium } from "@expo-google-fonts/inter";

export default function Index() {
  const { width } = Dimensions.get("window");
const images = [
  require("../assets/images/insetos.jpg"),
  require("../assets/images/insetos.jpg"),
  require("../assets/images/insetos.jpg"),
  require("../assets/images/insetos.jpg"),
  require("../assets/images/insetos.jpg"),
  require("../assets/images/insetos.jpg"),
];
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
      
      
   
      <View style={{
        backgroundColor:"#D9D9D9",
        width:"100%",
        height:"90%",
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        padding:20,
       


      }}>
        <View style={{ 
          justifyContent:"space-between",
          flexDirection:"row",
          }}>

           <Image source={require("../assets/images/insect.jpg")} style={{
          resizeMode: "cover",
          width:140,
          height:180,
          borderRadius:30,

      }}/>
        <View style={{
       padding: 20,
          display:"flex",
          alignItems:"center",
          width:240
}}>
        
      <View style={{
      }}>
            <Text  style={{
              color:"#284026",
              fontFamily: "Inter_600SemiBold",
              marginBottom:5,
            }}>
              Você tem um inseto e quer descobrir qual é a espécie?
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
                <Image source={require('../assets/images/arrow.png')}/>
          </TouchableOpacity>
      </View>    
      </View>
        </View>
     <View>
      <View style={{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap: 5,
        marginTop:35,
        marginBottom: 5, 
      }}>
      <Image source={require('../assets/images/butterfly.png')}/>
      <Text style={{ fontFamily: "Inter_600SemiBold", fontSize:15,}}>Você Sabia?</Text>
      </View>
      <Text>Insetos podem sobreviver sem a cabeça por alguns dias, como algumas formigas e baratas.</Text>
     </View>
      <View style={{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap: 5,
        marginTop:35,
        marginBottom: 5, 
      }}>
      <Image source={require('../assets/images/butterfly.png')}/>
      <Text style={{ fontFamily: "Inter_600SemiBold", fontSize:15,}}>Histórico</Text>
      </View>
       <FlatList
      data={images}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item }) => (
        <Image source={item} style={{borderRadius:20, margin: 5, width:150, height: 180, resizeMode: "cover" }} />
      )}
    />
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
button: {
    marginTop: 20,
    backgroundColor: "#b96d52ff",
    paddingVertical: 5,
    paddingHorizontal: 20,
    width:"70%",
    display:"flex",
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"center",
    gap:5,
    borderRadius: 30,
    boxShadow:'0px 3px 8px rgba(61, 30, 30, 0.27)'
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center",
  },
})
