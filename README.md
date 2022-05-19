## 🚀 Quick start

  **MWM JOBBARDS Project Interview**
  - This project is made with gatsby,
  - You need node >= 12,
  - Intall Gatsby on your local computer,
  - Run `yarn install && yarn develop`.

  **MWM JOBBARDS ARCHITECTURE**
  
  This project is build with gatsby a react SSG (Static-site generation)  framework. I choose gatsby because is fast and fit with the need for this project. Having static genration make sense in this projects since we don't have too much content changes and few API calls we make. Is also practical for cost and need less ressources than other framework. This is our the project is design:
  - components: Here we find components (which we can call modules here), that will be use in container. The can be use in many components,
  - containers: These are components connected to redux. This is where we use non-connected components. There are use in pages
  - pages: We find every page of our application. In gatsby logic, this is where we can make our queries.
  - redux: This is where all our redux logic is define. We find:
    - slices/{reducer}/*.selectors.js: Here we have all selectors for a given reducer.
    - slices/{reducer}/*.slice.js: The slice (from redux/toolkit), this where we define our actions, thunk and state.
  - sass: it's the style directory.