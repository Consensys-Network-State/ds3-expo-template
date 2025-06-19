import { ModeToggle, ThemeSwitcher, Button, openLink } from '@consensys/ds3'
import { View, } from 'react-native';
import { ExternalLink } from "lucide-react-native";

export default function ThemeControl() {
  return (
    <View style={{ flexDirection: 'row', gap: 8, marginRight: 16, alignItems: 'center' }}>
      <ModeToggle />
      <ThemeSwitcher />
      <Button color="primary" onPress={() => openLink('https://github.com/Consensys-Network-State/ds3')}>
        <Button.Icon icon={ExternalLink} />
        <Button.Text>Docs</Button.Text>
      </Button>
    </View>
  );
}