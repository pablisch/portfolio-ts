// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import { sectionType } from "../types/data.types.ts";

export const projectData = [
  {
    // LUPO
    id: "1",
    identifier: "lupo",
    name: "London Underground Phony Orchestra",
    navName: "LUPO",
    panelName: "LUPO",
    image: "lupo-screen-small.png",
    appUrl: "https://lupo.onrender.com/",
    apiWakeUpUrl: null,
    repoUrl: "https://github.com/pablisch/lupo",
    summary:
      "An audio/visual generative music app based on real-time arrivals of trains on the London Underground network using data from the TFL Unified API.",
    responsivenessText: "Partially responsive",
    heading: "London Underground Phony Orchestra",
    subheading: "The sonification of the London Underground",
    descriptionText: (
      <>
        <p className="project-text">
          <span className="emphasise">Description:</span> A generative music and
          visualisation app based on real-time arrivals of tube trains on the
          London Underground network using real-time data from the TFL Unified
          API.
        </p>
        <p className="project-text">
          LUPO is the outcome of my final group engineering project on the
          Makers Software Development bootcamp, where each tube line is assigned
          an instrument and each station assigned a different note which is
          played when a train arrives.
        </p>
        <p className="project-text">
          The app was conceived, researched, planned, designed, coded and
          deployed entirely from scratch as a group collaboration project in
          just eight days by five students.
        </p>
      </>
    ),
    technologiesText: (
      <>
        <p className="project-text sm">
          <span className="emphasise">Technologies:</span> This app is primarily
          built in JavaScript using the React.js library. We planned to use a
          Node and Express backend but as all API calls were made without using
          an API key we decided to make all requests on the client side allowing
          us to deploy the entire app as a static site on Render.com.
        </p>
        <p className="project-text sm">
          We relied heavily on tone.js for the audio side of things which was
          new to all in the group. This meant considerable time was spent on
          researching and learning to use the library but was well worth the
          effort.
        </p>
        <p className="project-text">
          I also learnt chart.js when we discovered an urgent need to visualise
          TFL&apos;s dubious data. Being able to instantly visualise and share
          the live streams of data was essential to the project&apos;s success,
          allowing us to make informed decisions on how to proceed.
        </p>
        <p className="project-text">
          <span className="emphasise">Responsiveness:</span> LUPO was primarily
          conceived as a desktop app and was first deployed with minimal
          responsiveness. I have since added a considerable amount of responsive
          CSS making the app viable even on a small phone such as an iPhone SE
          but more work is needed to create a truly mobile-first experience.
        </p>
        <p className="project-text">
          <span className="emphasise">Next Steps:</span> There are many ways
          that this app could be improved but the thing that stands out to me is
          the way that the controls are unclear making the finer points of the
          app unintuitive. For example, with the Mute and Service buttons, it is
          not clear visually whether you are turning them on or off. The
          majority of next steps are visual UX improvements rather than core
          functionality.
        </p>
      </>
    ),
    techBadges: {
      scale: "33",
      badges: [
        { src: "javascript/javascript-original.svg", alt: "javascript" },
        { src: "nodejs/nodejs-original.svg", alt: "nodejs" },
        { src: "npm/npm-original-wordmark.svg", alt: "npm" },
        { src: "react/react-original-wordmark.svg", alt: "react" },
        { src: "html5/html5-original.svg", alt: "html5" },
        { src: "css3/css3-original.svg", alt: "css3" },
        {
          src: "git/git-original.svg",
          alt: "git",
          className: "tech-left-space-1",
        },
        {
          src: "github/github-original.svg",
          alt: "github",
          className: "tech-left-space-1",
        },
      ],
    },
  },
  {
    // Gallery
    id: "2",
    identifier: "gallery",
    name: "Gallery App",
    // navName: 'Gallery App',
    image: "gallery-app-thumb.png",
    appUrl: "https://gallery-58b4.onrender.com/",
    apiWakeUpUrl:
      "https://gallery-backend-n3lo.onrender.com/api/v1.0/health/server",
    repoUrl: "https://github.com/pablisch/gallery",
    summary:
      "A MERN stack image sharing app using a responsive Masonry layout and Cloudinary. An exploration of image layout and React.js.",
    responsivenessText: "Mostly responsive",
    heading: "Gallery App",
    subheading: "A MERN stack image app",
    descriptionText: (
      <>
        <p className="project-text">
          <span className="emphasise">Description:</span>{" "}
          <span className="emphasise">Gallery</span> is a MERN stack image
          sharing app using a Masonry grid layout to produce an image feed
          similar to Pinterest.
        </p>
        <p className="project-text">
          Images are uploaded using Cloudinary and URLs are stored in the
          MongoDB Atlas database. Fronted image processing ensures that image
          uploads are reduced to the maximum resolution required preventing
          wasteful resource storage, i.e. avatars have a maximum height of 40px.
          Feed images are dynamically reduced to a maximum width of 400px
          suitable for the column display width.
        </p>
        <p className="project-text">
          Logged in users are able to upload their own images, make comments,
          like photos and delete their own photos.
        </p>
      </>
    ),
    technologiesText: (
      <>
        <p className="project-text sm">
          <span className="emphasise">Technologies:</span> The app is built from
          scratch employing the MERN stack. The core of the app is a Vite React
          frontend and calls to the MongoDB database are made through the custom
          API using Node.js and Express.
        </p>
        <p className="project-text sm">
          The app also uses JWT token for session authentication and all
          passwords are salted and hashed using BCrypt before being stored in
          the MongoDB Atlas database.
        </p>
        <p className="project-text sm">
          There is an additional test suite for this app in a separate repo with
          a comprehensive set of end to end tests in Java & Selenium using a
          Page Object Model with highly modular functions.
        </p>
      </>
    ),
    techBadges: {
      scale: "31",
      badges: [
        { src: "javascript/javascript-original.svg", alt: "javascript" },
        {
          src: "nodejs/nodejs-original.svg",
          alt: "nodejs",
          className: "tech-left-space-1",
        },
        { src: "npm/npm-original-wordmark.svg", alt: "npm" },
        {
          src: "express/express-original.svg",
          alt: "express",
          className: "tech-left-space-2",
        },
        {
          src: "mongodb/mongodb-original.svg",
          alt: "mongodb",
          className: "tech-minus-space-1",
        },
        { src: "react/react-original-wordmark.svg", alt: "react" },
        { src: "html5/html5-original.svg", alt: "html5" },
        { src: "css3/css3-original.svg", alt: "css3" },
        {
          src: "git/git-original.svg",
          alt: "git",
          className: "tech-left-space-1",
        },
        {
          src: "github/github-original.svg",
          alt: "github",
          className: "tech-left-space-1",
        },
      ],
    },
  },
  {
    // FarceBook
    id: "3",
    identifier: "farcebook",
    name: "FarceBook",
    navName: "Farce Book",
    panelName: "FarceBook",
    image: "farcebook.png",
    appUrl: "https://farcebook-9uwa.onrender.com/",
    apiWakeUpUrl: "https://farcebook-backend.onrender.com/health",
    repoUrl: "https://github.com/pablisch/farce-book",
    summary:
      "A Facebook clone group engineering project. This was an immersive introduction to all of the MERN stack technologies.",
    responsivenessText: "Partially responsive",
    heading: "FarceBook",
    subheading: "A Facebook clone using the MERN stack",
    descriptionText: (
      <>
        <p className="project-text">
          <span className="emphasise">Description:</span> This Facebook clone
          app was the second group engineering project on the Makers Software
          Development Bootcamp and was completed in eight days.
        </p>
        <p className="project-text">
          This was an introduction to the MERN stack with no prior knowledge of
          any of the technologies. This approach may not be an ideal way to
          learn but does provide an excellent example of working under pressure
          with a non-negotiable deadline.
        </p>
        <p className="project-text">
          We were supplied with an existing codebase consisting of an Express
          backend API with minimal endpoints and the default React app with a
          few base components and had free direction from that point.
        </p>
      </>
    ),
    technologiesText: (
      <>
        <p className="project-text">
          <span className="emphasise">Technologies:</span> The app is built on a
          seed MERN stack codebase. As the entire group were new to the
          technologies, we spent the first couple of days exploring the codebase
          and the technologies used including JWT web tokens which was used for
          authentication and authorization.
        </p>
        <p className="project-text">
          Developing working as a team using Agile practices was a focus for
          this project being only the second group project. We used Git and
          GitHub for version control and collaboration with PR reviews and used
          main branch protection. We used Postman for manual testing the backend
          API.
        </p>
        <p className="project-text">
          For the purposes of trying out this app, you may create a new user or
          use the following credentials: Username: portfolio-user, Username:
          portfolio-user.
        </p>
        <p className="project-text sm">
          <span className="emphasise">Username:</span> portfolio-user
        </p>
        <p className="project-text">
          <span className="emphasise">Password:</span> verysecureA1
        </p>
        <p className="project-text">
          Logging in is a basic requirement of the app in order to see the
          message feed. My personal preference would be to have open access to a
          public feed but was happy to go with the group decision on this
          matter. The project was about learning rather than producing a final
          product.
        </p>
        <p className="project-text">
          <span className="emphasise">Known Issues:</span> The original app used
          a local instance of MongoDB and user avatars were stored locally. For
          deployment purposes, the database was migrated to MongoDB Atlas but
          avatar has not been updated to reflect this change. The original
          avatar images remain but new avatars are not persistent. As a legacy
          app, it is likely that this issue will not be resolved.
        </p>
      </>
    ),
    techBadges: {
      scale: "31",
      badges: [
        { src: "javascript/javascript-original.svg", alt: "javascript" },
        {
          src: "nodejs/nodejs-original.svg",
          alt: "nodejs",
          className: "tech-left-space-1",
        },
        { src: "npm/npm-original-wordmark.svg", alt: "npm" },
        {
          src: "express/express-original.svg",
          alt: "express",
          className: "tech-left-space-2",
        },
        {
          src: "mongodb/mongodb-original.svg",
          alt: "mongodb",
          className: "tech-minus-space-1",
        },
        { src: "react/react-original-wordmark.svg", alt: "react" },
        { src: "html5/html5-original.svg", alt: "html5" },
        { src: "css3/css3-original.svg", alt: "css3" },
        {
          src: "git/git-original.svg",
          alt: "git",
          className: "tech-left-space-1",
        },
        {
          src: "github/github-original.svg",
          alt: "github",
          className: "tech-left-space-1",
        },
      ],
    },
  },
  {
    // Knot Very Useful
    id: "4",
    identifier: "knot",
    name: "Knot Very Useful",
    // navName: 'Knot Very Useful',
    image: "knot-very-useful-small.png",
    appUrl: "https://pablisch.github.io/knot-very-useful/",
    apiWakeUpUrl: null,
    repoUrl: "https://github.com/pablisch/knot-very-useful",
    summary:
      "A practical educational app for learning knots and hitches for Forest School built as an early exploration of vanilla JavaScript and CSS.",
    responsivenessText: "Mostly responsive",
    heading: "Knot Very Useful",
    subheading: "An educational app for learning knots and hitches",
    descriptionText: (
      <>
        <p className="project-text">
          <span className="emphasise">Description:</span> This is one of my
          favourite projects as it combines a challenging, playful exploration
          of code from early independent learning and a solid real-world use
          that fulfils a genuine need.
        </p>
        <p className="project-text">
          As part of my Forest School Leader training, I had already made an
          ugly Google Sites app but was not happy with it. After independent
          code exploration and application, I took some of the skills I had
          gathered and rebuilt the app from scratch. It required a lot of extra
          learning, resilience and experimentation to get it to work.
        </p>
        <p className="project-text">
          I am proud of the result and have used it in the wild to teach how to
          tie knots and hitches.
        </p>
      </>
    ),
    technologiesText: (
      <>
        <p className="project-text sm">
          <span className="emphasise">Technologies:</span> This app was made six
          months before the Makers Software Development Bootcamp using vanilla
          JavaScript, HTML and CSS, and no a whiff of AI in sight.
        </p>
        <p className="project-text sm">
          It was a real challenge at this early stage of learning to
          successfully combine all my new knowledge in a way that worked
          including making it fully responsive to be coherent on different
          screen sizes and orientations making it possible to use in the wild.
        </p>
      </>
    ),
    techBadges: {
      scale: "35",
      badges: [
        { src: "javascript/javascript-original.svg", alt: "javascript" },
        {
          src: "html5/html5-original.svg",
          alt: "html5",
          className: "tech-left-space-3",
        },
        {
          src: "css3/css3-original.svg",
          alt: "css3",
          className: "tech-left-space-1",
        },
        {
          src: "git/git-original.svg",
          alt: "git",
          className: "tech-left-space-1",
        },
        {
          src: "github/github-original.svg",
          alt: "github",
          className: "tech-left-space-2",
        },
      ],
    },
  },
  {
    // Alternative Routes
    id: "5",
    identifier: "alternative",
    name: "Alternative Routes",
    navName: "Alter Native Routes",
    image: "alternativeRoutes-small.png",
    appUrl: "https://alternative-routes.onrender.com/",
    apiWakeUpUrl: "https://alternative-routes-backend.onrender.com/lines",
    repoUrl: "https://github.com/pablisch/eclipse-layout-react",
    summary:
      "A playful app that generates alternative station names for the London Underground based on user themes using the GPT-3 API.",
    responsivenessText: "Mildly responsive",
    heading: "Alter Native Routes",
    subheading: "LLM generated alternative station names for London tube lines",
    descriptionText: (
      <>
        <p className="project-text">
          <span className="emphasise">Description:</span> This playful app was
          my first experimentation utilising the OpenAI GPT-3 API, which was fun
          and far simpler than I had anticipated. The app generates alternative
          station names for the London Underground based on user themes.
        </p>
        <p className="project-text">
          The app started as a companion app to{" "}
          <a href="https://lupo.onrender.com/" rel="noreferrer" target="_blank">
            LUPO
          </a>{" "}
          with the intention of integrating it so that station names could be
          dynamically changed. The app is proof of concept.
        </p>
        <p className="project-text">
          Themes and generated names are stored in a MongoDB Atlas database
          where data is not linked to any user so any user of the app sees the
          collective result of all users.
        </p>
      </>
    ),
    technologiesText: (
      <>
        <p className="project-text sm">
          <span className="emphasise">Technologies:</span> Alternative Routes
          started as a simple Vanilla JavaScript project and has grown as need
          arose. Since the initial project was a simple experiment in using the
          OpenAI GPT-3 API, it made sense to keep things simple. In retrospect,
          through familiarity, it might have been better to start with the MERN
          stack as I quickly found the need for an Express API to handle the API
          key and calls to OpenAI.
        </p>
        <p className="project-text sm">
          The need for a database only arose later when I decided to make the
          new station names persistent. I considered having a user login system
          but since this was never intended as a serious app, it seemed quite
          fun that everyone would see the collective result of all users. The
          database use is very light and so the choice of MongoDB Atlas was a
          pragmatic choice made for ease deployment since Render has
          restrictions on free instances of SQL databases.
        </p>
        <p className="project-text">
          Mainly to expand the technical reach of this simple app, I added an
          &apos;About&apos; page and a &apos;Contact Us&apos; page. The
          &apos;Contact Us&apos; page uses an additional MongoDB Atlas
          collection to store messages and whether or not they have subscribed
          to the newsletter in addition to emailing me the message.
        </p>
        <p className="project-text">
          <span className="emphasise">Responsiveness:</span> This app has
          rudimentary responsiveness but is not suitable for use on mobile
          devices. As a proof of concept app and exploration of the GPT-3 API,
          there was little to be gained in the extra work with no learning
          benefit. The app is best viewed on a desktop or laptop screen. Aside
          from some responsive text sizing, the main effect is that below 950px
          screen width, the original station names are hidden to allow more
          space for displaying the generated names.
        </p>
      </>
    ),
    techBadges: {
      scale: "33",
      badges: [
        { src: "javascript/javascript-original.svg", alt: "javascript" },
        {
          src: "nodejs/nodejs-original.svg",
          alt: "nodejs",
          className: "tech-left-space-2",
        },
        {
          src: "npm/npm-original-wordmark.svg",
          alt: "npm",
          className: "tech-left-space-1",
        },
        {
          src: "express/express-original.svg",
          alt: "express",
          className: "tech-left-space-2",
        },
        {
          src: "mongodb/mongodb-original.svg",
          alt: "mongodb",
          className: "tech-minus-space-1",
        },
        { src: "html5/html5-original.svg", alt: "html5" },
        {
          src: "css3/css3-original.svg",
          alt: "css3",
          className: "tech-left-space-1",
        },
        {
          src: "git/git-original.svg",
          alt: "git",
          className: "tech-left-space-1",
        },
        {
          src: "github/github-original.svg",
          alt: "github",
          className: "tech-left-space-2",
        },
      ],
    },
  },
  {
    // Eclipse
    id: "6",
    identifier: "eclipse",
    name: "Eclipse Battle Calculator",
    navName: "Eclipse Battle Calc",
    image: "eclipse-combat-small.png",
    appUrl: "https://eclipse-battle-calculator.onrender.com/",
    apiWakeUpUrl: null,
    repoUrl: "https://github.com/pablisch/eclipse-layout-react",
    summary:
      "A companion to the board game, Eclipse, A new Dawn for the Galaxy, which calculates combat odds for different ship configurations.",
    responsivenessText: "Not responsive",
    heading: "Eclipse Battle Calculator",
    subheading:
      "A companion to the board game, Eclipse, A new Dawn for the Galaxy",
    descriptionText: (
      <>
        <p className="project-text">
          <span className="emphasise">Description:</span> This Eclipse Battle
          Calculator app is a combination of geeky curiosity and an exploration
          of complex algorithms.
        </p>
        <p className="project-text">
          Any combat situation in the board game Eclipse, is the result of a
          mind-boggling number of possible ship configurations and combinations
          resulting in complex real-world decisions which proved extremely
          challenging to express in code.
        </p>
        <p className="project-text">
          This app runs through 100,000 battle simulations to calculate the odds
          of winning any given battle, but experience has shown that odds are no
          guarantee of success.
        </p>
      </>
    ),
    technologiesText: (
      <>
        <p className="project-text sm">
          <span className="emphasise">Technologies:</span> This is a static app
          using Vite React. The app starts with the default game data but keeps
          track of the user&apos;s configuration choices for easy switching
          between species. Since players are aligned to a particular species,
          and all data would naturally reset between games, there was no need to
          store data in a database and no need for a backend.
        </p>
        <p className="project-text sm">
          What surprised me most about this app was the sheer complexity of the
          algorithms required to accurately carry out a battle calculation when
          so many parameters affected where damage &apos;should&apos; be
          applied. I began by using a series of helper functions but in the end
          went back to the drawing board and created Ship and Battle Classes to
          handle the complexity.
        </p>
        <p className="project-text">
          The app currently accurately handles battles with complex ship
          configurations where each single fleet has ships with a common shield
          value (attacker and defender may have different values). Battles where
          a single fleet has different shield values are another step in
          complexity which I am excited to explore when time allows.
        </p>
        <p className="project-text">
          <span className="emphasise">Responsiveness:</span> This app is the
          least responsive of all my projects and was created on a 32&quot;
          desktop screen. It works fine on smaller screens and contains some
          natural responsiveness thanks to flexbox however the basic sizing and
          layout means that it starts to lose integrity below 1200 x 850 pixels.
          I would like to make the layout fully responsive so that relevant
          sections expand and contract according to current need on smaller
          screen size but there always seems to be something more pressing and
          exciting.
        </p>
        <p className="project-text">
          <span className="emphasise">Companion app:</span> This app is the
          second companion app to the board game Eclipse, A new Dawn for the
          Galaxy, that I have made. It was vastly predated by the{" "}
          <a
            href="https://eclipse-generator.onrender.com/"
            rel="noreferrer"
            target="_blank"
          >
            Eclipse Setup Generator
          </a>{" "}
          app first made in Vanilla JavaScript and later upgraded to React.
        </p>
        <p className="project-text">
          <span className="emphasise">Next Steps:</span> Both previously
          mentioned, my priority next steps for this app are to make it
          responsive for smaller screen sizes including smaller laptops, tablets
          and even phones, and to extend the battle calculation algorithms to
          better handle battles where a single fleet has ships with multiple
          shield values.
        </p>
        <p className="project-text sm">
          A third next step would be to return more detailed information about
          battle results, e.g. the likelihood of the winner losing this or that
          ship during the battle. The data for this is already calculated to
          some extent but extracting and processing it would be very
          interesting.
        </p>
      </>
    ),
    techBadges: {
      scale: "31",
      badges: [
        { src: "javascript/javascript-original.svg", alt: "javascript" },
        {
          src: "react/react-original-wordmark.svg",
          alt: "react",
          className: "tech-left-space-1",
        },
        {
          src: "nodejs/nodejs-original.svg",
          alt: "nodejs",
          className: "tech-left-space-1",
        },
        {
          src: "npm/npm-original-wordmark.svg",
          alt: "npm",
          className: "tech-left-space-1",
        },
        {
          src: "html5/html5-original.svg",
          alt: "html5",
          className: "tech-left-space-1",
        },
        {
          src: "css3/css3-original.svg",
          alt: "css3",
          className: "tech-left-space-1",
        },
        {
          src: "git/git-original.svg",
          alt: "git",
          className: "tech-left-space-1",
        },
        {
          src: "github/github-original.svg",
          alt: "github",
          className: "tech-left-space-2",
        },
      ],
    },
  },
  // {
  //   // Picture Pad
  //   id: '5',
  // identifier: 'picturepad',
  //   name: 'Picture Pad',
  //   // navName: 'Picture Pad',
  //   image: 'picture-pad-small.png',
  //   appUrl: 'https://pablisch.github.io/picture-pad-flex-morph/',
  //   apiWakeUpUrl: null,
  //   repoUrl: 'https://github.com/pablisch/picture-pad-flex-morph',
  //   summary:
  //     'A playful, early exploration of displaying images using vanilla JavaScript and Flexbox to create a new way of viewing photo collections.',
  //     responsivenessText: 'Partially responsive',
  //   heading: 'Picture Pad Flex Morph',
  //   subheading: 'A playful exploration of displaying images',
  //   descriptionText: (
  //     <>
  //       <p className='project-text'>
  //         <span className='emphasise'>Description:</span> This project is a
  //         playful exploration of coding as well as visualising images in a fun,
  //         novel way.
  //       </p>
  //       <p className='project-text'>
  //         Its primary drive was not to create a useful app but an aspirational
  //         &apos;how can I do this?&apos; desire to explore and create. This
  //         represents the second adaptation and extension from Brad
  //         Traversy&apos;s{' '}
  //         <a
  //           href='https://pablisch.github.io/expanding-cards-layout/'
  //           rel='noreferrer'
  //           target='_blank'>
  //           Expanding Cards
  //         </a>{' '}
  //         tutorial after the even more impractical{' '}
  //         <a
  //           href='https://pablisch.github.io/nonsense-pad-sampler/'
  //           rel='noreferrer'
  //           target='_blank'>
  //           Nonsense Pad Sampler
  //         </a>{' '}
  //         project.
  //       </p>
  //       <p className='project-text'>
  //         Neither this nor{' '}
  //         <a
  //           href='https://pablisch.github.io/nonsense-pad-sampler/'
  //           rel='noreferrer'
  //           target='_blank'>
  //           Nonsense Pad Sampler
  //         </a>{' '}
  //         are intended to showcase what I am capable of but are included as they
  //         represent curiosity and growth mindset at a time when I was still
  //         working out basic CSS and what DOM stood for.
  //       </p>
  //     </>
  //   ),
  //   technologiesText: (
  //     <>
  //       <p className='project-text'>
  //         <span className='emphasise'>Technologies:</span> This app was made
  //         using vanilla JavaScript, HTML and CSS at a time when all three were
  //         new and challenging in my earliest exploration of DOM manipulation but
  //         it was also a lot of fun.
  //       </p>
  //       <p className='project-text'>
  //         It took considerable experimentation and and a good few iterations
  //         before I got the images to display in the way I wanted them to and
  //         still have unresolved issues with picture quality and image size
  //         while. I experimented with using Grid rather than Flexbox which worked
  //         very well in some sense but restricted the visual effects in a way
  //         that I could not accept.
  //       </p>
  //       <p className='project-text'>
  //         <span className='emphasise'>Responsiveness:</span> Recent
  //         Responsiveness updates now make this app dynamically change the number
  //         of rows and columns independently according to the screen width and
  //         height which should make it more usable on devices of all sizes or
  //         orientations. The app retains a default maximum grid, however, meaning
  //         any responsive reduction results in some images being hidden and what
  //         is hidden is dependent on orientation rather than priority.
  //       </p>
  //       <p className='project-text'>
  //         <span className='emphasise'>Known Issues:</span> Performance is a real
  //         issue here but was not my primary concern at the time when I was
  //         simply trying to make a concept work. Especially on a large page,
  //         where more images are displayed, performance can be extremely poor on
  //         some devices. Although I retain a real affection for this project, I
  //         have not yet revisited it to explore the performance issues further
  //         and see if I can find a practical solution.
  //       </p>
  //     </>
  //   ),
  //   techBadges: [
  //     { scale: '35' },
  //     [
  //       { src: 'javascript/javascript-original.svg', alt: 'javascript' },
  //       { src: 'html5/html5-original.svg', alt: 'html5', className: 'tech-left-space-3' },
  //       { src: 'css3/css3-original.svg', alt: 'css3', className: 'tech-left-space-1' },
  //       { src: 'git/git-original.svg', alt: 'git', className: 'tech-left-space-1' },
  //       { src: 'github/github-original.svg', alt: 'github', className: 'tech-left-space-2'  },
  //     ]
  //   ]
  // },
  // {
  //   // Lair BnB
  //   id: '8',
  // identifier: 'lair',
  //   name: 'Lair BnB',
  //   navName: 'Lair BnB',
  //   image: 'lair-bnb-screen-small.png',
  //   appUrl: 'https://pablisch.github.io/lair-bnb/',
  //   apiWakeUpUrl: null,
  //   repoUrl: 'https://github.com/pablisch/lair-bnb',
  //   responsivenessText: 'Never deployed',
  //   heading: 'Lair BnB',
  //   subheading: 'An Air BnB clone with a Lord of The Rings theme',
  //   descriptionText: (
  //     <>
  //       <p className='project-text'>
  //         <span className='emphasise'>Description:</span> This Air BnB clone was
  //         the first group engineering project on the Makers Software Development
  //         Bootcamp and was completed in four and a half days.
  //       </p>
  //       <p className='project-text'>
  //         A huge focus of this project was on learning to work as a team using
  //         Agile methodologies and XP values. We established a group charter with
  //         our core values, used daily stand-ups and retros, two-day sprints,
  //         pair-programming and PR reviews. We also used Trello for project
  //         management and GitHub for version control and collaboration. The
  //         project was built using Ruby and Sinatra from scratch based on a set
  //         of user stories.
  //       </p>
  //     </>
  //   ),
  //   technologiesText: (
  //     <>
  //       <p className='project-text'>
  //         <span className='emphasise'>Technologies:</span> The app is built from
  //         scratch in Ruby and ERB, using Sinatra for routing with the Rack web
  //         server interface. We used PostgreSQL relational database with three
  //         tables and one-to-many relationships.
  //       </p>
  //       <p className='project-text'>
  //         Apart from being our first group project, for much of the group it was
  //         a first venture into CSS which was not taught by Makers. We used RSpec
  //         for testing and achieved 100% coverage over 50 unit and integration
  //         tests. We used Git and GitHub for version control and Postman API
  //         testing.
  //       </p>
  //     </>
  //   ),
  //   techBadges: [
  //     { scale: '40' },
  //     [
  //       { src: 'ruby/ruby-original.svg', alt: 'ruby' },
  //       { src: 'postgresql/postgresql-original.svg', alt: 'postgresql', className: 'tech-left-space-1' },
  //       { src: 'html5/html5-original.svg', alt: 'html5' },
  //       { src: 'css3/css3-original.svg', alt: 'css3', className: 'tech-left-space-1' },
  //       { src: 'rspec/rspec-original.svg', alt: 'rspec', className: 'tech-left-space-1' },
  //       { src: 'git/git-original.svg', alt: 'git', className: 'tech-left-space-1' },
  //       { src: 'github/github-original.svg', alt: 'github', className: 'tech-left-space-2'  },
  //     ]
  //   ]
  // },
];

export const projectPanelData = projectData.map((project) => ({
  id: project.id,
  panelName: project.panelName || project.name,
  summary: project.summary,
  image: project.image,
  section: sectionType.projects,
}));

// console.log(projectPanelData)

export default projectData;
