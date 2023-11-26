import React from "react"
import { View } from "react-native"
import { colors } from "../assets/theme/color";


export const ProgressBar = ({data}: {progress: []}) => {

    const radius = 5;
    return (
        <View
          style={[
            {
              borderRadius: radius,
              backgroundColor: "#323232",
              height: 20,
              gap: 2,
              display: "flex",
              flexDirection: "row",
            }
          ]}
        >
          {data.length != 0 && data.map((value, index) => {
            return (
              <View key={index} style={{flex: 1,
                height: "100%",
                borderTopLeftRadius: index == 0 ? radius : 0,
                borderBottomLeftRadius: index == 0 ? radius : 0,
                borderTopRightRadius: index == data.length - 1 ? radius : 0,
                borderBottomRightRadius: index == data.length - 1 ? radius : 0,
                backgroundColor: value == 1 ? colors.green : (value == 0 ? "#323232" : "#00000000")}}/>
            )
          })}
        </View>
      )
}