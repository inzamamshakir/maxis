import { getAddress } from '@ethersproject/address'
import memoize from 'lodash/memoize'
import { Token } from '@pancakeswap/sdk'
import chainName from "../config/constants/chainName";


const getTokenLogoURL = memoize(
  (token?: Token) => {
    if (token && chainName[token.chainId]) {
      return `https://raw.githubusercontent.com/minzamamshakir/trustwallet-assets/master/blockchains/${chainName[
        token.chainId
      ].toLowerCase()}/assets/${getAddress(token.address)}/logo.png`
    }
    return [`/images/coins/${token?.symbol ?? 'token'}.png`, getTokenLogoURL(token.address)]
  },
  (t) => `${t.chainId}#${t.address}`,
)

export default getTokenLogoURL
