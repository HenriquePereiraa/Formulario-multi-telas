import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styled';


export const FormStep3 = () => {

    const navigate = useNavigate();

    useEffect(() => {

        if(state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }

    }, [])

    const { state, dispatch } = useForm();

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }
    const handleChangeGithub = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== '') {
            console.log(state)
        } else {
            alert("Preencha todos os dados");
        }
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha os campos de contato.</p>

                <hr />

                <label>
                    Qual o seu e-mail?
                    <input
                        type="email"
                        placeholder='E-mail'
                        value={state.email}
                        onChange={handleChangeEmail}
                    />
                </label>

                <label>
                    Qual o seu github?
                    <input
                        type="url"
                        placeholder='Github'
                        value={state.github}
                        onChange={handleChangeGithub}
                    />
                </label>

                <Link to="/step2" className='backButton'>Volta</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}