# Contributing Guidlines

> please do not submit an issue to ask a question, we have a discord server for that.
> Join the discord server [here](https://discord.gg/u5RpzVw)

## Getting The Project Setup

 1. Fork and Clone the project
 2. Apply for ESV API Token
 3. Create a file called `.env`
 4. Create a variable called REACT_APP_ESV_API_TOKEN
 5. Run `npm i`
 6. Run `npm start` for development server

After all that everything should work, normal commands for create-react-app will work.

## Notes On Contributing

There are a few git hooks that will not let you commit unless these rules pass. 

 1. All unit tests must pass
 2. Commit message must pass a linter, set [commitlint](https://conventional-changelog.github.io/commitlint/#/) for the rules.

It is recommended that you always run `npm test` prior to committing.

There will also be an automated code review on each pull request and a review from a contributer will also review each pull request before merging. 

We will also be using the standardjs coding standard.

If there are any questions please post them on the #contributing-questions channel on discord. 

## Steps for creating good issues or pull requests

### Reporting a Bug

If you are reporting a bug, please provide the following: 
 - A description of the event prior to the issue
 - A description of the expected behavior
 - A description of the actual behavior
 - Your operating system and browser

### Submitting a Feature Request

If you are submiting a feature request please use behavior type laungage. 

example:

_Violets should:_
  - _Be Blue_

_Rose should:_
  - _Be Red_

## Code of Conduct

Be kind to one another. Be open minded to new ideas. Write clean code.
