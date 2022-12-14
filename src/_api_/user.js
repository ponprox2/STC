import faker from 'faker';
import { sample } from 'lodash';
import mock from 'src/utils/mock';
import { getImgCover, getImgFeed, getImgAvatar } from 'src/utils/getImages';

// ----------------------------------------------------------------------

const createId = (index) => `fc68bad5-d430-4033-b8f8-4bc069dc0ba0-${index}`;

// ----------------------------------------------------------------------

mock.onGet('/api/user/profile').reply(() => {
  const profile = {
    id: createId(1),
    cover: {
      small: getImgCover(720, 1),
      medium: getImgCover(1200, 1)
    },
    position: 'UI Designer',
    follower: faker.datatype.number(),
    following: faker.datatype.number(),
    quote:
      'Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..',
    country: faker.address.country(),
    email: faker.internet.email(),
    company: faker.company.companyName(),
    school: faker.company.companyName(),
    facebookLink: `https://www.facebook.com/caitlyn.kerluke`,
    instagramLink: `https://www.instagram.com/caitlyn.kerluke`,
    linkedinLink: `https://www.linkedin.com/in/caitlyn.kerluke`,
    twitterLink: `https://www.twitter.com/caitlyn.kerluke`
  };

  return [200, { profile }];
});

// ----------------------------------------------------------------------

mock.onGet('/api/user/all').reply(() => {
  const users = [...Array(24)].map((user, index) => {
    const setIndex = index + 1;
    return {
      id: createId(setIndex),
      avatarUrl: getImgAvatar(setIndex),
      cover: {
        small: getImgCover(600, setIndex),
        medium: getImgCover(960, setIndex)
      },
      name: faker.name.findName(),
      follower: faker.datatype.number(),
      following: faker.datatype.number(),
      totalPost: faker.datatype.number(),
      position: sample([
        'Leader',
        'Hr Manager',
        'UI Designer',
        'UX Designer',
        'UI/UX Designer',
        'Project Manager',
        'Backend Developer',
        'Full Stack Designer',
        'Front End Developer',
        'Full Stack Developer'
      ])
    };
  });

  return [200, { users }];
});

// ----------------------------------------------------------------------

mock.onGet('/api/user/manage-users').reply(() => {
  const users = [...Array(24)].map((user, index) => {
    const setIndex = index + 1;
    return {
      id: createId(setIndex),
      avatarUrl: getImgAvatar(setIndex),
      name: faker.name.findName(),
      company: faker.company.companyName(),
      isVerified: faker.datatype.boolean(),
      status: sample(['active', 'banned']),
      role: sample([
        'Leader',
        'Hr Manager',
        'UI Designer',
        'UX Designer',
        'UI/UX Designer',
        'Project Manager',
        'Backend Developer',
        'Full Stack Designer',
        'Front End Developer',
        'Full Stack Developer'
      ])
    };
  });

  return [200, { users }];
});

// ----------------------------------------------------------------------

mock.onGet('/api/user/social/followers').reply(() => {
  const followers = [...Array(18)].map((item, index) => {
    const setIndex = index + 2;
    return {
      id: createId(setIndex),
      avatarUrl: getImgAvatar(setIndex),
      name: faker.name.findName(),
      country: faker.address.country(),
      isFollowed: faker.datatype.boolean()
    };
  });

  return [200, { followers }];
});

// ----------------------------------------------------------------------

mock.onGet('/api/user/social/friends').reply(() => {
  const friends = [...Array(18)].map((item, index) => {
    const setIndex = index + 2;
    return {
      id: createId(setIndex),
      avatarUrl: getImgAvatar(setIndex),
      name: faker.name.findName(),
      role: sample([
        'Leader',
        'Hr Manager',
        'UI Designer',
        'UX Designer',
        'UI/UX Designer',
        'Project Manager',
        'Backend Developer',
        'Full Stack Designer',
        'Front End Developer',
        'Full Stack Developer'
      ])
    };
  });

  return [200, { friends }];
});

// ----------------------------------------------------------------------

mock.onGet('/api/user/social/gallery').reply(() => {
  const gallery = [...Array(18)].map((image, index) => {
    const setIndex = index + 2;
    return {
      id: createId(setIndex),
      title: faker.name.title(),
      postAt: faker.date.past(),
      imageUrl: {
        small: getImgCover(600, setIndex),
        medium: getImgCover(960, setIndex),
        large: getImgCover(1920, setIndex)
      }
    };
  });

  return [200, { gallery }];
});

// ----------------------------------------------------------------------

mock.onGet('/api/user/account/cards').reply(() => {
  const cards = [...Array(2)].map((card, index) => {
    return {
      id: faker.datatype.uuid(),
      cardNumber:
        (index === 0 && '**** **** **** 1234') ||
        (index === 1 && '**** **** **** 5678'),
      cardType: (index === 0 && 'master_card') || (index === 1 && 'visa')
    };
  });

  return [200, { cards }];
});

// ----------------------------------------------------------------------

mock.onGet('/api/user/account/address-book').reply(() => {
  const addressBook = [...Array(4)].map((address, index) => {
    return {
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      country: faker.address.country(),
      state: faker.address.state(),
      city: faker.address.city(),
      street: faker.address.streetAddress(),
      zipCode: faker.address.zipCode()
    };
  });

  return [200, { addressBook }];
});

// ----------------------------------------------------------------------

mock.onGet('/api/user/account/invoices').reply(() => {
  const invoices = [...Array(10)].map((invoice, index) => {
    return {
      id: faker.datatype.uuid(),
      createdAt: faker.date.past(),
      price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 })
    };
  });

  return [200, { invoices }];
});

// ----------------------------------------------------------------------

mock.onGet('/api/user/account/notifications-settings').reply(() => {
  const notifications = {
    activityComments: true,
    activityAnswers: true,
    activityFollows: false,
    applicationNews: true,
    applicationProduct: false,
    applicationBlog: false
  };

  return [200, { notifications }];
});

// ----------------------------------------------------------------------

mock.onGet('/api/user/posts').reply(() => {
  const posts = [...Array(3)].map((post, index) => {
    const setIndex = index + 1;
    return {
      id: faker.datatype.uuid(),
      author: {
        id: createId(1),
        avatarUrl: getImgAvatar(1),
        name: 'Caitlyn Kerluke'
      },
      isLiked: true,
      createdAt: faker.date.past(),
      media: {
        small: getImgFeed(720, setIndex),
        medium: getImgFeed(960, setIndex)
      },
      message: faker.lorem.sentence(),
      personLikes: [...Array(50)].map((person, index) => {
        return {
          name: faker.name.findName(),
          avatarUrl: getImgAvatar(index + 2)
        };
      }),
      comments: (setIndex === 2 && []) || [
        {
          id: faker.datatype.uuid(),
          author: {
            id: createId(2),
            avatarUrl: getImgAvatar(sample([2, 3, 4, 5, 6])),
            name: faker.name.findName()
          },
          createdAt: faker.date.past(),
          message: faker.lorem.sentence()
        },
        {
          id: faker.datatype.uuid(),
          author: {
            id: createId(3),
            avatarUrl: getImgAvatar(sample([7, 8, 9, 10, 11])),
            name: faker.name.findName()
          },
          createdAt: faker.date.past(),
          message: faker.lorem.sentence()
        }
      ]
    };
  });

  return [200, { posts }];
});
