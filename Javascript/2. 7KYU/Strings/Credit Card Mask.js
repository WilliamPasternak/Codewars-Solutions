Your task is to write a function maskify, which changes all but the last four characters into '#'.

const maskify = cc => cc.length <= 4 ? cc : cc.slice(-4).padStart(cc.length,'#')