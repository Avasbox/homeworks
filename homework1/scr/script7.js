let Sip = 2000000,
    p = 10,
    yers = 5,
    r = p / 100 / 12,
    n = yers * 12,
    sm = Sip * (r + r / (((1 + r) ** n) - 1))
    Pereplata = Math.round(sm * n) - Sip;
 
console.log('Переплaта' + ' ' + Pereplata + 'p.');