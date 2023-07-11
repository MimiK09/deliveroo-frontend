const Meal = (props) => {
    // console.log(props)
    const {element}=props;
return(
    <div className="meal" >
                    <div className="meal-description">
                        <h3>{element.title}</h3>
                        <div className="meal-detail">
                            <p>{element.description}</p>
                        </div>
                        <div className="price-pop">
                            <p>{element.price}€</p>
                            {element.popular ? (
                                <>
                                    <div className="popular">
                                        <i className="icon-STAR_FILL"></i>
                                        <p>Populaire</p>
                                    </div>
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    {props.element.picture ? (
                        <div className="meal-picture">
                            <img src={props.element.picture} alt="repas" />
                        </div>
                    ) : (
                        ""
                    )}
                </div>)
}

export default Meal;