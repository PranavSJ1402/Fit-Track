// Example of React Native Timer and Stopwatch
// https://aboutreact.com/react-native-timer-stopwatch/

// import React in our code
import React, { useState } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from "react-native";

//importing library to use Stopwatch and Timer
// @ts-ignore
import { Timer } from "react-native-stopwatch-timer";
import Colors from "../constants/Colors";

const TimerWatch = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(300000);
  const [resetTimer, setResetTimer] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
          <Text style={styles.scoreText}>Scored Time</Text>
          <Timer
            // @ts-ignore
            totalDuration={timerDuration}
            msecs
            //Time Duration
            start={isTimerStart}
            //To start
            reset={resetTimer}
            //To reset
            options={options}
            //options for the styling
            handleFinish={() => {
              Alert.alert(
                "Time is over. Slide left to right for the next exercise"
              );
            }}
          />
          <Text style={styles.repsText}>4x15 reps</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableHighlight
              onPress={() => {
                setIsTimerStart(!isTimerStart);
                setResetTimer(false);
              }}
            >
              <Text style={styles.buttonStart}>
                {!isTimerStart ? "START" : "STOP"}
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                setIsTimerStart(false);
                setResetTimer(true);
              }}
            >
              <Text style={styles.buttonReset}>RESET</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TimerWatch;

const styles = StyleSheet.create({
  container: {
    flex: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStart: {
    fontSize: 20,
    margin: 10,
    color: `${Colors.light.tint}`,
  },
  buttonReset: {
    fontSize: 20,
    margin: 10,
    color: `${Colors.light.notification}`,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "200",
  },
  repsText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

const options = {
  container: {
    backgroundColor: "#FFFFFF",
    padding: 5,
    width: 250,
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    color: "#25AB75",
    fontWeight: "bold",
  },
};
