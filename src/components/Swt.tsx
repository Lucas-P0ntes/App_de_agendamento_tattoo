<<<<<<< HEAD
import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const Swt = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#ffffff", true: "#fff" }}
        thumbColor={isEnabled ? "#1eff00" : "#ff0000"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

=======
import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const Swt = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#ffffff", true: "#fff" }}
        thumbColor={isEnabled ? "#1eff00" : "#ff0000"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

>>>>>>> a8b0b45aec7a4c562bd3974d538ba1bc36ca4532
export default Swt;