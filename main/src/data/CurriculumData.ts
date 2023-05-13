
export type ColorIndex = number
export type ColorString = string

export interface ColorCombo<T> {
    text?: T
    back?: T
}

export type FixedColorCombo<T> = Required<ColorCombo<T>>

export interface CTheme {
    // Theme colors
    pallet: Array<string>

    // General default colors
    general: ColorCombo<ColorIndex>
    // Term background color
    accent?: ColorIndex

    // Color for the number representing the current term
    term?: ColorIndex
    // Colors for the unit arrow
    arrow?: ColorCombo<ColorIndex>

    // Colors for the unit's notes
    note?: ColorCombo<ColorIndex>
    // Colors for the unit's challenges
    challenge?: ColorCombo<ColorIndex>
    // Colors for the challenge header
    challengeHeading?: ColorCombo<ColorIndex>

    // Color for the title text and background
    title?: ColorIndex
    // Color for the brief text
    brief?: ColorIndex
    // Color for the reference text
    reference?: ColorIndex
    // Color for reference categories
    category?: ColorIndex
}

export function GetThemeColorsFor(name: String | Symbol, theme?: CTheme): FixedColorCombo<ColorString> {
    // Make sure the theme is valid, otherwise return system defaults
    const DefaultColors: FixedColorCombo<ColorString> = { text: 'initial', back: 'initial' }
    if (!theme || theme.pallet.length === 0) return DefaultColors

    // Data validation clip: account for undefined or negative values
    const clip = (value: number | undefined) => Math.abs(value || 0)

    // Make sure general defaults are valid, otherwise return system defaults
    if (clip(theme.general.text) >= theme.pallet.length ||
        clip(theme.general.back) >= theme.pallet.length)
        return DefaultColors

    const GeneralColors: FixedColorCombo<ColorString> = {
        text: theme.pallet[clip(theme.general.text)],
        back: theme.pallet[clip(theme.general.back)]
    }

    // If requested key doesn't exist, general defaults are assumed
    if (!(name as keyof CTheme in theme)) return GeneralColors

    const colorid = theme[name as keyof CTheme]

    // If the request is a single color, return color pair set to the target color.
    // For consistency, 'text' is assumed to hold the target color.
    if (typeof colorid === 'number') {
        const id = clip(colorid)
        if (id >= theme.pallet.length) return GeneralColors
        else return { text: theme.pallet[id], back: theme.pallet[id] }
    }
    
    // The request is for a color pair
    // - set the default values to general colors
    // - then determine what the actual values are if any
    let result: FixedColorCombo<ColorString> = Object.assign({}, GeneralColors)

    const colorid2 = colorid as ColorCombo<ColorIndex>

    if (typeof colorid2.text === 'number') {
        const id = clip(colorid2.text)
        if (id < theme.pallet.length)
            result.text = theme.pallet[id]
    }

    if (typeof colorid2.back === 'number') {
        const id = clip(colorid2.back)
        if (id < theme.pallet.length)
            result.back = theme.pallet[id]
    }

    return result
}

export interface SourceLink {
    text: string
    url?: string
}

export interface CUnitRef {
    category?: string
    sources: Array<SourceLink>
}

export interface CUnitLinkNode {
    name: SourceLink | string
    sub?: Array<SourceLink | string>
}

export type CUnitChallenge = CUnitLinkNode

export type CUnitBrief = CUnitLinkNode

export interface CUnit {
    title: string
    subtitle?: string
    brief: CUnitBrief
    references: Array<CUnitRef>
    challenges: Array<CUnitChallenge>
    notes: string
}

export type CTerm = {
    theme: CTheme
    units: Array<CUnit>
}

export type CData = {
    name: string
    terms: Array<CTerm>
}
