import { useState } from "react";
import Reset from "./Reset";
import TipPt from "./TipPt";
import BillOutput from "./BillOutput";
import BillInput from "./BillInput";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [myTipPt, setMyTipPt] = useState(0.1);
  const [friendTipPt, setFriendTipPt] = useState(0.1);

  const tips = bill * ((myTipPt + friendTipPt) / 2)

  function handleReset() {
    setBill(0);
    setMyTipPt(0.1);
    setFriendTipPt(0.1);
  }

  return <div>
    <BillInput bill={bill} onInputBill={setBill} />
    <TipPt
      tipPt={myTipPt}
      onSelectTipPt={setMyTipPt}
    >
      <span> How did you like the service? </span>
    </TipPt>
    <TipPt
      tipPt={friendTipPt}
      onSelectTipPt={setFriendTipPt}
    >
      <span> How did your friend like the service? </span>
    </TipPt>
    {/* {bill > 0 && <BillOutput bill={bill} myTipPt={myTipPt} friendTipPt={friendTipPt} />} */}
    {bill > 0 && <BillOutput bill={bill} tips={tips} />}
    <Reset onReset={handleReset} />
  </div>;
}
