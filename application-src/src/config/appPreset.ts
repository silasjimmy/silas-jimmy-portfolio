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
      header: {
        fontWeight: '500',
      },
      colorScheme: {
        light: {
          header: {
            color: '{zinc.700}',
            background: '{zinc.50}',
            hoverColor: '{zinc.950}',
            hoverBackground: '{zinc.100}',
            activeColor: '{zinc.950}',
            activeBackground: '{zinc.100}',
            activeHoverColor: '{zinc.950}',
            activeHoverBackground: '{zinc.100}',
            toggleIcon: {
              color: '{zinc.700}',
              hoverColor: '{zinc.950}',
              activeColor: '{zinc.950}',
            },
          },
          content: {
            background: 'transparent',
            color: '{zinc.600}',
          },
        },
        dark: {
          header: {
            color: '{zinc.300}',
            background: '{zinc.800}',
            hoverColor: '{zinc.50}',
            hoverBackground: '{zinc.700}',
            activeColor: '{zinc.50}',
            activeBackground: '{zinc.700}',
            activeHoverColor: '{zinc.50}',
            activeHoverBackground: '{zinc.700}',
            toggleIcon: {
              color: '{zinc.300}',
              hoverColor: '{zinc.50}',
              activeColor: '{zinc.50}',
            },
          },
          content: {
            background: 'transparent',
            color: '{zinc.400}',
          },
        },
      },
    },
    tabs: {
      tablist: {
        background: 'transparent',
      },
      tab: {
        borderWidth: '0',
        hoverColor: '{green.500}',
      },
      tabpanel: {
        padding: '16px 0 0 0',
        background: 'transparent',
      },
      colorScheme: {
        light: {
          tab: {
            background: 'transparent',
            color: '{zinc.800}',
            hoverBackground: 'transparent',
          },
        },
        dark: {
          tab: {
            background: 'transparent',
            color: '{zinc.200}',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
        },
      },
    },
    carousel: {
      indicator: {
        width: '30px',
        height: '6px',
        borderRadius: '12px',
      },
      colorScheme: {
        light: {
          indicator: {
            background: '{zinc.200}',
            hoverBackground: '{zinc.300}',
          },
        },
        dark: {
          indicator: {
            background: '{zinc.600}',
            hoverBackground: '{zinc.500}',
          },
        },
      },
    },
  },
})
