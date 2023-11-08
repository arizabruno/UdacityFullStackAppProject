import bcrypt from 'bcrypt';
import prisma from "../src/prismaClient.js";


async function main() {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync('securePassword123', salt);

    const newUser = await prisma.user.create({
        data: {
            email: 'test@test.com',
            hashedPassword: hashedPassword,
            salt: salt,
            firstName: 'John',
            lastName: 'Doe',
        },
    });

    console.log('Created new user:', newUser);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
