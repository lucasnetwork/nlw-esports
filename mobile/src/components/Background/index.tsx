import React from 'react'
import {ImageBackground} from 'react-native'
import background from '../../assets/background.png'
import {styles} from './styles'

interface Props{
    children:React.ReactNode
}

export function Background({children}:Props){
    return (
        <ImageBackground source={background} style={styles.container}>
{children}
        </ImageBackground>
    )
}