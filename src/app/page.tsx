use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Cloud, Shield, Star } from "lucide-react";

const assetMap = [
  { "id": "hero-bg", "url": "https://images.pexels.com/photos/34332317/pexels-photo-34332317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "modern office workspace - Photo by Pew Nguyen" },
  { "id": "about-image", "url": "https://images.pexels.com/photos/5257759/pexels-photo-5257759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Four colleagues brainstorming around a laptop in a bright, modern office setting." },
  { "id": "services-image", "url": "https://images.pexels.com/photos/21325137/pexels-photo-21325137.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A clean and modern home office setup featuring a laptop, monitor, and camera on a white desk." },
  { "id": "team-image", "url": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Overhead view of a diverse team in a business meeting using laptops and tablets." },
  { "id": "testimonial-1", "url": "https://images.pexels.com/photos/3867837/pexels-photo-3867837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Smiling woman in a bright office, standing by her laptop, exuding confidence." },
  { "id": "testimonial-2", "url": "https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Focused woman writing on a whiteboard during a business planning session." },
  { "id": "testimonial-3", "url": "https://images.pexels.com/photos/4560142/pexels-photo-4560142.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Happy young black male freelancer throwing papers while celebrating successful project during remote work in green park" },
  { "id": "testimonial-4", "url": "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A modern home office setup with a desktop computer displaying a client testimonial on the screen." }
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "About Us", id: "about" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="IT Solutions"
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Welcome to IT Solutions"
          description="Empowering your digital transformation with innovative IT solutions."
          imageSrc={assetMap.find(a => a.id === 'hero-bg')?.url ?? "/public/images/placeholder.webp"}
          buttons={[
            { text: "Get Started", href: "services" },
            { text: "Contact Us", href: "contact" }
          ]}
        />
      </div>
      <div id="about" data-section="about">
        <TextAbout
          title="Innovating tech solutions to enhance your business operations."
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>
      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Our Services"
          description="Explore our wide range of technology services that cater to your needs."
          features={[
            {
              title: "Cloud Integration",
              description: "Seamless cloud integration services.",
              icon: Cloud
            },
            {
              title: "Cybersecurity",
              description: "Advanced threat detection and defense.",
              icon: Shield
            }
          ]}
        />
      </div>
      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Our experienced team dedicated to delivering excellence."
          members={[
            {
              id: "1",
              name: "John Doe",
              role: "CEO",
              description: "Leader in tech innovation.",
              imageSrc={assetMap.find(a => a.id === 'team-image')?.url ?? "/public/images/placeholder.webp"}
            }
          ]}
        />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Hear from companies that trust our services."
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              testimonial: "Impressive tech solutions that transformed our business.",
              icon: Star
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              testimonial: "Reliable and innovative IT services.",
              icon: Star
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              testimonial: "Exceptional customer support and expertise.",
              icon: Star
            },
            {
              id: "4",
              name: "David Kim",
              role: "Product Manager",
              testimonial: "Professional and highly skilled team.",
              icon: Star
            }
          ]}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contact Us"
          title="Let’s Get Started with Your IT Solutions"
          description="Reach out to us to discuss how our tech solutions can benefit your business."
          imageSrc={assetMap.find(a => a.id === 'hero-bg')?.url ?? "/public/images/placeholder.webp"}
          mediaPosition="right"
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          columns={[
            { items: [
              { label: "About", href: "about" },
              { label: "Services", href: "services" }
            ]},
            { items: [
              { label: "Contact", href: "contact" }
            ]}
          ]}
          logoText="IT Solutions"
        />
      </div>
    </ThemeProvider>
  );
}
