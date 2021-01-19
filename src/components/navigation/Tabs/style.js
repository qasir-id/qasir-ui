import colors from '../../variables/colors';

const MuiTabsStyled = (defaultTheme, modifyTheme) => ({
    root: {
        backgroundColor: "#fff",
        color: colors.red50,
        fontWeight: 700,
        fontSize: 12,
        lineHeight: 16,
        fontStyle: 'normal',
        fontFamily: 'Montserrat',
        '& .MuiTabs-indicator': {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "transparent",
                "& > div": {
                    maxWidth: 120,
                    width: "100%",
                    backgroundColor: "#F04B32",
                    height: '14px',
                    borderRadius: '40px'
                },
        },
        '&.MuiTab': {
            '&-wrapper': {
              width: '148px',
              height: '16px'
            }
          },
        '& .MuiTab-wrapper': {
            width: '148px',
            height: '16px'
        }
    },
});

export default MuiTabsStyled;