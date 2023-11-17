import '../styles/main.scss';

import htmlStructure from '../components/htmlStructure';
import header from '../components/header';
import startSortingBtn from '../components/startSortingBtn';

import events from '../utils/events';

const startApp = () => {
  htmlStructure();
  header();
  startSortingBtn();
  events();
};

startApp();
