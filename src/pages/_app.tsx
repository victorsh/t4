/* eslint-disable */
import { type AppType } from "next/app"
import { Analytics } from '@vercel/analytics/react'
import { api } from "~/utils/api"
import "~/styles/globals.css"
import { store } from '~/store/store'
import { Provider } from 'react-redux'

const { library, config } = require('@fortawesome/fontawesome-svg-core')
import { faHeart, faCopyright, fas, faEnvelope, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab, faHeart, faEnvelope, faEnvelopeSquare, faCopyright, faLinkedin, faGithubSquare)

import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Analytics />
    </Provider>
  )
}

export default api.withTRPC(MyApp)
