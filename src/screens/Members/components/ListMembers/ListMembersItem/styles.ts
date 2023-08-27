import {StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const styles = StyleSheet.create({
  containerButton: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
  },
  button: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: $COLORS.blackWithOpacity(2),
    backgroundColor: 'gainsboro',
  },
  image: {
    resizeMode: 'contain',
    height: 50,
    flex: 1,
    aspectRatio: 1,
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  name: {
    color: 'black',
    fontWeight: '600',
    fontSize: 14,
  },
  level: {
    fontStyle: 'italic',
    fontSize: 12,
  },
});

export default styles;
