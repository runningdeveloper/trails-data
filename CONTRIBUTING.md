# Contribution Guidelines

Yay thanks for contributing! I would like this repo to be beginner friendly and a simple way to get an open source contribution done. I think we can make something useful for people visiting and living in South Africa. I will use the all contributors bot to add you to the project attributions and it will add your github profile link to the website.

Contributions are is mainly aimed at software developers in or visiting South Africa. Adding a trail that you have actually done recently is the idea. Unless you want to help out with other aspects like the website.

## How to add a trail

- Check to see that the trail doesn't already exist (otherwise you can edit an existing one)
- Check the issues tab to see if someone else is not already working on adding the trail
- Check the issues tab to see if there is a trail suggested that no one has claimed yet
- Add or comment on an issue to say you want to do your trail so that other people don't submit the same trail
- Follow the guide below for submitting a pull request

## Editing a trail (add more info or fix content errors)

- Follow the steps below to submit a pull request to edit the trail

## Other contributions

- Checkout the issues for open things. Make an issue if you have an idea you want to add.

## Submitting a pull request to add a trail

If you are a complete beginner have a look at [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)

If you know the basics here is quick run down of how to do it:

1. [Fork](https://github.com/runningdeveloper/trails-data/fork) and clone the repository
2. Create a new branch: `git checkout -b my-branch-name`
3. Create a new `trail-name.md` (no spaces) document in `trails` folder under the correct province.
4. Look at the [template.md](template.md) document for a guide on how to layout the information. Because we create a website from the trails data, you need to try follow the template especially for the frontmatter (the variables at the top of the markdown file). Also take a look at some other trails for an idea of what to add.
5. Commit your change

    ```bash
      git add *
      git commit -m "Commit message"
    ```
6. Push to your fork and [submit a pull request](https://github.com/runningdeveloper/trails-data/compare)
7. Your pull request will run some tests and let you know if there is something you can fix. You can click on the details of the test to see what the error was. If in doubt reach out in the comment and I can help.
8. If all the tests pass, pat your self on the back and wait for your pull request to be reviewed and merged.
9. Once merged you'll be added to the contributions list.

## Format of the trail document

Using Markdown take a look at this [cheat sheet](https://www.markdownguide.org/cheat-sheet/) for help.
We also need some frontmatter which is used to help build the website. This is extra information added to the top of the file.

See the [template.md](template.md) document for details on all the fields.

## Other Notes

Try to explain why the trail is great or should be done. The more information the better.

If there are many contributions or changes being merged, your fork may be behind on the new changes. Take a look at this link to [keep your fork in sync](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork). There is a nice new button to make it easier.

## Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)
- [Markdown Cheat sheet](https://www.markdownguide.org/cheat-sheet/)
- [Keep your fork in sync](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)