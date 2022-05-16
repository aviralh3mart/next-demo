import Helpers from '../apis/helpers';
import Constants from '../apis/constants';

/**
 * CategoryService class
 */
class CategoryService {
    /**
     *
     * @return {Promise<*>}
     */
    getCategories = async () => {
        const categories = await Helpers.get({
            url: Constants.CATEGORY,
        });
        return categories;
    }

    /**
     *
     * @param id
     * @return {Promise<[]>}
     */
    getCategoryById = async (id) => {
        const category = await Helpers.get({
            url: `${Constants.CATEGORY}?category=${id}`,
        });
        return category;
    }
}
export default new CategoryService();
