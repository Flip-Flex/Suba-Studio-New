
export interface VideoItem {
    id: number;
    title: string;
    subtitle?: string;
    location?: string;
    date?: string;
    description?: string;
    url: string;
}

export interface CategoryContent {
    title: string;
    tagline: string;
    description: string;
    whyChooseTitle: string;
    whyChooseText: string;
    heroImage: string;
    collageImages?: string[];
    trailImages?: string[];
    albums: { id: number; title: string; image: string }[];
    videoList?: VideoItem[];
}

export const categoryData: Record<string, CategoryContent> = {
    "outdoor": {
        title: "Best Outdoor Wedding Photography",
        tagline: "In the arms of nature, love finds its truest expression.",
        description: "Imagine a magical wedding… under the warm glow of the setting sun, surrounded by breathtaking scenery. Now, witness your love story, as the birds sing their blessings. Yes, outdoor weddings offer a beautiful ceremonial stage that enhances the romance and joy of your special day. We understand the significance of these timeless traditions and the importance of preserving them for future generations.",
        whyChooseTitle: "Why choose our service for your outdoor wedding photography?",
        whyChooseText: "A keen eye for detail is what our skilled photographers are adept at; every natural element will be captured to create images that evoke emotion and tell your unique love story. We ensure that every picture of your love story is beautifully documented, understanding your vision, desired theme and aesthetics.",
        heroImage: "/landscape.png?v=2",
        albums: [
            { id: 1, title: "Reshma R.R + Gowri Shanker G", image: "/landscape.png?v=2" },
            { id: 2, title: "Sushma + Praveen", image: "/portrait.png?v=2" },
            { id: 3, title: "M.Subasri + S.Arun Kumar", image: "/landscape.png?v=2" },
        ]
    },
    "christian": {
        title: "Best Christian Wedding Photography",
        tagline: "Where faith unites two hearts, love finds its forever home.",
        description: "Every vow spoken before God deserves to be remembered forever. Capturing blessings, promises, and moments filled with grace.",
        whyChooseTitle: "Why choose our Christian wedding photography?",
        whyChooseText: "A celebration of love, faith, and the beginning of a beautiful journey. Honoring your covenant with photographs that last a lifetime.",
        heroImage: "/Christian/4Z5A8807.JPG?v=2",
        collageImages: ["/Christian/4Z5A8754.JPG?v=2", "/Christian/4Z5A8747.JPG?v=2", "/Christian/4Z5A8732.JPG?v=2"],
        albums: [
            { id: 1, title: "", image: "/Christian/4Z5A8729.JPG?v=2" },
            { id: 2, title: "", image: "/Christian/4Z5A8752.JPG?v=2" },
            { id: 3, title: "", image: "/Christian/4Z5A8733.JPG?v=2" },
            { id: 4, title: "", image: "/Christian/4Z5A8776.JPG?v=2" },
            { id: 5, title: "", image: "/Christian/4Z5A8768.JPG?v=2" },
            { id: 6, title: "", image: "/Christian/4Z5A8297.JPG?v=2" },
            { id: 7, title: "", image: "/Christian/4Z5A8307.JPG?v=2" },
            { id: 8, title: "", image: "/Christian/4Z5A8321.JPG?v=2" },
            { id: 9, title: "", image: "/Christian/4Z5A8479.JPG?v=2" },
            { id: 10, title: "", image: "/Christian/4Z5A8531.JPG?v=2" },
            { id: 11, title: "", image: "/Christian/4Z5A8557.JPG?v=2" },
            { id: 12, title: "", image: "/Christian/SUBA2727.JPG?v=2" },
            { id: 13, title: "", image: "/Christian/SUBA2735.JPG?v=2" },
            { id: 14, title: "", image: "/Christian/SUBA2737.JPG?v=2" },
            { id: 15, title: "", image: "/Christian/SUBA2740.JPG?v=2" },
            { id: 16, title: "", image: "/Christian/SUBA2745.JPG?v=2" },
            { id: 17, title: "", image: "/Christian/SUBA2770.JPG?v=2" },
            { id: 18, title: "", image: "/Christian/SUBA2812.JPG?v=2" },
            { id: 19, title: "", image: "/Christian/SUBA2818.JPG?v=2" },
            { id: 20, title: "", image: "/Christian/SUBA2832.JPG?v=2" },
            { id: 21, title: "", image: "/Christian/SUBA2839.JPG?v=2" },
            { id: 22, title: "", image: "/Christian/SUBA3119.JPG?v=2" },
            { id: 23, title: "", image: "/Christian/SUBA3120.JPG?v=2" },
            { id: 24, title: "", image: "/Christian/SUBA3133.JPG?v=2" },
            { id: 25, title: "", image: "/Christian/SUBA3191.JPG?v=2" },
            { id: 26, title: "", image: "/Christian/SUBA3193.JPG?v=2" },
            { id: 27, title: "", image: "/Christian/SUBA3195.JPG?v=2" },
            { id: 28, title: "", image: "/Christian/SUBA3211.JPG?v=2" },
            { id: 29, title: "", image: "/Christian/SUBA3212.JPG?v=2" },
            { id: 30, title: "", image: "/Christian/SUBA3240.JPG?v=2" },
            { id: 31, title: "", image: "/Christian/SUBA3257.JPG?v=2" },
            { id: 32, title: "", image: "/Christian/SUBA3443.JPG?v=2" },
            { id: 33, title: "", image: "/Christian/SUBA3448.JPG?v=2" },
            { id: 34, title: "", image: "/Christian/SUBA3449.JPG?v=2" },
            { id: 35, title: "", image: "/Christian/SUBA4080.JPG?v=2" }
        ]
    },


    "hindu": {
        title: "Best Hindu Wedding Photography",
        tagline: "Every sacred ritual marks the beginning of a lifetime together.",
        description: "Where traditions meet emotions, timeless memories are created. Every mantra, every smile, every blessing deserves to be remembered.",
        whyChooseTitle: "Why choose our Hindu wedding photography?",
        whyChooseText: "Celebrating love through rituals that have united hearts for generations. Preserving every sacred moment with grace, elegance, and heart.",
        heroImage: "/hindu/11.jpg?v=2",
        collageImages: ["/hindu/4.jpg?v=2", "/hindu/2.jpg?v=2", "/hindu/1.png?v=2"],
        albums: [
            { id: 1, title: "", image: "/hindu/1.png?v=2" },
            { id: 2, title: "", image: "/hindu/2.jpg?v=2" },
            { id: 3, title: "", image: "/hindu/3.jpg?v=2" },
            { id: 4, title: "", image: "/hindu/4.jpg?v=2" },
            { id: 5, title: "", image: "/hindu/5.jpg?v=2" },
            { id: 6, title: "", image: "/hindu/6.jpg?v=2" },
            { id: 7, title: "", image: "/hindu/7.jpg?v=2" },
            { id: 8, title: "", image: "/hindu/8.jpg?v=2" },
            { id: 9, title: "", image: "/hindu/9.jpg?v=2" },
            { id: 10, title: "", image: "/hindu/10.jpg?v=2" },
            { id: 11, title: "", image: "/hindu/11.jpg?v=2" },
            { id: 12, title: "", image: "/hindu/12.jpg?v=2" },
            { id: 13, title: "", image: "/hindu/13.jpg?v=2" },
            { id: 14, title: "", image: "/hindu/14.jpg?v=2" },
            { id: 15, title: "", image: "/hindu/15.jpg?v=2" },
            { id: 16, title: "", image: "/hindu/16.jpg?v=2" },
            { id: 17, title: "", image: "/hindu/17.jpg?v=2" },
            { id: 18, title: "", image: "/hindu/18.jpg?v=2" },
            { id: 19, title: "", image: "/hindu/19.jpg?v=2" },
            { id: 20, title: "", image: "/hindu/20.jpg?v=2" },
            { id: 21, title: "", image: "/hindu/21.jpg?v=2" },
        ]
    },
    "engagement": {
        title: "Best Engagement Photography",
        tagline: "Every forever begins with a single 'Yes.'",
        description: "Before the wedding comes the story worth celebrating. Capturing the excitement before your forever begins.",
        whyChooseTitle: "Why choose our engagement photography?",
        whyChooseText: "The promise of forever deserves its own story. Your journey starts here, one unforgettable moment at a time.",
        heroImage: "/engagement/4Z5A4700.jpg?v=2",
        collageImages: ["/engagement/1.JPG?v=2", "/engagement/4Z5A2046.JPG?v=2", "/engagement/4Z5A2060.JPG?v=2"],
        albums: [
            { id: 1, title: "", image: "/engagement/2.jpg?v=2" },
            { id: 2, title: "", image: "/engagement/4Z5A4696.jpg?v=2" },
            { id: 3, title: "", image: "/engagement/039.jpg?v=2" },
            { id: 4, title: "", image: "/engagement/040.jpg?v=2" },
            { id: 5, title: "", image: "/engagement/31.jpg?v=2" },
            { id: 6, title: "", image: "/engagement/35.jpg?v=2" },
            { id: 7, title: "", image: "/engagement/37.jpg?v=2" },
            { id: 8, title: "", image: "/engagement/01.jpg?v=2" },
            { id: 9, title: "", image: "/engagement/17.jpg?v=2" },
            { id: 10, title: "", image: "/engagement/19.jpg?v=2" },
            { id: 11, title: "", image: "/engagement/22.jpg?v=2" }
        ]
    },
    "bridal-portraits": {
        title: "Bridal Portraits",
        tagline: "Elegance, grace, and the glow of a bride.",
        description: "A bride on her wedding day is a vision of beauty. We focus on capturing the intricacies of her attire, the details of her jewelry, and the emotions that play on her face. Our bridal portraits are artistic, timeless, and designed to make you look your absolute best.",
        whyChooseTitle: "Why choose us for your bridal portraits?",
        whyChooseText: "We know how to make you feel comfortable in front of the camera, guiding you through poses that highlight your best features. We play with light and shadow to create dramatic, editorial-style images that belong in a magazine.",
        heroImage: "/Bridal/14.JPG?v=2",
        collageImages: [
            "/Bridal/16.jpg?v=2", // Hero Image
            "/Bridal/19.jpg?v=2", // Supporting Portrait
            "/Bridal/8.JPG?v=2",  // Detail Image
            "/Bridal/18.JPG?v=2", // Supporting Landscape
            "/Bridal/4.JPG?v=2",  // Portrait Accent
            "/Bridal/10.JPG?v=2"  // Detail Portrait
        ],
        albums: [
            { id: 1, title: "", image: "/Bridal/1.jpg?v=2" },
            { id: 2, title: "", image: "/Bridal/2.jpg?v=2" },
            { id: 3, title: "", image: "/Bridal/3.jpg?v=2" },
            { id: 4, title: "", image: "/Bridal/5.JPG?v=2" },
            { id: 5, title: "", image: "/Bridal/15.JPG?v=2" }
        ]
    },
    "couple-portraits": {
        title: "Couple Portraits",
        tagline: "Two souls, one beautiful story.",
        description: "The connection between a couple is the heart of any wedding. We create intimate, romantic, and fun portraits that reflect your unique chemistry. Whether it's a stolen glance or a hearty laugh, we capture it all.",
        whyChooseTitle: "Why choose us for your couple portraits?",
        whyChooseText: "We move beyond stiff poses to capture genuine interactions. Our goal is to create images that feel natural and unforced, allowing your love to shine through.",
        heroImage: "/couple_portrait/b2.JPG?v=2",
        collageImages: ["/couple_portrait/pp2.jpg?v=2", "/couple_portrait/pp3.jpg?v=2", "/couple_portrait/pp4.jpg?v=2"],
        albums: [
            { id: 1, title: "", image: "/couple_portrait/b1.JPG?v=2" },
            { id: 2, title: "", image: "/couple_portrait/b3.JPG?v=2" },
            { id: 3, title: "", image: "/couple_portrait/b4.JPG?v=2" },
            { id: 4, title: "", image: "/couple_portrait/b6.JPG?v=2" },
            { id: 5, title: "", image: "/couple_portrait/b7.JPG?v=2" },

            { id: 6, title: "", image: "/couple_portrait/b8.jpg?v=2" },
            { id: 7, title: "", image: "/couple_portrait/b9.jpg?v=2" },
            { id: 8, title: "", image: "/couple_portrait/b10.JPG?v=2" },
            { id: 9, title: "", image: "/couple_portrait/b2.JPG?v=2" },
            { id: 10, title: "", image: "/couple_portrait/b11.JPG?v=2" },
            { id: 11, title: "", image: "/couple_portrait/b12.JPG?v=2" },
            { id: 12, title: "", image: "/couple_portrait/b14.JPG?v=2" },
            { id: 13, title: "", image: "/couple_portrait/b15.JPG?v=2" },
        ]
    },
    "groom-portraits": {
        title: "Groom Portraits",
        tagline: "Style, swagger, and sophistication.",
        description: "Why should brides have all the fun? We ensure the groom gets his moment in the spotlight too. From getting ready shots to stylish solo portraits, we capture the groom's personality and style.",
        whyChooseTitle: "Expert Groom Photography",
        whyChooseText: "We bring a fashion-forward approach to groom photography, ensuring you look sharp, confident, and dashing on your big day.",
        heroImage: "/groom/7.JPG?v=2",
        collageImages: ["/groom/2.JPG?v=2", "/groom/3.JPG?v=2", "/groom/4.JPG?v=2"],
        albums: [
            { id: 1, title: "", image: "/groom/5.JPG?v=2" },
            { id: 2, title: "", image: "/groom/6.JPG?v=2" },
            { id: 3, title: "", image: "/groom/1.JPG?v=2" },
            { id: 4, title: "", image: "/groom/8.JPG?v=2" },
            { id: 5, title: "", image: "/groom/9.JPG?v=2" },
            { id: 6, title: "", image: "/groom/10.JPG?v=2" },
            { id: 7, title: "", image: "/groom/11.JPG?v=2" },
            { id: 8, title: "", image: "/groom/12.JPG?v=2" },
            { id: 9, title: "", image: "/groom/13.jpg?v=2" },
        ]
    },
    "candid-moments": {
        title: "Candid Moments",
        tagline: "Unscripted joy, captured forever.",
        description: "The best photos are often the ones you didn't know were being taken. We have a knack for being in the right place at the right time to capture the raw, unfiltered emotions of your wedding day.",
        whyChooseTitle: "Masters of Candid Photography",
        whyChooseText: "Our discreet approach allows us to document your day without intruding. We capture the laughter, the tears, and the crazy dance moves in their purest form.",
        heroImage: "/landscape.png?v=2",
        albums: [
            { id: 1, title: "Laughter & Tears", image: "/landscape.png?v=2" },
            { id: 2, title: "Dance Floor Action", image: "/landscape.png?v=2" },
        ]
    },
    "jewellery": {
        title: "Jewellery Photography",
        tagline: "Sparkle, shine, and intricate details.",
        description: "Indian weddings are known for their exquisite jewellery. We take the time to capture the details of your heritage pieces, ensuring they are documented with the same care and attention as the rest of your wedding.",
        whyChooseTitle: "Detail-Oriented Photography",
        whyChooseText: "We use macro lenses and creative lighting to highlight the craftsmanship and beauty of your wedding jewellery.",
        heroImage: "/portrait.png?v=2",
        albums: [
            { id: 1, title: "Heirloom Pieces", image: "/portrait.png?v=2" },
            { id: 2, title: "Modern Bling", image: "/portfolio_fashion.png?v=2" },
        ]
    },
    "rituals": {
        title: "Wedding Rituals",
        tagline: "The sacred traditions that bind us.",
        description: "From the fire ceremony to the exchange of garlands, rituals are the soul of an Indian wedding. We document these sacred moments with respect and artistry, preserving the cultural significance of your union.",
        whyChooseTitle: "respectful Documentation",
        whyChooseText: "We understand the importance of each ritual and ensure we are in the perfect position to capture it without disrupting the ceremony.",
        heroImage: "/Rituals/r4.JPG?v=2",
        collageImages: ["/Rituals/r2.JPG?v=2", "/Rituals/r3.JPG?v=2", "/Rituals/r4.JPG?v=2"],
        albums: [
            { id: 1, title: "", image: "/Rituals/r1.JPG?v=2" },
            { id: 2, title: "", image: "/Rituals/r2.JPG?v=2" },
            { id: 3, title: "", image: "/Rituals/r3.JPG?v=2" },
            { id: 4, title: "", image: "/Rituals/r4.JPG?v=2" },
            { id: 5, title: "", image: "/Rituals/r5.JPG?v=2" },
        ]
    },
    "pre-wedding": {
        title: "Best Pre-wedding Photography",
        tagline: "Before the vows, there is a love story waiting to be told.",
        description: "Celebrate the journey before the celebration itself. Every adventure together deserves to be remembered.",
        whyChooseTitle: "Why choose our pre-wedding photography?",
        whyChooseText: "Creating memories before the chapter called forever begins. Beautiful beginnings deserve timeless photographs.",
        heroImage: "/prewed/01.jpg?v=2",
        collageImages: ["/prewed/02.jpg?v=2", "/prewed/03.jpg?v=2", "/prewed/04.jpg?v=2", "/prewed/05.jpg?v=2"],
        albums: [
            { id: 1, title: "", image: "/prewed/01.jpg?v=2" },
            { id: 2, title: "", image: "/prewed/02.jpg?v=2" },
            { id: 3, title: "", image: "/prewed/03.jpg?v=2" },
            { id: 4, title: "", image: "/prewed/04.jpg?v=2" },
            { id: 5, title: "", image: "/prewed/05.jpg?v=2" },
            { id: 6, title: "", image: "/prewed/06.jpg?v=2" },
            { id: 7, title: "", image: "/prewed/07 copy.jpg?v=2" },
            { id: 8, title: "", image: "/prewed/08 copy.jpg?v=2" },
            { id: 9, title: "", image: "/prewed/09.jpg?v=2" },
            { id: 10, title: "", image: "/prewed/4Z5A3631 copy.jpg?v=2" },
            { id: 11, title: "", image: "/prewed/4Z5A3670.JPG?v=2" },
            { id: 12, title: "", image: "/prewed/a.JPG?v=2" },
            { id: 13, title: "", image: "/prewed/b.JPG?v=2" },
            { id: 14, title: "", image: "/prewed/c.JPG?v=2" },
            { id: 15, title: "", image: "/prewed/d.JPG?v=2" },
            { id: 16, title: "", image: "/prewed/e.JPG?v=2" },
            { id: 17, title: "", image: "/prewed/f.JPG?v=2" },
            { id: 18, title: "", image: "/prewed/g.JPG?v=2" },
            { id: 19, title: "", image: "/prewed/h.JPG?v=2" },
            { id: 20, title: "", image: "/prewed/i.JPG?v=2" }
        ]
    },
    "post-wedding": {
        title: "Best Post-wedding Photography",
        tagline: "The celebration may end, but your story has only begun.",
        description: "Love continues long after the wedding day. Capturing the quiet moments that become lifelong treasures.",
        whyChooseTitle: "Why choose our post-wedding photography?",
        whyChooseText: "Beyond the ceremony lies a lifetime of beautiful memories. Your journey together is the greatest story we'll ever capture.",
        heroImage: "/postwed/p4.JPG?v=2",
        collageImages: [
            "/postwed/p1.JPG?v=2",
            "/postwed/p3.JPG?v=2",
            "/postwed/p2.JPG?v=2"
        ],
        albums: [
            { id: 1, title: "", image: "/postwed/p1.JPG?v=2" },
            { id: 2, title: "", image: "/postwed/p2.JPG?v=2" },
            { id: 3, title: "", image: "/postwed/p3.JPG?v=2" },
            { id: 4, title: "", image: "/postwed/p4.JPG?v=2" },
            { id: 5, title: "", image: "/postwed/p5.JPG?v=2" },
            { id: 6, title: "", image: "/postwed/p6.JPG?v=2" },
            { id: 7, title: "", image: "/postwed/p7.JPG?v=2" },
            { id: 8, title: "", image: "/postwed/p8.JPG?v=2" },
            { id: 9, title: "", image: "/postwed/p9.JPG?v=2" },
            { id: 10, title: "", image: "/postwed/p10.JPG?v=2" },
            { id: 11, title: "", image: "/postwed/p12.png?v=2" },
            { id: 12, title: "", image: "/postwed/4Z5A4120.JPG?v=2" },
            { id: 13, title: "", image: "/postwed/4Z5A4186.JPG?v=2" },
            { id: 14, title: "", image: "/postwed/4Z5A4323.JPG?v=2" },
            { id: 15, title: "", image: "/postwed/4Z5A4516.JPG?v=2" },
            { id: 16, title: "", image: "/postwed/4Z5A4540.JPG?v=2" },
            { id: 17, title: "", image: "/postwed/4Z5A4548.JPG?v=2" }
        ]
    },
    "maternity": {
        title: "Best Maternity Photography",
        tagline: "Every heartbeat tells the story of a love yet to be seen.",
        description: "The most beautiful journey begins before the first hello. Growing a little miracle, one precious moment at a time.",
        whyChooseTitle: "Why choose our maternity photography?",
        whyChooseText: "Celebrating the quiet strength of motherhood. The journey to motherhood deserves to be remembered forever.",
        heroImage: "/Maternity/heroimg.jpg?v=2",
        collageImages: ["/Maternity/m17.jpg?v=2", "/Maternity/m1.jpg?v=2", "/Maternity/m16.jpg?v=2", "/Maternity/m24.jpg?v=2", "/Maternity/m28.jpg?v=2"],
        albums: [
            { id: 1, title: "", image: "/Maternity/m2.jpg?v=2" },
            { id: 2, title: "", image: "/Maternity/m3.jpg?v=2" },
            { id: 3, title: "", image: "/Maternity/m4.jpg?v=2" },
            { id: 4, title: "", image: "/Maternity/m5.jpg?v=2" },
            { id: 5, title: "", image: "/Maternity/m6.jpg?v=2" },
            { id: 6, title: "", image: "/Maternity/m7.jpg?v=2" },
            { id: 7, title: "", image: "/Maternity/m8.jpg?v=2" },
            { id: 8, title: "", image: "/Maternity/m9.jpg?v=2" },
            { id: 9, title: "", image: "/Maternity/m12.jpg?v=2" },
            { id: 10, title: "", image: "/Maternity/m13.jpg?v=2" },
            { id: 11, title: "", image: "/Maternity/m14.jpg?v=2" },
            { id: 12, title: "", image: "/Maternity/m15.jpg?v=2" },
            { id: 13, title: "", image: "/Maternity/m18.jpg?v=2" },
            { id: 14, title: "", image: "/Maternity/m19.jpg?v=2" },
            { id: 15, title: "", image: "/Maternity/m20.jpg?v=2" },
            { id: 16, title: "", image: "/Maternity/m21.jpg?v=2" },
            { id: 17, title: "", image: "/Maternity/m22.jpg?v=2" },
            { id: 18, title: "", image: "/Maternity/m23.jpg?v=2" },
            { id: 19, title: "", image: "/Maternity/m25.jpg?v=2" },
            { id: 20, title: "", image: "/Maternity/m26.jpg?v=2" },
            { id: 21, title: "", image: "/Maternity/m27.jpg?v=2" },
            { id: 22, title: "", image: "/Maternity/m28.jpg?v=2" },
            { id: 23, title: "", image: "/Maternity/m29.JPG?v=2" },
            { id: 24, title: "", image: "/Maternity/m30.JPG?v=2" },
            { id: 25, title: "", image: "/Maternity/m31.JPG?v=2" },
            { id: 26, title: "", image: "/Maternity/m32.JPG?v=2" },
            { id: 27, title: "", image: "/Maternity/m33.JPG?v=2" },
            { id: 28, title: "", image: "/Maternity/m34.JPG?v=2" },
            { id: 29, title: "", image: "/Maternity/m35.JPG?v=2" },
            { id: 30, title: "", image: "/Maternity/m36.JPG?v=2" },
            { id: 31, title: "", image: "/Maternity/m37.JPG?v=2" },
            { id: 32, title: "", image: "/Maternity/m38.JPG?v=2" },
            { id: 33, title: "", image: "/Maternity/m39.JPG?v=2" },
            { id: 34, title: "", image: "/Maternity/m40.JPG?v=2" }
        ]
    },
    "baby": {
        title: "Best Baby Photography",
        tagline: "Tiny hands, tiny feet, endless love.",
        description: "Every little smile is a memory worth keeping forever. Capturing the magic of life's sweetest beginnings.",
        whyChooseTitle: "Why choose our baby photography?",
        whyChooseText: "Because they are only this little once. Preserving the innocence, wonder, and joy of childhood.",
        heroImage: "/Baby/1.jpg?v=2",
        collageImages: ["/Baby/2.jpg?v=2"],
        albums: [
            { id: 1, title: "", image: "/Baby/1.jpg?v=2" },
            { id: 2, title: "", image: "/Baby/2.jpg?v=2" },
            { id: 3, title: "", image: "/Baby/3.jpg?v=2" },
            { id: 4, title: "", image: "/Baby/4.jpg?v=2" },
            { id: 5, title: "", image: "/Baby/5.jpg?v=2" },
            { id: 6, title: "", image: "/Baby/6.jpg?v=2" },
            { id: 7, title: "", image: "/Baby/7.jpg?v=2" },
            { id: 8, title: "", image: "/Baby/8.jpg?v=2" },
            { id: 9, title: "", image: "/Baby/9.jpg?v=2" },
            { id: 10, title: "", image: "/Baby/18.JPG?v=2" },
            { id: 11, title: "", image: "/Baby/19.JPG?v=2" },
            { id: 12, title: "", image: "/Baby/20.JPG?v=2" },
            { id: 13, title: "", image: "/Baby/21.JPG?v=2" },
            { id: 14, title: "", image: "/Baby/22.JPG?v=2" },
            { id: 15, title: "", image: "/Baby/23.JPG?v=2" },
            { id: 16, title: "", image: "/Baby/24.JPG?v=2" },
            { id: 17, title: "", image: "/Baby/25.jpg?v=2" },
            { id: 18, title: "", image: "/Baby/26.jpg?v=2" },
            { id: 19, title: "", image: "/Baby/27.jpg?v=2" },
            { id: 20, title: "", image: "/Baby/28.jpg?v=2" },
            { id: 21, title: "", image: "/Baby/29.jpg?v=2" },
            { id: 22, title: "", image: "/Baby/30.jpg?v=2" },
            { id: 23, title: "", image: "/Baby/31.JPG?v=2" },
            { id: 24, title: "", image: "/Baby/32.JPG?v=2" },
            { id: 25, title: "", image: "/Baby/35.jpg?v=2" },
            { id: 26, title: "", image: "/Baby/36.jpg?v=2" },
            { id: 27, title: "", image: "/Baby/37.jpg?v=2" },
            { id: 28, title: "", image: "/Baby/38.jpg?v=2" },
            { id: 29, title: "", image: "/Baby/39.jpg?v=2" },
            { id: 30, title: "", image: "/Baby/40.JPG?v=2" },
            { id: 31, title: "", image: "/Baby/41.JPG?v=2" },
            { id: 32, title: "", image: "/Baby/42.jpg?v=2" },
            { id: 33, title: "", image: "/Baby/43.jpg?v=2" },
            { id: 34, title: "", image: "/Baby/44.jpg?v=2" },
            { id: 35, title: "", image: "/Baby/45.jpg?v=2" },
            { id: 36, title: "", image: "/Baby/46.jpg?v=2" },
            { id: 37, title: "", image: "/Baby/47.jpg?v=2" },
            { id: 38, title: "", image: "/Baby/48.jpg?v=2" },
            { id: 39, title: "", image: "/Baby/49.jpg?v=2" },
            { id: 40, title: "", image: "/Baby/50.jpg?v=2" },
            { id: 41, title: "", image: "/Baby/51.jpg?v=2" },
            { id: 42, title: "", image: "/Baby/52.JPG?v=2" },
            { id: 43, title: "", image: "/Baby/53.JPG?v=2" },
            { id: 44, title: "", image: "/Baby/54.JPG?v=2" },
            { id: 45, title: "", image: "/Baby/55.JPG?v=2" },
            { id: 46, title: "", image: "/Baby/56.jpg?v=2" },
            { id: 47, title: "", image: "/Baby/57.JPG?v=2" },
            { id: 48, title: "", image: "/Baby/58.jpg?v=2" },
            { id: 49, title: "", image: "/Baby/59.jpg?v=2" },
            { id: 50, title: "", image: "/Baby/60.jpg?v=2" },
            { id: 51, title: "", image: "/Baby/61.jpg?v=2" },
            { id: 52, title: "", image: "/Baby/62.jpg?v=2" }
        ]
    },
    "candid": {
        title: "Candid Wedding Films",
        tagline: "Every glance, every smile, captured in its purest form.",
        description: "Experience your wedding day through our cinematic lens. Our candid films focus on the unscripted moments, the laughter, the tears, and the genuine connections that make your story unique. We tell your story just as it happened, preserving the essence of your most precious day.",
        whyChooseTitle: "Why choose our candid wedding films?",
        whyChooseText: "We specialize in cinematic storytelling that goes beyond traditional videography. Our team uses state-of-the-art equipment and creative editing techniques to create films that are emotionally resonant and visually stunning.",
        heroImage: "/4Z5A4700.jpg?v=2",
        albums: [],
        videoList: [
            {
                id: 1,
                title: "A Love Like This",
                subtitle: "An epic celebration of love set against the stunning backdrop of Chennai. A story of two souls becoming one.",
                location: "Chennai, India",
                date: "Dec 2024",
                url: "/Bs.mp4"
            },
            {
                id: 2,
                title: "The Vows",
                subtitle: "Sneha & Arjun",
                location: "Kerala",
                url: "/Ma.mp4"
            },
            {
                id: 3,
                title: "Under The Stars",
                subtitle: "Priya & Vikram",
                location: "Bangalore",
                url: "/Mk.mp4"
            },
            {
                id: 4,
                title: "Eternal Promise",
                subtitle: "Divya & Karthik",
                location: "Coimbatore",
                url: "/Aa.mp4"
            },
            {
                id: 5,
                title: "Midnight Joy",
                subtitle: "Aisha & Rohan",
                location: "Goa",
                url: "/Ss.mp4"
            },
            {
                id: 6,
                title: "Sunlit Whispers",
                location: "Ooty",
                url: "/Od.mp4"
            },
            {
                id: 7,
                title: "A New Beginning",
                location: "Chennai",
                url: "/Bby.mp4"
            },
            {
                id: 8,
                title: "The Grand Affair",
                subtitle: "A luxury celebration spanning three days of joy, color, and tradition.",
                location: "Udaipur",
                date: "Oct 2024",
                url: "/Mk1.mp4"
            }
        ]
    },
    "outdoor-video": {
        title: "Outdoor Wedding Films",
        tagline: "Nature's beauty meets your eternal bond.",
        description: "Capture the romance of your outdoor wedding in stunning cinematic detail. From sun-drenched ceremonies to twilight celebrations, we document every moment against the beautiful backdrop of nature.",
        whyChooseTitle: "Expert Outdoor Cinematography",
        whyChooseText: "We are experts at working with natural light and outdoor environments. Our team ensures that your outdoor wedding film is perfectly exposed and beautifully framed.",
        heroImage: "/landscape.png?v=2",
        albums: [],
        videoList: [
            { id: 1, title: "The Grand Affair", url: "/Mk1.mp4" },
            { id: 2, title: "Eternal Promise", url: "/Aa.mp4" },
            { id: 3, title: "Midnight Joy", url: "/Ss.mp4" }
        ]
    },
    "short-stories-video": {
        title: "Short Stories",
        tagline: "Every fleeting second, a lifetime of memories.",
        description: "Our short stories are high-impact, emotional highlights of your special day. We distill the absolute best moments into a cinematic experience that lets you relive the magic in just a few minutes.",
        whyChooseTitle: "Professional Cinematic Storytelling",
        whyChooseText: "We focus on the narrative arc of your day, ensuring every cut, transition, and musical choice enhances the emotional journey of your wedding story.",
        heroImage: "/suba.jpg?v=2",
        albums: [],
        videoList: [
            { id: 1, title: "A Day in the Sun", url: "/Od.mp4" },
            { id: 2, title: "Baby Shower Joy", url: "/Bby.mp4" }
        ]
    },
    "male-model": {
        title: "Male Model Photography",
        tagline: "Strong, striking, and effortlessly cinematic.",
        description: "Whether you're building a professional portfolio, looking for high-fashion editorial shots, or needing polished lifestyle images, we specialize in capturing the bold and distinct personality of our male clients. We use dramatic lighting, sharp compositions, and creative direction to ensure you stand out.",
        whyChooseTitle: "Professional Portfolio Building",
        whyChooseText: "From classic portraits to contemporary fashion styles, we tailor our shoots to highlight your unique features and strengths. Our team will guide you through posing and expressions to achieve a magazine-ready look.",
        heroImage: "/landscape.png?v=2",
        trailImages: [
            "/portfolio/Male/1.jpg?v=2",
            "/portfolio/Male/2.jpg?v=2",
            "/portfolio/Male/3.jpg?v=2",
            "/portfolio/Male/4.JPG?v=2",
            "/portfolio/Male/5.JPG?v=2",
            "/portfolio/Male/6.JPG?v=2",
            "/portfolio/Male/7.jpg?v=2",
            "/portfolio/Male/8.JPG?v=2",
            "/portfolio/Male/9.JPG?v=2",
            "/portfolio/Male/10.JPG?v=2",
            "/portfolio/Male/11.JPG?v=2",
            "/portfolio/Male/12.JPG?v=2"
        ],
        albums: [
            { id: 1, title: "", image: "/portfolio/Male/1.jpg?v=2" },
            { id: 2, title: "", image: "/portfolio/Male/2.jpg?v=2" },
            { id: 3, title: "", image: "/portfolio/Male/3.jpg?v=2" },
            { id: 4, title: "", image: "/portfolio/Male/4.JPG?v=2" },
            { id: 5, title: "", image: "/portfolio/Male/5.JPG?v=2" },
            { id: 6, title: "", image: "/portfolio/Male/6.JPG?v=2" },
            { id: 7, title: "", image: "/portfolio/Male/7.jpg?v=2" },
            { id: 8, title: "", image: "/portfolio/Male/8.JPG?v=2" },
            { id: 9, title: "", image: "/portfolio/Male/9.JPG?v=2" },
            { id: 10, title: "", image: "/portfolio/Male/10.JPG?v=2" },
            { id: 11, title: "", image: "/portfolio/Male/11.JPG?v=2" },
            { id: 12, title: "", image: "/portfolio/Male/12.JPG?v=2" },
            { id: 13, title: "", image: "/portfolio/Male/13.jpg?v=2" },
            { id: 18, title: "", image: "/portfolio/Male/18.jpg?v=2" },
            { id: 19, title: "", image: "/portfolio/Male/19.jpg?v=2" },
            { id: 20, title: "", image: "/portfolio/Male/20.jpg?v=2" }
        ]
    },
    "female-model": {
        title: "Female Model Photography",
        tagline: "Elegance, grace, and captivating beauty.",
        description: "Our female model photography ranges from stunning high-fashion and beauty portraits to artistic editorial concepts. We understand that every model brings a different aura, and we work collaboratively to highlight your unique style with flawless lighting, styling suggestions, and creative angles.",
        whyChooseTitle: "Elevate Your Modeling Career",
        whyChooseText: "A strong portfolio is your best asset. We focus on versatility, capturing a wide range of emotions and looks—from natural, stripped-back beauty to highly stylized fashion shots. Let us help you create an unforgettable impression.",
        heroImage: "/landscape.png?v=2",
        trailImages: [
            "/portfolio/Female/1.jpg?v=2",
            "/portfolio/Female/2.jpg?v=2",
            "/portfolio/Female/3.jpg?v=2",
            "/portfolio/Female/4.JPG?v=2",
            "/portfolio/Female/5.JPG?v=2",
            "/portfolio/Female/6.JPG?v=2",
            "/portfolio/Female/7.jpg?v=2",
            "/portfolio/Female/8.jpg?v=2",
            "/portfolio/Female/9.jpg?v=2",
            "/portfolio/Female/10.jpg?v=2",
            "/portfolio/Female/11.jpg?v=2",
            "/portfolio/Female/12.jpg?v=2"
        ],
        albums: [
            { id: 1, title: "", image: "/portfolio/Female/1.jpg?v=2" },
            { id: 2, title: "", image: "/portfolio/Female/2.jpg?v=2" },
            { id: 3, title: "", image: "/portfolio/Female/3.jpg?v=2" },
            { id: 4, title: "", image: "/portfolio/Female/4.JPG?v=2" },
            { id: 5, title: "", image: "/portfolio/Female/5.JPG?v=2" },
            { id: 6, title: "", image: "/portfolio/Female/6.JPG?v=2" },
            { id: 7, title: "", image: "/portfolio/Female/7.jpg?v=2" },
            { id: 8, title: "", image: "/portfolio/Female/8.jpg?v=2" },
            { id: 9, title: "", image: "/portfolio/Female/9.jpg?v=2" },
            { id: 10, title: "", image: "/portfolio/Female/10.jpg?v=2" },
            { id: 11, title: "", image: "/portfolio/Female/11.jpg?v=2" },
            { id: 12, title: "", image: "/portfolio/Female/12.jpg?v=2" },
            { id: 13, title: "", image: "/portfolio/Female/13.jpg?v=2" },
            { id: 14, title: "", image: "/portfolio/Female/14.jpg?v=2" },
            { id: 15, title: "", image: "/portfolio/Female/15.jpg?v=2" },
            { id: 16, title: "", image: "/portfolio/Female/16.jpg?v=2" },
            { id: 17, title: "", image: "/portfolio/Female/17.jpg?v=2" },
            { id: 18, title: "", image: "/portfolio/Female/18.jpg?v=2" },
            { id: 19, title: "", image: "/portfolio/Female/19.jpg?v=2" },
            { id: 20, title: "", image: "/portfolio/Female/20.jpg?v=2" },
            { id: 21, title: "", image: "/portfolio/Female/21.jpg?v=2" },
            { id: 22, title: "", image: "/portfolio/Female/22.jpg?v=2" },
            { id: 23, title: "", image: "/portfolio/Female/23.jpg?v=2" },
            { id: 24, title: "", image: "/portfolio/Female/24.jpg?v=2" },
            { id: 25, title: "", image: "/portfolio/Female/25.jpg?v=2" },
            { id: 26, title: "", image: "/portfolio/Female/26.jpg?v=2" },
            { id: 27, title: "", image: "/portfolio/Female/27.jpg?v=2" },
            { id: 28, title: "", image: "/portfolio/Female/28.JPG?v=2" }
        ]
    }
};

export const defaultContent: CategoryContent = {
    title: "Premium Photography Services",
    tagline: "Capturing your most cherished moments.",
    description: "At Suba Studios, we believe in telling your story through our lens. Whether it's a wedding, a pre-wedding shoot, or a special event, we bring our artistic vision and technical expertise to create stunning visuals that you will treasure forever.",
    whyChooseTitle: "Why Choose Suba Studios?",
    whyChooseText: "With over a decade of experience and a passion for storytelling, we are the preferred choice for couples who want nothing but the best. Our team of expert photographers and cinematographers work tirelessly to ensure every frame is a masterpiece.",
    heroImage: "/landscape.png?v=2",
    albums: [
        { id: 1, title: "Latest Wedding Collection", image: "/portfolio_wedding.png?v=2" },
        { id: 2, title: "Cinematic Highlights", image: "/landscape.png?v=2" },
        { id: 3, title: "Portrait Session", image: "/portrait.png?v=2" },
    ]
};
