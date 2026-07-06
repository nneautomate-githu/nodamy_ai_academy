export interface Course {
  id: string;
  title: string;
  suitability: 'Beginner' | 'Intermediate & Advanced' | 'All Levels';
  description: string;
  topics: string[];
  price: string;
  originalPrice?: string;
  isPopular?: boolean;
  ctaText: string;
  badge: string;
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  category: 'Text & Logic' | 'Design & Creative' | 'Video & Audio' | 'Development & No-Code' | 'Automation';
  primaryUse: string;
  courseCovered: string;
  iconName: string;
  features: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'AI Images' | 'AI Videos' | 'AI Websites' | 'AI Apps' | 'Brand Identity' | 'Marketing Campaigns' | 'Presentations' | 'Digital Products';
  description: string;
  imageUrl: string;
  studentName: string;
  tags: string[];
  toolsUsed: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatarUrl: string;
  rating: number;
  review: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface DownloadableResource {
  id: string;
  title: string;
  description: string;
  size: string;
  type: 'Guide' | 'Roadmap' | 'Resource List' | 'Templates';
  downloadsCount: number;
  topicsCovered: string[];
}

export interface SuccessMetric {
  id: string;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  description: string;
}

export interface AdvantageCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhatYouWillLearnItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
