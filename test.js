var test = require('tape'),
    KeyEncoder = require('./index'),
    ECPrivateKeyASN = KeyEncoder.ECPrivateKeyASN,
    SubjectPublicKeyInfoASN = KeyEncoder.SubjectPublicKeyInfoASN,
    BN = require('bn.js')

var keys = {
    rawPrivate: '844055cca13efd78ce79a4c3a4c5aba5db0ebeb7ae9d56906c03d333c5668d5b',
    rawPublic: '04147b79e9e1dd3324ceea115ff4037b6c877c73777131418bfb2b713effd0f502327b923861581bd5535eeae006765269f404f5f5c52214e9721b04aa7d040a75',
    pemPrivate: '-----BEGIN EC PRIVATE KEY-----\n' +
    'MHQCAQEEIIRAVcyhPv14znmkw6TFq6XbDr63rp1WkGwD0zPFZo1boAcGBSuBBAAK\n' +
    'oUQDQgAEFHt56eHdMyTO6hFf9AN7bId8c3dxMUGL+ytxPv/Q9QIye5I4YVgb1VNe\n' +
    '6uAGdlJp9AT19cUiFOlyGwSqfQQKdQ==\n' +
    '-----END EC PRIVATE KEY-----',
    pemCompactPrivate: '-----BEGIN EC PRIVATE KEY-----\n' +
    'MC4CAQEEIIRAVcyhPv14znmkw6TFq6XbDr63rp1WkGwD0zPFZo1boAcGBSuBBAAK\n' +
    '-----END EC PRIVATE KEY-----',
    pemPublic: '-----BEGIN PUBLIC KEY-----\n' +
    'MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEFHt56eHdMyTO6hFf9AN7bId8c3dxMUGL\n' +
    '+ytxPv/Q9QIye5I4YVgb1VNe6uAGdlJp9AT19cUiFOlyGwSqfQQKdQ==\n' +
    '-----END PUBLIC KEY-----',
    derPrivate: '30740201010420844055cca13efd78ce79a4c3a4c5aba5db0ebeb7ae9d56906c03d333c5668d5ba00706052b8104000aa14403420004147b79e9e1dd3324ceea115ff4037b6c877c73777131418bfb2b713effd0f502327b923861581bd5535eeae006765269f404f5f5c52214e9721b04aa7d040a75',
