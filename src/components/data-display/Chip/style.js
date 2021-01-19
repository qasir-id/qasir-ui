import colors from '../../variables/colors';

const MuiChipStyled = (defaultTheme, modifyTheme) => ({
  root: {
    height: '32px',
    maxWidth: '100%',
    borderRadius: '4px',
    border: `1px solid ${colors.grey70}`,
  },
  label: {
    fontSize: '12px',
    lineHeight: '18px',
    color: colors.black90,
    fontWeight: 500,
    padding: '7px 0px 7px 12px',
    marginRight: '3px',
  },
  colorPrimary: {
    backgroundColor: colors.red10,
  },
  deleteIcon: {
    color: colors.black50,
    width: '18px',
    height: '18px',
  },
  deleteIconColorPrimary: {
    color: colors.black50,
    width: '18px',
    height: '18px',
  },
  deleteIconColorSecondary: {
    color: colors.black50,
    width: '18px',
    height: '18px',
  },
  avatar: {
    width: '18px',
    height: '18px',
  },
});
export default MuiChipStyled;
