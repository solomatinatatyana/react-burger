import PropTypes from "prop-types";

const ingredientTypes = PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    count: PropTypes.number
});

const orderTypes = PropTypes.shape({
    number: PropTypes.number.isRequired
})

const orderResponseTypes = PropTypes.shape({
    success: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    order: orderTypes.isRequired
})

export default {ingredientTypes, orderResponseTypes};

