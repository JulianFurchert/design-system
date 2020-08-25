import { styled } from '../css';

export const Button = styled.button(
  {
    // Reset
    alignItems: 'center',
    appearance: 'none',
    // backgroundColor: 'transparent',
    // boxShadow: 'none',
    boxSizing: 'border-box',
    display: 'inline-flex',
    // flexShrink: '0',
    fontFamily: 'inherit',
    // fontSize: '14px',
    justifyContent: 'center',
    lineHeight: '1',
    outline: 'none',
    padding: '0',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    // ':disabled': {
    //   pointerEvents: 'none',
    // },
    '::before': {
      boxSizing: 'border-box',
    },
    '::after': {
      boxSizing: 'border-box',
    },

    // Custom
    backgroundColor: 'loContrast',
    border: 'none',
    boxShadow: 'inset 0 0 0 1px gray400',
    borderRadius: '1',
    color: 'hiContrast',
    height: '5',
    px: '2',
    fontSize: '2',
    fontWeight: 500,
    ':hover': {
      boxShadow: 'inset 0 0 0 1px gray500',
    },
    ':active': {
      backgroundColor: 'gray100',
      boxShadow: 'inset 0 0 0 1px gray500',
    },
    ':disabled': {
      pointerEvents: 'none',
      backgroundColor: 'gray200',
      boxShadow: 'inset 0 0 0 1px gray400',
      color: 'gray400',
    },
  },
  {
    size: {
      large: {
        height: '6',
        px: '3',
        fontSize: '3',
      },
    },
    variant: {
      blue: {
        backgroundColor: 'blue500',
        boxShadow: 'none',
        color: 'white',
        ':hover': {
          backgroundColor: 'blue600',
          boxShadow: 'none',
        },
        ':active': {
          backgroundColor: 'blue600',
          boxShadow: 'none',
        },
      },
      green: {
        backgroundColor: 'green500',
        boxShadow: 'none',
        color: 'white',
        ':hover': {
          backgroundColor: 'green600',
          boxShadow: 'none',
        },
        ':active': {
          backgroundColor: 'green600',
          boxShadow: 'none',
        },
      },
      red: {
        color: 'red600',
      },
      ghost: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        fontWeight: 400,
        ':hover': {
          backgroundColor: 'gray200',
          boxShadow: 'none',
        },
        ':active': {
          backgroundColor: 'gray300',
          boxShadow: 'none',
        },
      },
    },
    state: {
      active: {
        backgroundColor: 'gray300',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        ':hover': {
          boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        },
        ':active': {
          backgroundColor: 'gray300',
        },
      },
      waiting: {
        backgroundColor: 'gray300',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        ':hover': {
          boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        },
        ':active': {
          backgroundColor: 'gray300',
        },
      },
    },
  }
);