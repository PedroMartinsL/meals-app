import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route ,navigation }) {

    const catId = route.params.categoryId;

    // useLayoutEffect(() => {
    //     const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

    //     navigation.setOptions({
    //         title: categoryTitle
    //     });
    // }, [catId, navigation])

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    return <MealsList items={displayedMeals} />
};

export default MealsOverviewScreen;

