import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { colors } from "../assets/theme/color"
import { Icon } from "./icon"

export const Checkbox = ({ isChecked, onPress, size = 45 }) => {

  return (
    <TouchableOpacity onPress={() => onPress()} style={!isChecked ? {height: size, aspectRatio: 1, borderColor: "#9B9B9B", borderWidth: 3, borderRadius: 6, backgroundColor: "#000"} : {height: size, aspectRatio: 1, borderColor: colors.primaryHighlight, borderWidth: 3, borderRadius: 6, backgroundColor: colors.primary, justifyContent: "center", alignItems: "center"}}>
      {isChecked && <Icon icon={"tick"} size={35} color={"#FFF"} />}
    </TouchableOpacity>
  )
}