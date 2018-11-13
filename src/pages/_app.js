import React from 'react'

import App, { Container } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import AppBar from '@material-ui/core/AppBar'
import { blue } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import NoSsr from '@material-ui/core/NoSsr'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { makeStore } from '../state/store'



const theme = createMuiTheme({
  fontFamily: 'Roboto, sans-serif',

  palette: {
      type: "light",
      primary: blue
  },

  typography: {
    fontSize: 14,
    useNextVariants: true,
  }
})

class Base extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps }
  }

  render () {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <Provider store={ store }>
          <NoSsr>
            <CssBaseline>
              <MuiThemeProvider theme={ theme } sheetsManager={ new Map() } >
                <AppBar position="relative" color="primary">
                  <Toolbar>
                    <Typography variant="h5" color="inherit">
                      HKV Services
                    </Typography>
                  </Toolbar>
                </AppBar>
                <Component {...pageProps} />
              </MuiThemeProvider>
            </CssBaseline>
          </NoSsr>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(Base)