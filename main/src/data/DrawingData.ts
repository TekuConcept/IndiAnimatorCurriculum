import { CData } from "./CurriculumData"

export const drawingData: CData = {
    name: 'Drawing',
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
            focus: 'Lines, Shapes, and Feeling',
            units: [
                {
                    title: 'Figure Drawing I',
                    brief: {
                        name: {
                            text: 'Figure Drawing Fundamentals, Proko Premium',
                            url: 'https://www.proko.com/course/figure-drawing-fundamentals'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'How to Draw Gesture',
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
                                text: '30-Days of Croquis French Café Gesture Sessions',
                                url: 'https://croquis.cafe/'
                            }
                        },
                        {
                            name: {
                                text: 'or 12+ hours Friday Evening Figure Drawing',
                                url: 'https://www.youtube.com/watch?v=NujN1ZfhwDc&list=PLVK1154-DZLrCyXFSobZ2SVisLGmmNapd'
                            }
                        }
                    ],
                    notes: 'Learn to draw the propotions of the human body from reference or imagination along with gesture drawing. In the early stages, learning the flow of gesture is the most important detail - it prevents stiffness in one\'s drawings.'
                },
                {
                    title: 'Perspective I',
                    brief: {
                        name: {
                            text: 'Drawabox.com',
                            url: 'https://drawabox.com/'
                        },
                        sub: [
                            {
                                text: 'Getting Started',
                                url: 'https://drawabox.com/lesson/0'
                            },
                            {
                                text: 'Lines, Ellipses, & Boxes',
                                url: 'https://drawabox.com/lesson/1'
                            },
                            {
                                text: 'Forms, Dissections, & Intersections',
                                url: 'https://drawabox.com/lesson/2'
                            },
                            {
                                text: 'Applying Construction to Plants',
                                url: 'https://drawabox.com/lesson/3'
                            }
                        ]
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
                    notes: 'Learn about convergence lines, vanishing points, the horizon, 1-point perspectives, and 2-point perspectives. Drawabox is a dense course and important for one\'s foundation in draftsmanship. If anything, extend the length of this unit and cut the next unit short. The 250 Box Challenge follows Lesson 1, going in to Lesson 2.'
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
                    notes: 'The more you know, the more your see - learn how we see, how we perceive and store visual information. SVSLearn is available through a monthly subscription. Sycra\'s video on "Iterative Drawing" is a great one to learn how to challenge yourself to create variations - whether they\'re great or not.'
                },
                {
                    title: 'Gesture By Example',
                    brief: {
                        name: {
                            text: 'Cartoon Gesture Basics, The Drawing Database',
                            url: 'https://youtu.be/u4VM6jWLkxE'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'How to design an Imaginary Animal Character',
                                    url: 'https://youtu.be/Ehas2j5j6LM'
                                },
                                {
                                    text: 'How to Draw Cartoons',
                                    url: 'https://www.youtube.com/watch?v=OuAlfHiCEgQ&list=PLx2_B35JLXILZZUb7kllvH9unNO9tNPDr'
                                }
                            ]
                        },
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'Gesture Drawing with Aaron Blaise',
                                    url: 'https://creatureartteacher.com/product/gesture-drawing-course-tutorial/'
                                },
                                {
                                    text: 'Deja View, Andreas Deja',
                                    url: 'http://andreasdeja.blogspot.com/2013/'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: '"Gesture Drawing for Animation" by Walt Stanchfield and Leo Brodie',
                                    url: 'https://www.amazon.com/dp/B08KQ58SD3'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: {
                                text: 'Thumbnail 50 or more Favorite Movie Scene Characters'
                            }
                        }
                    ],
                    notes: 'Studying how other artists used gesture to capture their creations will help one gain a better understanding of gesture in animation. Select snapshots from several favorite animated feature films and recreate the images using gesture.'
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
            focus: 'Studying the Head, Color Theory',
            units: [
                {
                    title: 'Anatomy I',
                    subtitle: 'The Head & Face',
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
                    notes: 'Learn to draw the human head in this complete look at the anatomy of the face. Study and compare how animators represent human faces in their works.'
                },
                {
                    title: 'Perspective II',
                    brief: {
                        name: {
                            text: 'Drawabox.com',
                            url: 'https://drawabox.com/'
                        },
                        sub: [
                            {
                                text: 'Construction for Insects',
                                url: 'https://drawabox.com/lesson/4'
                            },
                            {
                                text: 'Construction for Animals',
                                url: 'https://drawabox.com/lesson/5'
                            },
                            {
                                text: 'Construction for Objects',
                                url: 'https://drawabox.com/lesson/6'
                            },
                            {
                                text: 'Construction for Vehicles',
                                url: 'https://drawabox.com/lesson/7'
                            }
                        ]
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
                    notes: 'Learn about 3-point, 4-point, and 5-point perspective as well as atmospheric perspective. For Drawabox\'s assignments, do not focus on finished drawings. The main priority is to exercise one\'s understanding of form and construction. Challenge yourself to begin rotating forms.'
                },
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
                                    url: 'https://schoolism.com/courses/concept-art/fundamentals-of-lighting-sam-nielson'
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
                    notes: 'Learn the basics of color theory, harmony, and how to create good color palettes. Try thumbnailing instead of detailed drawings. You learn more through repeated attempts!'
                },
                {
                    title: 'Animals I',
                    subtitle: 'The Head',
                    brief: {
                        name: {
                            text: 'Drawabox: Drawing Animal Heads',
                            url: 'https://www.youtube.com/watch?v=rMvT04OKBMQ'
                        }
                    },
                    references: [
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: '"The Art of Animal Drawing", Ken Hulgren',
                                    url: 'https://www.amazon.com/dp/1621389820'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: {
                                text: '100 Animal Heads'
                            },
                            sub: [
                                {
                                    text: 'Birds'
                                },
                                {
                                    text: 'Sea-Creatures'
                                },
                                {
                                    text: 'Insects'
                                },
                                {
                                    text: 'Any combination of Land-Animals: cats, dogs, bears, foxes, rhinos, etc'
                                }
                            ]
                        }
                    ],
                    notes: 'Learn the similarities and differences between the human head and the heads of many other creatures, big and small, far and wide. Study and compare how animators represent animal faces in their works.'
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
            focus: 'Studying the Body, Color Theory (Continued)',
            units: [
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
                    notes: 'Learn to draw a simplified skeleton and the human torso along with all its muscles. After going through anatomy, look up some FORCE gesture videos on YouTube. Learn how to exaggerate gesture beyond one\'s reference pose. This is helpful to stretch one\'s imagination and fight stiff drawings.'
                },
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
                    notes: '"How to Draw" is the artist\'s perspective Bible. It\'s an especially good resource for drawing inorganic objects! moderndayjames covers some great topics here - start rotating forms from imagination!'
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
                            category: 'Books',
                            sources: [
                                {
                                    text: '"Manga Character Color Scheme", Teruko Sakurai',
                                    url: 'https://www.amazon.co.jp/dp/B0976X236R/'
                                }
                            ]
                        },
                        {
                            category: 'Schoolism',
                            sources: [
                                {
                                    text: 'Designing w/Color & Light, Nathan Fowkes',
                                    url: 'https://schoolism.com/courses/concept-art/designing-with-color-and-light-nathan-fowkes'
                                },
                                {
                                    text: 'Painting w/Light & Color, Tonko House & Cody Gramstead',
                                    url: 'https://schoolism.com/courses/painting/painting-with-light-and-color-by-tonko-house-cody-gramstad'
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
                    notes: 'Learn about color psychology, solor temperature, the importance of gray, and how to light up your illustrations with a 3-point lighting setup. James Gurney\'s book is the artist\'s Bible on color and light. Challenges should focus on thumbnails - exercise picking colors, schemes, and unique combinations.'
                },
                {
                    title: 'Animals II',
                    subtitle: 'The Torso',
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
                                    url: 'https://moderndayjames.gumroad.com/l/LVPZm'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: {
                                text: '100 Gestures of Animals'
                            },
                            sub: [
                                {
                                    text: 'Various animal types: aquatic, flying, insect, land, etc'
                                }
                            ]
                        }
                    ],
                    notes: 'Learn the similarities and differences between the human body and the bodies of various other creatures. Study and compare how animators represent animals in their works. Aaron Blaise has great character design tips. Pick your favorite animal and follow one of his courses!'
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
            focus: 'Studying the Appendages, Machinery',
            units: [
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
                    notes: 'Learn the anatomy of the human arms and hands, and how to draw them in any angle. The challenges are especially important in this unit. Most artists will agree that hands are difficult. It\'s important to face weaknesses head on.'
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
                                    url: 'https://cubebrush.co/mb/products/1aqgnq/art-school-term-6?ref=marc'
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
                    notes: 'This is a key unit. Familiarize yourself with the techniques James teaches in these videos. Framed Perspective is good for learning how to set a scene.'
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
                    notes: 'Learn the anatomy of the human legs and feet, and how to draw them in any angle. The Challenges here are also important. In addition, try drawing two or more characters interacting with each other - picking things up, fighting, having tea, etc.'
                },
                {
                    title: 'Animals III',
                    subtitle: 'Legs, Tails, & Wings',
                    brief: {
                        name: {
                            text: 'Animal Anatomy - Construction & Basic Anatomy',
                            url: 'https://cubebrush.co/foundationartgroup/products/pzhhbw/animal-anatomy-construction-basic-anatomy?q=animals'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'How to Draw Animal Legs, Jazza',
                                    url: 'https://youtu.be/mIGzhfFRZ7c'
                                }
                            ]
                        },
                        {
                            sources: [
                                {
                                    text: 'The Art of Studying: Animals, Charles Lin',
                                    url: 'https://foundation-patreon.gumroad.com/l/wGDIh'
                                },
                                {
                                    text: 'Draw Animal Limbs',
                                    url: 'https://www.joshuanava.biz/life/an-teco.html'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: {
                                text: '100 gestures of Animals & their Fore Legs, Hind Legs, Tails, Wings, etc.'
                            },
                            sub: [
                                {
                                    text: 'Study a variety of animals - those in the air, sea, and land'
                                },
                                {
                                    text: 'Explore a variety of insects'
                                }
                            ]
                        }
                    ],
                    notes: 'Learn the similarities and differences between human arms and legs and the appendages of various other creatures. Study and compare how animators represent animals in their works. Espectially observe the anatomy of wings, fins, and tails.'
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
            focus: 'Original Characters, Vehicles',
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
                                    url: 'https://schoolism.com/courses/drawing/gesture-drawing-alex-woo'
                                },
                                {
                                    text: 'Fundamentals of Expressive Character Design, Wouter Tulp',
                                    url: 'https://schoolism.com/courses/concept-art/fundamentals-of-expressive-character-design-wouter-tulp'
                                },
                                {
                                    text: 'Expressive Characters, Wouter Tulp',
                                    url: 'https://schoolism.com/courses/concept-art/expressive-characters-wouter-tulp'
                                },
                                {
                                    text: 'Expressive Characters Workout, Wouter Tulp',
                                    url: 'https://schoolism.com/courses/concept-art/expressive-characters-workout-wouter-tulp'
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
                    notes: 'Learn how to create compelling character designs, from idea, sketch, to final design, and see how it\'s done. Try silhouetting for character design (featured in Marco Bucci\'s series) - it\'s a good way to stretch one\'s creative muscles.'
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
                    notes: 'There are two options here: Focus on characters in perspective or inorganic subjects (vehicles). Pick the one prefered as this unit\'s primary focus while familiarizing yourself with the other.'
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
                                    url: 'https://cubebrush.co/mb/products/vfdbq/art-school-term-3?ref=marc'
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
                    notes: 'Learn to draw realistic fabric folds based on logic and observation of clothed human models. Different weights all fold differently. Satin is reflective and light - it creases everywhere. Denim is matte and heavy - the folds are deeper and less frequent.'
                },
                {
                    title: 'Composition & Storytelling II',
                    brief: {
                        name: {
                            text: 'Pictorial Composition, Nathan Fowkes',
                            url: 'https://schoolism.com/courses/concept-art/pictorial-composition-nathan-fowkes'
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
                                    url: 'https://schoolism.com/courses/concept-art/story-driven-illustrations-djamila-knopf'
                                },
                                {
                                    text: 'Lighting for Story & Concept Art, Sam Nielson',
                                    url: 'https://schoolism.com/courses/concept-art/lighting-for-story-and-concept-art-sam-nielson'
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
                    notes: 'Learn about the principles of art and how those can be used to improve composition, then how you can improve storytelling in your art and how important that is. Focus on thumbnailing during the challenge. Optionally pick a favorite and go into more detail.'
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
            focus: 'Drawing Exploration',
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
                    notes: 'Listen to Proko\'s "Draftsmen" podcast, S1E10, "How to Learn Anatomy", and hear their thoughts on Bridgman before determining to learn from his book.'
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
                    notes: 'The moderndayjames videos are based on Krenz Kushart\'s bundle. Make sure to do your rotations correctly - Create the perfect perspective map first, and then retry from imagination.'
                },
                {
                    title: 'Caricatures & Cartoons',
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
                                    url: 'https://schoolism.com/courses/concept-art/creature-anatomy-terryl-whitlatch'
                                },
                                {
                                    text: 'The Art of Caricature, Jason Seiler',
                                    url: 'https://schoolism.com/courses/drawing/the-art-of-caricature-jason-seiler'
                                }
                            ]
                        },
                        {
                            category: 'Domestika',
                            sources: [
                                {
                                    text: 'Dynamic Animal Illustration for Children\'s Stories',
                                    url: 'https://www.domestika.org/en/courses/2704-dynamic-animal-illustration-for-children-s-stories'
                                },
                                {
                                    text: 'Creation of Manga Characters',
                                    url: 'https://www.domestika.org/en/courses/703-creation-of-manga-characters'
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
                                text: '50 Creature Designs'
                            }
                        }
                    ],
                    notes: 'Caricature helps in understanding exaggeration and character design. It is the basis for cartooning and stylized art. Explore stylized, exaggerated, and expressive characters, both human and creature.'
                },
                {
                    title: 'Creature Designs',
                    brief: {
                        name: {
                            text: 'Creature Concept Design Vol.2, Deiv Calviz',
                            url: 'https://cubebrush.co/deivcalviz/products/sstna/creature-concept-design-vol-2'
                        }
                    },
                    references: [
                        {
                            category: 'Schoolism',
                            sources: [
                                {
                                    text: 'Creature Design Vol.1, Deiv Calviz',
                                    url: 'https://cubebrush.co/deivcalviz/products/7rodka/creature-concept-design-thumbnails-to-final'
                                },
                                {
                                    text: 'Alien Character Concept Art, Deiv Calviz',
                                    url: 'https://cubebrush.co/deivcalviz/products/zzxnaw/alien-character-concept-art'
                                }
                            ]
                        },
                        {
                            category: 'Domestika',
                            sources: [
                                {
                                    text: 'Design and Illustration of Fantastical Creatures',
                                    url: 'https://www.domestika.org/en/courses/3495-design-and-illustration-of-fantastical-creatures'
                                },
                                {
                                    text: 'Character Design for Animation',
                                    url: 'https://www.domestika.org/en/courses/1073-character-design-for-animation-with-photoshop'
                                }
                            ]
                        },
                        {
                            category: '21 Draw',
                            sources: [
                                {
                                    text: 'Designing Fun Animal Characters',
                                    url: 'https://www.21-draw.com/course/fun-animal-characters/'
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
                                text: '50 Creature Designs'
                            }
                        }
                    ],
                    notes: 'Explore anthropomorphic and exotic character creations - really stretch the imagination. Learn how to create character and expression sheets for reproducibility and production.'
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
            focus: 'Painting & Environments',
            units: [
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
                                    url: 'https://schoolism.com/courses/concept-art/environment-design-nathan-fowkes'
                                }
                            ]
                        },
                        {
                            category: 'Blogs',
                            sources: [
                                {
                                    text: 'How I Became and Artist, Noah Bradley',
                                    url: 'https://noahbradley.com/how-i-became-an-artist/'
                                },
                                {
                                    text: 'Don\'t Go to Art-School',
                                    url: 'https://noahbradley.com/dont-go-to-art-school/'
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
                                text: 'Options: Create 10 Full Works based on prior thumbnails'
                            }
                        }
                    ],
                    notes: 'Learn the fundamentals behind good environment design, how it\'s applied to create stunning environments, and how 3D can help speed up the process. Art Camp 3 will whip one into shape - don\'t miss it!'
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
                                    url: 'https://schoolism.com/courses/painting/essentials-of-realism-jonathan-hardesty'
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
                    notes: 'Learn how to create works using shape and value beyond the 1-dimensional use of a pen or pencil. Painting Creativity is bred through limitation. Limit works to a defined color palette, no layering, no undo.'
                },
                {
                    title: 'Environment Design II',
                    brief: {
                        name: {
                            text: 'Environment Design Course, James Paick (Gumroad)',
                            url: 'https://gumroad.com/jamespaick'
                        }
                    },
                    references: [
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'Mysterious Scenes from a Dark Fantasy World',
                                    url: 'https://www.amazon.com/dp/475625392X'
                                },
                                {
                                    text: 'Beautiful Scenes from a Fantasy World',
                                    url: 'https://www.amazon.com/dp/4756249663'
                                }
                            ]
                        }
                    ],
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
                    notes: 'Continuing the fundamentals behind good environment design and world building. Focus more on architectural scenes - buildings, structures, sprawling cityscapes, and intricate roadways.'
                },
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
                    notes: 'Select an emphasis: environments, portraits, figures, full scenes, etc, and apply the challenges'
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
            focus: 'Wrapping Up',
            units: [
                {
                    title: 'Prop Design',
                    brief: {
                        name: {
                            text: 'Prop Design, Marc Brunet',
                            url: 'https://cubebrush.co/mb/products/bylkq/prop-design-class'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Analysis, Shape Language, and Sci-Fi Designs, moderndayjames',
                                    url: 'https://youtu.be/crCZEQEgFZ0'
                                },
                                {
                                    text: 'Exteriors and Props, moderndayjames',
                                    url: 'https://youtu.be/tacFAOrKr1E'
                                },
                                {
                                    text: 'How to work like a concept artist, Vizlab Studios',
                                    url: 'https://youtu.be/zKP3BVdNUSA'
                                },
                                {
                                    text: 'Drawing Organics II',
                                    url: 'https://www.youtube.com/watch?v=3zD6Lz91eqI&list=PLcSo15smpR4TYiRHKwUiGR37zd3oDDzJs'
                                }
                            ]
                        },
                        {
                            category: 'Cubebrush ARTSchool',
                            sources: [
                                {
                                    text: 'Term 8, Props Design',
                                    url: 'https://cubebrush.co/mb/products/rfergw/art-school-term-8?ref=marc'
                                },
                                {
                                    text: 'Prop Design, Foundation Arts',
                                    url: 'https://cubebrush.co/foundationartgroup/products/euhaka/prop-design'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Draw 250 props',
                            sub: [
                                {
                                    text: 'Wearables: Travel bags, canteens, necklaces, hair pieces, jewelry, clothes, etc'
                                },
                                {
                                    text: 'Weapons: Bow, spear, blade, axe, club, rifle, etc'
                                },
                                {
                                    text: 'Merchantables: Study, candles, books, scrolls, kitchenware, barrels, food, plants, tools, etc'
                                },
                                {
                                    text: 'Furniture: Windows, doors, chests, curtains, chairs, tables, etc'
                                },
                                {
                                    text: 'Botany: Trees, shrubs, flowers, fungus, crops, etc'
                                },
                                {
                                    text: 'Currency: Coins, notes, gems, etc'
                                }
                            ]
                        }
                    ],
                    notes: 'Learn how to design awesome props for characters, environments, and everything in-between.'
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
                    notes: 'One only becomes a Gi through deliberate practice. Build a mental library of objects, creatures, and environments visualized in three-dimensions. Focus on foreshortening, projection, and camera angle.'
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
                                    url: 'https://cubebrush.co/mb/products/krbba/art-school-term-9?ref=marc'
                                }
                            ]
                        },
                        {
                            category: 'Schoolism',
                            sources: [
                                {
                                    text: 'Digital Painting, Craig Mullins',
                                    url: 'https://schoolism.com/courses/painting/digital-painting-craig-mullins'
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
                    notes: 'Learn to create art for films using a combination of photo material and digital painting. Matte painting is a practice used in concept art to achieve photorealistic paintings quickly.'
                },
                {
                    title: 'Final Project',
                    brief: {
                        name: {
                            text: '"The Skillful Huntsman", Khang Le, et al.',
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
                                    url: 'https://schoolism.com/courses/concept-art/introduction-to-visual-development-victoria-ying'
                                },
                                {
                                    text: 'Painting w/ Light & Color, Dice Tsutsumi & Robert Kondo',
                                    url: 'https://schoolism.com/courses/concept-art/painting-with-light-and-color-dice-tsutsumi'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: {
                                text: '3 Projects'
                            },
                            sub: [
                                {
                                    text: '1 or more environment settings'
                                },
                                {
                                    text: '1 or more character sheets'
                                },
                                {
                                    text: '1 storyboard (five or more panels)'
                                }
                            ]
                        }
                    ],
                    notes: 'This unit is dedicated to challenging onself - utilize all skills built up to this point to create a visual foundation for an animation.'
                }
            ]
        }
    ]
}
