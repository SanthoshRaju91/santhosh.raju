import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    initialColorMode: "dark",
    useSystemColorMode: false
})

export { theme }