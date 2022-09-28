import { MaterialIcons } from '@expo/vector-icons';

export type ButtonComponentTypeProps = {
    title: string;
    icon: keyof typeof MaterialIcons.glyphMap;
}