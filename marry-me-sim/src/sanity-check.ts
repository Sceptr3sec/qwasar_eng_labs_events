// src/sanity-check.ts
import type { Team, TeamName } from './types.js';
import { TEAM_ROUTINES } from './config.js';

const teams: Team[] = (['Security', 'Clean_up', 'Catering', 'Officiant', 'Waiters'] as TeamName[])
  .map((name) => ({
    name,
    workers: [],
    queue: [],
  }));

console.log('Initialized teams:', teams);
console.log('Routines:', TEAM_ROUTINES);
