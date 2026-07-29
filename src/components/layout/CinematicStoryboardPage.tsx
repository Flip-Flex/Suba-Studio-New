import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SmoothScroll from '@/components/layout/SmoothScroll';
import { CinematicLightbox } from '@/components/ui/cinematic-lightbox';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { categoryData } from '@/data/categoryContent';
import { useParams, useLocation } from 'react-router-dom';
import imageMetadata from '@/data/imageMetadata.json';

gsap.registerPlugin(ScrollTrigger);

const getOrientationAspect = (src: string, defaultClass: string) => {
    const cleanSrc = src.split('?')[0];
    const meta = (imageMetadata as Record<string, { width: number; height: number; orientation?: string }>)[cleanSrc];
    if (meta?.orientation === 'landscape') {
        return "aspect-[4/3] md:aspect-[3/2]";
    }
    return defaultClass;
};

const categoryQuotes: Record<string, string[]> = {
  "hindu": [
    "Every sacred ritual marks<br/>the beginning of a <span class='text-[#D4AF37]'>lifetime together</span>.",
    "Where traditions meet emotions,<br/><span class='text-[#D4AF37]'>timeless memories</span> are created.",
    "Every sacred fire witnesses<br/>a <span class='text-[#D4AF37]'>promise that lasts forever</span>.",
    "Preserving every sacred moment<br/>with <span class='text-[#D4AF37]'>grace, elegance, and heart</span>.",
  ],
  "christian": [
    "Where faith unites two hearts,<br/>love finds its <span class='text-[#D4AF37]'>forever home</span>.",
    "Every prayer, every smile,<br/>every embrace tells a <span class='text-[#D4AF37]'>sacred story</span>.",
    "<span class='text-[#D4AF37]'>Two souls, one promise</span>,<br/>countless memories.",
    "Honoring your covenant<br/>with <span class='text-[#D4AF37]'>photographs that last a lifetime</span>.",
  ],
  "engagement": [
    "Every forever begins<br/>with a single <span class='text-[#D4AF37]'>'Yes.'</span>",
    "The promise of forever<br/>deserves its <span class='text-[#D4AF37]'>own story</span>.",
    "Because every love story<br/>deserves a <span class='text-[#D4AF37]'>beautiful beginning</span>.",
  ],
  "pre-wedding": [
    "Before the vows, there is<br/>a <span class='text-[#D4AF37]'>love story</span> waiting to be told.",
    "Every adventure together<br/>deserves to be <span class='text-[#D4AF37]'>remembered</span>.",
    "Romance isn't posed—<br/>it's <span class='text-[#D4AF37]'>felt</span>.",
    "Beautiful beginnings deserve<br/><span class='text-[#D4AF37]'>timeless photographs</span>.",
  ],
  "post-wedding": [
    "The celebration may end,<br/>but your <span class='text-[#D4AF37]'>story has only begun</span>.",
    "Beyond the ceremony lies<br/>a <span class='text-[#D4AF37]'>lifetime of beautiful memories</span>.",
    "Your journey together is<br/>the <span class='text-[#D4AF37]'>greatest story</span> we'll ever capture.",
    "Every new beginning deserves<br/>another <span class='text-[#D4AF37]'>beautiful frame</span>.",
  ],
  "maternity": [
    "Every heartbeat tells the story<br/>of a <span class='text-[#D4AF37]'>love yet to be seen</span>.",
    "Celebrating the quiet<br/><span class='text-[#D4AF37]'>strength of motherhood</span>.",
    "Holding <span class='text-[#D4AF37]'>tomorrow close</span><br/>before it arrives.",
    "Capturing the beauty<br/>of the <span class='text-[#D4AF37]'>life growing within</span>.",
  ],
  "baby": [
    "Tiny hands, tiny feet,<br/><span class='text-[#D4AF37]'>endless love</span>.",
    "Because they are only<br/><span class='text-[#D4AF37]'>this little once</span>.",
    "Today's tiny moments become<br/>tomorrow's <span class='text-[#D4AF37]'>greatest memories</span>.",
  ],
};

