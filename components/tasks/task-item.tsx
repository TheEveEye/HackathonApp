import { styles } from "../../assets/theme/presets"
import { View, Text } from "react-native"
import { Icon } from "../icon"
import React from "react"
import { Checkbox } from "../checkbox"
import { colors } from "../../assets/theme/color"

export const TaskItem = ({ task }) => {

  const [ checked, setChecked ] = React.useState(task.completed)
  
  return (
    <View style={{...styles.box, padding: 10, borderColor: (checked ? colors.green : colors.secondary)}}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <View style={{width: "80%"}}>
          <Text style={styles.title}>{task.title}</Text>
          <Text style={styles.text}>{task.description}</Text>
        </View>
        <View style={{flex: 1, alignItems: "flex-end", margin: 10}}>
          <Checkbox isChecked={checked} onPress={() => {setChecked(!checked)}}/>
        </View>
        
      </View>
    </View>
  )
}