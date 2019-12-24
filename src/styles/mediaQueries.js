const sizes = {
    xs: '400px',
    sm: '600px',
    smd: '500px',
    md: '800px',
    lg: '1000px',
    xl: '1200px',
    xxl: '1600px',
    uptolg: '999px'
}

export const screen = {
    xs: `screen and (min-width: ${sizes.xs})`,
    sm: `screen and (min-width: ${sizes.sm})`,
    smd: `screen and (min-width: ${sizes.smd})`,
    md: `screen and (min-width: ${sizes.md})`,
    lg: `screen and (min-width: ${sizes.lg})`,
    xl: `screen and (min-width: ${sizes.xl})`,
    xxl: `screen and (min-width: ${sizes.xxl})`,
    uptolg: `screen and (max-width: ${sizes.uptolg})`,
}