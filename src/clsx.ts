export type ClassValue = ClassArray | ClassDictionary | string | number | bigint | null | boolean | undefined
export type ClassDictionary = Record<string, any>
export type ClassArray = ClassValue[]

// prettier-ignore
// eslint-disable-next-line
function o(r:any){var e,t,f="";if(typeof r=="string"||typeof r=="number")f+=r;else if(typeof r=="object")if(Array.isArray(r)){var n=r.length;for(e=0;e<n;e++)r[e]&&(t=o(r[e]))&&(f&&(f+=" "),f+=t)}else for(t in r)r[t]&&(f&&(f+=" "),f+=t);return f}
// prettier-ignore
// eslint-disable-next-line
export function clsx(...r: ClassValue[]): string {for(var e=0,t,f,n="",l=r.length;e<l;e++)(t=r[e])&&(f=o(t))&&(n&&(n+=" "),n+=f);return n}
