const MuiChipStyled = (defaultTheme, modifyTheme) => ({
    root: {
        '&.MuiChip': {
            '&-discount': {
                backgroundColor: '#FFA001',
                color: 'white',
                fontSize: '12px',
                height: '18px',
                minWidth: '20px',
                lineHeight: '20px'
            },
            '&-warning': {
                backgroundColor: '#F0E936',
                color: 'black',
                fontSize: '12px',
                height: '20px',
                minWidth: '20px',
                lineHeight: '20px'
            },
            '&-positive': {
                backgroundColor: '#33CC59',
                color: 'white',
                fontSize: '12px',
                height: '20px',
                minWidth: '20px',
                lineHeight: '20px'
            },
            '&-alert':{
                backgroundColor: '#F04B32',
                color: 'white',
                fontSize: '12px',
                height: '20px',
                minWidth: '20px',
                lineHeight: '20px'
            }
        }
    }
});
export default MuiChipStyled;