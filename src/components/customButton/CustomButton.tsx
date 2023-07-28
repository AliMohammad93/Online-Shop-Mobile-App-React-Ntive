import React,{FC} from 'react';
import { Text , TouchableOpacity} from 'react-native';
import styles from "./CustomButton.styles";
import { ICustomButton } from "./types";
const CustomButton : FC<ICustomButton> = ({title,onPress}) => {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
}

export default CustomButton;
