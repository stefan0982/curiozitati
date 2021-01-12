/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"
import { Link as GatsbyLink } from 'gatsby'
const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  // @ts-ignore
    // @ts-ignore
  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontSize: 18, fontWeight: `bold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `🌞` : `🌙`}
      </button>
        <GatsbyLink to="/#top">curiozitati.app</GatsbyLink> &copy; {new Date().getFullYear()}. Toate drepturile sunt rezervate.
      <br />
    </Box>
  )
}

export default Footer
