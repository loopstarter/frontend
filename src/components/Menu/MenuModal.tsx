import React, { useRef, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, CloseIcon, IconButton, ChevronRightIcon, InjectedModalProps } from '@loopstarter/uikit'
import { useTranslation } from 'contexts/Localization'
import LangSelector from 'components/Menu/LangSelector'
import { languageList } from 'config/localization/languages'

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, onClick) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick()
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

const fading = () => keyframes`
  0% {
    -webkit-transform: translateX(600px);
            transform: translateX(600px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
`

const hidden = () => keyframes`
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(600px);
            transform: translateX(600px);
  }
`

const hiddenModal = () => keyframes`
  0% {
    display: block;
  }
  100% {
    display: none;
  }
`
const showModal = () => keyframes`
  0% {
    display: none;
  }
  100% {
    display: block;
  }
`

const ModalWrapper = styled.div<{ isShowModal: boolean }>`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 99vw;
  height: 100vh;
  background-color: #280d5f99;
  z-index: 22;
  transition: visibility 0.5s linear;
  overflow: hidden;
  visibility: ${({ isShowModal }) => (isShowModal ? 'inherit' : 'hidden')};
  // animation: ${({ isShowModal }) =>
    isShowModal ? showModal : hiddenModal} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

const CloseBtn = styled(IconButton)`
  width: 25px;
  height: 25px;
  background: transparent;
  box-shadow: none;
`
export const StyledModal = styled.div<{ isShowModal: boolean }>`
  width: 390px;
  background-image: url('/images/menu.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  padding: 50px;
  float: right;
  animation: ${({ isShowModal }) => (isShowModal ? fading : hidden)} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @media screen and (min-width: 1500px) {
    padding: 87px;
    width: 471px;
  }
`

export const Item = styled.a`
  width: 600px;
  background-image: url('/images/menu.png');
  background-position: top, center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  padding: 87px;
  float: right;
`

const Li = styled.li<{ isActive?: boolean }>`
  list-style: none;
  font-family: FSMagistralLight;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: ${({ isActive }) => (isActive ? '#FFAA2E' : '#fff')};
  cursor: pointer;
  padding: 0 0 30px;
  svg {
    fill: ${({ isActive }) => (isActive ? '#FFAA2E' : '#fff')};
  }

  a {
    font-family: FSMagistralLight;
  }

  &:hover {
    color: #ffaa2e;
    div:last-child {
      display: block;
      opacity: 1;
      transition: opacity 2s linear;
    }
    svg {
      fill: #ffaa2e;
      transform: rotate(90deg);
      transition: transform 0.5s linear;
    }
  }
  @media screen and (min-width: 1500px) {
    padding: 0 0 36px;
  }
`

const SubLi = styled(Li)<{ isActive?: boolean }>`
  list-style: outside;
  padding: 20px 0 0 25px;
`

const SubMenu = styled.div<{ isActive?: boolean }>`
  display: none;
  opacity: 0;
  transition: opacity 2s linear;
`

const Footer = styled(Flex)`
  position: absolute;
  bottom: 50px;
  @media screen and (min-width: 1500px) {
    bottom: 80px;
  }
`

const Link = styled.a`
  display: flex;
  alignitems: flex-start;
  justifycontent: flex-start;
`

const menu = (t) => [
  {
    label: t('Loop DEX'),
    // href: 'https://dex.loopstarter.com/',
    href: '#',
    items: [],
    // target: '_blank',
  },
  {
    label: t('Loop Starter'),
    href: '/#',
    items: [
      {
        label: t('Pool IDO'),
        href: '/pools',
      },
      {
        label: t('Stake'),
        href: '/#',
      },
      {
        label: t('Marketplace'),
        href: '/#',
      },
    ],
  },
  {
    label: t('Voting'),
    href: '/#',
    items: [],
  },
  {
    label: t('Buy Loops'),
    // href: 'https://dex.loopstarter.com/swap',
    href: '#',
    // target: '_blank',
    items: [],
  },
  {
    label: t('Document'),
    href: 'https://docs.loopstarter.com/',
    target: '_blank',
    items: [],
  },
  {
    label: t('Contract'),
    href: 'https://docs.loopstarter.com/contract-us/contract-us',
    target: '_blank',
    items: [],
  },
  {
    label: t('Privacy Policy'),
    href: 'https://docs.loopstarter.com/faq/terms-and-conditions',
    target: '_blank',
    items: [],
  },
]

const MenuModal: React.FC<InjectedModalProps> = ({ onDismiss, isShowModal }) => {
  const { currentLanguage, setLanguage, t } = useTranslation()
  const menuItems = menu(t)
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, onDismiss)

  return (
    <ModalWrapper isShowModal={isShowModal}>
      <StyledModal headerBackground="gradients.cardHeader" isShowModal={isShowModal}>
        <Flex alignItems="flex-start" justifyContent="space-between">
          <div>
            {menuItems.map((item) => (
              <Li key={item.label}>
                <Link {...item} onClick={onDismiss}>
                  {item.label}
                  {!!item.items.length && <ChevronRightIcon />}
                </Link>

                {!!item.items.length && (
                  <SubMenu>
                    {item.items.map((sub) => (
                      <SubLi key={sub.label}>{sub.label}</SubLi>
                    ))}
                  </SubMenu>
                )}
              </Li>
            ))}
          </div>

          <div>
            <CloseBtn onClick={onDismiss}>
              <CloseIcon width="25px" color="#fff" />
            </CloseBtn>
          </div>
        </Flex>
        <Footer alignItems="center">
          <picture>
            <a href="https://t.me/Loopstarter" target="_blank">
              <img src="/images/home/message.svg" alt={t('message')} />
            </a>
          </picture>
          <picture style={{ padding: '0 47px' }}>
            <a href="https://twitter.com/Loopstarter" target="_blank">
              <img src="/images/home/twitter-1.svg" alt={t('twitter')} />
            </a>
          </picture>
          <Flex>
            <LangSelector currentLang={currentLanguage.code} langs={languageList} setLang={setLanguage} />
          </Flex>
        </Footer>
      </StyledModal>
    </ModalWrapper>
  )
}

export default MenuModal
