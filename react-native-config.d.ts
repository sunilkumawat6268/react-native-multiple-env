declare module 'react-native-config' {
    export interface NativeConfig {
      ENV?: string;
    }
    export const Config: NativeConfig;
    export default Config;
  }
