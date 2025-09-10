import { Stack } from "expo-router"
import { StatusBar } from "react-native"

const AuthLayout = ()=>{
    return (<>
      <StatusBar barStyle="dark-content" />
    <Stack screenOptions={{headerShown:false, animation:"none"}} />
    
    </>)
}

export default AuthLayout