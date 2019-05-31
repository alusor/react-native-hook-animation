import React, { memo, useState, useEffect } from 'react'
import { View, Animated, Text, SafeAreaView } from 'react-native'
import AddButton from './components/addButton'
import ActionSheet from './components/actionSheet';

function Main() {
    const [active, setActive] = useState(false)
    const toggle = function() {
        setActive(!active)
    } 
    return (
        <View style={{ flex: 1, width: '100%', height: '100%', position: 'absolute' }}>
            <Animated.View style={{ flex: 1 }}>
                <ActionSheet active={active} touch={toggle} />
            <AddButton touch={toggle} active={active} />
            </Animated.View>


        </View>
    )
}

export default Main;
