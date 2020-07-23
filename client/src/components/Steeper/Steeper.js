import React,{useState} from 'react';
import Page1 from './Page-1';
import Page2 from './Page-2';
import Page3 from './Page-3';
import ProgressStep from './ProgressStep';
const Steeper = () =>{
    const [inputs,setInputs] = useState({
        title:'',
        category:'',
        description:'',
        subcategories:[],
        skills:[],
        contactMail:'',
        respositoryURL:'',
        color:'',
        maxParticipants:0
    });

    const [nAtrr,setnAtrr] = useState({
        skillsNum:0,
        categoriesNum:0
    })
    
    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleAddCategories(value){
        value = value.toLowerCase();
        if(!inputs['subcategories'].includes(value) && inputs['subcategories'].length < 7 ){
            setInputs(inputs => ({...inputs,'subcategories':[...inputs['subcategories'],value]}));
            setnAtrr(nAtrr => ({ ...nAtrr, 'categoriesNum': inputs['subcategories'].length + 1 }));
        }
    }

    function handleRemoveCategories(value){
        value = value.toLowerCase();
        if(inputs['subcategories'].includes(value) && inputs['subcategories'].length < 7 ){
            let newValues = inputs['subcategories'].filter(cat => cat !== value);
            setInputs(inputs => ({...inputs,'subcategories':newValues}));
            setnAtrr(nAtrr => ({ ...nAtrr, 'categoriesNum': inputs['subcategories'].length - 1 }));
        }
    }

    function handleAddSkill(value){
        value = value.toLowerCase();
        if(!inputs['skills'].includes(value) && inputs['skills'].length < 7){
            setInputs(inputs => ({...inputs,'skills':[...inputs['skills'],value]}));
            setnAtrr(nAtrr => ({ ...nAtrr, 'skillsNum': inputs['skills'].length + 1 }));
        }
        
    }

    function handleRemoveSkill(value){
        value = value.toLowerCase();
        if(inputs['skills'].includes(value) && inputs['skills'].length < 7 ){
            let newValues = inputs['skills'].filter(skill => skill !== value);
            setInputs(inputs => ({...inputs,'skills':newValues}));
            setnAtrr(nAtrr => ({ ...nAtrr, 'skillsNum': inputs['skills'].length - 1 }));
        }
    }

    const [step,setStep] = useState(0);

    const nextStep = () =>{
        setStep(step+1);
    }

    const prevStep = () =>{
        setStep(step-1);
    }
    
    return( <>
        <ProgressStep step={step}/>
        { step===0 && <Page1 nextStep={nextStep} values={inputs} handleChange={handleChange} />}
        { step===1 && <Page2 nextStep={nextStep} values={inputs} prevStep={prevStep} handleAddCategories={handleAddCategories} handleAddSkill={handleAddSkill} skillsNum={nAtrr['skillsNum']} categoriesNum={nAtrr['categoriesNum']} handleRemoveCategories={handleRemoveCategories} handleRemoveSkill={handleRemoveSkill}/>}
        { step===2 && <Page3 prevStep={prevStep} values={inputs} handleChange={handleChange}/>}
    </>);
}

export {Steeper}