# Full-Stack Take-Home Assignment

## Project Overview

The project is to implement a simple **team-member management application** that allows the user view, edit, add, and delete team members. The app consists of 3 pages that are
documented below:

| List Page                            | Add Page                           | Edit Page                            |
| ------------------------------------ | ---------------------------------- | ------------------------------------ |
| ![List Page](./readme/list-page.png) | ![Add Page](./readme/add-page.png) | ![Edit Page](./readme/edit-page.png) |

---

## Pages Description

### List Page

- Displays a list of all team members.
- The **subtitle** should reflect the correct number of team members.
- If a team member is an **admin**, it should be listed next to their name.
- Clicking a team member should navigate to the **Edit Page**.
- Clicking the "plus" (`+`) button should navigate to the **Add Page**.

### Add Page

- Appears when the user clicks the `+` button on the **List Page**.
- User inputs:
  - First Name
  - Last Name
  - Phone Number
  - Email
  - Role selection (defaults to **Regular**)
- Clicking **Save** should:
  - Add the team member to the list.
  - Redirect back to the **List Page**.

### Edit Page

- Appears when the user clicks on a team member from the **List Page**.
- Displays a form where the user can **edit details** of the team member.
- Allows changing the **role** of the team member.
- Clicking **Save** should:
  - Update the team member's details.
  - Redirect back to the **List Page**.
- Clicking **Delete** should:
  - Remove the team member from the list.
  - Redirect back to the **List Page**.

---

## Notes

- The web app should be implemented using **Django**.
- Consider using the **Django Rest Framework (DRF)** to minimize the amount of backend code required.
- The front-end should be a **Single Page Application (SPA)** of your choice.
- **Design & UI:**
  - Do not worry about exact font styles, colors, or icons.
  - Focus on functionality, user experience (UX), and Django best practices.

---

## Expectations

- **No strict deadline.** Work on it at your own pace.
- When submitting the project, please include an **estimate of the total time spent** on development.
- Think about the **end-user experience** and make any improvements you see fit to create a more complete application.
