# Fungi — Personal Portfolio Sample

A static single-page portfolio sample with a hero, about section, skills, work gallery, services, testimonials, blog previews, and a contact section. The sample identity and content are placeholders for customization.

## View locally

Open **`Index.html`** in a browser, or serve the repository with a local static server and visit `/Index.html`. The capital I matters on case-sensitive hosts. No npm installation or build step is required.

## Structure

- `Index.html` — page content and section layout.
- `css/style.css` and `css/resp.css` — main and responsive styles.
- `css/*.scss` — stylesheet sources.
- `js/main.js`, `main2.js`, and `init.js` — page behavior and plugin initialization.
- Other files in `css/` and `js/` — bundled vendor libraries such as Bootstrap, Swiper, AOS, and animation helpers.

## Customize

Replace sample names, biography, projects, images, social links, and contact details in the HTML. Update the linked CSS files directly or compile the SCSS sources with your own Sass tooling; no Sass build script is supplied.

The contact form points to an external template demonstration PHP handler. Replace its action with your own form service before collecting messages. No mail backend is included here.

## Hosting and scope

Upload the files to a static host while preserving relative paths, and configure `Index.html` as the entry document if needed. This is a frontend template exercise; blog cards and portfolio items are static content, with no CMS or automated tests. Review bundled vendor and template asset licenses before reuse.
