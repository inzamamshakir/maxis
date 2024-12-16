import { LinkExternal, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

const GalaWarning = () => {
  const { t } = useTranslation()

  return (
    <>
      <Text>{t('Warning: The pGALA token pool is not a valid token trading pair - please stop buying.')}</Text>
      <LinkExternal href="https://twitter.com/maxi_swap">
        {t('For more info, please see pGALA’s twitter.')}
      </LinkExternal>
    </>
  )
}

export default GalaWarning
