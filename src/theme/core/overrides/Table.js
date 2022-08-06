// ----------------------------------------------------------------------

export default function Table({ theme }) {
  const isRTL = theme.direction === 'rtl';
  const thLeft = {
    // paddingLeft: 24,
    borderTopLeftRadius: theme.shape.borderRadius
    // borderBottomLeftRadius: theme.shape.borderRadius
    // boxShadow: `inset 8px 0 0 ${theme.palette.background.paper}`
  };
  const thRight = {
    // paddingRight: 24,
    borderTopRightRadius: theme.shape.borderRadius
    // borderBottomRightRadius: theme.shape.borderRadius
    // boxShadow: `inset -8px 0 0 ${theme.palette.background.paper}`
  };

  return {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: theme.palette.action.selected,
            '&:hover': {
              backgroundColor: theme.palette.action.hover
            }
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none'
        },
        head: {
          color: theme.palette.common.black,
          backgroundColor: theme.palette.background.neutral,
          '&:first-of-type': isRTL ? thRight : thLeft,
          '&:last-of-type': isRTL ? thLeft : thRight
        },
        stickyHeader: {
          backgroundColor: theme.palette.grey[707]
          // backgroundImage: `linear-gradient(to bottom, #00994C 0%, #005249 100%)`
          // backgroundImage: `linear-gradient(to bottom, ${theme.palette.common.green} 0%, #29968F 100%)`
        },
        // body: {
        //   '&:first-of-type': {
        //     paddingLeft: !isRTL && 24,
        //     paddingRight: isRTL && 24
        //   },
        //   '&:last-of-type': {
        //     paddingRight: !isRTL && 24,
        //     paddingLeft: isRTL && 24
        //   }
        // }
      }
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          borderTop: `solid 1px ${theme.palette.divider}`
        },
        toolbar: {
          height: 64
        },
        select: {
          '&:focus': {
            borderRadius: theme.shape.borderRadius
          }
        },
        selectIcon: {
          width: 20,
          height: 20,
          marginTop: 2
        }
      }
    }
  };
}
