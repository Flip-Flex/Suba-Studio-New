const fs = require('fs');
const path = require('path');

const file = path.join(process.cwd(), 'src/data/categoryContent.ts');
let content = fs.readFileSync(file, 'utf8');

const updates = {
  "hindu-wedding": {
    tagline: "Every sacred ritual marks the beginning of a lifetime together.",
    description: "Where traditions meet emotions, timeless memories are created. Every mantra, every smile, every blessing deserves to be remembered.",
    whyChooseTitle: "Why choose our Hindu wedding photography?",
    whyChooseText: "Celebrating love through rituals that have united hearts for generations. Preserving every sacred moment with grace, elegance, and heart."
  },
  "christian-wedding": {
    tagline: "Where faith unites two hearts, love finds its forever home.",
    description: "Every vow spoken before God deserves to be remembered forever. Capturing blessings, promises, and moments filled with grace.",
    whyChooseTitle: "Why choose our Christian wedding photography?",
    whyChooseText: "A celebration of love, faith, and the beginning of a beautiful journey. Honoring your covenant with photographs that last a lifetime."
  },
  "engagement": {
    tagline: "Every forever begins with a single 'Yes.'",
    description: "Before the wedding comes the story worth celebrating. Capturing the excitement before your forever begins.",
    whyChooseTitle: "Why choose our engagement photography?",
    whyChooseText: "The promise of forever deserves its own story. Your journey starts here, one unforgettable moment at a time."
  },
  "pre-wedding": {
    tagline: "Before the vows, there is a love story waiting to be told.",
    description: "Celebrate the journey before the celebration itself. Every adventure together deserves to be remembered.",
    whyChooseTitle: "Why choose our pre-wedding photography?",
    whyChooseText: "Creating memories before the chapter called forever begins. Beautiful beginnings deserve timeless photographs."
  },
  "post-wedding": {
    tagline: "The celebration may end, but your story has only begun.",
    description: "Love continues long after the wedding day. Capturing the quiet moments that become lifelong treasures.",
    whyChooseTitle: "Why choose our post-wedding photography?",
    whyChooseText: "Beyond the ceremony lies a lifetime of beautiful memories. Your journey together is the greatest story we'll ever capture."
  },
  "maternity": {
    tagline: "Every heartbeat tells the story of a love yet to be seen.",
    description: "The most beautiful journey begins before the first hello. Growing a little miracle, one precious moment at a time.",
    whyChooseTitle: "Why choose our maternity photography?",
    whyChooseText: "Celebrating the quiet strength of motherhood. The journey to motherhood deserves to be remembered forever."
  },
  "baby": {
    tagline: "Tiny hands, tiny feet, endless love.",
    description: "Every little smile is a memory worth keeping forever. Capturing the magic of life's sweetest beginnings.",
    whyChooseTitle: "Why choose our baby photography?",
    whyChooseText: "Because they are only this little once. Preserving the innocence, wonder, and joy of childhood."
  }
};

for (const [key, data] of Object.entries(updates)) {
  const regex = new RegExp('(\"' + key + '\": \\\\{[\\\\s\\\\S]*?tagline: )\".*?\"([\\\\s\\\\S]*?description: )\".*?\"([\\\\s\\\\S]*?whyChooseTitle: )\".*?\"([\\\\s\\\\S]*?whyChooseText: )\".*?\"', 'm');
  content = content.replace(regex, $1" + data.tagline + "" + data.description + "" + data.whyChooseTitle + "" + data.whyChooseText + ");
}

fs.writeFileSync(file, content);
console.log("Updated quotes successfully!");
