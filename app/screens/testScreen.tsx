import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAppTheme } from '../hooks/useColorScheme';

const CameraScreen = () => {
  const { appTheme, toggleTheme } = useAppTheme();

  return (
    <View style={{ flex: 1, backgroundColor: appTheme.background }}>
      <Text style={{ color: appTheme.text }}>Capture Pineapple</Text>
      <Button color={appTheme.accent} title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

export default CameraScreen;