import React from 'react';
import axios from 'axios';
import ReactDOMServer from 'react-dom/server';

import DataApi from 'state-api';
import config from '../config';

import App from 'components/App';

const serverRender = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(resp.data);
  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  }
  return ReactDOMServer.renderToString(
    <App initialData={initialData} />
  );
};

export default serverRender;