// Helper to chunk array
const chunkArray = <T,>(arr: T[], size: number) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
};

const getCoverImage = (subcat: string) => {
    switch (subcat) {
        case 'baby': return '/cover/baby.jpg';
        case 'christian': return '/cover/christian.JPG';
        case 'engagement': return '/cover/engagement.JPG';
        case 'hindu': return '/cover/hindu.jpg';
        case 'maternity': return '/cover/matrenity.jpg';
        case 'post-wedding': return '/cover/postwedding.JPG';
        case 'pre-wedding': return '/cover/prewedding.jpg';
        default: return null;
    }
};

export default function CinematicStoryboardPage({ subcategory }: { subcategory: string }) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const mainRef = useRef<HTMLElement>(null);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [subcategory]); // Scroll to top when subcategory changes

    // 1. Fetch data for this specific category
    const content = categoryData[subcategory];
    
    // Combine hero, collage, and album images into a single flat list for the storyboard
    // We map them to the full HinduWeddingImage format the Lightbox expects
    const allImages = [
        ...(content?.heroImage && !content.heroImage.endsWith('.mp4') ? [{ src: content.heroImage, width: (imageMetadata as any)[content.heroImage.split('?')[0]]?.width || 1080, height: (imageMetadata as any)[content.heroImage.split('?')[0]]?.height || 1350, orientation: (imageMetadata as any)[content.heroImage.split('?')[0]]?.orientation || 'portrait' }] : []),
        ...(content?.collageImages ? content.collageImages.filter(img => !img.endsWith('.mp4')).map(img => ({ src: img, width: (imageMetadata as any)[img.split('?')[0]]?.width || 1080, height: (imageMetadata as any)[img.split('?')[0]]?.height || 1350, orientation: (imageMetadata as any)[img.split('?')[0]]?.orientation || 'portrait' })) : []),
        ...(content?.albums ? content.albums.filter(album => album.image && !album.image.endsWith('.mp4')).map(album => ({ src: album.image, width: (imageMetadata as any)[album.image.split('?')[0]]?.width || 1080, height: (imageMetadata as any)[album.image.split('?')[0]]?.height || 1350, orientation: (imageMetadata as any)[album.image.split('?')[0]]?.orientation || 'portrait' })) : [])
    ];

    // Remove duplicates just in case
    const uniqueImages = Array.from(new Map(allImages.map(item => [item.src, item])).values());

    // Chunk images into groups of 3
    const chapters = chunkArray(uniqueImages, 3);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!mainRef.current) return;
            // Quote fade-in only
            const quotes = gsap.utils.toArray('.quote-section') as HTMLElement[];
            quotes.forEach((quote) => {
                const text = quote.querySelector('.quote-text');
                const bg = quote.querySelector('.quote-bg');
                if (text) {
                    gsap.fromTo(text,
                        { y: 50, opacity: 0 },
                        {
                            y: 0, opacity: 1, duration: 1.5, ease: "power3.out",
                            scrollTrigger: {
                                trigger: quote,
                                start: "top 70%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }
                if (bg) {
                    gsap.fromTo(bg,
                        { yPercent: -15 },
                        {
                            yPercent: 15,
                            ease: "none",
                            scrollTrigger: {
                                trigger: quote,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: true
                            }
                        }
                    );
                }
            });
        }, mainRef);
        return () => ctx.revert();
    }, [chapters.length, subcategory]);

    // Framer Motion variants matching the Our Works masonry-grid animation
    const imgVariants = {
        hidden: (dir: number) => ({
            opacity: 0,
            y: 50,
            x: dir * 120,
            scale: 0.92,
        }),
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                damping: 22,
                stiffness: 100,
            },
        },
    };


    // Fallback if content isn't found
    if (!content) {
        return <div className="min-h-screen bg-black text-white flex items-center justify-center">Category not found</div>;
    }

    return (
        <SmoothScroll>
            <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#D4AF37]/30 selection:text-white overflow-x-hidden">
                {/* Intro Section */}
                <section className="min-h-screen flex flex-col items-center justify-center text-center relative z-20">
                    {/* Cover Background */}
                    {getCoverImage(subcategory) && (
                        <div className="absolute inset-0 z-0">
                            <img 
                                src={getCoverImage(subcategory)!} 
                                alt={`${subcategory} cover`} 
                                className="w-full h-full object-cover object-center" 
                            />
                            {/* Dark overlay for readability */}
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>
                    )}
                    
                    <div className="relative z-10 w-full px-4 md:px-8 pt-20 md:pt-24 flex flex-col items-center justify-center h-full">
                        <p className="text-[#D4AF37] tracking-[0.3em] uppercase text-xs md:text-sm mb-6 font-poppins drop-shadow-md">{content.tagline}</p>
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-playfair mb-6 leading-tight tracking-tight px-4 drop-shadow-lg">
                            {content.title.split(' Photography')[0]} <br className="md:hidden" />
                            <span className="italic text-white/90">Photography</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-white/80 font-inter text-sm md:text-base leading-relaxed font-light px-4 drop-shadow-md">
                            {content.description}
                        </p>
                    </div>
                </section>

                <main ref={mainRef} className="w-full relative z-10">
                    {chapters.map((chunk, chapterIdx) => {
                        const isLast = chapterIdx === chapters.length - 1;
                        const showQuote = chapterIdx % 2 === 0 && !isLast;
                        const quotes = categoryQuotes[subcategory] || categoryQuotes["hindu"];
                        const quoteHtml = quotes[chapterIdx % quotes.length];
                        
                        return (
                            <React.Fragment key={`chapter-${chapterIdx}`}>
                                {/* Story Chapter - Cinematic 3-Image Stack */}
                                <section className="story-chapter relative w-full min-h-[100vh] md:min-h-[90vh] flex flex-col items-center justify-center py-16 md:py-20 px-4 md:px-12 lg:px-24 overflow-hidden">
                                    <div className="w-full max-w-[1800px] mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 md:items-center">
                                        
                                        {/* Image 1 (Left Desktop, Top Mobile) */}
                                        {chunk[0] && (
                                            <motion.div 
                                                custom={-1}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: false, amount: 0.1 }}
                                                variants={imgVariants}
                                                className={`story-img-1 w-[85%] mr-auto md:w-full md:col-span-1 lg:col-span-3 lg:col-start-2 relative ${getOrientationAspect(chunk[0].src, 'aspect-[4/5] md:aspect-[3/4]')} rounded-[16px] md:rounded-[24px] overflow-hidden cursor-pointer group will-change-transform z-10`}
                                                onClick={() => {
                                                    const imgIdx = uniqueImages.findIndex(i => i.src === chunk[0].src);
                                                    setLightboxIndex(imgIdx);
                                                }}
                                            >
                                                <img 
                                                    src={chunk[0].src} 
                                                    alt="Cinematic Detail" 
                                                    loading="lazy"
                                                    className="w-full h-full object-cover transition-all duration-700 ease-out md:group-hover:scale-[1.03] md:group-hover:brightness-105"
                                                />
                                            </motion.div>
                                        )}

                                        {/* Image 2 (Center Hero Desktop, Middle Mobile) */}
                                        {chunk[1] && (
                                            <motion.div 
                                                custom={0}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: false, amount: 0.1 }}
                                                variants={imgVariants}
                                                className={`story-img-2 w-[95%] mx-auto -mt-16 md:mt-0 md:w-full col-span-1 lg:col-span-4 relative ${getOrientationAspect(chunk[1].src, 'aspect-[3/4] md:aspect-[4/5]')} rounded-[16px] md:rounded-[28px] overflow-hidden cursor-pointer group will-change-transform z-20`}
                                                onClick={() => {
                                                    const imgIdx = uniqueImages.findIndex(i => i.src === chunk[1].src);
                                                    setLightboxIndex(imgIdx);
                                                }}
                                            >
                                                <img 
                                                    src={chunk[1].src} 
                                                    alt="Cinematic Hero Moment" 
                                                    loading="lazy"
                                                    className="w-full h-full object-cover transition-all duration-700 ease-out md:group-hover:scale-[1.03] md:group-hover:brightness-105"
                                                />
                                            </motion.div>
                                        )}

                                        {/* Image 3 (Right Desktop, Bottom Mobile) */}
                                        {chunk[2] && (
                                            <motion.div 
                                                custom={1}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: false, amount: 0.1 }}
                                                variants={imgVariants}
                                                className={`story-img-3 w-[85%] ml-auto -mt-16 md:mt-0 md:w-full lg:col-span-3 lg:col-end-12 relative ${getOrientationAspect(chunk[2].src, 'aspect-[4/5] md:aspect-[3/4]')} rounded-[16px] md:rounded-[24px] overflow-hidden cursor-pointer group will-change-transform z-10`}
                                                onClick={() => {
                                                    const imgIdx = uniqueImages.findIndex(i => i.src === chunk[2].src);
                                                    setLightboxIndex(imgIdx);
                                                }}
                                            >
                                                <img 
                                                    src={chunk[2].src} 
                                                    alt="Cinematic Detail" 
                                                    loading="lazy"
                                                    className="w-full h-full object-cover transition-all duration-700 ease-out md:group-hover:scale-[1.03] md:group-hover:brightness-105"
                                                />
                                            </motion.div>
                                        )}
                                    </div>
                                </section>

                                {/* Full-Screen Editorial Quote Section */}
                                {showQuote && (
                                    <section className="quote-section relative w-full h-[60vh] md:h-[100vh] flex items-center justify-center overflow-hidden bg-[#050505]">
                                        {/* Blurred background image */}
                                        <div className="absolute inset-0 z-0 overflow-hidden">
                                            <div 
                                                className="quote-bg w-full h-[130%] -top-[15%] absolute bg-cover bg-center opacity-30" 
                                                style={{ 
                                                    backgroundImage: `url(${chunk[1]?.src || chunk[0]?.src})`,
                                                    filter: 'blur(15px)'
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-black/70 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
                                        </div>
                                        
                                        {/* Quote Text */}
                                        <div className="relative z-10 px-6 max-w-5xl text-center">
                                            <h2 
                                                className="quote-text font-playfair text-3xl md:text-5xl lg:text-7xl leading-snug md:leading-tight text-white/90 font-light"
                                                dangerouslySetInnerHTML={{ __html: quoteHtml }}
                                            />
                                        </div>
                                    </section>
                                )}
                            </React.Fragment>
                        );
                    })}
                </main>

                {/* Final CTA Section */}
                <section className="relative z-20 w-full min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center py-20 md:py-32 px-6 border-t border-white/5">
                    <div className="max-w-2xl text-center">
                        <span className="block font-poppins text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#D4AF37] mb-6 md:mb-8">{content.whyChooseTitle}</span>
                        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 md:mb-8">Ready to Tell Your Story?</h2>
                        <p className="font-poppins text-white/60 mb-10 md:mb-12 max-w-lg mx-auto text-sm md:text-base leading-relaxed px-4">
                            {content.whyChooseText}
                        </p>
                        <a href="tel:+919894442768" className="inline-block px-8 py-4 md:px-10 md:py-5 bg-transparent border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-500 font-poppins text-xs md:text-sm tracking-widest uppercase hover:bg-[#D4AF37]/5 cursor-pointer">
                            Book Subha Studios
                        </a>
                    </div>
                </section>

                {/* Lightbox Overlay */}
                <CinematicLightbox 
                    images={uniqueImages}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxIndex(null)}
                    onNavigate={setLightboxIndex}
                />
            </div>
        </SmoothScroll>
    );
}
