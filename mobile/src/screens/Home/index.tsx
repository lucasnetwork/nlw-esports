import {Image, View,FlatList} from 'react-native'
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
        <FlatList
        data={GAMES}
        keyExtractor={data => data.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        renderItem={({item})=>(
            <GameCard key={item.id} data={{
                ads:item.ads,
                name:item.name,
                cover:item.cover,
                id:item.id
            }}/>    
        )}
        />
         
        </View>


    )
}