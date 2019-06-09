import ReactGA from "react-ga";

export const report = page => {
  ReactGA.initialize("UA-140459638-1");
  ReactGA.pageview(page);
};
