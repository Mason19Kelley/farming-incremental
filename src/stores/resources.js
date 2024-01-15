import { writable } from 'svelte/store';

export const resources = writable({
  potatoes: 0,
  potatoRate: 0,
  carrots: 0,
  carrotRate: 0,
  money: 0,
  sidebarOpen: false,
  plants: Array.from({ length: 16 }, () => ''),
  selectedPlot: null
});