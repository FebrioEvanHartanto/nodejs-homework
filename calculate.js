exports.calculateKelilingPersegi = (sisi) => {
  return 4 * sisi;
}

exports.calculateLuasPersegi = (sisi) => {
  return sisi ** 2;
}

exports.calculateKelilingPersegiPanjang = (panjang, lebar) => {
  return 2 * (panjang + lebar);
}

exports.calculateLuasPersegiPanjang = (panjang, lebar) => {
  return panjang * lebar;
}