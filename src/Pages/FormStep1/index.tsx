import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styled';


export const FormStep1 = () => {

    const navigate = useNavigate();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const { state, dispatch } = useForm();

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    const handleNextStep = () => {
        if(state.name !== '') {
            navigate('/step2');
        } else {
            alert("Informe seu Nome");
        }
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3 - {state.name}</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr />

                <label>
                    Seu nome Completo
                    <input
                        type="text"
                        name="name"
                        placeholder='Nome Completo'
                        autoFocus value={state.name}
                        onChange={handleChangeName}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}