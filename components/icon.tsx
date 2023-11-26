import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { icons } from '../assets/index'
import { styles } from '../assets/theme/presets'

export const Icon = ({ icon, size, color }) => {


  return (
    <View style={{aspectRatio: 1, width: size, height: size, alignItems: "center", justifyContent: "center"}}>
      <Image source={icons[icon]} style={{resizeMode: "contain", width: size, height: size}} tintColor={color || "#FFF"}/>
    </View>
  )
}