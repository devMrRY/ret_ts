import { MuiThemeProvider } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
    spacing: 5,
    palette: {
        primary: { main: '#3cc4c2' },
        common: { white: '#FFFFFF', black: '#000000' },
    },
    breakpoints: createBreakpoints({
        values: { xl: 1080, lg: 960, md: 768, sm: 580, xs: 440 },
    }),
});

const ThemeProvider: React.FC<any> = props => <MuiThemeProvider theme={theme} {...props} />

export default ThemeProvider;
