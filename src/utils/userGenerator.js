import { fakerZH_TW as faker } from "@faker-js/faker";

export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    sentence: faker.lorem.sentence(),
  };
}

export const generateRandomUsers = (count) => {
  return faker.helpers.multiple(createRandomUser, { count });
};
