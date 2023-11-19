export default function BillOutput({ bill, myTipPt, friendTipPt, tips }) {
  // const myTip = bill * myTipPt;
  // const friendTip = bill * friendTipPt;
  // let tips = [myTip, friendTip];
  // tips = tips
  //   .filter(t => t.toFixed(2) !== "0.00")
  //   .map(t => "$" + parseFloat(t.toFixed(2)));
  // tips = tips.join(" + ");
  // const pay = bill + myTip + friendTip;

  const fTips = parseFloat(tips.toFixed(2))

  // return <h2>Pay ${Math.round(pay)} {tips && `(${tips})`}</h2>;
  return <h2>Pay ${bill + fTips} {fTips > 0 && `($${bill} + $${fTips} tip)`}</h2>;
}
