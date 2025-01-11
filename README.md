IN PROGRESS:

TO DO:

// Step N-3: Create a cache database (Redis)
// Step N-2: Create production database (PostgreSQL)
// Step N-1: Deploy backend API to production (Heroku)
// Step N: Deploy Android app to Google Play Store
// Step N+1: Live Happily ever after

Stack:

- Backend: JavaScript/NodeJS
- Frontend: Kotlin/Android

Pre-requisites:
npm i youtube-transcript
npm i axios
npm i dotenv

DONE:
Step -1: Define the data model
Step 0: Create a prompt that will assist any LLM to reliably respond
with a specific JSON data model
Step 1: Get YouTube Link
Step 2: Download and install transcript for a YouTube link
(npm i youtube-transcript)
Step 3: Send prompt + transcript to an LLM
Step 4: Process the response from the LLM
Step 5: Log the response as the desired data model

Data model:

A recipe

- name
- instructions
- skill level
- dietry requirements

A recipe ingredient

- quantity
- ...

A ustensil

- name = Spoon

An ingredient

- name
- type
