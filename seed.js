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
                name: "What is a React component?",
                desc: "Explain what a React component is and how it works.",
                difficulty: "easy",
                questionTagId: reactTag.id,
            },
            {
                name: "What is the purpose of useEffect in React?",
                desc: "Describe the useEffect hook in React and give an example of how to use it.",
                difficulty: "medium",
                questionTagId: reactTag.id,
            },
            {
                name: "How does Next.js handle server-side rendering?",
                desc: "Explain how server-side rendering works in Next.js.",
                difficulty: "hard",
                questionTagId: nextjsTag.id,
            },
            {
                name: "What is the difference between CommonJS and ES6 modules in Node.js?",
                desc: "Explain the difference between the CommonJS module system and ES6 module system in Node.js.",
                difficulty: "medium",
                questionTagId: nodejsTag.id,
            },
            {
                name: "What is closure in JavaScript?",
                desc: "Define closure and explain how it works in JavaScript.",
                difficulty: "easy",
                questionTagId: jsTag.id,
            },
            {
                name: "Explain event delegation in JavaScript.",
                desc: "What is event delegation and how does it improve performance in JavaScript applications?",
                difficulty: "medium",
                questionTagId: jsTag.id,
            },
        ],
    })

    console.log("Questions and tags inserted successfully")
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
