export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  accentColor: string;
  /** Flip to true to promote a project into the "Spotlight" story popup. */
  spotlight?: boolean;
  /** Required when spotlight is true; unused otherwise. */
  story?: ProjectStory;
  /** Optional gallery strip shown in the spotlight popup. */
  images?: ProjectImage[];
  /** Cover art shown in the project cluster. Falls back to an accent-color swatch when unset. */
  coverImage?: string;
  /** Alt text for coverImage; falls back to `${title} cover art` when omitted. */
  coverAlt?: string;
  /** Optional video for the detail screen's banner — takes priority over coverImage there when set (the sleeve card still always uses coverImage). Plays muted, looping, no controls. */
  coverVideo?: string;
  /** Optional still image for the detail screen's banner, when it should differ from coverImage (e.g. coverImage is a logo used on the sleeve, bannerImage is a real screenshot shown when opened). Priority: coverVideo > bannerImage > coverImage. */
  bannerImage?: string;
  /** Alt text for bannerImage; falls back to `${title} screenshot` when omitted. */
  bannerAlt?: string;
  /** Set true to keep the project in data but leave it out of the visible project display. */
  hidden?: boolean;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectStory {
  subtitle: string;
  role: string;
  timeline: string;
  blocks: StoryBlock[];
}

export type StoryBlock =
  | { type: "text"; heading?: string; body: string }
  | { type: "callout"; label: string; body: string; href?: string; linkLabel?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "video"; src: string; caption?: string };

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
