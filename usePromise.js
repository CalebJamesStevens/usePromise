import React from 'react';

export default (promise, parameters) => {
  const [data, setData] = React.useState();
  const [status, setStatus] = React.useState('idle');

  const firePromise = () => {
    setStatus('loading');
    return Promise.all([promise(parameters)])
      .then((res) => {
        setStatus('fulfilled');
        setData({ data: res });
      })
      .catch((err) => {
        setStatus('reject');
        setData({ data: err });
      });
  };

  React.useEffect(() => {
    firePromise();
  }, []);

  return { status, data };
};
