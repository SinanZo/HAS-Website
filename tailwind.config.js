/*  tailwind.config.js  */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      /* Semantic Colors from CSS Variables */
      colors: {
        bg: 'hsl(var(--bg))',
        surface: 'hsl(var(--surface))',
        'surface-secondary': 'hsl(var(--surface-secondary))',
        border: 'hsl(var(--border))',
        'border-subtle': 'hsl(var(--border-subtle))',
        fg: 'hsl(var(--fg))',
        'fg-secondary': 'hsl(var(--fg-secondary))',
        'fg-muted': 'hsl(var(--fg-muted))',
        'fg-disabled': 'hsl(var(--fg-disabled))',
        
        primary: {
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          200: 'hsl(var(--primary-200))',
          300: 'hsl(var(--primary-300))',
          400: 'hsl(var(--primary-400))',
          500: 'hsl(var(--primary-500))',
          600: 'hsl(var(--primary-600))',
          700: 'hsl(var(--primary-700))',
          800: 'hsl(var(--primary-800))',
          900: 'hsl(var(--primary-900))',
        },
        
        accent: {
          50: 'hsl(var(--accent-50))',
          100: 'hsl(var(--accent-100))',
          200: 'hsl(var(--accent-200))',
          300: 'hsl(var(--accent-300))',
          400: 'hsl(var(--accent-400))',
          500: 'hsl(var(--accent-500))',
          600: 'hsl(var(--accent-600))',
          700: 'hsl(var(--accent-700))',
          800: 'hsl(var(--accent-800))',
          900: 'hsl(var(--accent-900))',
        },
        
        success: {
          50: 'hsl(var(--success-50))',
          200: 'hsl(var(--success-200))',
          500: 'hsl(var(--success-500))',
          700: 'hsl(var(--success-700))',
        },
        
        warning: {
          50: 'hsl(var(--warning-50))',
          200: 'hsl(var(--warning-200))',
          500: 'hsl(var(--warning-500))',
          700: 'hsl(var(--warning-700))',
        },
        
        error: {
          50: 'hsl(var(--error-50))',
          200: 'hsl(var(--error-200))',
          500: 'hsl(var(--error-500))',
          700: 'hsl(var(--error-700))',
        },
        
        info: {
          50: 'hsl(var(--info-50))',
          200: 'hsl(var(--info-200))',
          500: 'hsl(var(--info-500))',
          700: 'hsl(var(--info-700))',
        },
      },
      
      /* Typography Scale */
      fontSize: {
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
      },
      
      lineHeight: {
        tight: 'var(--line-height-tight)',
        normal: 'var(--line-height-normal)',
        loose: 'var(--line-height-loose)',
      },
      
      /* Spacing Scale */
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
      },
      
      /* Border Radius */
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
      },
      
      /* Shadows */
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      
      /* Transitions */
      transitionDuration: {
        fast: 'var(--transition-fast)',
        base: 'var(--transition-base)',
        slow: 'var(--transition-slow)',
      },
      
      /* Z-index */
      zIndex: {
        dropdown: 'var(--z-dropdown)',
        sticky: 'var(--z-sticky)',
        fixed: 'var(--z-fixed)',
        'modal-backdrop': 'var(--z-modal-backdrop)',
        modal: 'var(--z-modal)',
        tooltip: 'var(--z-tooltip)',
      },
      
      /* Keyframes */
      keyframes: {
        marquee: {
          "0%":  { transform: "translateX(0)"     },
          "100%":{ transform: "translateX(-50%)" }
        },
        slideIn: {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
      },
      
      /* Animations */
      animation: {
        marquee: "marquee 28s linear infinite",
        slideIn: 'slideIn 200ms ease-in-out',
        fadeIn: 'fadeIn 200ms ease-in-out',
      },
    }
  },
  plugins: []
};
