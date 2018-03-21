const denoms = {
  'PENNY': 0.01,
  'NICKEL': 0.05,
  'DIME': 0.1,
  'QUARTER': 0.25,
  'ONE': 1,
  'FIVE': 5,
  'TEN': 10,
  'TWENTY': 20,
  'ONE HUNDRED': 100,
};

const totalCash = cashArray => cashArray.reduce((total, slot) => total + slot[1], 0);

const checkCashRegister = (price, cash, cid) => {
  let changeLeft = cash - price;
  const change = [];

  if (totalCash(cid) === changeLeft) {
    return { status: "CLOSED", change: cid };
  }

  cid.reverse();
  cid.forEach(slot => {
    const denom = slot[0];
    let slotAmount = slot[1];
    const denomValue = denoms[denom];
    let denomAmount = 0;
    while (denomValue <= changeLeft && slotAmount > 0) {
      denomAmount += denomValue;
      changeLeft -= denomValue;
      slotAmount -= denomValue;

      // Round to 2 decimal places to avoid float precision error
      changeLeft = +changeLeft.toFixed(2);
    }
    if (denomAmount > 0) {
      change.push([denom, denomAmount]);
    }
  });
  if (changeLeft > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  return { status: 'OPEN', change };
};
