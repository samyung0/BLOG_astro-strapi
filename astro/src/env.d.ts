/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
  }
}

interface ImportMetaEnv {
  readonly STRAPI_URL: string;
}
