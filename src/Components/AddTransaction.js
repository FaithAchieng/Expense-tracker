import React from 'react'

const AddTransaction = () => {
  return (
    <div>
      <h3 className="add">Add new Transation</h3>
      <form>
        <div>
        <label for="text">Text</label>
        </div>
        <input type="text" placeholder='Enter text'></input>
        <div>
        <label for="amount">Amount</label>
        <p>(Negative+expense, positive -income)</p>
        </div>
        <input type="number" placeholder='Enter amount'></input>
        <div>
        <button type='submit' className='submit'>Add Transaction</button>
        </div>
      </form>

    </div>
  )
}

export default AddTransaction
