import Head from 'next/head'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

import useDetectConnection from '../hooks/useDetectConnection'
import useLoader from '../hooks/useLoader'

import { store, persistor } from '../store'

import '../styles/styles.scss'

const MyApp = ( { Component, pageProps } ) => {

  useLoader()

  const ToastContainer = useDetectConnection()

  return (
    <div>
      <Head>
        <title> ComicBook App </title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      { ToastContainer }

      <h1 > ComicBook </h1>

      <Provider store={ store }>
        <PersistGate persistor={ persistor } >
          <main className="container">
            <Component { ...pageProps } />
          </main>
        </PersistGate>
      </Provider>
    </div>
  )

}

export default MyApp
