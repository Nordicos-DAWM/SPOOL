import React,{useState} from 'react';

const Page2 = (props) =>{
    const [inputs,setInputs] = useState({
        category:'',
        skill:''
    });

    const [selected,setSelected] = useState({
        selCategory:'',
        selSkill:''
    })

    const {category,skill} = inputs;

    const {selCategory,selSkill} = selected;
    
    function handleAddSkill(){
        props.handleAddSkill(skill);
        setInputs(inputs =>({ ...inputs, ['skill']: '' }));
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleAddCategories(){
        props.handleAddCategories(category);
        setInputs(inputs =>({ ...inputs, ['category']: '' }));
    }

    function setSelectedCategory(e){
        let value = e.target.innerText;
        setSelected(selected =>({ ...selected, ['selCategory']: value }));
    }

    function handleRemoveSkill(){
        if(selSkill){
            props.handleRemoveSkill(selSkill);
            setSelected(selected =>({ ...selected, ['selSkill']: '' }));
        }       
    }

    function setSelectedSkill(e){
        let value = e.target.innerText;
        setSelected(selected =>({ ...selected, ['selSkill']: value }));
    }

    function handleRemoveCategories(){
        if(selCategory){
            props.handleRemoveCategories(selCategory);
            setSelected(selected =>({ ...selected, ['selCategory']: '' }));
        }       
    }

    return( <>
        <div className="container-fluid">
            <div className="row p-1">
                <div className="col-12 col-lg-5">
                    <div className="form-group">
                        <label htmlFor="category">Categorías ({props.categoriesNum}/7)</label>
                        <input type="text" value={category} className="form-control" id="category" name="category" placeholder="Categorías" onChange={handleChange}/>
                        <button type="button" className="btn btn-primary px-3 " disabled={category?false:true} onClick={handleAddCategories}><i className="fas fa-plus"></i></button>
                        <button type="button" className="btn btn-danger px-3" disabled={selCategory?false:true} onClick={handleRemoveCategories}><i className="fas fa-minus"></i></button>
                    </div>
                </div>
                <div className="col-12 col-lg-7 bg-light">
                    <div className="row text-center">
                    {
                        props.values['subcategories'].map((val)=>{
                            return(
                                <div className="col-6 col-md-4 px-1 py-2" key={val}>
                                    <span className="py-2 px-2 rounded bg-primary text-light" onClick={setSelectedCategory}>
                                        {val}
                                    </span>
                                </div>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
            <div className="row p-1">
                <div className="col-12 col-lg-5">
                    <div className="form-group">
                        <label htmlFor="skill">Habilidades ({props.skillsNum}/7)</label>
                        <input type="text" value={skill} className="form-control" id="skill" name="skill" placeholder="Habilidades" onChange={handleChange}/>
                        <button type="button" className="btn btn-primary px-3" disabled={skill?false:true} onClick={handleAddSkill}><i className="fas fa-plus"></i></button>
                        <button type="button" className="btn btn-danger px-3" disabled={selSkill?false:true} onClick={handleRemoveSkill}><i className="fas fa-minus"></i></button>
                    </div>
                </div>
                <div className="col-12 col-lg-7 bg-light">
                    <div className="row text-center">
                    {
                        props.values['skills'].map((val)=>{
                            return(
                                <div className="col-6 col-md-4 px-1 py-2" key={val}>
                                    <span className="py-2 px-2 rounded bg-primary text-light" onClick={setSelectedSkill}>
                                        {val}
                                    </span>
                                </div>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col text-center">
                    <button type="button" className="btn btn-primary mr-3" onClick={props.prevStep}>Atrás</button>
                    <button type="button" className="btn btn-primary" onClick={props.nextStep}>Siguiente</button>
                </div>
            </div>
        </div>
    </>);
}

export default Page2