import React from 'react'
import { View, Text, ListRenderItemInfo, Modal, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '../../assets/theme/presets'
import { FlatList } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native-gesture-handler'
import { Icon } from '../icon'
import { TaskItem } from './task-item'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../assets/theme/color'

export const TasksScreen = () => {

  const [ currentModal, setCurrentModal ] = React.useState("")
  const [ tasks, setTasks ] = React.useState([
    {
      title: "Meditation",
      description: "Meditate for 10 minutes",
      completed: false
    },
    {
      title: "Fitness",
      description: "Do 100 pushups and 100 squats",
      completed: false
    },
    {
      title: "Reading",
      description: "Read for 20 minutes",
      completed: false
    },
  ])

  const [ title, setTitle ] = React.useState("")
  const [ description, setDescription ] = React.useState("")

  return (
    <View style={{...styles["container"]}} >
      <View style={styles.titleRow}>
        <Text style={styles["title"]}>TASKS</Text>
      </View>
      <ScrollView scrollEnabled={true} contentContainerStyle={{gap: 10, paddingBottom: 100}}>
        {
          tasks.map((task, index) => {
            return (
              <TaskItem task={task} key={index}/>
            )
          })
        }
        <TouchableOpacity onPress={() => {setCurrentModal("add")}} style={{padding: 10, alignItems: "center", justifyContent: "center", width: "100%", height: 50, backgroundColor: "#00000088", borderRadius: 10, borderColor: "#9B9B9B", borderWidth: 3, borderStyle: "dashed", flexDirection: "row"}}>
          <Icon icon={"plus"} size={30} color={"#FFF"} />
          <Text style={{...styles.text, marginHorizontal: 10}}>ADD TASK</Text>
        </TouchableOpacity>
      </ScrollView>
      {
        currentModal === "add" && (
          <Modal >
            <View style={{...styles.container}}>
              <View style={{...styles.titleRow}}>
                <View style={{alignItems: "flex-start", flex: 1}}/>
                <Text style={{...styles.title}}>ADD TASK</Text>
                <View style={{alignItems: "flex-end", flex: 1}}>
                  <TouchableOpacity onPress={() => {setCurrentModal("")}} style={{alignSelf: "flex-end"}}>
                    <Icon icon={"cancel"} size={24} color={"#FFF"} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flex: 1}}>
                <TextInput placeholder={"Title"} 
                  style={{...styles.inputField, color: "#FFF", textAlign: "center", fontSize: 24, fontWeight: "bold"}} 
                  placeholderTextColor={"#696969"}
                  placeholder={"TITLE"} 
                  onChangeText={(text) => {setTitle(text)}}/>
                <TextInput placeholder={"Title"} 
                  style={{...styles.inputField, color: "#FFF", textAlign: "center", fontWeight: "500"}} 
                  placeholderTextColor={"#696969"}
                  placeholder={"DESCRIPTION"} 
                  onChangeText={(text) => {setDescription(text)}}/>
                  <TouchableOpacity onPress={() => {setTasks([...tasks, { title: title, description: description, completed: false}]), setCurrentModal("")}} 
                                    style={{...styles.button}}>
                    <Text style={{...styles.title, color: "#FFF", fontSize: 25, top: -3}}>CREATE</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )

        
      }
      {
        currentModal === "profile" && (
          <Modal></Modal>
        )
      }
    </View>
  )
}