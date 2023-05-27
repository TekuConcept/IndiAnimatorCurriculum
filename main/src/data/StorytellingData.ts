import { CData } from "./CurriculumData"

export const storytellingData: CData = {
    name: 'Storytelling',
    terms: [
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
            focus: 'Theory I - Character driven stories',
            units: [
                {
                    title: 'Characters',
                    brief: {
                        name: {
                            text: 'How to Create Vivid Characters, Brett Warren',
                            url: 'https://milanote.com/guide/characters'
                        }
                    },
                    references: [
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'Creating Unique Characters, Reedsy Blog',
                                    url: 'https://blog.reedsy.com/character-development/'
                                },
                                {
                                    text: 'Complete Guide to Creating Your Cast, Jordan',
                                    url: 'https://www.nownovel.com/blog/creating-character/'
                                },
                                {
                                    text: 'Writing tips for character development, MasterClass',
                                    url: 'https://www.masterclass.com/articles/writing-tips-for-character-development'
                                }
                            ]
                        },
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'How to write complex characters, Jeff Kitchen',
                                    url: 'https://youtu.be/nFGInL05ivc'
                                },
                                {
                                    text: 'A great tool for developing character, Gary Goldstein',
                                    url: 'https://youtu.be/fApBdfWbH8A'
                                },
                                {
                                    text: 'Creating an Authentic Character, Alan Moore',
                                    url: 'https://youtu.be/ZwleZw2-kU8'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Create 25 unique characters',
                            sub: [
                                { text: 'Give them a clever name' },
                                { text: 'Create a brief visual description' },
                                { text: 'Give them 3 or more strengths' },
                                { text: 'Give them 2 or more weaknesses' }
                            ]
                        },
                        {
                            name: '(Optional) Build a character profile',
                            sub: [
                                { text: 'Add some mannerisms' },
                                { text: 'Create a brief backstory' }
                            ]
                        },
                        {
                            name: '(Optional) Analize 5 or more characters from animated films of choice'
                        }
                    ],
                    notes: 'Practice creating interesting and relatable characters for stories - living, breathing beings with strengths and weaknesses, desires and regrets, talents and quirks. A storyteller doesn\'t simply puppeteer their characters. Rather, they are special journalists documenting important events and experiences.'
                },
                {
                    title: 'Conflicts I',
                    subtitle: 'Immediate',
                    brief: {
                        name: {
                            text: 'Conflict in Stories, Part 1',
                            url: '/StorytellingLessons/ConflictsI'
                        }
                    },
                    references: [
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'What is conflict in literature, MasterClass?',
                                    url: 'https://www.masterclass.com/articles/what-is-conflict-in-literature-6-different-types-of-literary-conflict-and-how-to-create-conflict-in-writing'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Create 5 unique variations of each conflict covered in this unit',
                            sub: [
                                { text: 'There should be 20 conflicts total' }
                            ]
                        },
                        {
                            name: 'Stretch your imagination',
                            sub: [
                                { text: 'Create 5 more variations each' },
                                { text: 'Mix two or three conflicts - Primary, Secondary, Tertiary' }
                            ]
                        }
                    ],
                    notes: 'Explore the first four of eight conflicts characters may face as part of their growth and journey: Character vs Themself, Character vs Character, Character vs Society, and Character vs Nature (or the Elements).'
                },
                {
                    title: 'Character Arcs',
                    brief: {
                        name: {
                            text: 'How to Write Character Arcs, K.M. Weiland',
                            url: 'https://www.helpingwritersbecomeauthors.com/write-character-arcs/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Character Development Is About These 3 Things, Dr. Ken Atchity',
                                    url: 'https://youtu.be/cSY43NNZdUI'
                                },
                                {
                                    text: 'How to create a powerful character arc',
                                    url: 'https://youtu.be/Qd-32xzrWy0'
                                },
                                {
                                    text: 'How to create character arcs, Tyler Mowery',
                                    url: 'https://youtu.be/c1crdZI5Af0'
                                }
                            ]
                        },
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'What are some good examples of character development, Rebecca Jean',
                                    url: 'https://writersedit.com/fiction-writing/what-are-some-good-examples-of-character-development-in-literature/'
                                },
                                {
                                    text: 'What is character development, Chris Fox',
                                    url: 'https://filmlifestyle.com/what-is-character-development/'
                                },
                                {
                                    text: 'Why is Strong Character Development Important, Kristen Overman',
                                    url: 'https://www.goodstorycompany.com/blog/character-development'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Create 10 unique character arcs',
                            sub: [
                                { text: 'Use the characters created in Unit 1' },
                                { text: 'Create 3 different arcs for 1 character' }
                            ]
                        }
                    ],
                    notes: 'A character arc refers to the transformation or development undergone by a character throughout a story. It allows the audience to witness the evolution of a character from one state to another, adding depth and complexity to their journey.'
                },
                {
                    title: 'Structure I',
                    subtitle: 'Simple',
                    brief: {
                        name: {
                            text: 'Simple Writing Structures',
                            url: '/StorytellingLessons/StructureI'
                        }
                    },
                    references: [
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'Dean Koontz\'s Classic Story Structure, Andrea Feccomandi',
                                    url: 'https://bibisco.com/blog/story-structure-series-dean-koontzs-classic-story-structure/'
                                },
                                {
                                    text: 'The 5 Elements of Dramatic Structure, Sean Glatch',
                                    url: 'https://writers.com/freytags-pyramid'
                                },
                                {
                                    text: 'The Snowflake Method Of Writing In 10 Easy Steps, Gary Smailes',
                                    url: 'https://bubblecow.com/blog/snowflake-method'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Write 3 outlines using',
                            sub: [
                                { text: 'The Classic Story Structure' },
                                { text: 'The Freytag Pyramid' },
                                { text: 'The Snowflake Method' }
                            ]
                        },
                        {
                            name: 'Stretch your imagination',
                            sub: [
                                { text: 'Repeat the above challenge at least 2 more times (9 outlines total)' }
                            ]
                        }
                    ],
                    notes: 'The structure of a story is how it is organized. Think of it as the framework of writing. Just as an artist gestures before adding detail, an author creates a plan before writing. This unit covers the easiest of writing structures: Classic, Freytag\'s Pyramid, and the Snowflake Method.'
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
            focus: 'Theory II - Plots and ways to write',
            units: [
                {
                    title: 'Conflicts II',
                    subtitle: 'Beyond',
                    brief: {
                        name: {
                            text: 'Conflict in Stories, Part 2',
                            url: '/StorytellingLessons/ConflictsII'
                        }
                    },
                    references: [
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: '7 Different Types of Conflict in Literature, Writers Republic',
                                    url: 'https://www.writersrepublic.com/blog/types-of-conflict-in-literature'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Create 5 unique variations of each conflict covered in this unit',
                            sub: [
                                { text: 'There should be 20 conflicts total' }
                            ]
                        },
                        {
                            name: 'Stretch your imagination',
                            sub: [
                                { text: 'Create 5 more variations each' },
                                { text: 'Mix two or three conflicts - Primary, Secondary, Tertiary' }
                            ]
                        }
                    ],
                    notes: 'Explore the last four of eight conflicts characters may face as part of their growth and journey: Character vs Technology, Character vs Machine, Character vs God, the Supernatural, or the Unknown, and Character vs Fate (or Destiny).'
                },
                {
                    title: 'Plots',
                    brief: {
                        name: {
                            text: 'Plotting Your Next Adventure',
                            url: '/StorytellingLessons/Plots'
                        }
                    },
                    references: [
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'How to Write a Story Plot, Lindsay Kramer',
                                    url: 'https://www.grammarly.com/blog/story-plot/'
                                },
                                {
                                    text: 'How To Plot A Novel, Harry Bingham',
                                    url: 'https://jerichowriters.com/how-to-plot-a-novel/'
                                },
                                {
                                    text: 'How to Add Subplots to Your Story, MasterClass',
                                    url: 'https://www.masterclass.com/articles/how-to-add-subplots-to-your-story'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Write 10 unique story plots',
                            sub: [
                                { text: 'At least 3 unique plot types' },
                                { text: 'Include all 5 parts of a plot' }
                            ]
                        },
                        {
                            name: 'Stretch your imagination',
                            sub: [
                                { text: 'Write 15 more story plots' }
                            ]
                        }
                    ],
                    notes: 'Story structure provides the "how" while story plots provide the "what" in storytelling. Learn about the different types of plots as well as how to build a plot from scratch.'
                },
                {
                    title: 'Writing Strategies',
                    brief: {
                        name: {
                            text: 'Pantser, Plotter, and Plantser, The Magic Violinist',
                            url: 'https://thewritepractice.com/plotters-pantsers/'
                        }
                    },
                    references: [
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'What Kind of Writer Are You?, MasterClass',
                                    url: 'https://www.masterclass.com/articles/plotters-vs-pantsers-what-kind-of-writer-are-you'
                                },
                                {
                                    text: 'The Pros And Cons Of Plotting And Pantsing, Jessica A. McMinn',
                                    url: 'https://writersedit.com/fiction-writing/the-pros-and-cons-of-plotting-and-pantsing/'
                                }
                            ]
                        },
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Are you panster or plotter writer, ana neu',
                                    url: 'https://youtu.be/Sk_7Xfjm-wY'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Write 2 stories using the Pantser method'
                        },
                        {
                            name: 'Write 2 stories using the Plotter method'
                        },
                        {
                            name: 'Write 2 stories using the Planster method (Panster + Plotter)'
                        }
                    ],
                    notes: 'With drawing, there is impromptu and blocking gestures. With animation, there is inbetweening and straight-ahead. Writing as an art form isn\'t much different - there are pansters, plotters, and a little bit of both.'
                },
                {
                    title: 'Structure II',
                    subtitle: 'Adventurous',
                    brief: {
                        name: {
                            text: 'Adventurous Writing Structures',
                            url: '/StorytellingLessons/StructureII'
                        }
                    },
                    references: [
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'The Three-Act Structure in Screenwriting, Jakob Straub',
                                    url: 'https://www.arcstudiopro.com/blog/three-act-structure-in-screenwriting'
                                },
                                {
                                    text: 'How to Use the Hero\'s Journey to Plot Your Story, Dan Schriever',
                                    url: 'https://prowritingaid.com/art/2339/heros-journey.aspx'
                                },
                                {
                                    text: 'What is Dan Harmon\'s Story Circle, Industrial Scripts',
                                    url: 'https://industrialscripts.com/dan-harmons-story-circle/'
                                },
                                {
                                    text: 'The Dan Harmon Story Circle, Jakob Straub',
                                    url: 'https://boords.com/blog/storytelling-101-the-dan-harmon-story-circle'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Write 3 outlines using',
                            sub: [
                                { text: 'The Three-Act Structure' },
                                { text: 'The Hero\'s Journey' },
                                { text: 'The Story Circle' }
                            ]
                        },
                        {
                            name: 'Stretch your imagination',
                            sub: [
                                { text: 'Repeat the above challenge at least 2 more times (9 outlines total)' }
                            ]
                        }
                    ],
                    notes: 'Adventure stories can take on more intricate structures, depending on the narrative and specific elements emphasized. This unit adds to the list several circular structures for writing adventures and stories with greater depth.'
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
            focus: 'Theory III - Places, Settings, & Narration',
            units: [
                {
                    title: 'Places & Settings',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Narration',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Genres',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Structure III',
                    subtitle: 'Advanced',
                    brief: {
                        name: {
                            text: 'Advanced Writing Structures',
                            url: '/StorytellingLessons/StructureIII'
                        }
                    },
                    references: [
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: '7-Point Story Structure, Jason Hamilton',
                                    url: 'https://kindlepreneur.com/7-point-story/'
                                },
                                {
                                    text: 'The Fichtean Curve: A Dorsal Fin of Catastrophe, Robert Reed Smith',
                                    url: 'https://www.dabblewriter.com/articles/writing-with-the-fichtean-curve'
                                },
                                {
                                    text: 'The Ultimate Film Beat Sheet, Aj Detisch',
                                    url: 'https://www.studiobinder.com/blog/save-the-cat-beat-sheet/'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Write 3 outlines using',
                            sub: [
                                { text: 'The Seven-Point Structure' },
                                { text: 'The Fichtean Curve' },
                                { text: 'Save the Cat Beat Sheet' }
                            ]
                        },
                        {
                            name: 'Stretch your imagination',
                            sub: [
                                { text: 'Repeat the above challenge at least 2 more times (9 outlines total)' }
                            ]
                        }
                    ],
                    notes: 'Sometimes a new structure is needed to properly organize one\'s story. The Fichtean Curve is a good example for stories divided into installments or episodes. Save the Cat Beat Sheets were designed for writting screenplays. The 7-Point structure is ideal for stitching bits and peices together into a story.'
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
            focus: 'Mediums - Different ways to present a story',
            units: [
                {
                    title: 'Short Stories',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Comics & Storyboarding',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Screenplays',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Classic & Light Novels',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
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
                challengeHeading: { text: 1, back: 4 },
                title: 0,
                brief: 3
            },
            focus: 'Observation before creation',
            units: [
                {
                    title: 'Movie 1',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Movie 2',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Movie 3',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Movie 4',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
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
            focus: 'Storywriting I - Time to get creative',
            units: [
                {
                    title: 'Workshop I',
                    subtitle: 'Planning',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Workshop II',
                    subtitle: 'Brainstorming',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Workshop III',
                    subtitle: 'Writing',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Workshop IV',
                    subtitle: 'Finishing Up',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
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
            focus: 'Deeper Observations',
            units: [
                {
                    title: 'Movie 1',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Movie 2',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Movie 3',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Movie 4',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
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
            focus: 'Storywriting II - Refining one\'s skills',
            units: [
                {
                    title: 'Workshop I',
                    subtitle: 'Planning',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Workshop II',
                    subtitle: 'Brainstorming',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Workshop III',
                    subtitle: 'Writing',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Workshop IV',
                    subtitle: 'Finishing Up',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
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
            focus: 'Storywriting III - Keep on writing',
            units: [
                {
                    title: 'Workshop I',
                    subtitle: 'Planning',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Workshop II',
                    subtitle: 'Brainstorming',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Workshop III',
                    subtitle: 'Writing',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                },
                {
                    title: 'Workshop IV',
                    subtitle: 'Finishing Up',
                    brief: { name: '' },
                    references: [
                        {
                            category: '',
                            sources: [
                                { text: '' }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: '',
                            sub: [
                                { text: '' }
                            ]
                        }
                    ],
                    notes: ''
                }
            ]
        }
    ]
}
