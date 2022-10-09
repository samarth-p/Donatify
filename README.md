# [Donatify](https://agupta15k.github.io/ncsu_se_fall22_22_pr_1/)

[![GitHub](https://img.shields.io/github/license/agupta15k/ncsu_se_fall22_22_pr_1?color=green&label=license&logo=MIT)](https://github.com/agupta15k/ncsu_se_fall22_22_pr_1/blob/main/LICENSE.md)
[![GitHub issues](https://img.shields.io/github/issues-raw/agupta15k/ncsu_se_fall22_22_pr_1)](https://github.com/agupta15k/ncsu_se_fall22_22_pr_1/issues)
[![Github closed issues](https://img.shields.io/github/issues-closed-raw/agupta15k/ncsu_se_fall22_22_pr_1)](https://github.com/agupta15k/ncsu_se_fall22_22_pr_1/issues?q=is%3Aissue+is%3Aclosed)
[![Github pull requests](https://img.shields.io/github/issues-pr/agupta15k/ncsu_se_fall22_22_pr_1?color=red)](https://github.com/agupta15k/ncsu_se_fall22_22_pr_1/pulls)
[![Github closed pull requests](https://img.shields.io/github/issues-pr-closed/agupta15k/ncsu_se_fall22_22_pr_1?color=blue)](https://github.com/agupta15k/ncsu_se_fall22_22_pr_1/pulls?q=is%3Apr+is%3Aclosed)
[![Github all contributors](https://img.shields.io/github/contributors/agupta15k/ncsu_se_fall22_22_pr_1?color=green)](https://github.com/agupta15k/ncsu_se_fall22_22_pr_1/graphs/contributors)
[![DOI](https://zenodo.org/badge/542853527.svg)](https://zenodo.org/badge/latestdoi/542853527)
[![codecov](https://codecov.io/gh/agupta15k/ncsu_se_fall22_22_pr_1/branch/main/graph/badge.svg?token=BNXSAGHWJZ)](https://codecov.io/gh/agupta15k/ncsu_se_fall22_22_pr_1)

:clap: “Happiness doesn’t result from what we get, but from what we give." ~ Ben Carson :clap:

Majority of us have noticed items which go to waste even when they are in their prime condition. For example, many atriums, dining halls around the world, dispose of their leftovers at the end of the day, and a lot of food is being wasted.

We introduce to you Donatify, a platform for donors and receivers to communicate, donate and recieve items respectively. In simple terms, a user would put up items which they would like to donate, and other users, if their interests match with the item, would choose to receive it.

**Want to be part of an environment saving initiative, while sitting in the comfort of your home?** Get on Donatify, donate the stuff you don't need, and feel good.

## App in action

![](https://github.com/agupta15k/ncsu_se_fall22_22_pr_1/blob/main/docs/execution/screenshots/marketplace.png)
![](https://github.com/agupta15k/ncsu_se_fall22_22_pr_1/blob/main/docs/execution/screenshots/donate.png)
![](https://github.com/agupta15k/ncsu_se_fall22_22_pr_1/blob/main/docs/execution/screenshots/acceptDonation.png)

## Getting started

- ### Prerequisites
  - [npm](https://www.npmjs.com/) and [node](https://nodejs.org/en/) (version 16.X or 16.17.1) should be installed.
  - Make sure the database server (mysql) is on. Consider using XAMPP.
  - Download [Python3](https://www.python.org/downloads/).
  - pytest for testing the application server.

- ### Installation and Run

    **Backend**: [Documentation](https://htmlpreview.github.io/?https://github.com/agupta15k/ncsu_se_fall22_22_pr_1/blob/backendDocs/index.html)

    1. Create virtual environment

    ```
    python -m venv <name_of_virtualenv>
    ```

    2. Activate Python Virtual environment

    ```
    <name_of_virtualenv>\Scripts\activate.bat for Windows users.
    source <name_of_virtualenv>/bin/activate for linux users.
    ```

    3. Install dependencies

    ```
    pip install -r requirements.txt
    ```

    4. Run the below command from the main directory to start the backend application server.

    ```
    python -m src.Backend.app
    ```

    5. The backend flask application will be up and running at ```localhost:5001```

    **Frontend**: [Documentation](https://htmlpreview.github.io/?https://github.com/agupta15k/ncsu_se_fall22_22_pr_1/blob/frontendDocs/left-overs/0.1.0/index.html)

    1. After cloning the repository, move to the directory ```src\frontend``` where our frontend code is located.

    2. Install all the dependencies using npm. Command to run: ```npm install```. This will fetch the dependecies from package.json file, and install them.

    3. Start the server by using the command ```npm start```. This will run the server on port ```3000```, and the website can be accessed by going to ```http://localhost:3000/```.

    4. If credentials of a registered user are available, use them, or register a new user and interact with the website.
  
 - ### Testing

    **Backend**

    1. Run the below command from the main directory. This should run all the test cases for app.py.

    ```
    pytest
    ```
    
    **Frontend**

    1. Move to the directory ```src\frontend``` where our frontend tests are located.
    
    2. Run the tests using the command ```npm test -- --coverage --watchAll=false```. This will run all the tests across the frontend code.


  - ### Troubleshooting
  
    Try the following troubleshooting steps. If none of them work, contact the repository owner/file an issue.

    **Backend**

    1. We have added the print statements in all of the backend functions to know execution of the codes.
    2. In case of error the print statements will let us know about the issue of code break.
    3. The api responses the status code, valid message and response header which they can share back for troubleshooting.

    **Frontend**
    
    1. Since frontend is build using JavaScript, React and Redux, check for console logs under developer tools to identify any failures.
    2. Consider installing and using [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux developer tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) to track the request through the system.

## Directory structure

    .
    ├── .github
    |   ├── workflows
    |   |   ├── frontendGitActions.yml      # GitActions workflow for frontend
    |   |   ├── backendGitActions.yml       # GitActions workflow for frontend
    ├── .vscode
    |   ├── extensions.json                 # Recommended extensions for vscode
    |   ├── settings.json                   # Workspace settings for vscode
    ├── docs
    |   ├── Rubrics
    |   |   ├── proj1rubric.md              # Project rubric
    |   ├── Backend                         # Documentation for backend
    |   ├── frontendDocs/left-overs/0.1.0   # Documentation for frontend
    |   ├── README.md                       # Readme file for docs folder
    ├── src
    |   ├── Backend
    |   |   ├── __init__.py                 # Init file for backend
    |   |   ├── app.py                      # File containing backend APIs
    |   |   ├── dbconfig.py                 # DB configuration for backend
    |   |   ├── utils.py                    # Utilities for backend
    |   ├── database
    |   |   ├── donationsystem.sql          # Backend SQL
    |   ├── frontend
    |   |   ├── public                      # Folder containing assets and images
    |   |   ├── src
    |   |   |   ├── API                     # Folder containing API calling frontend code
    |   |   |   ├── __tests__               # Folder containing unit tests for frontend
    |   |   |   ├── app                     # Folder containing redux store configuration
    |   |   |   ├── components              # Folder containing frontend react components
    |   |   |   ├── containers              # Folder containing containers to connect components with redux store
    |   |   |   ├── reducers                # Folder containing reducers
    |   |   |   ├── axiox.js                # API client generation
    |   |   |   ├── index.css               # CSS configuration for frontend
    |   |   |   ├── index.js                # Entry point for frontend
    |   |   |   ├── leftOver.jsx            # Root react component
    |   |   |   ├── setupTests.js           # Setup jest configuration for unit testing
    |   |   ├── .eslintignore               # Ignore configuration for eslint
    |   |   ├── .eslintrc.js                # eslint configuration
    |   |   ├── package.json                # Package configuration and dependency closure
    |   ├── README.md                       # Readme file for src folder
    ├── test
    |   ├── README.md                       # Readme file for test folder
    |   ├── __init__.py                     # Init file for test folder
    |   ├── test_app.py                     # Tests for backend
    ├── .gitattributes                      # File for git attributes
    ├── .gitignore                          # File for git ignore
    ├── CODE_OF_CONDUCT.md                  # Code of conduct for repository
    ├── CONTRIBUTING.md                     # Details about contributing to the repository
    ├── LICENSE.md                          # MIT License details
    ├── README.md                           # Readme file for repository
    ├── requirements.txt                    # Details of dependency packages
    └── setup.py                            # Setup file for the module

## Roadmap

* Roadmap for this project can be found [here](https://github.com/users/agupta15k/projects/2).
