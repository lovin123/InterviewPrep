const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
    // Insert Question Tags
    const reactTag = await prisma.questionTag.upsert({
        where: { name: "React" },
        update: {},
        create: { name: "React" },
    })

    const nextjsTag = await prisma.questionTag.upsert({
        where: { name: "Next.js" },
        update: {},
        create: { name: "Next.js" },
    })

    const nodejsTag = await prisma.questionTag.upsert({
        where: { name: "Node.js" },
        update: {},
        create: { name: "Node.js" },
    })

    const jsTag = await prisma.questionTag.upsert({
        where: { name: "JavaScript" },
        update: {},
        create: { name: "JavaScript" },
    })

    // Insert Questions
    await prisma.question.createMany({
        data: [
            {
                name: "What is a React component and what are its types?",
                desc: "Explain what React components are, the difference between functional and class components, and when to use each. Include discussion of React.memo and Pure Components.",
                difficulty: "medium",
                questionTagId: reactTag.id,
            },
            {
                name: "Explain React hooks lifecycle and useEffect",
                desc: "Describe the component lifecycle using hooks, focusing on useEffect's dependency array, cleanup function, and common use cases. Compare it with class component lifecycle methods.",
                difficulty: "medium",
                questionTagId: reactTag.id,
            },
            {
                name: "How does Next.js handle routing and rendering?",
                desc: "Explain Next.js routing system, different rendering strategies (SSR, SSG, ISR), and when to use each. Include discussion of getStaticProps, getServerSideProps, and client-side navigation.",
                difficulty: "hard",
                questionTagId: nextjsTag.id,
            },
            {
                name: "Explain Node.js event loop and asynchronous programming",
                desc: "Describe the Node.js event loop, its phases, and how asynchronous operations work. Include examples of promises, async/await, and common pitfalls.",
                difficulty: "hard",
                questionTagId: nodejsTag.id,
            },
            {
                name: "What are closures and how do they work in JavaScript?",
                desc: "Define closures, their practical applications, and potential memory implications. Include examples of common use cases like data privacy and function factories.",
                difficulty: "medium",
                questionTagId: jsTag.id,
            },
            {
                name: "Explain JavaScript event loop and asynchronous patterns",
                desc: "Describe the JavaScript event loop, microtasks vs macrotasks, and common async patterns. Include discussion of Promise APIs and async/await.",
                difficulty: "hard",
                questionTagId: jsTag.id,
            },
            // New questions
            {
                name: "React state management approaches",
                desc: "Compare different state management approaches in React: Context API, Redux, Zustand, and local state. Discuss when to use each and their trade-offs.",
                difficulty: "hard",
                questionTagId: reactTag.id,
            },
            {
                name: "Next.js 13+ App Router vs Pages Router",
                desc: "Compare the new App Router with the traditional Pages Router, discussing Server Components, streaming, and data fetching patterns.",
                difficulty: "hard",
                questionTagId: nextjsTag.id,
            },
            {
                name: "JavaScript prototypes and inheritance",
                desc: "Explain JavaScript's prototypal inheritance, the prototype chain, and how it differs from classical inheritance. Include ES6 class syntax and its relation to prototypes.",
                difficulty: "medium",
                questionTagId: jsTag.id,
            },
            {
                name: "Node.js streams and buffers",
                desc: "Explain Node.js streams, their types, and when to use them. Include discussion of buffers, backpressure, and performance considerations.",
                difficulty: "hard",
                questionTagId: nodejsTag.id,
            },
            {
                name: "React performance optimization techniques",
                desc: "Discuss various React performance optimization strategies including useMemo, useCallback, code splitting, and virtualization.",
                difficulty: "hard",
                questionTagId: reactTag.id,
            },
            {
                name: "JavaScript memory management and garbage collection",
                desc: "Explain how JavaScript manages memory, common memory leaks, and best practices for memory optimization.",
                difficulty: "hard",
                questionTagId: jsTag.id,
            }
        ],
    })

    console.log("Questions and tags inserted successfully. quitting")
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

