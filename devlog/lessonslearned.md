## Lessons Learned

- Serialize All Components Right Away
  - I used a lot of code to not serialize my components and ended up with a massive page that was really unusable early in the NewProjectForm.jsx component. Would have been better just serializing and compartmentalizing it early.
- Use ReactState or Redux for adding data for props
  - In serializing the app I found that I passed data back and forth between a lot of components and for simpler handling, it would be easier to just use the state managing tool or use Redux for persistent data
