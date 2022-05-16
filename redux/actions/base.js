export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export const createRequestTypes = (base) => ({
    REQUEST: `${base}_${REQUEST}`,
    LOADING: `${base}_${LOADING}`,
    SUCCESS: `${base}_${SUCCESS}`,
    ERROR: `${base}_${ERROR}`,
});

export const action = (type, payload = {}) => ({ type, ...payload });
