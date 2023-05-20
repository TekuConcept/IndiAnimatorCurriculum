import { CData } from "./CurriculumData"

export const animationData: CData = {
    name: 'Animation',
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
            focus: '12 Animation Principles I',
            units: [
                {
                    title: 'Squash and Stretch',
                    brief: {
                        name: {
                            text: 'Squash & Stretch, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/fundamentals-of-animation/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Squash and Stretch, Aaron Blaise',
                                    url: 'https://youtu.be/si6P0JkR28E'
                                },
                                {
                                    text: 'Squash and Stretch, Alen Becker',
                                    url: 'https://youtu.be/haa7n3UGyDc'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Illusion of Life, Ollie Johnston et al, P.47',
                                    url: 'https://www.amazon.com/dp/0786860707'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate a bouncy ball',
                            sub: [
                                { text: 'bounce continually in place' },
                                { text: 'bounce in place with decay' },
                                { text: 'bounce from left to right' }
                            ]
                        },
                        {
                            name: 'Animate jello jiggling'
                        }
                    ],
                    notes: 'Squash and stetch gives animated characters and objects the illusion of gravity, weight, mass, and flexibility. When using squash and stretch, it\'s important to keep the object\'s volume consistent.'
                },
                {
                    title: 'Weight and Momentum',
                    brief: {
                        name: {
                            text: 'Give your Animation Weight, Aaron Blaise',
                            url: 'https://www.youtube.com/live/vkfXzY_KnJ4?feature=share'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'How to Animate Characters with Weight, AMB Animation Academy',
                                    url: 'https://youtu.be/TPgmJTsYOAs'
                                },
                                {
                                    text: 'How to Animate Weight, AnimSchool',
                                    url: 'https://youtu.be/0x9f21vFqcE'
                                },
                                {
                                    text: 'Understanding Weight',
                                    url: 'https://youtu.be/c0KtAhtV250'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Illusion of Life, Ollie Johnston et al, P.47',
                                    url: 'https://www.amazon.com/dp/0786860707'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate a bowling ball',
                            sub: [
                                { text: 'bounce in place with decay' },
                                { text: 'bounce from left to right' }
                            ]
                        },
                        {
                            name: 'Animate a ping pong ball',
                            sub: [
                                { text: 'bounce in place with decay' },
                                { text: 'bounce from left to right' }
                            ]
                        },
                        {
                            name: 'Animate a falling object',
                            sub: [
                                { text: 'a brick' },
                                { text: 'a feather' },
                                { text: 'a flour bag' }
                            ]
                        }
                    ],
                    notes: 'Take a deeper dive with weight and momentum for different everyday objects. An object in motion is said to have momentum, therefore, an object\'s momentum is dependent on both it\'s speed and mass (or relative weight).'
                },
                {
                    title: 'Anticipation',
                    brief: {
                        name: {
                            text: 'Anticipation, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/fundamentals-of-animation/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Anticipation, Alan Becker',
                                    url: 'https://youtu.be/F8OtE60T8yU'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Illusion of Life, Ollie Johnston et al, P.47',
                                    url: 'https://www.amazon.com/dp/0786860707'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate a flour bag',
                            sub: [
                                { text: 'going to kick a ball' },
                                { text: 'going to throw a ball' }
                            ]
                        },
                        {
                            name: 'Animate a simple cartoon',
                            sub: [
                                { text: 'breathing in to blow really hard' },
                                { text: 'preparing to jumping' }
                            ]
                        }
                    ],
                    notes: 'Anticipation is like a hint to what is about to come next. Before a ball can be launched in a pinball machine, the spring must first be pulled back, and before jumping into the air, one bends their knees and pulls their arms back.'
                },
                {
                    title: 'Staging',
                    brief: {
                        name: {
                            text: 'Staging, Aaron Blaise',
                            url: ''
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Stagin, Alan Becker',
                                    url: 'https://youtu.be/u-SXLaQGg50'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Illusion of Life, Ollie Johnston et al, P.47',
                                    url: 'https://www.amazon.com/dp/0786860707'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate a flour bag',
                            sub: [
                                { text: 'feeling sad' },
                                { text: 'playing with a butterfly or kitten' },
                                { text: 'throwing pebbles at pesky birds'}
                            ]
                        }
                    ],
                    notes: 'Like composition in a drawing or painting, staging is the practice of using action or motion to draw and guide the viewer\'s attention. Too many things happening simultaneously in a scene will make it harder for the viewer to focus on what\'s important.'
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
            focus: '12 Animation Principles II',
            units: [
                {
                    title: 'Straight-Ahead',
                    brief: {
                        name: {
                            text: 'Straight-Ahead, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/fundamentals-of-animation/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Straight Ahead & Pose to Pose, Alan Becker',
                                    url: 'https://youtu.be/v8quCbt4C-c'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Illusion of Life, Ollie Johnston et al, P.47',
                                    url: 'https://www.amazon.com/dp/0786860707'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate a flour bag',
                            sub: [
                                { text: 'turning into a tea cup' },
                                { text: 'turning into a simple cat' }
                            ]
                        },
                        {
                            name: 'Animate TNT exploding'
                        }
                    ],
                    notes: 'Learn the first of the two ways to animate. Straight-ahead animation is ideal for spontinuity such as animating fire, a water-splash, flowing hair, etc. Take care with unwanted volume changes.'
                },
                {
                    title: 'Pose-to-Pose',
                    brief: {
                        name: {
                            text: 'Pose-to-pose, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/fundamentals-of-animation/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Straight Ahead & Pose to Pose, Alan Becker',
                                    url: 'https://youtu.be/v8quCbt4C-c'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Illusion of Life, Ollie Johnston et al, P.47',
                                    url: 'https://www.amazon.com/dp/0786860707'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate a flour bag',
                            sub: [
                                { text: 'Looking up then left to right' },
                                { text: 'Jumping across a large gap' }
                            ]
                        }
                    ],
                    notes: 'Learn the second of the two ways to animate. Pose-to-pose animation is ideal for all planned action such as walking, running, and jumping. Keyframes, breakdowns, and inbetweening are the building blocks of pose-to-pose animation.'
                },
                {
                    title: 'Follow-Through',
                    brief: {
                        name: {
                            text: 'Follow-Through, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/fundamentals-of-animation/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Follow Through & Overlapping Action, Alan Becker',
                                    url: 'https://youtu.be/4OxphYV8W3E'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Illusion of Life, Ollie Johnston et al, P.47',
                                    url: 'https://www.amazon.com/dp/0786860707'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate a balloon with a string moving across the screen'
                        },
                        {
                            name: 'Animate a cat\'s or dog\'s tail wagging back and forth'
                        }
                    ],
                    notes: 'Follow-through is similar to anticipation but comes after the action is finished. Imagine walking with a balloon in hand and then stopping. The follow-through action is the balloon coming to rest.'
                },
                {
                    title: 'Overlapping Action',
                    brief: {
                        name: {
                            text: 'Overlapping Action, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/fundamentals-of-animation/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Follow Through & Overlapping Action, Alan Becker',
                                    url: 'https://youtu.be/4OxphYV8W3E'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Illusion of Life, Ollie Johnston et al, P.47',
                                    url: 'https://www.amazon.com/dp/0786860707'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate a flour bag',
                            sub: [
                                { text: 'Jumping across with a balloon' },
                                { text: 'Jumping across with a cape' },
                                { text: 'Walking with swinging arms' }
                            ]
                        }
                    ],
                    notes: 'Overlapping action describes all parts of an object or being that moves in their own way. When a person walks or runs, their arms and legs both move simultaneously. They may also be holding a ballon, wearing loose, draping clothing, and have long hair waving in the wind.'
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
            focus: '12 Animation Principles III',
            units: [
                {
                    title: 'Slow-In',
                    brief: {
                        name: {
                            text: 'Slow-Ins, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/fundamentals-of-animation/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Slow In and Slow Out, Alen Becker',
                                    url: 'https://youtu.be/fQBFsTqbKhY'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Illusion of Life, Ollie Johnston et al, P.47',
                                    url: 'https://www.amazon.com/dp/0786860707'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate a spoon falling from the table'
                        },
                        {
                            name: 'Animate a standing book falling to its side'
                        },
                        {
                            name: 'Animate a balloon rising upwards'
                        },
                        {
                            name: 'Animate a bead of water sliding down a glass'
                        }
                    ],
                    notes: 'Learn how objects build up momentum over time. When a spoon falls from the table or when a car drives forward from its idle position, their is a gradual increase in speed. More instantaneous starts often result in shorter slow-ins.'
                },
                {
                    title: 'Slow-Out',
                    brief: {
                        name: {
                            text: 'Slow-Outs, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/fundamentals-of-animation/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Slow In and Slow Out, Alen Becker',
                                    url: 'https://youtu.be/fQBFsTqbKhY'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Illusion of Life, Ollie Johnston et al, P.47',
                                    url: 'https://www.amazon.com/dp/0786860707'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate a balloon reaching equilibrium'
                        },
                        {
                            name: 'Animate a rolling ball coming to a stand-still'
                        },
                        {
                            name: 'Animate a ball made of honey melting into a pancake'
                        }
                    ],
                    notes: 'Learn how objects come to a halt over time. When a car puts on the breaks or a balloon comes to a stand-still, there is a gradual decrease in speed. More abrupt halts often result in shorter slow-outs.'
                },
                {
                    title: 'Arcs',
                    brief: {
                        name: {
                            text: 'Arcs, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/fundamentals-of-animation/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Arcs, Alen Becker',
                                    url: 'https://youtu.be/I1_tZ9LhJD4'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Illusion of Life, Ollie Johnston et al, P.47',
                                    url: 'https://www.amazon.com/dp/0786860707'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate a flour bag',
                            sub: [
                                { text: 'Throwing a ball upward' },
                                { text: 'Swinging a bat' }
                            ]
                        },
                        {
                            name: 'Animate the wheels of a steam train'
                        }
                    ],
                    notes: 'Arcs are curved or circular paths taken by an object or action in animation. Unless the object is a machine with linear actuation, the object\'s motion will almost always follow an arc.'
                },
                {
                    title: 'Secondary Action',
                    brief: {
                        name: {
                            text: 'Secondary Action, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/fundamentals-of-animation/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Secondary Action, Alen Becker',
                                    url: 'https://youtu.be/MjBHWw1TbP4'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Illusion of Life, Ollie Johnston et al, P.47',
                                    url: 'https://www.amazon.com/dp/0786860707'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate a flour bag',
                            sub: [
                                { text: 'Juggling objects' },
                                { text: 'Walking with swinging tastles' },
                                { text: 'pushing a door closed' }
                            ]
                        }
                    ],
                    notes: 'Secondary action is a subset of overlapping action. It supports, compliments, or emphasises the main action. Imagine someone sitting at a table (primary action) and pulling a chair up under them to sit (secondary action). The secondary action should not distract from the primary action.'
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
            focus: '12 Animation Principles IV',
            units: [
                {
                    title: 'Timing',
                    brief: {
                        name: {
                            text: 'Timing, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/fundamentals-of-animation/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Timing, Alen Becker',
                                    url: 'https://youtu.be/BarOk2p38LQ'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Illusion of Life, Ollie Johnston et al, P.47',
                                    url: 'https://www.amazon.com/dp/0786860707'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate a flour bag',
                            sub: [
                                { text: 'Watch an object on a slow conveyor belt pass on by' },
                                { text: 'Watch an arrow swiftly dart by' }
                            ]
                        },
                        {
                            name: 'Animate gears',
                            sub: [
                                { text: 'turning at a constant speed' },
                                { text: 'turning back and forth with slow-in and slow-out' }
                            ]
                        }
                    ],
                    notes: 'More frames make for a slower action. Conversely, less frames make for a much faster action. Like with slow-in and slow-out, frame-count may be transitioned for a more dynamic action.'
                },
                {
                    title: 'Exaggeration',
                    brief: {
                        name: {
                            text: 'Exaggeration, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/fundamentals-of-animation/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Exaggeration, Alan Becker',
                                    url: 'https://youtu.be/HfFj-VQKiAM'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Illusion of Life, Ollie Johnston et al, P.47',
                                    url: 'https://www.amazon.com/dp/0786860707'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate a flour bag',
                            sub: [
                                { text: 'Try to tip toe across the floor' },
                                { text: 'Exaggerate the previous animation - crouch deeper, lift feet higher, rock more' }
                            ]
                        },
                        {
                            name: 'Animate another action of choice, and then try exaggerating it more'
                        }
                    ],
                    notes: 'Exaggeration is all about style and keeping things fresh and full of life in an animation. Learn to push the bondaries of what is possible to make animations really pop.'
                },
                {
                    title: 'Solid Drawing',
                    brief: {
                        name: {
                            text: 'Solid Drawing, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/fundamentals-of-animation/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Solid Drawing, Alan Becker',
                                    url: 'https://youtu.be/7An0jukOkCI'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Illusion of Life, Ollie Johnston et al, P.47',
                                    url: 'https://www.amazon.com/dp/0786860707'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate a flour bag',
                            sub: [
                                { text: 'Standing on a rotating pedestal' },
                                { text: 'Rocking on a rotating pedastal' },
                                { text: 'Standing in a simple setting with a dolly-zoom' }
                            ]
                        },
                        {
                            name: 'Animate a camera moving front to back in an arc over a simple cat whisking its tail.'
                        }
                    ],
                    notes: 'Animators should understand the basics of drawing and follow the rules of three-dimensional space. Consider anatomy, weight, volume, balance, light, and shadow when creating lifelike animations.'
                },
                {
                    title: 'Appeal',
                    brief: {
                        name: {
                            text: 'Appeal, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/fundamentals-of-animation/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Appeal, Alan Becker',
                                    url: 'https://youtu.be/_SplEuWp0Yw'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Illusion of Life, Ollie Johnston et al, P.47',
                                    url: 'https://www.amazon.com/dp/0786860707'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate a flour bag getting acquainted with two more different and distinct flour bags',
                            sub: [
                                { text: 'make one bag near-empty' },
                                { text: 'make one bag over-stuffed' },
                                { text: 'add other unique traits' }
                            ]
                        }
                    ],
                    notes: 'Engage your audience by making your animations appealing. This doesn’t mean making them physically attractive necessarily or even likable. But they should be intriguing, interesting, and real enough for the viewer to get attached. Start with strong character development.'
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
            focus: 'Human Body Mechanics',
            units: [
                {
                    title: 'Walk Cycle',
                    brief: {
                        name: {
                            text: 'Bipedal Walk, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/fundamentals-of-animation/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Walk Cycles, moderndayjames',
                                    url: 'https://youtu.be/IViMJyqU9gY'
                                },
                                {
                                    text: 'Walk cycle in 15 steps, IWanttoBeanAnimator',
                                    url: 'https://youtu.be/4Icj7fhPZbs'
                                },
                                {
                                    text: '100 different ways to walk, iqtidar cult',
                                    url: 'https://youtu.be/bh2SU2FkD_Q'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Animator\'s Survival Kit, Richard Williams, P.102',
                                    url: 'https://www.amazon.com/dp/086547897X'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Create at least 3 walk cycles',
                            sub: [
                                { text: 'Loose Walk' },
                                { text: 'Nervous Walk' },
                                { text: 'Injured Walk' },
                                { text: 'Wise walk' }
                            ]
                        }
                    ],
                    notes: 'Learn the basic walk cycle as well as walks with personality. A walk cycle is one of the first things to learn because they are considered the toughest of cycles to get right.'
                },
                {
                    title: 'Run Cycle',
                    brief: {
                        name: {
                            text: 'Bipedal Run, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/fundamentals-of-animation/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'How to Animate Run Cycles, moderndayjames',
                                    url: 'https://youtu.be/nKvBYXzRszw'
                                },
                                {
                                    text: 'How to Animate a Run Cycle, IWanttoBeanAnimator',
                                    url: 'https://youtu.be/LBxvCYBcOH4'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Animator\'s Survival Kit, Richard Williams, P.176',
                                    url: 'https://www.amazon.com/dp/086547897X'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Create at least 3 run cycles',
                            sub: [
                                { text: 'Jogger' },
                                { text: 'Exausted Runner' },
                                { text: 'Marathon Runner' },
                                { text: 'Tom Cruise' }
                            ]
                        }
                    ],
                    notes: 'Learn the mechanics of running and how they differ from walking. For example, with walking, at least one foot is always on the ground, but at some point no feet are on the ground with running.'
                },
                {
                    title: 'Jump Cycle',
                    brief: {
                        name: {
                            text: '"Animator\'s Survival Kit", P.212, Richard Williams',
                            url: 'https://www.amazon.com/dp/086547897X'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Vertical Jump, Pivot Dojo',
                                    url: 'https://youtu.be/hD2auuXYYws'
                                },
                                {
                                    text: 'Vertical Jump: Key Frame Animation, MasahiroUshiyama',
                                    url: 'https://youtu.be/TL1Luzd2od8'
                                }
                            ]
                        },
                        {
                            category: 'Other',
                            sources: [
                                {
                                    text: 'A man high jumping, Eadweard Muybridge',
                                    url: 'https://wellcomecollection.org/works/n6czt55p/images?id=mgve47n7'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Animator\'s Survival Kit, Richard Williams, P.176',
                                    url: 'https://www.amazon.com/dp/086547897X'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Create at least 3 jump cycles',
                            sub: [
                                { text: 'Long Jump' },
                                { text: 'Hop' },
                                { text: 'Trampoline' }
                            ]
                        }
                    ],
                    notes: 'Learn how to use anticipation, action, and follow-through to build a springy jump cycle. Jumping can start from a stand-still or take place in the middle of a running cycle - such as part of a chase scene with walls and other obsticles..'
                },
                {
                    title: 'Crawl Cycle',
                    brief: {
                        name: {
                            text: 'A little girl crawling, Eadweard Muybridge',
                            url: 'https://wellcomecollection.org/works/p59pzk6a/items'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'How to Commando Crawl, Original Strength',
                                    url: 'https://youtu.be/NTiu0pGrrwo'
                                },
                                {
                                    text: 'Army Crawl Exercise 10 Types',
                                    url: 'https://youtu.be/AQaOE6wxO08'
                                },
                                {
                                    text: '50 Ways to Sit, iqtidar cult',
                                    url: 'https://youtu.be/2a05VlIqxuE'
                                },
                                {
                                    text: 'Sit-Stand Reference, Spencer Glen',
                                    url: 'https://youtu.be/mJsX59POBe4'
                                },
                                {
                                    text: 'Lifting the suitcase',
                                    url: 'https://youtu.be/vAWoLHTR6LY'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Create at least 3 crawling cycles',
                            sub: [
                                { text: 'Army Crawl' },
                                { text: 'Drag' },
                                { text: 'Hands and Knees' }
                            ]
                        }
                    ],
                    notes: 'The three fundamental cycles to learn are walking, running, and jumping. With these cycles, the characters are in an upright position. An army-crawl explores character locomotion in the laying down position. Alternatively explore sitting, standing, lifting, carrying, or throwing, etc.'
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
            focus: 'Animal Body Mechanics',
            units: [
                {
                    title: 'Walk Cycle',
                    brief: {
                        name: {
                            text: 'Four Legged Walk Cycle, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/how-to-animate-a-four-legged-walk-cycle/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Male Lion Walking, WildestKrugerSightings',
                                    url: 'https://youtu.be/-QnyACx936I'
                                },
                                {
                                    text: 'Chickens, BackYardChickens',
                                    url: 'https://youtu.be/70IqKloH-mw'
                                },
                                {
                                    text: 'Fox Walking, SuansWildlifeVideos',
                                    url: 'https://youtu.be/59fRhY0DneQ'
                                }
                            ]
                        },
                        {
                            category: 'Other',
                            sources: [
                                {
                                    text: 'A Tiger Walking, Eadweard Muybridge',
                                    url: 'https://wellcomecollection.org/works/g67xc4c3/images?id=vhe783t3'
                                },
                                {
                                    text: 'A Bull Walking, Eadweard Muybridge',
                                    url: 'https://wellcomecollection.org/works/b4yy8a7c/images?id=rchg5dmu'
                                },
                                {
                                    text: 'A Goat Walking, Eadweard Muybridge',
                                    url: 'https://wellcomecollection.org/works/j9utgadj/images?id=uthxcwwz'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Create walk cycles for 3 or more different animals',
                            sub: [
                                { text: 'Big & Little Cats' },
                                { text: 'Wolves, Dogs, & Foxes' },
                                { text: 'Bears' },
                                { text: 'Chickens' }
                            ]
                        }
                    ],
                    notes: 'Learn about quadruped and winged walk cycles in animals. Explore how a tiger, badger, and chicken walk differently from each other as well as from a human being. Also observe the order for quadrupeds\'s foot movement - how do their front paws move in relation to their hind paws?'
                },
                {
                    title: 'Run Cycle',
                    brief: {
                        name: {
                            text: 'Four Legged Run Cycle, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/how-to-animate-a-four-legged-run/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Running of the Quail, 23950',
                                    url: 'https://youtu.be/HHLOeNT511E'
                                },
                                {
                                    text: 'Mink running away with corn, Jay D',
                                    url: 'https://youtu.be/40Kqufckxvo'
                                },
                                {
                                    text: 'Running cat - slow motion, JMC video',
                                    url: 'https://youtu.be/XVO9CS8D4hQ'
                                },
                                {
                                    text: 'Slow motion dog running, Liam M',
                                    url: 'https://youtu.be/CoL8Gtvxfl0'
                                }
                            ]
                        },
                        {
                            category: 'Other',
                            sources: [
                                {
                                    text: 'A Dog Running, Eadweard Muybridge',
                                    url: 'https://wellcomecollection.org/works/kskuxjd5/images?id=hqcrj99m'
                                },
                                {
                                    text: 'A Cat Running, Eadweard Muybridge',
                                    url: 'https://wellcomecollection.org/works/y6rt665e/images?id=gbdcfbqj'
                                },
                                {
                                    text: 'An Ostritch Running, Eadweard Muybridge',
                                    url: 'https://wellcomecollection.org/works/wgzwr46n/images?id=fyyf463r'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Create run cycles for 3 or more animals',
                            sub: [
                                { text: 'Big & Little Cats' },
                                { text: 'Wolves, Dogs, & Foxes' },
                                { text: 'Farrets, Minks, & Rodents' },
                                { text: 'Quails, Chickens, & Penguins' }
                            ]
                        }
                    ],
                    notes: 'Learn about quadruped and winged creatures on the run or in a chase. Study the cheetah in a chase, a rabbit trying to escape, or quails scurrying under the brush.'
                },
                {
                    title: 'Jump Cycle',
                    brief: {
                        name: {
                            text: 'Physics & Timing of an Animated Jump, Aaron Blaise',
                            url: 'https://www.youtube.com/live/wb4oiCfinsQ?feature=share'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Rabbit jump in slow motion, Uzair',
                                    url: 'https://youtube.com/shorts/6lEzBDUv4Ns?feature=share'
                                },
                                {
                                    text:  'Bird hopping slow motion, AliasAnimo',
                                    url: 'https://youtu.be/JnulNraufvY'
                                },
                                {
                                    text: 'Kumping cat through hoop, CatPusic',
                                    url: 'https://youtu.be/rNXUbEdhJwg'
                                },
                                {
                                    text: 'Frog jumps in slow motion, NationalGeographic',
                                    url: 'https://youtu.be/yKpJElwama8'
                                }
                            ]
                        },
                        {
                            category: 'Other',
                            sources: [
                                {
                                    text: 'A Kangaroo Jumping, Eadweard Muybridge',
                                    url: 'https://wellcomecollection.org/works/t8ed6wtj/images?id=qcyfnerm'
                                },
                                {
                                    text: 'Two Deer Jumping, Eadweard Muybridge',
                                    url: 'https://wellcomecollection.org/works/s6eapwr2/images?id=w7szkgcn'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Create jump cycles for 3 or more animals',
                            sub: [
                                { text: 'Bunnies' },
                                { text: 'Kangaroo & Impala' },
                                { text: 'Frogs' },
                                { text: 'Finches, Swallows, & Small Birds' },
                                { text: 'Jumping Spiders, Crickets, & Locust' }
                            ]
                        }
                    ],
                    notes: 'Learn about quadruped and winged creatures springing from the ground. Study how the cat pounces up to snatch the curious toy, how a frog leaps from pad to pad, or how a finch, swallow, or other small bird bounces from branch to branch. A jumping spider may be another interesting study.'
                },
                {
                    title: 'Swim & Flight Cycle',
                    brief: {
                        name: {
                            text: 'The Mechanics of Bird Flight',
                            url: 'https://youtu.be/2FR982O37dw'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Swimming with dolphins, Scenic Relaxation',
                                    url: 'https://youtu.be/UV704FOSDjg'
                                },
                                {
                                    text: 'How snakes move, BBC Studios',
                                    url: 'https://youtu.be/zEto1-ZTbd4'
                                },
                                {
                                    text: 'Hummingbirds in fligh, Peter Del',
                                    url: 'https://youtu.be/_u5lgo8kAgQ'
                                },
                                {
                                    text: 'Amazing flight with birds, VolerAvecLesOiseaux',
                                    url: 'https://youtu.be/owiwCIhc0I0'
                                }
                            ]
                        },
                        {
                            category: 'Other',
                            sources: [
                                {
                                    text: 'A Cackatoo Flying, Eadweard Muybridge',
                                    url: 'https://wellcomecollection.org/works/d35vccx2/images?id=g44k62f6'
                                },
                                {
                                    text: 'A Parrot Flying, Eadweard Muybridge',
                                    url: 'https://wellcomecollection.org/works/u44wbz8d/images?id=t3zcb4he'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate 1 or more land creatures',
                            sub: [
                                { text: 'Slithering Snakes' },
                                { text: 'Inchworms, Snails, etc' }
                            ]
                        },
                        {
                            name: 'Animate 2 or more swimming fish',
                            sub: [
                                { text: 'Whales, Dolphins, & Sharks' },
                                { text: 'Coral Reaf Fish' },
                                { text: 'Jellyfish, etc' }
                            ]
                        },
                        {
                            name: 'Animate 2 or more flying birds',
                            sub: [
                                { text: 'Owls, Hawks, Hummingbirds, etc' }
                            ]
                        }
                    ],
                    notes: 'Learn about other forms of create locomotion such as swimming, flying, slithering, or creeping. Explore the wales, sharks, and other fish of the sea. Explore Owls, Ducks, and other birds of the air. Explored snakes on the ground. Also consider other creatures like jellyfish, snails, etc.'
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
            focus: 'Planning Animated Scenes',
            units: [
                {
                    title: 'Storyboarding',
                    brief: {
                        name: {
                            text: 'The Art of the Storyboard, Lyndon Ruddy',
                            url: 'https://creatureartteacher.com/product/storyboard-course-with-lyndon-ruddy/'
                        }
                    },
                    references: [
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'Storyboarding for Feature Animation',
                                    url: 'https://schoolism.com/courses/drawing/storyboarding-for-feature-animation-alessandra-sorrentino'
                                },
                                {
                                    text: 'Introduction to Storyboarding for Animated Films, Petra Popescu',
                                    url: 'https://www.domestika.org/en/courses/3448-introduction-to-storyboarding-for-animated-films'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'Prepare to Board! Nancy Beiman',
                                    url: 'https://www.amazon.com/dp/1138070904'
                                },
                                {
                                    text: 'Studio Ghibli Storyboard: My Neighbor Totoro, Miyazaki Hayao',
                                    url: 'https://www.ebay.com/itm/403762281378'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Draft 2 or more storyboard skits',
                            sub: [
                                { text: 'At least 4-6 panels each' },
                                { text: 'Should tell a brief story' },
                                { text: 'Focus on action and expression more than dialog - imagine this is a silent film' }
                            ]
                        }
                    ],
                    notes: 'Learn to create storyboards that capture key moments of an animated scene. Understand how, when, and why to move the camera, framing, composition, and mood, eye-trace, and various other tips and techniques.'
                },
                {
                    title: 'Layouts',
                    brief: {
                        name: {
                            text: 'Animation Layout 101, Dong Chang',
                            url: 'https://youtu.be/qzwdYEOEbAA'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Animation Layout 102, Dong Chang',
                                    url: 'https://youtu.be/WHk4bAeMGR0'
                                },
                                {
                                    text: 'Setting the Scene: The Art & Evolution of Animation Layout, Nice Moves',
                                    url: 'https://www.youtube.com/live/DuHaAxN6M7g?feature=share'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: '"Setting the Scene: The Art & Evolution of Animation Layout", Fraser MacLean',
                                    url: 'https://www.abebooks.com/book-search/title/setting-scene-art-evolution/author/maclean-fraser/'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Select a storyboard from the previous unit (or create one new)',
                            sub: [
                                { text: 'Create 1 or more backdrops / settings where the action will take place' },
                                { text: 'Explore different camera angles' },
                                { text: 'Utilize the principles of staging and appeal' }
                            ]
                        }
                    ],
                    notes: 'Learn the process of conceptualizing environments based on the story of the animation and adapting it to the stylistic choices of the film. Think of layout like setting up the stage for the actors and effects.'
                },
                {
                    title: 'Thumbnailing & Blocking',
                    brief: {
                        name: {
                            text: 'The Importance of Thumbnailing, Aaron Blaise',
                            url: 'https://youtu.be/EQ8q__Fd-F0'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Animation Blocking + Finding Key Poses, SirWadeNeistadt',
                                    url: 'https://youtu.be/0CQJkeLfono'
                                },
                                {
                                    text: 'Animation Blocking - You are doing it wrong, Jean-DenisHaas',
                                    url: 'https://youtu.be/xJ7hmvbl_1c'
                                },
                                {
                                    text: 'How to animate with thumbnail sketches, Pixi-Gags',
                                    url: 'https://youtu.be/qmwv1Uf2xh8'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Continue with the previous storyboard (or start from scratch)',
                            sub: [
                                { text: 'Thumbnail and block-in the action portrayed' },
                                { text: 'Utilize the principle of staging and appeal' }
                            ]
                        }
                    ],
                    notes: 'Learn how thumbnailing can be used to quickly capture variations of an action or idea. Also learn how to block out key poses and placement of characters and props in a given shot or scene.'
                },
                {
                    title: 'Rotoscoping',
                    brief: {
                        name: {
                            text: 'Realistic Animation - How to Rotoscope, The Virtual Instructor',
                            url: 'https://youtu.be/B_WAQWJOj4Q'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'The trick that made animation realistic, Vox',
                                    url: 'https://youtu.be/IS1hCSsmH1E'
                                },
                                {
                                    text: 'Is Rotoscoping Cheating?, Howard Wimshurst',
                                    url: 'https://youtu.be/rT1uINLh-M4'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Find a live-action clip or record one of your own',
                            sub: [
                                { text: 'Trace over the actors frame by frame' },
                                { text: 'Adapt one of your original characters to the motion' }
                            ]
                        },
                        {
                            name: 'Create keyframes and breakdowns from the clip and draw the inbetweens by hand',
                            sub: [
                                { text: 'This will preserve some of the desired natural error' }
                            ]
                        }
                    ],
                    notes: 'Learn about rotoscoping and how it can help accelerate the animation process. Rotoscoping should be used with care though. Rotoscoped footage may enter the uncanny valley of unease when drawn "too perfectly" - the human eye is really good at recognizing the subtle nuances!'
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
            focus: 'Acting and Performance',
            units: [
                {
                    title: 'Acting',
                    brief: {
                        name: {
                            text: 'Essential Acting Lesson for Beginners, Acting Career Center',
                            url: 'https://youtu.be/GGl9Wri70aQ'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'How to Animate Character Acting, AMB Animation Academy',
                                    url: 'https://youtu.be/xE2-9Wup32A'
                                },
                                {
                                    text: 'Monologue from Song Lyrics, Acting Career Center',
                                    url: 'https://youtu.be/eN7NjYL3NdQ'
                                },
                                {
                                    text: 'How to create 100 distinctly different voices, ImproveYourVoice',
                                    url: 'https://youtu.be/FVmAEezr6ao'
                                }
                            ]
                        },
                        {
                            category: 'Online',
                            sources: [
                                {
                                    text: 'Acting Techniques for Effective Communication, Ivo Müller',
                                    url: 'https://www.domestika.org/en/courses/4377-acting-techniques-for-effective-communication'
                                },
                                {
                                    text: 'Samuel L Jackson Teaches Acting',
                                    url: 'https://www.masterclass.com/classes/samuel-l-jackson-teaches-acting'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Rehearse 5 or more dramatized scenes',
                            sub: [
                                { text: 'Thinking Out Loud' },
                                { text: 'Problem Solving' },
                                { text: 'Businessman' },
                                { text: 'Outlaw & Bounty Hunter' },
                                { text: 'Hero & Villain' }
                            ]
                        }
                    ],
                    notes: 'Every aniator is also an actor. Learn the art of taking on the personality and character traits of another and translating them to a previously inanimate object. This will create more believable characters with real feeling in the scene.'
                },
                {
                    title: 'Body Language',
                    brief: {
                        name: {
                            text: 'Charlie Chaplin Comedy',
                            url: 'https://youtu.be/6Lsil8253GI'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'One Week, Buster Keaton',
                                    url: 'https://youtu.be/Xd6ddOlbKp8'
                                },
                                {
                                    text: 'Paperman, Walt Disney',
                                    url: 'https://youtu.be/XrqSF2OOz_M'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'The Animator\'s Survival Kit, Richard Williams, P.324',
                                    url: 'https://www.amazon.com/dp/086547897X'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Draw 3 or more ways to represent various bodily expressions',
                            sub: [
                                { text: 'Joy, Surprise, Happiness, etc' },
                                { text: 'Anger, Fear, Sadness, etc' },
                                { text: 'Romance, Hunger, Sleepiness, etc' }
                            ]
                        }
                    ],
                    notes: 'Body languages makes up about 50% of everyday communication. Over-exaggerating expressions and body language is very important in animation because it creates more relatable characters. Study the body language behind the bots from Wall-E and the emotions from Inside-Out.'
                },
                {
                    title: 'Facial Expressions',
                    brief: {
                        name: {
                            text: 'Creating Compelling Characters, Laurel Austin',
                            url: 'https://youtu.be/lA5HG8Q4sKg?t=1901'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Drawing Simple Clear Facial Expressions, Aaron Blaise',
                                    url: 'https://youtu.be/TYa-qmL6XUs'
                                },
                                {
                                    text: 'Drawing Genuine Facial Expressions, Toniko Pantoja',
                                    url: 'https://youtu.be/BNUW_POtWEI'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'Draw Manga Faces for Expressive Characters, Hosoi Aya',
                                    url: 'https://www.amazon.com/dp/1440337284'
                                },
                                {
                                    text: 'Drawing Facial Expressions, NextCreator Henshubu',
                                    url: 'https://www.amazon.com/dp/4805315628'
                                },
                                {
                                    text: 'Facial Expressions: A Visual Reference for Artists, Mark Simon',
                                    url: 'https://www.amazon.com/dp/0823016714'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Draw 3 or more ways to represent various facial expressions',
                            sub: [
                                { text: 'Joy, Surprise, Happiness, etc' },
                                { text: 'Anger, Fear, Sadness, etc' },
                                { text: 'Romance, Hunger, Sleepiness, etc' }
                            ]
                        }
                    ],
                    notes: 'As a subset up body language, facial expressions also create more appealing characters. Study a variety of facial expressions, both positive and negative, and how to blend them to create new expressions.'
                },
                {
                    title: 'Line of Action',
                    brief: {
                        name: {
                            text: 'Life Drawing - Line of Action, Josh Papaleo',
                            url: 'https://youtu.be/BNP5V8nGxRc'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Finding the Gesture and Line of Action, Aaron Blaise',
                                    url: 'https://youtu.be/6mrhW6REKNQ'
                                },
                                {
                                    text: 'How to Push Your Animation Poses, AnimSchool',
                                    url: 'https://youtu.be/WWVD7pwDpJA'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate 5 or more actions using only a single per actor',
                            sub: [
                                { text: 'Tugging a Big Create' },
                                { text: 'Hammering a Nail' },
                                { text: 'Throwing a Ball' },
                                { text: '2-Actor Fight' }
                            ]
                        }
                    ],
                    notes: 'The Line of Action is synonymous to \'Gesture I\' in drawing. It is the basis for rhythm, simplicity, and directness in animation. Similar to how well designed characters can be distinguished by their silhouettes, well planned action can be distinguished by the line of action.'
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
            focus: 'Special Topics',
            units: [
                {
                    title: 'Dialog & Lip Syncing',
                    brief: {
                        name: {
                            text: 'Acting for Animation, Aaron Blaise',
                            url: 'https://creatureartteacher.com/product/acting-for-animation-course/'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'How to Animate Dialogue, Lip Sync',
                                    url: 'https://youtu.be/b8OAlOy6QNU'
                                },
                                {
                                    text: 'How I approach dialogue in animation, Toniko Pantoja',
                                    url: 'https://youtu.be/-IRHVx5zBD0?t=32'
                                },
                                {
                                    text: 'Simple Anime Lip-Sync, Dong Chang',
                                    url: 'https://youtu.be/Y_0qMq3wmVc'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Find or record a line of dialog',
                            sub: [
                                { text: 'Thumnail and block in the character acting to the dialog' },
                                { text: 'Exaggerate the expression of emotion in the body and face' },
                                { text: 'Time and shape the mouth with respect to the words spoken' },
                                { text: 'Utilized all the units learned up to this point' }
                            ]
                        }
                    ],
                    notes: 'In Eastern animation, voice actors are recorded post-animation. Lip syncing is not a priority for the style. Things are kept simple. In Western animation, voice actors are recorded prior. Expressions and lip sync have higher priority, creating more expressive characters, but at the cost of more work.'
                },
                {
                    title: 'Effects I',
                    subtitle: 'Particles',
                    brief: {
                        name: {
                            text: 'Animating Traditional Smoke and Dust FX, Stylus Rumble',
                            url: 'https://youtu.be/7EQIlwxcBco'
                        }
                    },
                    references: [
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'Effects Drawing Encyclopedia, Studio Hard Deluxe',
                                    url: 'https://www.amazon.co.jp/dp/B07C8CR99J'
                                },
                                {
                                    text: 'Animation Effects Drawing, Toru Yoshida',
                                    url: 'https://www.amazon.com/dp/4862463401'
                                },
                                {
                                    text: 'Animation Effects Drawing Techniques, Taakashi Hashimoto',
                                    url: 'https://www.amazon.com/dp/4768312276'
                                },
                                {
                                    text: 'Elemental Magic, Volume I: The Art of Special Effects Animation',
                                    url: 'https://www.amazon.com/dp/0240811631'
                                },
                                {
                                    text: 'Elemental Magic, Volume II: The Technique of Special Effects Animation',
                                    url: 'https://www.amazon.com/dp/0240814797'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate 3 or more particle effects',
                            sub: [
                                { text: 'Dust blown from a fireplace' },
                                { text: 'Sparks flying from a small electric arc' },
                                { text: 'Sparkling treasure' },
                                { text: 'Bubbles rising in a fish tank' },
                                { text: 'Fireworks' }
                            ]
                        }
                    ],
                    notes: 'Broadly defined, particles may be as small as dust or as big as the debris carried away by a tornado. Explore various particle effects such as fire embers, electrical sparks, fairy dust, and even the twinkling of gems.'
                },
                {
                    title: 'Effects II',
                    subtitle: 'Water',
                    brief: {
                        name: {
                            text: 'Before you Animate Water, Howard Wimshurst',
                            url: 'https://youtu.be/MeQLbPW1S2Q'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'How we made this crazy waterbending animation, Howard Wimshurst',
                                    url: 'https://youtu.be/SrUCZvS-Ih4'
                                },
                                {
                                    text: 'Simplifying a traditional splash, Stylus Rumble',
                                    url: 'https://youtu.be/sSEofrhQpNU'
                                },
                                {
                                    text: 'Water Rings, Stylus Rumble',
                                    url: 'https://youtu.be/or7oZ3JCOWI'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'Effects Drawing Encyclopedia, スタジオ・ハードデラックス',
                                    url: 'https://www.amazon.co.jp/dp/B07C8CR99J'
                                },
                                {
                                    text: 'Anime Effects Drawing, Toru Yoshida',
                                    url: 'https://www.ebay.com/itm/202401521888'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate 3 or more water effects',
                            sub: [
                                { text: 'A drop of water sliding down the side of a glass' },
                                { text: 'A water splash with ripples' },
                                { text: 'A running water faucet' }
                            ]
                        }
                    ],
                    notes: 'Learn about the dynamics of water. Explore how a drop of water splashes and creates ripples. Explore how a river flows and the dynamics of water streams. Study not only the shape but also the change in value over time.'
                },
                {
                    title: 'Effects III',
                    subtitle: 'Fire',
                    brief: {
                        name: {
                            text: 'Before you Animate Fire, Howard Wimshurst',
                            url: 'https://youtu.be/EyWpeexlqp8'
                        }
                    },
                    references: [
                        {
                            category: 'YouTube',
                            sources: [
                                {
                                    text: 'Animating Fire, Micah Buzan',
                                    url: 'https://youtu.be/BLeKEfn_zRg'
                                }
                            ]
                        },
                        {
                            category: 'Books',
                            sources: [
                                {
                                    text: 'Effects Drawing Encyclopedia, スタジオ・ハードデラックス',
                                    url: 'https://www.amazon.co.jp/dp/B07C8CR99J'
                                },
                                {
                                    text: 'Anime Effects Drawing, Toru Yoshida',
                                    url: 'https://www.ebay.com/itm/202401521888'
                                }
                            ]
                        }
                    ],
                    challenges: [
                        {
                            name: 'Animate 3 or more fire effects',
                            sub: [
                                { text: 'Sparklers' },
                                { text: 'A Flickering Candle Flame' },
                                { text: 'A campfire or fire in a fireplace' }
                            ]
                        }
                    ],
                    notes: 'Learn about the dynamics of fire. Explore how a candle flame with flicker, bend, and lean. Explore the dynamics of a camp or bonfire, how the flames stretch upward, warp, separate, and vanish. Consider the value or brightness in tandem with the shape.'
                }
            ]
        }
    ]
}
