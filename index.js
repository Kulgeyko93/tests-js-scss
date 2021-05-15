import cards from './components/cards.js';
import nav from './components/nav.js';
import pageMeta from './components/pageMeta.js';
import pageText from './components/pageText.js';
import sidebar from './components/sidebar.js';
import sort from './components/sort.js';
import findWithParametrs from './components/listeners.js';
import pagination from './components/pagination.js';

const url = './store/data.json'

const getData = async () => {
  const data = await fetch(url).then(res => res.json())

  return data;
}

const data = await getData();

cards(data);
nav(data);
pageMeta(data);
pageText(data);
sidebar(data);
findWithParametrs(data);
pagination(data);
sort(data);