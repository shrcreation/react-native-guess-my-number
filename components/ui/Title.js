import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: Colors.colorWhite,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.colorWhite,
    borderRadius: 5,
    padding: 12,
  },
});
