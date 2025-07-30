// Type fixes for React Native components with React 18+
declare module 'react-native' {
  import { ComponentType } from 'react';
  
  interface ViewProps {
    style?: any;
    children?: React.ReactNode;
    [key: string]: any;
  }
  
  interface TextProps {
    style?: any;
    children?: React.ReactNode;
    [key: string]: any;
  }
  
  interface ImageProps {
    source?: any;
    style?: any;
    resizeMode?: string;
    [key: string]: any;
  }
  
  interface TouchableOpacityProps {
    style?: any;
    children?: React.ReactNode;
    onPress?: () => void;
    onLongPress?: () => void;
    onPressOut?: () => void;
    activeOpacity?: number;
    [key: string]: any;
  }
  
  interface SafeAreaViewProps {
    style?: any;
    children?: React.ReactNode;
    [key: string]: any;
  }
  
  interface StatusBarProps {
    barStyle?: string;
    backgroundColor?: string;
    [key: string]: any;
  }
  
  export const View: ComponentType<ViewProps>;
  export const Text: ComponentType<TextProps>;
  export const Image: ComponentType<ImageProps>;
  export const TouchableOpacity: ComponentType<TouchableOpacityProps>;
  export const SafeAreaView: ComponentType<SafeAreaViewProps>;
  export const StatusBar: ComponentType<StatusBarProps>;
  export const ScrollView: ComponentType<any>;
  export const StyleSheet: any;
  export const Dimensions: any;
  export const Animated: any;
}
