/*Aliases in accordance with dataset below. Should satisfy FR-01, FR-04, FR-05, & FR-06. 

Event Generation and Handling below

*/
export type Priority = 'LOW' | 'MEDIUM' | 'HIGH';

export type TeamName =
    | 'Security'
    | 'Clean_up'
    | 'Catering'
    | 'Officiant'
    | 'Waiters';

export type EventType =
  // Security
  | 'brawl'
  | 'not_on_list'
  | 'accident'
  // Clean_up
  | 'dirty_table'
  | 'broken_items'
  | 'dirty_floor'
  // Catering
  | 'bad_food'
  | 'music'
  | 'feeling_ill'
  // Officiant
  | 'bride'
  | 'groom';


export interface WeddingEvent {
  id: string;           // unique ID
  event_type: EventType;
  priority: Priority;
  timestamp: number;    // simulated time in ms from start
  description: string;
}

//worker related types below

export type WorkerStatus = 'IDLE' | 'WORKING' | 'UNAVAILABLE';

//how long unavilable vs idle in ms

export interface RoutineProfile {
    name: 'Standard' | 'Intermittent' | 'Concentrated';
    unavailableMs: number;
    idleMs: number;
}

export interface Worker {
    id: string;           // unique ID
    team: TeamName;
    status: WorkerStatus;
    routine: RoutineProfile;
    currentEventId?: string | null; // ID of the event the worker is currently handling, null if idle
}

export interface Team {
    name: TeamName;
    workers: Worker[];
}