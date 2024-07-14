![Grow Together](https://github.com/user-attachments/assets/4f649350-eba4-4a37-8035-94685e6b2e05)

Template Series - Grow Together #6
---
This is a template for organizations modeled after a made-up gardening nonprofit called “Grow Together.” Created by FOYM, a project by Ruslan Mukhamedvaleev, under the MIT license.

![Website Image](https://github.com/user-attachments/assets/cd9df7bb-6ea3-4fcc-84f1-80eb45ec537c)

This is the sixth fully open-source template I have created for this template series. It features a left-aligned hero, an information section, a testimonial section, and a frequently asked questions section. - Ruslan

Getting Started
---

To get a local copy up and running, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/en)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- An IDE

### Installation

Clone the repository

```bash
git clone https://github.com/digitalRM/FOYM-Grow-Together.git
```

Install required packages

```bash
npm install
```

Customize the entire website across all the sections inside the `components/sections` folder
```js
1 - Hero.jsx
2 - OurImpact.jsx
3 - Testimonials.jsx
4 - FAQ.jsx
5 - Footer.jsx
```

There are also important files to edit in the `components/ui` folder. They are all marked with 1 in the front. The header is marked with three 1's because it is extra important to edit after removing the banner. 
```js
1 - contact-dialog.jsx
1 - gardenChart.jsx
1 - mobile-drawer.jsx
111 - header.jsx
```

Delete Banner in `app/layout.js`

```js
// Delete this import below when you are ready to remove the banner
import Banner from "@/components/sections/999 - banner";

{/* This is the banner for the FOYM website. Feel free to delete this! */}
<Banner />
```
Delete Banner from the `components/sections` folder
```js
999 - banner.jsx
```

Customize your metadata in `app/layout.js`
```js
// This is the metadata for the website. Change the values to match your website. Upload the openGraph.png to your public folder
export const metadata = {
  metadataBase: new URL("https://grow.foym.org/"),
  title: "Grow Together - An FOYM Template",
  description:
    "This is a template for organizations modeled after a made-up gardening nonprofit called “Grow Together.” It is entirely free to use and customize. Created by FOYM, a project by Ruslan Mukhamedvaleev, under the MIT license.",
  openGraph: {
    title: "Grow Together - An FOYM Template",
    description:
      "This is a template for organizations modeled after a made-up gardening nonprofit called “Grow Together.” It is entirely free to use and customize. Created by FOYM, a project by Ruslan Mukhamedvaleev, under the MIT license.",
    url: "https://grow.foym.org/",
    siteName: "Grow Together - An FOYM Template",
    images: [
      {
        url: "/openGraph.png",
        width: 1600,
        height: 900,
        alt: 'An image of the websites name "Grow Together - An FOYM Template" and star like characters in the background pointing at the name',
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
```

Run the development server

```bash
npm run dev
```

## Contact 

If you are having trouble setting this up, please feel free to contact me via the [foym](https://www.foym.org) website. 

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.


