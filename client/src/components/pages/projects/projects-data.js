// eslint-disable-next-line
import React from "react";

export const projects = [
	{
		title: "Seekhana",
		screenshot: "./assets/work/screenshots/seekhana.png",
		tech: [
			{ text: "React", logo: "./assets/tech-logos/react.svg" },
			{ text: "OAuth", logo: "./assets/tech-logos/google.svg" },
			{ text: "Node.js", logo: "./assets/tech-logos/Node.svg" },
			{ text: "MongoDB", logo: "./assets/tech-logos/mongodb-notext.svg" },
		],
		description: [
			"सीखना (Transliteration: 'seekhana' or 'seekhna') is a Hindi word that, as a transitive verb, translates to english as 'to get' or 'to learn'. This is an app designed to help an english speaker pick up the basics of Hindi - the MVP focuses on the hindi alphabet.",
			"Hindi is a beautiful language and is widely spoken on our planet - but I've found that there is a major shortcoming in Hindi learning apps that are intuitive and free, so we decided to create our own.",
			"For a change of pace, my responsibilities over the course of this project primarily focused on the back-end, although I also did the design and CSS. Laster, I went back and did quite a bit of React, as well.",
			"I'm very happy with the way this app turned out - so happy, in fact, that I went back and rebuilt a mobile implementation of it with React Native.",
		],
		source: "https://github.com/wilm42/seekhanaWeb",
		live: "http://seekhana.herokuapp.com/",
	},
	{
		title: "Pollster",
		screenshot: "./assets/work/screenshots/pollster.png",
		tech: [
			{ text: "Firebase", logo: "./assets/tech-logos/firebase.svg" },
			{ text: "React", logo: "./assets/tech-logos/react.svg" },
			{ text: "Node.js", logo: "./assets/tech-logos/Node.svg" },
		],
		description: [
			"Pollster is a real-time polling app designed to get out of your way.",
			"Everyone likes polling their friends - or at least the major social networks seem to think so. Twitter and Facebook have both implemented implemented polling features, but they both lack the ability to easily send your poll to people who aren't a member of their platform. Pollster is a loyalty-free polling system, you don't even have to give us a real name - just sign up with an email address and create polls that are accessible to anyone - whether they're a member or not.",
			"This was my first time building a web app entirely using firebase, and I have to say... it was awesome. Server code is fun to write, but for something as simple as this it can be a little tedious. Add in the fact that I really wanted the results to be real-time and firebase just seemed like a perfect fit. I used their auth system as well as their real-time database - both were a breeze to work with and packed in tons of functionality.",
			"There's only a little bit of Node involved, jusst serving up the pages on heroku.",
		],
		source: "https://github.com/wilm42/pollster",
		live: "http://realtime-pollster.herokuapp.com",
	},
	{
		title: "devCupid",
		screenshot: "./assets/work/screenshots/devCupid.png",
		tech: [
			{ text: "React", logo: "./assets/tech-logos/react.svg" },
			{ text: "OAuth", logo: "./assets/tech-logos/github-icon.svg" },
			{ text: "Node.js", logo: "./assets/tech-logos/Node.svg" },
			{ text: "MongoDB", logo: "./assets/tech-logos/mongodb-notext.svg" },
		],
		description: [
			"devCupid is a project designed to help developers and other folks in the tech word find one another in order to create a team for open-source passion projects",
			"I like to think of it as a layer on top of GitHub where you're able to search for members based on languages, interests, and skillsets - then contact them directly so that you can build something together.",
			"My responsibilities on this project were focused on the front-end and product design aspects, and I spent the vast majority of my time building out the onboarding flow for new members. I wanted to try something a bit quirky, as you can see from the the onboarding flow and general layout & color scheme of the app.",
			"The initial idea was a lot more ambitious than the MVP you see here - we wanted to include personality matching based on the Big-5 Personality Traits, and have a robust team system that included real-time chat. However, the timeline only allowed for 3 weeks our 4 person team just couldn't get to all of the features we wanted.",
			"Overall this was a really fun project to work on, and is something I am continually developing as time permits.",
		],
		source: "https://github.com/thinkful-c11/devcupid",
		live: "http://devcupid.herokuapp.com/",
	},
];
