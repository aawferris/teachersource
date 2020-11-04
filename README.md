# Project Overview

## Project Name

Teacher Source

## Project Description

Teacher Source is your one stop shop for lesson plans and resources,specifically tailored to you! Teacher Source is a web app that creates a community of teachers through our dynamic account services. Inside each account, users have access to My Dashboard, where they can view saved Lesson Plans as well as track their progress on tutorials and continuing education credits. We securely store your information in our top-of-the-line free version of MongoDB.

For Full Project Details, visit here: https://docs.google.com/document/d/1B9OqAIaD5IxQlEjEcYOPIPjeS9Z30ZxMr_qV_zgF0kk/edit?usp=sharing

## Component Hierarchy

Click here to see: https://app.diagrams.net/#G1GoCKGnU_vyN61UQC7LXt4A6cVs4tCsNa

## API and Data Sample

We will be using MongoDB to host our data.
This is our Schema:

```
{
  “title”: (string: true, required: true)
  “subject”: (string: true, required: true)
  “gradeLevel”: (string: true, required: true)
  “description”: (string: true, required: true)
}
```

### MVP/PostMVP

#### MVP

- My Dashboard Page (GET)
- Clickable icon that takes user to Create Lesson Plan page (POST)
- Clickable icon that takes user to View Lesson Plan page (GET)
- Edit Button - takes user to edit Lesson Plan Page (PUT)
- Delete Button - deletes targeted Lesson Plan (DELETE)
- Static Homepage
- 2 Media queries (1200px and 900px)

#### PostMVP

- Lightbox popup to alert user when…
  - Lesson plan is saved
  - Lesson plan is deleted
  - Okay button redirects user back to Lesson Plan Gallery View Page
- (wait to hear from Bruno for extra)

## Project Schedule

| Day     | Deliverable                                 | Status     |
| ------- | ------------------------------------------- | ---------- |
| Oct. 29 | Project Plan / Approval                     | Complete   |
| Oct. 30 | Backend Skeleton and CRUD (locally)         | Complete   |
| Nov. 2  | Finish CRUD, React Skeleton                 | Complete   |
| Nov. 3  | ELECTION DAY                                | --VOTE--   |
| Nov. 4  | React basic screens/component functionality | Complete   |
| Nov. 5  | Reach styling and clean up code (Full MVP)  | Incomplete |
| Nov. 6  | Post MVPs                                   | Incomplete |
| Nov. 9  | Post MVPs                                   | Incomplete |
| Nov. 10 | Presentations                               | Incomplete |

## Timeframes

| Component               | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------- | :------: | :------------: | :-----------: | :---------: |
| React Skeleton          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Component Functionality |    H     |      3hrs      |     3hrs      |    3hrs     |
| Component Styling       |    M     |      3hrs      |     3hrs      |    3hrs     |
| Screen Functionality    |    H     |      3hrs      |     3hrs      |    3hrs     |
| Screen Styling          |    M     |      3hrs      |     3hrs      |    3hrs     |
| App.js/Index.js         |    H     |      3hrs      |     15mn      |    15mn     |
| Back End Skeleton       |    H     |      3hrs      |     3hrs      |    3hrs     |
| GET                     |    M     |     30min      |     30min     |    30min    |
| POST                    |    M     |     30min      |     30min     |    30min    |
| PUT                     |    M     |     30min      |     30min     |    30min    |
| DELETE                  |    M     |     30min      |     30min     |    30min    |
| Deployment (local)      |    H     |      3hrs      |     3hrs      |    3hrs     |
| Delpoyment (Heroku)     |    H     |      3hrs      |     --?--     |    --?--    |
| Deployment (Netlify)    |    H     |      1hrs      |     --?--     |    --?--    |
| Debugging               |    L     |      3hrs      |     --?--     |    --?--    |
| PostMVP                 |    M     |      3hrs      |     --?--     |    --?--    |
| Total                   |    H     |     35hrs      |     --?--     |    --?--    |
