const getContainersURL = ({
  // hostname = 'https://super-app-release-h58rm0q49-kieu1004s-projects.vercel.app',
  hostname = 'https://super-app-release-h58rm0q49-kieu1004s-projects.vercel.app',
  appName,
  version,
  platform,
}) => {
  return `${hostname}/${appName}?platform=${platform}&appVersion=${version}`;
};

export default getContainersURL;
