import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { USERDATA } from '../../Engine/User';


const Complaint = ({ navigation, value }) => {
  const [Formvalues, setFormValues] = useState({
    Name: USERDATA.Name,
    PhoneNumber: USERDATA.PhoneNumber,
    WardNo: null,
    Zone: null,
    ComplaintDescription: null
  });
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black', fontWeight: '600', fontSize: 20, top: '6%', alignSelf: 'center' }}> Complaint Form </Text>
      <View style={styles.contentbox}>
        <ScrollView>
          <Text style={styles.Subtitles}>Name</Text>
          <TextInput
            editable cursorColor='grey' numberOfLines={4} maxLength={40} value={value} defaultValue={Formvalues.Name} style={{ padding: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)', margin: 20, height: 50, position: 'relative' }}
          />
          <Text style={styles.Subtitles}>Complaint Type</Text>
          <TextInput
            editable cursorColor='grey' numberOfLines={4} maxLength={40} value={value} defaultValue={Formvalues.Name} style={{ padding: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)', margin: 20, height: 50, position: 'relative' }}
          />
          <Text style={styles.Subtitles}>Ward No</Text>
          <TextInput
            editable cursorColor='grey' numberOfLines={4} maxLength={40} value={value} defaultValue={Formvalues.Name} style={{ padding: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)', margin: 20, height: 50, position: 'relative' }}
          />
          <Text style={styles.Subtitles}>Zone</Text>
          <TextInput
            editable cursorColor='grey' numberOfLines={4} maxLength={40} value={value} defaultValue={Formvalues.Name} style={{ padding: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)', margin: 20, height: 50, position: 'relative' }}
          />
          <Text style={styles.Subtitles}>Complaint Description</Text>
          <TextInput
            editable cursorColor='grey' multiline maxLength={40} value={value} defaultValue={Formvalues.Name} style={{ padding: 10, backgroundColor: 'rgba(0, 0, 0, 0.1)', margin: 20, height: 170, position: 'relative' }}
          />
        </ScrollView>

      </View>
      <View style={styles.proceedbtncontainer}>
        <TouchableOpacity style={styles.proceedbtn} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.innertext}>Proceed</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.backbtncontainer}>
        <TouchableOpacity style={styles.backbtn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.innertext}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF50A'
  },
  proceedbtn: {
    textDecorationColor: 'red',
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',

  },
  proceedbtncontainer: {
    backgroundColor: 'black',
    color: 'white',
    bottom: '6%',
    right: '7%',
    position: 'absolute',
    borderRadius: 30,
  },
  backbtn: {
    textDecorationColor: 'red',
    height: 50,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',

  },
  backbtncontainer: {
    backgroundColor: 'black',
    color: 'white',
    bottom: '6%',
    left: '7%',
    position: 'absolute',
    borderRadius: 30,
  },
  innertext: {
    color: 'white',
    fontWeight: '450',
    fontSize: 20
  },
  contentbox: {
    width: '89%',
    height: '75%',
    backgroundColor: "white",
    alignSelf: 'center',
    top: '11%',
    borderRadius: 30,
    position: 'absolute'
  },
  Subtitles: {
    marginLeft: 20, 
    marginRight: 10, 
    marginTop: 10,
    fontWeight:'500'
  }
})


export default Complaint