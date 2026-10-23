## Portfolio Project Reflection

Building this portfolio helped me apply the React and web
development concepts I learned in my Web Technologies
course. I created a personal website that introduces my
technical interests, education, skills, and projects. I
used React components to organize the pages and make the
code easier to maintain.

One important part of the project was implementing
navigation with React Router. I created separate pages for
Home, Experience, Projects, and Contact, along with
individual detail pages for each project. Using a reusable
project card component allowed me to display project
information consistently. I also used an array of project
data instead of writing separate markup for every project.

I implemented a project filter using React state and URL
search parameters. This allows visitors to filter projects
and bookmark a URL containing their search. I also added
handling for searches with no matching results and for
invalid project links. These features helped me understand
how React state, routing, and URL parameters work together.

Another challenge was deploying the website to GitHub
Pages. I configured a GitHub Actions workflow to install
dependencies, run linting, build the project, and deploy
the generated site. When the site initially displayed a
blank white page, I investigated the deployment and asset
path configuration. Fixing the base path helped me
understand why a successful deployment does not always
guarantee that a website will render correctly.

If I continued improving this portfolio, I would add more
original projects and refine the content as I gain
experience. I would also continue testing the site at
different screen sizes and checking accessibility,
navigation, and project links.

Overall, this project gave me practical experience with
React, reusable components, routing, state management
responsive design, Git, and automated deployment. It also
reinforced the importance of testing a website after
publishing it, not just confirming that the code builds
successfully.

