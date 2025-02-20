import { assign, createMachine } from 'xstate';
import axiosInstance from '../api';
import createSourcedArticlesMachine from './newsMachine';

const fetchSources = async () => {
  try {
    const res = await axiosInstance.get('sources');
    return res.data.sources;
  } catch (e) {
    return e;
  }
};

const sourceMachine = createMachine({
  id: 'source',
  initial: 'idle',
  context: {
    sources: [],
    source: null,
    lastUpdated: null,
    count: null,
  },
  states: {
    idle: {
      on: {
        FETCH: 'loading',
      },
    },
    loading: {
      invoke: {
        id: 'getSources',
        src: (context, event) => fetchSources(),
        onDone: {
          target: 'success',
          actions: assign({
            sources: (context, event) => event.data,
          }),
        },
        onError: {
          target: 'error',
          actions: assign({
            error: (context, event) => 'error',
          }),
        },
      },
    },
    success: {},
    error: {},
    selected: {},
  },
  on: {
    SELECT: {
      target: 'selected',
      actions: assign((context, event) => {
        const source = createSourcedArticlesMachine(event.id);
        return {
          source,
        };
      }),
    },
  },
});

export default sourceMachine;
