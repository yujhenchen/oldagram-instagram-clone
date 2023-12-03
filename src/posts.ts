import { PostData } from "./types";

export const posts: PostData[] = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comments: [
            { username: 'gus1819', comment: 'just took a few mushrooms lol' },
            { username: 'jd1735', comment: 'great!' }],
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comments: [{ username: 'vincey1853', comment: "i'm feelin a bit stressed tbh" }],
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comments: [{
            username: 'gus1819',
            comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!"
        },
        { username: 'vincey1853', comment: 'cool!' },
        { username: 'jd1735', comment: "well..." }
        ],
        likes: 152
    }
]

