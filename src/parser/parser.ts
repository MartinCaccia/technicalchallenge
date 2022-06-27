import url from 'url';

export const urlToObj = (baseUrl: string, realUrl: string): object => {
  const baseRealUrl = 'https://base' + realUrl;
  const parsedRealUrl = new url.URL(baseRealUrl);
  const pathName = parsedRealUrl.pathname;
  const arrBaseUrl = baseUrl.split('/');
  const arrRealUrl = pathName.split('/');
  const indexes = arrBaseUrl
    .map((param, i) => (param.includes(':') === true ? i : -1))
    .filter(index => index !== -1);
  const arrParams = indexes.map(index => arrBaseUrl[index]);
  const arrParams2 = arrParams.map(param => param.replace(':', ''));
  const arrValues = indexes.map(index => arrRealUrl[index]);
  const objSearchParams = Object.fromEntries(parsedRealUrl.searchParams);
  const obj = arrParams2.reduce((accumulator, element, index) => {
    return {...accumulator, [element]: arrValues[index]};
  }, {});
  const objFinal = Object.assign(obj, objSearchParams);
  return objFinal;
};
