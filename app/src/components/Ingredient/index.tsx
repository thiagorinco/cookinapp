import { Pressable, Image, Text, PressableProps } from "react-native";
import { styles } from './styles'

export type IngredientProps = {
    name: string,
    image: string,
    selected?: boolean
}

export default function Ingredient({ name, image, selected = false, ...rest }: IngredientProps & PressableProps) {
    return (
        <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
            <Image style={styles.image} source={require('@/assets/apple.png')} />
            <Text style={styles.title}>{name}</Text>
        </Pressable>
    )
}