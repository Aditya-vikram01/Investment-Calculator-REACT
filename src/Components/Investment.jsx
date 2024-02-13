export function Investment(investment) {
  return (
    <div className='input-group'>
      <label id='user-input label'>
        INITIAL INVESTMENT
        <input type='number' />
      </label>
      <label id='user-input label'>
        ANNUAL INVESTMENT
        <input type='number' />
      </label>
      <label id='user-input label'>
        EXPECTED RETURN
        <input type='number' />
      </label>
      <label id='user-input label'>
        DURATION
        <input type='number' />
      </label>
    </div>
  );
}
