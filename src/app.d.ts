// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import PocketBase from 'pocketbase';

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      pb: PocketBase
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  interface ViewTransition {
    updateCallbackDone: Promise<void>;
    ready: Promise<void>;
    finished: Promise<void>;
    skipTransition: () => void;
  }

  interface Document {
    startViewTransition(updateCallback: () => Promise<void>): ViewTransition;
  }
}

export { };
