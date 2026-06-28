function StatusFilter({ value, onChange }) {
  return (
    <select
      className="form-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">All Status</option>
      <option value="Completed">Completed</option>
      <option value="Pending">Pending</option>
      <option value="Processing">Processing</option>
      <option value="Cancelled">Cancelled</option>
    </select>
  );
}

export default StatusFilter;