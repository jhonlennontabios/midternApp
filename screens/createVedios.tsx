import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Alert } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Camera, useCameraDevices, CameraPermissionStatus } from "react-native-vision-camera";
import { useNavigation } from "@react-navigation/native";

const VideoRecordingScreen = () => {
  const navigation = useNavigation();
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(null);
  const devices = useCameraDevices();
  const [cameraIndex, setCameraIndex] = useState(0);
  const device = devices[cameraIndex];

  useEffect(() => {
    (async () => {
      const status: CameraPermissionStatus = await Camera.requestCameraPermission();
      if (status !== "granted") {
        Alert.alert("Permission Required", "Camera access is required to record videos.");
      }
      setCameraPermission(status === "granted");
    })();
  }, []);

  if (cameraPermission === null) {
    return <View style={styles.container} />;
  }

  if (!cameraPermission || !device) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Camera access denied</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
      
      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="close" size={28} color="white" />
      </TouchableOpacity>
      
      {/* Recording Button */}
      <View style={styles.recordButtonContainer}>
        <TouchableOpacity style={styles.recordButton}>
          <MaterialCommunityIcons name="record-circle" size={80} color="red" />
        </TouchableOpacity>
      </View>
      
      {/* Tools on the Right Side */}
      <View style={styles.toolsContainer}>
        <MaterialCommunityIcons name="emoticon" size={28} color="white" />
        <MaterialCommunityIcons name="format-text" size={28} color="white" />
        <MaterialCommunityIcons name="filter" size={28} color="white" />
        <MaterialCommunityIcons name="music" size={28} color="white" />
        <MaterialCommunityIcons name="sticker" size={28} color="white" />
      </View>

      {/* Toggle Camera Button */}
      <TouchableOpacity style={styles.toggleCameraButton} onPress={() => setCameraIndex(cameraIndex === 0 ? 1 : 0)}>
        <MaterialCommunityIcons name="camera-flip" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  recordButtonContainer: {
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
  },
  recordButton: {
    borderRadius: 50,
    padding: 10,
  },
  toolsContainer: {
    position: "absolute",
    right: 20,
    top: 100,
    alignItems: "center",
    gap: 20,
  },
  toggleCameraButton: {
    position: "absolute",
    bottom: 120,
    right:0,
    margin:10,
    alignSelf: "center",
  },
});

export default VideoRecordingScreen;
