export function arrayUnique(array:any[]):any[]{
  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i].attributes.slug === a[j].attributes.slug) a.splice(j--, 1);
    }
  }
  return a;
};

export const getOffsetLimit = (url:string) => {
  let offsetLimit = 0;
  const _url = decodeURI(url);
  const params = _url.match(/page\[offset\]=([^&]*)/) || [];
  if (params.length !== 0) {
    offsetLimit = Number(params[1]);
  }
  return offsetLimit;
};
