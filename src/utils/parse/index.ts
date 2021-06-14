export function arrayUnique(array:any[]):any[]{
  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i].attributes.slug === a[j].attributes.slug) a.splice(j--, 1);
    }
  }
  return a;
};
