# SWE Ticker Bell

The production frontend for [swe.tickerbell.biz](https://swe.tickerbell.biz).

## About the Project

`SWE Ticker Bell` is a public web application documenting my journey toward becoming a stronger software engineer with the help of ChatGPT, GitHub, and modern development tools.

The website presents the journey in a practical and interactive format. Each stage introduces a problem, explains the solution, and provides a working result that visitors can explore.

This repository contains the source code used to build and publish the live frontend.

## Live Website

**Production website:** [https://swe.tickerbell.biz](https://swe.tickerbell.biz)

## Project Purpose

The website has three main goals:

1. Present my day-by-day software engineering journey.
2. Transform each lesson into a practical and usable result.
3. Help other people begin a similar journey through simple steps.

The long-term goal is to develop the website into a connected platform containing demonstrations, showcases, learning materials, customer communication features, external services, and automated workflows.

## Relationship With Become-SWE

This repository contains the working frontend.

The learning documents, tutorials, experiments, difficulties, and lessons are stored separately in the [Become-SWE learning repository](https://github.com/tickerbell-biz/Become-SWE).

```text
Learn and document in Become-SWE
                ↓
Design, build, and test the solution
                ↓
Publish the frontend through swe-tickerbell
                ↓
Make it available at swe.tickerbell.biz
```

## Planned Website Structure

The website is planned to include:

- Top navigation
- Link to [tickerbell.biz](https://tickerbell.biz)
- Hero section
- Journey overview
- Individual journey and lesson sections
- Interactive demonstrations
- Product and application showcases
- Connections to external systems
- Contact and customer communication options
- Automated workflows

## Technology

The initial version uses HTML, CSS, JavaScript, GitHub, GitHub Pages, and custom-domain DNS configuration.

Additional frontend frameworks, backend services, databases, APIs, testing systems, and automation tools may be introduced during later stages.

## Repository Structure

```text
swe-tickerbell/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── icons/
├── CNAME
└── README.md
```

The actual structure may change as the application grows.

## Local Development

1. Clone the repository:

```bash
git clone https://github.com/tickerbell-biz/swe-tickerbell.git
```

2. Open the project folder:

```bash
cd swe-tickerbell
```

3. Open `index.html` in a browser or start a local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

The frontend is published through GitHub Pages from the `main` branch.

The custom domain is `swe.tickerbell.biz`, and the `CNAME` file should contain:

```text
swe.tickerbell.biz
```

Changes merged into the publishing branch may automatically update the live website.

## Contribution Workflow

1. Create a new branch.
2. Make and test the changes.
3. Commit the changes with a clear message.
4. Push the branch to GitHub.
5. Open a pull request.
6. Review and merge the pull request.
7. Verify the live website after deployment.

## Security

This repository is public. Never commit passwords, API keys, access tokens, private configuration files, customer information, confidential business information, or database credentials.

Sensitive configuration should be stored using secure environment variables or the relevant hosting provider’s secret-management system.

## Project Status

The project is under active development. The first version establishes the public website, GitHub Pages hosting, and the connection to the `swe.tickerbell.biz` subdomain.

## About Ticker Bell

This project is developed by **Ticker Bell Kft.**, an R&D company based in Budapest, Hungary.

Main website: [tickerbell.biz](https://tickerbell.biz)

## Author

**Dr. Mehrzad Abdi Khalife**  
Founder and CEO, Ticker Bell Kft.  
Ph.D., PMP®

## License

Licensing information will be added as the project develops.
