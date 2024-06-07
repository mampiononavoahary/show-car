import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

const orangeTheme = createMuiTheme({
  palette: {
    primary: {
      main: orange[700],
    },
    secondary: {
      main: orange[100],
    },
  },
});

export default orangeTheme;
