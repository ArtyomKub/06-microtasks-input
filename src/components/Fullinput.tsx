import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (title:string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

