import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import styles from './FavouriteButton.styles';
import theme from '../../theme/theme';
const FavouriteButton = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };
  return (
    <View style={styles.favouriteButtonContainer}>
      <View
        style={[
          styles.favouriteButtonBackground,
          isFavourite ? styles.selectedBackground : styles.unselectedBackground,
        ]}>
        <TouchableOpacity
          onPress={handleFavourite}
          hitSlop={{top: 25, bottom: 25, left: 15, right: 15}}>
          <FontAwesomeIcon
            icon={faHeart}
            size={theme.scaling.moderateScale(18)}
            style={isFavourite ? styles.selected : styles.unselected}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default FavouriteButton;
