// Web Development project data, consumed by <WebDevelopment /> → renders one
// box per entry in this array (up to 5). Each project follows
// Problem → Design → Development → Result, matching the case-study modal.
//
// IMAGES: save each screenshot in src/assets/images/projects/, then IMPORT
// it as a module at the top of this file and use the imported name — not a
// raw string path — as the `thumbnail` value. This is required so the image
// actually gets bundled in production, not just shown in the dev server
// (the same fix used for the Hero photo). Match the file extension exactly
// to what's actually saved on disk (.png here, not .jpg).
//
// website-visibility-analyzer.png doesn't exist yet, so there's no import
// for it below and its `thumbnail` is left unset — WebDevelopment's card
// already shows a nice "Screenshot coming soon" placeholder for that case.
// Once you save the file, add the import line and thumbnail value the same
// way the other three are done.
import sarshyThumb from '../assets/images/projects/sarshy-luxury-hair.png';
import tourismThumb from '../assets/images/projects/tourism-website.png';
import visibilityAnalyzerThumb from '../assets/images/projects/website-visibility-analyzer.png';

export const projects = [
  {
    id: 'sarshy-luxury-hair',
    title: 'Sarshy Luxury Hair Collection',
    category: 'Client E-Commerce',
    thumbnail: sarshyThumb,
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS 4'],
    problem:
      'A hair collection business needed a full online storefront to sell products directly to customers without relying only on social media DMs.',
    design:
      'A late-stage design overhaul shifted the direction toward a white, luxury aesthetic to match the premium positioning of the brand.',
    development:
      'Built a full e-commerce site in Next.js with TypeScript and Tailwind CSS 4, covering 30 products priced in Naira, a password-protected admin dashboard for managing inventory, and localStorage-based data handling.',
    result:
      'Customers can browse the full catalog and complete purchases through an integrated WhatsApp purchase flow, keeping checkout simple for the target market.',
    liveUrl: '', // TODO
    repoUrl: '', // TODO
  },
  {
    id: 'website-visibility-analyzer',
    title: 'Website Visibility Analyzer',
    category: 'Personal / Web App',
      thumbnail: visibilityAnalyzerThumb,
    // TODO: once website-visibility-analyzer.png is saved in this folder, add:
    //   import visibilityAnalyzerThumb from '../assets/images/projects/website-visibility-analyzer.png';
    // above, then set: thumbnail: visibilityAnalyzerThumb,
    tools: ['React', 'Next.js'], // TODO: add the specific SEO/analytics API you used
    problem:
      'Site owners often have no quick way to check how visible or discoverable their website actually is — TODO: add the specific gap this tool addresses.',
    design:
      'TODO: describe the interface — e.g. enter a URL, get a visibility/SEO report back.',
    development:
      'Built with React/Next.js on the frontend, pulling data from an SEO/analytics API to analyze and score website visibility. TODO: name the exact API and add any other technical details.',
    result:
      'TODO: what does the tool actually output, and what did you learn building it?',
    liveUrl: '', // TODO
    repoUrl: '', // TODO
  },
  {
    id: 'tourism-website',
    title: 'Tourism Website',
    category: 'Personal / Web Development',
    thumbnail: tourismThumb,
    tools: ['React', 'Tailwind CSS'], // TODO: e.g. ['React', 'Tailwind CSS']
    problem:
      'Wanted to design a tourism site with the kind of feature set real travel platforms need — not just a static brochure page.',
    design:
      'TODO: describe the look/feel and layout approach.',
    development:
      'A personal/practice build scoped with a comprehensive feature set, including an AI chatbot and booking integration. TODO: add which parts you actually built and the stack used.',
    result:
      'TODO: what does the finished (or in-progress) site do, and what did you learn from building it?',
    liveUrl: '', // TODO
    repoUrl: '', // TODO
  },

];