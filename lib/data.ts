export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  topicId: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  questions: Question[];
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
  quizCount: number;
}

export const topics: Topic[] = [
  {
    id: "investing",
    name: "Investing",
    description: "Master the fundamentals of investing and growing wealth",
    icon: "📈",
    gradient: "from-green-400 to-emerald-600",
    quizCount: 2,
  },
  {
    id: "psychology",
    name: "Psychology",
    description: "Explore human behavior, cognition, and mental processes",
    icon: "🧠",
    gradient: "from-purple-400 to-violet-600",
    quizCount: 1,
  },
  {
    id: "philosophy",
    name: "Philosophy",
    description: "Examine fundamental questions about existence and knowledge",
    icon: "🤔",
    gradient: "from-blue-400 to-indigo-600",
    quizCount: 1,
  },
  {
    id: "history",
    name: "History",
    description: "Journey through pivotal moments that shaped our world",
    icon: "🏛️",
    gradient: "from-amber-400 to-orange-600",
    quizCount: 1,
  },
  {
    id: "science",
    name: "Science",
    description: "Discover the principles governing our natural world",
    icon: "🔬",
    gradient: "from-cyan-400 to-blue-600",
    quizCount: 1,
  },
  {
    id: "economics",
    name: "Economics",
    description: "Understand markets, trade, and economic principles",
    icon: "💰",
    gradient: "from-yellow-400 to-amber-600",
    quizCount: 1,
  },
  {
    id: "literature",
    name: "Literature",
    description: "Explore great works and authors across the ages",
    icon: "📚",
    gradient: "from-rose-400 to-pink-600",
    quizCount: 1,
  },
  {
    id: "health",
    name: "Health & Nutrition",
    description: "Learn science-backed health and nutrition principles",
    icon: "🥗",
    gradient: "from-lime-400 to-green-600",
    quizCount: 1,
  },
  {
    id: "technology",
    name: "Technology",
    description: "Explore innovations shaping the future of humanity",
    icon: "💻",
    gradient: "from-sky-400 to-cyan-600",
    quizCount: 1,
  },
  {
    id: "ancient-civilizations",
    name: "Ancient Civilizations",
    description: "Uncover the secrets of history's greatest civilizations",
    icon: "🗿",
    gradient: "from-stone-400 to-amber-700",
    quizCount: 1,
  },
];

