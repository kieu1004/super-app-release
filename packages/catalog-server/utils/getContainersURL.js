const getContainersURL = ({
  hostname = 'https://super-app-release-deploy.vercel.app',
  appName,
  version,
  platform,
}) => {
  return `${hostname}/${appName}?platform=${platform}&appVersion=${version}`;
};

export default getContainersURL;
