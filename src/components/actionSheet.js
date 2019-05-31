import React, { memo, useState, useRef, useEffect, Fragment } from 'react'
import { Animated, TouchableOpacity, Dimensions, View } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import useToggle from '../hooks/toggle'

const height = Dimensions.get('window').height
const StyledActionSheet = styled(Animated.View)`
    height: ${height/2};
    width: 100%;
    background-color: white;
    border-radius: 15;
    justify-content: center;
    align-items: center;
    position: absolute;
`

function ActionSheet(props) {
  const translate = useToggle(props.active)
  const [position, setPosition] = useState('relative')
  useEffect(function() {
    if(props.active) {
      setPosition('absolute')
    } else {
      setTimeout(() => setPosition('relative'), 300)
      console.log(props.active)
    }
  }, [props.active]) 
  return (
    <View style={{ width: '100%', height: '100%', position }}>
        {
          <Animated.View style={{
            opacity: translate.interpolate({
              inputRange: [0,1],
              outputRange: [0, 0.3]
              }),
            backgroundColor: 'black',
            width: '100%',
            height: height,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }} />
        }
        <StyledActionSheet style={{
          transform: [
            {
              translateY: translate.interpolate({
                inputRange: [0, 1],
                outputRange: [height, height/2]
              })
            },
          ]
        }}>
          <TouchableOpacity onPress={props.touch}>
            <Icon name="md-add" size={20} />
          </TouchableOpacity>
        </StyledActionSheet>
      </View>
  )
}

export default memo(ActionSheet);