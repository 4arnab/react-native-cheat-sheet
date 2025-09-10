import { Link } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

const Contact = ()=>{
    return (
       <View style={styles.container}> 
        <Text style={styles.title}>This is Contact page</Text>
        <Link style={styles.link} href="/">Homepage</Link>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        fontWeight:"bold"
    },
    link:{
        borderBottomWidth:1,
        marginVertical:3
    }
})
export default Contact