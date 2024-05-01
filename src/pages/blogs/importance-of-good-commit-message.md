---
layout: "../../layouts/BlogLayout.astro"
slug: importance-of-good-commit-message
title: Importance of good commit message
synopsis: Explore the importance of concise commit messages and how commitizen streamlines the writing process, enhancing codebase clarity and collaboration.
published: May 1, 2024
preview: /command-alias/preview.png
authorProfilePic: /authors/santhosh.raju.jpeg
tags:
  - Linux
  - Git
---

<div class="w-full flex flex-row justify-center">
    <img src="/importance-of-good-commit-message/preview.png" alt="Commit message" width="500" height="200"/>
</div>

In this article, we'll delve into the

1. Importance of crafting a good commit message, exploring its significance.
2. Simple rules to follow for meaningful messages.
3. Additionally, we'll discover how tools like commitizen can streamline the process, making it easier for developers to maintain clear and informative commit histories.

### Why Having a Good Commit Message is Important

Before we dive into the details, let's address the fundamental question: why does a good commit message matter?

- **Clarity and Understanding:** A clear commit message provides a concise summary of the changes made, aiding other developers and your future self in understanding the purpose and context of the changes without delving deep into the code.
- **Historical Insight:** A well-crafted commit history enables quick comprehension of the code's evolution, facilitating debugging, refactoring, and extension of the codebase.
- **\*Documentation:** Good commit messages serve as valuable documentation, offering insights into the project's history, including design decisions, bug fixes, and feature implementations.
- **Efficient Code Reviews:** Meaningful commit messages expedite the code review process, allowing reviewers to grasp the intent of the changes and provide relevant feedback.

These points highlights the importance of investing time and effort into crafting good commit messages. Now, let's outline some simple rules to ensure your commit messages are clear and meaningful.

### Simple Rules for a Good and Meaningful Commit Message

According to [CBEAMS](https://cbea.ms/git-commit/), there are seven rules to follow for great commit messages. However, for brevity, we'll focus on the essentials:

1. Subject and Body: Each commit message should have a subject and a body, separated by a blank line.
2. Conciseness: Limit the subject line to 50 characters and the body to 72 characters.
3. Imperative Mood: Use the imperative mood in the subject line.
4. Focus on What and Why: Use the body to explain what and why the changes were made, rather than how.

### Simplifying Commit Messages with Commitizen

Now, let's explore how tools like commitizen can simplify the process of writing good commit messages.

To demonstrate, let's set up commitizen for a simple Node.js project:

```bash
mkdir commitizen-demo # create project directory

cd commitizen-demo # change to project directory

npm init -y # Initialize Node.js project

git init # Initialize git repository
```

Once the project is initialised, will mimick a real world code repository with a README file and src directory that would usually contain all the source code.

```bash
.
├── README.md
├── package.json
└── src
    └── index.js
```

Next, install commitizen globally and initialize the project with the cz-conventional-changelog adapter:

```bash
npm install -g commitizen # Install commitizen globally
commitizen init cz-conventional-changelog --save-dev # Initialize project with commitizen

```

Finally, integrate commitizen with husky to execute it automatically when committing changes:

```bash
npm install --save-dev husky # Install husky
npx husky init # Initialize husky
```

Then, add the following script to .husky/\_/prepare-commit-msg:

```bash
#!/bin/bash

exec < /dev/tty && node_modules/.bin/cz --hook || true
```

With commitizen set up, you'll now see an interactive prompt when committing changes, ensuring consistent and meaningful commit messages.

<div class="w-full flex flex-row justify-center">
    <img src="/importance-of-good-commit-message/commitizen-preview.png" alt="Commitizen preview" width="700" height="400"/>
</div>

Commitizen offers various adapters for different conventions, making it adaptable to different project setups. We saw how to configure `cz-conventional-changelog`, similiarly we can configure `cz-conventional-changelog-for-jira`. This allows us to attach JIRA ID for each commit message.

<br/>
In my next article, we'll explore using commitizen for Python projects, stay tuned.

<br/>

That's all for now! Remember, a good commit message goes a long way in fostering effective collaboration and maintaining a healthy codebase.

### References

- [https://www.theodinproject.com/lessons/foundations-commit-messages](https://www.theodinproject.com/lessons/foundations-commit-messages)
- [https://www.mattduck.com/2023-09-04-git-commit-messages](https://www.mattduck.com/2023-09-04-git-commit-messages)
- [https://cbea.ms/git-commit/](https://cbea.ms/git-commit/)
- [https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/)
- [https://www.npmjs.com/package/commitizen](https://www.npmjs.com/package/commitizen)
