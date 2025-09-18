import { View, Text, StyleSheet } from 'react-native';

export default function Subtitle({ children}) {
    <View style={styles.subtitleContainer}>
              <Text>{children}</Text>
            </View>
}

const styles = StyleSheet.create({
    subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    margin: 4,
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});