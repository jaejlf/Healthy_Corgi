import faker from 'faker';
import { iPerson } from './person';
const getAvatarUrl = (name: string) => {
    return 'https://ui-avatars.com/api/?name=' + name.split(' ').join('+');
}
const getRandomImage = () => {
    return 'https://source.unsplash.com/random/1000x800';
}
export const createRandomPerson = (): iPerson => {
    const n = faker.name.findName();
    return {
        id: faker.datatype.uuid(),
        createdDate: faker.date.recent(),
        modifiedDate: new Date(),
        name: n,
        email: faker.internet.email(),
        avatar: getAvatarUrl(n),
        image: getRandomImage(),
        comments: faker.lorem.paragraph(),
        counts: {
            comment: 0,
            retweet: 0,
            heart: 0
        }
    };
}