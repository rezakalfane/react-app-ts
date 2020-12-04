import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
export const theme = createMuiTheme({
    components: {
      MuiInput: {
        styleOverrides: {
          underline: {
            "&::after": {
              transition: "none"
            }
          }
        }
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            margin: "5px",
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "rgba(0, 0, 0, 0.54)",
            "&$focused": {
              color: "rgba(0, 0, 0, 0.54)",
            }
          }
        }
      }
    },
    spacing: 8,
    palette: {
      primary: {
        main: '#039be5',
        light: '#1ab0f9'
      },
      secondary: {
        main: '#dc004e'
      },
      success: {
        main: '#7ed900'
      },
      warning: {
        main: '#ff9800'
      },
      error: {
        main: '#ff3366'
      }
    }
  });