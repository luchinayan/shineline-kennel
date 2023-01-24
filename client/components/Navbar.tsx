import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined'
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import Link from "next/link"
import {ListItemText} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import styles from '../styles/Navbar.module.css'
import {ThemeProvider} from "@mui/system"
import {theme} from '../themes/themeNavBarFont'
import useTranslation from "next-translate/useTranslation"
import {useRouter} from "next/router"

type Anchor = 'top'


export default function Navbar() {
  const router = useRouter()
  let {t, lang} = useTranslation('navbar')

  const SectionsNamesIcons = [
    {name: `${t('home')}`, link: '/'},
    {name: `${t('about')}`, link: '/about'},
    {name: `${t('puppies')}`, link: '/puppies'},
    {name: `${t('litters')}`, link: '/litters'},
    {name: `${t('ourCavaliers')}`, link: '/cavaliers'},
    {name: `${t('contacts')}`, link: '/contacts'},
  ]
  const [state, setState] = React.useState({top: false})

  const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
          (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
              event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
            ) {
              return
            }

            setState({...state, [anchor]: open})
          }

  const list = (anchor: Anchor) => (
    <ThemeProvider theme={theme}>
      <Box
        sx={{width: 'auto'}}
        role='presentation'
        className={styles.container}
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {SectionsNamesIcons.map((section) => (
            <ListItem key={section.name} disablePadding>
              <Link href={section.link} className={styles.navbarLinks}>
                <ListItemButton>
                  <ListItemIcon sx={{color: '#FF8411'}}>
                    {section.link === '/' ? <HomeOutlinedIcon/>
                      : section.link === '/about' ? <InfoOutlinedIcon/>
                        : section.link === '/puppies' ? <PetsOutlinedIcon/>
                          : section.link === '/litters' ? <SchoolOutlinedIcon/>
                            : section.link === '/contacts' ? <EmojiPeopleOutlinedIcon/>
                              : section.link === '/cavaliers' ?
                                <FavoriteBorderOutlinedIcon/>
                                : null
                    }
                  </ListItemIcon>
                  <ListItemText>{section.name}</ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </ThemeProvider>

  )

  return (
    <div className={styles.menuContainer}>
      {(['top'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Link href={'/'}>
            <h1 className={styles.homePageLink}>Home</h1>
          </Link>
          {lang !== 'en' && (
            <Link className={styles.language} href={router.asPath} locale='en'>EN</Link>
          )} {lang !== 'ru' && (
            <Link className={styles.language} href={router.asPath} locale='ru'>RU</Link>
          )}
          <div>
            <MenuIcon onClick={toggleDrawer(anchor, true)} className={styles.menuButton}
              fontSize={"large"}/>
          </div>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  )
}
