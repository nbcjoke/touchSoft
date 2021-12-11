const users = [
    {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'female',
      ip_address: '26.58.193.2',
    },
    {
      id: 2,
      first_name: 'Petr',
      last_name: 'Jackson',
      email: 'gfrediani1@senate.gov',
      gender: 'male',
      ip_address: '229.179.4.212',
    },
  ];

const user = users.reduce((result, user) => {
  const {first_name, last_name, ...rest} = user;
  const mappedUser = {
    ...rest,
    full_name: `${first_name} ${last_name}`
  }
  if (user.gender === 'male') {
    result.male.push(mappedUser);
  } else if (user.gender === 'female') {
    result.female.push(mappedUser);
  }
  return result;
}, {female: [], male: []});

  console.log(user)