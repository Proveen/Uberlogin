import React, {Component} from 'react';
import{View,Text,StyleSheet,ImageBackground,TextInput,TouchableOpacity,Image} from 'react-native';

class LoginScreen extends Component
{
 static navigationOptions ={
 header:null
 }
render()
{
return(
<View style={{flex:1}}>
<ImageBackground
source={require('../assets/uber.jpg')}
style={{flex:1}}
>
<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
<View style={{backgroundColor: 'white', height:100, width:100, justifyContent:'center',alignItems:'center'}}>
<Text style={{fontWeight:'bold',fontSize: 26}}>UBER</Text>
</View>
</View>

<View>
<View style={{height:150,
backgroundColor:'white'}}
>
<View
style={{opacity:1,alignItems:'flex-start',
paddingHorizontal:25,
marginTop:25
}}
>
<Text
Style={{fontSize:24}}>Get Moving with Uber</Text>
</View>
<TouchableOpacity>
<View
Style={{marginTop:40,
paddingHorizontal:25,
flexDirection:'row',
}}
>
<Image
source={require('../assets/india.png')}
style={{height:24,width:24,resizeMode:'contain'}}
/>
<View
style={{flexDirection:'row',paddingHorizontal:20,
flex:1,

}}
>
<Text Style={{
fontSize: 20,
paddingHorizontal: 20

}}>+91</Text>
<TextInput
style={{flex:1,
fontSize:20}}
placeholder="ENTER YOUR MOBILE NUMBER"
underlineColorAndroid="transparent"
/>
</View>
</View>
</TouchableOpacity>
</View>
<View
style={{height:70,backgroundColor:'white',justifyContent:'center',borderTopColor:'#e8e8ec',borderWidth:1,
paddingHorizontal:25}}
>
<Text
style={{color:'#5a7fdf',fontWeight:'bold'}}
> or connect using a social account
</Text>
</View>
</View>
                </ImageBackground>

            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});