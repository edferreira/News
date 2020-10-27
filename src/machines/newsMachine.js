import { Machine, assign } from 'xstate';
import axiosInstance from '../api';

const fetchArticles = async (source, page) => {
  try {
    const res = await axiosInstance.get(`everything?sources=${source}&page=${page}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

const createSourcedArticlesMachine = (source) => {
  return Machine({
    id: 'news',
    initial: 'loading',
    context: {
      source,
      articles: [],
      lastUpdated: null,
      page: 1,
    },
    states: {
      loading: {
        invoke: {
          id: 'fetch-news',
          src: (context, event) => fetchArticles(context.source, context.page),
          onDone: {
            target: 'success',
            actions: assign({
              articles: (context, event) => {
                return [...context.articles, ...event.data.articles];
              },
              lastUpdated: () => Date.now(),
              page: (context, event) => context.page + 1,
            }),
          },
          onError: {
            target: 'failure',
          },
        },
      },
      success: {
        on: {
          LOAD_MORE: {
            target: 'loading',
          },
        },
      },
      failure: {
        on: {
          RETRY: 'loading',
        },
      },
    },
  });
};

export default createSourcedArticlesMachine;
