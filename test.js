var test = require('tape'),
    KeyEncoder = require('./index'),
    ECPrivateKeyASN = KeyEncoder.ECPrivateKeyASN,
    SubjectPublicKeyInfoASN = KeyEncoder.SubjectPublicKeyInfoASN,
    BN = require('bn.js')

var keys = {
    rawPrivate: '844055cca13efd78ce79a4c3a4c5aba5db0ebeb7ae9d56906c03d333c5668d5b',
