import { writable } from 'svelte/store';

export const resources = writable({
  potatoes: 0,
  potatoRate: 0,
  money: 0
});