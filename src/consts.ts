export const SITE_TITLE = 'Ahmed Hesham';
export const SITE_DESCRIPTION =
  'AI Engineer building AI agents, LLM orchestration systems, and developer tools. Writing about agentic workflows, RAG, function calling, and what I learn along the way.';

export type ThemeId = 'paper' | 'dawn' | 'sakura' | 'night' | 'midnight' | 'ember' | 'cosmos' | 'forest' | 'noir';

export interface ThemeMeta {
  id: ThemeId;
  label: string;
  isDark: boolean;
  swatch: string;
  themeColor: string;
}

export const THEMES: ThemeMeta[] = [
  { id: 'paper',    label: 'Paper',    isDark: false, swatch: '#ffffff', themeColor: '#ffffff' },
  { id: 'dawn',     label: 'Dawn',     isDark: false, swatch: '#fef8f6', themeColor: '#fef8f6' },
  { id: 'sakura',   label: 'Sakura',   isDark: false, swatch: '#fef5f7', themeColor: '#fef5f7' },
  { id: 'night',    label: 'Night',    isDark: true,  swatch: '#0a0a0a', themeColor: '#0a0a0a' },
  { id: 'midnight', label: 'Midnight', isDark: true,  swatch: '#0b0e17', themeColor: '#0b0e17' },
  { id: 'ember',    label: 'Ember',    isDark: true,  swatch: '#110d0a', themeColor: '#110d0a' },
  { id: 'cosmos',   label: 'Cosmos',   isDark: true,  swatch: '#0e0a12', themeColor: '#0e0a12' },
  { id: 'forest',   label: 'Forest',   isDark: true,  swatch: '#070f0b', themeColor: '#070f0b' },
  { id: 'noir',     label: 'Noir',     isDark: true,  swatch: '#050505', themeColor: '#050505' },
];

export const DARK_THEMES: ThemeId[] = ['night', 'midnight', 'ember', 'cosmos', 'forest', 'noir'];
