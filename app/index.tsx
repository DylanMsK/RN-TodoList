import { theme } from "@/constants/Colors";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          // activeOpacity={1}
          onPress={() => {
            console.log("Work");
          }}
        >
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback
          onPress={() => {
            console.log("Travel");
          }}
        >
          <Text style={styles.btnText}>Travel</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    marginTop: 100,
    justifyContent: "space-between",
  },
  btnText: {
    // color: theme.grey,
    color: "white",
    fontSize: 38,
    fontWeight: "600",
  },
});
