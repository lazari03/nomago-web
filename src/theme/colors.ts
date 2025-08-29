/**
 * Centralized color tokens and theme colors for the app.
 */
export type ThemeColors = {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  card: string;
  border: string;
  notification: string;
}

export const ColorTokens = {
  periwinkle: '#6474D7',
  blue: '#4361EE',
  lightBlue: '#C7D0F8',
  darkBlue: '#1939DC',
  purple: '#6C4DF6',
  lightPurple: '#E1BEE7',
  darkPurple: '#4A148C',
  orange: '#FF8A65',
  lightOrange: '#FFCCBC',
  darkOrange: '#BF360C',
  neonGreen: '#39FF14',
  green: '#2ECC71',
  lightGreen: '#D5F5E3',
  darkGreen: '#145A32',
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  gray: '#9E9E9E',
  darkGray: '#212121',
  black: '#000000',
};

export const Colors = {
  text: ColorTokens.black,
  background: ColorTokens.white,
  primary: ColorTokens.blue,
  secondary: ColorTokens.periwinkle,
  card: ColorTokens.lightGray,
  border: ColorTokens.lightBlue,
  notification: ColorTokens.neonGreen,
  success: ColorTokens.green,
  error: '#FF5252',
  info: ColorTokens.lightBlue,
  buttonColor: ColorTokens.purple,
  white: ColorTokens.white,
  darkGray: ColorTokens.darkGray,
};

export default Colors;
