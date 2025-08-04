import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Italic': require('./fonts/Lato-Italic.ttf'),
    'Montserrat-Light': require('./fonts/Montserrat-Light.ttf'),
    'OpenSans-Bold': require('./fonts/OpenSans-Bold.ttf'),
    'Poppins-SemiBold': require('./fonts/Poppins-SemiBold.ttf'),
    'Roboto-Regular': require('./fonts/Roboto-Regular.ttf'),

    'Inter-Variable': require('./fonts/Inter-VariableFont_opsz,wght.ttf'),
    'Montserrat-Variable': require('./fonts/Montserrat-VariableFont_wght.ttf'),
    'NotoSans-Variable': require('./fonts/NotoSans-VariableFont_wdth,wght.ttf'),
    'OpenSans-Variable': require('./fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    'Roboto-Variable': require('./fonts/Roboto-VariableFont_wdth,wght.ttf'),
  });

  if (!fontsLoaded) return null;

  const names = [
    { name: 'Andi', font: 'Lato-Italic' },
    { name: 'Budi', font: 'Montserrat-Light' },
    { name: 'Citra', font: 'OpenSans-Bold' },
    { name: 'Dian', font: 'Poppins-SemiBold' },
    { name: 'Eka', font: 'Roboto-Regular' },
    { name: 'Fajar', font: 'Inter-Variable' },
    { name: 'Gita', font: 'Montserrat-Variable' },
    { name: 'Hana', font: 'NotoSans-Variable' },
    { name: 'Indra', font: 'OpenSans-Variable' },
    { name: 'Joko', font: 'Roboto-Variable' },
  ];

  return (
    <View style={{ padding: 20 }}>
      {names.map((item, index) => (
        <Text key={index} style={{ fontFamily: item.font, fontSize: 20, marginVertical: 5 }}>
          {item.name}
        </Text>
      ))}
    </View>
  );
}
