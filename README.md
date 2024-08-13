# Overview
This repository contains a setup for API automation using Playwright, a versatile framework originally designed for browser automation but also well-suited for API testing. Playwright provides a powerful and easy-to-use API that enables you to test RESTful web services and ensure that they work as expected.

# Folder Description
### tests/api/: Contains the API test scripts.
### utils/: Utility classes and functions used across tests, such as an API client wrapper and configuration files.
### playwright.config.js: Configuration file for Playwright.

## Getting Started
### Prerequisites
> Ensure that you have the following installed:

- Node.js 
- npm (Node Package Manager)
- VisualStudio 

### Installation

1 Clone the repository :

```bash 
git clone https://github.com/SSonali026/Playwright_API_Framework.git
```

2 Open the VisualStudio editor and open the project

3 open terminal and Install playwright:

```bash 
 npm init playwright
```

### Running Tests
To execute the tests, run:

```bash 
npx playwright test
```
- This will run all the tests located in the tests/ directory.

### Test Configuration
The Playwright configuration is defined in the playwright.config.js file. You can specify test options such as browser type, viewport size, and more.

##  Writing API  Tests
Creating a test

1. Create a new file in the tests/api/ directory, e.g., users.test.js.

2. Write the test using Playwright's API testing capabilities


## Reporting 
After running tests, a detailed report is generated automatically. By default, it will be available in the reports/ directory.

To view the report:
```bash
npx playwright show-report
```
### Debugging
Use the --debug flag to run Playwright in debug mode:

```bash 
npx playwright test --debug
```

This will open the browser in non-headless mode and pause the test execution, allowing you to inspect the DOM and interact with the page.

