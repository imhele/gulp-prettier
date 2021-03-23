export interface GulpPrettierOptions {}

interface GulpPrettierType {
  (option?: Pick<import('prettier').Options, Exclude<keyof import('prettier').Options, 'filepath'>>): import('stream').Transform;
  check(option?: Pick<import('prettier').Options, Exclude<keyof import('prettier').Options, 'filepath'>>): import('stream').Transform;
}

declare const GulpPrettier: GulpPrettierType;

export = GulpPrettier;
