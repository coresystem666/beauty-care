import React from 'react'

export const IconLeaf = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.5 2 5.5 3.5 3.5 6C1.5 8.5 1 11.5 2 14.5C3 17.5 5 20 8 21C11 22 14 21.5 16.5 19.5C19 17.5 21 14.5 21 11C21 7.5 19 4.5 16 3C15 2.5 13.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12L12 16L16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const IconStar = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const IconTruck = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="6" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M15 16H19V12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export const IconShield = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 5V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const IconDiamond = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 22L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 7H22" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 2V22" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export const IconHeart = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const IconCheck = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const IconPhone = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9841 21.5573 21.2126 21.3523 21.3997C21.1473 21.5867 20.9053 21.7282 20.6416 21.8159C20.3779 21.9036 20.0981 21.9355 19.82 21.91C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.27399 2.12 4.18C2.09451 3.90347 2.12638 3.62414 2.21362 3.36116C2.30086 3.09818 2.44158 2.85726 2.6275 2.65357C2.81343 2.44989 3.04048 2.28799 3.294 2.18C3.549 2.06999 3.82469 2.01295 4.103 2.01295C4.38131 2.01295 4.657 2.06999 4.912 2.18L7.95 3.18C8.20726 3.28867 8.43505 3.45392 8.616 3.662C8.79695 3.87008 8.92666 4.11566 8.996 4.38L9.996 8.38C10.0653 8.64434 10.0951 8.92066 10.0837 9.196C10.0723 9.47134 10.0199 9.74066 9.93 9.99L8.93 12.99C9.42037 13.6402 10.0099 14.2097 10.68 14.68L13.68 13.68C13.9293 13.5901 14.1987 13.5377 14.474 13.5263C14.7493 13.5149 15.0257 13.5447 15.29 13.614L19.29 14.614C19.5543 14.6833 19.7999 14.813 20.008 14.994C20.2161 15.175 20.3813 15.4028 20.49 15.66L21.49 18.7C21.599 18.955 21.6561 19.2307 21.6561 19.509C21.6561 19.7873 21.599 20.063 21.49 20.318L20.49 21.318C20.38 21.568 20.22 21.79 20.02 21.97C19.82 22.15 19.58 22.28 19.32 22.35L19.29 22.36H19.28Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const IconMail = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const IconLocation = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export const IconSparkle = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="19" cy="5" r="1.5" fill="currentColor"/>
    <circle cx="5" cy="19" r="1.5" fill="currentColor"/>
  </svg>
)

export const IconInstagram = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
  </svg>
)

export const IconVK = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 2C7.5 2 4 5.5 4 10.5C4 13.5 5.5 16 7.5 17.5L7 20L9.5 18.5C10.5 18.8 11.5 19 12.5 19C17.5 19 21 15.5 21 10.5C21 5.5 17.5 2 12.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12C9 12 10 13 11 13C12 13 13 12 13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export const IconTelegram = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

