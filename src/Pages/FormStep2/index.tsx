import { ChangeEvent, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SelectOption } from '../../components/SelectOption';
import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styled';


export const FormStep2 = () => {

    const navigate = useNavigate();

    useEffect(() => {

        if(state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }

    }, [])

    const { state, dispatch } = useForm();

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step3');
        } else {
            alert("Informe seu Nome");
        }
    }

    const setLevel = (level : number) => {
        dispatch({
            type:FormActions.setLevel,
            payload:level
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual</p>

                <hr />
                <SelectOption
                    title="Sou Iniciante"
                    description="Comecei a programadar a menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Sou Programador"
                    description="Já programa há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to="/" className='backButton'>Volta</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}