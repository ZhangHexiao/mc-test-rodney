import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';

import {icons} from '../../app/constants/index';
import {COLORS, FONTS} from '../theme/common.theme';

interface CardControlsListItemProps {
  icon: ImageSourcePropType;
  label: string;
  details?: string;
  onPress: () => void;
}

export const CardControlsListItem: React.FC<CardControlsListItemProps> = ({
  icon,
  label,
  details,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <View style={styles.content}>
        <Image source={icon} style={styles.listIcon} />
        <Text style={styles.listLabel}>{label}</Text>
      </View>

      <View style={styles.content}>
        {details && <Text style={styles.listDetails}>{details}</Text>}
        <Image source={icons.rightArrow} style={styles.arrowIcon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey200,
  },
  listIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listLabel: {
    ...FONTS.P1,
    color: COLORS.black,
  },
  listDetails: {
    ...FONTS.P2,
    color: COLORS.black,
  },
  arrowIcon: {
    width: 22,
    height: 22,
    marginLeft: 4,
  },
});
