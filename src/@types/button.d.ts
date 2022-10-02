import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

export type ButtonComponentTypeProps = TouchableOpacityProps & {
    title: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
}