const sizes: Record<string, number> = {
  small: 576,
  semiTablet: 768,
  tablet: 864,
  semiMedium: 991,
  medium: 1200,
  desktop: 1440,
  full: 3260,
}
  
export const breakpoints: Record<string, string> = {
  small: `(min-width: ${sizes.small}px)`,
  semiTablet: `(min-width: ${sizes.semiTablet}px)`,
  tablet: `(min-width: ${sizes.tablet}px)`,
  semiMedium: `(min-width: ${sizes.semiMedium}px)`,
  medium: `(min-width: ${sizes.medium}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
  full: `(min-width: ${sizes.full}px)`,
}

export const deviceType = {
  mobileDevice: sizes.small,
  tabletDevice: sizes.tablet,
  semiMediumDevice: sizes.semiMedium,
  mediumDevice: sizes.medium,
  desktopDevice: sizes.desktop,
}