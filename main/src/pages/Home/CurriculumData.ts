
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

export type CData = Array<CTerm>

export const curriculumData: CData = [
    {
        theme: {
            pallet: [ '#555555', '#FFFFFF', '#fff9ff', '#db0e7b', '#018291', '#feeffe' ],
            general: { text: 0, back: 1 },
            accent: 2,
            term: 3,
            arrow: { text: 3, back: 0 },
            note: { text: 1, back: 4 },
            challenge: { back: 5 },
            challengeHeading: { text: 1, back: 4 },
            title: 4,
            brief: 3
        },
        units: [
            {
                title: 'Figure Drawing I',
                brief: {
                    name: {
                        text: 'Figure Drawing Fundamentals, Proko Premium',
                        url: 'https://www.proko.com/figure-drawing-fundamentals-course'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'Proko Figure Drawing Fundamentals',
                                url: 'https://www.youtube.com/watch?v=74HR59yFZ7Y&list=PLtG4P3lq8RHGuMuprDarMz_Y9Fbw_d2ws'
                            },
                            {
                                text: 'Love Life Drawing',
                                url: 'https://www.youtube.com/user/lovelifedrawing'
                            }
                        ]
                    },
                    {
                        category: 'Books',
                        sources: [
                            {
                                text: '"Figure Drawing for all it\'s worth"',
                                url: 'https://www.amazon.com/dp/0857680986'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '30-Days of Croquis French Café Gesture Sessions (Found on Vimeo)',
                            url: 'https://vimeo.com/channels/croquiscafe'
                        }
                    }
                ],
                notes: 'Do the gesture challenge concurrently with the Figure Drawing course. In the early stages, learning the flow of gesture is the most important thing - it prevents stiffness in your drawings.'
            },
            {
                title: 'Perspective I',
                brief: {
                    name: {
                        text: 'Drawabox.com Lessons 0-3',
                        url: 'https://drawabox.com/'
                    }
                },
                references: [
                    {
                        category: 'Books',
                        sources: [
                            {
                                text: '"Introduction to Perspective" by Marshall Vandruff',
                                url: 'https://marshallart.com/SHOP/all-products/all-videos/1994-perspective-drawing-series/'
                            },
                            {
                                text: '"Perspective Made Easy" by Ernest Norling',
                                url: 'https://www.amazon.com/dp/0486404730'
                            }
                        ]
                    },
                    {
                        category: 'Online',
                        sources: [
                            {
                                text: '"Fundamentals of Perspective" by Gary Myers',
                                url: 'https://www.thegnomonworkshop.com/tutorials/fundamentals-of-perspective-1'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: 'Drawabox.com',
                            url: 'https://drawabox.com/'
                        },
                        sub: [
                            {
                                text: '250 Box Challenge',
                                url: 'https://drawabox.com/lesson/250boxes'
                            },
                            {
                                text: '250 Cylinder Challenge',
                                url: 'https://drawabox.com/lesson/250cylinders'
                            }
                        ]
                    }
                ],
                notes: 'Drawabox is a dense course and important for your foundation in draftsmanship. If anything, extend the length of this unit and cut the next one short. The 250 Box Challenge follows Lesson 1, going in to Lesson 2.'
            },
            {
                title: 'Composition & Storytelling I',
                brief: {
                    name: {
                        text: 'Creative Composition, SVSLearn',
                        url: 'https://www.svslearn.com/news/2018/11/7/creative-composition-20'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'Aaron Blaise: Methods for Pleasing Composition',
                                url: 'https://www.youtube.com/watch?v=dOMRWxo0ixo'
                            },
                            {
                                text: 'moderndayjames: Composition 1',
                                url: 'https://www.youtube.com/watch?v=wg-So3ElA8g'
                            },
                            {
                                text: 'Sycra: Effective Composition Using Shapes',
                                url: 'https://www.youtube.com/watch?v=Q7qonaAIDUk&list=PLV2X3tgajVlHEWoxhxHBV5JyU7R80LT9R'
                            },
                            {
                                text: 'Blender Guru: Composition',
                                url: 'https://www.youtube.com/watch?v=O8i7OKbWmRM'
                            }
                        ]
                    },
                    {
                        category: 'Books',
                        sources: [
                            {
                                text: '"Framed Ink" by Marcos Mateu-Mestre',
                                url: 'https://www.amazon.com/dp/1933492953'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: 'Watch Sycra\'s video, "Iterative Drawing"',
                            url: 'https://www.youtube.com/watch?v=k0ufz75UvHs'
                        },
                        sub: [
                            {
                                text: 'Iterate on 5 Compositions, 10x each'
                            }
                        ]
                    },
                    {
                        name: {
                            text: 'Thumbnail 50 Favorite Movie Scenes'
                        }
                    }
                ],
                notes: 'SVSLearn is available through a monthly subscription. Sycra\'s video on "Iterative Drawing" is a great one to learn how to challenge yourself to create variations - whether they\'re good or bad.'
            }
        ]
    },
    {
        theme: {
            pallet: [ "#FFFFFF", "#374168", "#273251", "#7cd4ff", "#838fbe", "#000000", "#e86b77" ],
            general: { text: 0, back: 1 },
            accent: 2,
            term: 3,
            arrow: { text: 3, back: 0 },
            note: { back: 4 },
            challenge: { text: 5, back: 0 },
            challengeHeading: { back: 6 },
            brief: 3,
        },
        units: [
            {
                title: 'Anatomy I',
                subtitle: 'The Head',
                brief: {
                    name: {
                        text: 'Understanding & Painting the Head, Marco Bucci',
                        url: 'https://marcobucciartstore.com/products/understanding-and-painting-the-head'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'Proko: The Loomis Method',
                                url: 'https://www.youtube.com/watch?v=wAOldLWIDSM'
                            },
                            {
                                text: 'Proko: Portrait Drawing Fundamentals',
                                url: 'https://www.youtube.com/watch?v=1EPNYWeEf1U&list=PLR2KBLDDnZz0pHBiiyrqlOB3FU-W5XX1k'
                            },
                            {
                                text: 'Sinix - Anatomy Quick Tips',
                                url: 'https://www.youtube.com/watch?v=IVbqoy_JEV0&list=PLflflDShjUKH4EfZyf0vuKEuqeqvlV0Qd'
                            }
                        ]
                    },
                    {
                        category: 'New Master\'s Academy',
                        sources: [
                            {
                                text: '"Constructive Head Drawing" by Steve Huston',
                                url: 'https://www.nma.art/courses/constructive-head-drawing/'
                            },
                            {
                                text: '"The Frank Reilly Drawing Method" by Frank Reilly',
                                url: 'https://www.nma.art/courses/the-frank-reilly-drawing-method/'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: 'Ahmed Aldoori\'s 100 Head Challenge',
                            url: 'https://www.youtube.com/watch?v=0A_kQsxeeTE'
                        }
                    }
                ],
                notes: 'If you have access to physical/traditional painting, you could consider it here in the second half of Marco Bucci\'s course. Otherwise, continue to focus on pencil. Andrew Loomis, Frank Reilly, and Steve Huston are highly recommended to learn once you become a little more comfortable with head construction.'
            },
            {
                title: 'Perspective II',
                brief: {
                    name: {
                        text: 'Drawabox.com Lessons 4-7',
                        url: 'https://drawabox.com/'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'moderndayjames (In This Order)'
                            },
                            {
                                text: '- Perspective 1',
                                url: 'https://www.youtube.com/watch?v=nAlCyQqEZSU&list=PLgKJMTFp_25iQVZ6ItpZKTSN9Yo44YSTs&index=6'
                            },
                            {
                                text: '- Perspective 2',
                                url: 'https://www.youtube.com/watch?v=O1tv-6JURJ4&list=PLgKJMTFp_25iQVZ6ItpZKTSN9Yo44YSTs&index=5'
                            },
                            {
                                text: '- Perspective 6',
                                url: 'https://www.youtube.com/watch?v=FF8XgTQmoPg&list=PLgKJMTFp_25iQVZ6ItpZKTSN9Yo44YSTs&index=1'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: 'Drawabox.com',
                            url: 'drawabox.com'
                        },
                        sub: [
                            {
                                text: '100 Treasure Chest Challenge',
                                url: 'https://drawabox.com/lesson/100chests'
                            }
                        ]
                    },
                    {
                        name: {
                            text: 'Rotate 50 Boxes & 50 Cylinders'
                        }
                    }
                ],
                notes: 'For Drawabox\'s assignments, do not focus on finished drawings. The main priority is to exercise your understanding of form and construction. Challenge yourself to begin rotating forms.'
            },
            {
                title: 'Anatomy II',
                subtitle: 'The Torso',
                brief: {
                    name: {
                        text: 'Anatomy of the Human Body for Artists (Torso) Proko Premium',
                        url: 'https://www.proko.com/human-anatomy-for-artists/#.XrVW5RNKh24'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'Proko: Torso Anatomy Series',
                                url: 'https://www.youtube.com/watch?v=pDgyQjNFVQk&list=PLtG4P3lq8RHFBeVaruf2JjyQmZJH4__Zv'
                            }
                        ]
                    },
                    {
                        category: 'Books',
                        sources: [
                            {
                                text: '"Figure Drawing for All It\'s Worth" by Andrew Loomis',
                                url: 'https://www.amazon.com/dp/0857680986'
                            },
                            {
                                text: '"FORCE: Dynamic Life Drawing" by Mike Mattesi',
                                url: 'https://www.amazon.com/dp/1138919578'
                            }
                        ]
                    },
                    {
                        category: 'New Master\'s Class',
                        sources: [
                            {
                                text: 'Glenn Vilppu',
                                url: 'https://www.nma.art/learn/search/instructors/glenn-vilppu/'
                            },
                            {
                                text: 'Steve Huston',
                                url: 'https://www.nma.art/learn/search/instructors/steve-huston/'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '100 Exaggerated Gestures'
                        },
                        sub: [
                            {
                                text: 'Draw the gesture of a reference'
                            },
                            {
                                text: 'Mannequinize it'
                            },
                            {
                                text: 'Draw a new, exagerrated gesture based on the mannequin'
                            }
                        ]
                    }
                ],
                notes: 'After going through anatomy, look up some FORCE gesture videos on YouTube (Proko has good interviews). Learn how to exaggerate gesture beyond your reference pose. This is helpful to stretch drawing from your imagination and fight stiff drawings.'
            }
        ]
    },
    {
        theme: {
            pallet: [ "#000000", "#FFFFFF", "#fff2fb", "#55bbae", "#a4927e", "#ffeef9" ],
            general: { text: 0, back: 1 },
            accent: 2,
            term: 3,
            arrow: { text: 3, back: 4 },
            note: { text: 1, back: 4 },
            challenge: { back: 5 },
            challengeHeading: { text: 1, back: 4 },
            brief: 3
        },
        units: [
            {
                title: 'Perspective III',
                brief: {
                    name: {
                        text: '"How to Draw", Scott Robertson',
                        url: 'https://www.amazon.com/dp/1933492732'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'moderndayjames (In This Order)'
                            },
                            {
                                text: '- Perspective 3',
                                url: 'https://www.youtube.com/watch?v=5gBpf47phh0&list=PLgKJMTFp_25iQVZ6ItpZKTSN9Yo44YSTs&index=4'
                            },
                            {
                                text: '- Perspective 4',
                                url: 'https://www.youtube.com/watch?v=03IrOGkbaZc&list=PLgKJMTFp_25iQVZ6ItpZKTSN9Yo44YSTs&index=3'
                            },
                            {
                                text: '- Perspective 5',
                                url: 'https://www.youtube.com/watch?v=2XF5YuAK63I&list=PLgKJMTFp_25iQVZ6ItpZKTSN9Yo44YSTs&index=2'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: 'Drawabox.com'
                        },
                        sub: [
                            {
                                text: '25 Wheel Challenge',
                                url: 'https://drawabox.com/lesson/25wheels'
                            }
                        ]
                    },
                    {
                        name: {
                            text: 'Rotate 50 Boxes & 50 Cylinders'
                        }
                    }
                ],
                notes: '"How to Draw" is the artist\'s perspective Bible. It\'s especially good if you want to draw inorganic objects but still important regardless! moderndayjames covers some great topics here - start rotating forms from imagination!'
            },
            {
                title: 'Anatomy III',
                subtitle: 'The Arms',
                brief: {
                    name: {
                        text: 'Anatomy of the Human Body for Artists (Arms), Proko Premium',
                        url: 'https://www.proko.com/human-anatomy-for-artists/#.XrVW5RNKh24'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'Proko: Arms Anatomy Series',
                                url: 'https://www.youtube.com/watch?v=pDgyQjNFVQk&list=PLtG4P3lq8RHFBeVaruf2JjyQmZJH4__Zv'
                            },
                            {
                                text: 'moderndayjames'
                            },
                            {
                                text: '- Elements of Character',
                                url: 'https://www.youtube.com/watch?v=xGhYfLQWbp0'
                            },
                            {
                                text: '- Anatomy of the Head',
                                url: 'https://www.youtube.com/watch?v=ERc2xnQpCR4'
                            },
                            {
                                text: '- Sketching the Head II',
                                url: 'https://www.youtube.com/watch?v=enWCcl2fCvw'
                            }
                        ]
                    },
                    {
                        sources: [
                            {
                                text: 'Any previously recommended Anatomy sources'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '100 Hands'
                        }
                    },
                    {
                        name: {
                            text: '25 Rotated Heads'
                        }
                    }
                ],
                notes: 'I think Challenged are especially important in this unit. Most artists will agree that hands and drawing people from imagination are difficult. It\'s important to face your weaknesses head on.'
            },
            {
                title: 'Clothed Figure Drawing',
                brief: {
                    name: {
                        text: 'Clothing & Drapery w/Glenn Vilppu, New Master\'s Academy',
                        url: 'https://www.nma.art/videolessons/how-to-draw-clothing-and-drapery/'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'moderndayjames'
                            },
                            {
                                text: '- Character Sketching I: Cloth & Drapery',
                                url: 'https://www.youtube.com/watch?v=S1eR1rcPlHc'
                            },
                            {
                                text: '- Cloth & Drapery II: Movement in Fabric',
                                url: 'https://www.youtube.com/watch?v=Wz7SdRoMhT4'
                            },
                            {
                                text: 'Sinix: Clothing Folds and You',
                                url: 'https://www.youtube.com/watch?v=vIO4ODhm0tc'
                            },
                            {
                                text: 'Marc Brunet: How to Paint Folds',
                                url: 'https://www.youtube.com/watch?v=MHRSPNkGxQo'
                            }
                        ]
                    },
                    {
                        sources: [
                            {
                                text: 'Cubebrush Artschool (w/Brushboost Sub)'
                            },
                            {
                                text: '- Term 3, Clothed Figure Drawing',
                                url: 'https://cubebrush.co/mb/products/mmfwyq/art-school'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '30 Day Clothed Figure Gesture Challenge'
                        }
                    },
                    {
                        name: {
                            text: '20-30 Minutes'
                        },
                        sub: [
                            {
                                text: '(5) 1-Minute Sketches'
                            },
                            {
                                text: '(5) 2-Minute Sketches'
                            },
                            {
                                text: '(1-3) 5-Minute or 10-Minute Sketches'
                            }
                        ]
                    }
                ],
                notes: 'Try all kinds of fabrics. Different weights all fold differently. Satin is reflective and light - it creases everywhere. Denim is matte and heavy - the folds are deeper and less frequent. You can get access to Cubebrush ARTSchool through its monthly subscription, Brushboost.'
            }
        ]
    },
    {
        theme: {
            pallet: [ "#FFFFFF", "#544747", "#2e282a", "#f68a63", "#ac8678", "#000000", "#52b0af" ],
            general: { text: 0, back: 1 },
            accent: 2,
            term: 3,
            arrow: { text: 3, back: 0 },
            note: { back: 4 },
            challenge: { text: 5, back: 0 },
            challengeHeading: { back: 6 },
            brief: 3
        },
        units: [
            {
                title: 'Color & Light I',
                brief: {
                    name: {
                        text: '"How to Render", Scott Robertson',
                        url: 'https://www.amazon.com/dp/1933492961'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'Marco Bucci'
                            },
                            {
                                text: '- Light & Shadow: 10 Minutes to Better Painting',
                                url: 'https://www.youtube.com/watch?v=xcCJ2CU-bFw&t=68s'
                            },
                            {
                                text: '- Ambient Occlusion 1 & 2',
                                url: 'https://www.youtube.com/watch?v=7fLV5ezO64w'
                            },
                            {
                                text: 'Proko: Shading Light and Form',
                                url: 'https://www.youtube.com/watch?v=V3WmrWUEIJo'
                            }
                        ]
                    },
                    {
                        category: 'Schoolism',
                        sources: [
                            {
                                text: 'Fundamentals of Lighting, Sam Nielson',
                                url: 'https://www.schoolism.com/school.php?id=3'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '50 Still-Life Lighting Studies'
                        },
                        sub: [
                            {
                                text: 'Examin lighting in drastically different setups'
                            },
                            {
                                text: 'Use a lamp and change the position over the subject'
                            }
                        ]
                    }
                ],
                notes: 'Learning the science behind light is most important here. When studying light, focus primarily on the three main average values of the scene and go more granular from there. Try thumbnailing instead of detailed drawings. You learn more through repeated attempts!'
            },
            {
                title: 'Perspective IV',
                brief: {
                    name: {
                        text: 'moderndayjames Visual Library',
                        url: 'https://www.youtube.com/channel/UCI8GDFj5BQCQrSHITFebzkA'
                    },
                    sub: [
                        {
                            text: 'Visual Library I',
                            url: 'https://www.youtube.com/watch?v=8FzHV2h29zE'
                        },
                        {
                            text: 'Visual Library II',
                            url: 'https://www.youtube.com/watch?v=i5QdhXHXzpk'
                        },
                        {
                            text: 'Vehicle Sketching I',
                            url: 'https://www.youtube.com/watch?v=AXn979hRyIs'
                        },
                        {
                            text: 'Vehicle Sketching II',
                            url: 'https://www.youtube.com/watch?v=2ivOcwlt9Dc'
                        },
                        {
                            text: 'Visual Library III - Drawing Mechs',
                            url: 'https://www.youtube.com/watch?v=li2qw57PqZI'
                        }
                    ]
                },
                references: [
                    {
                        category: 'Books',
                        sources: [
                            {
                                text: '"Framed Perspective I: Technical Perspective and Visual Storytelling", Marcos Mateu-Mestre',
                                url: 'https://www.amazon.com/dp/1624650309'
                            }
                        ]
                    },
                    {
                        category: 'For Mech Drawing',
                        sources: [
                            {
                                text: 'SVSLearn - Drawing Robots & Machinery',
                                url: 'https://courses.svslearn.com/courses/drawing-robots-and-machinery'
                            }
                        ]
                    },
                    {
                        category: 'Cubebrush Artschool (w/Brushboost Sub)',
                        sources: [
                            {
                                text: 'Term 6, Mech Design',
                                url: 'https://cubebrush.co/mb/products/mmfwyq/art-school'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '100 Rotated Objects (based on mdj\'s Visual Library videos)'
                        }
                    },
                    {
                        name: {
                            text: '100 Unique Studies (machinery, vehicles, plants, animals)'
                        }
                    }
                ],
                notes: 'This is a key unit. Familiarize yourself with the techniques James teaches in these videos. Framed Perspective is good for learning how to apply perspective for setting a scene.'
            },
            {
                title: 'Anatomy IV',
                subtitle: 'The Legs',
                brief: {
                    name: {
                        text: 'Anatomy of the Human Body for Artists (Legs), Proko Premium',
                        url: 'https://www.proko.com/human-anatomy-for-artists/#.XrVW5RNKh24'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'Proko: Legs Anatomy Series',
                                url: 'https://www.youtube.com/watch?v=pDgyQjNFVQk&list=PLtG4P3lq8RHFBeVaruf2JjyQmZJH4__Zv'
                            },
                            {
                                text: 'moderndayjames'
                            },
                            {
                                text: '- Elements of Character',
                                url: 'https://www.youtube.com/watch?v=xGhYfLQWbp0&t=311s'
                            },
                            {
                                text: '- Anatomy of the Head',
                                url: 'https://www.youtube.com/watch?v=ERc2xnQpCR4'
                            },
                            {
                                text: '- Sketching the Head II',
                                url: 'https://www.youtube.com/watch?v=enWCcl2fCvw&t=35s'
                            }
                        ]
                    },
                    {
                        sources: [
                            {
                                text: 'Any previously recommended Anatomy sources'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '100 Feet'
                        }
                    },
                    {
                        name: {
                            text: '100 Studies of Interacting Characters',
                        },
                        sub: [
                            {
                                text: 'Figure drawing of at least 2 figures interacting in a scene'
                            }
                        ]
                    }
                ],
                notes: 'The Challenges here are both important. Feet are weird and require repeated study. There\'s also not enough material out there that encourages drawing characters together - focus on them making physical contact and doing actions together - kissing, hugging, picking things up, fighting, etc.'
            }
        ]
    },
    {
        theme: {
            pallet: [ "#69413f", "#FFFFFF", "#ede7f4", "#758ee2", "#9e5753", "#f5f5f5" ],
            general: { text: 0, back: 1 },
            accent: 2,
            term: 3,
            arrow: { text: 3, back: 0 },
            note: { text: 1, back: 4 },
            challenge: { text: 0, back: 5 },
            challengeHeading: { text: 0, back: 4 },
            title: 0,
            brief: 3
        },
        units: [
            {
                title: 'Intro To Animals',
                brief: {
                    name: {
                        text: 'FORCE: Animal Drawing, Mike Mattesi',
                        url: 'https://www.amazon.com/dp/0367637073'
                    }
                },
                references: [
                    {
                        sources: [
                            {
                                text: 'Aaron Blaise (pick one)'
                            },
                            {
                                text: '- Big Cats',
                                url: 'https://creatureartteacher.com/product/how-to-draw-animals-course-big-cats/'
                            },
                            {
                                text: '- Bears',
                                url: 'https://creatureartteacher.com/product/how-to-draw-bears-aaron-blaise/'
                            },
                            {
                                text: '- Horses',
                                url: 'https://creatureartteacher.com/product/how-to-draw-horses/'
                            },
                            {
                                text: '- Wolves, Coyotes, and Foxes',
                                url: 'https://creatureartteacher.com/product/how-to-draw-wolves-coyotes-foxes/'
                            }
                        ]
                    },
                    {
                        sources: [
                            {
                                text: 'Animal Anatomy Bundle, moderndayjames',
                                url: 'https://gumroad.com/moderndayjames?sort=page_layout'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '30-Day Gesture Sessions of Animals'
                        },
                        sub: [
                            {
                                text: 'Change animal type each week: 4-legged, aquatic, flying, big, small, reptilian, etc'
                            }
                        ]
                    }
                ],
                notes: 'You\'ll have had some animal drawing from Drawabox already. Try moderndayjames\' Gumroad bundle if you want to pursue more of a perspective route. Otherwise, the focus is on the gesture of animals. Aaron Blaise is an absolute pro on this. He has great character design tips. Pick your favorite animal and follow one of his courses!'
            },
            {
                title: 'Perspective V',
                brief: {
                    name: {
                        text: '"Frames Perspective II", Marcos Mateu-Mestre',
                        url: 'https://www.amazon.com/dp/1624650325'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'moderndayjames'
                            },
                            {
                                text: '- Vehicle Sketching III',
                                url: 'https://www.youtube.com/watch?v=4Q4rh1gFWGg'
                            },
                            {
                                text: '- Vehicle Sketching IV',
                                url: 'https://www.youtube.com/watch?v=sL1f_tBYquE'
                            },
                            {
                                text: '- Sketching Figures in Extreme Perspective',
                                url: 'https://www.youtube.com/watch?v=g5gKA7hu7Fc'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '100 Extreme Perspective Figures'
                        }
                    },
                    {
                        name: {
                            text: '50 Vehicle Rotation Studies'
                        }
                    },
                    {
                        name: {
                            text: '50 Unique Vehicle Designs'
                        }
                    }
                ],
                notes: 'You have two options here: Focus on characters in perspective or inorganic subjects (vehicles). Pick the one you prefer as the unit\'s primary focus.'
            },
            {
                title: 'Color & Light II',
                brief: {
                    name: {
                        text: '"Color and Light", James Gurney',
                        url: 'https://www.amazon.com/dp/0740797719'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'Blender Guru'
                            },
                            {
                                text: '- Understanding Color',
                                url: 'https://www.youtube.com/watch?v=Qj1FK8n7WgY'
                            },
                            {
                                text: '- Lighting Mastery Series',
                                url: 'https://www.youtube.com/watch?v=cg1K_ZWB0Uw'
                            },
                            {
                                text: 'Sycra: How to pick colours that work',
                                url: 'https://www.youtube.com/watch?v=9kQllLy_X4I'
                            },
                            {
                                text: 'Coloring w/Kurt: Where do highlights go?',
                                url: 'https://www.youtube.com/watch?v=TOj5QLZ8Yxg'
                            }
                        ]
                    },
                    {
                        category: 'Schoolism',
                        sources: [
                            {
                                text: 'Designing w/Color & Light, Nathan Fowkes',
                                url: 'https://www.schoolism.com/school.php?id=22'
                            },
                            {
                                text: 'Painting w/Light & Color, Tonko House & Cody Gramstead',
                                url: 'https://www.schoolism.com/school.php?id=41'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '150 Color Replication Studies'
                        },
                        sub: [
                            {
                                text: 'Environments'
                            },
                            {
                                text: 'Character Designs'
                            },
                            {
                                text: 'Movie Frames'
                            }
                        ]
                    },
                    {
                        name: {
                            text: '50 Color Variation Studies'
                        },
                        sub: [
                            {
                                text: '50 subjects, drawn 3x with different color palettes'
                            }
                        ]
                    }
                ],
                notes: 'James Gurney\'s book is the artist\'s Bible on color and light. The YouTube recommendation here are good too. For the challenges, do mostly thumbnails - exercise picking colors accurately, different kinds of color schemes, and picking unique colors.'
            }
        ]
    },
    {
        theme: {
            pallet: [ "#efefef", "#44363a", "#302125", "#dd5b7f", "#ac788b", "#d89528" ],
            general: { text: 0, back: 1 },
            accent: 2,
            term: 3,
            arrow: { text: 3, back: 0 },
            note: { text: 0, back: 4 },
            challenge: { text: 1, back: 0 },
            challengeHeading: { text: 1, back: 5 },
            brief: 3
        },
        units: [
            {
                title: 'Character Design',
                brief: {
                    name: {
                        text: 'Character Design w/Aaron Blaise',
                        url: 'https://creatureartteacher.com/product/character-design-course-aaron-blaise/'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'Marco Bucci: Character Design Mini Series',
                                url: 'https://www.youtube.com/watch?v=gI62rHNtg2w'
                            },
                            {
                                text: 'Sinix: Anatomy Quick Tips',
                                url: 'https://www.youtube.com/watch?v=IVbqoy_JEV0&list=PLflflDShjUKH4EfZyf0vuKEuqeqvlV0Qd'
                            }
                        ]
                    },
                    {
                        category: 'Schoolism',
                        sources: [
                            {
                                text: 'Gesture Drawing, Alex Woo',
                                url: 'https://www.schoolism.com/school.php?id=14'
                            },
                            {
                                text: 'Fundamentals of Character Design, Stephen Silver',
                                url: 'https://www.schoolism.com/school.php?id=10'
                            },
                            {
                                text: 'Expressive Characters, Wouter Tulp',
                                url: 'https://www.schoolism.com/school.php?id=39'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: 'moderndayjames\' 100 Expression Challenge'
                        }
                    },
                    {
                        name: {
                            text: '50 Character Design Variation Studies'
                        },
                        sub: [
                            {
                                text: '50 subjects, 3 variations each'
                            }
                        ]
                    }
                ],
                notes: 'Both Challenges are greate here. If you haven\'t seen the practice before, look up silhouetting for character design (featured in Marco Bucci\'s series) - it\'s a good way to stretch your creative muscles.'
            },
            {
                title: 'Composition & Storytelling II',
                brief: {
                    name: {
                        text: 'Pictorial Composition w/Nathan Fowkes, Schoolism',
                        url: 'https://www.brendanmeachen.com/soloartist'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'moderndayjames'
                            },
                            {
                                text: '- Composition 1',
                                url: 'https://www.youtube.com/watch?v=wg-So3ElA8g&t=34s'
                            },
                            {
                                text: '- Sketching at a Distance',
                                url: 'https://www.youtube.com/watch?v=aBkT6QSheog'
                            },
                            {
                                text: '- Worldbuilding I, II, III',
                                url: 'https://www.youtube.com/watch?v=19dIqWdgpzY'
                            }
                        ]
                    },
                    {
                        category: 'Schoolism',
                        sources: [
                            {
                                text: 'Story-Driven Illustrations, Djamilia Knopf',
                                url: 'https://www.schoolism.com/school.php?id=48'
                            },
                            {
                                text: 'Lighting for Story & Concept Art, Sam Nielson',
                                url: 'https://www.schoolism.com/school.php?id=29'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '50 Compositions Including Figures'
                        },
                        sub: [
                            {
                                text: '2 total variations'
                            },
                            {
                                text: 'Change color, perspective, and composition'
                            }
                        ]
                    },
                    {
                        name: {
                            text: '100 Environment Color/Composition Studies'
                        },
                        sub: [
                            {
                                text: 'Pick movie shots that tell a story in a single frame'
                            }
                        ]
                    }
                ],
                notes: 'Focus on thumbnailing during the challenge. If you have time towards the end, pick some of your favorites and make more complete works based on them.'
            },
            {
                title: 'Perspective VI',
                brief: {
                    name: {
                        text: 'Krenz Kushart\'s Gumroad Bundle',
                        url: 'https://krenzcushart.gumroad.com/l/cRkSh'
                    },
                    sub: [
                        {
                            text: 'Draw a Human Body in Perspective',
                            url: 'https://krenzcushart.gumroad.com/l/jqcS'
                        },
                        {
                            text: 'Rotate Things in Perspective 1 + 2',
                            url: 'https://krenzcushart.gumroad.com/l/ZJIno'
                        },
                        {
                            text: 'Control Angle & Proportion in Perspective',
                            url: 'https://krenzcushart.gumroad.com/l/ITxP'
                        }
                    ]
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'moderndayjames: Emulating Even Amundsen Series',
                                url: 'https://www.youtube.com/watch?v=1VSH32ede6g'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: 'Draw 100 Figures in Perspective'
                        }
                    },
                    {
                        name: {
                            text: 'Rotate 50 Figures a full 360 degrees'
                        }
                    },
                    {
                        name: {
                            text: 'Next Level: Draw 50 Compositions of Figures in Extreme Perspectives'
                        }
                    }
                ],
                notes: 'The moderndayjames videos are based on Krenz Kushart\'s bundle. Make sure to do your rotations right - create the perfect perspective map first, and then try again from imagination.'
            }
        ]
    },
    {
        theme: {
            pallet: [ "#000000", "#FFFFFF", "#f7f8ea", "#c0c662", "#6d213c", "#f5f5f5" ],
            general: { text: 0, back: 1 },
            accent: 2,
            term: 3,
            arrow: { text: 3, back: 4 },
            note: { text: 1, back: 4 },
            challenge: { back: 5 },
            challengeHeading: { text: 1, back: 4 },
            title: 4,
            brief: 3
        },
        units: [
            {
                title: 'Anatomy V',
                subtitle: 'Imagination',
                brief: {
                    name: {
                        text: '"Figure Drawing: Design & Invention", Michael Hampton',
                        url: 'https://www.amazon.com/dp/0615272819'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'moderndayjames'
                            },
                            {
                                text: '- Deciphering Bridgman\'s Anatomy',
                                url: 'https://www.youtube.com/watch?v=FupeKX4NQsQ&t=48s'
                            },
                            {
                                text: '- Deciphering Bridgman II',
                                url: 'https://www.youtube.com/watch?v=tZ9entFMbtI'
                            },
                            {
                                text: '- Anatomical Shape Language',
                                url: 'https://www.youtube.com/watch?v=BWb15Nb4PWI'
                            },
                            {
                                text: 'Proko: How to Study Bridgman',
                                url: 'https://www.youtube.com/watch?v=ZpnP28b3riY'
                            }
                        ]
                    },
                    {
                        category: 'Books',
                        sources: [
                            {
                                text: '"Constructive Anatomy", George B. Bridgeman',
                                url: 'https://www.amazon.com/dp/0486211045'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '50 Character Designs'
                        },
                        sub: [
                            {
                                text: '3 Variations each w/varied anatomical proportions'
                            }
                        ]
                    },
                    {
                        name: {
                            text: 'Invent 100 Figure Poses'
                        },
                        sub: [
                            {
                                text: '50 Calm Poses'
                            },
                            {
                                text: '50 Action Poses'
                            }
                        ]
                    },
                    {
                        name: {
                            text: 'Next Level: Rotate these poses 3x each'
                        }
                    }
                ],
                notes: 'Look up Proko\'s "Draftssmen" podcast, S1E10, "How to Learn Anatomy", and listen to their thoughts in Bridgman before evaluating for yourself whether to learn from his book. Try the YouTube videos instead. Both Hampton and Bridgman are experts though.'
            },
            {
                title: 'Perspective VII',
                brief: {
                    name: {
                        text: 'moderndayjames: "Becoming a Gi" Series',
                        url: 'https://www.youtube.com/watch?v=h8x_TClXuxM'
                    }
                },
                references: [
                    {
                        category: 'Online',
                        sources: [
                            {
                                text: 'Dynamic Sketching 2, Peter Han',
                                url: 'https://www.cgmasteracademy.com/courses/68-dynamic-sketching-2'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: 'As many studies as possible from imagination:',
                        },
                        sub: [
                            {
                                text: 'Rotate subjects full 360 degrees'
                            },
                            {
                                text: 'Practice curvilinear perspective (Becoming a Gi 3)'
                            },
                            {
                                text: 'Draw subjects in every angle (Becoming a Gi 3)'
                            }
                        ]
                    }
                ],
                notes: 'One can onnly become a Gi through deliberate practice. Draw as many things from imagination as you can. If you\'re having trouble, start off with a construction, and then draw it again from memory.'
            },
            {
                title: 'Environment Design I',
                brief: {
                    name: {
                        text: 'Art Camp 3, Noah Bradley',
                        url: 'https://artcamp.com/'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'FZDSchool - Environmental Thumbnails',
                                url: 'https://www.youtube.com/watch?v=P-l9kNXAeGQ'
                            }
                        ]
                    },
                    {
                        category: 'Schoolism',
                        sources: [
                            {
                                text: 'Environment Design, Nathan Fowkes',
                                url: 'https://www.schoolism.com/school.php?id=26'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '100 Landscape Thumbnails'
                        },
                        sub: [
                            {
                                text: 'Create 1 deviation for each thumbnail: Color, shape design, biome, time of day, composition'
                            }
                        ]
                    },
                    {
                        name: {
                            text: 'Options: Create 10 Full Works based on created thumbnails'
                        }
                    }
                ],
                notes: 'Read Noah Bradley\'s, "How I Became and Artist" blogpost, and then his "Don\'t Go to Art-School" post. Art Camp 3 will whip you into shape - don\'t skip it!'
            }
        ]
    },
    {
        theme: {
            pallet: [ "#efefef", "#332b4a", "#270d3b", "#9687cc", "#6d658a", "#ffd178" ],
            general: { text: 0, back: 1 },
            accent: 2,
            term: 3,
            arrow: { text: 3, back: 0 },
            note: { text: 0, back: 4 },
            challenge: { text: 1, back: 0 },
            challengeHeading: { text: 1, back: 5 },
            brief: 3
        },
        units: [
            {
                title: 'Environment Design II',
                brief: {
                    name: {
                        text: 'Environment Design Course, James Paick (Gumroad)',
                        url: 'https://gumroad.com/jamespaick'
                    }
                },
                references: [],
                challenges: [
                    {
                        name: {
                            text: '100 Environment Thumbnail Studies'
                        },
                        sub: [
                            {
                                text: 'Make at least half feature figures, animals, or other additional subjects'
                            }
                        ]
                    }
                ],
                notes: 'The general intended difference of this unit from the last is to focus more on architectural scenes - buildings, structures, sprawling cityscapes, and intimate streets.'
            },
            {
                title: 'Painting I',
                brief: {
                    name: {
                        text: 'Digital Painting 1 + Brushwork Techniques, Marco Bucci',
                        url: 'https://marcobucciartstore.com/collections/online-workshops/products/full-digital-painting-package'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'Sinix'
                            },
                            {
                                text: '- Paint Like a Sculptor',
                                url: 'https://www.youtube.com/watch?v=zC3OxonJcXQ&t=577s'
                            },
                            {
                                text: '- The Best Brush (for Beginners)',
                                url: 'https://www.youtube.com/watch?v=-Nt9fa8jZUE'
                            },
                            {
                                text: 'Proko: Make Digital Paintings Look Traditional',
                                url: 'https://www.youtube.com/watch?v=0Dbf63YnkeA'
                            }
                        ]
                    },
                    {
                        category: 'Schoolism',
                        sources: [
                            {
                                text: 'Essentials of Realism, Jonathan Hardesty',
                                url: 'https://www.schoolism.com/school.php?id=33'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '50 Value Studies'
                        }
                    },
                    {
                        name: {
                            text: '50 Color Studies'
                        },
                        sub: [
                            {
                                text: 'Limit time for above to 60 minutes or less each'
                            }
                        ]
                    },
                    {
                        name: {
                            text: 'Optional: Traditional Painting Habits'
                        },
                        sub: [
                            {
                                text: 'Paint on only one layer, no undo'
                            }
                        ]
                    }
                ],
                notes: 'Now we\'re getting into true-blue painting! If learning digitally, learn from traditional painting sources - creativity is bred through limitation. Limit yourself to a defined color palette, no layering, and disable your undo. If you want to learn traditional painting instead, go ahead!'
            },
            {
                title: 'Anatomy VI',
                subtitle: 'Caricature/Animal',
                brief: {
                    name: {
                        text: 'The Art of Caricature w/Court Jones, Proko Premium',
                        url: 'https://www.proko.com/art-of-caricature-with-court-jones/#.XrWJHxNKh24'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'FZDSchool: EP 62 - Real-Time Creature Designs',
                                url: 'https://www.youtube.com/watch?v=9FGCClodLUE'
                            },
                            {
                                text: 'Austin Batchelor: Mixing 3 Animals into 1 Creature',
                                url: 'https://www.youtube.com/watch?v=HgDkG2wu808'
                            }
                        ]
                    },
                    {
                        category: 'Schoolism',
                        sources: [
                            {
                                text: 'Creature Anatomy, Terryl Whitlatch',
                                url: 'https://www.schoolism.com/school.php?id=32'
                            },
                            {
                                text: 'The Art of Caricature, Jason Seiler',
                                url: 'https://www.schoolism.com/school.php?id=8'
                            },
                            {
                                text: 'Realistic Portraits, Jason Seiler',
                                url: 'https://www.schoolism.com/school.php?id=37'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '100 Caricatures'
                        }
                    },
                    {
                        name: {
                            text: '100 Animal Studies'
                        }
                    },
                    {
                        name: {
                            text: '50 Creature Designs (Only if you\'ve done at least 50 animal studies)'
                        }
                    }
                ],
                notes: 'Choose your priority for this unit - caricature, or animal drawing. Caricature will really help you learn exaggeration, character design, and will transfer into your normal works. I\'ve seen many recommend this as a subject to learn and practice. Teryyyl Whitlatch\'s "Creature Anatomy" Schoolism course looks top notch.'
            }
        ]
    },
    {
        theme: {
            pallet: [ "#787878", "#FFFFFF", "#f0f3ff", "#6b7fd7", "#e2827c", "#f5f5f5" ],
            general: { text: 0, back: 1 },
            accent: 2,
            term: 3,
            arrow: { text: 3, back: 0 },
            note: { text: 1, back: 4 },
            challenge: { back: 5 },
            challengeHeading: { text: 1, back: 4 },
            brief: 3
        },
        units: [
            {
                title: 'Painting II',
                brief: {
                    name: {
                        text: 'Digital Painting 2 + 3, Marco Bucci',
                        url: 'https://marcobucciartstore.com/collections/online-workshops/products/full-digital-painting-package'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'moderndayjames'
                            },
                            {
                                text: '- Intro to Gouache',
                                url: 'https://www.youtube.com/watch?v=UHpRt_Hg-JE'
                            },
                            {
                                text: '- Digital Painting 1',
                                url: 'https://www.youtube.com/watch?v=Q6-NhdEPKGk'
                            },
                            {
                                text: '- Digital Painting 2',
                                url: 'https://www.youtube.com/watch?v=F5VNb5itr9Y'
                            },
                            {
                                text: '- Digital Painting 3',
                                url: 'https://www.youtube.com/watch?v=w3zVGXSw_d8'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '50 Value Studies'
                        }
                    },
                    {
                        name: {
                            text: '50 Color Studies'
                        },
                        sub: [
                            {
                                text: 'Limit time for above to 60 minutes or less each'
                            }
                        ]
                    },
                    {
                        name: {
                            text: 'Optional: Traditional Painting Habits:'
                        },
                        sub: [
                            {
                                text: 'Paint on only one layer, no undo'
                            }
                        ]
                    }
                ],
                notes: 'Pick a focus of study - environments, portraiture, figures, full scenese - or everything! You do you. Apply the recommended challenges to your main focus.'
            },
            {
                title: 'Painting III',
                subtitle: 'Matte Painting',
                brief: {
                    name: {
                        text: 'Art Camp: Environment Concept Design, Titus Lunter',
                        url: 'https://artcamp.com/'
                    }
                },
                references: [
                    {
                        category: 'Cubebrush ARTSchool',
                        sources: [
                            {
                                text: 'Term 9, Matte Painting',
                                url: 'https://cubebrush.co/mb/products/mmfwyq/art-school'
                            }
                        ]
                    },
                    {
                        category: 'Schoolism',
                        sources: [
                            {
                                text: 'Digital Painting, Craig Mullins',
                                url: 'https://www.schoolism.com/school.php?id=44'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '10 Matte Painting Studies (Including Photobashing)'
                        }
                    },
                    {
                        name: {
                            text: 'If Unable to Photobash'
                        },
                        sub: [
                            {
                                text: '10 Full Works of Normal Painting'
                            }
                        ]
                    }
                ],
                notes: 'Matte painting is a practice used in concept art to achieve photorealistic paintings quickly. While not for everyone, you may learn some good concepts for efficiency. If you don\'t want to learn to photobash, continue to exercise painting full scene studies (from your favorite artists or movies).'
            },
            {
                title: 'Personal Project',
                brief: {
                    name: {
                        text: '"The Skillful Huntsman", Felix Yoon, Khang Le, Mike Yamada, & Scott Robertson',
                        url: 'https://www.amazon.com/dp/0972667644'
                    }
                },
                references: [
                    {
                        category: 'YouTube',
                        sources: [
                            {
                                text: 'FengZhu / FZDSchool',
                                url: 'https://www.youtube.com/user/FZDSCHOOL'
                            }
                        ]
                    },
                    {
                        category: 'Schoolism',
                        sources: [
                            {
                                text: 'Introduction to Visual Development w/ Victoria Ying',
                                url: 'https://www.schoolism.com/school.php?id=46'
                            },
                            {
                                text: 'Painting w/ Light & Color, Dice Tsutsumi & Robert Kondo',
                                url: 'https://www.schoolism.com/school.php?id=30'
                            }
                        ]
                    }
                ],
                challenges: [
                    {
                        name: {
                            text: '3 Personal Projects'
                        },
                        sub: [
                            {
                                text: 'Concept, visual design, multiple perspectives, compositions, color variations, character variations, environment variations'
                            }
                        ]
                    }
                ],
                notes: 'For your personal project, challenge yourself to conceptualize and visualize every aspect of your creative project. "The Skillful Huntsman" walks your through the entire process. If that\'s too grand in scope, apply the practices your learned to something like a cast of characters, species of animal, or locale.'
            }
        ]
    }
]
