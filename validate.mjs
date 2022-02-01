import glob from 'glob-promise'
import matter from 'gray-matter'
import yup from 'yup';

// rough little test to see if the frontmatter is valid - pretty sure there is a better way see how this goes

let schema = yup.object().shape({
    trailName: yup.string().required('"trailName" is required in the frontmatter see the template.md'),
    date: yup.date().required('"date" is required in the frontmatter see the template.md'),
    activity: yup.array(yup.string()
        .oneOf(["running",
            "swimming",
            "walking",
            "cycling",
            "hiking"])).min(1).required('"activity" is required in the frontmatter see the template.md'),
    link: yup.string().url().required('"link" is required in the frontmatter see the template.md'),
    location: yup.string().url().required('"location" is required in the frontmatter see the template.md'),
    free: yup.boolean().required('"free" is required in the frontmatter see the template.md'),
    routes: yup.array(yup.string().url().required()).nullable(),
    otherLinks: yup.array(yup.string().url().required()).nullable()
});


const posts = await glob('./trails/**/*.md')

for (let post of posts) {
    const parsed = matter.read(post)
    try {
        await schema.validate(parsed.data, { strict: true })
    } catch (error) {
        // need a way to let u know where the error is
        throw new Error(`For file ${post}\n${error.message}`)
    }
}
