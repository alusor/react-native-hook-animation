import React, { memo, useState, useRef, useEffect } from 'react'
import { Animated, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import useToggle from '../hooks/toggle'

const ActionButton = styled(Animated.View)`
    height: 64;
    width: 64;
    position: absolute;
    background-color: #2196f3;
    border-radius: 50;
    justify-content: center;
    align-items: center;
    bottom: 15;
    right: 15;
    shadow-color: #000;
    shadow-offset: {width: 0, height: 0};
    shadow-opacity: 0.3;
    shadow-radius: 3;
`

function AddButton(props) {
  const rotate = useToggle(props.active)
  return (
    <TouchableOpacity onPress={props.touch}>
      <ActionButton style={{
        transform: [{ rotateZ: rotate.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg']
        })}]
      }}>
        <Icon name="md-add" size={20} color="white"/>
      </ActionButton>
    </TouchableOpacity>
  )
}

export default memo(AddButton);