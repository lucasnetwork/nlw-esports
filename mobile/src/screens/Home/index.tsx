import {Image, View} from 'react-native'
import {styles} from './styles'
import logoImg from '../../assets/logo.png'
import { Heading } from '../../components/Heading'
import { GameCard } from '../../components/GameCard'
import { GAMES } from '../../utils/games'

export function Home(){
    return (
        <View style={styles.container}>
            <Image source={logoImg} style={styles.logo}/>

            <Heading title="Encontre seu Duo!" subtitle='Selecione o game que deseja jogar...'/>

           {GAMES.map(game =>(
             <GameCard key={game.id} data={{
                ads:game.ads,
                name:game.name,
                cover:game.cover,
                id:game.id
            }}/>
           ))}
        </View>


    )
}