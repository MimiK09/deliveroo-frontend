import Meal from "./Meal";

const Category = (props) => {
    // console.log("props",props)
    // console.log("props2",props.element.name)
    const {element}=props;

    return (<div className="categorie-master">
    <h2>{element.name}</h2>
    <div className="line-meals">
        {element.meals.map((element) => {
            // console.log("element2", element);
            return (<Meal element={element} key={element.id}/>
                
            );
        })}
    </div>
</div>)
}

export default Category;