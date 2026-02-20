"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Bomb, Crosshair, Ghost, Mail, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="compact"
      sizing="largeSmall"
      background="circleGradient"
      cardStyle="inset"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Superkot"
          navItems={[
            { name: 'Legend', id: 'legend' },
            { name: 'Skills', id: 'skills' },
            { name: 'Stats', id: 'stats' },
            { name: 'Fans', id: 'fans' },
            { name: 'Contact', id: 'contact' },
          ]}
          button={{ text: 'Get Schooled' }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Vitaliy 'Superkot' Zalupenko: The Unrivaled Legend"
          description="Witness the unparalleled genius of a CS2 player who redefines the meaning of 'strategic disadvantage'. Join the fandom!"
          background={{ variant: 'canvas-reveal' }}
          tag="0 Kills, 24 Deaths, Infinite Laughter"
          buttons={[
            { text: 'Praise Superkot', href: '#about' },
            { text: 'Join the Clown Fiesta', href: '#contact' },
          ]}
          imageSrc="https://img.b2bpic.net/free-photo/young-hispanic-man-streamer-stressed-using-computer-gaming-room_839833-35208.jpg"
          imageAlt="Vitaliy 'Superkot' Zalupenko looking confused with a flashbang in hand."
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          title="A True Prodigy of Friendly Fire"
          description="Vitaliy 'Superkot' Zalupenko isn't just a player; he's a phenomenon. With a unique playstyle focused on 'area denial' (for his own team) and 'tactical self-elimination', Superkot proves that every game needs a hero... or at least, a hilarious distraction. His uncanny ability to flash his own teammates and secure zero kills per match has earned him a legendary status among his unfortunate squad."
          metrics={[
            { value: '100%', title: 'Teammate Flashed' },
            { value: '0', title: 'Kills Per Match' },
          ]}
          useInvertedBackground={false}
          tag="The Art of Misplay"
          imageSrc="https://img.b2bpic.net/free-photo/front-view-young-soldier-camouflage-with-gun-black-wall_140725-96009.jpg?_wi=1"
          imageAlt="A cartoon illustration of a CS2 team being flashed by a friendly grenade."
          mediaAnimation='slide-up'
          metricsAnimation='slide-up'
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTen
          features={[
            {
              id: '1',
              title: 'Master of Self-Sacrifice',
              description: 'Vitaliy excels at trading his own life for absolutely no tactical advantage. A true pioneer in negative K/D strategies, ensuring the enemy team never gets overconfident.',
              media: { imageSrc: 'https://img.b2bpic.net/free-photo/young-professional-game-player-screaming-with-hands-raised-after-his-victory_482257-29597.jpg', imageAlt: "Superkot striking a humorous pose after a 'successful' self-sacrifice." },
              items: [
                { icon: Zap, text: 'Guaranteed 0.0 K/D' },
                { icon: Bomb, text: 'Frequent accidental bomb drops' },
              ],
              reverse: false,
            },
            {
              id: '2',
              title: 'The Friendly Fire Flashbang',
              description: "His signature move: the perfectly timed, perfectly placed flashbang... directly into his teammates' faces. Opponents often wonder how his team even moves.",              media: { imageSrc: 'https://img.b2bpic.net/free-photo/front-view-young-soldier-camouflage-with-gun-black-wall_140725-96009.jpg?_wi=2', imageAlt: 'Another angle of a CS2 team being blinded by a friendly flashbang.' },
              items: [
                { icon: Ghost, text: 'Turns allies into ghosts (temporarily)' },
                { icon: Crosshair, text: 'Enemy vision remains pristine' },
              ],
              reverse: true,
            },
          ]}
          title="Superkot's 'Signature' Skills"
          description="A deep dive into the unique abilities that make Vitaliy 'Superkot' Zalupenko a force to be reckoned with... for his own team."
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTen
          metrics={[
            { id: '1', title: 'Average Kills', subtitle: 'Per Match', category: 'Precision', value: '0.00' },
            { id: '2', title: 'Average Deaths', subtitle: 'Per Match', category: 'Commitment', value: '24+' },
            { id: '3', title: 'Teammate Flashes', subtitle: 'Per Round', category: 'Teamplay', value: '1-3' },
            { id: '4', title: 'Bomb Plants', subtitle: 'Accidental', category: 'Tactics', value: '5%' },
          ]}
          title="His Legendary Stats"
          description="Numbers don't lie. Or maybe they do, because how is this even possible?"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Playing with Superkot is... an experience. You learn to play blindfolded, through smoke, and with a constant fear of friendly fire. It's truly character-building."
          rating={5}
          author="Distraught Teammate #420, Valve Community Forum"
          avatars={[
            { src: 'https://img.b2bpic.net/free-vector/online-games-concept_23-2148532882.jpg', alt: 'Fan Avatar 1' },
            { src: 'https://img.b2bpic.net/free-photo/futuristic-robot-listening-music-headphones_23-2151073024.jpg', alt: 'Fan Avatar 2' },
            { src: 'https://img.b2bpic.net/free-photo/surprised-young-sporty-man-with-wrist-bandage-wearing-headphones-with-phone-arm-band-points-isolated-pink-wall_141793-78524.jpg', alt: 'Fan Avatar 3' },
            { src: 'https://img.b2bpic.net/free-photo/portrait-young-handsome-man-earphones-dark-haired-man-casual-clothes-looking-camera-portrait-concept_74855-24635.jpg', alt: 'Fan Avatar 4' },
            { src: 'https://img.b2bpic.net/free-vector/online-games-concept_23-2148532882.jpg', alt: 'Fan Avatar 5' },
            { src: 'https://img.b2bpic.net/free-photo/scene-professional-esports-gamer-profile-colored-with-red-blue-light-generative-ai_191095-1967.jpg', alt: 'Fan Avatar 6' },
          ]}
          useInvertedBackground={true}
          ratingAnimation="blur-reveal"
          avatarsAnimation="blur-reveal"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          faqs={[
            { id: '1', title: "Is Vitaliy 'Superkot' Zalupenko actually real?", content: "Of course! Legends aren't born; they're made through countless friendly fire incidents and 0-kill games. You can't make this level of 'skill' up!" },
            { id: '2', title: 'How can I get Superkot on my team?', content: "You don't. Superkot chooses you. Usually, it's a random matchmaking assignment, a cosmic joke played by the CS2 gods, or a desperate plea from an enemy team wanting a handicap." },
            { id: '3', title: "What's his secret to 0 kills?", content: "It's a closely guarded secret, rumored to involve advanced wall-staring techniques, strategic weapon drops for the enemy, and an unwavering commitment to 'not engaging'." },
            { id: '4', title: 'Does he ever get frustrated?', content: "Superkot remains calm under pressure, often attributing his performance to 'server lag' or 'tactical deception'. His composure is truly admirable, if not understandable." },
          ]}
          title="Frequently Asked (and Feared) Questions"
          description="Got burning questions about the enigma that is Superkot? We've got 'answers'!"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          faqs={[
            { id: '1', title: 'Can I challenge Superkot to a 1v1?', content: 'You can try, but prepare for an unexpected flurry of self-flashes and perhaps even a game-breaking bug unique to his presence. The outcome is never what you expect.' },
            { id: '2', title: 'Does Superkot offer coaching?', content: "Absolutely! If your goal is to master the art of losing gracefully, or confusing your opponents with pure incompetence, then Superkot is your man. (Disclaimer: Results may vary, mostly downwards.)" },
          ]}
          ctaTitle="Support Superkot's 'Journey'"
          ctaDescription="Want to donate for better gear (that he'll still misuse) or just send words of encouragement (or despair)? Contact Superkot's management team."
          ctaButton={{ text: 'Send a Message', href: 'mailto:superkot@example.com' }}
          ctaIcon={Mail}
          useInvertedBackground={true}
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Superkot Fan Club"
          leftLink={{ text: 'Terms of Service', href: '#' }}
          rightLink={{ text: 'Privacy Policy', href: '#' }}
        />
      </div>
    </ThemeProvider>
  );
}
