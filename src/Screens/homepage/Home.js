import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MapView, { Circle, Marker, Polygon } from 'react-native-maps';
import { ward51, ward52 } from '../../Engine/Data';
import marker from '../../../assets/PointerMarker.png'


const latitudeDelta = 0.025
const longitudeDelta = 0.025


export default class Home extends React.Component {
  state = {
    region: {
      latitudeDelta,
      longitudeDelta,
      latitude: 9.918103,
      longitude: 78.118368
    },
    option: 0,
    isOptionClicked: false
  }

  onRegionChange = region => {
    this.setState({
      region
    })
  }
  onPress = (option,isOptionClicked) => {
    this.setState(
      option
    )
  }

  render() {
    const { region } = this.state;
    const { option } = this.state;
  
    return (
      <View >
         <MapView style={styles.map}
          initialRegion={region}
          onRegionChangeComplete={this.onRegionChange}
        >
          <Polygon coordinates={ward51.coordinates} fillColor='rgba(255,20,147,0.1)' strokeColor='rgba(255,20,147,0.6)' ></Polygon>
          <Polygon coordinates={ward52.coordinates} fillColor='rgba(255,20,147,0.1)' strokeColor='rgba(255,20,147,0.6)'></Polygon>
        </MapView>

        <View style={styles.markerFixed}>
          <Image style={styles.marker} source={marker} />
        </View>
        <View style={styles.raiseAComplaintBtnContainer}>
        <TouchableOpacity style={styles.raiseAComplaintBtn}>
          <Text>Raise a Complaint</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.appButtonContainer}>
          <TouchableOpacity style={styles.appButton} onPress={() => this.setState({ option: 1})}>
            <Text>Stray Dogs</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appButton} onPress={() => this.setState({ option: 2 })}>
            <Text>Garbage</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appButton} onPress={() => this.setState({ option: 3 })}>
            <Text>Sewage</Text>
          </TouchableOpacity>
        </View>
        

      </View>
    )
  }
}



const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  appButton: {
    elevation: 10,
    backgroundColor:"#FFF50A",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: '20px',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    height: 100,
    width: 100,
    justifyContent: 'flex-end',
    textAlign: 'center',
    alignContent: 'center'

  },

  appButtonContainer: {
    backgroundColor: "#FFF50A",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    height: '150px',
    width: '100%',
    position:'absolute',
    bottom:0
  },
  raiseAComplaintBtnContainer:{
    backgroundColor:'white',
    textDecorationColor:'red',
    right: '5%',
    top: '76%',
    position: 'absolute',
    borderRadius: 30,

  },
  raiseAComplaintBtn:{
    textDecorationColor:'red',
    height:50,
    width:170,
    justifyContent:'center',
    alignItems:'center'
    },
  markerFixed: {
    left: '50%',
    marginLeft: -14,
    marginTop: -48,
    position: 'absolute',
    top: '50%'
  },
  marker: {
    height: 34,
    width: 29
  }
});