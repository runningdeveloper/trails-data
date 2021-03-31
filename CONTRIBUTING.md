# Contribution Guidelines

Yay thanks for contributing! We will use the all contributors bot to add you to the project attributions and on a website if we ever make one.

## Adding a trail

- Check to see that the trail doesn't already exist
- Check the issues tab to see if someone else is not already adding the trail
- Add an issue to say you doing the trail so that other people do it too
- Follow the guide below for submitting a pull request

## Editing a trail

- I guess follow the steps below to submit a pull request to edit the trail

## Other contributions

- Checkout the issues for open things. Drop a comment in the issues if you have an idea you want to add.

## Submitting a pull request to add a trail

1. [Fork](https://github.com/runningdeveloper/trails-data/fork) and clone the repository
2. Create a new branch: `git checkout -b my-branch-name`
3. Create a new `trail-name.md` (no spaces) document in `trails` folder under the correct province.
4. Look at the [template.md](template.md) document for a guide on how to layout the information. Or see the existing trails for a guide.
5. Add the link to your trail in the [template.md](template.md) document
6. Commit your change

    ```bash
      git add *
      git commit -m "Commit message"
    ```

7. Push to your fork and [submit a pull request](https://github.com/runningdeveloper/trails-data/compare)
8. Pat your self on the back and wait for your pull request to be reviewed and merged.

## Submitting a pull request to improve the website

1. Check to see if the problem exists in the [Issues](https://github.com/runningdeveloper/where-work-sa/issues) and [Pull Requests](https://github.com/runningdeveloper/where-work-sa/pulls) so you don't do double work.
2. [Fork](https://github.com/runningdeveloper/where-work-sa/fork) and clone the repository.
3. Commit your change

    ```bash
      git add *
      git commit -m "Commit message"
    ```

4. Push to your fork and [submit a pull request](https://github.com/runningdeveloper/where-work-sa/compare)
5. Pat your self on the back and wait for your pull request to be reviewed and merged.

## Format of the trail document

Using Markdown take a look at this [cheat sheet](https://www.markdownguide.org/cheat-sheet/) for help.
We also need some front matter for use if we ever make this a website. This is extra information added to the top of the file.

We want the following details at least:

- Trail Name (string)
- Date edited (date string like 01/10/2020)
- Activity types allowed (list like - cycling,running,walking,hiking)
- Link to more info (google maps or trail website)
- Location (google map link)
- Is it free to enter (string Yes or No)
- Description (details about the trail and routes, more info the better and maybe an image)

Additional information would be great:

- Routes link (if you have an all trails link this would be great)

## Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)
- [Markdown Cheat sheet](https://www.markdownguide.org/cheat-sheet/)
- [Keep your fork in sync](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)