export const quizzes: Quiz[] = [
  {
    id: "investing-basics",
    topicId: "investing",
    title: "Investing Fundamentals",
    description: "Test your knowledge of core investing concepts",
    difficulty: "Beginner",
    questions: [
      {
        id: "inv-1",
        question: "What does 'diversification' mean in investing?",
        options: [
          "Putting all money in one stock",
          "Spreading investments across different assets to reduce risk",
          "Investing only in bonds",
          "Keeping all money in cash",
        ],
        correctAnswer: 1,
        explanation:
          "Diversification means spreading your investments across various asset classes, sectors, and geographies to reduce overall portfolio risk.",
      },
      {
        id: "inv-2",
        question: "What is compound interest?",
        options: [
          "Interest paid only on the principal",
          "A fixed fee charged by banks",
          "Interest earned on both principal and previously earned interest",
          "A type of stock dividend",
        ],
        correctAnswer: 2,
        explanation:
          "Compound interest is interest calculated on the initial principal as well as on accumulated interest, allowing wealth to grow exponentially over time.",
      },
      {
        id: "inv-3",
        question: "What is a P/E ratio?",
        options: [
          "Profit to Equity ratio",
          "Price to Earnings ratio",
          "Performance to Expense ratio",
          "Portfolio to Equity ratio",
        ],
        correctAnswer: 1,
        explanation:
          "The P/E (Price to Earnings) ratio compares a company's stock price to its earnings per share, helping investors gauge if a stock is overvalued or undervalued.",
      },
      {
        id: "inv-4",
        question: "What is an index fund?",
        options: [
          "A fund that beats the market",
          "A fund managed by active traders",
          "A fund that tracks a market index like the S&P 500",
          "A government savings account",
        ],
        correctAnswer: 2,
        explanation:
          "An index fund passively tracks a market index (like the S&P 500), offering broad market exposure with low fees and consistent market returns.",
      },
      {
        id: "inv-5",
        question: "What does 'bull market' mean?",
        options: [
          "A market with falling prices",
          "A market dominated by agricultural stocks",
          "A market experiencing high volatility",
          "A market with rising prices and investor optimism",
        ],
        correctAnswer: 3,
        explanation:
          "A bull market refers to a period of rising stock prices, typically 20% or more from recent lows, accompanied by investor confidence and economic growth.",
      },
    ],
  },
  {
    id: "investing-advanced",
    topicId: "investing",
    title: "Advanced Investment Strategies",
    description: "Challenge yourself with advanced investing concepts",
    difficulty: "Advanced",
    questions: [
      {
        id: "inva-1",
        question: "What is the Sharpe Ratio used for?",
        options: [
          "Measuring a company's debt",
          "Calculating dividend yield",
          "Measuring risk-adjusted return of an investment",
          "Predicting future stock prices",
        ],
        correctAnswer: 2,
        explanation:
          "The Sharpe Ratio measures an investment's return relative to its risk, calculated as excess return divided by standard deviation. Higher values indicate better risk-adjusted performance.",
      },
      {
        id: "inva-2",
        question: "What is 'beta' in portfolio theory?",
        options: [
          "The expected return of a portfolio",
          "A measure of a stock's volatility relative to the market",
          "The risk-free rate of return",
          "The dividend growth rate",
        ],
        correctAnswer: 1,
        explanation:
          "Beta measures a stock's volatility relative to the overall market. A beta of 1 means the stock moves with the market; above 1 means more volatile, below 1 less volatile.",
      },
      {
        id: "inva-3",
        question: "What is dollar-cost averaging?",
        options: [
          "Investing a lump sum at market highs",
          "Investing fixed amounts at regular intervals regardless of price",
          "Converting foreign currencies to dollars before investing",
          "Averaging the cost of multiple brokers",
        ],
        correctAnswer: 1,
        explanation:
          "Dollar-cost averaging involves investing fixed dollar amounts at regular intervals, reducing the impact of volatility by buying more shares when prices are low and fewer when high.",
      },
      {
        id: "inva-4",
        question: "What does 'shorting a stock' involve?",
        options: [
          "Buying stock for a short time period",
          "Investing in small-cap stocks",
          "Borrowing shares to sell, hoping to rebuy cheaper later",
          "Holding a stock through market downturns",
        ],
        correctAnswer: 2,
        explanation:
          "Short selling involves borrowing shares and selling them, hoping the price falls so you can buy them back cheaper, return them, and profit from the difference.",
      },
      {
        id: "inva-5",
        question: "What is the Efficient Market Hypothesis?",
        options: [
          "Markets are always wrong about stock prices",
          "Only institutional investors can beat the market",
          "Stock prices reflect all available information, making consistent outperformance difficult",
          "Markets are only efficient during bull runs",
        ],
        correctAnswer: 2,
        explanation:
          "The Efficient Market Hypothesis states that stock prices incorporate all available information, making it very difficult to consistently outperform the market through stock selection or timing.",
      },
    ],
  },
  {
    id: "psychology-basics",
    topicId: "psychology",
    title: "Psychology Fundamentals",
    description: "Explore the basics of human psychology",
    difficulty: "Beginner",
    questions: [
      {
        id: "psy-1",
        question: "What is cognitive dissonance?",
        options: [
          "A type of memory disorder",
          "Mental discomfort from holding conflicting beliefs",
          "The inability to focus on tasks",
          "A form of social anxiety",
        ],
        correctAnswer: 1,
        explanation:
          "Cognitive dissonance is the mental discomfort experienced when holding two or more contradictory beliefs, values, or actions simultaneously, often motivating behavior change.",
      },
      {
        id: "psy-2",
        question: "Who developed the hierarchy of needs?",
        options: ["Sigmund Freud", "Carl Jung", "Abraham Maslow", "B.F. Skinner"],
        correctAnswer: 2,
        explanation:
          "Abraham Maslow developed the hierarchy of needs in 1943, a motivational theory describing five tiers of human needs from physiological to self-actualization.",
      },
      {
        id: "psy-3",
        question: "What is the 'confirmation bias'?",
        options: [
          "Confirming facts before believing them",
          "Tendency to favor information that confirms existing beliefs",
          "A bias towards positive news",
          "Accepting all information as true",
        ],
        correctAnswer: 1,
        explanation:
          "Confirmation bias is our tendency to search for, interpret, and remember information in a way that confirms our pre-existing beliefs, leading to poor decision-making.",
      },
      {
        id: "psy-4",
        question: "What does 'classical conditioning' refer to?",
        options: [
          "Learning through rewards and punishments",
          "Learning by watching others",
          "Learning to associate a neutral stimulus with a meaningful one",
          "Learning through trial and error",
        ],
        correctAnswer: 2,
        explanation:
          "Classical conditioning, demonstrated by Pavlov, involves learning to associate a neutral stimulus with one that naturally produces a response, until the neutral stimulus alone triggers that response.",
      },
      {
        id: "psy-5",
        question: "What is the 'bystander effect'?",
        options: [
          "People help more when alone",
          "Watching TV makes people passive",
          "People are less likely to help when others are present",
          "Bystanders are always witnesses to crimes",
        ],
        correctAnswer: 2,
        explanation:
          "The bystander effect describes how individuals are less likely to offer help in an emergency when other people are present, due to diffusion of responsibility.",
      },
    ],
  },
  {
    id: "philosophy-intro",
    topicId: "philosophy",
    title: "Introduction to Philosophy",
    description: "Explore foundational philosophical concepts",
    difficulty: "Intermediate",
    questions: [
      {
        id: "phi-1",
        question: "What is Plato's allegory of the cave about?",
        options: [
          "Ancient cave paintings",
          "How shadows represent the limits of perception vs. reality",
          "The importance of shelter in ancient times",
          "A metaphor for democracy",
        ],
        correctAnswer: 1,
        explanation:
          "Plato's allegory describes prisoners in a cave who only see shadows on a wall, representing how humans mistake appearances for reality and must seek the truth beyond their perceptions.",
      },
      {
        id: "phi-2",
        question: "What did Descartes mean by 'Cogito, ergo sum'?",
        options: [
          "I think, therefore I am",
          "I act, therefore I exist",
          "Knowledge is power",
          "The mind controls the body",
        ],
        correctAnswer: 0,
        explanation:
          "'Cogito, ergo sum' (I think, therefore I am) is Descartes' foundational philosophical statement — the act of thinking proves one's existence as a thinking being.",
      },
      {
        id: "phi-3",
        question: "What is Utilitarianism?",
        options: [
          "Using only practical tools",
          "The belief that moral actions maximize happiness for the greatest number",
          "A form of government based on utility",
          "The study of useful inventions",
        ],
        correctAnswer: 1,
        explanation:
          "Utilitarianism, developed by Bentham and Mill, holds that the right action is one that maximizes overall happiness or well-being for the greatest number of people.",
      },
      {
        id: "phi-4",
        question: "What is the 'Ship of Theseus' paradox about?",
        options: [
          "Navigation in ancient Greece",
          "Whether a ship can survive a storm",
          "Identity and whether something remains the same after all parts are replaced",
          "The origin of the Olympics",
        ],
        correctAnswer: 2,
        explanation:
          "The Ship of Theseus paradox asks: if a ship's parts are gradually replaced until nothing original remains, is it still the same ship? It explores identity and continuity.",
      },
      {
        id: "phi-5",
        question: "What is Kant's Categorical Imperative?",
        options: [
          "Act only according to principles you could will to be universal laws",
          "Follow the rules set by the government",
          "Prioritize your own happiness above others",
          "Only act when absolutely necessary",
        ],
        correctAnswer: 0,
        explanation:
          "Kant's Categorical Imperative states we should act only according to principles we could consistently will everyone to follow, making it a universal moral law.",
      },
    ],
  },
  {
    id: "history-world",
    topicId: "history",
    title: "World History Highlights",
    description: "Test your knowledge of pivotal historical events",
    difficulty: "Intermediate",
    questions: [
      {
        id: "his-1",
        question: "In what year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correctAnswer: 2,
        explanation:
          "World War II ended in 1945, with Germany's surrender in May (V-E Day) and Japan's surrender in September (V-J Day) following the atomic bombings of Hiroshima and Nagasaki.",
      },
      {
        id: "his-2",
        question: "What was the Magna Carta?",
        options: [
          "A Roman military strategy",
          "A 1215 document limiting English royal power",
          "The first written constitution",
          "A medieval trade agreement",
        ],
        correctAnswer: 1,
        explanation:
          "The Magna Carta (1215) was a charter signed by King John of England limiting royal power and establishing certain legal rights, considered a foundational document for democracy.",
      },
      {
        id: "his-3",
        question: "What sparked World War I?",
        options: [
          "Germany invaded France",
          "The sinking of the Lusitania",
          "Assassination of Archduke Franz Ferdinand",
          "The Ottoman Empire collapsed",
        ],
        correctAnswer: 2,
        explanation:
          "The assassination of Austro-Hungarian Archduke Franz Ferdinand in Sarajevo on June 28, 1914 triggered a chain of alliances that led to World War I.",
      },
      {
        id: "his-4",
        question: "Which empire was the largest in history by land area?",
        options: [
          "Roman Empire",
          "British Empire",
          "Mongol Empire",
          "Ottoman Empire",
        ],
        correctAnswer: 1,
        explanation:
          "The British Empire was the largest empire in history, covering about 13.7 million square miles at its peak in the 1920s, roughly 24% of Earth's total land area.",
      },
      {
        id: "his-5",
        question: "What was the Renaissance?",
        options: [
          "A religious movement in the 1700s",
          "A cultural rebirth of art and learning in 14th-17th century Europe",
          "The rebuilding of Rome after its fall",
          "A French political revolution",
        ],
        correctAnswer: 1,
        explanation:
          "The Renaissance (14th-17th century) was a cultural movement originating in Italy that revived classical learning and inspired revolutionary developments in art, science, and literature.",
      },
    ],
  },
  {
    id: "science-basics",
    topicId: "science",
    title: "Science Essentials",
    description: "Explore fundamental scientific principles",
    difficulty: "Beginner",
    questions: [
      {
        id: "sci-1",
        question: "What is DNA?",
        options: [
          "A type of protein",
          "A molecule carrying genetic information",
          "A brain chemical",
          "A type of vitamin",
        ],
        correctAnswer: 1,
        explanation:
          "DNA (deoxyribonucleic acid) is a molecule that carries genetic instructions for the development, functioning, and reproduction of all known organisms.",
      },
      {
        id: "sci-2",
        question: "What is Newton's First Law of Motion?",
        options: [
          "Force equals mass times acceleration",
          "For every action, there is an equal and opposite reaction",
          "An object in motion stays in motion unless acted upon by an external force",
          "Energy cannot be created or destroyed",
        ],
        correctAnswer: 2,
        explanation:
          "Newton's First Law (Law of Inertia) states that an object at rest stays at rest and an object in motion stays in motion unless acted upon by an unbalanced external force.",
      },
      {
        id: "sci-3",
        question: "What is the speed of light in a vacuum?",
        options: [
          "300,000 km/s",
          "150,000 km/s",
          "500,000 km/s",
          "1,000,000 km/s",
        ],
        correctAnswer: 0,
        explanation:
          "The speed of light in a vacuum is approximately 299,792 km/s (roughly 300,000 km/s). It is a fundamental physical constant denoted as 'c'.",
      },
      {
        id: "sci-4",
        question: "What is the theory of evolution by natural selection?",
        options: [
          "Species were created all at once",
          "Organisms with favorable traits survive and reproduce more",
          "Evolution happens randomly without any pattern",
          "All organisms evolve at the same rate",
        ],
        correctAnswer: 1,
        explanation:
          "Darwin's theory of natural selection states that organisms with traits better suited to their environment tend to survive and reproduce, passing those traits to future generations.",
      },
      {
        id: "sci-5",
        question: "What is the periodic table?",
        options: [
          "A calendar of scientific discoveries",
          "A table organizing elements by atomic number and properties",
          "A chart of planetary orbits",
          "A list of chemical compounds",
        ],
        correctAnswer: 1,
        explanation:
          "The periodic table organizes all known chemical elements by atomic number, electron configuration, and recurring chemical properties, revealing patterns in their behavior.",
      },
    ],
  },
  {
    id: "economics-intro",
    topicId: "economics",
    title: "Economics Fundamentals",
    description: "Learn the basics of economic thinking",
    difficulty: "Beginner",
    questions: [
      {
        id: "eco-1",
        question: "What is 'supply and demand'?",
        options: [
          "A government pricing policy",
          "The economic model describing how prices are determined by availability and desire",
          "A tax collection system",
          "A method for calculating GDP",
        ],
        correctAnswer: 1,
        explanation:
          "Supply and demand is a foundational economic model showing that prices are determined by the relationship between product availability (supply) and consumer desire (demand).",
      },
      {
        id: "eco-2",
        question: "What is GDP?",
        options: [
          "General Debt Payment",
          "Gross Domestic Product — total value of goods and services produced",
          "Government Distribution Plan",
          "Global Development Program",
        ],
        correctAnswer: 1,
        explanation:
          "GDP (Gross Domestic Product) is the total monetary value of all goods and services produced within a country's borders in a specific time period, used to measure economic size.",
      },
      {
        id: "eco-3",
        question: "What is inflation?",
        options: [
          "Rising unemployment rates",
          "The gradual increase in the general price level of goods and services",
          "The expansion of government spending",
          "A decrease in interest rates",
        ],
        correctAnswer: 1,
        explanation:
          "Inflation is the rate at which the general level of prices rises over time, eroding purchasing power. Central banks typically target around 2% annual inflation.",
      },
      {
        id: "eco-4",
        question: "What is an 'opportunity cost'?",
        options: [
          "The price of a business opportunity",
          "The cost of missed opportunities from choosing one option over another",
          "A discount given to early investors",
          "The expense of opening a new business",
        ],
        correctAnswer: 1,
        explanation:
          "Opportunity cost is the value of the next best alternative you give up when making a choice, helping explain why trade-offs matter in economic decision-making.",
      },
      {
        id: "eco-5",
        question: "What is a recession?",
        options: [
          "A period of rapid economic growth",
          "Two consecutive quarters of negative GDP growth",
          "A government budget surplus",
          "High inflation combined with low unemployment",
        ],
        correctAnswer: 1,
        explanation:
          "A recession is generally defined as two consecutive quarters of negative GDP growth, often accompanied by rising unemployment and reduced consumer spending.",
      },
    ],
  },
  {
    id: "literature-classics",
    topicId: "literature",
    title: "Classic Literature",
    description: "Test your knowledge of literary classics",
    difficulty: "Intermediate",
    questions: [
      {
        id: "lit-1",
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Charlotte Brontë", "Jane Austen", "Mary Shelley", "George Eliot"],
        correctAnswer: 1,
        explanation:
          "Jane Austen wrote Pride and Prejudice, published in 1813. The novel follows Elizabeth Bennet navigating issues of marriage, morality, and misconceptions in Georgian England.",
      },
      {
        id: "lit-2",
        question: "What is the central theme of '1984' by George Orwell?",
        options: [
          "The joy of modern technology",
          "Totalitarian surveillance and government control over reality",
          "The rise of democracy",
          "Economic inequality in post-war Britain",
        ],
        correctAnswer: 1,
        explanation:
          "Orwell's 1984 depicts a dystopian society under extreme totalitarian rule, exploring themes of government surveillance, propaganda, psychological manipulation, and the destruction of truth.",
      },
      {
        id: "lit-3",
        question: "In which Shakespeare play does the character Hamlet appear?",
        options: ["Macbeth", "Othello", "Hamlet", "King Lear"],
        correctAnswer: 2,
        explanation:
          "Hamlet is the tragic protagonist of Shakespeare's play 'Hamlet' (c. 1600), a story of revenge, existential doubt, and moral corruption in the Danish royal court.",
      },
      {
        id: "lit-4",
        question: "What literary movement did poets like Walt Whitman represent?",
        options: ["Romanticism", "American Transcendentalism", "Modernism", "Naturalism"],
        correctAnswer: 1,
        explanation:
          "Walt Whitman was a key figure in American Transcendentalism, a movement emphasizing individualism, nature, self-reliance, and the inherent goodness of people.",
      },
      {
        id: "lit-5",
        question: "What is the main theme of 'To Kill a Mockingbird'?",
        options: [
          "Adventures of childhood in the South",
          "Racial injustice and moral growth in the American South",
          "The hardships of Great Depression farming",
          "Political corruption in small-town America",
        ],
        correctAnswer: 1,
        explanation:
          "Harper Lee's To Kill a Mockingbird (1960) explores racial injustice in the American South through the eyes of young Scout Finch, as her father defends a Black man falsely accused of a crime.",
      },
    ],
  },
  {
    id: "health-nutrition",
    topicId: "health",
    title: "Health & Nutrition Basics",
    description: "Learn evidence-based health and nutrition facts",
    difficulty: "Beginner",
    questions: [
      {
        id: "hlt-1",
        question: "What are macronutrients?",
        options: [
          "Vitamins and minerals",
          "Proteins, carbohydrates, and fats that provide energy",
          "Large food portions",
          "Supplements and additives",
        ],
        correctAnswer: 1,
        explanation:
          "Macronutrients are the three main nutrient categories — proteins, carbohydrates, and fats — that provide energy (calories) and are needed in large amounts by the body.",
      },
      {
        id: "hlt-2",
        question: "How many hours of sleep do most adults need per night?",
        options: ["4-5 hours", "5-6 hours", "7-9 hours", "10-12 hours"],
        correctAnswer: 2,
        explanation:
          "Most adults need 7-9 hours of sleep per night according to the National Sleep Foundation. Consistent quality sleep is essential for physical health, cognitive function, and emotional well-being.",
      },
      {
        id: "hlt-3",
        question: "What is the role of fiber in the diet?",
        options: [
          "Providing quick energy",
          "Building muscle mass",
          "Supporting digestion and gut health",
          "Storing fat-soluble vitamins",
        ],
        correctAnswer: 2,
        explanation:
          "Dietary fiber supports digestive health, promotes regular bowel movements, feeds beneficial gut bacteria, and helps regulate blood sugar and cholesterol levels.",
      },
      {
        id: "hlt-4",
        question: "Which vitamin is primarily produced when skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        correctAnswer: 2,
        explanation:
          "Vitamin D is synthesized in the skin upon exposure to ultraviolet B (UVB) rays from sunlight. It plays crucial roles in bone health, immune function, and mood regulation.",
      },
      {
        id: "hlt-5",
        question: "What does BMI measure?",
        options: [
          "Body muscle index",
          "Blood metabolic indicator",
          "Body mass index — weight relative to height",
          "Basal metabolic indicator",
        ],
        correctAnswer: 2,
        explanation:
          "BMI (Body Mass Index) is a measure of body weight relative to height, used as a screening tool for weight categories. However, it doesn't directly measure body fat or health.",
      },
    ],
  },
  {
    id: "technology-fundamentals",
    topicId: "technology",
    title: "Technology Fundamentals",
    description: "Explore core concepts of modern technology",
    difficulty: "Beginner",
    questions: [
      {
        id: "tech-1",
        question: "What is artificial intelligence?",
        options: [
          "Robots that look like humans",
          "Computer systems simulating human intelligence and problem-solving",
          "Advanced video game graphics",
          "Automated manufacturing systems",
        ],
        correctAnswer: 1,
        explanation:
          "Artificial intelligence (AI) refers to computer systems designed to perform tasks that typically require human intelligence, such as learning, reasoning, perception, and problem-solving.",
      },
      {
        id: "tech-2",
        question: "What is machine learning?",
        options: [
          "Teaching humans to use machines",
          "Machines that repair themselves",
          "AI systems that learn and improve from experience without explicit programming",
          "Computer-aided manufacturing",
        ],
        correctAnswer: 2,
        explanation:
          "Machine learning is a subset of AI where systems learn patterns from data and improve their performance over time without being explicitly programmed for each task.",
      },
      {
        id: "tech-3",
        question: "What is the Internet of Things (IoT)?",
        options: [
          "The collection of all internet websites",
          "Physical devices connected to the internet that collect and share data",
          "A new type of internet service provider",
          "Social media platforms collectively",
        ],
        correctAnswer: 1,
        explanation:
          "The Internet of Things (IoT) refers to the network of physical devices — from smart thermostats to wearables — embedded with sensors and connected to the internet to collect and exchange data.",
      },
      {
        id: "tech-4",
        question: "What is blockchain technology?",
        options: [
          "A type of computer processor",
          "A decentralized, distributed ledger recording transactions across a network",
          "A cybersecurity firewall system",
          "A cloud storage solution",
        ],
        correctAnswer: 1,
        explanation:
          "Blockchain is a decentralized, distributed digital ledger that records transactions across multiple computers, making records transparent, immutable, and resistant to tampering.",
      },
      {
        id: "tech-5",
        question: "What does 'open source' software mean?",
        options: [
          "Software that is freely downloadable",
          "Software with publicly available source code anyone can view, modify, and distribute",
          "Software without copy protection",
          "Software developed by governments",
        ],
        correctAnswer: 1,
        explanation:
          "Open source software has publicly available source code that anyone can inspect, modify, and distribute. Examples include Linux, Firefox, and the Android operating system.",
      },
    ],
  },
  {
    id: "ancient-civilizations-intro",
    topicId: "ancient-civilizations",
    title: "Ancient Civilizations",
    description: "Discover the wonders of ancient human civilizations",
    difficulty: "Intermediate",
    questions: [
      {
        id: "anc-1",
        question: "Which river was central to ancient Egyptian civilization?",
        options: ["Tigris", "Euphrates", "Nile", "Indus"],
        correctAnswer: 2,
        explanation:
          "The Nile River was the lifeblood of ancient Egypt, providing fertile land through annual floods, freshwater, and a transportation route that enabled the civilization to flourish for over 3,000 years.",
      },
      {
        id: "anc-2",
        question: "What was the purpose of the Great Wall of China?",
        options: [
          "To mark the boundary of Chinese territory",
          "To protect against northern nomadic invasions",
          "To control trade routes",
          "To demonstrate the emperor's power",
        ],
        correctAnswer: 1,
        explanation:
          "The Great Wall of China was built primarily to protect Chinese states from nomadic invasions from the north. Construction began in the 7th century BC and continued for centuries.",
      },
      {
        id: "anc-3",
        question: "What was the Colosseum in ancient Rome used for?",
        options: [
          "Religious ceremonies",
          "Government meetings",
          "Public spectacles including gladiatorial combat",
          "Storing grain and supplies",
        ],
        correctAnswer: 2,
        explanation:
          "The Colosseum in Rome was an amphitheater hosting public spectacles including gladiatorial contests, animal hunts, executions, and theatrical performances, accommodating up to 80,000 spectators.",
      },
      {
        id: "anc-4",
        question: "Which ancient civilization created the first known writing system?",
        options: ["Egyptians", "Sumerians", "Chinese", "Indus Valley people"],
        correctAnswer: 1,
        explanation:
          "The Sumerians of ancient Mesopotamia (modern-day Iraq) developed cuneiform, one of the earliest known writing systems, around 3200-3000 BC, used for record-keeping and communication.",
      },
      {
        id: "anc-5",
        question: "What was the Silk Road?",
        options: [
          "A road paved with silk in ancient China",
          "A trade network connecting East Asia to the Mediterranean",
          "A route used only for transporting silk",
          "An ancient Chinese royal highway",
        ],
        correctAnswer: 1,
        explanation:
          "The Silk Road was a network of ancient trade routes connecting East Asia and Southeast Asia with South Asia, Persia, the Arabian Peninsula, East Africa, and Southern Europe.",
      },
    ],
  },
];

export function getTopicById(id: string): Topic | undefined {
  return topics.find((topic) => topic.id === id);
}

export function getQuizzesByTopic(topicId: string): Quiz[] {
  return quizzes.filter((quiz) => quiz.topicId === topicId);
}

export function getQuizById(id: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.id === id);
}
