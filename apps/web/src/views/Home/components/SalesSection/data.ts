import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'
import iceConeA from '../../../../../public/images/home/img33.png'
import iceConeB from '../../../../../public/images/home/trade/iceconea.png'
import bridgeA from '../../../../../public/images/home/bridge/bridge_a.png'
import whyChoose from '../../../../../public/images/home/img.png'
import bridgeB from '../../../../../public/images/home/trade/trades.png'
import earnIce from '../../../../../public/images/home/earn/ice.png'
import BottomRight from '../../../../../public/images/home/cake/bottom-right.png'
import TopRight from '../../../../../public/images/home/cake/top-right.png'
import Maxi3D from '../../../../../public/images/New/Maxi.png'
import Core3D from '../../../../../public/images/New/core.png'
import BTC3D from '../../../../../public/images/New/BTC.png'
import MaxiLastSecImg1 from '../../../../../public/images/New/maxiLastSecimg1.png'
import MaxiLastSecImg2 from '../../../../../public/images/New/maxiLastSecimg2.png'
import MaxiLastSecImg3 from '../../../../../public/images/New/maxiLastSecimg3.png'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t(' The Perfect Combination for Seamless Trading!'),
  bodyText: t(
    'Maxi Swap is your gateway to the exciting world of decentralized finance (DeFi), ' +
      'where traditional barriers are shattered, and financial freedom is within your reach. ' +
      'Our platform revolutionizes the way you trade and manage your digital assets, offering a seamless and secure decentralized exchange (DEX) experience.',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: '/swap',
    text: t(''),
    external: true,
  },
  images: {
    attributes: [
      { src: Core3D, alt: '' },
      { src: Maxi3D, alt: '' },
      { src: BTC3D, alt: '' },
    ],
  },
})

export const bridgeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Bridge Your Tokens'),
  bodyText: t(
    'Maxi Swap allows direct bridging between many chains. ' +
      'A novel approach of a second (redundant) security layer will make the Maxi Swap Bridge even more secure ' +
      'than the audited and battle tested code it is built on top of. ' +
      'All bridge reserves are transparent on chain and can be verified any time. ' +
      'Due to its universal implementation even universal message parsing and NFTs will be supported by the Bridge.',
  ),
  reverse: true,
  primaryButton: {
    to: '/bridge',
    text: 'Bridge Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://wiki.AINZICS.com/get-started/bridge',
    text: t(''),
    external: true,
  },
  images: {
    attributes: [
      { src: MaxiLastSecImg1, alt: '' },
      { src: MaxiLastSecImg2, alt: '' },
    ],
  },
})

export const chooseUsSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Why Choose Maxi Swap?'),
  bodyText: t(
    'Maxi Swap allows direct bridging between many chains. ' +
      'A novel approach of a second (redundant) security layer will make the Maxi Swap Bridge even more secure ' +
      'than the audited and battle tested code it is built on top of. ' +
      'All bridge reserves are transparent on chain and can be verified any time. ' +
      'Due to its universal implementation even universal message parsing and NFTs will be supported by the Bridge.',
  ),
  reverse: true,
  primaryButton: {
    to: '/404',
    text: 'Bridge Now',
    external: false,
  },
  secondaryButton: {
    to: '/404',
    text: t(''),
    external: true,
  },
  images: {
    attributes: [
      { src: bridgeA, alt: '' },
      { src: whyChoose, alt: '' },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Why Choose Maxi Swap?'),
  bodyText: t(
    'Maxi Swap allows direct bridging between many chains. A novel approach of a second (redundant) security layer will make the Maxi Swap Bridge even more secure than the audited and battle tested code it is built on top of. All bridge reserves are transparent on chain and can be verified any time. Due to its universal implementation even universal message parsing and NFTs will be supported by the Bridge.',
  ),
  reverse: false,
  primaryButton: {
    to: '/pools',
    text: t('Stake'),
    external: false,
  },
  secondaryButton: {
    to: '/404',
    text: t(''),
    external: true,
  },
  images: {
    attributes: [{ src: earnIce, alt: '' }],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Discover a vast array of tokens and trading pairs on Maxi Swap'),
  bodyText: t(
    'Enabling you to diversify your portfolio and explore new investment opportunities. Whether you are a seasoned trader or a curious enthusiast, our platform provides you with the tools you need to succeed.',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xDd5d49910c5D475c984EE891A928De6658d2042d&chainId=11116',
    text: t('Buy MAXL'),
    external: false,
  },
  secondaryButton: {
    to: 'https://ainzics.com',
    text: t(''),
    external: true,
  },

  images: {
    attributes: [
      // { src: MaxiLastSecImg1, alt: t('Small 3d pancake') },
      { src: MaxiLastSecImg3, alt: t('Small 3d pancake') },
      // { src: MaxiLastSecImg1, alt: t('CAKE token') },
      // { src: TopRight, alt: t('Small 3d pancake') },
    ],
  },
})
