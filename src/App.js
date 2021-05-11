import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import styles from "./App.module.css";
import {clearMessage} from "./actions/message";
import {history} from "./helpers/history";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import {makeStyles, CssBaseline, createMuiTheme, ThemeProvider} from '@material-ui/core';
import Navbar from "./components/Navbar/Navbar";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#333996",
            light: '#3c44b126'
        },
        secondary: {
            main: "#f83245",
            light: '#f8324526'
        },
        background: {
            default: "#f4f5fd"
        },
    },
    overrides: {
        MuiAppBar: {
            root: {
                transform: 'translateZ(0)'
            }
        }
    },
    props: {
        MuiIconButton: {
            disableRipple: true
        }
    }
})

const useStyles = makeStyles({
    appMain: {
        paddingLeft: '370px',
        width: '100%'
    }
})

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); // clear message when changing location
        });
    }, [dispatch]);

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Navbar/>
            <div className={classes.appMain}>
                <Header/>
                <div className={styles.content}>
                    <Content/>
                </div>
            </div>
            <CssBaseline/>
        </ThemeProvider>
    );
};

export default App;
