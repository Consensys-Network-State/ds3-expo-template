import { Drawer } from 'expo-router/drawer';
import { useThemeColors} from '@consensys/ds3'
import type { DrawerNavigationOptions } from '@react-navigation/drawer';
import ThemeControl from '@/layout/ThemeControl';

interface ThemedDrawerProps {
  screenOptions?: Partial<DrawerNavigationOptions>;
  children: React.ReactNode;
}

export default function ThemedDrawer({ screenOptions, children }: ThemedDrawerProps) {
  const colors = useThemeColors();

  const defaultScreenOptions: DrawerNavigationOptions = {
    headerStyle: {
      backgroundColor: colors.neutral1,
      borderBottomWidth: 1,
      borderBottomColor: colors.neutral5,
    },
    headerTintColor: colors.neutral12,
    headerTitleAlign: 'left',
    drawerStyle: {
      backgroundColor: colors.neutral1,
    },
    drawerActiveTintColor: colors.primary11,
    drawerInactiveTintColor: colors.neutral11,
    headerRight: () => (<ThemeControl />),
  };

  return (
    <Drawer
      screenOptions={{
        ...defaultScreenOptions,
        ...screenOptions,
      }}
    >
      {children}
    </Drawer>
  );
}
