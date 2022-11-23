module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'sanelcivic',
          name: 'CCLeapBoardPlayer',
        },
        prerelease: false,
        draft: true,
      },
    },
  ],
}