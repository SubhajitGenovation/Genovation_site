"use client";

import React from 'react';
import DefenseHero from '@/components/defense/DefenseHero';
import DefenseInterstitial from '@/components/defense/DefenseInterstitial';
import DefenseChallenges from '@/components/defense/DefenseChallenges';
import DefenseArchitecture from '@/components/defense/DefenseArchitecture';
import DefenseProducts from '@/components/defense/DefenseProducts';
import DefenseCTA from '@/components/defense/DefenseCTA';
import Footer from '@/components/footer/Footer';

export default function DefensePage() {
    return (
        <main className="min-h-screen bg-[#f5f3f0]">
            <DefenseHero />
            <DefenseInterstitial />
            <div className="divider-slate"></div>
            <DefenseChallenges />
            <div className="divider-slate"></div>
            <DefenseArchitecture />
            <div className="divider-slate"></div>
            <DefenseProducts />
            <div className="divider-slate"></div>
            <DefenseCTA />
            <Footer />
        </main>
    );
}
