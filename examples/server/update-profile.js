(async () => {
  const privateKey = '5Jr5QevLsA2SZfDT8WcMddnL7BVzd7yGq6PZrLHJ68ZLqDQndDn';
  try {
    const response = await scorum.broadcast.updateProfileWithAsync(privateKey, {
      account: 'kristie',
      username: 'Kristie Smith',
      location: 'New York',
      bio: 'The biography is here...',
      avatar_url: 'http://localhost/kristie-avatar',
      cover_url: 'http://localhost/kristie-cover',
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
