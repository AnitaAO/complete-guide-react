import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //   enteredTitle: '',
    //   enteredAmount: '',
    //   enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //   return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredAmount: event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //   ...userInput,
        //   enteredDate: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;



// import './NewExpenseForm.css';
// import React, { useState } from "react";
//
// const NewExpenseForm = (props) => {
//     //using a state for one input each lines 6, 8 and 10
//     const [enteredTitle, setEnteredTitle] = useState('');
//
//     const [enteredAmount, setEnteredAmount] = useState('');
//
//     const [enteredDate, setEnteredDate] = useState('')
//
//     //using one state for 3 inputs
//     // const [userInput, setUserInput] = useState( {
//     //     enteredTitle: "",
//     //     enteredAmount: "",
//     //     enteredDate: ""
//     // })
//
//     const titleChangeHandler = (event) =>{
//         //one state for one input approach
//         setEnteredTitle( event.target.value)
//
//         //one state for 3 inputs approach A
//         // setUserInput({
//         //     ...userInput, enteredTitle: event.target.value
//         // })
//
//         //one state for 3 inputs approach B || alias the best method
//         // setUserInput((prevState => {
//         //     return {
//         //         ...prevState, enteredTitle: event.title.value
//         //     }
//         // }))
//     };
//
//     const amountChangeHandler = (event) =>{
//         //one state for one input approach
//         setEnteredAmount(event.target.value)
//
//         //one state for 3 inputs approach A
//         // setUserInput({
//         //     ...userInput, enteredAmount: event.target.value
//         // })
//
//         //one state for 3 inputs approach B || alias the best approach
//         // setUserInput((prevState => {
//         //     return {
//         //         ...prevState, enteredAmount: event.target.value
//         //     }
//         // }))
//     };
//
//     const dateChangeHandler = (event) =>{
//         //one state for one input approach
//         setEnteredDate(event.target.value)
//
//         //one state for 3 inputs approach A
//         // setUserInput({
//         //     ...userInput, enteredDate: event.target.value
//         // })
//
//         //one state for 3 inputs approach B || alias the best approach
//         // setUserInput((prevState => {
//         //     return {
//         //         ...prevState, enteredDate: event.target.value
//         //     }
//         // }))
//     };
//     const newExpenseFormHandler = (event) => {
//         //line 71 would prevent a reload of the current page, it is advised to always do this
//         event.preventDefault();
//
//         //these properties in expenseData points to the states in line 6, 8 and 10
//         const expenseData= {
//             title: enteredTitle,
//             amount: enteredAmount,
//             date: new Date(enteredDate)
//         }
//
//         props.onSaveExpenseData(expenseData);
//         setEnteredTitle('');
//         setEnteredAmount('');
//         setEnteredAmount('');
//     }
//
//     return(
//         <form onSubmit={newExpenseFormHandler}>
//             <div className="new-expense__controls">
//                 <div className="new-expense__control">
//                     <label>Title</label>
//                     <input
//                         //use two-way binging {} to bind the entered input to the default value attribute in input
//                         //this would help wipe entered inputs after been added
//                         value={enteredTitle}
//                         onChange={ titleChangeHandler }
//                         type="text"
//                     />
//                 </div>
//                 <div className="new-expense__control">
//                     <label>Amount</label>
//                     <input
//                         //use two-way binging {} to bind the entered input to the default value attribute in input
//                         //this would help wipe entered inputs after been added
//                         value={enteredAmount}
//                         onChange={ amountChangeHandler }
//                         type="number"
//                         min="0.01"
//                         step="0.01"/>
//                 </div>
//                 <div className="new-expense__control">
//                     <label>Date</label>
//                     <input
//                         //use two-way binging {} to bind the entered input to the default value attribute in input
//                         //this would help wipe entered inputs after being added
//                         value={enteredDate}
//                         onChange={ dateChangeHandler }
//                         type="date"
//                         min="2009-11-31"
//                         max="2022-12-31"/>
//                 </div>
//             </div>
//             <div className="new-expense__actions">
//                 <button type="reset">Cancel</button>
//                 <button type="submit">Add Expense</button>
//             </div>
//         </form>
//     )
// }
//
// export default ExpenseForm;
