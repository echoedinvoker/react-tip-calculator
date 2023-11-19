const tipPts = [
  { value: 0, text: "bad (0%)" },
  { value: 0.05, text: "soso (5%)" },
  { value: 0.1, text: "It was good (10%)" },
  { value: 0.2, text: "Absolutely amazing! (20%)" },
]

export default function TipPt({ tipPt, onSelectTipPt, children }) {
  return <div>
    <lable>{children}</lable>
    <select
      value={tipPt}
      onChange={e => onSelectTipPt(Number(e.target.value))}
    >
      {tipPts.map(t => <option value={t.value} key={t.text}>{t.text}</option>)}
    </select>
  </div>;
}
