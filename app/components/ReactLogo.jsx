'use client'

import { motion } from 'framer-motion'

export function ReactLogo({ animated = true, size }) {
  return (
    <motion.svg
      className={`h-auto ${size === 'small' ? 'w-12' : 'w-60'}`}
      initial={{ rotate: '0deg' }}
      animate={{ rotate: animated ? '360deg' : '0deg' }}
      transition={{ duration: 30, repeat: Infinity }}
      aria-labelledby='react-visual-title'
      fill='none'
      height='219'
      role='img'
      viewBox='0 0 246 219'
      width='246'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='123' cy='110' fill='black' r='21' />
      <circle cx='123' cy='110' fill='url(#paint0_radial_1766_6655)' r='21' />
      <path
        d='M123 154.448C187.977 154.448 240.652 134.324 240.652 109.5C240.652 84.6757 187.977 64.5516 123 64.5516C58.0223 64.5516 5.34766 84.6757 5.34766 109.5C5.34766 134.324 58.0223 154.448 123 154.448Z'
        stroke='url(#paint1_radial_1766_6655)'
      />
      <path
        d='M84.0966 131.974C116.585 188.28 160.34 223.862 181.826 211.45C203.312 199.038 194.392 143.331 161.903 87.0259C129.415 30.7204 85.6597 -4.86225 64.1739 7.5499C42.6882 19.962 51.6079 75.6687 84.0966 131.974Z'
        stroke='url(#paint2_radial_1766_6655)'
      />
      <path
        d='M84.0966 87.0259C51.6079 143.331 42.6882 199.038 64.1739 211.45C85.6597 223.862 129.415 188.28 161.903 131.974C194.392 75.6687 203.312 19.9621 181.826 7.5499C160.34 -4.86224 116.585 30.7204 84.0966 87.0259Z'
        stroke='url(#paint3_radial_1766_6655)'
      />
      <defs>
        <radialGradient
          cx='0'
          cy='0'
          gradientTransform='translate(116.296 98.9923) rotate(76.4218) scale(28.5568 28.555)'
          gradientUnits='userSpaceOnUse'
          id='paint0_radial_1766_6655'
          r='1'
        >
          <stop stopColor='white' stopOpacity='0.4' />
          <stop offset='1' stopColor='white' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          cx='0'
          cy='0'
          gradientTransform='translate(117.5 157.5) rotate(-57.0241) scale(100.131 741.727)'
          gradientUnits='userSpaceOnUse'
          id='paint1_radial_1766_6655'
          r='1'
        >
          <stop />
          <stop offset='1' stopOpacity='0.1' />
        </radialGradient>
        <radialGradient
          cx='0'
          cy='0'
          gradientTransform='translate(149.5 66.5) rotate(117.818) scale(112.501 294.733)'
          gradientUnits='userSpaceOnUse'
          id='paint2_radial_1766_6655'
          r='1'
        >
          <stop />
          <stop offset='1' stopOpacity='0.1' />
        </radialGradient>
        <radialGradient
          cx='0'
          cy='0'
          gradientTransform='translate(110.5 43.5) rotate(80.6433) scale(89.1866 233.653)'
          gradientUnits='userSpaceOnUse'
          id='paint3_radial_1766_6655'
          r='1'
        >
          <stop />
          <stop offset='1' stopOpacity='0.1' />
        </radialGradient>
      </defs>
    </motion.svg>
  )
}
