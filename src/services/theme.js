import { createTheme } from '@mui/material/styles'

// ---------- DIA ----------
export const clearSkyDayTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1c1d1d' },
    background: { default: '#aee1f9' },
  },
  components: {
    MuiSvgIcon: { defaultProps: { fontSize: '12px' } },
  },
  typography: { fontFamily: ['Asap', 'sans-serif'].join(',') },
})

export const cloudyDayTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1c1d1d' },
    background: { default: '#cfd8dc' },
  },
  components: {
    MuiSvgIcon: { defaultProps: { fontSize: '12px' } },
  },
  typography: { fontFamily: ['Asap', 'sans-serif'].join(',') },
})

export const rainyDayTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1c1d1d' },
    background: { default: '#78909c' },
  },
  components: {
    MuiSvgIcon: { defaultProps: { fontSize: '12px' } },
  },
  typography: { fontFamily: ['Asap', 'sans-serif'].join(',') },
})

// ---------- NOITE ----------
export const clearSkyNightTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ebebeb' },
    background: { default: '#001f3f' },
  },
  components: {
    MuiSvgIcon: { defaultProps: { fontSize: '12px' } },
  },
  typography: { fontFamily: ['Asap', 'sans-serif'].join(',') },
})

export const cloudyNightTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ebebeb' },
    background: { default: '#263238' },
  },
  components: {
    MuiSvgIcon: { defaultProps: { fontSize: '12px' } },
  },
  typography: { fontFamily: ['Asap', 'sans-serif'].join(',') },
})

export const rainyNightTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ebebeb' },
    background: { default: '#1c313a' },
  },
  components: {
    MuiSvgIcon: { defaultProps: { fontSize: '12px' } },
  },
  typography: { fontFamily: ['Asap', 'sans-serif'].join(',') },
})

export const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ebebeb' },
    background: { default: '#37474f' },
  },
  components: {
    MuiSvgIcon: { defaultProps: { fontSize: '12px' } },
  },
  typography: { fontFamily: ['Asap', 'sans-serif'].join(',') },
})

export function getThemeByWeather(condition = '', isDay = true) {
  const cond = condition.toLowerCase()

  if (cond.includes('clear')) {
    return isDay ? clearSkyDayTheme : clearSkyNightTheme
  }
  if (cond.includes('rain')) {
    return isDay ? rainyDayTheme : rainyNightTheme
  }
  if (cond.includes('cloud')) {
    return isDay ? cloudyDayTheme : cloudyNightTheme
  }

  return defaultTheme
}

export function getBackgroundByWeather(condition = '', isDay = true) {
  const cond = condition.toLowerCase()

  if (cond.includes('clear')) {
    return isDay
      ? 'linear-gradient(to top,#aee1f9,#2196f3)'
      : 'linear-gradient(to top,#0d47a1,#001f3f)'
  }
  if (cond.includes('rain')) {
    return isDay
      ? 'linear-gradient(to top,#455a64,#78909c)'
      : 'linear-gradient(to top,#263238,#1c313a)'
  }
  if (cond.includes('cloud')) {
    return isDay
      ? 'linear-gradient(to top,#cfd8dc,#90a4ae)'
      : 'linear-gradient(to top,#37474f,#263238)'
  }

  return isDay
    ? 'linear-gradient(to top,#aee1f9,#2196f3)'
    : 'linear-gradient(to top,#0d47a1,#001f3f)'
}
