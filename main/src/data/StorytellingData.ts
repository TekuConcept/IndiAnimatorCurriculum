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
                                },
                                {
                                    text: 'Learn About Beats in Screenwriting, MasterClass',
                                    url: 'https://www.masterclass.com/articles/what-is-a-beat-in-screenwriting'
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
            focus: 'Theory III - Settings And Styles',
            units: [
                {
                    title: 'Places & Settings',
                    brief: {
                        name: {
                            text: 'How To Create Your Story\'s Setting, Andrea R. Cranford',
                            url: 'https://thenarrativearc.org/setting'
                        }
                    },
                    references: [
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'Setting And Sense Of Place, The Creative Penn',
                                    url: 'https://www.thecreativepenn.com/2023/03/14/writing-tips-setting-and-sense-of-place/'
                                },
                                {
                                    text: 'How to Write 3 Types of Settings, reedsy',
                                    url: 'https://blog.reedsy.com/setting-of-a-story/'
                                },
                                {
                                    text: '5 Tips for Choosing a Setting, MasterClass',
                                    url: 'https://www.masterclass.com/articles/understanding-story-setting'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Create 10 story settings',
                            sub: [
                                { text: 'Use the 5 senses' },
                                { text: 'Describe rooms, homes, towns, nature, otherworldy settings, vehicles, ships, etc.' }
                            ]
                        },
                        {
                            name: 'Stretch your imagination',
                            sub: [
                                { text: 'Create 10 more story settings' },
                                { text: 'Try to paint as clear a picture with as few words as possible' }
                            ]
                        }
                    ],
                    notes: 'Learn about the importance of establishing a story\'s place and setting. Explore the three type of setting to consider, namely, the Temporal Setting, the Environmental Setting, and the Individual (or Backdrop) Setting.'
                },
                {
                    title: 'Narration',
                    brief: {
                        name: {
                            text: 'Narration: The Perspectives of Storytelling',
                            url: '/StorytellingLessons/Narration'
                        }
                    },
                    references: [
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'Complete Guide to Different Types of Point of View, MasterClass',
                                    url: 'https://www.masterclass.com/articles/complete-guide-to-point-of-view-in-writing-definitions-and-examples'
                                },
                                {
                                    text: 'Writing Point of View: 1st, 2nd, 3rd & 4th, Dave Chesson',
                                    url: 'https://kindlepreneur.com/point-of-view/'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Write a personal journal',
                            sub: [
                                { text: 'Narrate it in 3 or more points of view' }
                            ]
                        }
                    ],
                    notes: 'Learn about the different perspectives authors may narrate in their stories. Point of view is crucial in storytelling because it shapes the reader\'s understanding, engagement, and connection to the narrative.'
                },
                {
                    title: 'Genres and Themes',
                    brief: {
                        name: {
                            text: 'Exploring Genres and Themes',
                            url: '/StorytellingLessons/Genres'
                        }
                    },
                    references: [
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'The 17 Most Popular Genres In Fiction - And Why They Matter, Amanda Patterson',
                                    url: 'https://www.writerswrite.co.za/the-17-most-popular-genres-in-fiction-and-why-they-matter/'
                                },
                                {
                                    text: 'What Are the Different Genres of Literature, Dan Brown',
                                    url: 'https://www.masterclass.com/articles/what-are-the-different-genres-of-literature-a-guide-to-14-literary-genres'
                                },
                                {
                                    text: 'How to Develop a Theme for Your Story, Dan Brown',
                                    url: 'https://www.masterclass.com/articles/how-to-develop-a-theme-for-your-story'
                                },
                                {
                                    text: '144 Genres and Subgenres for Fiction Writing, Tonya Thompson',
                                    url: 'https://www.servicescape.com/blog/144-genres-and-subgenres-for-fiction-writing'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Write a simple story',
                            sub: [
                                { text: 'Write in 3 or more genres' },
                                { text: 'Explore complimentary genres' },
                                { text: '(Optional) Use the same plot' }
                            ]
                        },
                        {
                            name: 'Stretch your imagination',
                            sub: [
                                { text: 'Write a simple story in a less intuitive genre such as a comedy or a mystery' }
                            ]
                        }
                    ],
                    notes: 'Genres help readers and audiences find stories that align with their preferences and provide a framework for understanding and exploring different narrative styles and themes. Explore the patterns and sciences of genres and themes.'
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
            focus: 'Mediums - Different ways to share a story',
            units: [
                {
                    title: 'Short Stories',
                    brief: {
                        name: {
                            text: 'Writing Simple Short Stories',
                            url: '/StorytellingLessons/ShortStories'
                        }
                    },
                    references: [
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'How to Write a Short Story: The Short Story Checklist, Sean Glatch',
                                    url: 'https://writers.com/how-to-write-a-short-story'
                                },
                                {
                                    text: '(Example) The White Fox, Avril',
                                    url: 'https://avriyll.artstation.com/projects/baVEam'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Write 5 short stories',
                            sub: [
                                { text: 'At least 500 words each' }
                            ]
                        },
                        {
                            name: 'Or write 2000 words combined of flash, sketch, and short stories'
                        }
                    ],
                    notes: 'Short stories are one of the easiest ways to get started with creative fiction and to test out new ideas. A short story is a story with a fully developed theme but significantly shorter and less elaborate than a novel. These stories can range from just a few sentences to around 15,000 words.'
                },
                {
                    title: 'Long Stories',
                    brief: {
                        name: {
                            text: 'Writing Much Longer Stories',
                            url: '/StorytellingLessons/LongStories'
                        }
                    },
                    references: [
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'How to Write a Novel in 10 Steps, Neil Gaiman',
                                    url: 'https://www.masterclass.com/articles/how-to-write-a-novel'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Write a Novelette',
                            sub: [
                                { text: 'At least 7500 words' }
                            ]
                        },
                        {
                            name: 'Or Read a Novella or similar',
                            sub: [
                                { text: 'Identify the genre, theme, character arcs, settings, etc.' },
                                { text: 'Example Literature: "Star Wars Ahsoka" by Dave Filoni et al, "Warriors" by Erin Hunter, etc.' }
                            ]
                        }
                    ],
                    notes: 'Longer stories are classified as either a novelette, novella, or novel depending of word count. These are relatively long works of fiction that require a great deal more investment and creativity. "The Lord of the Rings" and "The Chronicles of Narnia" are popular examples of novel stories.'
                },
                {
                    title: 'Visual Stories',
                    brief: {
                        name: {
                            text: 'Pictures are Worth a Thousand Words',
                            url: '/StorytellingLessons/VisualStories'
                        }
                    },
                    references: [
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'How to Write a Children’s Book in 12 Steps, BookFox',
                                    url: 'https://thejohnfox.com/2019/02/how-to-write-a-childrens-book/'
                                },
                                {
                                    text: 'How to Create a Graphic Novel, Neil Gaiman',
                                    url: 'https://www.masterclass.com/articles/how-to-create-a-graphic-novel'
                                },
                                {
                                    text: 'How to Create a Comic Book, Neil Gaiman',
                                    url: 'https://www.masterclass.com/articles/how-to-create-a-comic-book-step-by-step-guide-for-making-your-own-comics'
                                },
                                {
                                    text: 'How to Make a Storyboard for Film, Jodie Foster',
                                    url: 'https://www.masterclass.com/articles/how-to-make-a-storyboard-for-a-film'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'Prepare to Board! Nancy Beiman',
                                    url: 'https://www.amazon.com/dp/1138070904'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Write 5 comic strips, or...',
                            sub: [
                                { text: 'At least 4 cells each' }
                            ]
                        },
                        {
                            name: 'Write a simple storyboard, or...',
                            sub: [
                                { text: 'At least 12 cells' }
                            ]
                        },
                        {
                            name: 'Write a simple picture book',
                            sub: [
                                { text: 'At least 15 pages' }
                            ]
                        }
                    ],
                    notes: 'Learn how to organize pictures in sequence with the narrative to emphasize what may otherwise be hard to put into words. This unit focuses primarily on using still images. however, narratives may also be told through music, cinema, plays and other mediums.'
                },
                {
                    title: 'Screenplays',
                    brief: {
                        name: {
                            text: 'Writing Scripts and Screenplays',
                            url: '/StorytellingLessons/Screenplays'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'How to write a movie script screenplay using Final Draft, Jason Sherman',
                                    url: 'https://youtu.be/RfpNqgSfpDQ'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'Save the Cat!: The Last Book on Screenwriting You\'ll Ever Need, Blake Snyder',
                                    url: 'https://www.amazon.com/dp/B07BKR4N49'
                                }
                            ]
                        },
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'Formatting a Screenplay, StudioBinder',
                                    url: 'https://www.studiobinder.com/blog/brilliant-script-screenplay-format/'
                                },
                                {
                                    text: 'Glossary of Screenwriting Terms, FinalDraft',
                                    url: 'https://kb.finaldraft.com/s/article/Glossary-of-Screenwriting-Terms'
                                },
                                {
                                    text: 'A Glossary Of Screenwriting Terms & Filmmaking Definitions, Dan Bronzite',
                                    url: 'https://www.movieoutline.com/articles/a-glossary-of-screenwriting-terms-and-filmmaking-definitions.html'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Turn an animated feature film into a screenplay, or...',
                            sub: [
                                { text: 'At least 15 pages' }
                            ]
                        },
                        {
                            name: 'Turn a short story or visual story into a screenplay'
                        }
                    ],
                    notes: 'A screenplay, or script, is a written work by screenwriters for a film, play, or video game. Screenplays can be original works or adaptations from existing pieces of writing. Learn the jargon and formatting for writing screenplays.'
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
                    title: 'Study Unit 1',
                    brief: {
                        name: {
                            text: 'Building Knowledge Through Observation',
                            url: '/StorytellingLessons/Study'
                        }
                    },
                    references: [],
                    challenges: [
                        {
                            name: 'Reverse Engineer a Story',
                            sub: [
                                { text: 'Identify the characters, their traits, and arcs' },
                                { text: 'Identify the various places and settings' },
                                { text: 'Identify the Themes, Conflicts, Narration, and Plot' },
                                { text: 'Determine the Genre' }
                            ]
                        },
                        {
                            name: '(Optional) Create an Outline of the Story'
                        }
                    ],
                    notes: 'Select a favorite work, be it a movie, episode, short story, manga, etc., and watch or read it through. Use what you\'ve learned from writing theory to reverse engineer the work. Observe and reflect upon the author\'s (or director\'s) choice of words, imagery, storytelling techniques, and thought process.'
                },
                {
                    title: 'Study Unit 2',
                    brief: {
                        name: {
                            text: 'Building Knowledge Through Observation',
                            url: '/StorytellingLessons/Study'
                        }
                    },
                    references: [],
                    challenges: [
                        {
                            name: 'Reverse Engineer a Story',
                            sub: [
                                { text: 'Identify the characters, their traits, and arcs' },
                                { text: 'Identify the various places and settings' },
                                { text: 'Identify the Themes, Conflicts, Narration, and Plot' },
                                { text: 'Determine the Genre' }
                            ]
                        },
                        {
                            name: '(Optional) Create an Outline of the Story'
                        }
                    ],
                    notes: 'Select a new work to study or continue the last piece. This unit is a dedicated opportunity to learn from fellow story writers and study how theory is put to practice. Find useful patterns, build a personal mental library of prose, and get into the intuitive thought process for creative writing.'
                },
                {
                    title: 'Study Unit 3',
                    brief: {
                        name: {
                            text: 'Building Knowledge Through Observation',
                            url: '/StorytellingLessons/Study'
                        }
                    },
                    references: [],
                    challenges: [
                        {
                            name: 'Reverse Engineer a Story',
                            sub: [
                                { text: 'Identify the characters, their traits, and arcs' },
                                { text: 'Identify the various places and settings' },
                                { text: 'Identify the Themes, Conflicts, Narration, and Plot' },
                                { text: 'Determine the Genre' }
                            ]
                        },
                        {
                            name: '(Optional) Create an Outline of the Story'
                        }
                    ],
                    notes: 'Select a new work to study or continue the last piece. This unit is a dedicated opportunity to learn from fellow story writers and study how theory is put to practice. Find useful patterns, build a personal mental library of prose, and get into the intuitive thought process for creative writing.'
                },
                {
                    title: 'Study Unit 4',
                    brief: {
                        name: {
                            text: 'Building Knowledge Through Observation',
                            url: '/StorytellingLessons/Study'
                        }
                    },
                    references: [],
                    challenges: [
                        {
                            name: 'Reverse Engineer a Story',
                            sub: [
                                { text: 'Identify the characters, their traits, and arcs' },
                                { text: 'Identify the various places and settings' },
                                { text: 'Identify the Themes, Conflicts, Narration, and Plot' },
                                { text: 'Determine the Genre' }
                            ]
                        },
                        {
                            name: '(Optional) Create an Outline of the Story'
                        }
                    ],
                    notes: 'Select a new work to study or continue the last piece. This unit is a dedicated opportunity to learn from fellow story writers and study how theory is put to practice. Find useful patterns, build a personal mental library of prose, and get into the intuitive thought process for creative writing.'
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
                    title: 'Study Unit 1',
                    brief: {
                        name: {
                            text: 'Building Knowledge Through Observation',
                            url: '/StorytellingLessons/Study'
                        }
                    },
                    references: [],
                    challenges: [
                        {
                            name: 'Reverse Engineer a Story',
                            sub: [
                                { text: 'Identify the characters, their traits, and arcs' },
                                { text: 'Identify the various places and settings' },
                                { text: 'Identify the Themes, Conflicts, Narration, and Plot' },
                                { text: 'Determine the Genre' }
                            ]
                        },
                        {
                            name: '(Optional) Create an Outline of the Story'
                        }
                    ],
                    notes: 'Like the last study term, this term also focuses on studing existing works. This time use the experience gained from the creative writing workshops to perform a deeper study and analysis. Aim for a more concrete understanding of creative writing as a skill.'
                },
                {
                    title: 'Study Unit 2',
                    brief: {
                        name: {
                            text: 'Building Knowledge Through Observation',
                            url: '/StorytellingLessons/Study'
                        }
                    },
                    references: [],
                    challenges: [
                        {
                            name: 'Reverse Engineer a Story',
                            sub: [
                                { text: 'Identify the characters, their traits, and arcs' },
                                { text: 'Identify the various places and settings' },
                                { text: 'Identify the Themes, Conflicts, Narration, and Plot' },
                                { text: 'Determine the Genre' }
                            ]
                        },
                        {
                            name: '(Optional) Create an Outline of the Story'
                        }
                    ],
                    notes: 'Select a new work to study or continue the last piece. This unit is a dedicated opportunity to learn from fellow story writers and study how theory is put to practice. Find useful patterns, build a personal mental library of prose, and get into the intuitive thought process for creative writing.'
                },
                {
                    title: 'Study Unit 3',
                    brief: {
                        name: {
                            text: 'Building Knowledge Through Observation',
                            url: '/StorytellingLessons/Study'
                        }
                    },
                    references: [],
                    challenges: [
                        {
                            name: 'Reverse Engineer a Story',
                            sub: [
                                { text: 'Identify the characters, their traits, and arcs' },
                                { text: 'Identify the various places and settings' },
                                { text: 'Identify the Themes, Conflicts, Narration, and Plot' },
                                { text: 'Determine the Genre' }
                            ]
                        },
                        {
                            name: '(Optional) Create an Outline of the Story'
                        }
                    ],
                    notes: 'Select a new work to study or continue the last piece. This unit is a dedicated opportunity to learn from fellow story writers and study how theory is put to practice. Find useful patterns, build a personal mental library of prose, and get into the intuitive thought process for creative writing.'
                },
                {
                    title: 'Study Unit 4',
                    brief: {
                        name: {
                            text: 'Building Knowledge Through Observation',
                            url: '/StorytellingLessons/Study'
                        }
                    },
                    references: [],
                    challenges: [
                        {
                            name: 'Reverse Engineer a Story',
                            sub: [
                                { text: 'Identify the characters, their traits, and arcs' },
                                { text: 'Identify the various places and settings' },
                                { text: 'Identify the Themes, Conflicts, Narration, and Plot' },
                                { text: 'Determine the Genre' }
                            ]
                        },
                        {
                            name: '(Optional) Create an Outline of the Story'
                        }
                    ],
                    notes: 'Select a new work to study or continue the last piece. This unit is a dedicated opportunity to learn from fellow story writers and study how theory is put to practice. Find useful patterns, build a personal mental library of prose, and get into the intuitive thought process for creative writing.'
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
