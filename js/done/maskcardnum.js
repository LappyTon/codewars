// https://www.codewars.com/kata/5412509bd436bd33920011bc

function maskify(cc) {
    cc = cc.toString()
    if (cc.length > 4) {
        let newCC = '';
        for (let i = 0; i<cc.length; i++) {
            newCC = newCC + '#'
        }
        newCC = newCC.slice(0, -4) + cc.at(-4) + cc.at(-3) + cc.at(-2) + cc.at(-1)
        return newCC
    }
    return cc
}
