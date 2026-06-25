import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://dan.rosensha.in/",
    title: "Dan Rosenshain",
    description: "Notes on AI, product engineering, parenting, entrepreneurship, and more.",
    author: "Dan Rosenshain",
    profile: "https://dan.rosensha.in/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "UTC",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/dan-dr/dan.rosensha.in/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "x",   url: "https://x.com/dan_ddyo" },
    { name: "github", url: "https://github.com/dan-dr" },
    { name: "linkedin", url: "https://www.linkedin.com/in/danr4/" },
    { name: "mail",   url: "mailto:dan@rosensha.in" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});