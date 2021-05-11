import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '20px',
    zIndex: 10000,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));