import {React,useState} from 'react'
import { View,Text,Switch,StyleSheet,Image, TouchableOpacity, TextInput, Button } from 'react-native'
import { REPRESENTATIVE } from '../../Engine/Representative';
import { USERDATA } from '../../Engine/User';

const Login = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [user,setUser]=useState(1);
    const [details,setDetails]=useState({
        userEmail:"",
        userPassword:"",
        representativeId:"",
        representativePass:""
    })
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
        <View>
        <View>
            <View>
                <Text onPress={()=>setUser(1)}>Public User</Text>
            </View>
            <View>
                <Text onPress={()=>setUser(2)}>Ward Representative</Text>
            </View>
        </View>
        {user===1?
        <View>
            <View>
                <Text>Email</Text>
                <TextInput placeholder='Email' value={details.userEmail} onChangeText={(e)=>{setDetails((prev)=>({...prev,userEmail:e}))}}></TextInput>
            </View>
            <View>
                <Text>Password</Text>
                <TextInput placeholder='Password' value={details.userPassword}  onChangeText={(e)=>{setDetails((prev)=>({...prev,userPassword:e}))}}></TextInput>
                <Image></Image>
            </View>
            <View>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <Text>Remember me</Text>
            </View>
            <View>
                <TouchableOpacity onPress={()=>{
                    {USERDATA.EmailAddress===details.userEmail && USERDATA.Password===details.userPassword?navigation.navigate('Home'):""}
                }}>
                    <Text>Log in</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Don't have an account?</Text>
                <TouchableOpacity>
                    <Text>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>:<View>
            <View>
                <Text>User-Id</Text>
                <TextInput placeholder='User Id' value={details.representativeId} onChangeText={(e)=>{setDetails((prev)=>({...prev,representativeId:e}))}}></TextInput>
            </View>
            <View>
                <Text>Password</Text>
                <TextInput placeholder='Password' value={details.representativePass} onChangeText={(e)=>{setDetails((prev)=>({...prev,representativePass:e}))}}></TextInput>
                <Image></Image>
            </View>
            <View>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <Text>Remember me</Text>
            </View>
            <View>
                <TouchableOpacity onPress={()=>{
                    {REPRESENTATIVE.Id===details.representativeId && REPRESENTATIVE.Password===details.representativePass?navigation.navigate('Repsentative'):""}
                }}>
                    <Text>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>}
        </View>
        <View>
            <Image></Image>
            <Text>By continuing,you agree to our terms Privacy Policy Content Policy</Text>
        </View>
    </View>
  )
}

export default Login