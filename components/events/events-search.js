import React, {useRef} from 'react';
import {Button} from "../ui/button";
import cls from './events-search.module.css'

const EventsSearch = ({ onSearch }) => {
    const yearInputRef = useRef()
    const monthInputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault();

        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        onSearch(selectedYear, selectedMonth)
    }
    return (
        <form className={cls.form} onSubmit={submitHandler}>
            <div className={cls.controls}>
                <div className={cls.control}>
                    <label htmlFor={'year'}>Year</label>
                    <select id={'year'} ref={yearInputRef}>
                        <option value={'2021'}>2021</option>
                        <option value={'2022'}>2022</option>
                    </select>
                </div>
                <div className={cls.control}>
                    <label htmlFor={'month'}>Month</label>
                    <select id={'month'} ref={monthInputRef}>
                        <option value={'1'}>January</option>
                        <option value={'2'}>February</option>
                        <option value={'3'}>March</option>
                        <option value={'4'}>April</option>
                        <option value={'5'}>May</option>
                        <option value={'6'}>July</option>
                        <option value={'7'}>Jun</option>
                        <option value={'8'}>August</option>
                        <option value={'9'}>September</option>
                        <option value={'10'}>October</option>
                        <option value={'11'}>November</option>
                        <option value={'12'}>December</option>
                    </select>
                </div>
                <Button>Search</Button>
            </div>
        </form>
    );
};

export default EventsSearch;