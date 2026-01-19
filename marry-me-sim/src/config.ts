// src/config.ts

import type { RoutineProfile, Priority, TeamName } from './types.js';

// Routine definitions
export const STANDARD_ROUTINE: RoutineProfile = {
  name: 'Standard',
  unavailableMs: 20000,
  idleMs: 5000,
};

export const INTERMITTENT_ROUTINE: RoutineProfile = {
  name: 'Intermittent',
  unavailableMs: 5000,
  idleMs: 5000,
};

export const CONCENTRATED_ROUTINE: RoutineProfile = {
  name: 'Concentrated',
  unavailableMs: 60000,
  idleMs: 60000,
};

// Map each team to its routine profile (from the spec)
export const TEAM_ROUTINES: Record<TeamName, RoutineProfile> = {
  Security: STANDARD_ROUTINE,
  Clean_up: INTERMITTENT_ROUTINE,
  Catering: CONCENTRATED_ROUTINE,
  Officiant: CONCENTRATED_ROUTINE,
  Waiters: STANDARD_ROUTINE,
};

// Priority → timeout in ms
export const PRIORITY_TIMEOUTS: Record<Priority, number> = {
  HIGH: 5000,
  MEDIUM: 10000,
  LOW: 15000,
};
