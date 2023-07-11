const Category = (props) => {
    console.log(props)

    return (<div className="categorie-master" key={id}>
    <h2>{element.name}</h2>
    <div className="line-meals">
        {element.meals.map((element) => {
            console.log("element2", element);
            return (
                <div className="meal" key={element.id}>
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
                    {element.picture ? (
                        <div className="meal-picture">
                            <img src={element.picture} alt="photo repas" />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            );
        })}
    </div>
</div>)
}

export default Category;