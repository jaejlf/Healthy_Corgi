import faker from 'faker';
import { iPerson } from './person';

const getAvatarUrl = (name: string) => {
    return 'https://ui-avatars.com/api/?name=' + name.split(' ').join('+');
}
const getRandomImage = () => {
    return 'https://source.unsplash.com/random/1000x800';
}

const categoryArr = ["행동교정", "사료간식", "병원정보", "시설정보", "견종정보"]

export const createRandomPerson = (): iPerson => {
    const n = faker.name.findName();
    const randomNum = Math.floor(Math.random() * (5 - 1) + 1); //1 ~ 5 사이 랜덤 번호 생성

    return {
        id: faker.datatype.uuid(),
        createdDate: faker.date.recent(),
        modifiedDate: new Date(),
        name: n,
        email: faker.internet.email(),
        avatar: getAvatarUrl(n),
        image: getRandomImage(),
        comments: faker.lorem.paragraph(),
        category: categoryArr[randomNum]
    };
}