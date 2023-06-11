const createRecipe = (req, res) => {
    res.send('Create Recipe');
};

const updateRecipe = (req, res) => {
    res.send('updates Recipe');
};

const getRecipe = (req, res) => {
    res.send('get one recipe');
}

const getAllRecipe = (req, res) => {
    res.send('Get all recipe');
};

const deleteRecipe = (req, res) => {
    res.send('delete recipe');
}


module.exports = {
    createRecipe,
    updateRecipe,
    getRecipe,
    getAllRecipe,
    deleteRecipe
}
