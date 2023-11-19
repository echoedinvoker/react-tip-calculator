export default function BillInput({ bill, onInputBill }) {
  return <div>
    <label>How much was the bill?</label>
    <input type="number" value={bill} onChange={e => onInputBill(Number(e.target.value))} />
  </div>;
}
