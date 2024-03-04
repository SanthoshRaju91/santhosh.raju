---
layout: "../../layouts/BlogLayout.astro"
slug: command-alias
title: Using command alias, to help your Dev workflow
synopsis: Improve your Development workflow by shorten commonly used commands. And save yourself from Carpal Tunnel Syndrome. Mac / Linux and Windows users can follow this step-by-step guide, very easy to setup and be done with long typings of command
published: Sep 14, 2018
preview: /command-alias/preview.png
author: Santhosh Raju
authorProfilePic: /authors/santhosh.raju.jpeg
tags:
  - Linux
  - Git
  - Javascript
---

I have been using the command alias for a while now, and it has been a boon in
my web development workflow.

For those who are unaware of the command aliases, it is basically / mostly used
(as I’m aware of) for shortening a long command And this is the reason for writing this blog, because I get asked this question
a lot nowadays.

Now back to what we ought to learn from this blog, so how do you setup command
aliases, just like the one which I showed above.

Turns out it’s really not that complicated(depending on the Operating System)

### On Linux core system’s

Let’s check how to setup command alias in Linux core systems (Mac, Ubuntu)

1. Switch to user directory

   ```shell
   cd ~
   ```

2. Create a .bash_profile or .profile, if you already have one of these files in
   your current directory. Then you can edit the files and add the alias
   commands at the end of the file.

3. The syntax for aliasing is pretty simple alias

   ```shell
   <your-alias>='<command-to-be-aliased>'
   ```

   For eg — I want to alias the 10 characters git branch command to 2 character
   gb, so my syntax would be alias gb='git branch'

   For completeness, I provide a screenshot of my simple alias below.

   ![my alias](/command-alias/screen-2.png)

   Your preferences / command aliases need not match mine, I’m just sharing my
   preference as an example.

4. Final step, once you have built your aliases. You now need to run the
   `.bash_profile` / `.profile` so that your alias are registered and recognised
   by your OS.

To do that, run source .profile / source .bash_profile

### On Window’s based system’s

Even with Window’s, it is quite simple and it’s just one simple command

```powershell
doskey <your-alias>= <command-to-alias> $*
```

The `$\*` is optional, and it is used for command that take arguments.

For eg — `git commit -m` would want to take message as an argument, so you write
the alias as `doskey gc=git commit -m $*`

If you want to persist the alias command, for every new session. I found a very
helpful Stackoverflow answer, which helped me when I was using Windows machine.

[aliases-in-windows-command-prompt](https://stackoverflow.com/questions/20530996/aliases-in-windows-command-prompt)

That’s it, you now can go ahead and use them, instead of typing long commands

One more, main reason that I plan to share it is, I believe that automation or
any small things like this, can really make a difference in our development
time.

> As a programmer, I think that our main focus would go into the product /
> features that we build and ship everyday and we hardly get enough time to
> debug the errors / code issues we run into. Which would take up most of our
> time and we eventually <b>#burnout</b>. So having automations or time saving tools
> like this, can bring the burden down a bit and relive us, hard working
> programmers, from stress.

That’s it for now folks, if you like the blog and found it helpful. Please do
share it to as many developer / programmers, who can benefit from this.

Also, I’m coming up with some more automation / dev workflow helping blogs like
this, so stay tuned for more.
