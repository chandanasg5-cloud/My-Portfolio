import React from 'react';
import { HeroSection } from '@/components/ui/hero-section-2';
import { profile } from '@/lib/data';

export default function HeroSectionDemo() {
  return (
    <div className="w-full">
      <HeroSection
        logo={{
          url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&q=60",
          alt: "Chandana S. Gowda",
          text: "Chandana S. Gowda",
        }}
        slogan="DATA INTO STRATEGIC DECISIONS"
        title={
          <>
            Each Dataset <br />
            <span className="text-primary">Tells a Story</span>
          </>
        }
        subtitle={profile.summary}
        callToAction={{
          text: "GET IN TOUCH",
          href: `mailto:${profile.email}`,
        }}
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=60"
        contactInfo={{
          website: "chandanasgowda.com",
          phone: profile.phone,
          address: profile.location,
        }}
      />
    </div>
  );
}
