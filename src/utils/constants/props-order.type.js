import PropTypes from "prop-types";

const orderResponseTypes = PropTypes.shape({
    success: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    order: PropTypes.shape({
        number: PropTypes.number.isRequired
    })
})

export default orderResponseTypes;