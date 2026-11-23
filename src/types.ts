import type { iconPaths } from "./components/IconPaths";
export const WorkScopes = ["design", "website", "shop"] as const;
export type WorkScope = (typeof WorkScopes)[number];
export const isWorkScope = (scope: string): scope is WorkScope =>
  WorkScopes.includes(scope as WorkScope);

export const ScopeIconMap: Record<WorkScope, keyof typeof iconPaths> = {
  design: "brush",
  website: "globe",
  shop: "shopping-bag",
};

export interface Degree {
  title: string;
  image: string;
  when: string;
  where: string;
  special: string;
  grade?: string;
}

export interface Experience {
  role: string;
  when: string;
  where: string;
  company: string;
  description: string;
}

export interface Skill {
  field: string;
  description: string;
  fieldSkill: {
    name: string;
    link: string;
    xp: number;
    color: string;
    icon: keyof typeof iconPaths;
  }[];
}
