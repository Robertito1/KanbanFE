import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 0,
    padding: theme.spacing(2),
  },
  text: {
    fontWeight: 'bold',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  createBoardButton: {
    margin: 0,
    color: 'white',
    fontSize: '1rem',
    fontWeight: 500,
    padding: '10px 32px',
    marginLeft: 135,
  },
  newBoardForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    width: 300,
    marginBottom: theme.spacing(5),
  },
  submitButton: {
    width: 150,
    alignSelf: 'center',
    marginBottom: theme.spacing(3),
    height: 50,
  },
}));

export default useStyles;
