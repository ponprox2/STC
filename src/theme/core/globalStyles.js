import { withStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

const GlobalStyles = withStyles((theme) => ({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    },
    html: {
      width: '100%',
      height: '100%',
      '-ms-text-size-adjust': '100%',
      '-webkit-overflow-scrolling': 'touch',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale'
    },
    body: {
      width: '100%',
      height: '100%',
      padding: '0 !important',
      '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
        width: 8,
        height: 6,
        backgroundColor: theme.palette.divider
      },
      '&::-webkit-scrollbar-thumb, & ::-webkit-scrollbar-thumb': {
        border: 'none',
        borderRadius: 8,
        backgroundColor: alpha(theme.palette.grey[600], 0.48)
      }
    },
    '#root': {
      width: '100%',
      height: '100%'
    },
    input: {
      '&[type=number]': {
        MozAppearance: 'textfield',
        '&::-webkit-outer-spin-button': {
          margin: 0,
          WebkitAppearance: 'none'
        },
        '&::-webkit-inner-spin-button': {
          margin: 0,
          WebkitAppearance: 'none'
        }
      }
    },
    textarea: {
      '&::-webkit-input-placeholder': { color: theme.palette.text.disabled },
      '&::-moz-placeholder': {
        opacity: 1,
        color: theme.palette.text.disabled
      },
      '&:-ms-input-placeholder': { color: theme.palette.text.disabled },
      '&::placeholder': { color: theme.palette.text.disabled }
    },
    a: {
      color: theme.palette.primary.main
    },
    img: {
      display: 'block',
      maxWidth: '100%'
    },

    // Lazy Load Img
    '.blur-up': {
      WebkitFilter: 'blur(5px)',
      filter: 'blur(5px)',
      transition: 'filter 400ms, -webkit-filter 400ms'
    },
    '.blur-up.lazyloaded ': {
      WebkitFilter: 'blur(0)',
      filter: 'blur(0)'
    },
    '.MuiButton-root': {
      textTransform: 'none',
      fontSize: '16px !important',
      fontWeight: '500'
    },
    '.MuiButton-containedPrimary': {
      color: '#fff'
    },
    '.Mui-error': {
      color: '#FF3D00 !important'
    },
    '.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: '#FF3D00'
    },
    '.MuiDialog-paperScrollPaper': {
      borderRadius: '16px',
      fontFamily: 'SFProText'
    },
    '.MuiDrawer-paper': {
      fontFamily: 'SFProText'
    },
    '.scroll-invisible': {
      overflowY: 'scroll',
      '-ms-overflow-style': 'none',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },

    //Flex Style
    '.flex-row': {
      display: 'flex',
      flexDirection: 'row'
    },
    '.flex-evenly': {
      display: 'flex',
      justifyContent: 'space-evenly'
    },
    '.flex-between': {
      display: 'flex',
      justifyContent: 'space-between'
    },
    '.flex-center': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '.flex-end': {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    '.flex-evenly-center': {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    '.flex-evenly-row': {
      display: 'flex',
      justifyContent: 'space-evenly',
      flexDirection: 'row'
    },
    '.flex-start-evenly': {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: ' flex-start'
    },
    '.flex-between-center': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    '.text-ellipsis': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    '.flex-center-row': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row'
    },
    '.flex-center-column': {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    '.flex-start-column': {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column'
    },
    '.flex-between-center-row': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row'
    },
    '.flex-between-center': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row'
    },
    '.flex-center-center-column': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    '.flex-center-center-row': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    '.flex-evenly-center-row': {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row'
    },
    //////////////////////////////////////////
    '.MuiInput-underline:before': {
      display: 'none'
    },
    '.MuiInput-underline:after': {
      display: 'none'
    },
    '.MuiTableSortLabel-root.MuiTableSortLabel-active': {
      color: 'inherit'
    },
    '.MuiTableSortLabel-root:hover': {
      color: 'inherit'
    },
    '.MuiTableSortLabel-root:focus': {
      outline: 'none',
      color: 'inherit'
    },
    '.MuiTableSortLabel-root.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active .MuiTableSortLabel-icon': {
      color: 'inherit'
    }
  }
}))(() => null);

export default GlobalStyles;
