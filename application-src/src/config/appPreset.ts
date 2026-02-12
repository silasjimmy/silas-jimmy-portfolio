// import { definePreset } from '@primeuix/themes'
// import Aura from '@primeuix/themes/aura'

// export const appPreset = definePreset(Aura, {
//   semantic: {
//     // /**
//     //  * Custom tokens for the UI preset
//     //  */
//     // accentColor: '#212121',

//     /**
//      * Defines the UI primary color
//      */
//     primary: {
//       50: '{green.50}',
//       100: '{green.100}',
//       200: '{green.200}',
//       300: '{green.300}',
//       400: '{green.400}',
//       500: '{green.500}',
//       600: '{green.600}',
//       700: '{green.700}',
//       800: '{green.800}',
//       900: '{green.900}',
//       950: '{green.950}',
//     },

//     //   /**
//     //    * Defines the UI light and dark mode colors
//     //    */
//     //   colorScheme: {
//     //     light: {},
//     //     dark: {
//     //       surface: {
//     //         50: '{zinc.50}',
//     //         100: '{zinc.100}',
//     //         200: '{zinc.200}',
//     //         300: '{zinc.300}',
//     //         400: '{zinc.400}',
//     //         500: '{zinc.500}',
//     //         600: '{zinc.600}',
//     //         700: '{zinc.700}',
//     //         800: '{zinc.800}',
//     //         900: '{zinc.900}',
//     //         950: '{zinc.950}',
//     //       },
//     //     },
//     //   },
//     // },

//     // /**
//     //  * Defines the custom configurations for components
//     //  */
//     // components: {
//     //   menubar: {
//     //     root: {
//     //       padding: '0.8rem 1.4rem',
//     //       gap: '1.4rem',
//     //     },
//     //     item: {
//     //       focusBackground: 'transparent',
//     //     },
//     //     colorScheme: {
//     //       light: {
//     //         root: {
//     //           background: 'transparent',
//     //         },
//     //         item: {
//     //           color: '#757575',
//     //           focusColor: '#212121',
//     //         },
//     //       },
//     //       dark: {
//     //         root: {
//     //           background: '{accent.color}',
//     //         },
//     //         item: {
//     //           color: 'grey',
//     //           focusColor: 'white',
//     //         },
//     //       },
//     //     },
//     //   },
//   },
// })

import { definePreset } from '@primeuix/themes'
// import Aura from '@primeuix/themes/aura'
import Lara from '@primeuix/themes/lara'
// import Nora from '@primeuix/themes/nora'
// import Material from '@primeuix/themes/material'

/**
 * Define the preset of the theme
 */
export const appPreset = definePreset(Lara, {
  semantic: {
    /**
     * Defines the UI primary color
     */
    primary: {
      50: '{green.50}',
      100: '{green.100}',
      200: '{green.200}',
      300: '{green.300}',
      400: '{green.400}',
      500: '{green.500}',
      600: '{green.600}',
      700: '{green.700}',
      800: '{green.800}',
      900: '{green.900}',
      950: '{green.950}',
    },
  },

  /**
   * Defines the custom configurations for components
   */
  components: {
    accordion: {
      colorScheme: {
        light: {
          content: {
            background: '{zinc.100}',
          },
        },
        dark: {
          content: {
            background: '{zinc.900}',
          },
        },
      },
    },
  },
})
